$.fn.sleekGallery = function(initObj){
	let initDefault = {
		lazyLoad: true,
		smallerRender: false,
		smallerRenderCompression: 80,
		columnLayout: 3,
		galleryName: "sleekGallery"
	};
	
	if (!initObj){
		runSleekGallery(initDefault);
	}
}

function lazyLoad(){
	console.log("lazyLoad");
}
function smallerRender(size){
	console.log("smallerRender");
}

function columnLayout(amt){
	console.log("column layout");
	if (amt > 4){
		return console.log("a column layout number bigger than 4 was selected. Please select a number between 1 and 4");
	}else if (amt < 1){
		return console.log("a column layout number smaller than 1 was selected. Please select a number between 1 and 4");
	}
}

function runSleekGallery(initObj){
	if (initObj.lazyLoad){
		lazyLoad();
	}
	if(initObj.smallerRender){
		smallerRender(initObj.smallerRenderCompression);
	}
	columnLayout(initObj.columnLayout);
}