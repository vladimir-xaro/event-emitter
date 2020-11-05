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
                this.multipleSubsribe(key, on[key]);
            }
        }
    }
    /**
     * Calls the subscribe method on each element in the array.
     */
    multipleSubsribe(key, value) {
        if (Array.isArray(value)) {
            for (const cb of value) {
                this.multipleSubsribe(key, cb);
            }
        }
        else if (typeof value === 'function') {
            this.subscribe(key, value);
        }
    }
    /**
     * Creates a key for the event and subscribes the passed callback to it.
     */
    subscribe(key, cb) {
        if (!this.has(key)) {
            this.events[key] = [];
        }
        this.events[key].push(cb);
        return {
            dispose: () => this.removeListener(key, cb)
        };
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
        const remove = this.subscribe(key, (data) => {
            remove.dispose();
            cb(data);
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

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EventEmitter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EventEmitter */ "./src/EventEmitter.ts");

// export default EventEmitter;
const emitter = new _EventEmitter__WEBPACK_IMPORTED_MODULE_0__.default({
    series: [
        (x) => {
            return x.length;
        },
        (length) => {
            return length % 2 === 0;
        },
        (isEven) => {
            return { success: isEven };
        }
    ],
    validate: [
        (num) => {
            return num >= 21 && num < 120;
        },
        (num) => {
            return num % 2 === 1;
        }
    ]
});
const seriesResult = emitter.seriesEmit('series', 'qwerty'); // pass all cb functions
const validateResult = emitter.validateEmit('validate', 22); // pass first cb, but 22 % 2 != 1
console.log(seriesResult); // { success: true }
console.log(validateResult); // false
// export {
//   I_EventEmitter,
//   I_EventEmitterEvents,
//   I_EventEmitterConstructorConfig,
//   T_Func
// } from "./types";


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AeGFyby9ldmVudC1lbWl0dGVyLy4vc3JjL0V2ZW50RW1pdHRlci50cyIsIndlYnBhY2s6Ly9AeGFyby9ldmVudC1lbWl0dGVyLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovL0B4YXJvL2V2ZW50LWVtaXR0ZXIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vQHhhcm8vZXZlbnQtZW1pdHRlci93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vQHhhcm8vZXZlbnQtZW1pdHRlci93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL0B4YXJvL2V2ZW50LWVtaXR0ZXIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9AeGFyby9ldmVudC1lbWl0dGVyL3dlYnBhY2svc3RhcnR1cCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFZSxNQUFNLFlBQVk7SUFPL0I7O09BRUc7SUFDSCxZQUFZLEtBQXNDLEVBQUU7UUFUcEQ7O1dBRUc7UUFDSCxXQUFNLEdBQXlCLEVBQUUsQ0FBQztRQU9oQyxLQUFLLElBQUksR0FBRyxJQUFJLEVBQUUsRUFBRTtZQUNsQixJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRTtnQkFDWCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQXNCLENBQUM7YUFDekQ7U0FDRjtJQUNILENBQUM7SUFFRDs7T0FFRztJQUNPLGdCQUFnQixDQUFDLEdBQVcsRUFBRSxLQUF3QjtRQUM5RCxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDeEIsS0FBSyxNQUFNLEVBQUUsSUFBSSxLQUFLLEVBQUU7Z0JBQ3RCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUM7YUFDaEM7U0FDRjthQUFNLElBQUksT0FBTyxLQUFLLEtBQUssVUFBVSxFQUFFO1lBQ3RDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFLEtBQWUsQ0FBQyxDQUFDO1NBQ3RDO0lBQ0gsQ0FBQztJQUdEOztPQUVHO0lBQ0gsU0FBUyxDQUFDLEdBQVcsRUFBRSxFQUFVO1FBQy9CLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ2xCLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDO1NBQ3ZCO1FBRUQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7UUFFMUIsT0FBTztZQUNMLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUM7U0FDNUMsQ0FBQztJQUNKLENBQUM7SUFFRDs7O09BR0c7SUFDSCxXQUFXLENBQUMsR0FBVztRQUNyQixJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDcEIsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ3pCO0lBQ0gsQ0FBQztJQUVEOztPQUVHO0lBQ0gsY0FBYyxDQUFDLEdBQVcsRUFBRSxFQUFVO1FBQ3BDLDhDQUE4QztRQUM5QyxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFO1lBQ25DLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBRXpDLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxFQUFFO2dCQUNaLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQzthQUNqQztTQUNGO0lBQ0gsQ0FBQztJQUVEOztPQUVHO0lBQ0gsSUFBSSxDQUFDLEdBQVcsRUFBRSxFQUFVO1FBQzFCLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxFQUFFLEVBQUU7WUFDMUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ2pCLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNYLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVEOzs7T0FHRztJQUNILEdBQUcsQ0FBQyxHQUFXO1FBQ2IsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBRUQ7O09BRUc7SUFDSCxJQUFJLENBQUMsR0FBVyxFQUFFLEdBQUcsSUFBUztRQUM1QixNQUFNLEtBQUssR0FBYSxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRXpDLElBQUksS0FBSyxFQUFFO1lBQ1QsS0FBSyxJQUFJLEVBQUUsSUFBSSxLQUFLLEVBQUU7Z0JBQ3BCLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDO2FBQ2I7U0FDRjtJQUNILENBQUM7SUFHRDs7Ozs7T0FLRztJQUNILFlBQVksQ0FBQyxHQUFXLEVBQUUsR0FBRyxJQUFTO1FBQ3BDLE1BQU0sS0FBSyxHQUFhLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFekMsSUFBSSxDQUFFLEtBQUssRUFBRTtZQUNYLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7UUFFRCxLQUFJLE1BQU0sRUFBRSxJQUFJLEtBQUssRUFBRTtZQUNyQixJQUFJLENBQUUsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUU7Z0JBQ2pCLE9BQU8sS0FBSyxDQUFDO2FBQ2Q7U0FDRjtRQUVELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxVQUFVLENBQUMsR0FBVyxFQUFFLEdBQUcsSUFBUztRQUNsQyxNQUFNLEtBQUssR0FBYSxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRXpDLElBQUksQ0FBRSxLQUFLLEVBQUU7WUFDWCxPQUFPO1NBQ1I7UUFFRCxJQUFJLE1BQVcsQ0FBQztRQUVoQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNyQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQ1gsTUFBTSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDO2FBQzVCO2lCQUFNO2dCQUNMLE1BQU0sR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUM7YUFDM0I7U0FDRjtRQUVELE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7Q0FDRjs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZKeUM7QUFFMUMsK0JBQStCO0FBRS9CLE1BQU0sT0FBTyxHQUFHLElBQUksa0RBQVksQ0FBQztJQUMvQixNQUFNLEVBQUU7UUFDTixDQUFDLENBQVMsRUFBVSxFQUFFO1lBQ3BCLE9BQU8sQ0FBQyxDQUFDLE1BQU0sQ0FBQztRQUNsQixDQUFDO1FBQ0QsQ0FBQyxNQUFjLEVBQVcsRUFBRTtZQUMxQixPQUFPLE1BQU0sR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzFCLENBQUM7UUFDRCxDQUFDLE1BQWUsRUFBVSxFQUFFO1lBQzFCLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLENBQUM7UUFDN0IsQ0FBQztLQUNGO0lBQ0QsUUFBUSxFQUFFO1FBQ1IsQ0FBQyxHQUFXLEVBQVcsRUFBRTtZQUN2QixPQUFPLEdBQUcsSUFBSSxFQUFFLElBQUksR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUNoQyxDQUFDO1FBQ0QsQ0FBQyxHQUFXLEVBQVcsRUFBRTtZQUN2QixPQUFPLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3ZCLENBQUM7S0FDRjtDQUNGLENBQUMsQ0FBQztBQUVILE1BQU0sWUFBWSxHQUFXLE9BQU8sQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUMsd0JBQXdCO0FBQzdGLE1BQU0sY0FBYyxHQUFZLE9BQU8sQ0FBQyxZQUFZLENBQUMsVUFBVSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsaUNBQWlDO0FBRXZHLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxvQkFBb0I7QUFDL0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLFFBQVE7QUFFckMsV0FBVztBQUNYLG9CQUFvQjtBQUNwQiwwQkFBMEI7QUFDMUIscUNBQXFDO0FBQ3JDLFdBQVc7QUFDWCxvQkFBb0I7Ozs7Ozs7VUNyQ3BCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3JCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsc0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7VUNOQTtVQUNBO1VBQ0E7VUFDQSIsImZpbGUiOiJFdmVudEVtaXR0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJX0V2ZW50RW1pdHRlciwgSV9FdmVudEVtaXR0ZXJDb25zdHJ1Y3RvckNvbmZpZywgSV9FdmVudEVtaXR0ZXJFdmVudHMsIFRfRnVuYyB9IGZyb20gJy4vdHlwZXMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFdmVudEVtaXR0ZXIgaW1wbGVtZW50cyBJX0V2ZW50RW1pdHRlciB7XG4gIC8qKlxuICAgKiBFdmVudCBsaXN0XG4gICAqL1xuICBldmVudHM6IElfRXZlbnRFbWl0dGVyRXZlbnRzID0ge307XG5cblxuICAvKipcbiAgICogQ3JlYXRlIEVtaXR0ZXJcbiAgICovXG4gIGNvbnN0cnVjdG9yKG9uOiBJX0V2ZW50RW1pdHRlckNvbnN0cnVjdG9yQ29uZmlnID0ge30pIHtcbiAgICBmb3IgKGxldCBrZXkgaW4gb24pIHtcbiAgICAgIGlmIChvbltrZXldKSB7XG4gICAgICAgIHRoaXMubXVsdGlwbGVTdWJzcmliZShrZXksIG9uW2tleV0gYXMgVF9GdW5jIHwgVF9GdW5jW10pXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENhbGxzIHRoZSBzdWJzY3JpYmUgbWV0aG9kIG9uIGVhY2ggZWxlbWVudCBpbiB0aGUgYXJyYXkuXG4gICAqL1xuICBwcm90ZWN0ZWQgbXVsdGlwbGVTdWJzcmliZShrZXk6IHN0cmluZywgdmFsdWU6IFRfRnVuYyB8IFRfRnVuY1tdKTogdm9pZCB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICBmb3IgKGNvbnN0IGNiIG9mIHZhbHVlKSB7XG4gICAgICAgIHRoaXMubXVsdGlwbGVTdWJzcmliZShrZXksIGNiKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhpcy5zdWJzY3JpYmUoa2V5LCB2YWx1ZSBhcyBUX0Z1bmMpO1xuICAgIH1cbiAgfVxuXG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBrZXkgZm9yIHRoZSBldmVudCBhbmQgc3Vic2NyaWJlcyB0aGUgcGFzc2VkIGNhbGxiYWNrIHRvIGl0LlxuICAgKi9cbiAgc3Vic2NyaWJlKGtleTogc3RyaW5nLCBjYjogVF9GdW5jKTogeyBkaXNwb3NlOiBUX0Z1bmMgfSB7XG4gICAgaWYgKCF0aGlzLmhhcyhrZXkpKSB7XG4gICAgICB0aGlzLmV2ZW50c1trZXldID0gW107XG4gICAgfVxuXG4gICAgdGhpcy5ldmVudHNba2V5XS5wdXNoKGNiKTtcblxuICAgIHJldHVybiB7XG4gICAgICBkaXNwb3NlOiAoKSA9PiB0aGlzLnJlbW92ZUxpc3RlbmVyKGtleSwgY2IpXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbnN1YnNjcmliZXMgYWxsIGNhbGxiYWNrIGZ1bmN0aW9ucyBmcm9tIHRoZSBldmVudCBhbmQgcmVtb3ZlcyB0aGUgZXZlbnRcbiAgICoga2V5LlxuICAgKi9cbiAgdW5zdWJzY3JpYmUoa2V5OiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5ldmVudHNba2V5XSkge1xuICAgICAgZGVsZXRlIHRoaXMuZXZlbnRzW2tleV07XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZXMgYSBzcGVjaWZpYyBldmVudCBrZXkgY2FsbGJhY2sgZnVuY3Rpb24uXG4gICAqL1xuICByZW1vdmVMaXN0ZW5lcihrZXk6IHN0cmluZywgY2I6IFRfRnVuYyk6IHZvaWQge1xuICAgIC8vIGlmICh0eXBlb2YgdGhpcy5ldmVudHNba2V5XSA9PT0gJ29iamVjdCcpIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh0aGlzLmV2ZW50c1trZXldKSkge1xuICAgICAgY29uc3QgaWR4ID0gdGhpcy5ldmVudHNba2V5XS5pbmRleE9mKGNiKTtcblxuICAgICAgaWYgKGlkeCA+IC0xKSB7XG4gICAgICAgIHRoaXMuZXZlbnRzW2tleV0uc3BsaWNlKGlkeCwgMSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENhbGxzIHRoZSBjYWxsYmFjayBmdW5jdGlvbiBvbmx5IG9uY2UsIGFuZCB0aGVuIHJlbW92ZXMgaXQuXG4gICAqL1xuICBvbmNlKGtleTogc3RyaW5nLCBjYjogVF9GdW5jKTogdm9pZCB7XG4gICAgY29uc3QgcmVtb3ZlID0gdGhpcy5zdWJzY3JpYmUoa2V5LCAoZGF0YSkgPT4ge1xuICAgICAgcmVtb3ZlLmRpc3Bvc2UoKTtcbiAgICAgIGNiKGRhdGEpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrcyBmb3IgYW4gZXZlbnQgYnkga2V5LlxuICAgKiAoRG9lc24ndCBjaGVjayBmb3IgY2FsbGJhY2sgZnVuY3Rpb25zKVxuICAgKi9cbiAgaGFzKGtleTogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICEhdGhpcy5ldmVudHNba2V5XTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxscyBhbGwgY2FsbGJhY2sgZnVuY3Rpb25zIG9uIGV2ZW50cyB1c2luZyB0aGUgZXZlbnQga2V5LlxuICAgKi9cbiAgZW1pdChrZXk6IHN0cmluZywgLi4uYXJnczogYW55KTogdm9pZCB7XG4gICAgY29uc3QgZXZlbnQ6IFRfRnVuY1tdID0gdGhpcy5ldmVudHNba2V5XTtcblxuICAgIGlmIChldmVudCkge1xuICAgICAgZm9yIChsZXQgY2Igb2YgZXZlbnQpIHtcbiAgICAgICAgY2IoLi4uYXJncyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cblxuICAvKipcbiAgICogSnVzdCBsaWtlIFwiZW1pdFwiIGNhbGxzIGFsbCBjYWxsYmFjayBmdW5jdGlvbnMuIEhvd2V2ZXIsIHRoZSBjYWxsYmFjayBtdXN0XG4gICAqIHJldHVybiBhIGJvb2xlYW4gdmFsdWUsIHdoaWNoIGRldGVybWluZXMgd2hldGhlciBvciBub3QgdGhlIG5leHQgY2FsbGJhY2tcbiAgICogd2lsbCBleGVjdXRlLlxuICAgKiBBcyBhIHJlc3VsdCwgaXQgcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSBsYXN0IGV4ZWN1dGVkIGNhbGxiYWNrIGZ1bmN0aW9uLlxuICAgKi9cbiAgdmFsaWRhdGVFbWl0KGtleTogc3RyaW5nLCAuLi5hcmdzOiBhbnkpOiBib29sZWFuIHtcbiAgICBjb25zdCBldmVudDogVF9GdW5jW10gPSB0aGlzLmV2ZW50c1trZXldO1xuXG4gICAgaWYgKCEgZXZlbnQpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBmb3IoY29uc3QgY2Igb2YgZXZlbnQpIHtcbiAgICAgIGlmICghIGNiKC4uLmFyZ3MpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICAvKipcbiAgICogSnVzdCBsaWtlIFwiZW1pdFwiIGNhbGxzIGFsbCBjYWxsYmFja3MsIGJ1dCB1bmxpa2UgXCJlbWl0XCIgaXQgcGFzc2VzIHRoZVxuICAgKiByZXN1bHQgb2YgdGhlIHByZXZpb3VzIGNhbGxiYWNrIHRvIHRoZSBuZXh0IG9uZSBhcyBhbiBhcmd1bWVudC5cbiAgICogQXMgYXJlc3VsdCwgaXQgd2lsbCByZXR1cm4gdGhlIHJlc3VsdCBvZiB0aGUgbGFzdCBjYWxsYmFjay5cbiAgICovXG4gIHNlcmllc0VtaXQoa2V5OiBzdHJpbmcsIC4uLmFyZ3M6IGFueSk6IGFueSB7XG4gICAgY29uc3QgZXZlbnQ6IFRfRnVuY1tdID0gdGhpcy5ldmVudHNba2V5XTtcblxuICAgIGlmICghIGV2ZW50KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IHBhcmFtczogYW55O1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBldmVudC5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGkgPT09IDApIHtcbiAgICAgICAgcGFyYW1zID0gZXZlbnRbaV0oLi4uYXJncyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwYXJhbXMgPSBldmVudFtpXShwYXJhbXMpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBwYXJhbXM7XG4gIH1cbn0iLCJpbXBvcnQgRXZlbnRFbWl0dGVyIGZyb20gXCIuL0V2ZW50RW1pdHRlclwiO1xuXG4vLyBleHBvcnQgZGVmYXVsdCBFdmVudEVtaXR0ZXI7XG5cbmNvbnN0IGVtaXR0ZXIgPSBuZXcgRXZlbnRFbWl0dGVyKHtcbiAgc2VyaWVzOiBbXG4gICAgKHg6IHN0cmluZyk6IG51bWJlciA9PiB7XG4gICAgICByZXR1cm4geC5sZW5ndGg7XG4gICAgfSxcbiAgICAobGVuZ3RoOiBudW1iZXIpOiBib29sZWFuID0+IHtcbiAgICAgIHJldHVybiBsZW5ndGggJSAyID09PSAwO1xuICAgIH0sXG4gICAgKGlzRXZlbjogYm9vbGVhbik6IG9iamVjdCA9PiB7XG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBpc0V2ZW4gfTtcbiAgICB9XG4gIF0sXG4gIHZhbGlkYXRlOiBbXG4gICAgKG51bTogbnVtYmVyKTogYm9vbGVhbiA9PiB7XG4gICAgICByZXR1cm4gbnVtID49IDIxICYmIG51bSA8IDEyMDtcbiAgICB9LFxuICAgIChudW06IG51bWJlcik6IGJvb2xlYW4gPT4ge1xuICAgICAgcmV0dXJuIG51bSAlIDIgPT09IDE7XG4gICAgfVxuICBdXG59KTtcblxuY29uc3Qgc2VyaWVzUmVzdWx0OiBvYmplY3QgPSBlbWl0dGVyLnNlcmllc0VtaXQoJ3NlcmllcycsICdxd2VydHknKTtcdC8vIHBhc3MgYWxsIGNiIGZ1bmN0aW9uc1xuY29uc3QgdmFsaWRhdGVSZXN1bHQ6IGJvb2xlYW4gPSBlbWl0dGVyLnZhbGlkYXRlRW1pdCgndmFsaWRhdGUnLCAyMik7XHQvLyBwYXNzIGZpcnN0IGNiLCBidXQgMjIgJSAyICE9IDFcblxuY29uc29sZS5sb2coc2VyaWVzUmVzdWx0KTtcdC8vIHsgc3VjY2VzczogdHJ1ZSB9XG5jb25zb2xlLmxvZyh2YWxpZGF0ZVJlc3VsdCk7XHQvLyBmYWxzZVxuXG4vLyBleHBvcnQge1xuLy8gICBJX0V2ZW50RW1pdHRlcixcbi8vICAgSV9FdmVudEVtaXR0ZXJFdmVudHMsXG4vLyAgIElfRXZlbnRFbWl0dGVyQ29uc3RydWN0b3JDb25maWcsXG4vLyAgIFRfRnVuY1xuLy8gfSBmcm9tIFwiLi90eXBlc1wiOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdGlmKF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0pIHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZVxuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LnRzXCIpO1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgdXNlZCAnZXhwb3J0cycgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxuIl0sInNvdXJjZVJvb3QiOiIifQ==