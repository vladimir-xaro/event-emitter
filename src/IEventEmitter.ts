export default interface IEventEmitter {
  events: IEventEmitterEvents;

  subscribe(key: string, cb: Function): { dispose: Function };
  unsubscribe(key: string): void;
  removeListener(key: string, cb: Function): void;
  once(key: string, cb: Function): void;
  has(key: string): boolean;
  emit(key: string, data: any): void;
}

export interface IEventEmitterConstructorConfig {
  [key: string]: Function;
}

export interface IEventEmitterEvents {
  [key: string]: Function[];
}