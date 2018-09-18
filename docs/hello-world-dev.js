(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (factory((global.hw = {})));
}(this, (function (exports) { 'use strict';

  var index = 42;

  function hello() {
    console.log('By the way, the answer is ' + index);
    return 'hello';
  }

  function world() {
    return 'world';
  }

  exports.hello = hello;
  exports.world = world;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
