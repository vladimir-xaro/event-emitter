export interface I_EventEmitter {
  events: I_EventEmitterEvents;

  subscribe(key: string, cb: Function): { dispose: Function };
  unsubscribe(key: string): void;
  removeListener(key: string, cb: Function): void;
  once(key: string, cb: Function): void;
  has(key: string): boolean;
  emit(key: string, data: any): void;
}

export interface I_EventEmitterConstructorConfig {
  [key: string]: Function;
}

export interface I_EventEmitterEvents {
  [key: string]: Function[];
}