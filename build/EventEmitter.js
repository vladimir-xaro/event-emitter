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
     */
    constructor(on = {}) {
        /**
         * Event list
         */
        this.events = {};
        for (let key in on) {
            if (on[key]) {
                this.subscribe(key, on[key]);
            }
        }
    }
    /**
     * Creates a key for the event and subscribes the passed callback to it.
     */
    subscribe(key, cb) {
        if (!this.has(key)) {
            this.events[key] = [];
        }
        let removes = [];
        if (Array.isArray(cb)) {
            for (const _cb of cb) {
                removes.push(...this.subscribe(key, _cb));
            }
        }
        else {
            this.events[key].push(cb);
            removes.push(() => this.removeListener(key, cb));
        }
        return removes;
    }
    /**
     * Unsubscribes all callback functions from the event and removes the event
     * key.
     */
    unsubscribe(key) {
        if (this.events[key]) {
            delete this.events[key];
        }
    }
    /**
     * Removes a specific event key callback function.
     */
    removeListener(key, cb) {
        // if (typeof this.events[key] === 'object') {
        if (Array.isArray(this.events[key])) {
            const idx = this.events[key].indexOf(cb);
            if (idx > -1) {
                this.events[key].splice(idx, 1);
            }
        }
    }
    /**
     * Calls the callback function only once, and then removes it.
     */
    once(key, cb) {
        const remove = this.subscribe(key, () => {
            remove[0]();
            if (Array.isArray(cb)) {
                for (const _cb of cb) {
                    _cb();
                }
            }
            else {
                cb();
            }
        });
    }
    /**
     * Checks for an event by key.
     * (Doesn't check for callback functions)
     */
    has(key) {
        return !!this.events[key];
    }
    /**
     * Calls all callback functions on events using the event key.
     */
    emit(key, ...args) {
        const event = this.events[key];
        if (event) {
            for (let cb of event) {
                cb(...args);
            }
        }
    }
    /**
     * Just like "emit" calls all callback functions. However, the callback must
     * return a boolean value, which determines whether or not the next callback
     * will execute.
     * As a result, it returns the result of the last executed callback function.
     */
    validateEmit(key, ...args) {
        const event = this.events[key];
        if (!event) {
            return false;
        }
        for (const cb of event) {
            if (!cb(...args)) {
                return false;
            }
        }
        return true;
    }
    /**
     * Just like "emit" calls all callbacks, but unlike "emit" it passes the
     * result of the previous callback to the next one as an argument.
     * As aresult, it will return the result of the last callback.
     */
    seriesEmit(key, ...args) {
        const event = this.events[key];
        if (!event) {
            return;
        }
        let params;
        for (let i = 0; i < event.length; i++) {
            if (i === 0) {
                params = event[i](...args);
            }
            else {
                params = event[i](params);
            }
        }
        return params;
    }
}


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

const emitter = new ___WEBPACK_IMPORTED_MODULE_0__.default({
    event: [
        () => {
            console.log(1);
        },
        () => {
            console.log(2);
        },
        () => {
            console.log(3);
        },
        () => {
            console.log(4);
        }
    ],
    event1: () => {
        console.log(5);
    }
});
window.emitter = emitter;
emitter.emit('event');
emitter.emit('event1');
emitter.once('event2', () => {
    console.log(6);
});
emitter.emit('event2');
emitter.emit('event2');
emitter.once('event3', [
    () => {
        console.log('event3 #1');
    },
    () => {
        console.log('event3 #2');
    }
]);
emitter.emit('event3');
console.log('between event3');
emitter.emit('event3');
emitter.once('event4', () => {
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
/******/ 	__webpack_require__("./src/index.dev.ts");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AeGFyby9ldmVudC1lbWl0dGVyLy4vc3JjL0V2ZW50RW1pdHRlci50cyIsIndlYnBhY2s6Ly9AeGFyby9ldmVudC1lbWl0dGVyLy4vc3JjL2luZGV4LmRldi50cyIsIndlYnBhY2s6Ly9AeGFyby9ldmVudC1lbWl0dGVyLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovL0B4YXJvL2V2ZW50LWVtaXR0ZXIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vQHhhcm8vZXZlbnQtZW1pdHRlci93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vQHhhcm8vZXZlbnQtZW1pdHRlci93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL0B4YXJvL2V2ZW50LWVtaXR0ZXIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9AeGFyby9ldmVudC1lbWl0dGVyL3dlYnBhY2svc3RhcnR1cCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFZSxNQUFNLFlBQVk7SUFPL0I7O09BRUc7SUFDSCxZQUFZLEtBQXNDLEVBQUU7UUFUcEQ7O1dBRUc7UUFDSCxXQUFNLEdBQXlCLEVBQUUsQ0FBQztRQU9oQyxLQUFLLElBQUksR0FBRyxJQUFJLEVBQUUsRUFBRTtZQUNsQixJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRTtnQkFDWCxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFzQixDQUFDLENBQUM7YUFDbkQ7U0FDRjtJQUNILENBQUM7SUFFRDs7T0FFRztJQUNILFNBQVMsQ0FBQyxHQUFXLEVBQUUsRUFBcUI7UUFDMUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDbEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFH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O1VDRjVCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3JCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsc0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7VUNOQTtVQUNBO1VBQ0E7VUFDQSIsImZpbGUiOiJFdmVudEVtaXR0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJX0V2ZW50RW1pdHRlciwgSV9FdmVudEVtaXR0ZXJDb25zdHJ1Y3RvckNvbmZpZywgSV9FdmVudEVtaXR0ZXJFdmVudHMsIFRfRnVuYyB9IGZyb20gJy4vdHlwZXMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFdmVudEVtaXR0ZXIgaW1wbGVtZW50cyBJX0V2ZW50RW1pdHRlciB7XG4gIC8qKlxuICAgKiBFdmVudCBsaXN0XG4gICAqL1xuICBldmVudHM6IElfRXZlbnRFbWl0dGVyRXZlbnRzID0ge307XG5cblxuICAvKipcbiAgICogQ3JlYXRlIEVtaXR0ZXJcbiAgICovXG4gIGNvbnN0cnVjdG9yKG9uOiBJX0V2ZW50RW1pdHRlckNvbnN0cnVjdG9yQ29uZmlnID0ge30pIHtcbiAgICBmb3IgKGxldCBrZXkgaW4gb24pIHtcbiAgICAgIGlmIChvbltrZXldKSB7XG4gICAgICAgIHRoaXMuc3Vic2NyaWJlKGtleSwgb25ba2V5XSBhcyBUX0Z1bmMgfCBUX0Z1bmNbXSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBrZXkgZm9yIHRoZSBldmVudCBhbmQgc3Vic2NyaWJlcyB0aGUgcGFzc2VkIGNhbGxiYWNrIHRvIGl0LlxuICAgKi9cbiAgc3Vic2NyaWJlKGtleTogc3RyaW5nLCBjYjogVF9GdW5jIHwgVF9GdW5jW10pOiBUX0Z1bmNbXSB7XG4gICAgaWYgKCF0aGlzLmhhcyhrZXkpKSB7XG4gICAgICB0aGlzLmV2ZW50c1trZXldID0gW107XG4gICAgfVxuXG4gICAgbGV0IHJlbW92ZXM6IFRfRnVuY1tdID0gW107XG5cbiAgICBpZiAoQXJyYXkuaXNBcnJheShjYikpIHtcbiAgICAgIGZvciAoY29uc3QgX2NiIG9mIGNiKSB7XG4gICAgICAgIHJlbW92ZXMucHVzaCguLi50aGlzLnN1YnNjcmliZShrZXksIF9jYikpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmV2ZW50c1trZXldLnB1c2goY2IpO1xuICAgICAgcmVtb3Zlcy5wdXNoKCgpID0+IHRoaXMucmVtb3ZlTGlzdGVuZXIoa2V5LCBjYikpO1xuICAgIH1cblxuICAgIHJldHVybiByZW1vdmVzO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuc3Vic2NyaWJlcyBhbGwgY2FsbGJhY2sgZnVuY3Rpb25zIGZyb20gdGhlIGV2ZW50IGFuZCByZW1vdmVzIHRoZSBldmVudFxuICAgKiBrZXkuXG4gICAqL1xuICB1bnN1YnNjcmliZShrZXk6IHN0cmluZyk6IHZvaWQge1xuICAgIGlmICh0aGlzLmV2ZW50c1trZXldKSB7XG4gICAgICBkZWxldGUgdGhpcy5ldmVudHNba2V5XTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlcyBhIHNwZWNpZmljIGV2ZW50IGtleSBjYWxsYmFjayBmdW5jdGlvbi5cbiAgICovXG4gIHJlbW92ZUxpc3RlbmVyKGtleTogc3RyaW5nLCBjYjogVF9GdW5jKTogdm9pZCB7XG4gICAgLy8gaWYgKHR5cGVvZiB0aGlzLmV2ZW50c1trZXldID09PSAnb2JqZWN0Jykge1xuICAgIGlmIChBcnJheS5pc0FycmF5KHRoaXMuZXZlbnRzW2tleV0pKSB7XG4gICAgICBjb25zdCBpZHggPSB0aGlzLmV2ZW50c1trZXldLmluZGV4T2YoY2IpO1xuXG4gICAgICBpZiAoaWR4ID4gLTEpIHtcbiAgICAgICAgdGhpcy5ldmVudHNba2V5XS5zcGxpY2UoaWR4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ2FsbHMgdGhlIGNhbGxiYWNrIGZ1bmN0aW9uIG9ubHkgb25jZSwgYW5kIHRoZW4gcmVtb3ZlcyBpdC5cbiAgICovXG4gIG9uY2Uoa2V5OiBzdHJpbmcsIGNiOiBUX0Z1bmMgfCBUX0Z1bmNbXSk6IHZvaWQge1xuICAgIGNvbnN0IHJlbW92ZSA9IHRoaXMuc3Vic2NyaWJlKGtleSwgKCkgPT4ge1xuICAgICAgcmVtb3ZlWzBdKCk7XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShjYikpIHtcbiAgICAgICAgZm9yIChjb25zdCBfY2Igb2YgY2IpIHtcbiAgICAgICAgICBfY2IoKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2IoKTtcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrcyBmb3IgYW4gZXZlbnQgYnkga2V5LlxuICAgKiAoRG9lc24ndCBjaGVjayBmb3IgY2FsbGJhY2sgZnVuY3Rpb25zKVxuICAgKi9cbiAgaGFzKGtleTogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICEhdGhpcy5ldmVudHNba2V5XTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxscyBhbGwgY2FsbGJhY2sgZnVuY3Rpb25zIG9uIGV2ZW50cyB1c2luZyB0aGUgZXZlbnQga2V5LlxuICAgKi9cbiAgZW1pdChrZXk6IHN0cmluZywgLi4uYXJnczogYW55KTogdm9pZCB7XG4gICAgY29uc3QgZXZlbnQ6IFRfRnVuY1tdID0gdGhpcy5ldmVudHNba2V5XTtcblxuICAgIGlmIChldmVudCkge1xuICAgICAgZm9yIChsZXQgY2Igb2YgZXZlbnQpIHtcbiAgICAgICAgY2IoLi4uYXJncyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cblxuICAvKipcbiAgICogSnVzdCBsaWtlIFwiZW1pdFwiIGNhbGxzIGFsbCBjYWxsYmFjayBmdW5jdGlvbnMuIEhvd2V2ZXIsIHRoZSBjYWxsYmFjayBtdXN0XG4gICAqIHJldHVybiBhIGJvb2xlYW4gdmFsdWUsIHdoaWNoIGRldGVybWluZXMgd2hldGhlciBvciBub3QgdGhlIG5leHQgY2FsbGJhY2tcbiAgICogd2lsbCBleGVjdXRlLlxuICAgKiBBcyBhIHJlc3VsdCwgaXQgcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSBsYXN0IGV4ZWN1dGVkIGNhbGxiYWNrIGZ1bmN0aW9uLlxuICAgKi9cbiAgdmFsaWRhdGVFbWl0KGtleTogc3RyaW5nLCAuLi5hcmdzOiBhbnkpOiBib29sZWFuIHtcbiAgICBjb25zdCBldmVudDogVF9GdW5jW10gPSB0aGlzLmV2ZW50c1trZXldO1xuXG4gICAgaWYgKCEgZXZlbnQpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBmb3IoY29uc3QgY2Igb2YgZXZlbnQpIHtcbiAgICAgIGlmICghIGNiKC4uLmFyZ3MpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICAvKipcbiAgICogSnVzdCBsaWtlIFwiZW1pdFwiIGNhbGxzIGFsbCBjYWxsYmFja3MsIGJ1dCB1bmxpa2UgXCJlbWl0XCIgaXQgcGFzc2VzIHRoZVxuICAgKiByZXN1bHQgb2YgdGhlIHByZXZpb3VzIGNhbGxiYWNrIHRvIHRoZSBuZXh0IG9uZSBhcyBhbiBhcmd1bWVudC5cbiAgICogQXMgYXJlc3VsdCwgaXQgd2lsbCByZXR1cm4gdGhlIHJlc3VsdCBvZiB0aGUgbGFzdCBjYWxsYmFjay5cbiAgICovXG4gIHNlcmllc0VtaXQoa2V5OiBzdHJpbmcsIC4uLmFyZ3M6IGFueSk6IGFueSB7XG4gICAgY29uc3QgZXZlbnQ6IFRfRnVuY1tdID0gdGhpcy5ldmVudHNba2V5XTtcblxuICAgIGlmICghIGV2ZW50KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IHBhcmFtczogYW55O1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBldmVudC5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGkgPT09IDApIHtcbiAgICAgICAgcGFyYW1zID0gZXZlbnRbaV0oLi4uYXJncyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwYXJhbXMgPSBldmVudFtpXShwYXJhbXMpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBwYXJhbXM7XG4gIH1cbn0iLCJpbXBvcnQgRXZlbnRFbWl0dGVyIGZyb20gJy4vJztcblxuY29uc3QgZW1pdHRlciA9IG5ldyBFdmVudEVtaXR0ZXIoe1xuICBldmVudDogW1xuICAgICgpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKDEpO1xuICAgIH0sXG4gICAgKCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coMik7XG4gICAgfSxcbiAgICAoKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZygzKTtcbiAgICB9LFxuICAgICgpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKDQpO1xuICAgIH1cbiAgXSxcbiAgZXZlbnQxOiAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coNSlcbiAgfVxufSk7XG5cbih3aW5kb3cgYXMgYW55KS5lbWl0dGVyID0gZW1pdHRlcjtcblxuZW1pdHRlci5lbWl0KCdldmVudCcpO1xuZW1pdHRlci5lbWl0KCdldmVudDEnKTtcblxuXG5lbWl0dGVyLm9uY2UoJ2V2ZW50MicsICgpID0+IHtcbiAgY29uc29sZS5sb2coNik7XG59KTtcbmVtaXR0ZXIuZW1pdCgnZXZlbnQyJyk7XG5lbWl0dGVyLmVtaXQoJ2V2ZW50MicpO1xuXG5cbmVtaXR0ZXIub25jZSgnZXZlbnQzJywgW1xuICAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ2V2ZW50MyAjMScpXG4gIH0sXG4gICgpID0+IHtcbiAgICBjb25zb2xlLmxvZygnZXZlbnQzICMyJylcbiAgfVxuXSk7XG5lbWl0dGVyLmVtaXQoJ2V2ZW50MycpO1xuY29uc29sZS5sb2coJ2JldHdlZW4gZXZlbnQzJyk7XG5lbWl0dGVyLmVtaXQoJ2V2ZW50MycpO1xuXG5cbmVtaXR0ZXIub25jZSgnZXZlbnQ0JywgKCkgPT4ge1xuICBjb25zb2xlLmxvZygnZXZlbnQ0ICMxJylcbn0pO1xuZW1pdHRlci5lbWl0KCdldmVudDQnKTtcbmNvbnNvbGUubG9nKCdiZXR3ZWVuIGV2ZW50NCcpO1xuZW1pdHRlci5lbWl0KCdldmVudDQnKTsiLCJpbXBvcnQgRXZlbnRFbWl0dGVyIGZyb20gXCIuL0V2ZW50RW1pdHRlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBFdmVudEVtaXR0ZXI7XG5cbmV4cG9ydCB7XG4gIElfRXZlbnRFbWl0dGVyLFxuICBJX0V2ZW50RW1pdHRlckV2ZW50cyxcbiAgSV9FdmVudEVtaXR0ZXJDb25zdHJ1Y3RvckNvbmZpZyxcbiAgVF9GdW5jXG59IGZyb20gXCIuL3R5cGVzXCI7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0aWYoX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSkge1xuXHRcdHJldHVybiBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlXG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguZGV2LnRzXCIpO1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgdXNlZCAnZXhwb3J0cycgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxuIl0sInNvdXJjZVJvb3QiOiIifQ==