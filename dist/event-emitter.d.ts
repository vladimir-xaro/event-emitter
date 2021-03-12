export default class EventEmitter {
  events: EventEmitterEvents;

  constructor(config?: EventEmitterConstructorConfig);

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

export interface EventEmitterConstructorConfig {
  [key: string]: Function | Function[] | undefined;
}

export interface EventEmitterEvents {
  [key: string]: Function[];
}