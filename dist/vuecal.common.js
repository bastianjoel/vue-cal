module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		32: 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "vuecal.common." + ({"0":"i18n/ar","1":"i18n/bg","2":"i18n/bs","3":"i18n/ca","4":"i18n/cs","5":"i18n/da","6":"i18n/de","7":"i18n/es","8":"i18n/fa","9":"i18n/fr","10":"i18n/he","11":"i18n/hr","12":"i18n/hu","13":"i18n/it","14":"i18n/ja","15":"i18n/ka","16":"i18n/ko","17":"i18n/nl","18":"i18n/no","19":"i18n/pl","20":"i18n/pt-br","21":"i18n/ro","22":"i18n/ru","23":"i18n/sk","24":"i18n/sl","25":"i18n/sr","26":"i18n/sv","27":"i18n/tr","28":"i18n/uk","29":"i18n/vi","30":"i18n/zh-cn","31":"i18n/zh-hk"}[chunkId]||chunkId) + ".js"
/******/ 	}
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							var error = new Error('Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')');
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = (typeof self !== 'undefined' ? self : this)["webpackJsonpvuecal"] = (typeof self !== 'undefined' ? self : this)["webpackJsonpvuecal"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "0029":
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "00aa":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "0185":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__("e5fa");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "01f9":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__("2d00");
var $export = __webpack_require__("5ca1");
var redefine = __webpack_require__("2aba");
var hide = __webpack_require__("32e9");
var Iterators = __webpack_require__("84f2");
var $iterCreate = __webpack_require__("41a0");
var setToStringTag = __webpack_require__("7f20");
var getPrototypeOf = __webpack_require__("38fd");
var ITERATOR = __webpack_require__("2b4c")('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),

/***/ "02f4":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("4588");
var defined = __webpack_require__("be13");
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),

/***/ "0a0a":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da3c");
var core = __webpack_require__("a7d3");
var LIBRARY = __webpack_require__("b457");
var wksExt = __webpack_require__("fda1");
var defineProperty = __webpack_require__("3adc").f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),

/***/ "0a49":
/***/ (function(module, exports, __webpack_require__) {

// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx = __webpack_require__("9b43");
var IObject = __webpack_require__("626a");
var toObject = __webpack_require__("4bf8");
var toLength = __webpack_require__("9def");
var asc = __webpack_require__("cd1c");
module.exports = function (TYPE, $create) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  var create = $create || asc;
  return function ($this, callbackfn, that) {
    var O = toObject($this);
    var self = IObject(O);
    var f = ctx(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var val, res;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      val = self[index];
      res = f(val, index, O);
      if (TYPE) {
        if (IS_MAP) result[index] = res;   // map
        else if (res) switch (TYPE) {
          case 3: return true;             // some
          case 5: return val;              // find
          case 6: return index;            // findIndex
          case 2: result.push(val);        // filter
        } else if (IS_EVERY) return false; // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};


/***/ }),

/***/ "0a61":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "0a91":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("b42c");
__webpack_require__("93c4");
module.exports = __webpack_require__("b77f");


/***/ }),

/***/ "0bfb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 21.2.5.3 get RegExp.prototype.flags
var anObject = __webpack_require__("cb7c");
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),

/***/ "0d58":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__("ce10");
var enumBugKeys = __webpack_require__("e11e");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "0f89":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("6f8a");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "103a":
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__("da3c").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "1169":
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__("2d95");
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),

/***/ "11e9":
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__("52a7");
var createDesc = __webpack_require__("4630");
var toIObject = __webpack_require__("6821");
var toPrimitive = __webpack_require__("6a99");
var has = __webpack_require__("69a8");
var IE8_DOM_DEFINE = __webpack_require__("c69a");
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__("9e1e") ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),

/***/ "12fd":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("6f8a");
var document = __webpack_require__("da3c").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "12fd9":
/***/ (function(module, exports) {



/***/ }),

/***/ "1495":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("86cc");
var anObject = __webpack_require__("cb7c");
var getKeys = __webpack_require__("0d58");

module.exports = __webpack_require__("9e1e") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "1790":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./ar": [
		"bd5b",
		0
	],
	"./ar.json": [
		"bd5b",
		0
	],
	"./bg": [
		"3e48",
		1
	],
	"./bg.json": [
		"3e48",
		1
	],
	"./bs": [
		"53fe",
		2
	],
	"./bs.json": [
		"53fe",
		2
	],
	"./ca": [
		"36ee",
		3
	],
	"./ca.json": [
		"36ee",
		3
	],
	"./cs": [
		"e3ad",
		4
	],
	"./cs.json": [
		"e3ad",
		4
	],
	"./da": [
		"e5bc",
		5
	],
	"./da.json": [
		"e5bc",
		5
	],
	"./de": [
		"8d7d",
		6
	],
	"./de.json": [
		"8d7d",
		6
	],
	"./en": [
		"7213"
	],
	"./en.json": [
		"7213"
	],
	"./es": [
		"e240",
		7
	],
	"./es.json": [
		"e240",
		7
	],
	"./fa": [
		"d53bf",
		8
	],
	"./fa.json": [
		"d53bf",
		8
	],
	"./fr": [
		"0699",
		9
	],
	"./fr.json": [
		"0699",
		9
	],
	"./he": [
		"616e",
		10
	],
	"./he.json": [
		"616e",
		10
	],
	"./hr": [
		"7cd4",
		11
	],
	"./hr.json": [
		"7cd4",
		11
	],
	"./hu": [
		"e131",
		12
	],
	"./hu.json": [
		"e131",
		12
	],
	"./it": [
		"eed7",
		13
	],
	"./it.json": [
		"eed7",
		13
	],
	"./ja": [
		"39f7",
		14
	],
	"./ja.json": [
		"39f7",
		14
	],
	"./ka": [
		"acbd",
		15
	],
	"./ka.json": [
		"acbd",
		15
	],
	"./ko": [
		"50dc",
		16
	],
	"./ko.json": [
		"50dc",
		16
	],
	"./nl": [
		"b258",
		17
	],
	"./nl.json": [
		"b258",
		17
	],
	"./no": [
		"f1ef",
		18
	],
	"./no.json": [
		"f1ef",
		18
	],
	"./pl": [
		"6079",
		19
	],
	"./pl.json": [
		"6079",
		19
	],
	"./pt-br": [
		"89f4",
		20
	],
	"./pt-br.json": [
		"89f4",
		20
	],
	"./ro": [
		"abf5",
		21
	],
	"./ro.json": [
		"abf5",
		21
	],
	"./ru": [
		"a65a",
		22
	],
	"./ru.json": [
		"a65a",
		22
	],
	"./sk": [
		"a39e",
		23
	],
	"./sk.json": [
		"a39e",
		23
	],
	"./sl": [
		"c9a5",
		24
	],
	"./sl.json": [
		"c9a5",
		24
	],
	"./sr": [
		"7981",
		25
	],
	"./sr.json": [
		"7981",
		25
	],
	"./sv": [
		"2a6b",
		26
	],
	"./sv.json": [
		"2a6b",
		26
	],
	"./tr": [
		"278e",
		27
	],
	"./tr.json": [
		"278e",
		27
	],
	"./uk": [
		"7405",
		28
	],
	"./uk.json": [
		"7405",
		28
	],
	"./vi": [
		"c5f8",
		29
	],
	"./vi.json": [
		"c5f8",
		29
	],
	"./zh-cn": [
		"88b4",
		30
	],
	"./zh-cn.json": [
		"88b4",
		30
	],
	"./zh-hk": [
		"cb46",
		31
	],
	"./zh-hk.json": [
		"cb46",
		31
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		var id = ids[0];
		return __webpack_require__.t(id, 3);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "1790";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "1938":
/***/ (function(module, exports, __webpack_require__) {

// 22.1.2.2 / 15.4.3.2 Array.isArray(arg)
var $export = __webpack_require__("d13f");

$export($export.S, 'Array', { isArray: __webpack_require__("b5aa") });


/***/ }),

/***/ "1b55":
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__("7772")('wks');
var uid = __webpack_require__("7b00");
var Symbol = __webpack_require__("da3c").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "1b8f":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("a812");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "1fa8":
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__("cb7c");
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),

/***/ "2029":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_weekdays_headings_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("850c");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_weekdays_headings_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_weekdays_headings_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_weekdays_headings_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "20d6":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 22.1.3.9 Array.prototype.findIndex(predicate, thisArg = undefined)
var $export = __webpack_require__("5ca1");
var $find = __webpack_require__("0a49")(6);
var KEY = 'findIndex';
var forced = true;
// Shouldn't skip holes
if (KEY in []) Array(1)[KEY](function () { forced = false; });
$export($export.P + $export.F * forced, 'Array', {
  findIndex: function findIndex(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});
__webpack_require__("9c6c")(KEY);


/***/ }),

/***/ "214f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var hide = __webpack_require__("32e9");
var redefine = __webpack_require__("2aba");
var fails = __webpack_require__("79e5");
var defined = __webpack_require__("be13");
var wks = __webpack_require__("2b4c");

module.exports = function (KEY, length, exec) {
  var SYMBOL = wks(KEY);
  var fns = exec(defined, SYMBOL, ''[KEY]);
  var strfn = fns[0];
  var rxfn = fns[1];
  if (fails(function () {
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  })) {
    redefine(String.prototype, KEY, strfn);
    hide(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) { return rxfn.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) { return rxfn.call(string, this); }
    );
  }
};


/***/ }),

/***/ "230e":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("d3f4");
var document = __webpack_require__("7726").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "2312":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("8ce0");


/***/ }),

/***/ "23c6":
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__("2d95");
var TAG = __webpack_require__("2b4c")('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),

/***/ "2418":
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__("6a9b");
var toLength = __webpack_require__("a5ab");
var toAbsoluteIndex = __webpack_require__("1b8f");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "245b":
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ "2621":
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "2695":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("43c8");
var toIObject = __webpack_require__("6a9b");
var arrayIndexOf = __webpack_require__("2418")(false);
var IE_PROTO = __webpack_require__("5d8f")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "27ee":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("23c6");
var ITERATOR = __webpack_require__("2b4c")('iterator');
var Iterators = __webpack_require__("84f2");
module.exports = __webpack_require__("8378").getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ "28a5":
/***/ (function(module, exports, __webpack_require__) {

// @@split logic
__webpack_require__("214f")('split', 2, function (defined, SPLIT, $split) {
  'use strict';
  var isRegExp = __webpack_require__("aae3");
  var _split = $split;
  var $push = [].push;
  var $SPLIT = 'split';
  var LENGTH = 'length';
  var LAST_INDEX = 'lastIndex';
  if (
    'abbc'[$SPLIT](/(b)*/)[1] == 'c' ||
    'test'[$SPLIT](/(?:)/, -1)[LENGTH] != 4 ||
    'ab'[$SPLIT](/(?:ab)*/)[LENGTH] != 2 ||
    '.'[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 ||
    '.'[$SPLIT](/()()/)[LENGTH] > 1 ||
    ''[$SPLIT](/.?/)[LENGTH]
  ) {
    var NPCG = /()??/.exec('')[1] === undefined; // nonparticipating capturing group
    // based on es5-shim implementation, need to rework it
    $split = function (separator, limit) {
      var string = String(this);
      if (separator === undefined && limit === 0) return [];
      // If `separator` is not a regex, use native split
      if (!isRegExp(separator)) return _split.call(string, separator, limit);
      var output = [];
      var flags = (separator.ignoreCase ? 'i' : '') +
                  (separator.multiline ? 'm' : '') +
                  (separator.unicode ? 'u' : '') +
                  (separator.sticky ? 'y' : '');
      var lastLastIndex = 0;
      var splitLimit = limit === undefined ? 4294967295 : limit >>> 0;
      // Make `global` and avoid `lastIndex` issues by working with a copy
      var separatorCopy = new RegExp(separator.source, flags + 'g');
      var separator2, match, lastIndex, lastLength, i;
      // Doesn't need flags gy, but they don't hurt
      if (!NPCG) separator2 = new RegExp('^' + separatorCopy.source + '$(?!\\s)', flags);
      while (match = separatorCopy.exec(string)) {
        // `separatorCopy.lastIndex` is not reliable cross-browser
        lastIndex = match.index + match[0][LENGTH];
        if (lastIndex > lastLastIndex) {
          output.push(string.slice(lastLastIndex, match.index));
          // Fix browsers whose `exec` methods don't consistently return `undefined` for NPCG
          // eslint-disable-next-line no-loop-func
          if (!NPCG && match[LENGTH] > 1) match[0].replace(separator2, function () {
            for (i = 1; i < arguments[LENGTH] - 2; i++) if (arguments[i] === undefined) match[i] = undefined;
          });
          if (match[LENGTH] > 1 && match.index < string[LENGTH]) $push.apply(output, match.slice(1));
          lastLength = match[0][LENGTH];
          lastLastIndex = lastIndex;
          if (output[LENGTH] >= splitLimit) break;
        }
        if (separatorCopy[LAST_INDEX] === match.index) separatorCopy[LAST_INDEX]++; // Avoid an infinite loop
      }
      if (lastLastIndex === string[LENGTH]) {
        if (lastLength || !separatorCopy.test('')) output.push('');
      } else output.push(string.slice(lastLastIndex));
      return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;
    };
  // Chakra, V8
  } else if ('0'[$SPLIT](undefined, 0)[LENGTH]) {
    $split = function (separator, limit) {
      return separator === undefined && limit === 0 ? [] : _split.call(this, separator, limit);
    };
  }
  // 21.1.3.17 String.prototype.split(separator, limit)
  return [function split(separator, limit) {
    var O = defined(this);
    var fn = separator == undefined ? undefined : separator[SPLIT];
    return fn !== undefined ? fn.call(separator, O, limit) : $split.call(String(O), separator, limit);
  }, $split];
});


/***/ }),

/***/ "2a4e":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("a812");
var defined = __webpack_require__("e5fa");
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),

/***/ "2aba":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("7726");
var hide = __webpack_require__("32e9");
var has = __webpack_require__("69a8");
var SRC = __webpack_require__("ca5a")('src');
var TO_STRING = 'toString';
var $toString = Function[TO_STRING];
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__("8378").inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),

/***/ "2aeb":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__("cb7c");
var dPs = __webpack_require__("1495");
var enumBugKeys = __webpack_require__("e11e");
var IE_PROTO = __webpack_require__("613b")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__("230e")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__("fab2").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "2b4c":
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__("5537")('wks');
var uid = __webpack_require__("ca5a");
var Symbol = __webpack_require__("7726").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "2d00":
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "2d95":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "2ea1":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__("6f8a");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "2f21":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__("79e5");

module.exports = function (method, arg) {
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call
    arg ? method.call(null, function () { /* empty */ }, 1) : method.call(null);
  });
};


/***/ }),

/***/ "2fdb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 21.1.3.7 String.prototype.includes(searchString, position = 0)

var $export = __webpack_require__("5ca1");
var context = __webpack_require__("d2c8");
var INCLUDES = 'includes';

$export($export.P + $export.F * __webpack_require__("5147")(INCLUDES), 'String', {
  includes: function includes(searchString /* , position = 0 */) {
    return !!~context(this, searchString, INCLUDES)
      .indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "31c2":
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "32e9":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("86cc");
var createDesc = __webpack_require__("4630");
module.exports = __webpack_require__("9e1e") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "33a4":
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__("84f2");
var ITERATOR = __webpack_require__("2b4c")('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),

/***/ "36bd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)

var toObject = __webpack_require__("4bf8");
var toAbsoluteIndex = __webpack_require__("77f1");
var toLength = __webpack_require__("9def");
module.exports = function fill(value /* , start = 0, end = @length */) {
  var O = toObject(this);
  var length = toLength(O.length);
  var aLen = arguments.length;
  var index = toAbsoluteIndex(aLen > 1 ? arguments[1] : undefined, length);
  var end = aLen > 2 ? arguments[2] : undefined;
  var endPos = end === undefined ? length : toAbsoluteIndex(end, length);
  while (endPos > index) O[index++] = value;
  return O;
};


/***/ }),

/***/ "3846":
/***/ (function(module, exports, __webpack_require__) {

// 21.2.5.3 get RegExp.prototype.flags()
if (__webpack_require__("9e1e") && /./g.flags != 'g') __webpack_require__("86cc").f(RegExp.prototype, 'flags', {
  configurable: true,
  get: __webpack_require__("0bfb")
});


/***/ }),

/***/ "386b":
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__("5ca1");
var fails = __webpack_require__("79e5");
var defined = __webpack_require__("be13");
var quot = /"/g;
// B.2.3.2.1 CreateHTML(string, tag, attribute, value)
var createHTML = function (string, tag, attribute, value) {
  var S = String(defined(string));
  var p1 = '<' + tag;
  if (attribute !== '') p1 += ' ' + attribute + '="' + String(value).replace(quot, '&quot;') + '"';
  return p1 + '>' + S + '</' + tag + '>';
};
module.exports = function (NAME, exec) {
  var O = {};
  O[NAME] = exec(createHTML);
  $export($export.P + $export.F * fails(function () {
    var test = ''[NAME]('"');
    return test !== test.toLowerCase() || test.split('"').length > 3;
  }), 'String', O);
};


/***/ }),

/***/ "38fd":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__("69a8");
var toObject = __webpack_require__("4bf8");
var IE_PROTO = __webpack_require__("613b")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ "3adc":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("0f89");
var IE8_DOM_DEFINE = __webpack_require__("a47f");
var toPrimitive = __webpack_require__("2ea1");
var dP = Object.defineProperty;

exports.f = __webpack_require__("7d95") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "41a0":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__("2aeb");
var descriptor = __webpack_require__("4630");
var setToStringTag = __webpack_require__("7f20");
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__("32e9")(IteratorPrototype, __webpack_require__("2b4c")('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ "436c":
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__("1b55")('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),

/***/ "43c8":
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "456d":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__("4bf8");
var $keys = __webpack_require__("0d58");

__webpack_require__("5eda")('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),

/***/ "4588":
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "4630":
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "4917":
/***/ (function(module, exports, __webpack_require__) {

// @@match logic
__webpack_require__("214f")('match', 1, function (defined, MATCH, $match) {
  // 21.1.3.11 String.prototype.match(regexp)
  return [function match(regexp) {
    'use strict';
    var O = defined(this);
    var fn = regexp == undefined ? undefined : regexp[MATCH];
    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
  }, $match];
});


/***/ }),

/***/ "4a59":
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__("9b43");
var call = __webpack_require__("1fa8");
var isArrayIter = __webpack_require__("33a4");
var anObject = __webpack_require__("cb7c");
var toLength = __webpack_require__("9def");
var getIterFn = __webpack_require__("27ee");
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;


/***/ }),

/***/ "4bf8":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__("be13");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "4f7f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var strong = __webpack_require__("c26b");
var validate = __webpack_require__("b39a");
var SET = 'Set';

// 23.2 Set Objects
module.exports = __webpack_require__("e0b8")(SET, function (get) {
  return function Set() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.2.3.1 Set.prototype.add(value)
  add: function add(value) {
    return strong.def(validate(this, SET), value = value === 0 ? 0 : value, value);
  }
}, strong);


/***/ }),

/***/ "5147":
/***/ (function(module, exports, __webpack_require__) {

var MATCH = __webpack_require__("2b4c")('match');
module.exports = function (KEY) {
  var re = /./;
  try {
    '/./'[KEY](re);
  } catch (e) {
    try {
      re[MATCH] = false;
      return !'/./'[KEY](re);
    } catch (f) { /* empty */ }
  } return true;
};


/***/ }),

/***/ "52a7":
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "5537":
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__("8378");
var global = __webpack_require__("7726");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__("2d00") ? 'pure' : 'global',
  copyright: '© 2018 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "55dd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__("5ca1");
var aFunction = __webpack_require__("d8e8");
var toObject = __webpack_require__("4bf8");
var fails = __webpack_require__("79e5");
var $sort = [].sort;
var test = [1, 2, 3];

$export($export.P + $export.F * (fails(function () {
  // IE8-
  test.sort(undefined);
}) || !fails(function () {
  // V8 bug
  test.sort(null);
  // Old WebKit
}) || !__webpack_require__("2f21")($sort)), 'Array', {
  // 22.1.3.25 Array.prototype.sort(comparefn)
  sort: function sort(comparefn) {
    return comparefn === undefined
      ? $sort.call(toObject(this))
      : $sort.call(toObject(this), aFunction(comparefn));
  }
});


/***/ }),

/***/ "565d":
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__("6a9b");
var gOPN = __webpack_require__("d876").f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),

/***/ "57f7":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("93c4");
__webpack_require__("6109");
module.exports = __webpack_require__("a7d3").Array.from;


/***/ }),

/***/ "5927":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("93c4");
__webpack_require__("b42c");
module.exports = __webpack_require__("fda1").f('iterator');


/***/ }),

/***/ "5ca1":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("7726");
var core = __webpack_require__("8378");
var hide = __webpack_require__("32e9");
var redefine = __webpack_require__("2aba");
var ctx = __webpack_require__("9b43");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "5cc5":
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__("2b4c")('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),

/***/ "5ce7":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__("7108");
var descriptor = __webpack_require__("f845");
var setToStringTag = __webpack_require__("c0d8");
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__("8ce0")(IteratorPrototype, __webpack_require__("1b55")('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ "5d58":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("5927");

/***/ }),

/***/ "5d73":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("0a91");

/***/ }),

/***/ "5d8f":
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__("7772")('keys');
var uid = __webpack_require__("7b00");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "5dbc":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("d3f4");
var setPrototypeOf = __webpack_require__("8b97").set;
module.exports = function (that, target, C) {
  var S = target.constructor;
  var P;
  if (S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf) {
    setPrototypeOf(that, P);
  } return that;
};


/***/ }),

/***/ "5df3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__("02f4")(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__("01f9")(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),

/***/ "5eda":
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__("5ca1");
var core = __webpack_require__("8378");
var fails = __webpack_require__("79e5");
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),

/***/ "6109":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ctx = __webpack_require__("bc25");
var $export = __webpack_require__("d13f");
var toObject = __webpack_require__("0185");
var call = __webpack_require__("9c93");
var isArrayIter = __webpack_require__("c227");
var toLength = __webpack_require__("a5ab");
var createProperty = __webpack_require__("b3ec");
var getIterFn = __webpack_require__("f159");

$export($export.S + $export.F * !__webpack_require__("436c")(function (iter) { Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iterFn = getIterFn(O);
    var length, result, step, iterator;
    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for (result = new C(length); length > index; index++) {
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});


/***/ }),

/***/ "613b":
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__("5537")('keys');
var uid = __webpack_require__("ca5a");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "626a":
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__("2d95");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "626e":
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__("d74e");
var createDesc = __webpack_require__("f845");
var toIObject = __webpack_require__("6a9b");
var toPrimitive = __webpack_require__("2ea1");
var has = __webpack_require__("43c8");
var IE8_DOM_DEFINE = __webpack_require__("a47f");
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__("7d95") ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),

/***/ "6277":
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__("7b00")('meta');
var isObject = __webpack_require__("6f8a");
var has = __webpack_require__("43c8");
var setDesc = __webpack_require__("3adc").f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__("d782")(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),

/***/ "6762":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/Array.prototype.includes
var $export = __webpack_require__("5ca1");
var $includes = __webpack_require__("c366")(true);

$export($export.P, 'Array', {
  includes: function includes(el /* , fromIndex = 0 */) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

__webpack_require__("9c6c")('includes');


/***/ }),

/***/ "67ab":
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__("ca5a")('meta');
var isObject = __webpack_require__("d3f4");
var has = __webpack_require__("69a8");
var setDesc = __webpack_require__("86cc").f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__("79e5")(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),

/***/ "67bb":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("b258b");

/***/ }),

/***/ "6821":
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__("626a");
var defined = __webpack_require__("be13");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "69a8":
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "6a99":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__("d3f4");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "6a9b":
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__("8bab");
var defined = __webpack_require__("e5fa");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "6b54":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

__webpack_require__("3846");
var anObject = __webpack_require__("cb7c");
var $flags = __webpack_require__("0bfb");
var DESCRIPTORS = __webpack_require__("9e1e");
var TO_STRING = 'toString';
var $toString = /./[TO_STRING];

var define = function (fn) {
  __webpack_require__("2aba")(RegExp.prototype, TO_STRING, fn, true);
};

// 21.2.5.14 RegExp.prototype.toString()
if (__webpack_require__("79e5")(function () { return $toString.call({ source: 'a', flags: 'b' }) != '/a/b'; })) {
  define(function toString() {
    var R = anObject(this);
    return '/'.concat(R.source, '/',
      'flags' in R ? R.flags : !DESCRIPTORS && R instanceof RegExp ? $flags.call(R) : undefined);
  });
// FF44- RegExp#toString has a wrong name
} else if ($toString.name != TO_STRING) {
  define(function toString() {
    return $toString.call(this);
  });
}


/***/ }),

/***/ "6b6a":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "6c7b":
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
var $export = __webpack_require__("5ca1");

$export($export.P, 'Array', { fill: __webpack_require__("36bd") });

__webpack_require__("9c6c")('fill');


/***/ }),

/***/ "6e1f":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "6f8a":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "7108":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__("0f89");
var dPs = __webpack_require__("f568");
var enumBugKeys = __webpack_require__("0029");
var IE_PROTO = __webpack_require__("5d8f")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__("12fd")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__("103a").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "7213":
/***/ (function(module) {

module.exports = {"weekDays":["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],"months":["January","February","March","April","May","June","July","August","September","October","November","December"],"years":"Years","year":"Year","month":"Month","week":"Week","day":"Day","today":"Today","noEvent":"No Event","allDay":"All day","deleteEvent":"Delete","createEvent":"Create an event","dateFormat":"DDDD mmmm d{S}, yyyy"};

/***/ }),

/***/ "7333":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__("0d58");
var gOPS = __webpack_require__("2621");
var pIE = __webpack_require__("52a7");
var toObject = __webpack_require__("4bf8");
var IObject = __webpack_require__("626a");
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__("79e5")(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;


/***/ }),

/***/ "7514":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)
var $export = __webpack_require__("5ca1");
var $find = __webpack_require__("0a49")(5);
var KEY = 'find';
var forced = true;
// Shouldn't skip holes
if (KEY in []) Array(1)[KEY](function () { forced = false; });
$export($export.P + $export.F * forced, 'Array', {
  find: function find(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});
__webpack_require__("9c6c")(KEY);


/***/ }),

/***/ "7633":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__("2695");
var enumBugKeys = __webpack_require__("0029");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "7726":
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "774e":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("57f7");

/***/ }),

/***/ "7772":
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__("a7d3");
var global = __webpack_require__("da3c");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__("b457") ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "77f1":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("4588");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "79e5":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "7a56":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__("7726");
var dP = __webpack_require__("86cc");
var DESCRIPTORS = __webpack_require__("9e1e");
var SPECIES = __webpack_require__("2b4c")('species');

module.exports = function (KEY) {
  var C = global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),

/***/ "7b00":
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "7d8a":
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__("6e1f");
var TAG = __webpack_require__("1b55")('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),

/***/ "7d95":
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__("d782")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "7f20":
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__("86cc").f;
var has = __webpack_require__("69a8");
var TAG = __webpack_require__("2b4c")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "8378":
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.7' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "84f2":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "850c":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "85f2":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("ec5b");

/***/ }),

/***/ "86cc":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("cb7c");
var IE8_DOM_DEFINE = __webpack_require__("c69a");
var toPrimitive = __webpack_require__("6a99");
var dP = Object.defineProperty;

exports.f = __webpack_require__("9e1e") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "89ca":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("b42c");
__webpack_require__("93c4");
module.exports = __webpack_require__("d38f");


/***/ }),

/***/ "8b97":
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__("d3f4");
var anObject = __webpack_require__("cb7c");
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__("9b43")(Function.call, __webpack_require__("11e9").f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),

/***/ "8bab":
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__("6e1f");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "8bbf":
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),

/***/ "8ce0":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("3adc");
var createDesc = __webpack_require__("f845");
module.exports = __webpack_require__("7d95") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "8e6e":
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-object-getownpropertydescriptors
var $export = __webpack_require__("5ca1");
var ownKeys = __webpack_require__("990b");
var toIObject = __webpack_require__("6821");
var gOPD = __webpack_require__("11e9");
var createProperty = __webpack_require__("f1ae");

$export($export.S, 'Object', {
  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
    var O = toIObject(object);
    var getDesc = gOPD.f;
    var keys = ownKeys(O);
    var result = {};
    var i = 0;
    var key, desc;
    while (keys.length > i) {
      desc = getDesc(O, key = keys[i++]);
      if (desc !== undefined) createProperty(result, key, desc);
    }
    return result;
  }
});


/***/ }),

/***/ "9093":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__("ce10");
var hiddenKeys = __webpack_require__("e11e").concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),

/***/ "93c4":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__("2a4e")(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__("e4a9")(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),

/***/ "990b":
/***/ (function(module, exports, __webpack_require__) {

// all object keys, includes non-enumerable and symbols
var gOPN = __webpack_require__("9093");
var gOPS = __webpack_require__("2621");
var anObject = __webpack_require__("cb7c");
var Reflect = __webpack_require__("7726").Reflect;
module.exports = Reflect && Reflect.ownKeys || function ownKeys(it) {
  var keys = gOPN.f(anObject(it));
  var getSymbols = gOPS.f;
  return getSymbols ? keys.concat(getSymbols(it)) : keys;
};


/***/ }),

/***/ "9b43":
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__("d8e8");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "9c6c":
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = __webpack_require__("2b4c")('unscopables');
var ArrayProto = Array.prototype;
if (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__("32e9")(ArrayProto, UNSCOPABLES, {});
module.exports = function (key) {
  ArrayProto[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ "9c93":
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__("0f89");
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),

/***/ "9def":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__("4588");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "9e1e":
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__("79e5")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "9ff5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_event_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("0a61");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_event_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_event_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_event_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "a47f":
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__("7d95") && !__webpack_require__("d782")(function () {
  return Object.defineProperty(__webpack_require__("12fd")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "a481":
/***/ (function(module, exports, __webpack_require__) {

// @@replace logic
__webpack_require__("214f")('replace', 2, function (defined, REPLACE, $replace) {
  // 21.1.3.14 String.prototype.replace(searchValue, replaceValue)
  return [function replace(searchValue, replaceValue) {
    'use strict';
    var O = defined(this);
    var fn = searchValue == undefined ? undefined : searchValue[REPLACE];
    return fn !== undefined
      ? fn.call(searchValue, O, replaceValue)
      : $replace.call(String(O), searchValue, replaceValue);
  }, $replace];
});


/***/ }),

/***/ "a5ab":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__("a812");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "a745":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("d604");

/***/ }),

/***/ "a7d3":
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.9' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "a812":
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "aa77":
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__("5ca1");
var defined = __webpack_require__("be13");
var fails = __webpack_require__("79e5");
var spaces = __webpack_require__("fdef");
var space = '[' + spaces + ']';
var non = '\u200b\u0085';
var ltrim = RegExp('^' + space + space + '*');
var rtrim = RegExp(space + space + '*$');

var exporter = function (KEY, exec, ALIAS) {
  var exp = {};
  var FORCE = fails(function () {
    return !!spaces[KEY]() || non[KEY]() != non;
  });
  var fn = exp[KEY] = FORCE ? exec(trim) : spaces[KEY];
  if (ALIAS) exp[ALIAS] = fn;
  $export($export.P + $export.F * FORCE, 'String', exp);
};

// 1 -> String#trimLeft
// 2 -> String#trimRight
// 3 -> String#trim
var trim = exporter.trim = function (string, TYPE) {
  string = String(defined(string));
  if (TYPE & 1) string = string.replace(ltrim, '');
  if (TYPE & 2) string = string.replace(rtrim, '');
  return string;
};

module.exports = exporter;


/***/ }),

/***/ "aae3":
/***/ (function(module, exports, __webpack_require__) {

// 7.2.8 IsRegExp(argument)
var isObject = __webpack_require__("d3f4");
var cof = __webpack_require__("2d95");
var MATCH = __webpack_require__("2b4c")('match');
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
};


/***/ }),

/***/ "ac6a":
/***/ (function(module, exports, __webpack_require__) {

var $iterators = __webpack_require__("cadf");
var getKeys = __webpack_require__("0d58");
var redefine = __webpack_require__("2aba");
var global = __webpack_require__("7726");
var hide = __webpack_require__("32e9");
var Iterators = __webpack_require__("84f2");
var wks = __webpack_require__("2b4c");
var ITERATOR = wks('iterator');
var TO_STRING_TAG = wks('toStringTag');
var ArrayValues = Iterators.Array;

var DOMIterables = {
  CSSRuleList: true, // TODO: Not spec compliant, should be false.
  CSSStyleDeclaration: false,
  CSSValueList: false,
  ClientRectList: false,
  DOMRectList: false,
  DOMStringList: false,
  DOMTokenList: true,
  DataTransferItemList: false,
  FileList: false,
  HTMLAllCollection: false,
  HTMLCollection: false,
  HTMLFormElement: false,
  HTMLSelectElement: false,
  MediaList: true, // TODO: Not spec compliant, should be false.
  MimeTypeArray: false,
  NamedNodeMap: false,
  NodeList: true,
  PaintRequestList: false,
  Plugin: false,
  PluginArray: false,
  SVGLengthList: false,
  SVGNumberList: false,
  SVGPathSegList: false,
  SVGPointList: false,
  SVGStringList: false,
  SVGTransformList: false,
  SourceBufferList: false,
  StyleSheetList: true, // TODO: Not spec compliant, should be false.
  TextTrackCueList: false,
  TextTrackList: false,
  TouchList: false
};

for (var collections = getKeys(DOMIterables), i = 0; i < collections.length; i++) {
  var NAME = collections[i];
  var explicit = DOMIterables[NAME];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  var key;
  if (proto) {
    if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);
    if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
    Iterators[NAME] = ArrayValues;
    if (explicit) for (key in $iterators) if (!proto[key]) redefine(proto, key, $iterators[key], true);
  }
}


/***/ }),

/***/ "b22a":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "b258b":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("d256");
__webpack_require__("12fd9");
__webpack_require__("d127");
__webpack_require__("d24f");
module.exports = __webpack_require__("a7d3").Symbol;


/***/ }),

/***/ "b39a":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("d3f4");
module.exports = function (it, TYPE) {
  if (!isObject(it) || it._t !== TYPE) throw TypeError('Incompatible receiver, ' + TYPE + ' required!');
  return it;
};


/***/ }),

/***/ "b3e7":
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),

/***/ "b3ec":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__("3adc");
var createDesc = __webpack_require__("f845");

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};


/***/ }),

/***/ "b42c":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("fa54");
var global = __webpack_require__("da3c");
var hide = __webpack_require__("8ce0");
var Iterators = __webpack_require__("b22a");
var TO_STRING_TAG = __webpack_require__("1b55")('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),

/***/ "b457":
/***/ (function(module, exports) {

module.exports = true;


/***/ }),

/***/ "b5aa":
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__("6e1f");
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),

/***/ "b77f":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("0f89");
var get = __webpack_require__("f159");
module.exports = __webpack_require__("a7d3").getIterator = function (it) {
  var iterFn = get(it);
  if (typeof iterFn != 'function') throw TypeError(it + ' is not iterable!');
  return anObject(iterFn.call(it));
};


/***/ }),

/***/ "bc25":
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__("f2fe");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "be13":
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "c0d8":
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__("3adc").f;
var has = __webpack_require__("43c8");
var TAG = __webpack_require__("1b55")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "c227":
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__("b22a");
var ITERATOR = __webpack_require__("1b55")('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),

/***/ "c26b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var dP = __webpack_require__("86cc").f;
var create = __webpack_require__("2aeb");
var redefineAll = __webpack_require__("dcbc");
var ctx = __webpack_require__("9b43");
var anInstance = __webpack_require__("f605");
var forOf = __webpack_require__("4a59");
var $iterDefine = __webpack_require__("01f9");
var step = __webpack_require__("d53b");
var setSpecies = __webpack_require__("7a56");
var DESCRIPTORS = __webpack_require__("9e1e");
var fastKey = __webpack_require__("67ab").fastKey;
var validate = __webpack_require__("b39a");
var SIZE = DESCRIPTORS ? '_s' : 'size';

var getEntry = function (that, key) {
  // fast case
  var index = fastKey(key);
  var entry;
  if (index !== 'F') return that._i[index];
  // frozen object case
  for (entry = that._f; entry; entry = entry.n) {
    if (entry.k == key) return entry;
  }
};

module.exports = {
  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, NAME, '_i');
      that._t = NAME;         // collection type
      that._i = create(null); // index
      that._f = undefined;    // first entry
      that._l = undefined;    // last entry
      that[SIZE] = 0;         // size
      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.1.3.1 Map.prototype.clear()
      // 23.2.3.2 Set.prototype.clear()
      clear: function clear() {
        for (var that = validate(this, NAME), data = that._i, entry = that._f; entry; entry = entry.n) {
          entry.r = true;
          if (entry.p) entry.p = entry.p.n = undefined;
          delete data[entry.i];
        }
        that._f = that._l = undefined;
        that[SIZE] = 0;
      },
      // 23.1.3.3 Map.prototype.delete(key)
      // 23.2.3.4 Set.prototype.delete(value)
      'delete': function (key) {
        var that = validate(this, NAME);
        var entry = getEntry(that, key);
        if (entry) {
          var next = entry.n;
          var prev = entry.p;
          delete that._i[entry.i];
          entry.r = true;
          if (prev) prev.n = next;
          if (next) next.p = prev;
          if (that._f == entry) that._f = next;
          if (that._l == entry) that._l = prev;
          that[SIZE]--;
        } return !!entry;
      },
      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
      forEach: function forEach(callbackfn /* , that = undefined */) {
        validate(this, NAME);
        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
        var entry;
        while (entry = entry ? entry.n : this._f) {
          f(entry.v, entry.k, this);
          // revert to the last existing entry
          while (entry && entry.r) entry = entry.p;
        }
      },
      // 23.1.3.7 Map.prototype.has(key)
      // 23.2.3.7 Set.prototype.has(value)
      has: function has(key) {
        return !!getEntry(validate(this, NAME), key);
      }
    });
    if (DESCRIPTORS) dP(C.prototype, 'size', {
      get: function () {
        return validate(this, NAME)[SIZE];
      }
    });
    return C;
  },
  def: function (that, key, value) {
    var entry = getEntry(that, key);
    var prev, index;
    // change existing entry
    if (entry) {
      entry.v = value;
    // create new entry
    } else {
      that._l = entry = {
        i: index = fastKey(key, true), // <- index
        k: key,                        // <- key
        v: value,                      // <- value
        p: prev = that._l,             // <- previous entry
        n: undefined,                  // <- next entry
        r: false                       // <- removed
      };
      if (!that._f) that._f = entry;
      if (prev) prev.n = entry;
      that[SIZE]++;
      // add to index
      if (index !== 'F') that._i[index] = entry;
    } return that;
  },
  getEntry: getEntry,
  setStrong: function (C, NAME, IS_MAP) {
    // add .keys, .values, .entries, [@@iterator]
    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
    $iterDefine(C, NAME, function (iterated, kind) {
      this._t = validate(iterated, NAME); // target
      this._k = kind;                     // kind
      this._l = undefined;                // previous
    }, function () {
      var that = this;
      var kind = that._k;
      var entry = that._l;
      // revert to the last existing entry
      while (entry && entry.r) entry = entry.p;
      // get next entry
      if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {
        // or finish the iteration
        that._t = undefined;
        return step(1);
      }
      // return step by kind
      if (kind == 'keys') return step(0, entry.k);
      if (kind == 'values') return step(0, entry.v);
      return step(0, [entry.k, entry.v]);
    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

    // add [@@species], 23.1.2.2, 23.2.2.2
    setSpecies(NAME);
  }
};


/***/ }),

/***/ "c366":
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__("6821");
var toLength = __webpack_require__("9def");
var toAbsoluteIndex = __webpack_require__("77f1");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "c5f6":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__("7726");
var has = __webpack_require__("69a8");
var cof = __webpack_require__("2d95");
var inheritIfRequired = __webpack_require__("5dbc");
var toPrimitive = __webpack_require__("6a99");
var fails = __webpack_require__("79e5");
var gOPN = __webpack_require__("9093").f;
var gOPD = __webpack_require__("11e9").f;
var dP = __webpack_require__("86cc").f;
var $trim = __webpack_require__("aa77").trim;
var NUMBER = 'Number';
var $Number = global[NUMBER];
var Base = $Number;
var proto = $Number.prototype;
// Opera ~12 has broken Object#toString
var BROKEN_COF = cof(__webpack_require__("2aeb")(proto)) == NUMBER;
var TRIM = 'trim' in String.prototype;

// 7.1.3 ToNumber(argument)
var toNumber = function (argument) {
  var it = toPrimitive(argument, false);
  if (typeof it == 'string' && it.length > 2) {
    it = TRIM ? it.trim() : $trim(it, 3);
    var first = it.charCodeAt(0);
    var third, radix, maxCode;
    if (first === 43 || first === 45) {
      third = it.charCodeAt(2);
      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
    } else if (first === 48) {
      switch (it.charCodeAt(1)) {
        case 66: case 98: radix = 2; maxCode = 49; break; // fast equal /^0b[01]+$/i
        case 79: case 111: radix = 8; maxCode = 55; break; // fast equal /^0o[0-7]+$/i
        default: return +it;
      }
      for (var digits = it.slice(2), i = 0, l = digits.length, code; i < l; i++) {
        code = digits.charCodeAt(i);
        // parseInt parses a string to a first unavailable symbol
        // but ToNumber should return NaN if a string contains unavailable symbols
        if (code < 48 || code > maxCode) return NaN;
      } return parseInt(digits, radix);
    }
  } return +it;
};

if (!$Number(' 0o1') || !$Number('0b1') || $Number('+0x1')) {
  $Number = function Number(value) {
    var it = arguments.length < 1 ? 0 : value;
    var that = this;
    return that instanceof $Number
      // check on 1..constructor(foo) case
      && (BROKEN_COF ? fails(function () { proto.valueOf.call(that); }) : cof(that) != NUMBER)
        ? inheritIfRequired(new Base(toNumber(it)), that, $Number) : toNumber(it);
  };
  for (var keys = __webpack_require__("9e1e") ? gOPN(Base) : (
    // ES3:
    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
    // ES6 (in case, if modules with ES6 Number statics required before):
    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
  ).split(','), j = 0, key; keys.length > j; j++) {
    if (has(Base, key = keys[j]) && !has($Number, key)) {
      dP($Number, key, gOPD(Base, key));
    }
  }
  $Number.prototype = proto;
  proto.constructor = $Number;
  __webpack_require__("2aba")(global, NUMBER, $Number);
}


/***/ }),

/***/ "c69a":
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__("9e1e") && !__webpack_require__("79e5")(function () {
  return Object.defineProperty(__webpack_require__("230e")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "c8bb":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("89ca");

/***/ }),

/***/ "ca3e":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "ca5a":
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "cadf":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__("9c6c");
var step = __webpack_require__("d53b");
var Iterators = __webpack_require__("84f2");
var toIObject = __webpack_require__("6821");

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__("01f9")(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "cb7c":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("d3f4");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "cd1c":
/***/ (function(module, exports, __webpack_require__) {

// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = __webpack_require__("e853");

module.exports = function (original, length) {
  return new (speciesConstructor(original))(length);
};


/***/ }),

/***/ "ce10":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("69a8");
var toIObject = __webpack_require__("6821");
var arrayIndexOf = __webpack_require__("c366")(false);
var IE_PROTO = __webpack_require__("613b")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "d011":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_cell_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("6b6a");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_cell_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_cell_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_cell_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "d127":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("0a0a")('asyncIterator');


/***/ }),

/***/ "d13f":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da3c");
var core = __webpack_require__("a7d3");
var ctx = __webpack_require__("bc25");
var hide = __webpack_require__("8ce0");
var has = __webpack_require__("43c8");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "d24f":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("0a0a")('observable');


/***/ }),

/***/ "d256":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__("da3c");
var has = __webpack_require__("43c8");
var DESCRIPTORS = __webpack_require__("7d95");
var $export = __webpack_require__("d13f");
var redefine = __webpack_require__("2312");
var META = __webpack_require__("6277").KEY;
var $fails = __webpack_require__("d782");
var shared = __webpack_require__("7772");
var setToStringTag = __webpack_require__("c0d8");
var uid = __webpack_require__("7b00");
var wks = __webpack_require__("1b55");
var wksExt = __webpack_require__("fda1");
var wksDefine = __webpack_require__("0a0a");
var enumKeys = __webpack_require__("d2d6");
var isArray = __webpack_require__("b5aa");
var anObject = __webpack_require__("0f89");
var isObject = __webpack_require__("6f8a");
var toObject = __webpack_require__("0185");
var toIObject = __webpack_require__("6a9b");
var toPrimitive = __webpack_require__("2ea1");
var createDesc = __webpack_require__("f845");
var _create = __webpack_require__("7108");
var gOPNExt = __webpack_require__("565d");
var $GOPD = __webpack_require__("626e");
var $GOPS = __webpack_require__("31c2");
var $DP = __webpack_require__("3adc");
var $keys = __webpack_require__("7633");
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function' && !!$GOPS.f;
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__("d876").f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__("d74e").f = $propertyIsEnumerable;
  $GOPS.f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__("b457")) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
var FAILS_ON_PRIMITIVES = $fails(function () { $GOPS.f(1); });

$export($export.S + $export.F * FAILS_ON_PRIMITIVES, 'Object', {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    return $GOPS.f(toObject(it));
  }
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__("8ce0")($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),

/***/ "d2c8":
/***/ (function(module, exports, __webpack_require__) {

// helper for String#{startsWith, endsWith, includes}
var isRegExp = __webpack_require__("aae3");
var defined = __webpack_require__("be13");

module.exports = function (that, searchString, NAME) {
  if (isRegExp(searchString)) throw TypeError('String#' + NAME + " doesn't accept regex!");
  return String(defined(that));
};


/***/ }),

/***/ "d2d6":
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__("7633");
var gOPS = __webpack_require__("31c2");
var pIE = __webpack_require__("d74e");
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),

/***/ "d38f":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("7d8a");
var ITERATOR = __webpack_require__("1b55")('iterator');
var Iterators = __webpack_require__("b22a");
module.exports = __webpack_require__("a7d3").isIterable = function (it) {
  var O = Object(it);
  return O[ITERATOR] !== undefined
    || '@@iterator' in O
    // eslint-disable-next-line no-prototype-builtins
    || Iterators.hasOwnProperty(classof(O));
};


/***/ }),

/***/ "d3f4":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "d53b":
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ "d604":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("1938");
module.exports = __webpack_require__("a7d3").Array.isArray;


/***/ }),

/***/ "d74e":
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "d782":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "d876":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__("2695");
var hiddenKeys = __webpack_require__("0029").concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),

/***/ "d8e8":
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "da3c":
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "da8a":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ca3e");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "dcbc":
/***/ (function(module, exports, __webpack_require__) {

var redefine = __webpack_require__("2aba");
module.exports = function (target, src, safe) {
  for (var key in src) redefine(target, key, src[key], safe);
  return target;
};


/***/ }),

/***/ "e0b8":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__("7726");
var $export = __webpack_require__("5ca1");
var redefine = __webpack_require__("2aba");
var redefineAll = __webpack_require__("dcbc");
var meta = __webpack_require__("67ab");
var forOf = __webpack_require__("4a59");
var anInstance = __webpack_require__("f605");
var isObject = __webpack_require__("d3f4");
var fails = __webpack_require__("79e5");
var $iterDetect = __webpack_require__("5cc5");
var setToStringTag = __webpack_require__("7f20");
var inheritIfRequired = __webpack_require__("5dbc");

module.exports = function (NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
  var Base = global[NAME];
  var C = Base;
  var ADDER = IS_MAP ? 'set' : 'add';
  var proto = C && C.prototype;
  var O = {};
  var fixMethod = function (KEY) {
    var fn = proto[KEY];
    redefine(proto, KEY,
      KEY == 'delete' ? function (a) {
        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'has' ? function has(a) {
        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'get' ? function get(a) {
        return IS_WEAK && !isObject(a) ? undefined : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'add' ? function add(a) { fn.call(this, a === 0 ? 0 : a); return this; }
        : function set(a, b) { fn.call(this, a === 0 ? 0 : a, b); return this; }
    );
  };
  if (typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function () {
    new C().entries().next();
  }))) {
    // create collection constructor
    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
    redefineAll(C.prototype, methods);
    meta.NEED = true;
  } else {
    var instance = new C();
    // early implementations not supports chaining
    var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance;
    // V8 ~  Chromium 40- weak-collections throws on primitives, but should return false
    var THROWS_ON_PRIMITIVES = fails(function () { instance.has(1); });
    // most early implementations doesn't supports iterables, most modern - not close it correctly
    var ACCEPT_ITERABLES = $iterDetect(function (iter) { new C(iter); }); // eslint-disable-line no-new
    // for early implementations -0 and +0 not the same
    var BUGGY_ZERO = !IS_WEAK && fails(function () {
      // V8 ~ Chromium 42- fails only with 5+ elements
      var $instance = new C();
      var index = 5;
      while (index--) $instance[ADDER](index, index);
      return !$instance.has(-0);
    });
    if (!ACCEPT_ITERABLES) {
      C = wrapper(function (target, iterable) {
        anInstance(target, C, NAME);
        var that = inheritIfRequired(new Base(), target, C);
        if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
        return that;
      });
      C.prototype = proto;
      proto.constructor = C;
    }
    if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
      fixMethod('delete');
      fixMethod('has');
      IS_MAP && fixMethod('get');
    }
    if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER);
    // weak collections should not contains .clear method
    if (IS_WEAK && proto.clear) delete proto.clear;
  }

  setToStringTag(C, NAME);

  O[NAME] = C;
  $export($export.G + $export.W + $export.F * (C != Base), O);

  if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);

  return C;
};


/***/ }),

/***/ "e11e":
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "e341":
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__("d13f");
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__("7d95"), 'Object', { defineProperty: __webpack_require__("3adc").f });


/***/ }),

/***/ "e4a9":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__("b457");
var $export = __webpack_require__("d13f");
var redefine = __webpack_require__("2312");
var hide = __webpack_require__("8ce0");
var Iterators = __webpack_require__("b22a");
var $iterCreate = __webpack_require__("5ce7");
var setToStringTag = __webpack_require__("c0d8");
var getPrototypeOf = __webpack_require__("ff0c");
var ITERATOR = __webpack_require__("1b55")('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),

/***/ "e5fa":
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "e853":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("d3f4");
var isArray = __webpack_require__("1169");
var SPECIES = __webpack_require__("2b4c")('species');

module.exports = function (original) {
  var C;
  if (isArray(original)) {
    C = original.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array : C;
};


/***/ }),

/***/ "ec5b":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("e341");
var $Object = __webpack_require__("a7d3").Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),

/***/ "f159":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("7d8a");
var ITERATOR = __webpack_require__("1b55")('iterator');
var Iterators = __webpack_require__("b22a");
module.exports = __webpack_require__("a7d3").getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ "f1ae":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__("86cc");
var createDesc = __webpack_require__("4630");

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};


/***/ }),

/***/ "f2fe":
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "f386":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.11 String.prototype.small()
__webpack_require__("386b")('small', function (createHTML) {
  return function small() {
    return createHTML(this, 'small', '', '');
  };
});


/***/ }),

/***/ "f568":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("3adc");
var anObject = __webpack_require__("0f89");
var getKeys = __webpack_require__("7633");

module.exports = __webpack_require__("7d95") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "f605":
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),

/***/ "f6fd":
/***/ (function(module, exports) {

// document.currentScript polyfill by Adam Miller

// MIT license

(function(document){
  var currentScript = "currentScript",
      scripts = document.getElementsByTagName('script'); // Live NodeList collection

  // If browser needs currentScript polyfill, add get currentScript() to the document object
  if (!(currentScript in document)) {
    Object.defineProperty(document, currentScript, {
      get: function(){

        // IE 6-10 supports script readyState
        // IE 10+ support stack trace
        try { throw new Error(); }
        catch (err) {

          // Find the second match for the "at" string to get file src url from stack.
          // Specifically works with the format of stack traces in IE.
          var i, res = ((/.*at [^\(]*\((.*):.+:.+\)$/ig).exec(err.stack) || [false])[1];

          // For all scripts on the page, if src matches or if ready state is interactive, return the script tag
          for(i in scripts){
            if(scripts[i].src == res || scripts[i].readyState == "interactive"){
              return scripts[i];
            }
          }

          // If no match, return null
          return null;
        }
      }
    });
  }
})(document);


/***/ }),

/***/ "f751":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__("5ca1");

$export($export.S + $export.F, 'Object', { assign: __webpack_require__("7333") });


/***/ }),

/***/ "f845":
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "fa54":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__("b3e7");
var step = __webpack_require__("245b");
var Iterators = __webpack_require__("b22a");
var toIObject = __webpack_require__("6a9b");

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__("e4a9")(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "fab2":
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__("7726").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  if (true) {
    __webpack_require__("f6fd")
  }

  var setPublicPath_i
  if ((setPublicPath_i = window.document.currentScript) && (setPublicPath_i = setPublicPath_i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = setPublicPath_i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"e06f8060-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vue-cal/index.vue?vue&type=template&id=5b8484a2&lang=pug&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:"vuecal",staticClass:"vuecal__flex vuecal",class:_vm.cssClasses,attrs:{"column":"","lang":_vm.locale}},[_c('vuecal-header',{attrs:{"options":_vm.$props,"view-props":{ views: _vm.views, view: _vm.view, weekDaysInHeader: _vm.weekDaysInHeader },"week-days":_vm.weekDays,"switch-to-narrower-view":_vm.switchToNarrowerView},scopedSlots:_vm._u([{key:"arrow-prev",fn:function(){return [_vm._t("arrow-prev",[_c('i',{staticClass:"angle"})])]},proxy:true},{key:"arrow-next",fn:function(){return [_vm._t("arrow-next",[_c('i',{staticClass:"angle"})])]},proxy:true},{key:"today-button",fn:function(){return [_vm._t("today-button",[_c('span',{staticClass:"default"},[_vm._v(_vm._s(_vm.texts.today))])])]},proxy:true},{key:"title",fn:function(){return [_vm._t("title",[_vm._v(_vm._s(_vm.viewTitle))],{"title":_vm.viewTitle,"view":_vm.view})]},proxy:true}],null,true)}),(!_vm.hideBody)?_c('div',{staticClass:"vuecal__flex vuecal__body",attrs:{"grow":""}},[_c('transition',{attrs:{"name":("slide-fade--" + _vm.transitionDirection),"appear":_vm.transitions}},[_c('div',{key:_vm.transitions ? _vm.view.id : false,staticClass:"vuecal__flex",staticStyle:{"min-width":"100%"},attrs:{"column":""}},[(_vm.showAllDayEvents && _vm.hasTimeColumn)?_c('div',{staticClass:"vuecal__flex vuecal__all-day"},[_c('span',{staticStyle:{"width":"3em"}},[_c('span',[_vm._v(_vm._s(_vm.texts.allDay))])]),_c('div',{staticClass:"vuecal__flex vuecal__cells",class:((_vm.view.id) + "-view"),attrs:{"grow":"","wrap":!_vm.minCellWidth || _vm.view.id !== 'week',"column":!!_vm.minCellWidth}},_vm._l((_vm.viewCells),function(cell,i){return _c('vuecal-cell',{key:i,attrs:{"options":_vm.$props,"data":cell,"all-day":true,"min-timestamp":_vm.minTimestamp,"max-timestamp":_vm.maxTimestamp,"cell-splits":_vm.hasSplits && _vm.splitDays || []},scopedSlots:_vm._u([{key:"event-renderer",fn:function(ref){
var event = ref.event;
var view = ref.view;
return [_vm._t("event-renderer",[(_vm.editableEvents && event.title)?_c('div',{staticClass:"vuecal__event-title vuecal__event-title--edit",attrs:{"contenteditable":""},domProps:{"innerHTML":_vm._s(event.title)},on:{"blur":function($event){return _vm.onEventTitleBlur($event, event)}}}):(event.title)?_c('div',{staticClass:"vuecal__event-title",domProps:{"innerHTML":_vm._s(event.title)}}):_vm._e(),(event.content && _vm.showAllDayEvents !== 'short' && !_vm.isShortMonthView)?_c('div',{staticClass:"vuecal__event-content",domProps:{"innerHTML":_vm._s(event.content)}}):_vm._e()],{"view":view,"event":event})]}}],null,true)},[_vm._t("no-event",null,{"slot":"no-event"})],2)}),1)]):_vm._e(),_c('div',{staticClass:"vuecal__bg",class:{ vuecal__flex: !_vm.hasTimeColumn },attrs:{"column":""}},[_c('div',{staticClass:"vuecal__flex",attrs:{"row":"","grow":""}},[(_vm.hasTimeColumn)?_c('div',{staticClass:"vuecal__time-column"},_vm._l((_vm.timeCells),function(cell,i){return _c('div',{key:i,staticClass:"vuecal__time-cell",style:(("height: " + _vm.timeCellHeight + "px"))},[_vm._t("time-cell",[_c('span',{staticClass:"line"},[_vm._v(_vm._s(cell.label))])],{"hours":cell.hours,"minutes":cell.minutes})],2)}),0):_vm._e(),_c('div',{staticClass:"vuecal__flex vuecal__cells",class:((_vm.view.id) + "-view"),attrs:{"grow":"","wrap":!_vm.minCellWidth || _vm.view.id !== 'week',"column":!!_vm.minCellWidth}},[(_vm.minCellWidth && _vm.view.id === 'week')?_c('weekdays-headings',{attrs:{"vuecal":this,"transition-direction":_vm.transitionDirection,"view":_vm.view,"min-cell-width":_vm.minCellWidth,"week-days":_vm.weekDays,"switch-to-narrower-view":_vm.switchToNarrowerView}}):_vm._e(),_c('div',{ref:"cells",staticClass:"vuecal__flex",attrs:{"grow":"","wrap":!_vm.minCellWidth || _vm.view.id !== 'week'}},_vm._l((_vm.viewCells),function(cell,i){return _c('vuecal-cell',{key:i,attrs:{"options":_vm.$props,"data":cell,"cell-width":_vm.hideWeekdays.length && ['month', 'week'].includes(_vm.view.id) && _vm.cellWidth,"min-timestamp":_vm.minTimestamp,"max-timestamp":_vm.maxTimestamp,"cell-splits":_vm.hasSplits && _vm.splitDays || []},scopedSlots:_vm._u([{key:"cell-content",fn:function(ref){
var events = ref.events;
var split = ref.split;
var selectCell = ref.selectCell;
return [_vm._t("cell-content",[(split && !_vm.stickySplitLabels)?_c('div',{staticClass:"split-label",domProps:{"innerHTML":_vm._s(split.label)}}):_vm._e(),(cell.content)?_c('div',{staticClass:"vuecal__cell-date",domProps:{"innerHTML":_vm._s(cell.content)}}):_vm._e(),(((_vm.view.id === 'month' && !_vm.eventsOnMonthView) || (['years', 'year'].includes(_vm.view.id) && _vm.eventsCountOnYearView)) && events.length)?_c('div',{staticClass:"vuecal__cell-events-count"},[_vm._t("events-count",[_vm._v(_vm._s(events.length))],{"view":_vm.view,"events":events})],2):_vm._e(),(!events.length && ['week', 'day'].includes(_vm.view.id))?_c('div',{staticClass:"vuecal__no-event"},[_vm._t("no-event",[_vm._v(_vm._s(_vm.texts.noEvent))])],2):_vm._e()],{"cell":cell,"view":_vm.view,"goNarrower":selectCell,"events":events})]}},{key:"event-renderer",fn:function(ref){
var event = ref.event;
var view = ref.view;
return [_vm._t("event-renderer",[(_vm.editableEvents && event.title)?_c('div',{staticClass:"vuecal__event-title vuecal__event-title--edit",attrs:{"contenteditable":""},domProps:{"innerHTML":_vm._s(event.title)},on:{"blur":function($event){return _vm.onEventTitleBlur($event, event)}}}):(event.title)?_c('div',{staticClass:"vuecal__event-title",domProps:{"innerHTML":_vm._s(_vm.getEventTitle(event))}}):_vm._e(),((event.startTimeMinutes || event.endTimeMinutes) && !(view === 'month' && event.allDay && _vm.showAllDayEvents === 'short') && !_vm.isShortMonthView)?_c('div',{staticClass:"vuecal__event-time"},[_vm._v(_vm._s(_vm._f("formatTime")(event.startTimeMinutes,_vm.timeFormat || (_vm.twelveHour ? 'h:mm{am}' : 'HH:mm')))),(event.endTimeMinutes)?_c('span',[_vm._v(" - "+_vm._s(_vm._f("formatTime")(event.endTimeMinutes,_vm.timeFormat || (_vm.twelveHour ? 'h:mm{am}' : 'HH:mm'))))]):_vm._e(),(event.daysCount > 1 && event.segments[cell.formattedDate].isFirstDay)?_c('small',{staticClass:"days-to-end"},[_vm._v(" +"+_vm._s(event.daysCount - 1)+_vm._s((_vm.texts.day[0] || '').toLowerCase()))]):_vm._e()]):_vm._e(),(event.content && !(view === 'month' && event.allDay && _vm.showAllDayEvents === 'short') && !_vm.isShortMonthView)?_c('div',{staticClass:"vuecal__event-content",domProps:{"innerHTML":_vm._s(event.content)}}):_vm._e()],{"view":view,"event":event})]}}],null,true)},[_vm._t("default")],2)}),1)],1)])])])])],1):_vm._e()],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/vue-cal/index.vue?vue&type=template&id=5b8484a2&lang=pug&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es7.object.get-own-property-descriptors.js
var es7_object_get_own_property_descriptors = __webpack_require__("8e6e");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.string.small.js
var es6_string_small = __webpack_require__("f386");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js
var iterator = __webpack_require__("5d58");
var iterator_default = /*#__PURE__*/__webpack_require__.n(iterator);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/symbol.js
var symbol = __webpack_require__("67bb");
var symbol_default = /*#__PURE__*/__webpack_require__.n(symbol);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js



function typeof_typeof2(obj) { if (typeof symbol_default.a === "function" && typeof iterator_default.a === "symbol") { typeof_typeof2 = function _typeof2(obj) { return typeof obj; }; } else { typeof_typeof2 = function _typeof2(obj) { return obj && typeof symbol_default.a === "function" && obj.constructor === symbol_default.a && obj !== symbol_default.a.prototype ? "symbol" : typeof obj; }; } return typeof_typeof2(obj); }

function typeof_typeof(obj) {
  if (typeof symbol_default.a === "function" && typeof_typeof2(iterator_default.a) === "symbol") {
    typeof_typeof = function _typeof(obj) {
      return typeof_typeof2(obj);
    };
  } else {
    typeof_typeof = function _typeof(obj) {
      return obj && typeof symbol_default.a === "function" && obj.constructor === symbol_default.a && obj !== symbol_default.a.prototype ? "symbol" : typeof_typeof2(obj);
    };
  }

  return typeof_typeof(obj);
}
// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.object.assign.js
var es6_object_assign = __webpack_require__("f751");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.split.js
var es6_regexp_split = __webpack_require__("28a5");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js
var is_array = __webpack_require__("a745");
var is_array_default = /*#__PURE__*/__webpack_require__.n(is_array);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js

function _arrayWithHoles(arr) {
  if (is_array_default()(arr)) return arr;
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js
var get_iterator = __webpack_require__("5d73");
var get_iterator_default = /*#__PURE__*/__webpack_require__.n(get_iterator);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = get_iterator_default()(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js



function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}
// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.replace.js
var es6_regexp_replace = __webpack_require__("a481");

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithoutHoles.js

function _arrayWithoutHoles(arr) {
  if (is_array_default()(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/array/from.js
var from = __webpack_require__("774e");
var from_default = /*#__PURE__*/__webpack_require__.n(from);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/is-iterable.js
var is_iterable = __webpack_require__("c8bb");
var is_iterable_default = /*#__PURE__*/__webpack_require__.n(is_iterable);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArray.js


function _iterableToArray(iter) {
  if (is_iterable_default()(Object(iter)) || Object.prototype.toString.call(iter) === "[object Arguments]") return from_default()(iter);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableSpread.js
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js



function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js
var define_property = __webpack_require__("85f2");
var define_property_default = /*#__PURE__*/__webpack_require__.n(define_property);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js

function _defineProperty(obj, key, value) {
  if (key in obj) {
    define_property_default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}
// EXTERNAL MODULE: ./node_modules/core-js/modules/es7.array.includes.js
var es7_array_includes = __webpack_require__("6762");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.string.includes.js
var es6_string_includes = __webpack_require__("2fdb");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.find.js
var es6_array_find = __webpack_require__("7514");

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom.iterable.js
var web_dom_iterable = __webpack_require__("ac6a");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.iterator.js
var es6_array_iterator = __webpack_require__("cadf");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.object.keys.js
var es6_object_keys = __webpack_require__("456d");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.fill.js
var es6_array_fill = __webpack_require__("6c7b");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.number.constructor.js
var es6_number_constructor = __webpack_require__("c5f6");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.match.js
var es6_regexp_match = __webpack_require__("4917");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.to-string.js
var es6_regexp_to_string = __webpack_require__("6b54");

// CONCATENATED MODULE: ./src/components/vue-cal/date-utils.js




// Cache Today's date (to a maximum) for better isDateToday() performances. Formatted without leading 0.
// We still need to update Today's date when Today changes without page refresh.
var date_utils_now, todayDate, todayF;

var todayFormatted = function todayFormatted() {
  if (todayDate !== new Date().getDate()) {
    date_utils_now = new Date();
    todayDate = date_utils_now.getDate();
    todayF = "".concat(date_utils_now.getFullYear(), "-").concat(date_utils_now.getMonth(), "-").concat(date_utils_now.getDate());
  }

  return todayF;
}; // eslint-disable-next-line


Date.prototype.addDays = function (days) {
  var date = new Date(this.valueOf());
  date.setDate(date.getDate() + days);
  return date;
}; // eslint-disable-next-line


Date.prototype.subtractDays = function (days) {
  var date = new Date(this.valueOf());
  date.setDate(date.getDate() - days);
  return date;
}; // eslint-disable-next-line


Date.prototype.getWeek = function () {
  var d = new Date(Date.UTC(this.getFullYear(), this.getMonth(), this.getDate()));
  var dayNum = d.getUTCDay() || 7;
  d.setUTCDate(d.getUTCDate() + 4 - dayNum);
  var yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
  return Math.ceil(((d - yearStart) / 86400000 + 1) / 7);
};

var isDateToday = function isDateToday(date) {
  return "".concat(date.getFullYear(), "-").concat(date.getMonth(), "-").concat(date.getDate()) === todayFormatted();
}; // Returns today if it's FirstDayOfWeek (Monday or Sunday) or previous FirstDayOfWeek otherwise.

var getPreviousFirstDayOfWeek = function getPreviousFirstDayOfWeek() {
  var date = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var weekStartsOnSunday = arguments.length > 1 ? arguments[1] : undefined;
  var prevFirstDayOfWeek = date && new Date(date.valueOf()) || new Date();
  var dayModifier = weekStartsOnSunday ? 7 : 6;
  prevFirstDayOfWeek.setDate(prevFirstDayOfWeek.getDate() - (prevFirstDayOfWeek.getDay() + dayModifier) % 7);
  return prevFirstDayOfWeek;
};

var nth = function nth(d) {
  if (d > 3 && d < 21) return 'th';

  switch (d % 10) {
    case 1:
      return 'st';

    case 2:
      return 'nd';

    case 3:
      return 'rd';

    default:
      return 'th';
  }
}; // Time in minutes.


var date_utils_formatTime = function formatTime(time) {
  var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'HH:mm';
  var H = Math.floor(time / 60);
  var h = H % 12 ? H % 12 : 12;
  var am = H < 12 ? 'am' : 'pm';
  var m = Math.floor(time % 60);
  var timeObj = {
    H: H,
    h: h,
    HH: (H < 10 ? '0' : '') + H,
    hh: (h < 10 ? '0' : '') + h,
    am: am,
    AM: am.toUpperCase(),
    m: m,
    mm: (m < 10 ? '0' : '') + m
  };
  return format.replace(/(\{[a-zA-Z]+\}|[a-zA-Z]+)/g, function (m, contents) {
    return timeObj[contents.replace(/\{|\}/g, '')];
  });
};
var date_utils_formatDate = function formatDate(date) {
  var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'yyyy-mm-dd';
  var texts = arguments.length > 2 ? arguments[2] : undefined;
  if (!format) format = 'yyyy-mm-dd'; // Allows passing null for default format.

  var d = date.getDate();
  var m = date.getMonth() + 1;
  var dateObj = {
    D: date.getDay(),
    // 0 to 6.
    DD: texts.weekDays[(date.getDay() - 1 + 7) % 7][0],
    // M to S.
    DDD: texts.weekDays[(date.getDay() - 1 + 7) % 7].substr(0, 3),
    // Mon to Sun.
    DDDD: texts.weekDays[(date.getDay() - 1 + 7) % 7],
    // Monday to Sunday.
    d: d,
    // 1 to 31.
    dd: (d < 10 ? '0' : '') + d,
    // 01 to 31.
    S: nth(d),
    // st, nd, rd, th.
    m: m,
    // 1 to 12.
    mm: (m < 10 ? '0' : '') + m,
    // 01 to 12.
    mmm: texts.months[m - 1].substr(0, 3),
    // Jan to Dec.
    mmmm: texts.months[m - 1],
    // January to December.
    yyyy: date.getFullYear(),
    // 2018.
    yy: date.getFullYear().toString().substr(2, 4) // 18.

  };
  return format.replace(/(\{[a-zA-Z]+\}|[a-zA-Z]+)/g, function (m, contents) {
    var result = dateObj[contents.replace(/\{|\}/g, '')];
    return result !== undefined ? result : contents;
  });
};
var date_utils_stringToDate = function stringToDate(string) {
  var _string$match = string.match(/(\d{4})-(\d{2})-(\d{2})(?: (\d{2}):(\d{2}))?/),
      _string$match2 = _slicedToArray(_string$match, 6),
      y = _string$match2[1],
      m = _string$match2[2],
      d = _string$match2[3],
      _string$match2$ = _string$match2[4],
      h = _string$match2$ === void 0 ? 0 : _string$match2$,
      _string$match2$2 = _string$match2[5],
      min = _string$match2$2 === void 0 ? 0 : _string$match2$2;

  return new Date(y, parseInt(m) - 1, d, h, min);
};
/**
 * Count the number of days this date range spans onto.
 * E.g. countDays(2019-11-02 18:00, 2019-11-03 02:00) = 2
 *
 * @param {String, Date} start the start date
 * @param {String, Date} end the end date
 * @return {Integer} The number of days this date range involves
 */

var countDays = function countDays(start, end) {
  // replace '-' with '/' for Safari.
  if (typeof start === 'string') start = start.replace(/-/g, '/');
  if (typeof end === 'string') end = end.replace(/-/g, '/'); // set start & end at midnight then compare the delta.

  start = new Date(start).setHours(0, 0, 0); // set end at midnight plus 1 min, so Math.ceil will round it up to a full day.

  end = new Date(end).setHours(0, 0, 1); // Remove the potential daylight saving delta.

  var timezoneDiffMs = (new Date(end).getTimezoneOffset() - new Date(start).getTimezoneOffset()) * 60 * 1000;
  return Math.ceil((end - start - timezoneDiffMs) / (24 * 3600 * 1000));
};
// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.find-index.js
var es6_array_find_index = __webpack_require__("20d6");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.sort.js
var es6_array_sort = __webpack_require__("55dd");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.string.iterator.js
var es6_string_iterator = __webpack_require__("5df3");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.set.js
var es6_set = __webpack_require__("4f7f");

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__("8bbf");
var external_commonjs_vue_commonjs2_vue_root_Vue_default = /*#__PURE__*/__webpack_require__.n(external_commonjs_vue_commonjs2_vue_root_Vue_);

// CONCATENATED MODULE: ./src/components/vue-cal/event-utils.js














function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



var dayMilliseconds = 24 * 3600 * 1000;
var defaultEventDuration = 2; // In hours.

var eventDefaults = {
  _eid: null,
  start: '',
  // Externally given formatted date & time.
  startDate: '',
  // Date object.
  startTimeMinutes: 0,
  end: '',
  // Externally given formatted date & time.
  endDate: '',
  // Date object.
  endTimeMinutes: 0,
  title: '',
  content: '',
  background: false,
  allDay: false,
  segments: null,
  daysCount: 1,
  deletable: true,
  deleting: false,
  resizable: true,
  resizing: false,
  focused: false,
  top: 0,
  height: 0,
  classes: [] // Create an event at the given date and time, and allow overriding
  // event attributes through the eventOptions object.

};
var event_utils_createAnEvent = function createAnEvent(dateTime, eventOptions, vuecal) {
  if (typeof dateTime === 'string') dateTime = date_utils_stringToDate(dateTime);
  if (!(dateTime instanceof Date)) return false;
  var hours = dateTime.getHours();
  var minutes = dateTime.getMinutes();
  var startTimeMinutes = hours * 60 + minutes;
  var hoursEnd = hours + defaultEventDuration;
  var endTimeMinutes = startTimeMinutes + 120;
  var formattedHours = (hours < 10 ? '0' : '') + hours;
  var formattedHoursEnd = (hoursEnd < 10 ? '0' : '') + hoursEnd;
  var formattedMinutes = (minutes < 10 ? '0' : '') + minutes;
  var start = date_utils_formatDate(dateTime, null, vuecal.texts) + (vuecal.time ? " ".concat(formattedHours, ":").concat(formattedMinutes) : '');
  var end = date_utils_formatDate(dateTime, null, vuecal.texts) + (vuecal.time ? " ".concat(formattedHoursEnd, ":").concat(formattedMinutes) : '');

  var event = _objectSpread({}, eventDefaults, {
    _eid: "".concat(vuecal._uid, "_").concat(vuecal.eventIdIncrement++),
    start: start,
    startDate: dateTime,
    startTimeMinutes: startTimeMinutes,
    end: end,
    endDate: new Date(end.replace(/-/g, '/')),
    // replace '-' with '/' for Safari.
    endTimeMinutes: endTimeMinutes,
    segments: null
  }, eventOptions); // If the onEventCreate() function is given as a parameter to vue-cal:
  // 1. give it access to the created event & the deleteAnEvent() function.
  // 2. Prevent creation of the event if this function returns false.


  if (typeof vuecal.onEventCreate === 'function') {
    if (!vuecal.onEventCreate(event, function () {
      return deleteAnEvent(event, vuecal);
    })) return;
  } // Check if event is a multiple day event and update days count.


  if (event.start.substr(0, 10) !== event.end.substr(0, 10)) {
    event.daysCount = countDays(event.startDate, event.endDate);
  } // Add event to the mutableEvents array.


  vuecal.mutableEvents.push(event); // Add the new event to the current view.
  // The event may have been edited on the fly to become a multiple-day event,
  // the method addEventsToView makes sure the segments are created.

  vuecal.addEventsToView([event]);
  vuecal.emitWithEvent('event-create', event);
  vuecal.emitWithEvent('event-change', event);
  return event;
};
var event_utils_addEventSegment = function addEventSegment(e, vuecal) {
  if (!e.segments) {
    external_commonjs_vue_commonjs2_vue_root_Vue_default.a.set(e, 'segments', {});
    e.segments[e.start.substr(0, 10)] = {
      startDate: e.startDate,
      start: e.start.substr(0, 10),
      startTimeMinutes: e.startTimeMinutes,
      endTimeMinutes: 24 * 60,
      isFirstDay: true,
      isLastDay: false,
      height: 0,
      top: 0
    };
  } // Modify the last segment - which is no more the last one.


  var previousSegment = e.segments[date_utils_formatDate(e.endDate, null, vuecal.texts)]; // previousSegment might not exist when dragging too fast, prevent errors.

  if (previousSegment) {
    previousSegment.isLastDay = false;
    previousSegment.endTimeMinutes = 24 * 60;
  } else {} // @todo: when moving fast might lose the previousSegment.
  // Trying to update it would then result in an error, but do nothing would create a visual bug.
  // Create the new last segment.


  var startDate = e.endDate.addDays(1);
  var endDate = new Date(startDate);
  var formattedDate = date_utils_formatDate(startDate, null, vuecal.texts);
  startDate.setHours(0, 0);
  e.segments[formattedDate] = {
    startDate: startDate,
    start: formattedDate,
    startTimeMinutes: 0,
    endTimeMinutes: e.endTimeMinutes,
    isFirstDay: false,
    isLastDay: true,
    height: 0,
    top: 0
  };
  e.daysCount = Object.keys(e.segments).length;
  e.endDate = endDate;
  e.end = "".concat(formattedDate, " ").concat(date_utils_formatTime(e.endTimeMinutes));
  return formattedDate;
};
var event_utils_removeEventSegment = function removeEventSegment(e, vuecal) {
  var segmentsCount = Object.keys(e.segments).length;
  if (segmentsCount <= 1) return e.end.substr(0, 10); // Remove the last segment.

  delete e.segments[e.end.substr(0, 10)];
  segmentsCount--;
  var endDate = e.endDate.subtractDays(1);
  var formattedDate = date_utils_formatDate(endDate, null, vuecal.texts);
  var previousSegment = e.segments[formattedDate]; // If no more segments, reset the segments attribute to null.

  if (!segmentsCount) e.segments = null; // previousSegment might not exist when dragging too fast, prevent errors.
  else if (previousSegment) {
      // Modify the new last segment.
      previousSegment.isLastDay = true;
      previousSegment.endTimeMinutes = e.endTimeMinutes;
    } else {// @todo: when moving fast might lose the previousSegment.
      // Trying to update it would then result in an error, but do nothing would create a visual bug.
    }
  e.daysCount = segmentsCount || 1;
  e.endDate = endDate;
  e.end = "".concat(formattedDate, " ").concat(date_utils_formatTime(e.endTimeMinutes));
  return formattedDate;
};
var event_utils_createEventSegments = function createEventSegments(e, viewStartDate, viewEndDate, vuecal) {
  var eventStart = e.startDate.getTime();
  var eventEnd = e.endDate.getTime();
  if (!e.endDate.getHours() && !e.endDate.getMinutes()) eventEnd -= 1000;
  external_commonjs_vue_commonjs2_vue_root_Vue_default.a.set(e, 'segments', {}); // Create 1 segment per day in the event, but only within the current view.

  var timestamp = Math.max(viewStartDate.getTime(), eventStart);
  var end = Math.min(viewEndDate.getTime(), eventEnd);

  while (timestamp <= end) {
    var nextMidnight = new Date(timestamp + dayMilliseconds).setHours(0, 0, 0);
    var isFirstDay = timestamp === eventStart; // const isLastDay = end === eventEnd && nextMidnight > end
    // @todo: testing this:

    var isLastDay = end === eventEnd && nextMidnight >= end;
    var startDate = isFirstDay ? e.startDate : new Date(timestamp);
    var formattedDate = isFirstDay ? e.start.substr(0, 10) : date_utils_formatDate(startDate, null, vuecal.texts);
    e.segments[formattedDate] = {
      startDate: startDate,
      start: formattedDate,
      startTimeMinutes: isFirstDay ? e.startTimeMinutes : 0,
      endTimeMinutes: isLastDay ? e.endTimeMinutes : 24 * 60,
      isFirstDay: isFirstDay,
      isLastDay: isLastDay,
      height: 0,
      top: 0
    };
    timestamp = nextMidnight;
  }

  return e;
};
var deleteAnEvent = function deleteAnEvent(event, vuecal) {
  vuecal.emitWithEvent('event-delete', event); // Delete the event globally.

  vuecal.mutableEvents = vuecal.mutableEvents.filter(function (e) {
    return e._eid !== event._eid;
  }); // Delete the event from the current view.
  // checkCellOverlappingEvents() will be re-run automatically from the cell computed events.

  vuecal.view.events = vuecal.view.events.filter(function (e) {
    return e._eid !== event._eid;
  });
}; // EVENT OVERLAPS.
// ===================================================================
// Only for the current view, recreated on view change.

var comparisonArray, event_utils_cellOverlaps; // Will recalculate all the overlaps of the current cell OR split.
// cellEvents will contain only the current split events if in a split.

var event_utils_checkCellOverlappingEvents = function checkCellOverlappingEvents(cellEvents) {
  comparisonArray = cellEvents.slice(0);
  event_utils_cellOverlaps = {}; // Can't filter background events before calling this function otherwise
  // when an event is changed to background it would not update its previous overlaps.
  // @todo: implement case when dragging event across multiple cells.

  cellEvents.forEach(function (e) {
    // Never compare the current event in the next loops. the array is refined as we loop.
    comparisonArray.shift();
    if (!event_utils_cellOverlaps[e._eid]) external_commonjs_vue_commonjs2_vue_root_Vue_default.a.set(event_utils_cellOverlaps, e._eid, {
      overlaps: [],
      start: e.start,
      position: 0
    });
    event_utils_cellOverlaps[e._eid].position = 0;
    comparisonArray.forEach(function (e2) {
      if (!event_utils_cellOverlaps[e2._eid]) external_commonjs_vue_commonjs2_vue_root_Vue_default.a.set(event_utils_cellOverlaps, e2._eid, {
        overlaps: [],
        start: e2.start,
        position: 0
      }); // Add to the overlaps array if overlapping.

      if (!e.background && !e.allDay && !e2.background && !e2.allDay && eventInRange(e2, e.startDate, e.endDate, e)) {
        event_utils_cellOverlaps[e._eid].overlaps.push(e2._eid);

        event_utils_cellOverlaps[e._eid].overlaps = _toConsumableArray(new Set(event_utils_cellOverlaps[e._eid].overlaps)); // Dedupe, most performant way.

        event_utils_cellOverlaps[e2._eid].overlaps.push(e._eid);

        event_utils_cellOverlaps[e2._eid].overlaps = _toConsumableArray(new Set(event_utils_cellOverlaps[e2._eid].overlaps)); // Dedupe, most performant way.

        event_utils_cellOverlaps[e2._eid].position++;
      } // Remove from the overlaps array if not overlapping or if 1 of the 2 events is background or all-day long.
      else {
          var pos1, pos2;
          if ((pos1 = (event_utils_cellOverlaps[e._eid] || {
            overlaps: []
          }).overlaps.indexOf(e2._eid)) > -1) event_utils_cellOverlaps[e._eid].overlaps.splice(pos1, 1);
          if ((pos2 = (event_utils_cellOverlaps[e2._eid] || {
            overlaps: []
          }).overlaps.indexOf(e._eid)) > -1) event_utils_cellOverlaps[e2._eid].overlaps.splice(pos2, 1);
          event_utils_cellOverlaps[e2._eid].position--;
        }
    });
  }); // Overlaps streak is the longest horizontal set of simultaneous events.
  // This is determining the width of events in a streak.
  // e.g. 3 overlapping events [1, 2, 3]; 1 overlaps 2 & 3; 2 & 3 don't overlap;
  //      => streak = 2; each width = 50% not 33%.

  var longestStreak = 0;

  var _loop = function _loop(id) {
    var item = event_utils_cellOverlaps[id]; // Calculate the position of each event in current streak (determines the CSS left property).

    var overlapsRow = item.overlaps.map(function (id2) {
      return {
        id: id2,
        start: event_utils_cellOverlaps[id2].start
      };
    });
    overlapsRow.push({
      id: id,
      start: item.start
    });
    overlapsRow.sort(function (a, b) {
      return a.start < b.start ? -1 : a.start > b.start ? 1 : a.id > b.id ? -1 : 1;
    });
    item.position = overlapsRow.findIndex(function (e) {
      return e.id === id;
    });
    longestStreak = Math.max(event_utils_getOverlapsStreak(id, item, event_utils_cellOverlaps), longestStreak);
  };

  for (var id in event_utils_cellOverlaps) {
    _loop(id);
  }

  return [event_utils_cellOverlaps, longestStreak];
};
var event_utils_getOverlapsStreak = function getOverlapsStreak(id, event) {
  var cellOverlaps = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var streak = event.overlaps.length + 1;
  var removeFromStreak = [];
  event.overlaps.forEach(function (id2) {
    if (!removeFromStreak.includes(id2)) {
      var overlapsWithoutSelf = event.overlaps.filter(function (id3) {
        return id3 !== id2;
      });
      overlapsWithoutSelf.forEach(function (id4) {
        if (!cellOverlaps[id4].overlaps.includes(id2)) removeFromStreak.push(id4);
      });
    }
  });
  removeFromStreak = _toConsumableArray(new Set(removeFromStreak)); // Dedupe, most performant way.

  streak -= removeFromStreak.length;
  return streak;
};
var updateEventPosition = function updateEventPosition(event, vuecal) {
  var startTimeMinutes = event.startTimeMinutes,
      endTimeMinutes = event.endTimeMinutes; // Top of event.

  var minutesFromTop = startTimeMinutes - vuecal.timeFrom;
  var top = Math.round(minutesFromTop * vuecal.timeCellHeight / vuecal.timeStep); // Bottom of event.

  minutesFromTop = Math.min(endTimeMinutes, vuecal.timeTo) - vuecal.timeFrom;
  var bottom = Math.round(minutesFromTop * vuecal.timeCellHeight / vuecal.timeStep);
  event.top = Math.max(top, 0);
  event.height = bottom - event.top;
};
/**
 * Tells whether an event is in a given date range, even partially.
 *
 * @param {Object} event The event to test.
 * @param {Date} start The start of range date object.
 * @param {Date} end The end of range date object.
 * @return {Boolean}
 */

var eventInRange = function eventInRange(event, start, end) {
  // Check if all-day or timeless event (if date but no time there won't be a `:` in event.start).
  if (event.allDay || event.start.indexOf(':') === -1) {
    // Get the date and discard the time if any, then check it's within the date range.
    var eventStart = new Date(event.startDate).setHours(0, 0, 0, 0);
    return eventStart >= new Date(start).setHours(0, 0, 0, 0) && eventStart <= new Date(end).setHours(0, 0, 0, 0);
  }

  var startTimestamp = event.startDate.getTime();
  var endTimestamp = event.endDate.getTime();
  return startTimestamp < end.getTime() && endTimestamp > start.getTime();
};
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"e06f8060-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vue-cal/header.vue?vue&type=template&id=28507e10&lang=pug&
var headervue_type_template_id_28507e10_lang_pug_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vuecal__header"},[(!_vm.options.hideViewSelector)?_c('div',{staticClass:"vuecal__flex vuecal__menu",attrs:{"role":"tablist","aria-label":"Calendar views navigation"}},_vm._l((_vm.viewProps.views),function(v,id){return (v.enabled)?_c('button',{class:{ active: _vm.viewProps.view.id === id },attrs:{"aria-label":((v.label) + " view")},on:{"click":function($event){return _vm.$parent.switchView(id, null, true)}}},[_vm._v(_vm._s(v.label))]):_vm._e()}),0):_vm._e(),(!_vm.options.hideTitleBar)?_c('div',{staticClass:"vuecal__title-bar"},[_c('button',{staticClass:"vuecal__arrow vuecal__arrow--prev",attrs:{"aria-label":("Previous " + (_vm.viewProps.view.id))},on:{"click":_vm.previous}},[_vm._t("arrow-prev")],2),_c('div',{staticClass:"vuecal__flex vuecal__title",attrs:{"grow":""}},[_c('transition',{attrs:{"name":("slide-fade--" + _vm.transitionDirection)}},[_c(!!_vm.broaderView ? 'button' : 'span',{key:_vm.options.transitions ? ("" + (_vm.viewProps.view.id) + (_vm.viewProps.view.startDate.toString())) : false,tag:"component",attrs:{"aria-label":!!_vm.broaderView ? ("Go to " + _vm.broaderView + " view") : false},on:{"click":_vm.switchToBroaderView}},[_vm._t("title")],2)],1)],1),(_vm.options.todayButton)?_c('button',{staticClass:"vuecal__today-btn",attrs:{"aria-label":"Today"},on:{"click":_vm.goToToday}},[_vm._t("today-button")],2):_vm._e(),_c('button',{staticClass:"vuecal__arrow vuecal__arrow--next",attrs:{"aria-label":("Next " + (_vm.viewProps.view.id))},on:{"click":_vm.next}},[_vm._t("arrow-next")],2)]):_vm._e(),(_vm.viewProps.weekDaysInHeader)?_c('weekdays-headings',{attrs:{"vuecal":_vm.$parent,"view":_vm.viewProps.view,"week-days":_vm.weekDays,"transition-direction":_vm.transitionDirection,"switch-to-narrower-view":_vm.switchToNarrowerView}}):_vm._e(),_c('transition',{attrs:{"name":("slide-fade--" + _vm.transitionDirection)}},[(_vm.viewProps.view.id === 'day' && _vm.options.stickySplitLabels && _vm.options.splitDays.length)?_c('div',{staticClass:"vuecal__flex vuecal__split-days-headers"},_vm._l((_vm.options.splitDays),function(split,i){return _c('div',{key:i,staticClass:"day-split-header",class:split.class || false},[_vm._v(_vm._s(split.label))])}),0):_vm._e()])],1)}
var headervue_type_template_id_28507e10_lang_pug_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/vue-cal/header.vue?vue&type=template&id=28507e10&lang=pug&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"e06f8060-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vue-cal/weekdays-headings.vue?vue&type=template&id=0536295c&lang=pug&
var weekdays_headingsvue_type_template_id_0536295c_lang_pug_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vuecal__flex vuecal__weekdays-headings"},_vm._l((_vm.headings),function(heading,i){return (!heading.hide)?_c('div',{key:i,staticClass:"vuecal__flex vuecal__heading",class:{ today: heading.today, clickable: _vm.cellHeadingsClickable },style:(_vm.weekdayCellStyles),on:{"click":function($event){_vm.view.id === 'week' && _vm.selectCell(heading.date, $event)},"dblclick":function($event){_vm.view.id === 'week' && _vm.vuecal.dblclickToNavigate && _vm.switchToNarrowerView()}}},[_c('transition',{attrs:{"name":("slide-fade--" + _vm.transitionDirection),"appear":_vm.vuecal.transitions}},[_c('div',{key:_vm.vuecal.transitions ? (i + "-" + (heading.dayOfMonth)) : false,staticClass:"vuecal__flex",attrs:{"column":""}},[_c('div',{staticClass:"vuecal__flex weekday-label",attrs:{"grow":""}},[_c('span',{staticClass:"full"},[_vm._v(_vm._s(heading.full))]),_c('span',{staticClass:"small"},[_vm._v(_vm._s(heading.small))]),_c('span',{staticClass:"xsmall"},[_vm._v(_vm._s(heading.xsmall))]),(heading.dayOfMonth)?_c('span',[_vm._v(" "+_vm._s(heading.dayOfMonth))]):_vm._e()]),(_vm.vuecal.stickySplitLabels && _vm.vuecal.splitDays.length)?_c('div',{staticClass:"vuecal__flex vuecal__split-days-headers",attrs:{"grow":""}},_vm._l((_vm.vuecal.splitDays),function(split,i){return _c('div',{key:i,staticClass:"day-split-header",class:split.class || false},[_vm._v(_vm._s(split.label))])}),0):_vm._e()])])],1):_vm._e()}),0)}
var weekdays_headingsvue_type_template_id_0536295c_lang_pug_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/vue-cal/weekdays-headings.vue?vue&type=template&id=0536295c&lang=pug&

// CONCATENATED MODULE: ./src/components/vue-cal/cell-utils.js
/**
 * Select a cell and go to narrower view on double click or single click according to vuecal option.
 *
 * @param {Boolean} force Force switching to narrower view.
 * @param {Object} vuecal The vuecal instance.
 * @param {Date} date The selected cell date at the exact time where it was clicked (through cursor coords).
 * @param {Integer} split The selected cell split if any.
 */
var cell_utils_selectCell = function selectCell() {
  var force = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var vuecal = arguments.length > 1 ? arguments[1] : undefined;
  var date = arguments.length > 2 ? arguments[2] : undefined;
  var split = arguments.length > 3 ? arguments[3] : undefined;
  // Cell-click event returns a date and time at cursor position.
  vuecal.$emit('cell-click', split ? {
    date: date,
    split: split
  } : date); // Switch to narrower view.

  if (vuecal.clickToNavigate || force) vuecal.switchToNarrowerView(); // Handle double click manually for touch devices.
  else if (vuecal.dblclickToNavigate && 'ontouchstart' in window) {
      vuecal.domEvents.dblTapACell.taps++;
      setTimeout(function () {
        return vuecal.domEvents.dblTapACell.taps = 0;
      }, vuecal.domEvents.dblTapACell.timeout);

      if (vuecal.domEvents.dblTapACell.taps >= 2) {
        vuecal.domEvents.dblTapACell.taps = 0;
        vuecal.switchToNarrowerView();
        vuecal.$emit('cell-dblclick', split ? {
          date: date,
          split: split
        } : date);
      }
    }
};
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vue-cal/weekdays-headings.vue?vue&type=script&lang=js&






function weekdays_headingsvue_type_script_lang_js_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function weekdays_headingsvue_type_script_lang_js_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { weekdays_headingsvue_type_script_lang_js_ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { weekdays_headingsvue_type_script_lang_js_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var weekdays_headingsvue_type_script_lang_js_ = ({
  props: {
    vuecal: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    view: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    transitionDirection: {
      type: String,
      default: 'right'
    },
    weekDays: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    switchToNarrowerView: {
      type: Function,
      default: function _default() {}
    }
  },
  methods: {
    selectCell: function selectCell(date, DOMEvent) {
      date = new Date(date);
      date.setMinutes(this.vuecal.minutesAtCursor(DOMEvent).startTimeMinutes);

      cell_utils_selectCell(false, this.vuecal, date, DOMEvent);
    }
  },
  computed: {
    headings: function headings() {
      var _this = this;

      var headings = [];

      switch (this.view.id) {
        case 'month':
        case 'week':
          var todayFound = false;
          headings = this.weekDays.map(function (cell, i) {
            var date = _this.view.startDate.addDays(i);

            return weekdays_headingsvue_type_script_lang_js_objectSpread({
              hide: cell.hide,
              full: cell.label,
              // If defined in i18n file, weekDaysShort overrides default truncation of
              // week days when does not fit on screen or with small/xsmall options.
              small: cell.short || cell.label.substr(0, 3),
              xsmall: cell.short || cell.label.substr(0, 1)
            }, _this.view.id === 'week' ? {
              dayOfMonth: date.getDate(),
              date: date,
              today: !todayFound && isDateToday(date) && !todayFound++
            } : {});
          });
          break;
      }

      return headings;
    },
    cellWidth: function cellWidth() {
      return 100 / (7 - this.weekDays.reduce(function (total, day) {
        return total + day.hide;
      }, 0));
    },
    weekdayCellStyles: function weekdayCellStyles() {
      return weekdays_headingsvue_type_script_lang_js_objectSpread({}, this.vuecal.hideWeekdays.length ? {
        width: "".concat(this.cellWidth, "%")
      } : {}, {
        minWidth: this.vuecal.minCellWidth && this.view.id === 'week' ? "".concat(this.vuecal.minCellWidth, "px") : null
      });
    },
    cellHeadingsClickable: function cellHeadingsClickable() {
      return this.view.id === 'week' && (this.vuecal.clickToNavigate || this.vuecal.dblclickToNavigate);
    }
  }
});
// CONCATENATED MODULE: ./src/components/vue-cal/weekdays-headings.vue?vue&type=script&lang=js&
 /* harmony default export */ var vue_cal_weekdays_headingsvue_type_script_lang_js_ = (weekdays_headingsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/vue-cal/weekdays-headings.vue?vue&type=style&index=0&lang=scss&
var weekdays_headingsvue_type_style_index_0_lang_scss_ = __webpack_require__("2029");

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/components/vue-cal/weekdays-headings.vue






/* normalize component */

var component = normalizeComponent(
  vue_cal_weekdays_headingsvue_type_script_lang_js_,
  weekdays_headingsvue_type_template_id_0536295c_lang_pug_render,
  weekdays_headingsvue_type_template_id_0536295c_lang_pug_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var weekdays_headings = (component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vue-cal/header.vue?vue&type=script&lang=js&




//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var headervue_type_script_lang_js_ = ({
  components: {
    WeekdaysHeadings: weekdays_headings
  },
  props: {
    // Vuecal main component options (props).
    options: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    viewProps: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    weekDays: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    switchToNarrowerView: {
      type: Function,
      default: function _default() {}
    }
  },
  methods: {
    previous: function previous() {
      this.$parent.previousNext(false);
    },
    next: function next() {
      this.$parent.previousNext();
    },
    goToToday: function goToToday() {
      // Last midnight.
      this.$parent.updateSelectedDate(new Date(new Date().setHours(0, 0, 0)));
    },
    switchToBroaderView: function switchToBroaderView() {
      this.transitionDirection = 'left';
      if (this.broaderView) this.$parent.switchView(this.broaderView);
    }
  },
  computed: {
    transitionDirection: {
      get: function get() {
        return this.$parent.transitionDirection;
      },
      set: function set(direction) {
        this.$parent.transitionDirection = direction;
      }
    },
    broaderView: function broaderView() {
      var _this = this;

      var views = Object.keys(this.viewProps.views);
      views = views.slice(0, views.indexOf(this.viewProps.view.id));
      views.reverse();
      return views.find(function (v) {
        return _this.viewProps.views[v].enabled;
      });
    }
  }
});
// CONCATENATED MODULE: ./src/components/vue-cal/header.vue?vue&type=script&lang=js&
 /* harmony default export */ var vue_cal_headervue_type_script_lang_js_ = (headervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/vue-cal/header.vue?vue&type=style&index=0&lang=scss&
var headervue_type_style_index_0_lang_scss_ = __webpack_require__("da8a");

// CONCATENATED MODULE: ./src/components/vue-cal/header.vue






/* normalize component */

var header_component = normalizeComponent(
  vue_cal_headervue_type_script_lang_js_,
  headervue_type_template_id_28507e10_lang_pug_render,
  headervue_type_template_id_28507e10_lang_pug_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var header = (header_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"e06f8060-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vue-cal/cell.vue?vue&type=template&id=4a2a1690&lang=pug&
var cellvue_type_template_id_4a2a1690_lang_pug_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition-group',{staticClass:"vuecal__cell",class:_vm.cssClasses,style:(_vm.cellStyles),attrs:{"name":("slide-fade--" + _vm.transitionDirection),"tag":"div","appear":_vm.options.transitions}},[_vm._l(((_vm.splits.length ? _vm.splits : 1)),function(split,i){return _c('div',{key:_vm.options.transitions ? (_vm.view + "-" + (_vm.data.content) + "-" + i) : i,staticClass:"vuecal__flex vuecal__cell-content",class:_vm.splits.length && ("vuecal__cell-split " + (split.class)),attrs:{"data-split":_vm.splits.length ? i + 1 : false,"column":"","tabindex":"0","aria-label":_vm.data.content},on:{"focus":function($event){return _vm.onCellFocus($event)},"keypress":function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }return _vm.$parent.switchToNarrowerView($event)},"touchstart":function($event){!_vm.isDisabled && _vm.onCellTouchStart($event, _vm.splits.length ? i + 1 : null)},"mousedown":function($event){!_vm.isDisabled && _vm.onCellMouseDown($event, _vm.splits.length ? i + 1 : null)},"click":function($event){!_vm.isDisabled && _vm.selectCell($event)},"dblclick":function($event){!_vm.isDisabled && _vm.onCellDblClick($event)}}},[_vm._t("cell-content",null,{"events":_vm.events,"selectCell":function ($event) { return _vm.selectCell($event, true); },"split":_vm.splits.length ? split : false}),(_vm.events.length && (['week', 'day'].includes(_vm.view) || (_vm.view === 'month' && _vm.options.eventsOnMonthView)))?_c('div',{staticClass:"vuecal__cell-events"},_vm._l(((_vm.splits.length ? split.events : _vm.events)),function(event,j){return _c('event',{key:j,attrs:{"vuecal":_vm.$parent,"cell-formatted-date":_vm.data.formattedDate,"event":event,"all-day":_vm.allDay,"cell-events":_vm.splits.length ? split.events : _vm.events,"overlaps":((_vm.splits.length ? split.overlaps[event._eid] : _vm.cellOverlaps[event._eid]) || []).overlaps,"event-position":((_vm.splits.length ? split.overlaps[event._eid] : _vm.cellOverlaps[event._eid]) || []).position,"overlaps-streak":_vm.splits.length ? split.overlapsStreak : _vm.cellOverlapsStreak},scopedSlots:_vm._u([{key:"event-renderer",fn:function(ref){
var event = ref.event;
var view = ref.view;
return [_vm._t("event-renderer",null,{"view":view,"event":event})]}}],null,true)})}),1):_vm._e()],2)}),(_vm.timelineVisible)?_c('div',{key:_vm.options.transitions ? (_vm.view + "-now-line") : 'now-line',staticClass:"vuecal__now-line",style:(("top: " + _vm.todaysTimePosition + "px"))}):_vm._e()],2)}
var cellvue_type_template_id_4a2a1690_lang_pug_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/vue-cal/cell.vue?vue&type=template&id=4a2a1690&lang=pug&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"e06f8060-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vue-cal/event.vue?vue&type=template&id=a1c8b120&lang=pug&
var eventvue_type_template_id_a1c8b120_lang_pug_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vuecal__event",class:_vm.eventClasses,style:(_vm.eventStyles),attrs:{"tabindex":"0"},on:{"focus":_vm.focusEvent,"keypress":function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }$event.stopPropagation();return _vm.onClick($event)},"mouseenter":_vm.onMouseEnter,"mouseleave":_vm.onMouseLeave,"touchstart":function($event){$event.stopPropagation();return _vm.onTouchStart($event)},"mousedown":function($event){$event.stopPropagation();return _vm.onMouseDown($event)},"click":_vm.onClick,"dblclick":_vm.onDblClick}},[(_vm.vuecal.editableEvents && _vm.event.deletable)?_c('div',{staticClass:"vuecal__event-delete",on:{"mousedown":function($event){$event.stopPropagation();return _vm.deleteEvent($event)},"touchstart":function($event){$event.stopPropagation();return _vm.touchDeleteEvent($event)}}},[_vm._v(_vm._s(_vm.vuecal.texts.deleteEvent))]):_vm._e(),_vm._t("event-renderer",null,{"event":_vm.event,"view":_vm.vuecal.view.id}),(_vm.resizable)?_c('div',{staticClass:"vuecal__event-resize-handle",attrs:{"contenteditable":"false"},on:{"mousedown":_vm.onDragHandleMouseDown,"touchstart":_vm.onDragHandleMouseDown}}):_vm._e()],2)}
var eventvue_type_template_id_a1c8b120_lang_pug_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/vue-cal/event.vue?vue&type=template&id=a1c8b120&lang=pug&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vue-cal/event.vue?vue&type=script&lang=js&





//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var eventvue_type_script_lang_js_ = ({
  props: {
    cellFormattedDate: {
      type: String,
      default: ''
    },
    vuecal: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    event: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    cellEvents: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    overlaps: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    eventPosition: {
      type: Number,
      default: 0
    },
    overlapsStreak: {
      type: Number,
      default: 0
    },
    allDay: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    // On an event.
    onMouseDown: function onMouseDown(e) {
      var _this = this;

      var touch = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      // Prevent a double mouse down on touch devices.
      if ('ontouchstart' in window && !touch) return false;
      var _this$domEvents = this.domEvents,
          clickHoldAnEvent = _this$domEvents.clickHoldAnEvent,
          resizeAnEvent = _this$domEvents.resizeAnEvent,
          focusAnEvent = _this$domEvents.focusAnEvent; // If the delete button is already out and event is on focus then delete event.

      if (focusAnEvent._eid === this.event._eid && clickHoldAnEvent._eid === this.event._eid) {
        return true;
      } // Focus the clicked event.


      this.focusEvent();
      clickHoldAnEvent._eid = null; // Reinit click hold on each click.
      // Show event delete button - only if not dragging.

      if (!resizeAnEvent._eid && this.vuecal.editableEvents) {
        clickHoldAnEvent.timeoutId = setTimeout(function () {
          clickHoldAnEvent._eid = _this.event._eid;
          _this.event.deleting = true;
        }, clickHoldAnEvent.timeout);
      }
    },
    onMouseEnter: function onMouseEnter(e) {
      e.preventDefault();
      this.vuecal.emitWithEvent('event-mouse-enter', this.event);
    },
    onMouseLeave: function onMouseLeave(e) {
      e.preventDefault();
      this.vuecal.emitWithEvent('event-mouse-leave', this.event);
    },
    onTouchStart: function onTouchStart(e) {
      this.onMouseDown(e, true);
    },
    onClick: function onClick(e) {
      if (typeof this.vuecal.onEventClick === 'function') return this.vuecal.onEventClick(this.event, e);
    },
    onDblClick: function onDblClick(e) {
      if (typeof this.vuecal.onEventDblclick === 'function') return this.vuecal.onEventDblclick(this.event, e);
    },
    onDragHandleMouseDown: function onDragHandleMouseDown() {
      this.domEvents.resizeAnEvent = Object.assign(this.domEvents.resizeAnEvent, {
        _eid: this.event._eid,
        start: (this.segment || this.event).start,
        split: this.event.split || null,
        segment: !!this.segment && this.segment.start,
        originalEndTimeMinutes: this.event.endTimeMinutes
      });
      this.event.resizing = true;
    },
    deleteEvent: function deleteEvent() {
      var touch = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      // Prevent a double mouse down on touch devices.
      if ('ontouchstart' in window && !touch) return false;
      deleteAnEvent(this.event, this.vuecal);
    },
    touchDeleteEvent: function touchDeleteEvent(event) {
      this.deleteEvent(true);
    },
    cancelDeleteEvent: function cancelDeleteEvent() {
      this.event.deleting = false;
    },
    focusEvent: function focusEvent() {
      var focusAnEvent = this.domEvents.focusAnEvent;
      this.vuecal.emitWithEvent('event-focus', this.event); // Unfocus previous event if any.

      var onFocus = focusAnEvent._eid;

      if (onFocus && onFocus !== this.event._eid) {
        var event = this.vuecal.view.events.find(function (e) {
          return e._eid === focusAnEvent._eid;
        });
        if (event) event.focused = false;
      } // Cancel delete on previous event if any.


      this.vuecal.cancelDelete();
      focusAnEvent._eid = this.event._eid;
      this.event.focused = true;
    }
  },
  computed: {
    // Don't rely on global variables otherwise whenever it would change all the events would be redrawn.
    eventStyles: function eventStyles() {
      if (!this.vuecal.time || !this.event.endTimeMinutes || this.vuecal.view.id === 'month' || this.allDay) return {}; // const width = 100 / Math.min(this.overlaps.length + 1, this.overlapsStreak)

      return {
        top: "".concat((this.segment || this.event).top, "px"),
        height: "".concat((this.segment || this.event).height, "px"),
        width: "".concat(100 / Math.min(this.overlaps.length + 1, this.overlapsStreak), "%"),
        left: "".concat(100 / (this.overlaps.length + 1) * this.eventPosition, "%") // width: `${width}%`,
        // left: `${width * this.eventPosition}%`

      };
    },
    // Don't rely on global variables otherwise whenever it would change all the events would be redrawn.
    eventClasses: function eventClasses() {
      var _ref2;

      var _ref = this.segment || {},
          isFirstDay = _ref.isFirstDay,
          isLastDay = _ref.isLastDay;

      return _ref2 = {}, _defineProperty(_ref2, this.event.classes.join(' '), true), _defineProperty(_ref2, 'vuecal__event--focus', this.event.focused), _defineProperty(_ref2, 'vuecal__event--resizing', this.event.resizing), _defineProperty(_ref2, 'vuecal__event--background', this.event.background), _defineProperty(_ref2, 'vuecal__event--deletable', this.event.deleting), _defineProperty(_ref2, 'vuecal__event--all-day', this.event.allDay), _defineProperty(_ref2, 'vuecal__event--multiple-days', !!this.segment), _defineProperty(_ref2, 'event-start', this.segment && isFirstDay && !isLastDay), _defineProperty(_ref2, 'event-middle', this.segment && !isFirstDay && !isLastDay), _defineProperty(_ref2, 'event-end', this.segment && isLastDay && !isFirstDay), _ref2;
    },
    // When multiple-day events, a segment is a portion of event spanning on 1 day.
    segment: function segment() {
      return this.event.segments && this.event.segments[this.cellFormattedDate] || null;
    },
    resizable: function resizable() {
      return this.vuecal.editableEvents && this.event.resizable && this.vuecal.time && this.event.endTimeMinutes && !this.allDay && (!this.segment || this.segment && this.segment.isLastDay) && this.vuecal.view.id !== 'month';
    },
    domEvents: {
      get: function get() {
        return this.vuecal.domEvents;
      },
      set: function set(object) {
        this.vuecal.domEvents = object;
      }
    }
  }
});
// CONCATENATED MODULE: ./src/components/vue-cal/event.vue?vue&type=script&lang=js&
 /* harmony default export */ var vue_cal_eventvue_type_script_lang_js_ = (eventvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/vue-cal/event.vue?vue&type=style&index=0&lang=scss&
var eventvue_type_style_index_0_lang_scss_ = __webpack_require__("9ff5");

// CONCATENATED MODULE: ./src/components/vue-cal/event.vue






/* normalize component */

var event_component = normalizeComponent(
  vue_cal_eventvue_type_script_lang_js_,
  eventvue_type_template_id_a1c8b120_lang_pug_render,
  eventvue_type_template_id_a1c8b120_lang_pug_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var vue_cal_event = (event_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vue-cal/cell.vue?vue&type=script&lang=js&














function cellvue_type_script_lang_js_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function cellvue_type_script_lang_js_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { cellvue_type_script_lang_js_ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { cellvue_type_script_lang_js_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var cellvue_type_script_lang_js_ = ({
  components: {
    Event: vue_cal_event
  },
  props: {
    // Vue-cal main component options (props).
    options: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    data: {
      type: Object,
      required: true
    },
    cellSplits: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    minTimestamp: {
      type: [Number, null],
      default: null
    },
    maxTimestamp: {
      type: [Number, null],
      default: null
    },
    cellWidth: {
      type: [Number, Boolean],
      default: false
    },
    allDay: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {
      cellOverlaps: {},
      cellOverlapsStreak: 1,
      // Largest amount of simultaneous events in cell.
      // On mouse down, save the time at cursor so it can be reused on cell focus event
      // where there is no cursor coords.
      timeAtCursor: null
    };
  },
  methods: {
    checkCellOverlappingEvents: function checkCellOverlappingEvents() {
      // If splits, checkCellOverlappingEvents() is called from within computed splits.
      if (this.options.time && this.events.length && !this.splits.length) {
        if (this.events.length === 1) {
          this.cellOverlaps = [];
          this.cellOverlapsStreak = 1;
        } // If only 1 event remains re-init the overlaps.
        else {
            var _checkCellOverlapping = event_utils_checkCellOverlappingEvents(this.events);

            var _checkCellOverlapping2 = _slicedToArray(_checkCellOverlapping, 2);

            this.cellOverlaps = _checkCellOverlapping2[0];
            this.cellOverlapsStreak = _checkCellOverlapping2[1];
          }
      }
    },
    isDOMElementAnEvent: function isDOMElementAnEvent(el) {
      return el.classList.contains('vuecal__event') || this.$parent.findAncestor(el, 'vuecal__event');
    },
    selectCell: function selectCell(DOMEvent) {
      var force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      if (!this.selected) this.onCellFocus(DOMEvent); // If splitting days, also return the clicked split on cell click when emitting event.

      var split;

      if (this.$parent.splitDays.length) {
        split = DOMEvent.target.classList.contains('vuecal__cell-split') && DOMEvent.target || this.$parent.findAncestor(DOMEvent.target, 'vuecal__cell-split');
        if (split) split = split.attributes['data-split'].value;
      }

      cell_utils_selectCell(force, this.$parent, this.timeAtCursor, split);

      this.timeAtCursor = null;
    },

    /**
     * On cell focus, from tab key or from click, emit the cell-focus event with
     * the date of the cell start when focusing from tab or the date & time at cursor
     * if click/touch.
     */
    onCellFocus: function onCellFocus(DOMEvent) {
      if (!this.selected) {
        this.selected = this.data.startDate; // If splitting days, also return the clicked split on cell click when emitting event.

        var split;

        if (this.$parent.splitDays.length) {
          split = DOMEvent.target.classList.contains('vuecal__cell-split') && DOMEvent.target || this.$parent.findAncestor(DOMEvent.target, 'vuecal__cell-split');
          if (split) split = split.attributes['data-split'].value;
        } // Cell-focus event returns the cell start date (at midnight) if triggered from tab key,
        // or cursor coords time if clicked.


        var date = this.timeAtCursor || this.data.startDate;
        this.$parent.$emit('cell-focus', split ? {
          date: date,
          split: split
        } : date);
      }
    },
    onCellMouseDown: function onCellMouseDown(DOMEvent) {
      var _this = this;

      var split = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var touch = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      // Prevent a double mouse down on touch devices.
      if ('ontouchstart' in window && !touch) return false;
      var _this$domEvents = this.domEvents,
          clickHoldACell = _this$domEvents.clickHoldACell,
          focusAnEvent = _this$domEvents.focusAnEvent; // Reinit the click trigger on each mousedown.
      // In some cases we explicitly set this flag to prevent the click event to trigger,
      // and cancel event creation.

      this.domEvents.cancelClickEventCreation = false;
      this.timeAtCursor = new Date(this.data.startDate);
      this.timeAtCursor.setMinutes(this.$parent.minutesAtCursor(DOMEvent).startTimeMinutes); // Unfocus an event if any is focused and clicking on cell outside of an event.

      if (!this.isDOMElementAnEvent(DOMEvent.target) && focusAnEvent._eid) {
        (this.$parent.view.events.find(function (e) {
          return e._eid === focusAnEvent._eid;
        }) || {}).focused = false;
      } // If the cellClickHold option is true and not mousedown on an event, click & hold to create an event.


      if (this.options.editableEvents && this.options.cellClickHold && ['month', 'week', 'day'].includes(this.view)) {
        clickHoldACell.cellId = "".concat(this.$parent._uid, "_").concat(this.data.formattedDate);
        clickHoldACell.split = split;
        clickHoldACell.timeoutId = setTimeout(function () {
          if (clickHoldACell.cellId && !_this.domEvents.cancelClickEventCreation) {
            _this.$parent.createEvent(_this.timeAtCursor, clickHoldACell.split ? {
              split: clickHoldACell.split
            } : {});
          }
        }, clickHoldACell.timeout);
      }
    },
    onCellTouchStart: function onCellTouchStart(DOMEvent) {
      var split = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      // If not mousedown on an event.
      this.onCellMouseDown(DOMEvent, split, true);
    },
    onCellDblClick: function onCellDblClick(DOMEvent) {
      var date = new Date(this.data.startDate);
      date.setMinutes(this.$parent.minutesAtCursor(DOMEvent).startTimeMinutes); // If splitting days, also return the clicked split on cell click when emitting event.

      var split;

      if (this.$parent.splitDays.length) {
        split = DOMEvent.target.classList.contains('vuecal__cell-split') && DOMEvent.target || this.$parent.findAncestor(DOMEvent.target, 'vuecal__cell-split');
        if (split) split = split.attributes['data-split'].value;
      }

      this.$parent.$emit('cell-dblclick', split ? {
        date: date,
        split: split
      } : date);
      if (this.options.dblclickToNavigate) this.$parent.switchToNarrowerView();
    }
  },
  computed: {
    isBeforeMinDate: function isBeforeMinDate() {
      return this.minTimestamp !== null && this.minTimestamp > this.data.endDate.getTime();
    },
    isAfterMaxDate: function isAfterMaxDate() {
      return this.maxTimestamp && this.maxTimestamp < this.data.startDate.getTime();
    },
    isDisabled: function isDisabled() {
      return this.isBeforeMinDate || this.isAfterMaxDate;
    },
    cssClasses: function cssClasses() {
      return {
        'vuecal__cell--has-splits': this.splits.length,
        'vuecal__cell--has-events': this.events.length,
        current: this.data.current,
        today: this.data.today,
        'out-of-scope': this.data.outOfScope,
        disabled: this.isDisabled,
        'before-min': this.isDisabled && this.isBeforeMinDate,
        'after-max': this.isDisabled && this.isAfterMaxDate,
        selected: this.selected
      };
    },
    selected: {
      get: function get() {
        var selected = false;
        var selectedDate = this.$parent.view.selectedDate;

        if (this.view === 'years') {
          selected = selectedDate.getFullYear() === this.data.startDate.getFullYear();
        } else if (this.view === 'year') {
          selected = selectedDate.getFullYear() === this.data.startDate.getFullYear() && selectedDate.getMonth() === this.data.startDate.getMonth();
        } else selected = selectedDate.getTime() === this.data.startDate.getTime();

        return selected;
      },
      set: function set(date) {
        this.$parent.view.selectedDate = date;
      }
    },
    domEvents: {
      get: function get() {
        return this.$parent.domEvents;
      },
      set: function set(object) {
        this.$parent.domEvents = object;
      }
    },
    texts: function texts() {
      return this.$parent.texts;
    },
    view: function view() {
      return this.$parent.view.id;
    },
    transitionDirection: function transitionDirection() {
      return this.$parent.transitionDirection;
    },
    cellStyles: function cellStyles() {
      return cellvue_type_script_lang_js_objectSpread({}, this.cellWidth ? {
        width: "".concat(this.cellWidth, "%")
      } : {}, {
        minWidth: this.view === 'week' && this.$parent.minCellWidth ? "".concat(this.$parent.minCellWidth, "px") : null
      });
    },
    events: function events() {
      var _this2 = this;

      var _this$data = this.data,
          cellStart = _this$data.startDate,
          cellEnd = _this$data.endDate;
      var events = []; // Calculate events on month/week/day views or years/year if eventsCountOnYearView.

      if (!(['years', 'year'].includes(this.view) && !this.options.eventsCountOnYearView)) {
        // Means that when $parent.view.events changes all the cells will be looking up new value. :/
        // Also clone array to prevent modifying original.
        events = this.$parent.view.events.slice(0);

        if (this.view === 'month') {
          var _events;

          (_events = events).push.apply(_events, _toConsumableArray(this.$parent.view.outOfScopeEvents));
        } // Only keep events in cell time range.


        events = events.filter(function (e) {
          return eventInRange(e, cellStart, cellEnd);
        });
        if (this.options.showAllDayEvents && this.view !== 'month') events = events.filter(function (e) {
          return !!e.allDay === _this2.allDay;
        }); // From events in view, filter the ones that are out of time range in this cell.

        if (this.options.time && ['week', 'day'].includes(this.view) && !this.allDay) {
          var _this$options = this.options,
              timeFrom = _this$options.timeFrom,
              timeTo = _this$options.timeTo;
          events = events.filter(function (e) {
            var segment = e.daysCount > 1 && e.segments[_this2.data.formattedDate] || {};
            return e.allDay || e.daysCount === 1 && e.startTimeMinutes < timeTo && e.endTimeMinutes > timeFrom || e.daysCount > 1 && segment.startTimeMinutes < timeTo && segment.endTimeMinutes > timeFrom;
          });
        } // Position events with time in the timeline when there is a timeline and not in allDay slot.


        if (this.options.time && ['week', 'day'].includes(this.view) && !(this.options.showAllDayEvents && this.allDay)) {
          events.forEach(function (event) {
            // all-day events are positionned via css: top-0 & bottom-0.
            // So they behave as background events if not in allDay slot.
            // @todo: Do we want this or not?
            var eventToUpdate = event.segments && event.segments[_this2.data.formattedDate] || event;
            if ((event.startTimeMinutes || event.endTimeMinutes) && !event.allDay) updateEventPosition(eventToUpdate, _this2.$parent);
          }); // Sort events in chronological order.

          events.sort(function (a, b) {
            return a.start < b.start ? -1 : 1;
          });
        } // If splits, checkCellOverlappingEvents() is called from within computed splits.


        if (!this.cellSplits.length) this.$nextTick(this.checkCellOverlappingEvents);
      }

      return events;
    },
    splits: function splits() {
      var _this3 = this;

      return this.cellSplits.map(function (item, i) {
        var events = _this3.events.filter(function (e) {
          return e.split === i + 1;
        });

        var _checkCellOverlapping3 = event_utils_checkCellOverlappingEvents(events.filter(function (e) {
          return !e.background && !e.allDay;
        })),
            _checkCellOverlapping4 = _slicedToArray(_checkCellOverlapping3, 2),
            overlaps = _checkCellOverlapping4[0],
            streak = _checkCellOverlapping4[1];

        return cellvue_type_script_lang_js_objectSpread({}, item, {
          overlaps: overlaps,
          overlapsStreak: streak,
          events: events
        });
      });
    },
    timelineVisible: function timelineVisible() {
      if (!this.data.today || !this.options.time || this.allDay || !['week', 'day'].includes(this.view)) return;
      var now = new Date();
      return now.getHours() * 60 + now.getMinutes() <= this.options.timeTo;
    },
    todaysTimePosition: function todaysTimePosition() {
      // Skip the Maths if not relevant.
      if (!this.data.today || !this.options.time) return;
      var now = new Date();
      var startTimeMinutes = now.getHours() * 60 + now.getMinutes();
      var minutesFromTop = startTimeMinutes - this.options.timeFrom;
      return Math.round(minutesFromTop * this.options.timeCellHeight / this.options.timeStep);
    }
  }
});
// CONCATENATED MODULE: ./src/components/vue-cal/cell.vue?vue&type=script&lang=js&
 /* harmony default export */ var vue_cal_cellvue_type_script_lang_js_ = (cellvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/vue-cal/cell.vue?vue&type=style&index=0&lang=scss&
var cellvue_type_style_index_0_lang_scss_ = __webpack_require__("d011");

// CONCATENATED MODULE: ./src/components/vue-cal/cell.vue






/* normalize component */

var cell_component = normalizeComponent(
  vue_cal_cellvue_type_script_lang_js_,
  cellvue_type_template_id_4a2a1690_lang_pug_render,
  cellvue_type_template_id_4a2a1690_lang_pug_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var vue_cal_cell = (cell_component.exports);
// EXTERNAL MODULE: ./src/components/vue-cal/styles.scss
var styles = __webpack_require__("00aa");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vue-cal/index.vue?vue&type=script&lang=js&


















function vue_calvue_type_script_lang_js_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function vue_calvue_type_script_lang_js_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { vue_calvue_type_script_lang_js_ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { vue_calvue_type_script_lang_js_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ var vue_calvue_type_script_lang_js_ = ({
  name: 'vue-cal',
  components: {
    'vuecal-cell': vue_cal_cell,
    'vuecal-header': header,
    WeekdaysHeadings: weekdays_headings
  },
  props: {
    locale: {
      type: String,
      default: 'en'
    },
    hideViewSelector: {
      type: Boolean,
      default: false
    },
    hideTitleBar: {
      type: Boolean,
      default: false
    },
    hideBody: {
      type: Boolean,
      default: false
    },
    hideWeekends: {
      type: Boolean,
      default: false
    },
    hideWeekdays: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    disableViews: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    defaultView: {
      type: String,
      default: 'week'
    },
    todayButton: {
      type: Boolean,
      default: false
    },
    showAllDayEvents: {
      type: [Boolean, String],
      default: false
    },
    selectedDate: {
      type: [String, Date],
      default: ''
    },
    minDate: {
      type: [String, Date],
      default: ''
    },
    maxDate: {
      type: [String, Date],
      default: ''
    },
    startWeekOnSunday: {
      type: Boolean,
      default: false
    },
    small: {
      type: Boolean,
      default: false
    },
    xsmall: {
      type: Boolean,
      default: false
    },
    clickToNavigate: {
      type: Boolean,
      default: false
    },
    dblclickToNavigate: {
      type: Boolean,
      default: true
    },
    cellClickHold: {
      type: Boolean,
      default: true
    },
    time: {
      type: Boolean,
      default: true
    },
    timeFrom: {
      type: Number,
      default: 0
    },
    // In minutes.
    timeTo: {
      type: Number,
      default: 24 * 60
    },
    // In minutes.
    timeStep: {
      type: Number,
      default: 60
    },
    // In minutes.
    timeCellHeight: {
      type: Number,
      default: 40
    },
    // In pixels.
    twelveHour: {
      type: Boolean,
      default: false
    },
    timeFormat: {
      type: String,
      default: ''
    },
    minCellWidth: {
      type: Number,
      default: 0
    },
    splitDays: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    stickySplitLabels: {
      type: Boolean,
      default: false
    },
    events: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    editableEvents: {
      type: Boolean,
      default: false
    },
    resizeX: {
      type: Boolean,
      default: false
    },
    eventsOnMonthView: {
      type: [Boolean, String],
      default: false
    },
    eventsCountOnYearView: {
      type: Boolean,
      default: false
    },
    onEventClick: {
      type: [Function, null],
      default: null
    },
    onEventDblclick: {
      type: [Function, null],
      default: null
    },
    onEventCreate: {
      type: [Function, null],
      default: null
    },
    transitions: {
      type: Boolean,
      default: true
    }
  },
  data: function data() {
    return {
      texts: {
        weekDays: Array(7).fill(''),
        weekDaysShort: [],
        months: Array(12).fill(''),
        years: '',
        year: '',
        month: '',
        week: '',
        day: '',
        today: '',
        noEvent: '',
        allDay: '',
        deleteEvent: '',
        createEvent: '',
        dateFormat: 'DDDD mmmm d, yyyy'
      },
      ready: false,
      view: {
        id: '',
        title: '',
        startDate: null,
        endDate: null,
        selectedDate: null,
        events: []
      },
      eventIdIncrement: 1,
      domEvents: {
        resizeAnEvent: {
          _eid: null,
          // Only one at a time.
          start: null,
          split: null,
          segment: null,
          originalEndTimeMinutes: 0,
          endTimeMinutes: 0,
          startCell: null,
          endCell: null
        },
        dragAnEvent: {
          _eid: null // Only one at a time.

        },
        focusAnEvent: {
          _eid: null // Only one at a time.

        },
        clickHoldAnEvent: {
          _eid: null,
          // Only one at a time.
          timeout: 1200,
          // Hold for 1.2s to delete an event.
          timeoutId: null
        },
        dblTapACell: {
          taps: 0,
          timeout: 500 // Allowed latency between first and second click.

        },
        clickHoldACell: {
          cellId: null,
          split: null,
          timeout: 1200,
          // Hold for 1.2s to create an event.
          timeoutId: null
        },
        // A single click can trigger event creation if the user decides so.
        // But prevent this to happen on click & hold, on event click and on resize event.
        cancelClickEventCreation: false
      },
      mutableEvents: [],
      // An array of mutable events updated each time given events array changes.
      transitionDirection: 'right'
    };
  },
  methods: {
    loadLocale: function loadLocale(locale) {
      var _this = this;

      if (this.locale === 'en') this.texts = __webpack_require__("7213");else {
        __webpack_require__("1790")("./".concat(locale)).then(function (response) {
          return _this.texts = response.default;
        });
      }
    },
    switchToNarrowerView: function switchToNarrowerView() {
      var _this2 = this;

      this.transitionDirection = 'right';
      var views = Object.keys(this.views);
      views = views.slice(views.indexOf(this.view.id) + 1);
      var view = views.find(function (v) {
        return _this2.views[v].enabled;
      });
      if (view) this.switchView(view);
    },
    switchView: function switchView(view) {
      var date = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var fromViewSelector = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      if (this.transitions && fromViewSelector) {
        var views = Object.keys(this.views);
        this.transitionDirection = views.indexOf(this.view.id) > views.indexOf(view) ? 'left' : 'right';
      }

      this.view.events = [];
      this.view.id = view;
      this.view.firstCellDate = null; // For month view, if filling cells before 1st of month.

      this.view.lastCellDate = null; // For month view, if filling cells after current month.

      if (!date) {
        date = this.view.selectedDate || this.view.startDate;
        if (view === 'week') date = getPreviousFirstDayOfWeek(date, this.startWeekOnSunday);
      }

      switch (view) {
        case 'years':
          // Always fill first cell with a multiple of 25 years, E.g. year 2000, or 2025.
          this.view.startDate = new Date(Math.floor(date.getFullYear() / 25) * 25 || 2000, 0, 1);
          this.view.endDate = new Date(this.view.startDate.getFullYear() + 25, 0, 1);
          this.view.endDate.setSeconds(-1); // End at 23:59:59.

          break;

        case 'year':
          this.view.startDate = new Date(date.getFullYear(), 0, 1);
          this.view.endDate = new Date(date.getFullYear() + 1, 0, 1);
          this.view.endDate.setSeconds(-1); // End at 23:59:59.

          break;

        case 'month':
          this.view.startDate = new Date(date.getFullYear(), date.getMonth(), 1);
          this.view.endDate = new Date(date.getFullYear(), date.getMonth() + 1, 1);
          this.view.endDate.setSeconds(-1); // End at 23:59:59.
          // If the first day of the month is not a FirstDayOfWeek (Monday or Sunday), prepend missing days to the days array.

          var startDate = new Date(this.view.startDate);

          if (startDate.getDay() !== (this.startWeekOnSunday ? 0 : 1)) {
            startDate = getPreviousFirstDayOfWeek(startDate, this.startWeekOnSunday);
          } // Used in viewCells computed array & returned in emitted events.


          this.view.firstCellDate = startDate;
          this.view.lastCellDate = startDate.addDays(41);
          this.view.lastCellDate.setHours(23, 59, 59);

          if (this.hideWeekends) {
            // Remove first weekend from firstCellDate if hide-weekends.
            if ([0, 6].includes(this.view.firstCellDate.getDay())) {
              var daysToAdd = this.view.firstCellDate.getDay() === 6 && !this.startWeekOnSunday ? 2 : 1;
              this.view.firstCellDate = this.view.firstCellDate.addDays(daysToAdd);
            } // Remove first weekend from startDate if hide-weekends.


            if ([0, 6].includes(this.view.startDate.getDay())) {
              var _daysToAdd = this.view.startDate.getDay() === 6 ? 2 : 1;

              this.view.startDate = this.view.startDate.addDays(_daysToAdd);
            } // Remove last weekend from lastCellDate if hide-weekends.


            if ([0, 6].includes(this.view.lastCellDate.getDay())) {
              var daysToSubtract = this.view.lastCellDate.getDay() === 0 && !this.startWeekOnSunday ? 2 : 1;
              this.view.lastCellDate = this.view.lastCellDate.subtractDays(daysToSubtract);
            } // Remove last weekend from endDate if hide-weekends.


            if ([0, 6].includes(this.view.endDate.getDay())) {
              var _daysToSubtract = this.view.endDate.getDay() === 0 ? 2 : 1;

              this.view.endDate = this.view.endDate.subtractDays(_daysToSubtract);
            }
          }

          break;

        case 'week':
          var weekDaysCount = this.hideWeekends ? 5 : 7;
          this.view.startDate = this.hideWeekends && this.startWeekOnSunday ? date.addDays(1) : date;
          this.view.startDate.setHours(0, 0, 0);
          this.view.endDate = date.addDays(weekDaysCount);
          this.view.endDate.setSeconds(-1); // End at 23:59:59.

          break;

        case 'day':
          this.view.startDate = date;
          this.view.startDate.setHours(0, 0, 0);
          this.view.endDate = new Date(date);
          this.view.endDate.setHours(23, 59, 59); // End at 23:59:59.

          break;
      }

      this.addEventsToView();

      if (this.ready) {
        var params = vue_calvue_type_script_lang_js_objectSpread({
          view: view,
          startDate: this.view.startDate,
          endDate: this.view.endDate
        }, this.view.id === 'month' ? {
          firstCellDate: this.view.firstCellDate,
          lastCellDate: this.view.lastCellDate,
          outOfScopeEvents: this.view.outOfScopeEvents.map(this.cleanupEvent)
        } : {}, {
          events: this.view.events.map(this.cleanupEvent)
        }, this.view.id === 'week' ? {
          week: this.view.startDate.getWeek()
        } : {});

        this.$emit('view-change', params);
      }
    },
    previous: function previous() {
      this.previousNext(false);
    },
    next: function next() {
      this.previousNext();
    },
    // On click on previous or next arrow, update the calendar visible date range.
    previousNext: function previousNext() {
      var next = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      this.transitionDirection = next ? 'right' : 'left';
      var modifier = next ? 1 : -1;
      var firstCellDate = null;
      var _this$view = this.view,
          startDate = _this$view.startDate,
          viewId = _this$view.id;

      switch (viewId) {
        case 'years':
          firstCellDate = new Date(startDate.getFullYear() + 25 * modifier, 0, 1);
          break;

        case 'year':
          firstCellDate = new Date(startDate.getFullYear() + 1 * modifier, 1, 1);
          break;

        case 'month':
          firstCellDate = new Date(startDate.getFullYear(), startDate.getMonth() + 1 * modifier, 1);
          break;

        case 'week':
          firstCellDate = getPreviousFirstDayOfWeek(startDate, this.startWeekOnSunday)[next ? 'addDays' : 'subtractDays'](7);
          break;

        case 'day':
          firstCellDate = startDate[next ? 'addDays' : 'subtractDays'](1);
          break;
      }

      if (firstCellDate) this.switchView(viewId, firstCellDate);
    },
    addEventsToView: function addEventsToView() {
      var _this3 = this;

      var events = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var _this$view2 = this.view,
          id = _this$view2.id,
          startDate = _this$view2.startDate,
          endDate = _this$view2.endDate,
          firstCellDate = _this$view2.firstCellDate,
          lastCellDate = _this$view2.lastCellDate;
      if (!events.length) this.view.events = [];
      events = events.length ? events : this.mutableEvents;

      if (['month', 'week', 'day'].includes(id) && events) {
        var _this$view$events;

        (_this$view$events = this.view.events).push.apply(_this$view$events, _toConsumableArray(events.filter(function (e) {
          return eventInRange(e, startDate, endDate);
        }).map(function (e) {
          // If multiple-day events.
          return e.start.substr(0, 10) === e.end.substr(0, 10) ? e : event_utils_createEventSegments(e, startDate, endDate, _this3);
        })));

        if (id === 'month') {
          // Save out of scope events into the view object separated from the array of in-scope events.
          this.view.outOfScopeEvents = [];
          events.forEach(function (e) {
            if (eventInRange(e, firstCellDate, startDate) || eventInRange(e, endDate, lastCellDate)) {
              // Only add to the view events array if not already there (multiple-day events case).
              if (!_this3.view.events.some(function (e2) {
                return e2._eid === e._eid;
              })) _this3.view.outOfScopeEvents.push(e); // if (!this.view.events.some(e2 => e2._eid === e._eid)) this.view.events.push(e)
            }
          });
        }
      } else if (['years', 'year'].includes(id) && events && this.eventsCountOnYearView) {
        var _this$view$events2;

        (_this$view$events2 = this.view.events).push.apply(_this$view$events2, _toConsumableArray(events.filter(function (e) {
          return eventInRange(e, startDate, endDate);
        })));
      }
    },
    getEventTitle: function getEventTitle(event) {
      var title = event.title;

      if (this.isShortMonthView && !event.allDay) {
        if (this.eventsOnMonthView === 'medium') {
          title = date_utils_formatTime(event.startTimeMinutes, this.timeFormat || (this.twelveHour ? 'h:mm{am}' : 'HH:mm')) + ' ' + title;
        } else if (this.eventsOnMonthView === 'long') {
          title = date_utils_formatTime(event.startTimeMinutes, this.timeFormat || (this.twelveHour ? 'h:mm{am}' : 'HH:mm')) + ' - ' + date_utils_formatTime(event.endTimeMinutes, this.timeFormat || (this.twelveHour ? 'h:mm{am}' : 'HH:mm')) + ' ' + title;
        }
      }

      return title;
    },
    findAncestor: function findAncestor(el, Class) {
      while ((el = el.parentElement) && !el.classList.contains(Class)) {}

      return el;
    },
    isDOMElementAnEvent: function isDOMElementAnEvent(el) {
      return el.classList.contains('vuecal__event') || this.findAncestor(el, 'vuecal__event');
    },
    // Event resizing is started in cell component (onMouseDown) but place onMouseMove & onMouseUp
    // handlers in the single parent for performance.
    onMouseMove: function onMouseMove(e) {
      var resizeAnEvent = this.domEvents.resizeAnEvent;
      if (resizeAnEvent._eid === null) return;
      e.preventDefault();
      var event = this.view.events.find(function (e) {
        return e._eid === resizeAnEvent._eid;
      }) || {
        segments: {}
      };
      var segment = event.segments && event.segments[resizeAnEvent.segment];

      var _this$minutesAtCursor = this.minutesAtCursor(e),
          startTimeMinutes = _this$minutesAtCursor.startTimeMinutes,
          cursorCoords = _this$minutesAtCursor.cursorCoords; // Don't allow time above 24 hours.


      resizeAnEvent.endTimeMinutes = Math.min(startTimeMinutes, 24 * 60);
      if (segment) segment.endTimeMinutes = resizeAnEvent.endTimeMinutes;
      event.endTimeMinutes = resizeAnEvent.endTimeMinutes;
      event.end = event.end.substr(0, 11) + date_utils_formatTime(event.endTimeMinutes);
      event.endDate = new Date(event.end.replace(/-/g, '/')); // replace '-' with '/' for Safari.

      event.daysCount = countDays(event.startDate, event.endDate); // Resize events horizontally if resize-x is enabled (add/remove segments).

      if (this.resizeX && this.view.id === 'week') {
        var cells = this.$refs.cells;
        var cellWidth = cells.offsetWidth / cells.childElementCount;
        var endCell = Math.floor(cursorCoords.x / cellWidth);

        if (!resizeAnEvent.startCell) {
          resizeAnEvent.startCell = endCell - (event.daysCount - 1);
        }

        if (resizeAnEvent.endCell !== endCell) {
          resizeAnEvent.endCell = endCell;
          var endDate = event.startDate.addDays(endCell - resizeAnEvent.startCell);
          var newDaysCount = countDays(event.startDate, endDate);

          if (newDaysCount !== event.daysCount) {
            // Check that all segments are up to date.
            var lastSegmentFormattedDate = null;
            if (newDaysCount > event.daysCount) lastSegmentFormattedDate = event_utils_addEventSegment(event, this);else lastSegmentFormattedDate = event_utils_removeEventSegment(event, this);
            resizeAnEvent.segment = lastSegmentFormattedDate;
            event.endTimeMinutes += 0.001; // Force updating the current event.
          }
        }
      }
    },
    // Mouseup can never cancel a click with preventDefault or stopPropagation,
    // But it always happens before the click event.
    onMouseUp: function onMouseUp(e) {
      var _this$domEvents = this.domEvents,
          resizeAnEvent = _this$domEvents.resizeAnEvent,
          clickHoldAnEvent = _this$domEvents.clickHoldAnEvent,
          clickHoldACell = _this$domEvents.clickHoldACell; // On event resize end, emit event if duration has changed.

      if (resizeAnEvent._eid) {
        this.domEvents.cancelClickEventCreation = true;
        var event = this.view.events.find(function (e) {
          return e._eid === resizeAnEvent._eid;
        });

        if (event && event.endTimeMinutes !== resizeAnEvent.originalEndTimeMinutes) {
          // Store modified event back in mutable events.
          var mutableEvent = this.mutableEvents.find(function (e) {
            return e._eid === resizeAnEvent._eid;
          });
          mutableEvent.endTimeMinutes = event.endTimeMinutes;
          mutableEvent.end = event.end;
          mutableEvent.endDate = event.endDate;
          this.emitWithEvent('event-change', event);
          this.emitWithEvent('event-duration-change', event);
        }

        if (event) event.resizing = false;
        resizeAnEvent._eid = null;
        resizeAnEvent.start = null;
        resizeAnEvent.split = null;
        resizeAnEvent.segment = null;
        resizeAnEvent.originalEndTimeMinutes = null;
        resizeAnEvent.endTimeMinutes = null;
        resizeAnEvent.startCell = null;
        resizeAnEvent.endCell = null;
      }

      if (this.isDOMElementAnEvent(e.target)) this.domEvents.cancelClickEventCreation = true; // If not mouse up on an event, unfocus any event except if just dragged.
      else if (!resizeAnEvent._eid) this.unfocusEvent(); // Prevent showing delete button if click and hold was not long enough.
      // Click & hold timeout is initiated in onMouseDown() in event component.

      if (clickHoldAnEvent.timeoutId && !clickHoldAnEvent._eid) {
        clearTimeout(clickHoldAnEvent.timeoutId);
        clickHoldAnEvent.timeoutId = null;
      } // Prevent creating an event if click and hold was not long enough.


      if (clickHoldACell.timeoutId) {
        clearTimeout(clickHoldACell.timeoutId);
        clickHoldACell.timeoutId = null;
      }
    },
    onKeyUp: function onKeyUp(e) {
      // Escape key.
      if (e.keyCode === 27) {
        this.cancelDelete();
      }
    },
    unfocusEvent: function unfocusEvent() {
      var _this$domEvents2 = this.domEvents,
          focusAnEvent = _this$domEvents2.focusAnEvent,
          clickHoldAnEvent = _this$domEvents2.clickHoldAnEvent;
      var event = this.view.events.find(function (e) {
        return e._eid === (focusAnEvent._eid || clickHoldAnEvent._eid);
      });
      focusAnEvent._eid = null; // Cancel event focus.

      clickHoldAnEvent._eid = null; // Hide delete button.

      if (event) {
        event.focused = false;
        event.deleting = false;
      }
    },
    // Cancel an event deletion.
    cancelDelete: function cancelDelete() {
      var clickHoldAnEvent = this.domEvents.clickHoldAnEvent;

      if (clickHoldAnEvent._eid) {
        var event = this.view.events.find(function (e) {
          return e._eid === clickHoldAnEvent._eid;
        });
        if (event) event.deleting = false;
        clickHoldAnEvent._eid = null;
        clickHoldAnEvent.timeoutId = null;
      }
    },
    onEventTitleBlur: function onEventTitleBlur(e, event) {
      // If no change cancel action.
      if (event.title === e.target.innerHTML) return;
      event.title = e.target.innerHTML;
      this.emitWithEvent('event-change', event);
      this.emitWithEvent('event-title-change', event);
    },
    // Object of arrays of events.
    // mutableEvents can't be a computed value based on this.events, because we add
    // items to the array. (Cannot mutate props)
    updateMutableEvents: function updateMutableEvents() {
      var _this4 = this;

      this.mutableEvents = []; // Group events into dates.

      this.events.forEach(function (event, i) {
        // Event Start, accepts formatted string - startDate accepts Date object.
        var start, startDate, startDateF, startTime, hoursStart, minutesStart;

        if (event.start) {
          var _event$start$split, _event$start$split2, _event$start$split2$, _startTime$split, _startTime$split2;

          // eslint-disable-next-line
          !(_event$start$split = event.start.split(' '), _event$start$split2 = _slicedToArray(_event$start$split, 2), startDateF = _event$start$split2[0], _event$start$split2$ = _event$start$split2[1], startTime = _event$start$split2$ === void 0 ? '' : _event$start$split2$, _event$start$split); // eslint-disable-next-line

          !(_startTime$split = startTime.split(':'), _startTime$split2 = _slicedToArray(_startTime$split, 2), hoursStart = _startTime$split2[0], minutesStart = _startTime$split2[1], _startTime$split);
          startDate = new Date(event.start.replace(/-/g, '/')); // replace '-' with '/' for Safari.
        } else if (event.startDate && event.startDate instanceof Date) {
          startDateF = _this4.formatDate(event.startDate);
          hoursStart = event.startDate.getHours();
          minutesStart = event.startDate.getMinutes();
          startDate = event.startDate;
        }

        var startTimeMinutes = parseInt(hoursStart) * 60 + parseInt(minutesStart);
        start = event.start || startDateF + ' ' + date_utils_formatTime(startTimeMinutes); // Event End, accepts formatted string - endDate accepts Date object.

        var end, endDate, endDateF, endTime, hoursEnd, minutesEnd;

        if (event.end) {
          var _event$end$split, _event$end$split2, _event$end$split2$, _endTime$split, _endTime$split2;

          // eslint-disable-next-line
          !(_event$end$split = event.end.split(' '), _event$end$split2 = _slicedToArray(_event$end$split, 2), endDateF = _event$end$split2[0], _event$end$split2$ = _event$end$split2[1], endTime = _event$end$split2$ === void 0 ? '' : _event$end$split2$, _event$end$split); // eslint-disable-next-line

          !(_endTime$split = endTime.split(':'), _endTime$split2 = _slicedToArray(_endTime$split, 2), hoursEnd = _endTime$split2[0], minutesEnd = _endTime$split2[1], _endTime$split);
          endDate = new Date(event.end.replace(/-/g, '/')); // replace '-' with '/' for Safari.
        } else if (event.endDate && event.endDate instanceof Date) {
          endDateF = _this4.formatDate(event.endDate);
          hoursEnd = event.endDate.getHours();
          minutesEnd = event.endDate.getMinutes();
          endDate = event.endDate;
        } // Correct the common practice to end at 00:00 or 24:00 to count a full day.


        if (['00:00', '24:00'].includes(endTime)) {
          endDate.setSeconds(-1); // End at 23:59:59.

          endDateF = _this4.formatDate(endDate);
        }

        var endTimeMinutes = parseInt(hoursEnd) * 60 + parseInt(minutesEnd);
        end = event.end || endDateF + ' ' + date_utils_formatTime(endTimeMinutes);
        var multipleDays = startDateF !== endDateF;
        event = Object.assign(vue_calvue_type_script_lang_js_objectSpread({}, eventDefaults, {
          // Keep the event ids scoped to this calendar instance.
          _eid: "".concat(_this4._uid, "_").concat(_this4.eventIdIncrement++),
          segments: multipleDays ? {} : null,
          start: start,
          startDate: startDate,
          startTimeMinutes: startTimeMinutes,
          end: end,
          endDate: endDate,
          endTimeMinutes: endTimeMinutes,
          daysCount: multipleDays ? countDays(startDate, endDate) : 1,
          classes: (event.class || '').split(' ')
        }), event);

        _this4.mutableEvents.push(event);
      });
    },
    getPosition: function getPosition(e) {
      // @todo: Cache bounding box & update it on resize.
      var rect = this.$refs.cells.getBoundingClientRect();

      var _ref = 'ontouchstart' in window && e.touches ? e.touches[0] : e,
          clientX = _ref.clientX,
          clientY = _ref.clientY;

      return {
        x: clientX - rect.left,
        y: clientY - rect.top
      };
    },
    minutesAtCursor: function minutesAtCursor(e) {
      var startTimeMinutes = 0;
      var cursorCoords = {};
      if (typeof e === 'number') startTimeMinutes = e;else if (typeof_typeof(e) === 'object') {
        cursorCoords = this.getPosition(e);
        startTimeMinutes = Math.round(cursorCoords.y * this.timeStep / parseInt(this.timeCellHeight) + this.timeFrom);
      }
      return {
        startTimeMinutes: startTimeMinutes,
        cursorCoords: cursorCoords
      };
    },
    // Allow call from cell click & hold or external call via $refs.
    createEvent: function createEvent(dateTime) {
      var eventOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return event_utils_createAnEvent(dateTime, eventOptions, this);
    },
    // Prepare the event to return it with an emitted event.
    cleanupEvent: function cleanupEvent(event) {
      event = vue_calvue_type_script_lang_js_objectSpread({}, event); // Delete vue-cal specific props instead of returning a set of props so user
      // can place whatever they want inside an event and see it returned.

      var discardProps = ['height', 'top', 'classes', 'split', 'segments', 'deletable', 'deleting', 'resizable', 'resizing', 'focused'];
      discardProps.forEach(function (prop) {
        if (prop in event) delete event[prop];
      });
      return event;
    },
    emitWithEvent: function emitWithEvent(eventName, event) {
      this.$emit(eventName, this.cleanupEvent(event));
    },
    updateSelectedDate: function updateSelectedDate(date) {
      if (date && typeof date === 'string') date = date_utils_stringToDate(date);

      if (date && date instanceof Date) {
        var selectedDate = this.view.selectedDate;
        if (selectedDate) this.transitionDirection = selectedDate.getTime() > date.getTime() ? 'left' : 'right'; // Select the day at midnight in order to allow fetching events on whole day.

        date.setHours(0, 0, 0);
        if (!selectedDate || selectedDate.getTime() !== date.getTime()) this.view.selectedDate = date;
        this.switchView(this.view.id);
      }
    },
    countDays: countDays,
    // Shorthand function.
    formatDate: function formatDate(date) {
      var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'yyyy-mm-dd';
      return date_utils_formatDate(date, format, this.texts);
    }
  },
  created: function created() {
    this.loadLocale(this.locale); // Init the array of events, then keep listening for changes in watcher.

    this.updateMutableEvents(this.events);
    this.view.id = this.defaultView;
    if (this.selectedDate) this.updateSelectedDate(this.selectedDate);else {
      this.view.selectedDate = new Date();
      this.switchView(this.defaultView);
    }
  },
  mounted: function mounted() {
    var hasTouch = 'ontouchstart' in window;

    if (this.editableEvents) {
      window.addEventListener(hasTouch ? 'touchmove' : 'mousemove', this.onMouseMove, {
        passive: false
      });
      window.addEventListener(hasTouch ? 'touchend' : 'mouseup', this.onMouseUp);
      window.addEventListener('keyup', this.onKeyUp);
    } // Disable context menu on touch devices on the whole vue-cal instance.


    if (hasTouch) {
      this.$refs.vuecal.oncontextmenu = function (e) {
        e.preventDefault();
        e.stopPropagation();
      };
    }

    var params = vue_calvue_type_script_lang_js_objectSpread({
      view: this.view.id,
      startDate: this.view.startDate,
      endDate: this.view.endDate
    }, this.view.id === 'month' ? {
      firstCellDate: this.view.firstCellDate,
      lastCellDate: this.view.lastCellDate
    } : {}, {
      events: this.view.events.map(this.cleanupEvent)
    }, this.view.id === 'week' ? {
      week: this.view.startDate.getWeek()
    } : {});

    this.$emit('ready', params);
    this.ready = true;
  },
  beforeDestroy: function beforeDestroy() {
    var hasTouch = 'ontouchstart' in window;
    window.removeEventListener(hasTouch ? 'touchmove' : 'mousemove', this.onMouseMove, {
      passive: false
    });
    window.removeEventListener(hasTouch ? 'touchend' : 'mouseup', this.onMouseUp);
    window.removeEventListener('keyup', this.onKeyUp);
  },
  computed: {
    views: function views() {
      return {
        years: {
          label: this.texts.years,
          enabled: !this.disableViews.includes('years')
        },
        year: {
          label: this.texts.year,
          enabled: !this.disableViews.includes('year')
        },
        month: {
          label: this.texts.month,
          enabled: !this.disableViews.includes('month')
        },
        week: {
          label: this.texts.week,
          enabled: !this.disableViews.includes('week')
        },
        day: {
          label: this.texts.day,
          enabled: !this.disableViews.includes('day')
        }
      };
    },
    hasTimeColumn: function hasTimeColumn() {
      return this.time && ['week', 'day'].includes(this.view.id);
    },
    isShortMonthView: function isShortMonthView() {
      return this.view.id === 'month' && ['short', 'medium', 'long'].indexOf(this.eventsOnMonthView) !== -1;
    },
    // For week & day views.
    timeCells: function timeCells() {
      var timeCells = [];

      for (var i = this.timeFrom, max = this.timeTo; i < max; i += this.timeStep) {
        timeCells.push({
          hours: Math.floor(i / 60),
          minutes: i % 60,
          label: date_utils_formatTime(i, this.timeFormat || (this.twelveHour ? 'h:mm{am}' : 'HH:mm')),
          value: i
        });
      }

      return timeCells;
    },
    // Whether the current view has days splits.
    hasSplits: function hasSplits() {
      return !!this.splitDays.length && ['week', 'day'].includes(this.view.id);
    },
    minTimestamp: function minTimestamp() {
      var date = null;
      if (this.minDate && typeof this.minDate === 'string') date = date_utils_stringToDate(this.minDate);else if (this.minDate && this.minDate instanceof Date) date = this.minDate;
      return date ? date.getTime() : null;
    },
    maxTimestamp: function maxTimestamp() {
      var date = null;
      if (this.maxDate && typeof this.maxDate === 'string') date = date_utils_stringToDate(this.maxDate);else if (this.maxDate && this.minDate instanceof Date) date = this.maxDate;
      return date ? date.getTime() : null;
    },
    weekDays: function weekDays() {
      var _this5 = this;

      var _this$texts = this.texts,
          weekDays = _this$texts.weekDays,
          _this$texts$weekDaysS = _this$texts.weekDaysShort,
          weekDaysShort = _this$texts$weekDaysS === void 0 ? [] : _this$texts$weekDaysS; // Do not modify original for next instances.

      weekDays = weekDays.slice(0).map(function (day, i) {
        return vue_calvue_type_script_lang_js_objectSpread({
          label: day
        }, weekDaysShort.length ? {
          short: weekDaysShort[i]
        } : {}, {
          hide: _this5.hideWeekends && i >= 5 || _this5.hideWeekdays.length && _this5.hideWeekdays.includes(i + 1)
        });
      });
      if (this.startWeekOnSunday) weekDays.unshift(weekDays.pop());
      return weekDays;
    },
    weekDaysInHeader: function weekDaysInHeader() {
      return this.view.id === 'month' || this.view.id === 'week' && !this.minCellWidth;
    },
    months: function months() {
      return this.texts.months.map(function (month) {
        return {
          label: month
        };
      });
    },
    viewTitle: function viewTitle() {
      var title = '';
      var date = this.view.startDate;
      var year = date.getFullYear();
      var month = date.getMonth();

      switch (this.view.id) {
        case 'years':
          title = this.texts.years;
          break;

        case 'year':
          title = year;
          break;

        case 'month':
          title = "".concat(this.months[month].label, " ").concat(year);
          break;

        case 'week':
          var lastDayOfWeek = date.addDays(6);
          var formattedMonthYear = this.formatDate(date, this.xsmall ? 'mmm yyyy' : 'mmmm yyyy'); // If week is not ending in the same month it started in.

          if (lastDayOfWeek.getMonth() !== date.getMonth()) {
            var _formattedMonthYear$s = formattedMonthYear.split(' '),
                _formattedMonthYear$s2 = _slicedToArray(_formattedMonthYear$s, 2),
                m1 = _formattedMonthYear$s2[0],
                y1 = _formattedMonthYear$s2[1];

            var _this$formatDate$spli = this.formatDate(lastDayOfWeek, this.xsmall ? 'mmm yyyy' : 'mmmm yyyy').split(' '),
                _this$formatDate$spli2 = _slicedToArray(_this$formatDate$spli, 2),
                m2 = _this$formatDate$spli2[0],
                y2 = _this$formatDate$spli2[1];

            formattedMonthYear = y1 === y2 ? "".concat(m1, " - ").concat(m2, " ").concat(y1) : "".concat(m1, " ").concat(y1, " - ").concat(m2, " ").concat(y2);
          }

          title = "".concat(this.texts.week, " ").concat(date.getWeek(), " (").concat(formattedMonthYear, ")");
          break;

        case 'day':
          title = this.formatDate(date, this.texts.dateFormat);
          break;
      }

      return title;
    },
    viewCells: function viewCells() {
      var _this6 = this;

      var cells = [];
      var fromYear = null;
      var todayFound = false; // Don't cache now date, so on next day Today's selected cell will still be accurate.

      var now = new Date();

      switch (this.view.id) {
        case 'years':
          fromYear = this.view.startDate.getFullYear();
          cells = Array.apply(null, Array(25)).map(function (cell, i) {
            var startDate = new Date(fromYear + i, 0, 1);
            var endDate = new Date(fromYear + i + 1, 0, 1);
            endDate.setSeconds(-1); // End at 23:59:59.

            return {
              startDate: startDate,
              formattedDate: _this6.formatDate(startDate),
              endDate: endDate,
              content: fromYear + i,
              current: fromYear + i === now.getFullYear()
            };
          });
          break;

        case 'year':
          fromYear = this.view.startDate.getFullYear();
          cells = Array.apply(null, Array(12)).map(function (cell, i) {
            var startDate = new Date(fromYear, i, 1);
            var endDate = new Date(fromYear, i + 1, 1);
            endDate.setSeconds(-1); // End at 23:59:59.

            return {
              startDate: startDate,
              formattedDate: _this6.formatDate(startDate),
              endDate: endDate,
              content: _this6.xsmall ? _this6.months[i].label.substr(0, 3) : _this6.months[i].label,
              current: i === now.getMonth() && fromYear === now.getFullYear()
            };
          });
          break;

        case 'month':
          var month = this.view.startDate.getMonth();
          var firstCellDate = new Date(this.view.firstCellDate);
          todayFound = false; // Create 42 cells (6 rows x 7 days) and populate them with days.

          cells = Array.apply(null, Array(42)).map(function (cell, i) {
            var startDate = firstCellDate.addDays(i);
            var endDate = new Date(startDate);
            endDate.setHours(23, 59, 59); // End at 23:59:59.
            // To increase performance skip checking isToday if today already found.

            var isToday = !todayFound && isDateToday(startDate) && !todayFound++;
            return {
              startDate: startDate,
              formattedDate: _this6.formatDate(startDate),
              endDate: endDate,
              content: startDate.getDate(),
              today: isToday,
              outOfScope: startDate.getMonth() !== month
            };
          });

          if (this.hideWeekends || this.hideWeekdays.length) {
            cells = cells.filter(function (cell) {
              var day = cell.startDate.getDay();
              if (!day) day = 7; // Put Sunday at position 7 instead of 0.

              return !(_this6.hideWeekends && day >= 6 || _this6.hideWeekdays.length && _this6.hideWeekdays.includes(day));
            });
          }

          break;

        case 'week':
          todayFound = false;
          var firstDayOfWeek = this.view.startDate;
          var weekDays = this.weekDays;
          cells = weekDays.map(function (cell, i) {
            var startDate = firstDayOfWeek.addDays(i);
            var endDate = new Date(startDate);
            endDate.setHours(23, 59, 59); // End at 23:59:59.

            return {
              startDate: startDate,
              formattedDate: _this6.formatDate(startDate),
              endDate: endDate,
              // To increase performance skip checking isToday if today already found.
              today: !todayFound && isDateToday(startDate) && !todayFound++
            };
          }).filter(function (cell, i) {
            return !weekDays[i].hide;
          });
          break;

        case 'day':
          var startDate = this.view.startDate;
          var endDate = new Date(this.view.startDate);
          endDate.setHours(23, 59, 59); // End at 23:59:59.

          cells = [{
            startDate: startDate,
            formattedDate: this.formatDate(startDate),
            endDate: endDate,
            today: isDateToday(startDate)
          }];
          break;
      }

      return cells;
    },
    // Only when hiding weekdays on month and week views.
    cellWidth: function cellWidth() {
      return 100 / (7 - this.weekDays.reduce(function (total, day) {
        return total + day.hide;
      }, 0));
    },
    cssClasses: function cssClasses() {
      var _ref2;

      return _ref2 = {}, _defineProperty(_ref2, "vuecal--".concat(this.view.id, "-view"), true), _defineProperty(_ref2, "vuecal--".concat(this.locale), this.locale), _defineProperty(_ref2, 'vuecal--no-time', !this.time), _defineProperty(_ref2, 'vuecal--view-with-time', this.hasTimeColumn), _defineProperty(_ref2, 'vuecal--twelve-hour', this.twelveHour), _defineProperty(_ref2, 'vuecal--click-to-navigate', this.clickToNavigate), _defineProperty(_ref2, 'vuecal--hide-weekends', this.hideWeekends), _defineProperty(_ref2, 'vuecal--split-days', this.hasSplits), _defineProperty(_ref2, 'vuecal--sticky-split-labels', this.hasSplits && this.stickySplitLabels), _defineProperty(_ref2, 'vuecal--overflow-x', this.minCellWidth), _defineProperty(_ref2, 'vuecal--small', this.small), _defineProperty(_ref2, 'vuecal--xsmall', this.xsmall), _defineProperty(_ref2, 'vuecal--dragging-event', this.domEvents.resizeAnEvent.endTimeMinutes), _defineProperty(_ref2, 'vuecal--events-on-month-view', this.eventsOnMonthView), _defineProperty(_ref2, 'vuecal--short-events', this.view.id === 'month' && ['short', 'medium', 'long'].indexOf(this.eventsOnMonthView) !== -1), _ref2;
    }
  },
  filters: {
    formatTime: function formatTime(value, format) {
      return date_utils_formatTime(value, format) || '';
    }
  },
  watch: {
    events: {
      // To be able to detect an event attribute change, it has to be first initialized with a value.
      handler: function handler(events, oldEvents) {
        this.updateMutableEvents(events);
        this.addEventsToView();
      },
      deep: true
    },
    locale: function locale(_locale) {
      this.loadLocale(_locale);
    },
    selectedDate: function selectedDate(date) {
      this.updateSelectedDate(date);
    }
  }
});
// CONCATENATED MODULE: ./src/components/vue-cal/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_vue_calvue_type_script_lang_js_ = (vue_calvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/vue-cal/index.vue





/* normalize component */

var vue_cal_component = normalizeComponent(
  components_vue_calvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var vue_cal = (vue_cal_component.exports);
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (vue_cal);



/***/ }),

/***/ "fda1":
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__("1b55");


/***/ }),

/***/ "fdef":
/***/ (function(module, exports) {

module.exports = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
  '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ }),

/***/ "ff0c":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__("43c8");
var toObject = __webpack_require__("0185");
var IE_PROTO = __webpack_require__("5d8f")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ })

/******/ })["default"];