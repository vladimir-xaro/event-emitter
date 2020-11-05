import { I_EventEmitter, I_EventEmitterConstructorConfig, I_EventEmitterEvents, T_Func } from './types';

export default class EventEmitter implements I_EventEmitter {
  /**
   * Event list
   * @type IEventEmitterEvents
   */
  events: I_EventEmitterEvents = {};


  /**
   * Create Emitter
   * @param {Object} config Configuration object
   */
  constructor(on: I_EventEmitterConstructorConfig = {}) {
    for (let key in on) {
      if (on[key]) {
        this.multipleSubsribe(key, on[key] as T_Func | T_Func[])
      }
    }
  }

  /** multiple subscribe on events */
  protected multipleSubsribe(key: string, value: T_Func | T_Func[]): void {
    if (Array.isArray(value)) {
      this.multipleSubsribe(key, value);
    } else if (typeof value === 'function') {
      this.subscribe(key, value as T_Func);
    }
  }


  /** subscribe on event by key */
  subscribe(key: string, cb: T_Func): { dispose: T_Func } {
    if (!this.events[key]) {
      this.events[key] = [];
    }

    this.events[key].push(cb);

    return {
      dispose: () => this.removeListener(key, cb)
    };
  }

  /** unsubscribe all cb from events by key and remove key from events */
  unsubscribe(key: string): void {
    if (this.events[key]) {
      delete this.events[key];
    }
  }

  /** remove cb from event by key and cb */
  removeListener(key: string, cb: T_Func): void {
    // if (typeof this.events[key] === 'object') {
    if (Array.isArray(this.events[key])) {
      const idx = this.events[key].indexOf(cb);

      if (idx > -1) {
        this.events[key].splice(idx, 1);
      }
    }
  }

  /** once emit cb and remove it */
  once(key: string, cb: T_Func): void {
    const remove = this.subscribe(key, (data) => {
      remove.dispose();
      cb(data);
    });
  }

  /** check if key exists in events */
  has(key: string): boolean {
    return !!this.events[key];
  }

  /** fire all cbs from event by key */
  emit(key: string, ...args: any): void {
    const event = this.events[key];

    if (event) {
      for (let cb of event) {
        cb(...args);
      }
    }
  }
}