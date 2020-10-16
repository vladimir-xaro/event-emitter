/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/EventEmitter.ts":
/*!*****************************!*\
  !*** ./src/EventEmitter.ts ***!
  \*****************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ EventEmitter
/* harmony export */ });
class EventEmitter {
    /**
     * Create Emitter
     * @param {Object} config Configuration object
     */
    constructor(on = {}) {
        /**
         * Event list
         * @type IEventEmitterEvents
         */
        this.events = {};
        for (let key in on) {
            this.subscribe(key, on[key]);
        }
    }
    /** subscribe on event by key */
    subscribe(key, cb) {
        if (!this.events[key]) {
            this.events[key] = [];
        }
        this.events[key].push(cb);
        return {
            dispose: () => this.removeListener(key, cb)
        };
    }
    unsubscribe(key) {
        if (this.events[key]) {
            delete this.events[key];
        }
    }
    removeListener(key, cb) {
        // if (typeof this.events[key] === 'object') {
        if (Array.isArray(this.events[key])) {
            const idx = this.events[key].indexOf(cb);
            if (idx > -1) {
                this.events[key].splice(idx, 1);
            }
        }
    }
    once(key, cb) {
        const remove = this.subscribe(key, (data) => {
            remove.dispose();
            cb(data);
        });
    }
    has(key) {
        return !!this.events[key];
    }
    emit(key, ...args) {
        const event = this.events[key];
        if (event) {
            for (let cb of event) {
                cb(args);
            }
        }
    }
}


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _EventEmitter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EventEmitter */ "./src/EventEmitter.ts");

window.EventEmitter = _EventEmitter__WEBPACK_IMPORTED_MODULE_0__.default;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_EventEmitter__WEBPACK_IMPORTED_MODULE_0__.default);


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
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.ts");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AeGFyby9ldmVudC1lbWl0dGVyLy4vc3JjL0V2ZW50RW1pdHRlci50cyIsIndlYnBhY2s6Ly9AeGFyby9ldmVudC1lbWl0dGVyLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovL0B4YXJvL2V2ZW50LWVtaXR0ZXIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vQHhhcm8vZXZlbnQtZW1pdHRlci93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vQHhhcm8vZXZlbnQtZW1pdHRlci93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL0B4YXJvL2V2ZW50LWVtaXR0ZXIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9AeGFyby9ldmVudC1lbWl0dGVyL3dlYnBhY2svc3RhcnR1cCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFZSxNQUFNLFlBQVk7SUFRL0I7OztPQUdHO0lBQ0gsWUFBWSxLQUFxQyxFQUFFO1FBWG5EOzs7V0FHRztRQUNILFdBQU0sR0FBd0IsRUFBRSxDQUFDO1FBUS9CLEtBQUssSUFBSSxHQUFHLElBQUksRUFBRSxFQUFFO1lBQ2xCLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1NBQzlCO0lBQ0gsQ0FBQztJQUdELGdDQUFnQztJQUNoQyxTQUFTLENBQUMsR0FBVyxFQUFFLEVBQVk7UUFDakMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDckIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUM7U0FDdkI7UUFFRCxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUUxQixPQUFPO1lBQ0wsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQztTQUM1QyxDQUFDO0lBQ0osQ0FBQztJQUdELFdBQVcsQ0FBQyxHQUFXO1FBQ3JCLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUNwQixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDekI7SUFDSCxDQUFDO0lBR0QsY0FBYyxDQUFDLEdBQVcsRUFBRSxFQUFZO1FBQ3RDLDhDQUE4QztRQUM5QyxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFO1lBQ25DLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBRXpDLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxFQUFFO2dCQUNaLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQzthQUNqQztTQUNGO0lBQ0gsQ0FBQztJQUVELElBQUksQ0FBQyxHQUFXLEVBQUUsRUFBWTtRQUM1QixNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksRUFBRSxFQUFFO1lBQzFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNqQixFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDWCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFHRCxHQUFHLENBQUMsR0FBVztRQUNiLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUdELElBQUksQ0FBQyxHQUFXLEVBQUUsR0FBRyxJQUFTO1FBQzVCLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFL0IsSUFBSSxLQUFLLEVBQUU7WUFDVCxLQUFLLElBQUksRUFBRSxJQUFJLEtBQUssRUFBRTtnQkFDcEIsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ1Y7U0FDRjtJQUNILENBQUM7Q0FDRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzRXlDO0FBRXpDLE1BQWMsQ0FBQyxZQUFZLEdBQUcsa0RBQVksQ0FBQztBQUU1QyxpRUFBZSxrREFBWSxFQUFDOzs7Ozs7O1VDSjVCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3JCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsc0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7VUNOQTtVQUNBO1VBQ0E7VUFDQSIsImZpbGUiOiJFdmVudEVtaXR0ZXIuZGV2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IElFdmVudEVtaXR0ZXIsIHsgSUV2ZW50RW1pdHRlckNvbnN0cnVjdG9yQ29uZmlnLCBJRXZlbnRFbWl0dGVyRXZlbnRzIH0gZnJvbSAnLi9JRXZlbnRFbWl0dGVyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXZlbnRFbWl0dGVyIGltcGxlbWVudHMgSUV2ZW50RW1pdHRlciB7XG4gIC8qKlxuICAgKiBFdmVudCBsaXN0XG4gICAqIEB0eXBlIElFdmVudEVtaXR0ZXJFdmVudHNcbiAgICovXG4gIGV2ZW50czogSUV2ZW50RW1pdHRlckV2ZW50cyA9IHt9O1xuXG5cbiAgLyoqXG4gICAqIENyZWF0ZSBFbWl0dGVyXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcgQ29uZmlndXJhdGlvbiBvYmplY3RcbiAgICovXG4gIGNvbnN0cnVjdG9yKG9uOiBJRXZlbnRFbWl0dGVyQ29uc3RydWN0b3JDb25maWcgPSB7fSkge1xuICAgIGZvciAobGV0IGtleSBpbiBvbikge1xuICAgICAgdGhpcy5zdWJzY3JpYmUoa2V5LCBvbltrZXldKTtcbiAgICB9XG4gIH1cblxuXG4gIC8qKiBzdWJzY3JpYmUgb24gZXZlbnQgYnkga2V5ICovXG4gIHN1YnNjcmliZShrZXk6IHN0cmluZywgY2I6IEZ1bmN0aW9uKTogeyBkaXNwb3NlOiBGdW5jdGlvbiB9IHtcbiAgICBpZiAoIXRoaXMuZXZlbnRzW2tleV0pIHtcbiAgICAgIHRoaXMuZXZlbnRzW2tleV0gPSBbXTtcbiAgICB9XG5cbiAgICB0aGlzLmV2ZW50c1trZXldLnB1c2goY2IpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGRpc3Bvc2U6ICgpID0+IHRoaXMucmVtb3ZlTGlzdGVuZXIoa2V5LCBjYilcbiAgICB9O1xuICB9XG5cblxuICB1bnN1YnNjcmliZShrZXk6IHN0cmluZyk6IHZvaWQge1xuICAgIGlmICh0aGlzLmV2ZW50c1trZXldKSB7XG4gICAgICBkZWxldGUgdGhpcy5ldmVudHNba2V5XTtcbiAgICB9XG4gIH1cblxuXG4gIHJlbW92ZUxpc3RlbmVyKGtleTogc3RyaW5nLCBjYjogRnVuY3Rpb24pOiB2b2lkIHtcbiAgICAvLyBpZiAodHlwZW9mIHRoaXMuZXZlbnRzW2tleV0gPT09ICdvYmplY3QnKSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodGhpcy5ldmVudHNba2V5XSkpIHtcbiAgICAgIGNvbnN0IGlkeCA9IHRoaXMuZXZlbnRzW2tleV0uaW5kZXhPZihjYik7XG5cbiAgICAgIGlmIChpZHggPiAtMSkge1xuICAgICAgICB0aGlzLmV2ZW50c1trZXldLnNwbGljZShpZHgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG9uY2Uoa2V5OiBzdHJpbmcsIGNiOiBGdW5jdGlvbik6IHZvaWQge1xuICAgIGNvbnN0IHJlbW92ZSA9IHRoaXMuc3Vic2NyaWJlKGtleSwgKGRhdGEpID0+IHtcbiAgICAgIHJlbW92ZS5kaXNwb3NlKCk7XG4gICAgICBjYihkYXRhKTtcbiAgICB9KTtcbiAgfVxuXG5cbiAgaGFzKGtleTogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICEhdGhpcy5ldmVudHNba2V5XTtcbiAgfVxuXG5cbiAgZW1pdChrZXk6IHN0cmluZywgLi4uYXJnczogYW55KTogdm9pZCB7XG4gICAgY29uc3QgZXZlbnQgPSB0aGlzLmV2ZW50c1trZXldO1xuXG4gICAgaWYgKGV2ZW50KSB7XG4gICAgICBmb3IgKGxldCBjYiBvZiBldmVudCkge1xuICAgICAgICBjYihhcmdzKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn0iLCJpbXBvcnQgRXZlbnRFbWl0dGVyIGZyb20gXCIuL0V2ZW50RW1pdHRlclwiO1xuXG4od2luZG93IGFzIGFueSkuRXZlbnRFbWl0dGVyID0gRXZlbnRFbWl0dGVyO1xuXG5leHBvcnQgZGVmYXVsdCBFdmVudEVtaXR0ZXI7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0aWYoX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSkge1xuXHRcdHJldHVybiBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlXG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXgudHNcIik7XG4vLyBUaGlzIGVudHJ5IG1vZHVsZSB1c2VkICdleHBvcnRzJyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG4iXSwic291cmNlUm9vdCI6IiJ9