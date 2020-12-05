export interface I_EventEmitter {
  events: I_EventEmitterEvents;

  subscribe(key: string, cb: Function | Function[]): Function[];
  unsubscribe(...keys: string[]): void;
  removeListener(key: string, cb: Function): void;
  once(key: string, cb: Function | Function[]): void;
  has(key: string): boolean;
  listenerCount(key: string): number | false;
  emit(key: string, ...args: any): void;
  validateEmit(key: string, ...args: any): boolean;
  seriesEmit(key: string, ...args: any): any;
}

export interface I_EventEmitterConstructorConfig {
  [key: string]: Function | Function[] | undefined;
}

export interface I_EventEmitterEvents {
  [key: string]: Function[];
}