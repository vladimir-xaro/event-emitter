# @xaro/event-emitter

EventEmitter as in node.js, but for TypeScript. Includes interfaces and additional methods

## Install

```
$ npm install @xaro/event-emitter
```

## Usage
```ts
import EventEmitter from '@xaro/event-emitter';

const emitter = new EventEmitter();

const disposeObj = emitter.subscribe('event', args => {
	console.log(`${args[0]} ${args[1]}`);
});

emitter.emit('event', 'Hello,', 'World');
emitter.emit('event', 'It\'s', 'me');
disposeObj.dispose();
emitter.emit('event', 'will not show');
```
Result:
```
Hello, World
It's me
```

***

Also u can extends Emitter class

```ts
import EventEmitter from '@xaro/event-emitter';

class ExtendedEmitter extends EventEmitter {
	constructor(config) {
		super(config.on);
	}
}

const extendedEmitter = new ExtendedEmitter({
	event: () => {
		console.log('It\'s work');
	}
});

extendedEmitter.emit('event');
```
Result:
```
It's work
```

***

Also you can pass callbacks in array:
```ts
import EventEmitter from '@xaro/event-emitter';

const emitter = new EventEmitter({
	event1: [
		() => {
			console.log('event1 - cb #0')
		},
		() => {
			console.log('event1 - cb #1')
		},
		() => {
			console.log('event1 - cb #2')
		}
	],
	event2: () => {
		console.log('event2 - cb #0')
	}
});

emitter.emit('event1');
emitter.emit('event2');
```
Result:
```
event1 - cb #0
event1 - cb #1
event1 - cb #2
event2 - cb #0
```

***

Example with series and validate:
```ts
import EventEmitter from '@xaro/event-emitter';

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

const seriesResult: object	= emitter.seriesEmit('series', 'qwerty');	// pass all cb functions
const validateResult: boolean	= emitter.validateEmit('validate', 22);		// pass first cb, but 22 % 2 != 1

console.log(seriesResult);	// { success: true }
console.log(validateResult);	// false

```

## Interfaces & Types
You can import these interfaces and extend them as needed.

*types.d.ts*
```ts
export interface I_EventEmitter {
	events: I_EventEmitterEvents;

	subscribe(key: string, cb: T_Func): { dispose: T_Func };
	unsubscribe(key: string): void;
	removeListener(key: string, cb: T_Func): void;
	once(key: string, cb: T_Func): void;
	has(key: string): boolean;
	emit(key: string, ...args: any): void;
	validateEmit(key: string, ...args: any): boolean;
}

export interface I_EventEmitterConstructorConfig {
	[key: string]: T_Func | T_Func[] | undefined;
}

export interface I_EventEmitterEvents {
	[key: string]: T_Func[];
}

export type T_Func = (...args: any) => any
```
*your_file.ts*
```ts
import EventEmitter, {
	I_EventEmitter,
	I_EventEmitterEvents,
	I_EventEmitterConstructorConfig,
	T_Func
} from "@xaro/event-emitter";

/** */
```

## Methods
#### subscribe(key: string, cb: T_Func): { dispose: T_Func };
	Creates a key for the event and subscribes the passed callback to it.

#### unsubscribe(key: string): void;
	Unsubscribes all callback functions from the event and removes the event key.

#### removeListener(key: string, cb: T_Func): void;
	Removes a specific event key callback function.

#### once(key: string, cb: T_Func): void;
	Calls the callback function only once, and then removes it.

#### has(key: string): boolean;
	Checks for an event by key.
	(Doesn't check for callback functions)

#### emit(key: string, ...args: any): void;
	Calls all callback functions on events using the event key.

#### validateEmit(key: string, ...args: any): boolean;
	Just like "emit" calls all callback functions. However, the callback must return a boolean value, which determines whether or not the next callback will execute.
	As a result, it returns the result of the last executed callback function.

#### seriesEmit(key: string, ...args: any): any
	Just like "emit" calls all callbacks, but unlike "emit" it passes the result of the previous callback to the next one as an argument.
	As aresult, it will return the result of the last callback.


## License
[MIT](LICENSE)