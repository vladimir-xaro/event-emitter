import EventEmitter from "./EventEmitter";

// export default EventEmitter;

const emitter = new EventEmitter({
  series: [
    (x: string): number => {
      return x.length;
    },
    (length: number): boolean => {
      return length % 2 === 0;
    },
    (isEven: boolean): object => {
      return { success: isEven };
    }
  ],
  validate: [
    (num: number): boolean => {
      return num >= 21 && num < 120;
    },
    (num: number): boolean => {
      return num % 2 === 1;
    }
  ]
});

const seriesResult: object = emitter.seriesEmit('series', 'qwerty');	// pass all cb functions
const validateResult: boolean = emitter.validateEmit('validate', 22);	// pass first cb, but 22 % 2 != 1

console.log(seriesResult);	// { success: true }
console.log(validateResult);	// false

// export {
//   I_EventEmitter,
//   I_EventEmitterEvents,
//   I_EventEmitterConstructorConfig,
//   T_Func
// } from "./types";