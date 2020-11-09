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
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
var EventEmitter = /** @class */ (function () {
    /**
     * Create Emitter
     */
    function EventEmitter(on) {
        if (on === void 0) { on = {}; }
        /**
         * Event list
         */
        this.events = {};
        for (var key in on) {
            if (on[key]) {
                this.subscribe(key, on[key]);
            }
        }
    }
    /**
     * Creates a key for the event and subscribes the passed callback to it.
     */
    EventEmitter.prototype.subscribe = function (key, cb) {
        var _this = this;
        if (!this.has(key)) {
            this.events[key] = [];
        }
        var removes = [];
        if (Array.isArray(cb)) {
            for (var _i = 0, cb_1 = cb; _i < cb_1.length; _i++) {
                var _cb = cb_1[_i];
                removes.push.apply(removes, this.subscribe(key, _cb));
            }
        }
        else {
            this.events[key].push(cb);
            removes.push(function () { return _this.removeListener(key, cb); });
        }
        return removes;
    };
    /**
     * Unsubscribes all callback functions from the event and removes the event
     * key.
     */
    EventEmitter.prototype.unsubscribe = function () {
        var keys = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            keys[_i] = arguments[_i];
        }
        for (var _a = 0, keys_1 = keys; _a < keys_1.length; _a++) {
            var key = keys_1[_a];
            if (this.events[key]) {
                delete this.events[key];
            }
        }
    };
    /**
     * Removes a specific event key callback function.
     */
    EventEmitter.prototype.removeListener = function (key, cb) {
        // if (typeof this.events[key] === 'object') {
        if (Array.isArray(this.events[key])) {
            var idx = this.events[key].indexOf(cb);
            if (idx > -1) {
                this.events[key].splice(idx, 1);
            }
        }
    };
    /**
     * Calls the callback function only once, and then removes it.
     */
    EventEmitter.prototype.once = function (key, cb) {
        var remove = this.subscribe(key, function () {
            remove[0]();
            if (Array.isArray(cb)) {
                for (var _i = 0, cb_2 = cb; _i < cb_2.length; _i++) {
                    var _cb = cb_2[_i];
                    _cb();
                }
            }
            else {
                cb();
            }
        });
    };
    /**
     * Checks for an event by key.
     * (Doesn't check for callback functions)
     */
    EventEmitter.prototype.has = function (key) {
        return !!this.events[key];
    };
    /**
     * Returns the number of callback functions for the event key or "false" if
     * there is no key
     */
    EventEmitter.prototype.listenerCount = function (key) {
        if (!this.events.hasOwnProperty(key)) {
            return false;
        }
        return this.events[key].length;
    };
    /**
     * Calls all callback functions on events using the event key.
     */
    EventEmitter.prototype.emit = function (key) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var event = this.events[key];
        if (event) {
            for (var _a = 0, event_1 = event; _a < event_1.length; _a++) {
                var cb = event_1[_a];
                cb.apply(void 0, args);
            }
        }
    };
    /**
     * Just like "emit" calls all callback functions. However, the callback must
     * return a boolean value, which determines whether or not the next callback
     * will execute.
     * As a result, it returns the result of the last executed callback function.
     */
    EventEmitter.prototype.validateEmit = function (key) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var event = this.events[key];
        if (!event) {
            return false;
        }
        for (var _a = 0, event_2 = event; _a < event_2.length; _a++) {
            var cb = event_2[_a];
            if (!cb.apply(void 0, args)) {
                return false;
            }
        }
        return true;
    };
    /**
     * Just like "emit" calls all callbacks, but unlike "emit" it passes the
     * result of the previous callback to the next one as an argument.
     * As aresult, it will return the result of the last callback.
     */
    EventEmitter.prototype.seriesEmit = function (key) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var event = this.events[key];
        if (!event) {
            return;
        }
        var params;
        for (var i = 0; i < event.length; i++) {
            if (i === 0) {
                params = event[i].apply(event, args);
            }
            else {
                params = event[i](params);
            }
        }
        return params;
    };
    return EventEmitter;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EventEmitter);


/***/ }),

/***/ "./src/index.dev.ts":
/*!**************************!*\
  !*** ./src/index.dev.ts ***!
  \**************************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ */ "./src/index.ts");

var emitter = new ___WEBPACK_IMPORTED_MODULE_0__.default({
    event: [
        function () {
            console.log(1);
        },
        function () {
            console.log(2);
        },
        function () {
            console.log(3);
        },
        function () {
            console.log(4);
        }
    ],
    event1: function () {
        console.log(5);
    }
});
window.emitter = emitter;
emitter.emit('event');
emitter.emit('event1');
emitter.once('event2', function () {
    console.log(6);
});
emitter.emit('event2');
emitter.emit('event2');
emitter.once('event3', [
    function () {
        console.log('event3 #1');
    },
    function () {
        console.log('event3 #2');
    }
]);
emitter.emit('event3');
console.log('between event3');
emitter.emit('event3');
emitter.once('event4', function () {
    console.log('event4 #1');
});
emitter.emit('event4');
console.log('between event4');
emitter.emit('event4');


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
/******/ 	__webpack_require__("./src/index.dev.ts");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AeGFyby9ldmVudC1lbWl0dGVyLy4vc3JjL0V2ZW50RW1pdHRlci50cyIsIndlYnBhY2s6Ly9AeGFyby9ldmVudC1lbWl0dGVyLy4vc3JjL2luZGV4LmRldi50cyIsIndlYnBhY2s6Ly9AeGFyby9ldmVudC1lbWl0dGVyLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovL0B4YXJvL2V2ZW50LWVtaXR0ZXIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vQHhhcm8vZXZlbnQtZW1pdHRlci93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vQHhhcm8vZXZlbnQtZW1pdHRlci93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL0B4YXJvL2V2ZW50LWVtaXR0ZXIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9AeGFyby9ldmVudC1lbWl0dGVyL3dlYnBhY2svc3RhcnR1cCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTtJQU9FOztPQUVHO0lBQ0gsc0JBQVksRUFBd0M7UUFBeEMsNEJBQXdDO1FBVHBEOztXQUVHO1FBQ0gsV0FBTSxHQUF5QixFQUFFLENBQUM7UUFPaEMsS0FBSyxJQUFJLEdBQUcsSUFBSSxFQUFFLEVBQUU7WUFDbEIsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUU7Z0JBQ1gsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBc0IsQ0FBQyxDQUFDO2FBQ25EO1NBQ0Y7SUFDSCxDQUFDO0lBR0Q7O09BRUc7SUFDSCxnQ0FBUyxHQUFULFVBQVUsR0FBVyxFQUFFLEVBQXFCO1FBQTVDLGlCQWlCQztRQWhCQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUNsQixJQUFJLENB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LFFBQVEsRUFBRTtJQUNyQjtRQUNFLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDO0lBQzFCLENBQUM7SUFDRDtRQUNFLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDO0lBQzFCLENBQUM7Q0FDRixDQUFDLENBQUM7QUFDSCxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ3ZCLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztBQUM5QixPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBR3ZCLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO0lBQ3JCLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDO0FBQzFCLENBQUMsQ0FBQyxDQUFDO0FBQ0gsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUN2QixPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUM7QUFDOUIsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyRG1CO0FBRTFDLGlFQUFlLGtEQUFZLEVBQUM7Ozs7Ozs7VUNGNUI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDckJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSxzRjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7OztVQ05BO1VBQ0E7VUFDQTtVQUNBIiwiZmlsZSI6IkV2ZW50RW1pdHRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElfRXZlbnRFbWl0dGVyLCBJX0V2ZW50RW1pdHRlckNvbnN0cnVjdG9yQ29uZmlnLCBJX0V2ZW50RW1pdHRlckV2ZW50cywgVF9GdW5jIH0gZnJvbSAnLi90eXBlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV2ZW50RW1pdHRlciBpbXBsZW1lbnRzIElfRXZlbnRFbWl0dGVyIHtcbiAgLyoqXG4gICAqIEV2ZW50IGxpc3RcbiAgICovXG4gIGV2ZW50czogSV9FdmVudEVtaXR0ZXJFdmVudHMgPSB7fTtcblxuXG4gIC8qKlxuICAgKiBDcmVhdGUgRW1pdHRlclxuICAgKi9cbiAgY29uc3RydWN0b3Iob246IElfRXZlbnRFbWl0dGVyQ29uc3RydWN0b3JDb25maWcgPSB7fSkge1xuICAgIGZvciAobGV0IGtleSBpbiBvbikge1xuICAgICAgaWYgKG9uW2tleV0pIHtcbiAgICAgICAgdGhpcy5zdWJzY3JpYmUoa2V5LCBvbltrZXldIGFzIFRfRnVuYyB8IFRfRnVuY1tdKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEga2V5IGZvciB0aGUgZXZlbnQgYW5kIHN1YnNjcmliZXMgdGhlIHBhc3NlZCBjYWxsYmFjayB0byBpdC5cbiAgICovXG4gIHN1YnNjcmliZShrZXk6IHN0cmluZywgY2I6IFRfRnVuYyB8IFRfRnVuY1tdKTogVF9GdW5jW10ge1xuICAgIGlmICghdGhpcy5oYXMoa2V5KSkge1xuICAgICAgdGhpcy5ldmVudHNba2V5XSA9IFtdO1xuICAgIH1cblxuICAgIGxldCByZW1vdmVzOiBUX0Z1bmNbXSA9IFtdO1xuXG4gICAgaWYgKEFycmF5LmlzQXJyYXkoY2IpKSB7XG4gICAgICBmb3IgKGNvbnN0IF9jYiBvZiBjYikge1xuICAgICAgICByZW1vdmVzLnB1c2goLi4udGhpcy5zdWJzY3JpYmUoa2V5LCBfY2IpKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5ldmVudHNba2V5XS5wdXNoKGNiKTtcbiAgICAgIHJlbW92ZXMucHVzaCgoKSA9PiB0aGlzLnJlbW92ZUxpc3RlbmVyKGtleSwgY2IpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVtb3ZlcztcbiAgfVxuXG5cbiAgLyoqXG4gICAqIFVuc3Vic2NyaWJlcyBhbGwgY2FsbGJhY2sgZnVuY3Rpb25zIGZyb20gdGhlIGV2ZW50IGFuZCByZW1vdmVzIHRoZSBldmVudFxuICAgKiBrZXkuXG4gICAqL1xuICB1bnN1YnNjcmliZSguLi5rZXlzOiBzdHJpbmdbXSk6IHZvaWQge1xuICAgIGZvciAoY29uc3Qga2V5IG9mIGtleXMpIHtcbiAgICAgIGlmICh0aGlzLmV2ZW50c1trZXldKSB7XG4gICAgICAgIGRlbGV0ZSB0aGlzLmV2ZW50c1trZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG5cbiAgLyoqXG4gICAqIFJlbW92ZXMgYSBzcGVjaWZpYyBldmVudCBrZXkgY2FsbGJhY2sgZnVuY3Rpb24uXG4gICAqL1xuICByZW1vdmVMaXN0ZW5lcihrZXk6IHN0cmluZywgY2I6IFRfRnVuYyk6IHZvaWQge1xuICAgIC8vIGlmICh0eXBlb2YgdGhpcy5ldmVudHNba2V5XSA9PT0gJ29iamVjdCcpIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh0aGlzLmV2ZW50c1trZXldKSkge1xuICAgICAgY29uc3QgaWR4ID0gdGhpcy5ldmVudHNba2V5XS5pbmRleE9mKGNiKTtcblxuICAgICAgaWYgKGlkeCA+IC0xKSB7XG4gICAgICAgIHRoaXMuZXZlbnRzW2tleV0uc3BsaWNlKGlkeCwgMSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cblxuICAvKipcbiAgICogQ2FsbHMgdGhlIGNhbGxiYWNrIGZ1bmN0aW9uIG9ubHkgb25jZSwgYW5kIHRoZW4gcmVtb3ZlcyBpdC5cbiAgICovXG4gIG9uY2Uoa2V5OiBzdHJpbmcsIGNiOiBUX0Z1bmMgfCBUX0Z1bmNbXSk6IHZvaWQge1xuICAgIGNvbnN0IHJlbW92ZSA9IHRoaXMuc3Vic2NyaWJlKGtleSwgKCkgPT4ge1xuICAgICAgcmVtb3ZlWzBdKCk7XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShjYikpIHtcbiAgICAgICAgZm9yIChjb25zdCBfY2Igb2YgY2IpIHtcbiAgICAgICAgICBfY2IoKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2IoKTtcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cblxuICAvKipcbiAgICogQ2hlY2tzIGZvciBhbiBldmVudCBieSBrZXkuXG4gICAqIChEb2Vzbid0IGNoZWNrIGZvciBjYWxsYmFjayBmdW5jdGlvbnMpXG4gICAqL1xuICBoYXMoa2V5OiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gISF0aGlzLmV2ZW50c1trZXldO1xuICB9XG5cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgbnVtYmVyIG9mIGNhbGxiYWNrIGZ1bmN0aW9ucyBmb3IgdGhlIGV2ZW50IGtleSBvciBcImZhbHNlXCIgaWZcbiAgICogdGhlcmUgaXMgbm8ga2V5XG4gICAqL1xuICBsaXN0ZW5lckNvdW50KGtleTogc3RyaW5nKTogbnVtYmVyIHwgZmFsc2Uge1xuICAgIGlmICghIHRoaXMuZXZlbnRzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmV2ZW50c1trZXldLmxlbmd0aDtcbiAgfVxuXG5cbiAgLyoqXG4gICAqIENhbGxzIGFsbCBjYWxsYmFjayBmdW5jdGlvbnMgb24gZXZlbnRzIHVzaW5nIHRoZSBldmVudCBrZXkuXG4gICAqL1xuICBlbWl0KGtleTogc3RyaW5nLCAuLi5hcmdzOiBhbnkpOiB2b2lkIHtcbiAgICBjb25zdCBldmVudDogVF9GdW5jW10gPSB0aGlzLmV2ZW50c1trZXldO1xuXG4gICAgaWYgKGV2ZW50KSB7XG4gICAgICBmb3IgKGxldCBjYiBvZiBldmVudCkge1xuICAgICAgICBjYiguLi5hcmdzKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuXG4gIC8qKlxuICAgKiBKdXN0IGxpa2UgXCJlbWl0XCIgY2FsbHMgYWxsIGNhbGxiYWNrIGZ1bmN0aW9ucy4gSG93ZXZlciwgdGhlIGNhbGxiYWNrIG11c3RcbiAgICogcmV0dXJuIGEgYm9vbGVhbiB2YWx1ZSwgd2hpY2ggZGV0ZXJtaW5lcyB3aGV0aGVyIG9yIG5vdCB0aGUgbmV4dCBjYWxsYmFja1xuICAgKiB3aWxsIGV4ZWN1dGUuXG4gICAqIEFzIGEgcmVzdWx0LCBpdCByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIGxhc3QgZXhlY3V0ZWQgY2FsbGJhY2sgZnVuY3Rpb24uXG4gICAqL1xuICB2YWxpZGF0ZUVtaXQoa2V5OiBzdHJpbmcsIC4uLmFyZ3M6IGFueSk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IGV2ZW50OiBUX0Z1bmNbXSA9IHRoaXMuZXZlbnRzW2tleV07XG5cbiAgICBpZiAoISBldmVudCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGZvcihjb25zdCBjYiBvZiBldmVudCkge1xuICAgICAgaWYgKCEgY2IoLi4uYXJncykpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG5cbiAgLyoqXG4gICAqIEp1c3QgbGlrZSBcImVtaXRcIiBjYWxscyBhbGwgY2FsbGJhY2tzLCBidXQgdW5saWtlIFwiZW1pdFwiIGl0IHBhc3NlcyB0aGVcbiAgICogcmVzdWx0IG9mIHRoZSBwcmV2aW91cyBjYWxsYmFjayB0byB0aGUgbmV4dCBvbmUgYXMgYW4gYXJndW1lbnQuXG4gICAqIEFzIGFyZXN1bHQsIGl0IHdpbGwgcmV0dXJuIHRoZSByZXN1bHQgb2YgdGhlIGxhc3QgY2FsbGJhY2suXG4gICAqL1xuICBzZXJpZXNFbWl0KGtleTogc3RyaW5nLCAuLi5hcmdzOiBhbnkpOiBhbnkge1xuICAgIGNvbnN0IGV2ZW50OiBUX0Z1bmNbXSA9IHRoaXMuZXZlbnRzW2tleV07XG5cbiAgICBpZiAoISBldmVudCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxldCBwYXJhbXM6IGFueTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZXZlbnQubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChpID09PSAwKSB7XG4gICAgICAgIHBhcmFtcyA9IGV2ZW50W2ldKC4uLmFyZ3MpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGFyYW1zID0gZXZlbnRbaV0ocGFyYW1zKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcGFyYW1zO1xuICB9XG59IiwiaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICcuLyc7XG5cbmNvbnN0IGVtaXR0ZXIgPSBuZXcgRXZlbnRFbWl0dGVyKHtcbiAgZXZlbnQ6IFtcbiAgICAoKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZygxKTtcbiAgICB9LFxuICAgICgpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKDIpO1xuICAgIH0sXG4gICAgKCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coMyk7XG4gICAgfSxcbiAgICAoKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyg0KTtcbiAgICB9XG4gIF0sXG4gIGV2ZW50MTogKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKDUpXG4gIH1cbn0pO1xuXG4od2luZG93IGFzIGFueSkuZW1pdHRlciA9IGVtaXR0ZXI7XG5cbmVtaXR0ZXIuZW1pdCgnZXZlbnQnKTtcbmVtaXR0ZXIuZW1pdCgnZXZlbnQxJyk7XG5cblxuZW1pdHRlci5vbmNlKCdldmVudDInLCAoKSA9PiB7XG4gIGNvbnNvbGUubG9nKDYpO1xufSk7XG5lbWl0dGVyLmVtaXQoJ2V2ZW50MicpO1xuZW1pdHRlci5lbWl0KCdldmVudDInKTtcblxuXG5lbWl0dGVyLm9uY2UoJ2V2ZW50MycsIFtcbiAgKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdldmVudDMgIzEnKVxuICB9LFxuICAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ2V2ZW50MyAjMicpXG4gIH1cbl0pO1xuZW1pdHRlci5lbWl0KCdldmVudDMnKTtcbmNvbnNvbGUubG9nKCdiZXR3ZWVuIGV2ZW50MycpO1xuZW1pdHRlci5lbWl0KCdldmVudDMnKTtcblxuXG5lbWl0dGVyLm9uY2UoJ2V2ZW50NCcsICgpID0+IHtcbiAgY29uc29sZS5sb2coJ2V2ZW50NCAjMScpXG59KTtcbmVtaXR0ZXIuZW1pdCgnZXZlbnQ0Jyk7XG5jb25zb2xlLmxvZygnYmV0d2VlbiBldmVudDQnKTtcbmVtaXR0ZXIuZW1pdCgnZXZlbnQ0Jyk7IiwiaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tIFwiLi9FdmVudEVtaXR0ZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgRXZlbnRFbWl0dGVyO1xuXG5leHBvcnQge1xuICBJX0V2ZW50RW1pdHRlcixcbiAgSV9FdmVudEVtaXR0ZXJFdmVudHMsXG4gIElfRXZlbnRFbWl0dGVyQ29uc3RydWN0b3JDb25maWcsXG4gIFRfRnVuY1xufSBmcm9tIFwiLi90eXBlc1wiOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdGlmKF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0pIHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZVxuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmRldi50c1wiKTtcbi8vIFRoaXMgZW50cnkgbW9kdWxlIHVzZWQgJ2V4cG9ydHMnIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbiJdLCJzb3VyY2VSb290IjoiIn0=