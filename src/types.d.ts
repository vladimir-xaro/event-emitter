export interface I_EventEmitter {
  events: I_EventEmitterEvents;

  subscribe(key: string, cb: T_Func): { dispose: T_Func };
  unsubscribe(key: string): void;
  removeListener(key: string, cb: T_Func): void;
  once(key: string, cb: T_Func): void;
  has(key: string): boolean;
  emit(key: string, ...args: any): void;
}

export interface I_EventEmitterConstructorConfig {
  [key: string]: T_Func | T_Func[];
}

export interface I_EventEmitterEvents {
  [key: string]: T_Func[];
}

export type T_Func = (...args: any) => any