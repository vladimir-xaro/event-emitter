# EventEmitter

EventEmitter as node.js, but for browsers.

## Install

```
$ npm install @xaro/event-emitter
```

## Usage
```ts
import EventEmitter from '@xaro/event-emitter';

const emitter = new EventEmitter();
const disposeObj = emitter.subscribe('event', args  => {
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

Also u can extends Emitter class

```ts
import EventEmitter from '@xaro/event-emitter';

class ExtendedEmitter extends EventEmitter {
	constructor(config) {
		super(config.on);
	}
}

const extendedEmitter = new ExtendedEmitter({
	on: {
		event() {
			console.log('It\'s work');
		}
	}
});

extendedEmitter.emit('event');
```
Result:
```
It's work
```

Also you can pass callbacks in array:
```ts
import EventEmitter from '@xaro/event-emitter';

const emitter = new EventEmitter({
	on: {
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
  emit(key: string, data: any): void;
}

export interface I_EventEmitterConstructorConfig {
  [key: string]: T_Func | T_Func[];
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
	Subscribe on event by key

#### unsubscribe(key: string): void;
	Unsubscribe from all callbacks from the event and remove its key

#### removeListener(key: string, cb: T_Func): void;
	Remove callback from event by callback function

#### once(key: string, cb: T_Func): void;
	Call once call back

#### has(key: string): boolean;
	Return event key exists

#### emit(key: string, ...args: any): void;
	Emit all callbacks from event by key


## License
[MIT](LICENSE)