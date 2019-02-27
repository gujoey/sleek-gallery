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
		}else if(!initObj.lazyLoad){
			init.lazyLoad = initDefault.lazyLoad;
		}else{
			init.lazyLoad = initObj.lazyLoad;
		}
		
		if (initDefault.columnLayout === initObj.columnLayout){
			init.columnLayout = initDefault.columnLayout;
		}else if(!initObj.columnLayout){
			init.columnLayout = initDefault.columnLayout;
		}else{
			init.columnLayout = initObj.columnLayout;
		}
	}
	
	runSleekGallery(init);
}

//lazyload function
function lazyLoad(){
	console.log("lazyLoad");
}

//image layout function
function columnLayout(amt){
	console.log(amt);
	if (amt > 4){
		console.log("a column layout number bigger than 4 was selected. Please select a number between 1 and 4");
		return
	}else if (amt < 1){
		console.log("a column layout number smaller than 1 was selected. Please select a number between 1 and 4");
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
function runSleekGallery(initObj){
	if (initObj.lazyLoad){
		lazyLoad();
	}
	columnLayout(initObj.columnLayout);
}