/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/css/bootstrap.css */ \"./src/css/bootstrap.css\");\n/* harmony import */ var _src_css_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/css/style.css */ \"./src/css/style.css\");\n/* harmony import */ var _src_js_jquery_waypoints_min_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/js/jquery.waypoints.min.js */ \"./src/js/jquery.waypoints.min.js\");\n/* harmony import */ var _src_js_jquery_waypoints_min_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_src_js_jquery_waypoints_min_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _src_js_progresscircle_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/js/progresscircle.js */ \"./src/js/progresscircle.js\");\n/* harmony import */ var _src_js_progresscircle_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_src_js_progresscircle_js__WEBPACK_IMPORTED_MODULE_3__);\n\r\n\r\n\r\n\r\n\r\n\r\n// Get the current year for the copyright\r\n$('#year').text(new Date().getFullYear());\r\n// sticky nav\r\n$('.js--sticky-nav').waypoint(\r\n  function (direction) {\r\n    if (direction == 'down') {\r\n      $('nav').addClass('sticky');\r\n    } else {\r\n      $('nav').removeClass('sticky');\r\n    }\r\n  },\r\n  {\r\n    offset: '25%',\r\n  }\r\n);\r\n//init slick slider\r\n$('.slider').slick({\r\n  dots: true,\r\n  infinite: true,\r\n  autoplay: true,\r\n  slidesToShow: 5,\r\n  slidesToScroll: 1,\r\n  prevArrow:\r\n    '<span class=\"prev_arrow\"><i class=\"fas fa-angle-left\"></i></span>',\r\n  nextArrow:\r\n    '<span class=\"next_arrow\"><i class=\"fas fa-angle-right\"></i></span>',\r\n  responsive: [\r\n    {\r\n      breakpoint: 1124,\r\n      settings: {\r\n        slidesToShow: 3,\r\n        slidesToScroll: 1,\r\n        infinite: true,\r\n      },\r\n    },\r\n    {\r\n      breakpoint: 600,\r\n      settings: {\r\n        slidesToShow: 1,\r\n        slidesToScroll: 1,\r\n      },\r\n    },\r\n    {\r\n      breakpoint: 480,\r\n      settings: {\r\n        slidesToShow: 1,\r\n        slidesToScroll: 1,\r\n      },\r\n    },\r\n  ],\r\n});\r\n// responsive nav\r\nconst hamburger = document.querySelector('.hamburger');\r\nconst navLinks = document.querySelector('.navbar-nav');\r\nconst links = document.querySelectorAll('.nav-item');\r\n\r\nhamburger.addEventListener('click', () => {\r\n  navLinks.classList.toggle('open');\r\n});\n\n//# sourceURL=webpack://jas-frontend-bonedejesus/./main.js?");

/***/ }),

/***/ "./src/css/bootstrap.css":
/*!*******************************!*\
  !*** ./src/css/bootstrap.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://jas-frontend-bonedejesus/./src/css/bootstrap.css?");

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://jas-frontend-bonedejesus/./src/css/style.css?");

/***/ }),

/***/ "./src/js/jquery.waypoints.min.js":
/*!****************************************!*\
  !*** ./src/js/jquery.waypoints.min.js ***!
  \****************************************/
/***/ (() => {

eval("/*!\nWaypoints - 4.0.1\nCopyright © 2011-2016 Caleb Troughton\nLicensed under the MIT license.\nhttps://github.com/imakewebthings/waypoints/blob/master/licenses.txt\n*/\n!function(){\"use strict\";function t(o){if(!o)throw new Error(\"No options passed to Waypoint constructor\");if(!o.element)throw new Error(\"No element option passed to Waypoint constructor\");if(!o.handler)throw new Error(\"No handler option passed to Waypoint constructor\");this.key=\"waypoint-\"+e,this.options=t.Adapter.extend({},t.defaults,o),this.element=this.options.element,this.adapter=new t.Adapter(this.element),this.callback=o.handler,this.axis=this.options.horizontal?\"horizontal\":\"vertical\",this.enabled=this.options.enabled,this.triggerPoint=null,this.group=t.Group.findOrCreate({name:this.options.group,axis:this.axis}),this.context=t.Context.findOrCreateByElement(this.options.context),t.offsetAliases[this.options.offset]&&(this.options.offset=t.offsetAliases[this.options.offset]),this.group.add(this),this.context.add(this),i[this.key]=this,e+=1}var e=0,i={};t.prototype.queueTrigger=function(t){this.group.queueTrigger(this,t)},t.prototype.trigger=function(t){this.enabled&&this.callback&&this.callback.apply(this,t)},t.prototype.destroy=function(){this.context.remove(this),this.group.remove(this),delete i[this.key]},t.prototype.disable=function(){return this.enabled=!1,this},t.prototype.enable=function(){return this.context.refresh(),this.enabled=!0,this},t.prototype.next=function(){return this.group.next(this)},t.prototype.previous=function(){return this.group.previous(this)},t.invokeAll=function(t){var e=[];for(var o in i)e.push(i[o]);for(var n=0,r=e.length;r>n;n++)e[n][t]()},t.destroyAll=function(){t.invokeAll(\"destroy\")},t.disableAll=function(){t.invokeAll(\"disable\")},t.enableAll=function(){t.Context.refreshAll();for(var e in i)i[e].enabled=!0;return this},t.refreshAll=function(){t.Context.refreshAll()},t.viewportHeight=function(){return window.innerHeight||document.documentElement.clientHeight},t.viewportWidth=function(){return document.documentElement.clientWidth},t.adapters=[],t.defaults={context:window,continuous:!0,enabled:!0,group:\"default\",horizontal:!1,offset:0},t.offsetAliases={\"bottom-in-view\":function(){return this.context.innerHeight()-this.adapter.outerHeight()},\"right-in-view\":function(){return this.context.innerWidth()-this.adapter.outerWidth()}},window.Waypoint=t}(),function(){\"use strict\";function t(t){window.setTimeout(t,1e3/60)}function e(t){this.element=t,this.Adapter=n.Adapter,this.adapter=new this.Adapter(t),this.key=\"waypoint-context-\"+i,this.didScroll=!1,this.didResize=!1,this.oldScroll={x:this.adapter.scrollLeft(),y:this.adapter.scrollTop()},this.waypoints={vertical:{},horizontal:{}},t.waypointContextKey=this.key,o[t.waypointContextKey]=this,i+=1,n.windowContext||(n.windowContext=!0,n.windowContext=new e(window)),this.createThrottledScrollHandler(),this.createThrottledResizeHandler()}var i=0,o={},n=window.Waypoint,r=window.onload;e.prototype.add=function(t){var e=t.options.horizontal?\"horizontal\":\"vertical\";this.waypoints[e][t.key]=t,this.refresh()},e.prototype.checkEmpty=function(){var t=this.Adapter.isEmptyObject(this.waypoints.horizontal),e=this.Adapter.isEmptyObject(this.waypoints.vertical),i=this.element==this.element.window;t&&e&&!i&&(this.adapter.off(\".waypoints\"),delete o[this.key])},e.prototype.createThrottledResizeHandler=function(){function t(){e.handleResize(),e.didResize=!1}var e=this;this.adapter.on(\"resize.waypoints\",function(){e.didResize||(e.didResize=!0,n.requestAnimationFrame(t))})},e.prototype.createThrottledScrollHandler=function(){function t(){e.handleScroll(),e.didScroll=!1}var e=this;this.adapter.on(\"scroll.waypoints\",function(){(!e.didScroll||n.isTouch)&&(e.didScroll=!0,n.requestAnimationFrame(t))})},e.prototype.handleResize=function(){n.Context.refreshAll()},e.prototype.handleScroll=function(){var t={},e={horizontal:{newScroll:this.adapter.scrollLeft(),oldScroll:this.oldScroll.x,forward:\"right\",backward:\"left\"},vertical:{newScroll:this.adapter.scrollTop(),oldScroll:this.oldScroll.y,forward:\"down\",backward:\"up\"}};for(var i in e){var o=e[i],n=o.newScroll>o.oldScroll,r=n?o.forward:o.backward;for(var s in this.waypoints[i]){var a=this.waypoints[i][s];if(null!==a.triggerPoint){var l=o.oldScroll<a.triggerPoint,h=o.newScroll>=a.triggerPoint,p=l&&h,u=!l&&!h;(p||u)&&(a.queueTrigger(r),t[a.group.id]=a.group)}}}for(var c in t)t[c].flushTriggers();this.oldScroll={x:e.horizontal.newScroll,y:e.vertical.newScroll}},e.prototype.innerHeight=function(){return this.element==this.element.window?n.viewportHeight():this.adapter.innerHeight()},e.prototype.remove=function(t){delete this.waypoints[t.axis][t.key],this.checkEmpty()},e.prototype.innerWidth=function(){return this.element==this.element.window?n.viewportWidth():this.adapter.innerWidth()},e.prototype.destroy=function(){var t=[];for(var e in this.waypoints)for(var i in this.waypoints[e])t.push(this.waypoints[e][i]);for(var o=0,n=t.length;n>o;o++)t[o].destroy()},e.prototype.refresh=function(){var t,e=this.element==this.element.window,i=e?void 0:this.adapter.offset(),o={};this.handleScroll(),t={horizontal:{contextOffset:e?0:i.left,contextScroll:e?0:this.oldScroll.x,contextDimension:this.innerWidth(),oldScroll:this.oldScroll.x,forward:\"right\",backward:\"left\",offsetProp:\"left\"},vertical:{contextOffset:e?0:i.top,contextScroll:e?0:this.oldScroll.y,contextDimension:this.innerHeight(),oldScroll:this.oldScroll.y,forward:\"down\",backward:\"up\",offsetProp:\"top\"}};for(var r in t){var s=t[r];for(var a in this.waypoints[r]){var l,h,p,u,c,d=this.waypoints[r][a],f=d.options.offset,w=d.triggerPoint,y=0,g=null==w;d.element!==d.element.window&&(y=d.adapter.offset()[s.offsetProp]),\"function\"==typeof f?f=f.apply(d):\"string\"==typeof f&&(f=parseFloat(f),d.options.offset.indexOf(\"%\")>-1&&(f=Math.ceil(s.contextDimension*f/100))),l=s.contextScroll-s.contextOffset,d.triggerPoint=Math.floor(y+l-f),h=w<s.oldScroll,p=d.triggerPoint>=s.oldScroll,u=h&&p,c=!h&&!p,!g&&u?(d.queueTrigger(s.backward),o[d.group.id]=d.group):!g&&c?(d.queueTrigger(s.forward),o[d.group.id]=d.group):g&&s.oldScroll>=d.triggerPoint&&(d.queueTrigger(s.forward),o[d.group.id]=d.group)}}return n.requestAnimationFrame(function(){for(var t in o)o[t].flushTriggers()}),this},e.findOrCreateByElement=function(t){return e.findByElement(t)||new e(t)},e.refreshAll=function(){for(var t in o)o[t].refresh()},e.findByElement=function(t){return o[t.waypointContextKey]},window.onload=function(){r&&r(),e.refreshAll()},n.requestAnimationFrame=function(e){var i=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||t;i.call(window,e)},n.Context=e}(),function(){\"use strict\";function t(t,e){return t.triggerPoint-e.triggerPoint}function e(t,e){return e.triggerPoint-t.triggerPoint}function i(t){this.name=t.name,this.axis=t.axis,this.id=this.name+\"-\"+this.axis,this.waypoints=[],this.clearTriggerQueues(),o[this.axis][this.name]=this}var o={vertical:{},horizontal:{}},n=window.Waypoint;i.prototype.add=function(t){this.waypoints.push(t)},i.prototype.clearTriggerQueues=function(){this.triggerQueues={up:[],down:[],left:[],right:[]}},i.prototype.flushTriggers=function(){for(var i in this.triggerQueues){var o=this.triggerQueues[i],n=\"up\"===i||\"left\"===i;o.sort(n?e:t);for(var r=0,s=o.length;s>r;r+=1){var a=o[r];(a.options.continuous||r===o.length-1)&&a.trigger([i])}}this.clearTriggerQueues()},i.prototype.next=function(e){this.waypoints.sort(t);var i=n.Adapter.inArray(e,this.waypoints),o=i===this.waypoints.length-1;return o?null:this.waypoints[i+1]},i.prototype.previous=function(e){this.waypoints.sort(t);var i=n.Adapter.inArray(e,this.waypoints);return i?this.waypoints[i-1]:null},i.prototype.queueTrigger=function(t,e){this.triggerQueues[e].push(t)},i.prototype.remove=function(t){var e=n.Adapter.inArray(t,this.waypoints);e>-1&&this.waypoints.splice(e,1)},i.prototype.first=function(){return this.waypoints[0]},i.prototype.last=function(){return this.waypoints[this.waypoints.length-1]},i.findOrCreate=function(t){return o[t.axis][t.name]||new i(t)},n.Group=i}(),function(){\"use strict\";function t(t){this.$element=e(t)}var e=window.jQuery,i=window.Waypoint;e.each([\"innerHeight\",\"innerWidth\",\"off\",\"offset\",\"on\",\"outerHeight\",\"outerWidth\",\"scrollLeft\",\"scrollTop\"],function(e,i){t.prototype[i]=function(){var t=Array.prototype.slice.call(arguments);return this.$element[i].apply(this.$element,t)}}),e.each([\"extend\",\"inArray\",\"isEmptyObject\"],function(i,o){t[o]=e[o]}),i.adapters.push({name:\"jquery\",Adapter:t}),i.Adapter=t}(),function(){\"use strict\";function t(t){return function(){var i=[],o=arguments[0];return t.isFunction(arguments[0])&&(o=t.extend({},arguments[1]),o.handler=arguments[0]),this.each(function(){var n=t.extend({},o,{element:this});\"string\"==typeof n.context&&(n.context=t(this).closest(n.context)[0]),i.push(new e(n))}),i}}var e=window.Waypoint;window.jQuery&&(window.jQuery.fn.waypoint=t(window.jQuery)),window.Zepto&&(window.Zepto.fn.waypoint=t(window.Zepto))}();\n\n//# sourceURL=webpack://jas-frontend-bonedejesus/./src/js/jquery.waypoints.min.js?");

/***/ }),

/***/ "./src/js/progresscircle.js":
/*!**********************************!*\
  !*** ./src/js/progresscircle.js ***!
  \**********************************/
/***/ (() => {

eval("function makesvg(percentage, inner_text=\"\"){\n\n  var abs_percentage = Math.abs(percentage).toString();\n  var percentage_str = percentage.toString();\n  var classes = \"\"\n\n  if(percentage < 0){\n    classes = \"danger-stroke circle-chart__circle--negative\";\n  } else if(percentage > 0 && percentage <= 30){\n    classes = \"warning-stroke\";\n  } else{\n    classes = \"success-stroke\";\n  }\n\n var svg = '<svg class=\"circle-chart\" viewbox=\"0 0 33.83098862 33.83098862\" xmlns=\"http://www.w3.org/2000/svg\">'\n     + '<circle class=\"circle-chart__background\" cx=\"16.9\" cy=\"16.9\" r=\"15.9\" />'\n     + '<circle class=\"circle-chart__circle '+classes+'\"'\n     + 'stroke-dasharray=\"'+ abs_percentage+',100\"    cx=\"16.9\" cy=\"16.9\" r=\"15.9\" />'\n     + '<g class=\"circle-chart__info\">'\n     + '   <text class=\"circle-chart__percent\" x=\"17.9\" y=\"15.5\">'+percentage_str+'%</text>';\n\n  if(inner_text){\n    svg += '<text class=\"circle-chart__subline\" x=\"16.91549431\" y=\"22\">'+inner_text+'</text>'\n  }\n  \n  svg += ' </g></svg>';\n  \n  return svg\n}\n\n(function( $ ) {\n\n    $.fn.circlechart = function() {\n        this.each(function() {\n            var percentage = $(this).data(\"percentage\");\n            var inner_text = $(this).text();\n            $(this).html(makesvg(percentage, inner_text));\n        });\n        return this;\n    };\n\n}( jQuery ));\n\n//# sourceURL=webpack://jas-frontend-bonedejesus/./src/js/progresscircle.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./main.js");
/******/ 	
/******/ })()
;