function lazyLoad(){console.log("lazyLoad")}function smallerRender(e){console.log("smallerRender")}function columnLayout(e){return console.log("column layout"),e>4?console.log("a column layout number bigger than 4 was selected. Please select a number between 1 and 4"):e<1?console.log("a column layout number smaller than 1 was selected. Please select a number between 1 and 4"):void 0}function runSleekGallery(e){e.lazyLoad&&lazyLoad(),e.smallerRender&&smallerRender(e.smallerRenderCompression),columnLayout(e.columnLayout)}$.fn.sleekGallery=function(e){e||runSleekGallery({lazyLoad:!0,smallerRender:!1,smallerRenderCompression:80,columnLayout:3,galleryName:"sleekGallery"})};