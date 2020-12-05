[![DeepScan grade](https://deepscan.io/api/teams/11657/projects/14577/branches/274604/badge/grade.svg)](https://deepscan.io/dashboard#view=project&tid=11657&pid=14577&bid=274604)

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

const dispose = emitter.subscribe('event', args => {
	console.log(`${args[0]} ${args[1]}`);
});

emitter.emit('event', 'Hello,', 'World');
emitter.emit('event', 'It\'s', 'me');
dispose();
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
	'event-1': [
		() => {
			console.log('event-1 - cb #0')
		},
		() => {
			console.log('event-1 - cb #1')
		},
		() => {
			console.log('event-1 - cb #2')
		}
	],
	'event-2': () => {
		console.log('event-2 - cb #0')
	}
});

emitter.once('event-3', () => {
	console.log('[once] event-3 - cb');
})
emitter.once('event-4', [
	() => {
		console.log('[once] event-4 - cb #0');
	},
	() => {
		console.log('[once] event-4 - cb #1')
	}
])

emitter.emit('event1');

emitter.emit('event2');

emitter.emit('event-3');
emitter.emit('event-3');	// Will not be called

emitter.emit('event-4');
emitter.emit('event-4');	// Will not be called
```
Result:
```
event1 - cb #0
event1 - cb #1
event1 - cb #2
event2 - cb #0
[once] event3 - cb
[once] event4 - cb #0
[once] event4 - cb #1
```

***

## Series and Validate emits:
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

*types.d.ts*
```ts
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
```

## Methods
#### subscribe(key: string, cb: Function | Function[]): Function[];
	Creates a key for the event and subscribes the passed callback function/s to it.

#### unsubscribe(...key: string[]): void;
	Unsubscribes all callback functions from the event/s and removes the event key.

#### removeListener(key: string, cb: Function): void;
	Removes a specific event key callback function.

#### once(key: string, cb: Function | Function[]): void;
	Calls the callback function/s only once, and then removes it.

#### has(key: string): boolean;
	Checks for an event by key.
	(Doesn't check for callback functions)

#### listenerCount(key: string): number | false;
	Returns the number of callback functions for the event key or "false" if there is no key

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