export interface I_EventEmitter {
  events: I_EventEmitterEvents;

  subscribe(key: string, cb: T_Func | T_Func[]): T_Func[];
  unsubscribe(key: string): void;
  removeListener(key: string, cb: T_Func): void;
  once(key: string, cb: T_Func | T_Func[]): void;
  has(key: string): boolean;
  emit(key: string, ...args: any): void;
  validateEmit(key: string, ...args: any): boolean;
  seriesEmit(key: string, ...args: any): any;
}

export interface I_EventEmitterConstructorConfig {
  [key: string]: T_Func | T_Func[] | undefined;
}

export interface I_EventEmitterEvents {
  [key: string]: T_Func[];
}

export type T_Func = (...args: any) => any;