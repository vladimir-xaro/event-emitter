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
/*! runtime requirements: __webpack_exports__, __webpack_require__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _EventEmitter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EventEmitter */ "./src/EventEmitter.ts");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AeGFyby9ldmVudC1lbWl0dGVyLy4vc3JjL0V2ZW50RW1pdHRlci50cyIsIndlYnBhY2s6Ly9AeGFyby9ldmVudC1lbWl0dGVyLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovL0B4YXJvL2V2ZW50LWVtaXR0ZXIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vQHhhcm8vZXZlbnQtZW1pdHRlci93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vQHhhcm8vZXZlbnQtZW1pdHRlci93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL0B4YXJvL2V2ZW50LWVtaXR0ZXIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9AeGFyby9ldmVudC1lbWl0dGVyL3dlYnBhY2svc3RhcnR1cCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFZSxNQUFNLFlBQVk7SUFRL0I7OztPQUdHO0lBQ0gsWUFBWSxLQUFzQyxFQUFFO1FBWHBEOzs7V0FHRztRQUNILFdBQU0sR0FBeUIsRUFBRSxDQUFDO1FBUWhDLEtBQUssSUFBSSxHQUFHLElBQUksRUFBRSxFQUFFO1lBQ2xCLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1NBQzlCO0lBQ0gsQ0FBQztJQUdELGdDQUFnQztJQUNoQyxTQUFTLENBQUMsR0FBVyxFQUFFLEVBQVk7UUFDakMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDckIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUM7U0FDdkI7UUFFRCxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUUxQixPQUFPO1lBQ0wsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQztTQUM1QyxDQUFDO0lBQ0osQ0FBQztJQUdELFdBQVcsQ0FBQyxHQUFXO1FBQ3JCLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUNwQixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDekI7SUFDSCxDQUFDO0lBR0QsY0FBYyxDQUFDLEdBQVcsRUFBRSxFQUFZO1FBQ3RDLDhDQUE4QztRQUM5QyxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFO1lBQ25DLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBRXpDLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxFQUFFO2dCQUNaLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQzthQUNqQztTQUNGO0lBQ0gsQ0FBQztJQUVELElBQUksQ0FBQyxHQUFXLEVBQUUsRUFBWTtRQUM1QixNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksRUFBRSxFQUFFO1lBQzFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNqQixFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDWCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFHRCxHQUFHLENBQUMsR0FBVztRQUNiLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUdELElBQUksQ0FBQyxHQUFXLEVBQUUsR0FBRyxJQUFTO1FBQzVCLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFL0IsSUFBSSxLQUFLLEVBQUU7WUFDVCxLQUFLLElBQUksRUFBRSxJQUFJLEtBQUssRUFBRTtnQkFDcEIsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ1Y7U0FDRjtJQUNILENBQUM7Q0FDRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzRXlDO0FBRTFDLGlFQUFlLGtEQUFZLEVBQUM7Ozs7Ozs7VUNGNUI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDckJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSxzRjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7OztVQ05BO1VBQ0E7VUFDQTtVQUNBIiwiZmlsZSI6IkV2ZW50RW1pdHRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElfRXZlbnRFbWl0dGVyLCBJX0V2ZW50RW1pdHRlckNvbnN0cnVjdG9yQ29uZmlnLCBJX0V2ZW50RW1pdHRlckV2ZW50cyB9IGZyb20gJy4vdHlwZXMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFdmVudEVtaXR0ZXIgaW1wbGVtZW50cyBJX0V2ZW50RW1pdHRlciB7XG4gIC8qKlxuICAgKiBFdmVudCBsaXN0XG4gICAqIEB0eXBlIElFdmVudEVtaXR0ZXJFdmVudHNcbiAgICovXG4gIGV2ZW50czogSV9FdmVudEVtaXR0ZXJFdmVudHMgPSB7fTtcblxuXG4gIC8qKlxuICAgKiBDcmVhdGUgRW1pdHRlclxuICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIENvbmZpZ3VyYXRpb24gb2JqZWN0XG4gICAqL1xuICBjb25zdHJ1Y3RvcihvbjogSV9FdmVudEVtaXR0ZXJDb25zdHJ1Y3RvckNvbmZpZyA9IHt9KSB7XG4gICAgZm9yIChsZXQga2V5IGluIG9uKSB7XG4gICAgICB0aGlzLnN1YnNjcmliZShrZXksIG9uW2tleV0pO1xuICAgIH1cbiAgfVxuXG5cbiAgLyoqIHN1YnNjcmliZSBvbiBldmVudCBieSBrZXkgKi9cbiAgc3Vic2NyaWJlKGtleTogc3RyaW5nLCBjYjogRnVuY3Rpb24pOiB7IGRpc3Bvc2U6IEZ1bmN0aW9uIH0ge1xuICAgIGlmICghdGhpcy5ldmVudHNba2V5XSkge1xuICAgICAgdGhpcy5ldmVudHNba2V5XSA9IFtdO1xuICAgIH1cblxuICAgIHRoaXMuZXZlbnRzW2tleV0ucHVzaChjYik7XG5cbiAgICByZXR1cm4ge1xuICAgICAgZGlzcG9zZTogKCkgPT4gdGhpcy5yZW1vdmVMaXN0ZW5lcihrZXksIGNiKVxuICAgIH07XG4gIH1cblxuXG4gIHVuc3Vic2NyaWJlKGtleTogc3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuZXZlbnRzW2tleV0pIHtcbiAgICAgIGRlbGV0ZSB0aGlzLmV2ZW50c1trZXldO1xuICAgIH1cbiAgfVxuXG5cbiAgcmVtb3ZlTGlzdGVuZXIoa2V5OiBzdHJpbmcsIGNiOiBGdW5jdGlvbik6IHZvaWQge1xuICAgIC8vIGlmICh0eXBlb2YgdGhpcy5ldmVudHNba2V5XSA9PT0gJ29iamVjdCcpIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh0aGlzLmV2ZW50c1trZXldKSkge1xuICAgICAgY29uc3QgaWR4ID0gdGhpcy5ldmVudHNba2V5XS5pbmRleE9mKGNiKTtcblxuICAgICAgaWYgKGlkeCA+IC0xKSB7XG4gICAgICAgIHRoaXMuZXZlbnRzW2tleV0uc3BsaWNlKGlkeCwgMSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgb25jZShrZXk6IHN0cmluZywgY2I6IEZ1bmN0aW9uKTogdm9pZCB7XG4gICAgY29uc3QgcmVtb3ZlID0gdGhpcy5zdWJzY3JpYmUoa2V5LCAoZGF0YSkgPT4ge1xuICAgICAgcmVtb3ZlLmRpc3Bvc2UoKTtcbiAgICAgIGNiKGRhdGEpO1xuICAgIH0pO1xuICB9XG5cblxuICBoYXMoa2V5OiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gISF0aGlzLmV2ZW50c1trZXldO1xuICB9XG5cblxuICBlbWl0KGtleTogc3RyaW5nLCAuLi5hcmdzOiBhbnkpOiB2b2lkIHtcbiAgICBjb25zdCBldmVudCA9IHRoaXMuZXZlbnRzW2tleV07XG5cbiAgICBpZiAoZXZlbnQpIHtcbiAgICAgIGZvciAobGV0IGNiIG9mIGV2ZW50KSB7XG4gICAgICAgIGNiKGFyZ3MpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufSIsImltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSBcIi4vRXZlbnRFbWl0dGVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IEV2ZW50RW1pdHRlcjtcblxuZXhwb3J0IHtcbiAgSV9FdmVudEVtaXR0ZXIsXG4gIElfRXZlbnRFbWl0dGVyRXZlbnRzLFxuICBJX0V2ZW50RW1pdHRlckNvbnN0cnVjdG9yQ29uZmlnXG59IGZyb20gXCIuL3R5cGVzXCI7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0aWYoX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSkge1xuXHRcdHJldHVybiBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlXG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXgudHNcIik7XG4vLyBUaGlzIGVudHJ5IG1vZHVsZSB1c2VkICdleHBvcnRzJyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG4iXSwic291cmNlUm9vdCI6IiJ9