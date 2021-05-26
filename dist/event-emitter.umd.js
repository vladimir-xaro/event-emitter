!function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).EventEmitter = t();
}(this, (function() {
    "use strict";
    return class {
        /**
         * Event list
         */
        events={};
        /**
         * Create Emitter
         */
        constructor(e = {}) {
            for (let t in e) e[t] && this.subscribe(t, e[t]);
        }
        /**
         * Creates a key for the event and subscribes the passed callback to it.
         */        subscribe(e, t) {
            this.has(e) || (this.events[e] = []);
            let s = [];
            if (Array.isArray(t)) for (const n of t) s.push(...this.subscribe(e, n)); else this.events[e].push(t), 
            s.push((() => this.removeListener(e, t)));
            return s;
        }
        /**
         * Unsubscribes all callback functions from the event and removes the event
         * key.
         */        unsubscribe(...e) {
            for (const t of e) this.events[t] && delete this.events[t];
        }
        /**
         * Removes a specific event key callback function.
         */        removeListener(e, t) {
            // if (typeof this.events[key] === 'object') {
            if (Array.isArray(this.events[e])) {
                const s = this.events[e].indexOf(t);
                s > -1 && this.events[e].splice(s, 1);
            }
        }
        /**
         * Calls the callback function only once, and then removes it.
         */        once(e, t) {
            const s = this.subscribe(e, (() => {
                s[0](), Array.isArray(t) ? t.forEach((e => e())) : t();
            }));
        }
        /**
         * Checks for an event by key.
         * (Doesn't check for callback functions)
         */        has(e) {
            return !!this.events[e];
        }
        /**
         * Returns the number of callback functions for the event key or "false" if
         * there is no key
         */        listenerCount(e) {
            return !!this.events.hasOwnProperty(e) && this.events[e].length;
        }
        /**
         * Calls all callback functions on events using the event key.
         */        emit(e, ...t) {
            const s = this.events[e];
            if (s) for (let e of s) e(...t);
        }
        /**
         * Just like "emit" calls all callback functions. However, the callback must
         * return a boolean value, which determines whether or not the next callback
         * will execute.
         * As a result, it returns the result of the last executed callback function.
         */        validateEmit(e, ...t) {
            const s = this.events[e];
            if (!s) return !1;
            for (const e of s) if (!e(...t)) return !1;
            return !0;
        }
        /**
         * Just like "emit" calls all callbacks, but unlike "emit" it passes the
         * result of the previous callback to the next one as an argument.
         * As aresult, it will return the result of the last callback.
         */        seriesEmit(e, ...t) {
            const s = this.events[e];
            if (!s) return;
            let n;
            for (let e = 0; e < s.length; e++) n = 0 === e ? s[e](...t) : s[e](n);
            return n;
        }
    };
}));
//# sourceMappingURL=event-emitter.umd.js.map
