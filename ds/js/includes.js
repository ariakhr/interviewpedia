var dataJS = [
	'./data/java/topics.json.js',
	'./data/java/array.json.js',
	'./data/java/string.json.js',
	'./data/java/linkedlist.json.js',
	
	'./data/java/tree.json.js',
	'./data/java/graph.json.js',
	'./data/java/set.json.js',
	'./data/java/heap.json.js',
	'./data/java/oops.json.js',
	'./data/java/test.json.js',
];

var systemJS = [
	'./js/jquery-ui-1.10.4.custom/js/jquery-ui-1.10.4.custom.min.js', 
	'./js/splitter/jquery.splitter-0.14.0.js', 
	'./js/google-code-prettify/run_prettify.js?skin=sons-of-obsidian', 
	'./js/google-code-prettify/prettify.js', 
	'./js/jquery.tagcanvas.min.js',
	'./js/tutor.js'
];

var css = [
	'./js/jquery-ui-1.10.4.custom/css/my-theme/jquery-ui-1.10.4.custom.min.css', 
	'./js/splitter/jquery.splitter.css', 
	'./js/google-code-prettify/prettify.css', 
	'./css/verticalTabs.css',
	'./css/interviewpedia.css'
];

function loadJS(arr){
	$.each(arr, function(i, js){
		var script = document.createElement('script');
		script.type = 'text/javascript';
		script.src = js;
		$('head')[0].appendChild(script);
	});
}

function loadCSS(arr){
	$.each(arr, function(i, css){
		var link = document.createElement('link');
		link.rel = 'stylesheet';
		link.href = css;
		$('head')[0].appendChild(link);
	});
}
