/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/your-pool",{

/***/ "./pages/PufferCard.js":
/*!*****************************!*\
  !*** ./pages/PufferCard.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ PufferCard; }\n/* harmony export */ });\n/* harmony import */ var _Users_corbinfraser_Documents_GitHub_poolside_puffers_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_corbinfraser_Documents_GitHub_poolside_puffers_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_corbinfraser_Documents_GitHub_poolside_puffers_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_corbinfraser_Documents_GitHub_poolside_puffers_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _jsxFileName = \"/Users/corbinfraser/Documents/GitHub/poolside-puffers/pages/PufferCard.js\",\n    _s = $RefreshSig$();\n\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === \"undefined\" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n\nfunction PufferCard(_ref) {\n  _s();\n\n  var pufferContract = _ref.pufferContract,\n      walletAddress = _ref.walletAddress;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]),\n      pufferCardData = _useState[0],\n      setPufferCardData = _useState[1];\n\n  function renderCards() {\n    var _this = this;\n\n    var pufferList = [];\n\n    if (pufferCardData.length == 0) {\n      pufferList.push( /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n        className: \"puffer flex flex-col\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"img\", {\n          src: \"images/loading.gif\",\n          alt: \"loading\",\n          className: \"loading\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 15,\n          columnNumber: 21\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"h2\", {\n          className: \"Poppitandfinchsans text-center text-2xl text-black\",\n          children: \"Searching Blockchain...\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 16,\n          columnNumber: 21\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 14,\n        columnNumber: 17\n      }, this));\n    }\n\n    for (var i = 0; i < pufferCardData.length; i++) {\n      console.log(pufferCardData);\n      var obj = pufferCardData[i];\n      var attributes = obj.attributes;\n      pufferList.push( /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n        className: \"puffer flex flex-col\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n          className: \"rare\",\n          children: attributes.map(function (attributes) {\n            var arrayOfObjs = attributes.value;\n            var result = {}; // var objStr = JSON.stringify(item);\n            // console.log(result);\n\n            var _iterator = _createForOfIteratorHelper(arrayOfObjs),\n                _step;\n\n            try {\n              for (_iterator.s(); !(_step = _iterator.n()).done;) {\n                var child = _step.value;\n                var objStr = JSON.stringify(child);\n                result[objStr] = result[objStr] ? ++result[objStr] : 1;\n                console.log(result);\n              }\n            } catch (err) {\n              _iterator.e(err);\n            } finally {\n              _iterator.f();\n            }\n\n            if (attributes.value.indexOf(\"Animated\") >= 0) {\n              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"span\", {\n                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"img\", {\n                  src: \"images/diamond.png\",\n                  alt: \"rare\",\n                  className: \"diamond\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 50,\n                  columnNumber: 42\n                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"img\", {\n                  src: \"images/diamond.png\",\n                  alt: \"rare\",\n                  className: \"diamond\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 50,\n                  columnNumber: 109\n                }, _this)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 50,\n                columnNumber: 36\n              }, _this);\n            }\n\n            if (attributes.value.indexOf(\"Ripped\") >= 0) {\n              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"img\", {\n                src: \"images/diamond.png\",\n                alt: \"rare\",\n                className: \"diamond\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 53,\n                columnNumber: 36\n              }, _this);\n            }\n\n            if (attributes.value.indexOf(\"Cigarette\") >= 0) {\n              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"img\", {\n                src: \"images/diamond.png\",\n                alt: \"rare\",\n                className: \"diamond\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 56,\n                columnNumber: 36\n              }, _this);\n            }\n\n            if (attributes.value.indexOf(\"Joint\") >= 0) {\n              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"img\", {\n                src: \"images/diamond.png\",\n                alt: \"rare\",\n                className: \"diamond\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 59,\n                columnNumber: 36\n              }, _this);\n            }\n\n            if (attributes.value.indexOf(\"Pool Animated\") >= 0) {\n              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"span\", {\n                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"img\", {\n                  src: \"images/diamond.png\",\n                  alt: \"rare\",\n                  className: \"diamond\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 62,\n                  columnNumber: 42\n                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"img\", {\n                  src: \"images/diamond.png\",\n                  alt: \"rare\",\n                  className: \"diamond\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 62,\n                  columnNumber: 109\n                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"img\", {\n                  src: \"images/diamond.png\",\n                  alt: \"rare\",\n                  className: \"diamond\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 62,\n                  columnNumber: 176\n                }, _this)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 62,\n                columnNumber: 36\n              }, _this);\n            }\n          })\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 28,\n          columnNumber: 21\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"img\", {\n          src: obj.image,\n          alt: obj.name\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 66,\n          columnNumber: 21\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"h3\", {\n          className: \"Poppitandfinchsans text-center text-4xl text-black\",\n          children: obj.name\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 67,\n          columnNumber: 21\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"p\", {\n          className: \"Poppitandfinchsans text-center text-black\",\n          children: \"Traits:\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 68,\n          columnNumber: 21\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"ul\", {\n          className: \"pufferAttributes \",\n          children: attributes.map(function (attributes) {\n            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"li\", {\n              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"span\", {\n                children: [attributes.trait_type, \":\"]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 72,\n                columnNumber: 40\n              }, _this), \" \", attributes.value]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 72,\n              columnNumber: 36\n            }, _this);\n          })\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 69,\n          columnNumber: 21\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 17\n      }, this));\n    }\n\n    return pufferList;\n  }\n\n  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)( /*#__PURE__*/(0,_Users_corbinfraser_Documents_GitHub_poolside_puffers_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/_Users_corbinfraser_Documents_GitHub_poolside_puffers_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n    var bal, make_range, CHUNK_SIZE, c, r, ids, objs, attrs;\n    return _Users_corbinfraser_Documents_GitHub_poolside_puffers_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.next = 2;\n            return pufferContract.methods.balanceOf(walletAddress).call();\n\n          case 2:\n            bal = _context.sent;\n\n            make_range = function make_range(s, e) {\n              return Array(e - s + 1).fill().map(function (_, i) {\n                return s + i;\n              });\n            };\n\n            CHUNK_SIZE = 10; // in case we have tooo many\n            // const tokens = [];\n\n            c = 0;\n\n          case 6:\n            if (!(c < bal)) {\n              _context.next = 30;\n              break;\n            }\n\n            r = make_range(c, Math.min(bal - 1, c + CHUNK_SIZE));\n            console.log(r);\n            _context.prev = 9;\n            _context.next = 12;\n            return Promise.all(r.map(function (i) {\n              return pufferContract.methods.tokenOfOwnerByIndex(walletAddress, i).call();\n            }));\n\n          case 12:\n            ids = _context.sent;\n            console.log(ids);\n            _context.next = 16;\n            return Promise.all(ids.map(function (id) {\n              return pufferContract.methods.tokenURI(Number.parseInt(id, 10)).call();\n            }));\n\n          case 16:\n            objs = _context.sent;\n            console.log(objs); // switch attrs to this once cors headers have been resolved on demopoolsidepuffers.vercel.app\n            // const attrs = await Promise.all(objs.map((obj) =>\n            //   fetch(obj).then((res) => res.json())\n            // ));\n            // console.log(attrs);\n\n            _context.next = 20;\n            return Promise.all(ids.map(function (id) {\n              return fetch(\"/api/\".concat(id)).then(function (res) {\n                return res.json();\n              });\n            }));\n\n          case 20:\n            attrs = _context.sent;\n            setPufferCardData(attrs);\n            _context.next = 27;\n            break;\n\n          case 24:\n            _context.prev = 24;\n            _context.t0 = _context[\"catch\"](9);\n            console.error(_context.t0);\n\n          case 27:\n            c += CHUNK_SIZE;\n            _context.next = 6;\n            break;\n\n          case 30:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, null, [[9, 24]]);\n  })), []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n    id: \"puffer-pool\",\n    className: \"flex flex-wrap justify-center\",\n    children: renderCards()\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 123,\n    columnNumber: 13\n  }, this);\n}\n\n_s(PufferCard, \"cygWhJyHfs0iPZkvilqk+DWsbnE=\");\n\n_c = PufferCard;\n\nvar _c;\n\n$RefreshReg$(_c, \"PufferCard\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvUHVmZmVyQ2FyZC5qcz9hN2EzIl0sIm5hbWVzIjpbIlB1ZmZlckNhcmQiLCJwdWZmZXJDb250cmFjdCIsIndhbGxldEFkZHJlc3MiLCJ1c2VTdGF0ZSIsInB1ZmZlckNhcmREYXRhIiwic2V0UHVmZmVyQ2FyZERhdGEiLCJyZW5kZXJDYXJkcyIsInB1ZmZlckxpc3QiLCJsZW5ndGgiLCJwdXNoIiwiaSIsImNvbnNvbGUiLCJsb2ciLCJvYmoiLCJhdHRyaWJ1dGVzIiwibWFwIiwiYXJyYXlPZk9ianMiLCJ2YWx1ZSIsInJlc3VsdCIsImNoaWxkIiwib2JqU3RyIiwiSlNPTiIsInN0cmluZ2lmeSIsImluZGV4T2YiLCJpbWFnZSIsIm5hbWUiLCJ0cmFpdF90eXBlIiwidXNlRWZmZWN0IiwibWV0aG9kcyIsImJhbGFuY2VPZiIsImNhbGwiLCJiYWwiLCJtYWtlX3JhbmdlIiwicyIsImUiLCJBcnJheSIsImZpbGwiLCJfIiwiQ0hVTktfU0laRSIsImMiLCJyIiwiTWF0aCIsIm1pbiIsIlByb21pc2UiLCJhbGwiLCJ0b2tlbk9mT3duZXJCeUluZGV4IiwiaWRzIiwiaWQiLCJ0b2tlblVSSSIsIk51bWJlciIsInBhcnNlSW50Iiwib2JqcyIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJhdHRycyIsImVycm9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFZSxTQUFTQSxVQUFULE9BQXFEO0FBQUE7O0FBQUEsTUFBL0JDLGNBQStCLFFBQS9CQSxjQUErQjtBQUFBLE1BQWhCQyxhQUFnQixRQUFoQkEsYUFBZ0I7O0FBQUEsa0JBQ3BCQywrQ0FBUSxDQUFDLEVBQUQsQ0FEWTtBQUFBLE1BQ3pEQyxjQUR5RDtBQUFBLE1BQ3pDQyxpQkFEeUM7O0FBTWhFLFdBQVNDLFdBQVQsR0FBdUI7QUFBQTs7QUFDbkIsUUFBTUMsVUFBVSxHQUFHLEVBQW5COztBQUVBLFFBQUlILGNBQWMsQ0FB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QUssTUFBRSxFQUFDLGFBQVI7QUFBc0IsYUFBUyxFQUFDLCtCQUFoQztBQUFBLGNBQWlFaEMsV0FBVztBQUE1RTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVI7QUFDSDs7R0F6SHVCTixVOztLQUFBQSxVIiwiZmlsZSI6Ii4vcGFnZXMvUHVmZmVyQ2FyZC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFB1ZmZlckNhcmQoeyBwdWZmZXJDb250cmFjdCx3YWxsZXRBZGRyZXNzfSkge1xuICAgIGNvbnN0IFtwdWZmZXJDYXJkRGF0YSwgc2V0UHVmZmVyQ2FyZERhdGFdID0gdXNlU3RhdGUoW10pXG5cbiAgICBcbiAgICBcblxuICAgIGZ1bmN0aW9uIHJlbmRlckNhcmRzKCkge1xuICAgICAgICBjb25zdCBwdWZmZXJMaXN0ID0gW107XG5cbiAgICAgICAgaWYgKHB1ZmZlckNhcmREYXRhLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICBwdWZmZXJMaXN0LnB1c2goXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdWZmZXIgZmxleCBmbGV4LWNvbFwiPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImltYWdlcy9sb2FkaW5nLmdpZlwiIGFsdD1cImxvYWRpbmdcIiBjbGFzc05hbWU9XCJsb2FkaW5nXCI+PC9pbWc+XG4gICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJQb3BwaXRhbmRmaW5jaHNhbnMgdGV4dC1jZW50ZXIgdGV4dC0yeGwgdGV4dC1ibGFja1wiPlNlYXJjaGluZyBCbG9ja2NoYWluLi4uPC9oMj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHVmZmVyQ2FyZERhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHB1ZmZlckNhcmREYXRhKTtcbiAgICAgICAgICAgIHZhciBvYmogPSBwdWZmZXJDYXJkRGF0YVtpXTtcbiAgICAgICAgICAgIHZhciBhdHRyaWJ1dGVzID0gb2JqLmF0dHJpYnV0ZXM7XG4gICAgICAgICAgICBwdWZmZXJMaXN0LnB1c2goXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdWZmZXIgZmxleCBmbGV4LWNvbFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJhcmVcIj5cbiAgICAgICAgICAgICAgICAgICAge2F0dHJpYnV0ZXMubWFwKChhdHRyaWJ1dGVzKSA9PiB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBhcnJheU9mT2JqcyA9IGF0dHJpYnV0ZXMudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmVzdWx0ID0ge307XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHZhciBvYmpTdHIgPSBKU09OLnN0cmluZ2lmeShpdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHJlc3VsdCk7XG5cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGNoaWxkIG9mIGFycmF5T2ZPYmpzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG9ialN0ciA9IEpTT04uc3RyaW5naWZ5KGNoaWxkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRbb2JqU3RyXSA9IHJlc3VsdFtvYmpTdHJdPyArK3Jlc3VsdFtvYmpTdHJdOiAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgXG5cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYXR0cmlidXRlcy52YWx1ZS5pbmRleE9mKFwiQW5pbWF0ZWRcIikgPj0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8c3Bhbj48aW1nIHNyYz1cImltYWdlcy9kaWFtb25kLnBuZ1wiIGFsdD1cInJhcmVcIiBjbGFzc05hbWU9XCJkaWFtb25kXCI+PC9pbWc+PGltZyBzcmM9XCJpbWFnZXMvZGlhbW9uZC5wbmdcIiBhbHQ9XCJyYXJlXCIgY2xhc3NOYW1lPVwiZGlhbW9uZFwiPjwvaW1nPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhdHRyaWJ1dGVzLnZhbHVlLmluZGV4T2YoXCJSaXBwZWRcIikgPj0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8aW1nIHNyYz1cImltYWdlcy9kaWFtb25kLnBuZ1wiIGFsdD1cInJhcmVcIiBjbGFzc05hbWU9XCJkaWFtb25kXCI+PC9pbWc+XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYXR0cmlidXRlcy52YWx1ZS5pbmRleE9mKFwiQ2lnYXJldHRlXCIpID49IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGltZyBzcmM9XCJpbWFnZXMvZGlhbW9uZC5wbmdcIiBhbHQ9XCJyYXJlXCIgY2xhc3NOYW1lPVwiZGlhbW9uZFwiPjwvaW1nPlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGF0dHJpYnV0ZXMudmFsdWUuaW5kZXhPZihcIkpvaW50XCIpID49IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGltZyBzcmM9XCJpbWFnZXMvZGlhbW9uZC5wbmdcIiBhbHQ9XCJyYXJlXCIgY2xhc3NOYW1lPVwiZGlhbW9uZFwiPjwvaW1nPlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGF0dHJpYnV0ZXMudmFsdWUuaW5kZXhPZihcIlBvb2wgQW5pbWF0ZWRcIikgPj0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8c3Bhbj48aW1nIHNyYz1cImltYWdlcy9kaWFtb25kLnBuZ1wiIGFsdD1cInJhcmVcIiBjbGFzc05hbWU9XCJkaWFtb25kXCI+PC9pbWc+PGltZyBzcmM9XCJpbWFnZXMvZGlhbW9uZC5wbmdcIiBhbHQ9XCJyYXJlXCIgY2xhc3NOYW1lPVwiZGlhbW9uZFwiPjwvaW1nPjxpbWcgc3JjPVwiaW1hZ2VzL2RpYW1vbmQucG5nXCIgYWx0PVwicmFyZVwiIGNsYXNzTmFtZT1cImRpYW1vbmRcIj48L2ltZz48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e29iai5pbWFnZX0gYWx0PXtvYmoubmFtZX0+PC9pbWc+XG4gICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJQb3BwaXRhbmRmaW5jaHNhbnMgdGV4dC1jZW50ZXIgdGV4dC00eGwgdGV4dC1ibGFja1wiPntvYmoubmFtZX08L2gzPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJQb3BwaXRhbmRmaW5jaHNhbnMgdGV4dC1jZW50ZXIgdGV4dC1ibGFja1wiPlRyYWl0czo8L3A+XG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJwdWZmZXJBdHRyaWJ1dGVzIFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge2F0dHJpYnV0ZXMubWFwKChhdHRyaWJ1dGVzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxsaT48c3Bhbj57YXR0cmlidXRlcy50cmFpdF90eXBlfTo8L3NwYW4+IHthdHRyaWJ1dGVzLnZhbHVlfTwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgPC91bD5cblxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcHVmZmVyTGlzdDtcbiAgICB9XG5cbiAgICB1c2VFZmZlY3QoIGFzeW5jKCkgPT4ge1xuICAgICAgICBjb25zdCBiYWwgPSBhd2FpdCBwdWZmZXJDb250cmFjdC5tZXRob2RzLmJhbGFuY2VPZih3YWxsZXRBZGRyZXNzKS5jYWxsKCk7XG4gICAgICAgIGNvbnN0IG1ha2VfcmFuZ2UgPSAocywgZSkgPT4gQXJyYXkoZSAtIHMgKyAxKS5maWxsKCkubWFwKChfLCBpKSA9PiBzICsgaSk7XG4gICAgICAgIGNvbnN0IENIVU5LX1NJWkUgPSAxMDsgLy8gaW4gY2FzZSB3ZSBoYXZlIHRvb28gbWFueVxuXG4gICAgICAgIC8vIGNvbnN0IHRva2VucyA9IFtdO1xuICAgICAgICBmb3IgKGxldCBjID0gMDsgYyA8IGJhbDsgYyArPSBDSFVOS19TSVpFKSB7XG4gICAgICAgICAgICBjb25zdCByID0gbWFrZV9yYW5nZShjLCBNYXRoLm1pbihiYWwgLSAxLCBjICsgQ0hVTktfU0laRSkpO1xuICAgICAgICAgICAgY29uc29sZS5sb2cocik7XG5cbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaWRzID0gYXdhaXQgUHJvbWlzZS5hbGwoci5tYXAoKGkpID0+XG4gICAgICAgICAgICAgICAgICAgIHB1ZmZlckNvbnRyYWN0Lm1ldGhvZHMudG9rZW5PZk93bmVyQnlJbmRleCh3YWxsZXRBZGRyZXNzLCBpKS5jYWxsKClcbiAgICAgICAgICAgICAgICApKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhpZHMpO1xuXG4gICAgICAgICAgICAgICAgY29uc3Qgb2JqcyA9IGF3YWl0IFByb21pc2UuYWxsKGlkcy5tYXAoKGlkKSA9PlxuICAgICAgICAgICAgICAgICAgICBwdWZmZXJDb250cmFjdC5tZXRob2RzLnRva2VuVVJJKE51bWJlci5wYXJzZUludChpZCwgMTApKS5jYWxsKClcbiAgICAgICAgICAgICAgICApKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhvYmpzKTtcblxuICAgICAgICAgICAgICAgIC8vIHN3aXRjaCBhdHRycyB0byB0aGlzIG9uY2UgY29ycyBoZWFkZXJzIGhhdmUgYmVlbiByZXNvbHZlZCBvbiBkZW1vcG9vbHNpZGVwdWZmZXJzLnZlcmNlbC5hcHBcbiAgICAgICAgICAgICAgICAvLyBjb25zdCBhdHRycyA9IGF3YWl0IFByb21pc2UuYWxsKG9ianMubWFwKChvYmopID0+XG4gICAgICAgICAgICAgICAgLy8gICBmZXRjaChvYmopLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcbiAgICAgICAgICAgICAgICAvLyApKTtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhhdHRycyk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBhdHRycyA9IGF3YWl0IFByb21pc2UuYWxsKGlkcy5tYXAoKGlkKSA9PlxuICAgICAgICAgICAgICAgICAgICBmZXRjaChgL2FwaS8ke2lkfWApLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcbiAgICAgICAgICAgICAgICApKTtcblxuICAgICAgICAgICAgICAgIHNldFB1ZmZlckNhcmREYXRhKGF0dHJzKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9LCBbXSk7XG5cbiAgICByZXR1cm4gKDxkaXYgaWQ9XCJwdWZmZXItcG9vbFwiIGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIGp1c3RpZnktY2VudGVyXCI+e3JlbmRlckNhcmRzKCl9PC9kaXY+KTtcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/PufferCard.js\n");

/***/ })

});