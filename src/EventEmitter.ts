import { I_EventEmitter, I_EventEmitterConstructorConfig, I_EventEmitterEvents, T_Func } from './types';

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
        this.multipleSubsribe(key, on[key] as T_Func | T_Func[])
      }
    }
  }

  /**
   * Calls the subscribe method on each element in the array.
   */
  protected multipleSubsribe(key: string, value: T_Func | T_Func[]): void {
    if (Array.isArray(value)) {
      for (const cb of value) {
        this.multipleSubsribe(key, cb);
      }
    } else if (typeof value === 'function') {
      this.subscribe(key, value as T_Func);
    }
  }


  /**
   * Creates a key for the event and subscribes the passed callback to it.
   */
  subscribe(key: string, cb: T_Func): { dispose: T_Func } {
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
  unsubscribe(key: string): void {
    if (this.events[key]) {
      delete this.events[key];
    }
  }

  /**
   * Removes a specific event key callback function.
   */
  removeListener(key: string, cb: T_Func): void {
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
  once(key: string, cb: T_Func): void {
    const remove = this.subscribe(key, (data) => {
      remove.dispose();
      cb(data);
    });
  }

  /**
   * Checks for an event by key.
   * (Doesn't check for callback functions)
   */
  has(key: string): boolean {
    return !!this.events[key];
  }

  /**
   * Calls all callback functions on events using the event key.
   */
  emit(key: string, ...args: any): void {
    const event: T_Func[] = this.events[key];

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
    const event: T_Func[] = this.events[key];

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
    const event: T_Func[] = this.events[key];

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