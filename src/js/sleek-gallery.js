//initialize sleek-gallery function
$.fn.sleekGallery = function(initObj){
	let init, initDefault;
	
	init = {};
	initDefault = {
		lazyLoad: true,
		columnLayout: 3,
	};
	
	if (!initObj){
		init = initDefault;
	}else{
		if (initDefault.lazyLoad === initObj.lazyLoad){
			init.lazyLoad = initDefault.lazyLoad;
		}else if(!initObj.lazyLoad && !initObj.lazyLoad===false){
			init.lazyLoad = initDefault.lazyLoad;
		}else{
			init.lazyLoad = initObj.lazyLoad;
		}
		
		if (initDefault.columnLayout === initObj.columnLayout){
			init.columnLayout = initDefault.columnLayout;
		}else if(!initObj.columnLayout && !initObj.columnLayout===0){
			init.columnLayout = initDefault.columnLayout;
		}else{
			init.columnLayout = initObj.columnLayout;
		}
	}
	
	runSleekGallery(init);
}

//lazyload function
function lazyLoad(){
	let sleekGallery = $('#sleek-gallery img');
	sleekGallery.each(function(){
		let src = $(this).attr('src');
		
		$(this).toggleClass('lazy');
		$(this).attr('data-src', src);
		$(this).removeAttr('src');
	});
	
	let lazyLoad = new LazyLoad({
    	elements_selector: '.lazy'
	});
}

	
//image column layout function
function columnLayout(amt){
	if (amt > 5){
		console.error("a column layout number bigger than 5 was selected. Please select a number between 1 and 5");
		return
	}else if (amt < 1){
		console.error("a column layout number smaller than 1 was selected. Please select a number between 1 and 5");
		return
	}
	
	$("#sleek-gallery").toggleClass("sleek-gallery--"+amt+"-col");

	$('#sleek-gallery img').each(function(){
		let width = randomSize(200, 400);
		let height =  randomSize(200, 400);
		$(this).css({'width':width, 'height': height});
	});
}

//random size function
function randomSize(min, max) {
	return Math.round(Math.random() * (max - min) + min);
}

//run sleek-gallery function
function runSleekGallery(obj){
	if (obj.lazyLoad){
		lazyLoad();
	}else{
		$('#sleek-gallery img').each(function(){
			$(this).toggleClass("loaded");
		});
	}
	columnLayout(obj.columnLayout);
}