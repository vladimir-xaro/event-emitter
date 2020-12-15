!function(r,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.EventEmitter=t():r.EventEmitter=t()}(this,(function(){return(()=>{"use strict";var r={735:(r,t,e)=>{e.d(t,{default:()=>a});var n=function(r){var t="function"==typeof Symbol&&Symbol.iterator,e=t&&r[t],n=0;if(e)return e.call(r);if(r&&"number"==typeof r.length)return{next:function(){return r&&n>=r.length&&(r=void 0),{value:r&&r[n++],done:!r}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")},o=function(r,t){var e="function"==typeof Symbol&&r[Symbol.iterator];if(!e)return r;var n,o,i=e.call(r),a=[];try{for(;(void 0===t||t-- >0)&&!(n=i.next()).done;)a.push(n.value)}catch(r){o={error:r}}finally{try{n&&!n.done&&(e=i.return)&&e.call(i)}finally{if(o)throw o.error}}return a},i=function(){for(var r=[],t=0;t<arguments.length;t++)r=r.concat(o(arguments[t]));return r};const a=function(){function r(r){for(var t in void 0===r&&(r={}),this.events={},r)r[t]&&this.subscribe(t,r[t])}return r.prototype.subscribe=function(r,t){var e,o,a=this;this.has(r)||(this.events[r]=[]);var f=[];if(Array.isArray(t))try{for(var s=n(t),u=s.next();!u.done;u=s.next()){var l=u.value;f.push.apply(f,i(this.subscribe(r,l)))}}catch(r){e={error:r}}finally{try{u&&!u.done&&(o=s.return)&&o.call(s)}finally{if(e)throw e.error}}else this.events[r].push(t),f.push((function(){return a.removeListener(r,t)}));return f},r.prototype.unsubscribe=function(){for(var r,t,e=[],o=0;o<arguments.length;o++)e[o]=arguments[o];try{for(var i=n(e),a=i.next();!a.done;a=i.next()){var f=a.value;this.events[f]&&delete this.events[f]}}catch(t){r={error:t}}finally{try{a&&!a.done&&(t=i.return)&&t.call(i)}finally{if(r)throw r.error}}},r.prototype.removeListener=function(r,t){if(Array.isArray(this.events[r])){var e=this.events[r].indexOf(t);e>-1&&this.events[r].splice(e,1)}},r.prototype.once=function(r,t){var e=this.subscribe(r,(function(){e[0](),Array.isArray(t)?t.forEach((function(r){return r()})):t()}))},r.prototype.has=function(r){return!!this.events[r]},r.prototype.listenerCount=function(r){return!!this.events.hasOwnProperty(r)&&this.events[r].length},r.prototype.emit=function(r){for(var t,e,o=[],a=1;a<arguments.length;a++)o[a-1]=arguments[a];var f=this.events[r];if(f)try{for(var s=n(f),u=s.next();!u.done;u=s.next()){var l=u.value;l.apply(void 0,i(o))}}catch(r){t={error:r}}finally{try{u&&!u.done&&(e=s.return)&&e.call(s)}finally{if(t)throw t.error}}},r.prototype.validateEmit=function(r){for(var t,e,o=[],a=1;a<arguments.length;a++)o[a-1]=arguments[a];var f=this.events[r];if(!f)return!1;try{for(var s=n(f),u=s.next();!u.done;u=s.next()){var l=u.value;if(!l.apply(void 0,i(o)))return!1}}catch(r){t={error:r}}finally{try{u&&!u.done&&(e=s.return)&&e.call(s)}finally{if(t)throw t.error}}return!0},r.prototype.seriesEmit=function(r){for(var t=[],e=1;e<arguments.length;e++)t[e-1]=arguments[e];var n=this.events[r];if(n){for(var o,a=0;a<n.length;a++)o=0===a?n[a].apply(n,i(t)):n[a](o);return o}},r}()}},t={};function e(n){if(t[n])return t[n].exports;var o=t[n]={exports:{}};return r[n](o,o.exports,e),o.exports}return e.d=(r,t)=>{for(var n in t)e.o(t,n)&&!e.o(r,n)&&Object.defineProperty(r,n,{enumerable:!0,get:t[n]})},e.o=(r,t)=>Object.prototype.hasOwnProperty.call(r,t),e(735)})().default}));
//# sourceMappingURL=EventEmitter.js.map