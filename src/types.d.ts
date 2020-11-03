export interface I_EventEmitter {
  events: I_EventEmitterEvents;

  subscribe(key: string, cb: (...args) => any): { dispose: (...args) => any };
  unsubscribe(key: string): void;
  removeListener(key: string, cb: (...args) => any): void;
  once(key: string, cb: (...args) => any): void;
  has(key: string): boolean;
  emit(key: string, data: any): void;
}

export interface I_EventEmitterConstructorConfig {
  [key: string]: (...args) => any;
}

export interface I_EventEmitterEvents {
  [key: string]: ((...args) => any)[];
}