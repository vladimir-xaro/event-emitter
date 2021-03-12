import {
  EventEmitter as I_EventEmitter,
  EventEmitterConstructorConfig as I_EventEmitterConstructorConfig,
  EventEmitterEvents as I_EventEmitterEvents
} from './types';

export default class EventEmitter implements I_EventEmitter {
  /**
   * Event list
   */
  events: I_EventEmitterEvents = {};


  /**
   * Create Emitter
   */
  constructor(on: I_EventEmitterConstructorConfig = {}) {
    for (let key in on) {
      if (on[key]) {
        this.subscribe(key, on[key] as Function | Function[]);
      }
    }
  }


  /**
   * Creates a key for the event and subscribes the passed callback to it.
   */
  subscribe(key: string, cb: Function | Function[]): Function[] {
    if (!this.has(key)) {
      this.events[key] = [];
    }

    let removes: Function[] = [];

    if (Array.isArray(cb)) {
      for (const _cb of cb) {
        removes.push(...this.subscribe(key, _cb));
      }
    } else {
      this.events[key].push(cb);
      removes.push(() => this.removeListener(key, cb));
    }

    return removes;
  }


  /**
   * Unsubscribes all callback functions from the event and removes the event
   * key.
   */
  unsubscribe(...keys: string[]): void {
    for (const key of keys) {
      if (this.events[key]) {
        delete this.events[key];
      }
    }
  }


  /**
   * Removes a specific event key callback function.
   */
  removeListener(key: string, cb: Function): void {
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
  once(key: string, cb: Function | Function[]): void {
    const remove = this.subscribe(key, () => {
      remove[0]();
      Array.isArray(cb) ? cb.forEach(_cb => _cb()) : cb();
    })
  }


  /**
   * Checks for an event by key.
   * (Doesn't check for callback functions)
   */
  has(key: string): boolean {
    return !!this.events[key];
  }


  /**
   * Returns the number of callback functions for the event key or "false" if
   * there is no key
   */
  listenerCount(key: string): number | false {
    if (! this.events.hasOwnProperty(key)) {
      return false
    }

    return this.events[key].length;
  }


  /**
   * Calls all callback functions on events using the event key.
   */
  emit(key: string, ...args: any): void {
    const event: Function[] = this.events[key];

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
  validateEmit(key: string, ...args: any): boolean {
    const event: Function[] = this.events[key];

    if (! event) {
      return false;
    }

    for(const cb of event) {
      if (! cb(...args)) {
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
  seriesEmit(key: string, ...args: any): any {
    const event: Function[] = this.events[key];

    if (! event) {
      return;
    }

    let params: any;

    for (let i = 0; i < event.length; i++) {
      if (i === 0) {
        params = event[i](...args);
      } else {
        params = event[i](params);
      }
    }

    return params;
  }
}