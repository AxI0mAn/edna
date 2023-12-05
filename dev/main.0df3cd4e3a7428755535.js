/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_view_guided_shoping_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/view/guided_shoping.scss */ "./src/styles/view/guided_shoping.scss");
/* harmony import */ var _styles_view_home_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/view/home.scss */ "./src/styles/view/home.scss");
/* harmony import */ var _styles_view_special_styling_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/view/special_styling.scss */ "./src/styles/view/special_styling.scss");
/* harmony import */ var _styles_view_style_session_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/view/style_session.scss */ "./src/styles/view/style_session.scss");
/* harmony import */ var _styles_view_wardrobe_edit_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/view/wardrobe_edit.scss */ "./src/styles/view/wardrobe_edit.scss");
/* harmony import */ var _scripts_navigation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./scripts/navigation */ "./src/scripts/navigation.js");
/* harmony import */ var _scripts_mod_testimonial__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./scripts/mod_testimonial */ "./src/scripts/mod_testimonial.js");
/* harmony import */ var _scripts_video_play__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./scripts/video_play */ "./src/scripts/video_play.js");
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.mjs");
/* harmony import */ var swiper_modules__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! swiper/modules */ "./node_modules/swiper/modules/index.mjs");
/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! swiper/css */ "./node_modules/swiper/swiper.css");





//=======================================

(0,_scripts_navigation__WEBPACK_IMPORTED_MODULE_5__["default"])();

(0,_scripts_mod_testimonial__WEBPACK_IMPORTED_MODULE_6__["default"])();

(0,_scripts_video_play__WEBPACK_IMPORTED_MODULE_7__["default"])();
//=======================================



new swiper__WEBPACK_IMPORTED_MODULE_8__["default"]('.approach_swiper', {
  modules: [swiper_modules__WEBPACK_IMPORTED_MODULE_9__.Navigation],
  loop: true,
  allowSlidePrev: true,
  slideToClickedSlide: true,
  centeredSlides: true,
  centerInsufficientSlides: true,
  slidesPerView: 0,
  spaceBetween: 60,
  speed: 1000,
  navigation: {
    nextEl: '.arrow_right',
    prevEl: '.arrow_left'
  }
});
new swiper__WEBPACK_IMPORTED_MODULE_8__["default"]('.testimonials_swiper', {
  loop: true,
  allowSlidePrev: true,
  slideToClickedSlide: true,
  centeredSlides: true,
  centerInsufficientSlides: true,
  slidesPerView: 0,
  spaceBetween: 60,
  speed: 1000
});

/***/ }),

/***/ "./src/scripts/mod_testimonial.js":
/*!****************************************!*\
  !*** ./src/scripts/mod_testimonial.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ mod_testimonial)
/* harmony export */ });
function mod_testimonial() {
  const cont = document.querySelector('#testimonials_content');
  const block = document.querySelector('#testimonial_case');
  const elem = document.querySelector('.folower');
  let current = 0;
  if (block) {
    elem.addEventListener('click', () => {
      current++;
      if (current >= 1) {
        block.className = 'testimonial_case show_vertical';
        cont.className = 'testimonials_content show_vertical';
      }
    });
  }
}

/***/ }),

/***/ "./src/scripts/navigation.js":
/*!***********************************!*\
  !*** ./src/scripts/navigation.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ home_nav)
/* harmony export */ });
function home_nav() {
  const nav_btn = document.querySelector('#nav_btn_home');
  const nav = document.querySelector('nav');
  if (nav_btn) {
    nav_btn.addEventListener('click', () => {
      let nav_pos = nav.classList;
      if (nav_pos == 'close_nav') {
        nav.className = 'open_nav';
        nav_btn.className = 'nav_btn btn_close';
      } else {
        nav_btn.className = 'nav_btn btn_open';
        nav.className = 'close_nav';
      }
    });
  }
}

/***/ }),

/***/ "./src/scripts/video_play.js":
/*!***********************************!*\
  !*** ./src/scripts/video_play.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ video_play)
/* harmony export */ });
function video_play() {
  const vid = document.querySelector('video');
  const play_btn = document.querySelector('#play_btn');
  if (vid) {
    vid.addEventListener('click', () => {
      if (vid.paused) {
        vid.play();
        play_btn.classList.toggle('display_none');
      } else {
        vid.pause();
        play_btn.classList.toggle('display_none');
      }
    });
  }
}

/***/ }),

/***/ "./src/styles/view/guided_shoping.scss":
/*!*********************************************!*\
  !*** ./src/styles/view/guided_shoping.scss ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/styles/view/home.scss":
/*!***********************************!*\
  !*** ./src/styles/view/home.scss ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/styles/view/special_styling.scss":
/*!**********************************************!*\
  !*** ./src/styles/view/special_styling.scss ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/styles/view/style_session.scss":
/*!********************************************!*\
  !*** ./src/styles/view/style_session.scss ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/styles/view/wardrobe_edit.scss":
/*!********************************************!*\
  !*** ./src/styles/view/wardrobe_edit.scss ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkproject_name"] = self["webpackChunkproject_name"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_swiper_swiper_css-node_modules_swiper_modules_index_mjs-node_modules_swi-e8ef1e"], () => (__webpack_require__("./src/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.0df3cd4e3a7428755535.js.map