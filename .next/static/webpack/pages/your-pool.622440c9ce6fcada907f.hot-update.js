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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ PufferCard; }\n/* harmony export */ });\n/* harmony import */ var _Users_corbinfraser_Documents_GitHub_poolside_puffers_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_corbinfraser_Documents_GitHub_poolside_puffers_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_corbinfraser_Documents_GitHub_poolside_puffers_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_corbinfraser_Documents_GitHub_poolside_puffers_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _jsxFileName = \"/Users/corbinfraser/Documents/GitHub/poolside-puffers/pages/PufferCard.js\",\n    _s = $RefreshSig$();\n\n\nfunction PufferCard(_ref) {\n  _s();\n\n  var pufferContract = _ref.pufferContract,\n      walletAddress = _ref.walletAddress;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]),\n      pufferCardData = _useState[0],\n      setPufferCardData = _useState[1];\n\n  function renderCards() {\n    var _this = this;\n\n    var pufferList = [];\n\n    if (pufferCardData.length == 0) {\n      pufferList.push( /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n        className: \"puffer flex flex-col\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"h3\", {\n          className: \"Poppitandfinchsans text-center text-4xl text-black\",\n          children: \"Searching...\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 12,\n          columnNumber: 21\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 11,\n        columnNumber: 17\n      }, this));\n    }\n\n    for (var i = 0; i < pufferCardData.length; i++) {\n      console.log(pufferCardData);\n      var obj = pufferCardData[i];\n      var attributes = obj.attributes;\n      pufferList.push( /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n        className: \"puffer flex flex-col\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"img\", {\n          src: obj.image,\n          alt: obj.name\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 23,\n          columnNumber: 21\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"h3\", {\n          className: \"Poppitandfinchsans text-center text-4xl text-black\",\n          children: obj.name\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 24,\n          columnNumber: 21\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"p\", {\n          className: \"Poppitandfinchsans text-center text-black\",\n          children: \"Traits:\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 25,\n          columnNumber: 21\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"ul\", {\n          className: \"pufferAttributes \",\n          children: attributes.map(function (attributes) {\n            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"li\", {\n              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"span\", {\n                children: [attributes.trait_type, \":\"]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 28,\n                columnNumber: 40\n              }, _this), \" \", attributes.value]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 28,\n              columnNumber: 36\n            }, _this);\n          })\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 26,\n          columnNumber: 21\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 22,\n        columnNumber: 17\n      }, this));\n    }\n\n    return pufferList;\n  }\n\n  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)( /*#__PURE__*/(0,_Users_corbinfraser_Documents_GitHub_poolside_puffers_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/_Users_corbinfraser_Documents_GitHub_poolside_puffers_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n    var bal, make_range, CHUNK_SIZE, c, r, ids, objs, attrs;\n    return _Users_corbinfraser_Documents_GitHub_poolside_puffers_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.next = 2;\n            return pufferContract.methods.balanceOf(walletAddress).call();\n\n          case 2:\n            bal = _context.sent;\n\n            make_range = function make_range(s, e) {\n              return Array(e - s + 1).fill().map(function (_, i) {\n                return s + i;\n              });\n            };\n\n            CHUNK_SIZE = 10; // in case we have tooo many\n            // const tokens = [];\n\n            c = 0;\n\n          case 6:\n            if (!(c < bal)) {\n              _context.next = 30;\n              break;\n            }\n\n            r = make_range(c, Math.min(bal - 1, c + CHUNK_SIZE));\n            console.log(r);\n            _context.prev = 9;\n            _context.next = 12;\n            return Promise.all(r.map(function (i) {\n              return pufferContract.methods.tokenOfOwnerByIndex(walletAddress, i).call();\n            }));\n\n          case 12:\n            ids = _context.sent;\n            console.log(ids);\n            _context.next = 16;\n            return Promise.all(ids.map(function (id) {\n              return pufferContract.methods.tokenURI(Number.parseInt(id, 10)).call();\n            }));\n\n          case 16:\n            objs = _context.sent;\n            console.log(objs); // switch attrs to this once cors headers have been resolved on demopoolsidepuffers.vercel.app\n            // const attrs = await Promise.all(objs.map((obj) =>\n            //   fetch(obj).then((res) => res.json())\n            // ));\n            // console.log(attrs);\n\n            _context.next = 20;\n            return Promise.all(ids.map(function (id) {\n              return fetch(\"/api/\".concat(id)).then(function (res) {\n                return res.json();\n              });\n            }));\n\n          case 20:\n            attrs = _context.sent;\n            setPufferCardData(attrs);\n            _context.next = 27;\n            break;\n\n          case 24:\n            _context.prev = 24;\n            _context.t0 = _context[\"catch\"](9);\n            console.error(_context.t0);\n\n          case 27:\n            c += CHUNK_SIZE;\n            _context.next = 6;\n            break;\n\n          case 30:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, null, [[9, 24]]);\n  })), []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n    id: \"puffer-pool\",\n    className: \"flex flex-wrap justify-center\",\n    children: renderCards()\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 77,\n    columnNumber: 13\n  }, this);\n}\n\n_s(PufferCard, \"cygWhJyHfs0iPZkvilqk+DWsbnE=\");\n\n_c = PufferCard;\n\nvar _c;\n\n$RefreshReg$(_c, \"PufferCard\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvUHVmZmVyQ2FyZC5qcz9hN2EzIl0sIm5hbWVzIjpbIlB1ZmZlckNhcmQiLCJwdWZmZXJDb250cmFjdCIsIndhbGxldEFkZHJlc3MiLCJ1c2VTdGF0ZSIsInB1ZmZlckNhcmREYXRhIiwic2V0UHVmZmVyQ2FyZERhdGEiLCJyZW5kZXJDYXJkcyIsInB1ZmZlckxpc3QiLCJsZW5ndGgiLCJwdXNoIiwiaSIsImNvbnNvbGUiLCJsb2ciLCJvYmoiLCJhdHRyaWJ1dGVzIiwiaW1hZ2UiLCJuYW1lIiwibWFwIiwidHJhaXRfdHlwZSIsInZhbHVlIiwidXNlRWZmZWN0IiwibWV0aG9kcyIsImJhbGFuY2VPZiIsImNhbGwiLCJiYWwiLCJtYWtlX3JhbmdlIiwicyIsImUiLCJBcnJheSIsImZpbGwiLCJfIiwiQ0hVTktfU0laRSIsImMiLCJyIiwiTWF0aCIsIm1pbiIsIlByb21pc2UiLCJhbGwiLCJ0b2tlbk9mT3duZXJCeUluZGV4IiwiaWRzIiwiaWQiLCJ0b2tlblVSSSIsIk51bWJlciIsInBhcnNlSW50Iiwib2JqcyIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJhdHRycyIsImVycm9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFZSxTQUFTQSxVQUFULE9BQXFEO0FBQUE7O0FBQUEsTUFBL0JDLGNBQStCLFFBQS9CQSxjQUErQjtBQUFBLE1BQWhCQyxhQUFnQixRQUFoQkEsYUFBZ0I7O0FBQUEsa0JBQ3BCQywrQ0FBUSxDQUFDLEVBQUQsQ0FEWTtBQUFBLE1BQ3pEQyxjQUR5RDtBQUFBLE1BQ3pDQyxpQkFEeUM7O0FBR2hFLFdBQVNDLFdBQVQsR0FBdUI7QUFBQTs7QUFDbkIsUUFBTUMsVUFBVSxHQUFHLEVBQW5COztBQUVBLFFBQUlILGNBQWMsQ0FBQ0ksTUFBZixJQUF5QixDQUE3QixFQUFnQztBQUM1QkQsZ0JBQVUsQ0FBQ0UsSUFBWCxlQUNJO0FBQUssaUJBQVMsRUFBQyxzQkFB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YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFB1ZmZlckNhcmQoeyBwdWZmZXJDb250cmFjdCx3YWxsZXRBZGRyZXNzfSkge1xuICAgIGNvbnN0IFtwdWZmZXJDYXJkRGF0YSwgc2V0UHVmZmVyQ2FyZERhdGFdID0gdXNlU3RhdGUoW10pXG5cbiAgICBmdW5jdGlvbiByZW5kZXJDYXJkcygpIHtcbiAgICAgICAgY29uc3QgcHVmZmVyTGlzdCA9IFtdO1xuXG4gICAgICAgIGlmIChwdWZmZXJDYXJkRGF0YS5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgcHVmZmVyTGlzdC5wdXNoKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHVmZmVyIGZsZXggZmxleC1jb2xcIj5cbiAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIlBvcHBpdGFuZGZpbmNoc2FucyB0ZXh0LWNlbnRlciB0ZXh0LTR4bCB0ZXh0LWJsYWNrXCI+U2VhcmNoaW5nLi4uPC9oMz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHB1ZmZlckNhcmREYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhwdWZmZXJDYXJkRGF0YSk7XG4gICAgICAgICAgICB2YXIgb2JqID0gcHVmZmVyQ2FyZERhdGFbaV07XG4gICAgICAgICAgICB2YXIgYXR0cmlidXRlcyA9IG9iai5hdHRyaWJ1dGVzO1xuICAgICAgICAgICAgcHVmZmVyTGlzdC5wdXNoKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHVmZmVyIGZsZXggZmxleC1jb2xcIj5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e29iai5pbWFnZX0gYWx0PXtvYmoubmFtZX0+PC9pbWc+XG4gICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJQb3BwaXRhbmRmaW5jaHNhbnMgdGV4dC1jZW50ZXIgdGV4dC00eGwgdGV4dC1ibGFja1wiPntvYmoubmFtZX08L2gzPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJQb3BwaXRhbmRmaW5jaHNhbnMgdGV4dC1jZW50ZXIgdGV4dC1ibGFja1wiPlRyYWl0czo8L3A+XG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJwdWZmZXJBdHRyaWJ1dGVzIFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge2F0dHJpYnV0ZXMubWFwKChhdHRyaWJ1dGVzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxsaT48c3Bhbj57YXR0cmlidXRlcy50cmFpdF90eXBlfTo8L3NwYW4+IHthdHRyaWJ1dGVzLnZhbHVlfTwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcHVmZmVyTGlzdDtcbiAgICB9XG5cbiAgICB1c2VFZmZlY3QoIGFzeW5jKCkgPT4ge1xuICAgICAgICBjb25zdCBiYWwgPSBhd2FpdCBwdWZmZXJDb250cmFjdC5tZXRob2RzLmJhbGFuY2VPZih3YWxsZXRBZGRyZXNzKS5jYWxsKCk7XG4gICAgICAgIGNvbnN0IG1ha2VfcmFuZ2UgPSAocywgZSkgPT4gQXJyYXkoZSAtIHMgKyAxKS5maWxsKCkubWFwKChfLCBpKSA9PiBzICsgaSk7XG4gICAgICAgIGNvbnN0IENIVU5LX1NJWkUgPSAxMDsgLy8gaW4gY2FzZSB3ZSBoYXZlIHRvb28gbWFueVxuXG4gICAgICAgIC8vIGNvbnN0IHRva2VucyA9IFtdO1xuICAgICAgICBmb3IgKGxldCBjID0gMDsgYyA8IGJhbDsgYyArPSBDSFVOS19TSVpFKSB7XG4gICAgICAgICAgICBjb25zdCByID0gbWFrZV9yYW5nZShjLCBNYXRoLm1pbihiYWwgLSAxLCBjICsgQ0hVTktfU0laRSkpO1xuICAgICAgICAgICAgY29uc29sZS5sb2cocik7XG5cbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaWRzID0gYXdhaXQgUHJvbWlzZS5hbGwoci5tYXAoKGkpID0+XG4gICAgICAgICAgICAgICAgICAgIHB1ZmZlckNvbnRyYWN0Lm1ldGhvZHMudG9rZW5PZk93bmVyQnlJbmRleCh3YWxsZXRBZGRyZXNzLCBpKS5jYWxsKClcbiAgICAgICAgICAgICAgICApKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhpZHMpO1xuXG4gICAgICAgICAgICAgICAgY29uc3Qgb2JqcyA9IGF3YWl0IFByb21pc2UuYWxsKGlkcy5tYXAoKGlkKSA9PlxuICAgICAgICAgICAgICAgICAgICBwdWZmZXJDb250cmFjdC5tZXRob2RzLnRva2VuVVJJKE51bWJlci5wYXJzZUludChpZCwgMTApKS5jYWxsKClcbiAgICAgICAgICAgICAgICApKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhvYmpzKTtcblxuICAgICAgICAgICAgICAgIC8vIHN3aXRjaCBhdHRycyB0byB0aGlzIG9uY2UgY29ycyBoZWFkZXJzIGhhdmUgYmVlbiByZXNvbHZlZCBvbiBkZW1vcG9vbHNpZGVwdWZmZXJzLnZlcmNlbC5hcHBcbiAgICAgICAgICAgICAgICAvLyBjb25zdCBhdHRycyA9IGF3YWl0IFByb21pc2UuYWxsKG9ianMubWFwKChvYmopID0+XG4gICAgICAgICAgICAgICAgLy8gICBmZXRjaChvYmopLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcbiAgICAgICAgICAgICAgICAvLyApKTtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhhdHRycyk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBhdHRycyA9IGF3YWl0IFByb21pc2UuYWxsKGlkcy5tYXAoKGlkKSA9PlxuICAgICAgICAgICAgICAgICAgICBmZXRjaChgL2FwaS8ke2lkfWApLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcbiAgICAgICAgICAgICAgICApKTtcblxuICAgICAgICAgICAgICAgIHNldFB1ZmZlckNhcmREYXRhKGF0dHJzKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9LCBbXSk7XG5cbiAgICByZXR1cm4gKDxkaXYgaWQ9XCJwdWZmZXItcG9vbFwiIGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIGp1c3RpZnktY2VudGVyXCI+e3JlbmRlckNhcmRzKCl9PC9kaXY+KTtcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/PufferCard.js\n");

/***/ })

});