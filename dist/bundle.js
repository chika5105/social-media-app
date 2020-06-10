/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/main.js":
/*!************************!*\
  !*** ./client/main.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nSyntaxError: /Users/jinanwachikafavour/Documents/GitHub/social-media-app/client/main.js: Unexpected token (5:7)\\n\\n\\u001b[0m \\u001b[90m 3 | \\u001b[39m\\u001b[36mimport\\u001b[39m \\u001b[33mHelloWorld\\u001b[39m from \\u001b[32m'./HelloWorld'\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 4 | \\u001b[39m\\u001b[0m\\n\\u001b[0m\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m 5 | \\u001b[39mrender(\\u001b[33m<\\u001b[39m\\u001b[33mHelloWorld\\u001b[39m\\u001b[33m/\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[33m,\\u001b[39m document\\u001b[33m.\\u001b[39mgetElementById(\\u001b[32m'root'\\u001b[39m))\\u001b[0m\\n\\u001b[0m \\u001b[90m   | \\u001b[39m       \\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\u001b[0m\\n    at Parser._raise (/Users/jinanwachikafavour/Documents/GitHub/social-media-app/node_modules/@babel/parser/lib/index.js:746:17)\\n    at Parser.raiseWithData (/Users/jinanwachikafavour/Documents/GitHub/social-media-app/node_modules/@babel/parser/lib/index.js:739:17)\\n    at Parser.raise (/Users/jinanwachikafavour/Documents/GitHub/social-media-app/node_modules/@babel/parser/lib/index.js:733:17)\\n    at Parser.unexpected (/Users/jinanwachikafavour/Documents/GitHub/social-media-app/node_modules/@babel/parser/lib/index.js:8807:16)\\n    at Parser.parseExprAtom (/Users/jinanwachikafavour/Documents/GitHub/social-media-app/node_modules/@babel/parser/lib/index.js:10130:20)\\n    at Parser.parseExprSubscripts (/Users/jinanwachikafavour/Documents/GitHub/social-media-app/node_modules/@babel/parser/lib/index.js:9656:23)\\n    at Parser.parseMaybeUnary (/Users/jinanwachikafavour/Documents/GitHub/social-media-app/node_modules/@babel/parser/lib/index.js:9636:21)\\n    at Parser.parseExprOps (/Users/jinanwachikafavour/Documents/GitHub/social-media-app/node_modules/@babel/parser/lib/index.js:9506:23)\\n    at Parser.parseMaybeConditional (/Users/jinanwachikafavour/Documents/GitHub/social-media-app/node_modules/@babel/parser/lib/index.js:9479:23)\\n    at Parser.parseMaybeAssign (/Users/jinanwachikafavour/Documents/GitHub/social-media-app/node_modules/@babel/parser/lib/index.js:9434:21)\\n    at Parser.parseExprListItem (/Users/jinanwachikafavour/Documents/GitHub/social-media-app/node_modules/@babel/parser/lib/index.js:10792:18)\\n    at Parser.parseCallExpressionArguments (/Users/jinanwachikafavour/Documents/GitHub/social-media-app/node_modules/@babel/parser/lib/index.js:9850:22)\\n    at Parser.parseSubscript (/Users/jinanwachikafavour/Documents/GitHub/social-media-app/node_modules/@babel/parser/lib/index.js:9750:31)\\n    at Parser.parseSubscripts (/Users/jinanwachikafavour/Documents/GitHub/social-media-app/node_modules/@babel/parser/lib/index.js:9679:19)\\n    at Parser.parseExprSubscripts (/Users/jinanwachikafavour/Documents/GitHub/social-media-app/node_modules/@babel/parser/lib/index.js:9662:17)\\n    at Parser.parseMaybeUnary (/Users/jinanwachikafavour/Documents/GitHub/social-media-app/node_modules/@babel/parser/lib/index.js:9636:21)\\n    at Parser.parseExprOps (/Users/jinanwachikafavour/Documents/GitHub/social-media-app/node_modules/@babel/parser/lib/index.js:9506:23)\\n    at Parser.parseMaybeConditional (/Users/jinanwachikafavour/Documents/GitHub/social-media-app/node_modules/@babel/parser/lib/index.js:9479:23)\\n    at Parser.parseMaybeAssign (/Users/jinanwachikafavour/Documents/GitHub/social-media-app/node_modules/@babel/parser/lib/index.js:9434:21)\\n    at Parser.parseExpression (/Users/jinanwachikafavour/Documents/GitHub/social-media-app/node_modules/@babel/parser/lib/index.js:9386:23)\\n    at Parser.parseStatementContent (/Users/jinanwachikafavour/Documents/GitHub/social-media-app/node_modules/@babel/parser/lib/index.js:11285:23)\\n    at Parser.parseStatement (/Users/jinanwachikafavour/Documents/GitHub/social-media-app/node_modules/@babel/parser/lib/index.js:11156:17)\\n    at Parser.parseBlockOrModuleBlockBody (/Users/jinanwachikafavour/Documents/GitHub/social-media-app/node_modules/@babel/parser/lib/index.js:11731:25)\\n    at Parser.parseBlockBody (/Users/jinanwachikafavour/Documents/GitHub/social-media-app/node_modules/@babel/parser/lib/index.js:11717:10)\\n    at Parser.parseTopLevel (/Users/jinanwachikafavour/Documents/GitHub/social-media-app/node_modules/@babel/parser/lib/index.js:11087:10)\\n    at Parser.parse (/Users/jinanwachikafavour/Documents/GitHub/social-media-app/node_modules/@babel/parser/lib/index.js:12768:10)\\n    at parse (/Users/jinanwachikafavour/Documents/GitHub/social-media-app/node_modules/@babel/parser/lib/index.js:12821:38)\\n    at parser (/Users/jinanwachikafavour/Documents/GitHub/social-media-app/node_modules/@babel/core/lib/parser/index.js:54:34)\\n    at parser.next (<anonymous>)\\n    at normalizeFile (/Users/jinanwachikafavour/Documents/GitHub/social-media-app/node_modules/@babel/core/lib/transformation/normalize-file.js:93:38)\");\n\n//# sourceURL=webpack:///./client/main.js?");

/***/ }),

/***/ 0:
/*!******************************!*\
  !*** multi ./client/main.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! /Users/jinanwachikafavour/Documents/GitHub/social-media-app/client/main.js */\"./client/main.js\");\n\n\n//# sourceURL=webpack:///multi_./client/main.js?");

/***/ })

/******/ });