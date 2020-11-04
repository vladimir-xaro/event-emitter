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
            if (on[key]) {
                this.multipleSubsribe(key, on[key]);
            }
        }
    }
    /** multiple subscribe on events */
    multipleSubsribe(key, value) {
        if (Array.isArray(value)) {
            this.multipleSubsribe(key, value);
        }
        else if (typeof value === 'function') {
            this.subscribe(key, value);
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
    /** unsubscribe all cb from events by key and remove key from events */
    unsubscribe(key) {
        if (this.events[key]) {
            delete this.events[key];
        }
    }
    /** remove cb from event by key and cb */
    removeListener(key, cb) {
        // if (typeof this.events[key] === 'object') {
        if (Array.isArray(this.events[key])) {
            const idx = this.events[key].indexOf(cb);
            if (idx > -1) {
                this.events[key].splice(idx, 1);
            }
        }
    }
    /** once emit cb and remove it */
    once(key, cb) {
        const remove = this.subscribe(key, (data) => {
            remove.dispose();
            cb(data);
        });
    }
    /** check if key exists in events */
    has(key) {
        return !!this.events[key];
    }
    /** fire all cbs from event by key */
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AeGFyby9ldmVudC1lbWl0dGVyLy4vc3JjL0V2ZW50RW1pdHRlci50cyIsIndlYnBhY2s6Ly9AeGFyby9ldmVudC1lbWl0dGVyLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovL0B4YXJvL2V2ZW50LWVtaXR0ZXIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vQHhhcm8vZXZlbnQtZW1pdHRlci93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vQHhhcm8vZXZlbnQtZW1pdHRlci93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL0B4YXJvL2V2ZW50LWVtaXR0ZXIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9AeGFyby9ldmVudC1lbWl0dGVyL3dlYnBhY2svc3RhcnR1cCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFZSxNQUFNLFlBQVk7SUFRL0I7OztPQUdHO0lBQ0gsWUFBWSxLQUFzQyxFQUFFO1FBWHBEOzs7V0FHRztRQUNILFdBQU0sR0FBeUIsRUFBRSxDQUFDO1FBUWhDLEtBQUssSUFBSSxHQUFHLElBQUksRUFBRSxFQUFFO1lBQ2xCLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUNYLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBc0IsQ0FBQzthQUN6RDtTQUNGO0lBQ0gsQ0FBQztJQUVELG1DQUFtQztJQUN6QixnQkFBZ0IsQ0FBQyxHQUFXLEVBQUUsS0FBd0I7UUFDOUQsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ3hCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDbkM7YUFBTSxJQUFJLE9BQU8sS0FBSyxLQUFLLFVBQVUsRUFBRTtZQUN0QyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRSxLQUFlLENBQUMsQ0FBQztTQUN0QztJQUNILENBQUM7SUFHRCxnQ0FBZ0M7SUFDaEMsU0FBUyxDQUFDLEdBQVcsRUFBRSxFQUFVO1FBQy9CLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ3JCLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDO1NBQ3ZCO1FBRUQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7UUFFMUIsT0FBTztZQUNMLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUM7U0FDNUMsQ0FBQztJQUNKLENBQUM7SUFFRCx1RUFBdUU7SUFDdkUsV0FBVyxDQUFDLEdBQVc7UUFDckIsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ3BCLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUN6QjtJQUNILENBQUM7SUFFRCx5Q0FBeUM7SUFDekMsY0FBYyxDQUFDLEdBQVcsRUFBRSxFQUFVO1FBQ3BDLDhDQUE4QztRQUM5QyxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFO1lBQ25DLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBRXpDLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxFQUFFO2dCQUNaLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQzthQUNqQztTQUNGO0lBQ0gsQ0FBQztJQUVELGlDQUFpQztJQUNqQyxJQUFJLENBQUMsR0FBVyxFQUFFLEVBQVU7UUFDMUIsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLEVBQUUsRUFBRTtZQUMxQyxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDakIsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ1gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsb0NBQW9DO0lBQ3BDLEdBQUcsQ0FBQyxHQUFXO1FBQ2IsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBRUQscUNBQXFDO0lBQ3JDLElBQUksQ0FBQyxHQUFXLEVBQUUsR0FBRyxJQUFTO1FBQzVCLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFL0IsSUFBSSxLQUFLLEVBQUU7WUFDVCxLQUFLLElBQUksRUFBRSxJQUFJLEtBQUssRUFBRTtnQkFDcEIsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ1Y7U0FDRjtJQUNILENBQUM7Q0FDRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2RnlDO0FBRTFDLGlFQUFlLGtEQUFZLEVBQUM7Ozs7Ozs7VUNGNUI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDckJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSxzRjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7OztVQ05BO1VBQ0E7VUFDQTtVQUNBIiwiZmlsZSI6IkV2ZW50RW1pdHRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElfRXZlbnRFbWl0dGVyLCBJX0V2ZW50RW1pdHRlckNvbnN0cnVjdG9yQ29uZmlnLCBJX0V2ZW50RW1pdHRlckV2ZW50cywgVF9GdW5jIH0gZnJvbSAnLi90eXBlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV2ZW50RW1pdHRlciBpbXBsZW1lbnRzIElfRXZlbnRFbWl0dGVyIHtcbiAgLyoqXG4gICAqIEV2ZW50IGxpc3RcbiAgICogQHR5cGUgSUV2ZW50RW1pdHRlckV2ZW50c1xuICAgKi9cbiAgZXZlbnRzOiBJX0V2ZW50RW1pdHRlckV2ZW50cyA9IHt9O1xuXG5cbiAgLyoqXG4gICAqIENyZWF0ZSBFbWl0dGVyXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcgQ29uZmlndXJhdGlvbiBvYmplY3RcbiAgICovXG4gIGNvbnN0cnVjdG9yKG9uOiBJX0V2ZW50RW1pdHRlckNvbnN0cnVjdG9yQ29uZmlnID0ge30pIHtcbiAgICBmb3IgKGxldCBrZXkgaW4gb24pIHtcbiAgICAgIGlmIChvbltrZXldKSB7XG4gICAgICAgIHRoaXMubXVsdGlwbGVTdWJzcmliZShrZXksIG9uW2tleV0gYXMgVF9GdW5jIHwgVF9GdW5jW10pXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqIG11bHRpcGxlIHN1YnNjcmliZSBvbiBldmVudHMgKi9cbiAgcHJvdGVjdGVkIG11bHRpcGxlU3Vic3JpYmUoa2V5OiBzdHJpbmcsIHZhbHVlOiBUX0Z1bmMgfCBUX0Z1bmNbXSk6IHZvaWQge1xuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgdGhpcy5tdWx0aXBsZVN1YnNyaWJlKGtleSwgdmFsdWUpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aGlzLnN1YnNjcmliZShrZXksIHZhbHVlIGFzIFRfRnVuYyk7XG4gICAgfVxuICB9XG5cblxuICAvKiogc3Vic2NyaWJlIG9uIGV2ZW50IGJ5IGtleSAqL1xuICBzdWJzY3JpYmUoa2V5OiBzdHJpbmcsIGNiOiBUX0Z1bmMpOiB7IGRpc3Bvc2U6IFRfRnVuYyB9IHtcbiAgICBpZiAoIXRoaXMuZXZlbnRzW2tleV0pIHtcbiAgICAgIHRoaXMuZXZlbnRzW2tleV0gPSBbXTtcbiAgICB9XG5cbiAgICB0aGlzLmV2ZW50c1trZXldLnB1c2goY2IpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGRpc3Bvc2U6ICgpID0+IHRoaXMucmVtb3ZlTGlzdGVuZXIoa2V5LCBjYilcbiAgICB9O1xuICB9XG5cbiAgLyoqIHVuc3Vic2NyaWJlIGFsbCBjYiBmcm9tIGV2ZW50cyBieSBrZXkgYW5kIHJlbW92ZSBrZXkgZnJvbSBldmVudHMgKi9cbiAgdW5zdWJzY3JpYmUoa2V5OiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5ldmVudHNba2V5XSkge1xuICAgICAgZGVsZXRlIHRoaXMuZXZlbnRzW2tleV07XG4gICAgfVxuICB9XG5cbiAgLyoqIHJlbW92ZSBjYiBmcm9tIGV2ZW50IGJ5IGtleSBhbmQgY2IgKi9cbiAgcmVtb3ZlTGlzdGVuZXIoa2V5OiBzdHJpbmcsIGNiOiBUX0Z1bmMpOiB2b2lkIHtcbiAgICAvLyBpZiAodHlwZW9mIHRoaXMuZXZlbnRzW2tleV0gPT09ICdvYmplY3QnKSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodGhpcy5ldmVudHNba2V5XSkpIHtcbiAgICAgIGNvbnN0IGlkeCA9IHRoaXMuZXZlbnRzW2tleV0uaW5kZXhPZihjYik7XG5cbiAgICAgIGlmIChpZHggPiAtMSkge1xuICAgICAgICB0aGlzLmV2ZW50c1trZXldLnNwbGljZShpZHgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKiBvbmNlIGVtaXQgY2IgYW5kIHJlbW92ZSBpdCAqL1xuICBvbmNlKGtleTogc3RyaW5nLCBjYjogVF9GdW5jKTogdm9pZCB7XG4gICAgY29uc3QgcmVtb3ZlID0gdGhpcy5zdWJzY3JpYmUoa2V5LCAoZGF0YSkgPT4ge1xuICAgICAgcmVtb3ZlLmRpc3Bvc2UoKTtcbiAgICAgIGNiKGRhdGEpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqIGNoZWNrIGlmIGtleSBleGlzdHMgaW4gZXZlbnRzICovXG4gIGhhcyhrZXk6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhIXRoaXMuZXZlbnRzW2tleV07XG4gIH1cblxuICAvKiogZmlyZSBhbGwgY2JzIGZyb20gZXZlbnQgYnkga2V5ICovXG4gIGVtaXQoa2V5OiBzdHJpbmcsIC4uLmFyZ3M6IGFueSk6IHZvaWQge1xuICAgIGNvbnN0IGV2ZW50ID0gdGhpcy5ldmVudHNba2V5XTtcblxuICAgIGlmIChldmVudCkge1xuICAgICAgZm9yIChsZXQgY2Igb2YgZXZlbnQpIHtcbiAgICAgICAgY2IoYXJncyk7XG4gICAgICB9XG4gICAgfVxuICB9XG59IiwiaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tIFwiLi9FdmVudEVtaXR0ZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgRXZlbnRFbWl0dGVyO1xuXG5leHBvcnQge1xuICBJX0V2ZW50RW1pdHRlcixcbiAgSV9FdmVudEVtaXR0ZXJFdmVudHMsXG4gIElfRXZlbnRFbWl0dGVyQ29uc3RydWN0b3JDb25maWcsXG4gIFRfRnVuY1xufSBmcm9tIFwiLi90eXBlc1wiOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdGlmKF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0pIHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZVxuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LnRzXCIpO1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgdXNlZCAnZXhwb3J0cycgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxuIl0sInNvdXJjZVJvb3QiOiIifQ==