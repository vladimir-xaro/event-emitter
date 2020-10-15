import IEventEmitter, { IEventEmitterConstructorConfig, IEventEmitterEvents } from './IEventEmitter';

export default class EventEmitter implements IEventEmitter {
  /**
   * Event list
   * @type IEventEmitterEvents
   */
  events: IEventEmitterEvents = {};


  /**
   * Create Emitter
   * @param {Object} config Configuration object
   */
  constructor(on: IEventEmitterConstructorConfig = {}) {
    for (let key in on) {
      this.subscribe(key, on[key]);
    }
  }


  /** subscribe on event by key */
  subscribe(key: string, cb: Function): { dispose: Function } {
    if (!this.events[key]) {
      this.events[key] = [];
    }

    this.events[key].push(cb);

    return {
      dispose: () => this.removeListener(key, cb)
    };
  }


  unsubscribe(key: string): void {
    if (this.events[key]) {
      delete this.events[key];
    }
  }


  removeListener(key: string, cb: Function): void {
    // if (typeof this.events[key] === 'object') {
    if (Array.isArray(this.events[key])) {
      const idx = this.events[key].indexOf(cb);

      if (idx > -1) {
        this.events[key].splice(idx, 1);
      }
    }
  }

  once(key: string, cb: Function): void {
    const remove = this.subscribe(key, (data) => {
      remove.dispose();
      cb(data);
    });
  }


  has(key: string): boolean {
    return !!this.events[key];
  }


  emit(key: string, data: any): void {
    const event = this.events[key];

    if (event) {
      for (let cb of event) {
        cb(data);
      }
    }
  }
}