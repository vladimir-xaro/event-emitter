"use strict";

module.exports = class {
    /**
     * Event list
     */
    events={};
    /**
     * Create Emitter
     */
    constructor(e = {}) {
        for (let s in e) e[s] && this.subscribe(s, e[s]);
    }
    /**
     * Creates a key for the event and subscribes the passed callback to it.
     */    subscribe(e, s) {
        this.has(e) || (this.events[e] = []);
        let t = [];
        if (Array.isArray(s)) for (const r of s) t.push(...this.subscribe(e, r)); else this.events[e].push(s), 
        t.push((() => this.removeListener(e, s)));
        return t;
    }
    /**
     * Unsubscribes all callback functions from the event and removes the event
     * key.
     */    unsubscribe(...e) {
        for (const s of e) this.events[s] && delete this.events[s];
    }
    /**
     * Removes a specific event key callback function.
     */    removeListener(e, s) {
        // if (typeof this.events[key] === 'object') {
        if (Array.isArray(this.events[e])) {
            const t = this.events[e].indexOf(s);
            t > -1 && this.events[e].splice(t, 1);
        }
    }
    /**
     * Calls the callback function only once, and then removes it.
     */    once(e, s) {
        const t = this.subscribe(e, (() => {
            t[0](), Array.isArray(s) ? s.forEach((e => e())) : s();
        }));
    }
    /**
     * Checks for an event by key.
     * (Doesn't check for callback functions)
     */    has(e) {
        return !!this.events[e];
    }
    /**
     * Returns the number of callback functions for the event key or "false" if
     * there is no key
     */    listenerCount(e) {
        return !!this.events.hasOwnProperty(e) && this.events[e].length;
    }
    /**
     * Calls all callback functions on events using the event key.
     */    emit(e, ...s) {
        const t = this.events[e];
        if (t) for (let e of t) e(...s);
    }
    /**
     * Just like "emit" calls all callback functions. However, the callback must
     * return a boolean value, which determines whether or not the next callback
     * will execute.
     * As a result, it returns the result of the last executed callback function.
     */    validateEmit(e, ...s) {
        const t = this.events[e];
        if (!t) return !1;
        for (const e of t) if (!e(...s)) return !1;
        return !0;
    }
    /**
     * Just like "emit" calls all callbacks, but unlike "emit" it passes the
     * result of the previous callback to the next one as an argument.
     * As aresult, it will return the result of the last callback.
     */    seriesEmit(e, ...s) {
        const t = this.events[e];
        if (!t) return;
        let r;
        for (let e = 0; e < t.length; e++) r = 0 === e ? t[e](...s) : t[e](r);
        return r;
    }
};
//# sourceMappingURL=event-emitter.cjs.js.map
