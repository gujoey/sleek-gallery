function lazyLoad(){console.log("lazyLoad")}function columnLayout(a){console.log(a),a>4?console.log("a column layout number bigger than 4 was selected. Please select a number between 1 and 4"):a<1?console.log("a column layout number smaller than 1 was selected. Please select a number between 1 and 4"):($("#sleek-gallery").toggleClass("sleek-gallery--"+a+"-col"),$("#sleek-gallery img").each(function(){let a=randomSize(200,400),l=randomSize(200,400);$(this).css({width:a,height:l})}))}function randomSize(a,l){return Math.round(Math.random()*(l-a)+a)}function runSleekGallery(a){a.lazyLoad&&lazyLoad(),columnLayout(a.columnLayout)}$.fn.sleekGallery=function(a){let l,o;l={},o={lazyLoad:!0,columnLayout:3},a?(o.lazyLoad===a.lazyLoad?l.lazyLoad=o.lazyLoad:a.lazyLoad?l.lazyLoad=a.lazyLoad:l.lazyLoad=o.lazyLoad,o.columnLayout===a.columnLayout?l.columnLayout=o.columnLayout:a.columnLayout?l.columnLayout=a.columnLayout:l.columnLayout=o.columnLayout):l=o,runSleekGallery(l)};