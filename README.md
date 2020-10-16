# EventEmitter

EventEmitter as node.js, but for browsers.

## Install

```
$ npm install @xaro/event-emitter
```

## Usage
```ts
import EventEmitter from '@xaro/event-emitter';

const emitter = new  EventEmitter();
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

## Methods
#### subscribe(key: string, cb: Function): { dispose: Function };
	Subscribe on event by key

#### unsubscribe(key: string): void;
	Unsubscribe from all callbacks from the event and remove its key

#### removeListener(key: string, cb: Function): void;
	Remove callback from event by callback function

#### once(key: string, cb: Function): void;
	Call once call back

#### has(key: string): boolean;
	Return event key exists

#### emit(key: string, data: any): void;
	Emit all callbacks from event by key


## License
[MIT](LICENSE)