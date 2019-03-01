**sleek-gallery** is a responsive and eays to set up jQuery gallery plugin that will make your gallery look **sleek**. The plugin also uses [lazyload](https://github.com/verlok/lazyload) which will speed up your webpage load time. New features is cooming soon.

[Getting started](#getting-started) | [Options](#options) | [Demo](#demo) | [Features](#features) | [Browser compability](#browser-compability)
***
# Getting started
In order to use the plugin you will need to add **jQuery.js**, **lazyload.js** and **sleek-gallery.js** as well as **sleek-gallery.css** to your html file.

You can use the links provided below to get **jQuery.js** and **lazyload.js**
```html
<html>
	<head>
		<!--sleek-gallery.min.css-->
		<link rel="stylesheet" href="dist/css/sleek-gallery.min.css">
	</head>
	<body>
		<!--jQuery.js-->
		<script 
			src="https://code.jquery.com/jquery-3.3.1.min.js" 
			integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" 
			crossorigin="anonymous">
		</script>

		<!--lazyload.js-->
		<script src="https://cdn.jsdelivr.net/npm/vanilla-lazyload@11.0.2/dist/lazyload.min.js"></script>

		<!--sleek-gallery-min.js-->
		<script src="dist/js/sleek-gallery-min.js"></script>

		<!--your own script-->
		<script src="script.js"></script>
	</body>
</html>
```
**NB:** It's important that the script structure is the same as above and its recomended that you put the scripts in the bottom right before the `</body>` tag.

You will have to download the [sleek-gallery.js](dist/js) and [sleek-gallery.css](dist/css) from the [dist](dist) directory in this repository. The files are provided in regular .js and .css files in addition to minified versions of the files. It's recomended that you use the minified versions.


Once you have installed the .js and .css files, you will have to wrap your images inside a  `<div>`  with the **id** and **class** of **sleek-gallery**

```html
<div id="sleek-gallery" class="sleek-gallery">
	<img src="img/sleek-1.jpeg" alt="1">
	<img src="img/sleek-2.jpg" alt="2">
	<img src="img/sleek-3.jpeg" alt="3">
</div>
```


After you have wrapped your images inside the div, you will have to initialize the plugin in through your own script

```javascript
$(document).ready(function() {
	$('#sleek-gallery').sleekGallery();
});
```

By default the plugin is set to a **three column layout** with **lazyload** set to true. If you would like to customize this, see [options](#goptions).


Since the plugin is **responsive**, there  will be breakpoints where the plugin might change the the column layout dependant on what initial column layout you have chosen.

**break points:**
- >0px to 376px //1 column layout
- >376px to 415px //2 column layout 
- >415px to 769px //3 column layout
- >769px to 1081px //4 column layout 
- >above 1081px //5 column layout

# Options
The default options of the plugin sets lazyloading to `true` and the column layout to `3`. If you want to change this you can do this by adding arguments in the form of an object to the initialization script

```javascript
$(document).ready(function() {
	$('#sleek-gallery').sleekGallery({
		lazyLoad: false,
		columnLayout: 4
	});
});
```

**NB:** the columm layout only accepts layouts between 1 and 5.


If you only want to change one option than you can add only that option to the object. The second option will then fall back to default.

```javascript
$(document).ready(function() {
	$('#sleek-gallery').sleekGallery({
		columnLayout: 4
	});
});
```



**options**
```javascript
{
	lazyLoad: false, //boolean
	columnLayout: 4 //integer between 1 and 5
}
```



# Demo
In the demos below, lazyLoad is set to `true`
- [1 column layout](https://sleek.ogujord.no/one-col/)
- [2 column layout](https://sleek.ogujord.no/two-col/)
- [3 column layout](https://sleek.ogujord.no/three-col/)
- [4 column layout](https://sleek.ogujord.no/four-col/)
- [5 column layout](https://sleek.ogujord.no/five-col/)

# Features
The plugin comes with these features:
- lazyLoad
- resposive images
- randomize image size

Features to come in the future:
- image borders
- image margins
- hover options
- load animations
- lazy load in browsers not supporting Intersection Observer API

To see which browser supports the sleek-gallery pluign see [browser compability](#browser-compability)


# Browser compability
|fucntion        |IE  11         |Edge  18       | Firefox  64|Safari  ≤11 12|Opera  57|Chrome  71|iOS  ≤10 11 12|Android  ≤3 4|
| -------------  |:-------------:| -------------:|:----------:|:-----------:|:------:|:-------:|:-----------:|:----------:|
|lazyLoad        | ❌            | ✅            | ✅        |❌           |❌     |✅       |❌          |✅          |
|sleek-gallery	 | ✅            | ✅           | ✅         |✅          |✅      |✅       |✅          |✅          |

[lazyload](https://github.com/verlok/lazyload) uses the [Intersection Observer API
](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API) to lazy load the images. Not all browsers support this yet. If the browser doesn't supprt Intersection Observer API, lazyLoad will automatically be turned off.

Support for lazy load in browsers not supporting Intersection Observer API will be a feature that is coming in the future
