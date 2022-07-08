/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ (function(module) {

"use strict";
module.exports = jQuery;

/***/ }),
/* 2 */
/***/ (function(__unused_webpack_module, exports) {

/*
* Debounce
* need for once call function
*
* @param { function } - callback function
* @param { number } - timeout time (ms)
* @return { function }
*/
function debounce(func, timeout) {
  var timeoutID,
      timeout = timeout || 200;
  return function () {
    var scope = this,
        args = arguments;
    clearTimeout(timeoutID);
    timeoutID = setTimeout(function () {
      func.apply(scope, Array.prototype.slice.call(args));
    }, timeout);
  };
}

exports.debounce = debounce;

/***/ })
/******/ 	]);
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
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_debounce_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);


jQuery(function () {
  var str = "window location is ".concat(window.location);
  console.log(_modules_debounce_js__WEBPACK_IMPORTED_MODULE_1__.debounce);
  console.log(str);
  console.log(jquery__WEBPACK_IMPORTED_MODULE_0___default()("body"));
  console.log(Math.pow(7, 2));
});
}();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kdWxlcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTQSxRQUFULENBQWtCQyxJQUFsQixFQUF3QkMsT0FBeEIsRUFBaUM7QUFDaEMsTUFBSUMsU0FBSjtBQUFBLE1BQ0NELE9BQU8sR0FBR0EsT0FBTyxJQUFJLEdBRHRCO0FBRUEsU0FBTyxZQUFXO0FBQ2pCLFFBQUlFLEtBQUssR0FBRyxJQUFaO0FBQUEsUUFDQ0MsSUFBSSxHQUFHQyxTQURSO0FBRUFDLElBQUFBLFlBQVksQ0FBQ0osU0FBRCxDQUFaO0FBQ0FBLElBQUFBLFNBQVMsR0FBR0ssVUFBVSxDQUFDLFlBQVc7QUFDakNQLE1BQUFBLElBQUksQ0FBQ1EsS0FBTCxDQUFXTCxLQUFYLEVBQWtCTSxLQUFLLENBQUNDLFNBQU4sQ0FBZ0JDLEtBQWhCLENBQXNCQyxJQUF0QixDQUEyQlIsSUFBM0IsQ0FBbEI7QUFDQSxLQUZxQixFQUVuQkgsT0FGbUIsQ0FBdEI7QUFHQSxHQVBEO0FBUUE7O0FBRURZLGdCQUFBLEdBQW1CZCxRQUFuQjs7Ozs7VUNyQkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0EsZUFBZSw0QkFBNEI7V0FDM0MsZUFBZTtXQUNmLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQSw4Q0FBOEM7Ozs7O1dDQTlDO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUVBZ0IsTUFBTSxDQUFDLFlBQVk7QUFDbEIsTUFBSUMsR0FBRyxnQ0FBeUJDLE1BQU0sQ0FBQ0MsUUFBaEMsQ0FBUDtBQUNBQyxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWXJCLDBEQUFaO0FBQ0FvQixFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUosR0FBWjtBQUNBRyxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWU4sNkNBQUMsQ0FBQyxNQUFELENBQWI7QUFDQUssRUFBQUEsT0FBTyxDQUFDQyxHQUFSLFVBQVksQ0FBWixFQUFpQixDQUFqQjtBQUNBLENBTkssQ0FBTixDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV3LXZlcnNpb24tdGVwbGF0ZS9leHRlcm5hbCB2YXIgXCJqUXVlcnlcIiIsIndlYnBhY2s6Ly9uZXctdmVyc2lvbi10ZXBsYXRlLy4vc3JjL2pzL21vZHVsZXMvZGVib3VuY2UuanMiLCJ3ZWJwYWNrOi8vbmV3LXZlcnNpb24tdGVwbGF0ZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9uZXctdmVyc2lvbi10ZXBsYXRlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL25ldy12ZXJzaW9uLXRlcGxhdGUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL25ldy12ZXJzaW9uLXRlcGxhdGUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9uZXctdmVyc2lvbi10ZXBsYXRlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbmV3LXZlcnNpb24tdGVwbGF0ZS8uL3NyYy9qcy9tb2R1bGVzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0galF1ZXJ5OyIsIi8qXG4qIERlYm91bmNlXG4qIG5lZWQgZm9yIG9uY2UgY2FsbCBmdW5jdGlvblxuKlxuKiBAcGFyYW0geyBmdW5jdGlvbiB9IC0gY2FsbGJhY2sgZnVuY3Rpb25cbiogQHBhcmFtIHsgbnVtYmVyIH0gLSB0aW1lb3V0IHRpbWUgKG1zKVxuKiBAcmV0dXJuIHsgZnVuY3Rpb24gfVxuKi9cbmZ1bmN0aW9uIGRlYm91bmNlKGZ1bmMsIHRpbWVvdXQpIHtcblx0dmFyIHRpbWVvdXRJRCxcblx0XHR0aW1lb3V0ID0gdGltZW91dCB8fCAyMDA7XG5cdHJldHVybiBmdW5jdGlvbigpIHtcblx0XHR2YXIgc2NvcGUgPSB0aGlzLFxuXHRcdFx0YXJncyA9IGFyZ3VtZW50cztcblx0XHRjbGVhclRpbWVvdXQodGltZW91dElEKTtcblx0XHR0aW1lb3V0SUQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXHRcdFx0ZnVuYy5hcHBseShzY29wZSwgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJncykpO1xuXHRcdH0sIHRpbWVvdXQpO1xuXHR9O1xufVxuXG5leHBvcnRzLmRlYm91bmNlID0gZGVib3VuY2U7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHRmdW5jdGlvbigpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcblx0XHRmdW5jdGlvbigpIHsgcmV0dXJuIG1vZHVsZTsgfTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIGRlZmluaXRpb24pIHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqLCBwcm9wKSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKTsgfSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICQgZnJvbSBcImpxdWVyeVwiO1xuaW1wb3J0IHsgZGVib3VuY2UgfSBmcm9tIFwiLi9tb2R1bGVzL2RlYm91bmNlLmpzXCI7XG5cbmpRdWVyeShmdW5jdGlvbiAoKSB7XG5cdGxldCBzdHIgPSBgd2luZG93IGxvY2F0aW9uIGlzICR7d2luZG93LmxvY2F0aW9ufWA7XG5cdGNvbnNvbGUubG9nKGRlYm91bmNlKTtcblx0Y29uc29sZS5sb2coc3RyKTtcblx0Y29uc29sZS5sb2coJChcImJvZHlcIikpO1xuXHRjb25zb2xlLmxvZyg3ICoqIDIpO1xufSk7XG4iXSwibmFtZXMiOlsiZGVib3VuY2UiLCJmdW5jIiwidGltZW91dCIsInRpbWVvdXRJRCIsInNjb3BlIiwiYXJncyIsImFyZ3VtZW50cyIsImNsZWFyVGltZW91dCIsInNldFRpbWVvdXQiLCJhcHBseSIsIkFycmF5IiwicHJvdG90eXBlIiwic2xpY2UiLCJjYWxsIiwiZXhwb3J0cyIsIiQiLCJqUXVlcnkiLCJzdHIiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9