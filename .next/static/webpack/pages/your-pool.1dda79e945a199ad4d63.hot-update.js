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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ PufferCard; }\n/* harmony export */ });\n/* harmony import */ var _Users_corbinfraser_Documents_GitHub_poolside_puffers_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_corbinfraser_Documents_GitHub_poolside_puffers_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_corbinfraser_Documents_GitHub_poolside_puffers_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_corbinfraser_Documents_GitHub_poolside_puffers_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _jsxFileName = \"/Users/corbinfraser/Documents/GitHub/poolside-puffers/pages/PufferCard.js\",\n    _s = $RefreshSig$();\n\n\nfunction PufferCard(_ref) {\n  _s();\n\n  var pufferContract = _ref.pufferContract,\n      walletAddress = _ref.walletAddress;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]),\n      pufferCardData = _useState[0],\n      setPufferCardData = _useState[1];\n\n  function countOccurences(string, word) {\n    return string.split(word).length - 1;\n  }\n\n  function renderCards() {\n    var _this = this;\n\n    var pufferList = [];\n\n    if (pufferCardData.length == 0) {\n      pufferList.push( /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n        className: \"puffer flex flex-col\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"img\", {\n          src: \"images/loading.gif\",\n          alt: \"loading\",\n          className: \"loading\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 16,\n          columnNumber: 21\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"h2\", {\n          className: \"Poppitandfinchsans text-center text-2xl text-black\",\n          children: \"Searching Blockchain...\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 17,\n          columnNumber: 21\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 15,\n        columnNumber: 17\n      }, this));\n    }\n\n    var redCount = \"0\";\n    var countRed = \"0\";\n\n    for (var i = 0; i < pufferCardData.length; i++) {\n      console.log(pufferCardData);\n      var obj = pufferCardData[i];\n      var attributes = obj.attributes;\n      pufferList.push( /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n        className: \"puffer flex flex-col\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n          className: \"rare\",\n          children: attributes.map(function (attributes) {\n            // var redCount = (attributes.value.match(/Red/g) || []).length;\n            // console.log(redCount);                        \n            // var orangeCount = (attributes.value.match(/Orange/g) || []).length;\n            // console.log(orangeCount);\n            // var yellowCount = (attributes.value.match(/Yellow/g) || []).length;\n            // console.log(yellowCount);\n            // var greenCount = (attributes.value.match(/Green/g) || []).length;\n            // console.log(greenCount);\n            // var blueCount = (attributes.value.match(/Blue/g) || []).length;\n            // console.log(blueCount);\n            // var indigoCount = (attributes.value.match(/Indigo/g) || []).length;\n            // console.log(indigoCount);\n            // var violetCount = (attributes.value.match(/Violet/g) || []).length;\n            // console.log(violetCount);\n            // console.log(\"Bluecount:\", countOccurences(attributes.value,\"Blue\"));\n            // redCount += countOccurences(attributes.value,\"Red\");\n            console.log(\"Redcount:\", redCount);\n\n            if (redCount > 1) {\n              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"img\", {\n                src: \"images/diamond.png\",\n                alt: \"rare\",\n                className: \"diamond\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 56,\n                columnNumber: 36\n              }, _this);\n            }\n\n            if (attributes.value.indexOf(\"Animated\") >= 0) {\n              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"span\", {\n                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"img\", {\n                  src: \"images/diamond.png\",\n                  alt: \"rare\",\n                  className: \"diamond\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 62,\n                  columnNumber: 42\n                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"img\", {\n                  src: \"images/diamond.png\",\n                  alt: \"rare\",\n                  className: \"diamond\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 62,\n                  columnNumber: 109\n                }, _this)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 62,\n                columnNumber: 36\n              }, _this);\n            }\n\n            if (attributes.value.indexOf(\"Ripped\") >= 0) {\n              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"img\", {\n                src: \"images/diamond.png\",\n                alt: \"rare\",\n                className: \"diamond\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 65,\n                columnNumber: 36\n              }, _this);\n            }\n\n            if (attributes.value.indexOf(\"Cigarette\") >= 0) {\n              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"img\", {\n                src: \"images/diamond.png\",\n                alt: \"rare\",\n                className: \"diamond\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 68,\n                columnNumber: 36\n              }, _this);\n            }\n\n            if (attributes.value.indexOf(\"Joint\") >= 0) {\n              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"img\", {\n                src: \"images/diamond.png\",\n                alt: \"rare\",\n                className: \"diamond\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 71,\n                columnNumber: 36\n              }, _this);\n            }\n\n            if (attributes.value.indexOf(\"Pool Animated\") >= 0) {\n              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"span\", {\n                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"img\", {\n                  src: \"images/diamond.png\",\n                  alt: \"rare\",\n                  className: \"diamond\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 74,\n                  columnNumber: 42\n                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"img\", {\n                  src: \"images/diamond.png\",\n                  alt: \"rare\",\n                  className: \"diamond\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 74,\n                  columnNumber: 109\n                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"img\", {\n                  src: \"images/diamond.png\",\n                  alt: \"rare\",\n                  className: \"diamond\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 74,\n                  columnNumber: 176\n                }, _this)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 74,\n                columnNumber: 36\n              }, _this);\n            }\n          })\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 31,\n          columnNumber: 21\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"img\", {\n          src: obj.image,\n          alt: obj.name\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 78,\n          columnNumber: 21\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"h3\", {\n          className: \"Poppitandfinchsans text-center text-4xl text-black\",\n          children: obj.name\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 79,\n          columnNumber: 21\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"p\", {\n          className: \"Poppitandfinchsans text-center text-black\",\n          children: \"Traits:\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 80,\n          columnNumber: 21\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"ul\", {\n          className: \"pufferAttributes \",\n          children: attributes.map(function (attributes) {\n            countRed = parseInt(countOccurences(attributes.value, \"Red\"));\n            redCount += parseInt(countRed);\n            console.log(\"redCount\", redCount);\n            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"li\", {\n              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"span\", {\n                children: [attributes.trait_type, \":\"]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 86,\n                columnNumber: 40\n              }, _this), \" \", attributes.value]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 86,\n              columnNumber: 36\n            }, _this);\n          })\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 81,\n          columnNumber: 21\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 17\n      }, this));\n    }\n\n    return pufferList;\n  }\n\n  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)( /*#__PURE__*/(0,_Users_corbinfraser_Documents_GitHub_poolside_puffers_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/_Users_corbinfraser_Documents_GitHub_poolside_puffers_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n    var bal, make_range, CHUNK_SIZE, c, r, ids, objs, attrs;\n    return _Users_corbinfraser_Documents_GitHub_poolside_puffers_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.next = 2;\n            return pufferContract.methods.balanceOf(walletAddress).call();\n\n          case 2:\n            bal = _context.sent;\n\n            make_range = function make_range(s, e) {\n              return Array(e - s + 1).fill().map(function (_, i) {\n                return s + i;\n              });\n            };\n\n            CHUNK_SIZE = 10; // in case we have tooo many\n            // const tokens = [];\n\n            c = 0;\n\n          case 6:\n            if (!(c < bal)) {\n              _context.next = 30;\n              break;\n            }\n\n            r = make_range(c, Math.min(bal - 1, c + CHUNK_SIZE));\n            console.log(r);\n            _context.prev = 9;\n            _context.next = 12;\n            return Promise.all(r.map(function (i) {\n              return pufferContract.methods.tokenOfOwnerByIndex(walletAddress, i).call();\n            }));\n\n          case 12:\n            ids = _context.sent;\n            console.log(ids);\n            _context.next = 16;\n            return Promise.all(ids.map(function (id) {\n              return pufferContract.methods.tokenURI(Number.parseInt(id, 10)).call();\n            }));\n\n          case 16:\n            objs = _context.sent;\n            console.log(objs); // switch attrs to this once cors headers have been resolved on demopoolsidepuffers.vercel.app\n            // const attrs = await Promise.all(objs.map((obj) =>\n            //   fetch(obj).then((res) => res.json())\n            // ));\n            // console.log(attrs);\n\n            _context.next = 20;\n            return Promise.all(ids.map(function (id) {\n              return fetch(\"/api/\".concat(id)).then(function (res) {\n                return res.json();\n              });\n            }));\n\n          case 20:\n            attrs = _context.sent;\n            setPufferCardData(attrs);\n            _context.next = 27;\n            break;\n\n          case 24:\n            _context.prev = 24;\n            _context.t0 = _context[\"catch\"](9);\n            console.error(_context.t0);\n\n          case 27:\n            c += CHUNK_SIZE;\n            _context.next = 6;\n            break;\n\n          case 30:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, null, [[9, 24]]);\n  })), []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n    id: \"puffer-pool\",\n    className: \"flex flex-wrap justify-center\",\n    children: renderCards()\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 137,\n    columnNumber: 13\n  }, this);\n}\n\n_s(PufferCard, \"cygWhJyHfs0iPZkvilqk+DWsbnE=\");\n\n_c = PufferCard;\n\nvar _c;\n\n$RefreshReg$(_c, \"PufferCard\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvUHVmZmVyQ2FyZC5qcz9hN2EzIl0sIm5hbWVzIjpbIlB1ZmZlckNhcmQiLCJwdWZmZXJDb250cmFjdCIsIndhbGxldEFkZHJlc3MiLCJ1c2VTdGF0ZSIsInB1ZmZlckNhcmREYXRhIiwic2V0UHVmZmVyQ2FyZERhdGEiLCJjb3VudE9jY3VyZW5jZXMiLCJzdHJpbmciLCJ3b3JkIiwic3BsaXQiLCJsZW5ndGgiLCJyZW5kZXJDYXJkcyIsInB1ZmZlckxpc3QiLCJwdXNoIiwicmVkQ291bnQiLCJjb3VudFJlZCIsImkiLCJjb25zb2xlIiwibG9nIiwib2JqIiwiYXR0cmlidXRlcyIsIm1hcCIsInZhbHVlIiwiaW5kZXhPZiIsImltYWdlIiwibmFtZSIsInBhcnNlSW50IiwidHJhaXRfdHlwZSIsInVzZUVmZmVjdCIsIm1ldGhvZHMiLCJiYWxhbmNlT2YiLCJjYWxsIiwiYmFsIiwibWFrZV9yYW5nZSIsInMiLCJlIiwiQXJyYXkiLCJmaWxsIiwiXyIsIkNIVU5LX1NJWkUiLCJjIiwiciIsIk1hdGgiLCJtaW4iLCJQcm9taXNlIiwiYWxsIiwidG9rZW5PZk93bmVyQnlJbmRleCIsImlkcyIsImlkIiwidG9rZW5VUkkiLCJOdW1iZXIiLCJvYmpzIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsImF0dHJzIiwiZXJyb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVlLFNBQVNBLFVBQVQsT0FBcUQ7QUFBQTs7QUFBQSxNQUEvQkMsY0FBK0IsUUFBL0JBLGNBQStCO0FBQUEsTUFBaEJDLGFBQWdCLFFBQWhCQSxhQUFnQjs7QUFBQSxrQkFDcEJDLCtDQUFRLENBQUMsRUFBRCxDQURZO0FBQUEsTUFDekRDLGNBRHlEO0FBQUEsTUFDekNDLGlCQUR5Qzs7QUFHaEUsV0FBU0MsZUFBVCxDQUF5QkMsTUFBekIsRUFBaUNDLElBQWpDLEVBQXVDO0FBQ25DLFdBQU9ELE1BQU0sQ0FBQ0UsS0FBUCxDQUFhRCxJQUFiLEVBQW1CRSxNQUFuQixHQUE0QixDQUFuQztBQUNGOztBQUVGLFdBQVNDLFdBQVQsR0FBdUI7QUFBQTs7QUFDbkIsUUFBTUMsVUFBVSxHQUFHLEVBQW5COztBQUVBLFFBQUlSLGNBQWMsQ0FBQ00sTUFBZixJQUF5QixDQUE3QixFQUFnQztBQUM1QkUsZ0JBQVUsQ0FBQ0MsSUFBWCxlQUNJO0FBQUssaUJBQVMsRUFBQyxzQkFBZjtBQUFBLGdDQUNJO0FBQUssYUFBRyxFQUFDLG9CQUFUO0FBQThCLGFBQUcsRUFBQyxTQUFsQztBQUE0QyxtQkFBUyxFQUFDO0FBQXREO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREosZUFFSTtBQUFJLG1CQUFTLEVBQUMsb0RBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREo7QUFNSDs7QUFFRCxRQUFJQyxRQUFRLEdBQUcsR0FBZjtBQUNBLFFBQUlDLFFBQVEsR0FBRyxHQUFmOztBQUVBLFNBQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR1osY0FBYyxDQUFDTSxNQUFuQyxFQUEyQ00sQ0FBQyxFQUE1QyxFQUFnRDtBQUM1Q0MsYUFBTyxDQUFDQyxHQUFSLENBQVlkLGNBQVo7QUFDQSxVQUFJZSxHQUFHLEdBQUdmLGNBQWMsQ0FBQ1ksQ0FBRCxDQUF4QjtBQUNBLFVBQUlJLFVBQVUsR0FBR0QsR0FBRyxDQUFDQyxVQUFyQjtBQUNBUixnQkFBVSxDQUFDQyxJQUFYLGVBQ0k7QUFBSyxpQkFBUyxFQUFDLHNCQUFmO0FBQUEsZ0NBQ0k7QUFBSyxtQkFBUyxFQUFDLE1BQWY7QUFBQSxvQkFDQ08sVUFBVSxDQUFDQyxHQUFYLENBQWUsVUFBQ0QsVUFBRCxFQUFnQjtBQUU1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBSCxtQkFBTyxDQUFDQyxHQUFSLENBQVksV0FBWixFQUF5QkosUUFBekI7O0FBRUEsZ0JBQUlBLFFBQVEsR0FBRyxDQUFmLEVBQWtCO0FBQ2Qsa0NBQU87QUFBSyxtQkFBRyxFQUFDLG9CQUFUO0FBQThCLG1CQUFHLEVBQUMsTUFBbEM7QUFBeUMseUJBQVMsRUFBQztBQUFuRDtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUFQO0FBQ0g7O0FBSUQsZ0JBQUlNLFVBQVUsQ0FBQ0UsS0FBWCxDQUFpQkMsT0FBakIsQ0FBeUIsVUFBekIsS0FBd0MsQ0FBNUMsRUFBK0M7QUFDM0Msa0NBQU87QUFBQSx3Q0FBTTtBQUFLLHFCQUFHLEVBQUMsb0JBQVQ7QUFBOEIscUJBQUcsRUFBQyxNQUFsQztBQUF5QywyQkFBUyxFQUFDO0FBQW5EO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBQU4sZUFBeUU7QUFBSyxxQkFBRyxFQUFDLG9CQUFUO0FBQThCLHFCQUFHLEVBQUMsTUFBbEM7QUFBeUMsMkJBQVMsRUFBQztBQUFuRDtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUF6RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBQVA7QUFDSDs7QUFDRCxnQkFBSUgsVUFBVSxDQUFDRSxLQUFYLENBQWlCQyxPQUFqQixDQUF5QixRQUF6QixLQUFzQyxDQUExQyxFQUE2QztBQUN6QyxrQ0FBTztBQUFLLG1CQUFHLEVBQUMsb0JBQVQ7QUFBOEIsbUJBQUcsRUFBQyxNQUFsQztBQUF5Qyx5QkFBUyxFQUFDO0FBQW5EO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBQVA7QUFDSDs7QUFDRCxnQkFBSUgsVUFBVSxDQUFDRSxLQUFYLENBQWlCQyxPQUFqQixDQUF5QixXQUF6QixLQUF5QyxDQUE3QyxFQUFnRDtBQUM1QyxrQ0FBTztBQUFLLG1CQUFHLEVBQUMsb0JBQVQ7QUFBOEIsbUJBQUcsRUFBQyxNQUFsQztBQUF5Qyx5QkFBUyxFQUFDO0FBQW5EO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBQVA7QUFDSDs7QUFDRCxnQkFBSUgsVUFBVSxDQUFDRSxLQUFYLENBQWlCQyxPQUFqQixDQUF5QixPQUF6QixLQUFxQyxDQUF6QyxFQUE0QztBQUN4QyxrQ0FBTztBQUFLLG1CQUFHLEVBQUMsb0JBQVQ7QUFBOEIsbUJBQUcsRUFBQyxNQUFsQztBQUF5Qyx5QkFBUyxFQUFDO0FBQW5EO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBQVA7QUFDSDs7QUFDRCxnQkFBSUgsVUFBVSxDQUFDRSxLQUFYLENBQWlCQyxPQUFqQixDQUF5QixlQUF6QixLQUE2QyxDQUFqRCxFQUFvRDtBQUNoRCxrQ0FBTztBQUFBLHdDQUFNO0FBQUsscUJBQUcsRUFBQyxvQkFBVDtBQUE4QixxQkFBRyxFQUFDLE1BQWxDO0FBQXlDLDJCQUFTLEVBQUM7QUFBbkQ7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFBTixlQUF5RTtBQUFLLHFCQUFHLEVBQUMsb0JBQVQ7QUFBOEIscUJBQUcsRUFBQyxNQUFsQztBQUF5QywyQkFBUyxFQUFDO0FBQW5EO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBQXpFLGVBQTRJO0FBQUsscUJBQUcsRUFBQyxvQkFBVDtBQUE4QixxQkFBRyxFQUFDLE1BQWxDO0FBQXlDLDJCQUFTLEVBQUM7QUFBbkQ7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFBNUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUFQO0FBQ0g7QUFDSixXQTVDQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREosZUFnREk7QUFBSyxhQUFHLEVBQUVKLEdBQUcsQ0FBQ0ssS0FBZDtBQUFxQixhQUFHLEVBQUVMLEdBQUcsQ0FBQ007QUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFoREosZUFpREk7QUFBSSxtQkFBUyxFQUFDLG9EQUFkO0FBQUEsb0JBQW9FTixHQUFHLENBQUNNO0FBQXhFO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBakRKLGVBa0RJO0FBQUcsbUJBQVMsRUFBQywyQ0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFsREosZUFtREk7QUFBSSxtQkFBUyxFQUFDLG1CQUFkO0FBQUEsb0JBQ0tMLFVBQVUsQ0FBQ0MsR0FBWCxDQUFlLFVBQUNELFVBQUQsRUFBZ0I7QUFDNUJMLG9CQUFRLEdBQUdXLFFBQVEsQ0FBQ3BCLGVBQWUsQ0FBQ2MsVUFBVSxDQUFDRSxLQUFaLEVBQWtCLEtBQWxCLENBQWhCLENBQW5CO0FBQ0FSLG9CQUFRLElBQUlZLFFBQVEsQ0FBQ1gsUUFBRCxDQUFwQjtBQUNBRSxtQkFBTyxDQUFDQyxHQUFSLENBQVksVUFBWixFQUF3QkosUUFBeEI7QUFDQSxnQ0FBTztBQUFBLHNDQUFJO0FBQUEsMkJBQU9NLFVBQVUsQ0FBQ08sVUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUFKLE9BQTJDUCxVQUFVLENBQUNFLEtBQXREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFBUDtBQUNILFdBTEE7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQW5ESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESjtBQWdFSDs7QUFFRCxXQUFPVixVQUFQO0FBQ0g7O0FBRURnQixrREFBUyw2VEFBRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUNXM0IsY0FBYyxDQUFDNEIsT0FBZixDQUF1QkMsU0FBdkIsQ0FBaUM1QixhQUFqQyxFQUFnRDZCLElBQWhELEVBRFg7O0FBQUE7QUFDREMsZUFEQzs7QUFFREMsc0JBRkMsR0FFWSxTQUFiQSxVQUFhLENBQUNDLENBQUQsRUFBSUMsQ0FBSjtBQUFBLHFCQUFVQyxLQUFLLENBQUNELENBQUMsR0FBR0QsQ0FBSixHQUFRLENBQVQsQ0FBTCxDQUFpQkcsSUFBakIsR0FBd0JoQixHQUF4QixDQUE0QixVQUFDaUIsQ0FBRCxFQUFJdEIsQ0FBSjtBQUFBLHVCQUFVa0IsQ0FBQyxHQUFHbEIsQ0FBZDtBQUFBLGVBQTVCLENBQVY7QUFBQSxhQUZaOztBQUdEdUIsc0JBSEMsR0FHWSxFQUhaLEVBR2dCO0FBRXZCOztBQUNTQyxhQU5GLEdBTU0sQ0FOTjs7QUFBQTtBQUFBLGtCQU1TQSxDQUFDLEdBQUdSLEdBTmI7QUFBQTtBQUFBO0FBQUE7O0FBT0dTLGFBUEgsR0FPT1IsVUFBVSxDQUFDTyxDQUFELEVBQUlFLElBQUksQ0FBQ0MsR0FBTCxDQUFTWCxHQUFHLEdBQUcsQ0FBZixFQUFrQlEsQ0FBQyxHQUFHRCxVQUF0QixDQUFKLENBUGpCO0FBUUh0QixtQkFBTyxDQUFDQyxHQUFSLENBQVl1QixDQUFaO0FBUkc7QUFBQTtBQUFBLG1CQVdtQkcsT0FBTyxDQUFDQyxHQUFSLENBQVlKLENBQUMsQ0FBQ3BCLEdBQUYsQ0FBTSxVQUFDTCxDQUFEO0FBQUEscUJBQ2hDZixjQUFjLENBQUM0QixPQUFmLENBQXVCaUIsbUJBQXZCLENBQTJDNUMsYUFBM0MsRUFBMERjLENBQTFELEVBQTZEZSxJQUE3RCxFQURnQztBQUFBLGFBQU4sQ0FBWixDQVhuQjs7QUFBQTtBQVdPZ0IsZUFYUDtBQWNDOUIsbUJBQU8sQ0FBQ0MsR0FBUixDQUFZNkIsR0FBWjtBQWREO0FBQUEsbUJBZ0JvQkgsT0FBTyxDQUFDQyxHQUFSLENBQVlFLEdBQUcsQ0FBQzFCLEdBQUosQ0FBUSxVQUFDMkIsRUFBRDtBQUFBLHFCQUNuQy9DLGNBQWMsQ0FBQzRCLE9BQWYsQ0FBdUJvQixRQUF2QixDQUFnQ0MsTUFBTSxDQUFDeEIsUUFBUCxDQUFnQnNCLEVBQWhCLEVBQW9CLEVBQXBCLENBQWhDLEVBQXlEakIsSUFBekQsRUFEbUM7QUFBQSxhQUFSLENBQVosQ0FoQnBCOztBQUFBO0FBZ0JPb0IsZ0JBaEJQO0FBbUJDbEMsbUJBQU8sQ0FBQ0MsR0FBUixDQUFZaUMsSUFBWixFQW5CRCxDQXFCQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQXpCRDtBQUFBLG1CQTJCcUJQLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRSxHQUFHLENBQUMxQixHQUFKLENBQVEsVUFBQzJCLEVBQUQ7QUFBQSxxQkFDcENJLEtBQUssZ0JBQVNKLEVBQVQsRUFBTCxDQUFvQkssSUFBcEIsQ0FBeUIsVUFBQ0MsR0FBRDtBQUFBLHVCQUFTQSxHQUFHLENBQUNDLElBQUosRUFBVDtBQUFBLGVBQXpCLENBRG9DO0FBQUEsYUFBUixDQUFaLENBM0JyQjs7QUFBQTtBQTJCT0MsaUJBM0JQO0FBK0JDbkQsNkJBQWlCLENBQUNtRCxLQUFELENBQWpCO0FBL0JEO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBaUNDdkMsbUJBQU8sQ0FBQ3dDLEtBQVI7O0FBakNEO0FBTWtCakIsYUFBQyxJQUFJRCxVQU52QjtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBRixJQXFDTixFQXJDTSxDQUFUO0FBdUNBLHNCQUFRO0FBQUssTUFBRSxFQUFDLGFBQVI7QUFBc0IsYUFBUyxFQUFDLCtCQUFoQztBQUFBLGNBQWlFNUIsV0FBVztBQUE1RTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVI7QUFDSDs7R0F2SXVCWCxVOztLQUFBQSxVIiwiZmlsZSI6Ii4vcGFnZXMvUHVmZmVyQ2FyZC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFB1ZmZlckNhcmQoeyBwdWZmZXJDb250cmFjdCx3YWxsZXRBZGRyZXNzfSkge1xuICAgIGNvbnN0IFtwdWZmZXJDYXJkRGF0YSwgc2V0UHVmZmVyQ2FyZERhdGFdID0gdXNlU3RhdGUoW10pXG5cbiAgICBmdW5jdGlvbiBjb3VudE9jY3VyZW5jZXMoc3RyaW5nLCB3b3JkKSB7XG4gICAgICAgIHJldHVybiBzdHJpbmcuc3BsaXQod29yZCkubGVuZ3RoIC0gMTtcbiAgICAgfVxuXG4gICAgZnVuY3Rpb24gcmVuZGVyQ2FyZHMoKSB7XG4gICAgICAgIGNvbnN0IHB1ZmZlckxpc3QgPSBbXTtcblxuICAgICAgICBpZiAocHVmZmVyQ2FyZERhdGEubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgIHB1ZmZlckxpc3QucHVzaChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB1ZmZlciBmbGV4IGZsZXgtY29sXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1hZ2VzL2xvYWRpbmcuZ2lmXCIgYWx0PVwibG9hZGluZ1wiIGNsYXNzTmFtZT1cImxvYWRpbmdcIj48L2ltZz5cbiAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cIlBvcHBpdGFuZGZpbmNoc2FucyB0ZXh0LWNlbnRlciB0ZXh0LTJ4bCB0ZXh0LWJsYWNrXCI+U2VhcmNoaW5nIEJsb2NrY2hhaW4uLi48L2gyPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciByZWRDb3VudCA9IFwiMFwiO1xuICAgICAgICB2YXIgY291bnRSZWQgPSBcIjBcIjtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHB1ZmZlckNhcmREYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhwdWZmZXJDYXJkRGF0YSk7XG4gICAgICAgICAgICB2YXIgb2JqID0gcHVmZmVyQ2FyZERhdGFbaV07XG4gICAgICAgICAgICB2YXIgYXR0cmlidXRlcyA9IG9iai5hdHRyaWJ1dGVzO1xuICAgICAgICAgICAgcHVmZmVyTGlzdC5wdXNoKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHVmZmVyIGZsZXggZmxleC1jb2xcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyYXJlXCI+XG4gICAgICAgICAgICAgICAgICAgIHthdHRyaWJ1dGVzLm1hcCgoYXR0cmlidXRlcykgPT4ge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB2YXIgcmVkQ291bnQgPSAoYXR0cmlidXRlcy52YWx1ZS5tYXRjaCgvUmVkL2cpIHx8IFtdKS5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhyZWRDb3VudCk7ICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB2YXIgb3JhbmdlQ291bnQgPSAoYXR0cmlidXRlcy52YWx1ZS5tYXRjaCgvT3JhbmdlL2cpIHx8IFtdKS5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhvcmFuZ2VDb3VudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB2YXIgeWVsbG93Q291bnQgPSAoYXR0cmlidXRlcy52YWx1ZS5tYXRjaCgvWWVsbG93L2cpIHx8IFtdKS5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh5ZWxsb3dDb3VudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB2YXIgZ3JlZW5Db3VudCA9IChhdHRyaWJ1dGVzLnZhbHVlLm1hdGNoKC9HcmVlbi9nKSB8fCBbXSkubGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZ3JlZW5Db3VudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB2YXIgYmx1ZUNvdW50ID0gKGF0dHJpYnV0ZXMudmFsdWUubWF0Y2goL0JsdWUvZykgfHwgW10pLmxlbmd0aDtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGJsdWVDb3VudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB2YXIgaW5kaWdvQ291bnQgPSAoYXR0cmlidXRlcy52YWx1ZS5tYXRjaCgvSW5kaWdvL2cpIHx8IFtdKS5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhpbmRpZ29Db3VudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB2YXIgdmlvbGV0Q291bnQgPSAoYXR0cmlidXRlcy52YWx1ZS5tYXRjaCgvVmlvbGV0L2cpIHx8IFtdKS5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh2aW9sZXRDb3VudCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiQmx1ZWNvdW50OlwiLCBjb3VudE9jY3VyZW5jZXMoYXR0cmlidXRlcy52YWx1ZSxcIkJsdWVcIikpO1xuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyByZWRDb3VudCArPSBjb3VudE9jY3VyZW5jZXMoYXR0cmlidXRlcy52YWx1ZSxcIlJlZFwiKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJSZWRjb3VudDpcIiwgcmVkQ291bnQpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVkQ291bnQgPiAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxpbWcgc3JjPVwiaW1hZ2VzL2RpYW1vbmQucG5nXCIgYWx0PVwicmFyZVwiIGNsYXNzTmFtZT1cImRpYW1vbmRcIj48L2ltZz5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhdHRyaWJ1dGVzLnZhbHVlLmluZGV4T2YoXCJBbmltYXRlZFwiKSA+PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxzcGFuPjxpbWcgc3JjPVwiaW1hZ2VzL2RpYW1vbmQucG5nXCIgYWx0PVwicmFyZVwiIGNsYXNzTmFtZT1cImRpYW1vbmRcIj48L2ltZz48aW1nIHNyYz1cImltYWdlcy9kaWFtb25kLnBuZ1wiIGFsdD1cInJhcmVcIiBjbGFzc05hbWU9XCJkaWFtb25kXCI+PC9pbWc+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGF0dHJpYnV0ZXMudmFsdWUuaW5kZXhPZihcIlJpcHBlZFwiKSA+PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxpbWcgc3JjPVwiaW1hZ2VzL2RpYW1vbmQucG5nXCIgYWx0PVwicmFyZVwiIGNsYXNzTmFtZT1cImRpYW1vbmRcIj48L2ltZz5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhdHRyaWJ1dGVzLnZhbHVlLmluZGV4T2YoXCJDaWdhcmV0dGVcIikgPj0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8aW1nIHNyYz1cImltYWdlcy9kaWFtb25kLnBuZ1wiIGFsdD1cInJhcmVcIiBjbGFzc05hbWU9XCJkaWFtb25kXCI+PC9pbWc+XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYXR0cmlidXRlcy52YWx1ZS5pbmRleE9mKFwiSm9pbnRcIikgPj0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8aW1nIHNyYz1cImltYWdlcy9kaWFtb25kLnBuZ1wiIGFsdD1cInJhcmVcIiBjbGFzc05hbWU9XCJkaWFtb25kXCI+PC9pbWc+XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYXR0cmlidXRlcy52YWx1ZS5pbmRleE9mKFwiUG9vbCBBbmltYXRlZFwiKSA+PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxzcGFuPjxpbWcgc3JjPVwiaW1hZ2VzL2RpYW1vbmQucG5nXCIgYWx0PVwicmFyZVwiIGNsYXNzTmFtZT1cImRpYW1vbmRcIj48L2ltZz48aW1nIHNyYz1cImltYWdlcy9kaWFtb25kLnBuZ1wiIGFsdD1cInJhcmVcIiBjbGFzc05hbWU9XCJkaWFtb25kXCI+PC9pbWc+PGltZyBzcmM9XCJpbWFnZXMvZGlhbW9uZC5wbmdcIiBhbHQ9XCJyYXJlXCIgY2xhc3NOYW1lPVwiZGlhbW9uZFwiPjwvaW1nPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17b2JqLmltYWdlfSBhbHQ9e29iai5uYW1lfT48L2ltZz5cbiAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIlBvcHBpdGFuZGZpbmNoc2FucyB0ZXh0LWNlbnRlciB0ZXh0LTR4bCB0ZXh0LWJsYWNrXCI+e29iai5uYW1lfTwvaDM+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIlBvcHBpdGFuZGZpbmNoc2FucyB0ZXh0LWNlbnRlciB0ZXh0LWJsYWNrXCI+VHJhaXRzOjwvcD5cbiAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInB1ZmZlckF0dHJpYnV0ZXMgXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7YXR0cmlidXRlcy5tYXAoKGF0dHJpYnV0ZXMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3VudFJlZCA9IHBhcnNlSW50KGNvdW50T2NjdXJlbmNlcyhhdHRyaWJ1dGVzLnZhbHVlLFwiUmVkXCIpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWRDb3VudCArPSBwYXJzZUludChjb3VudFJlZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJyZWRDb3VudFwiLCByZWRDb3VudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxsaT48c3Bhbj57YXR0cmlidXRlcy50cmFpdF90eXBlfTo8L3NwYW4+IHthdHRyaWJ1dGVzLnZhbHVlfTwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgPC91bD5cblxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcHVmZmVyTGlzdDtcbiAgICB9XG5cbiAgICB1c2VFZmZlY3QoIGFzeW5jKCkgPT4ge1xuICAgICAgICBjb25zdCBiYWwgPSBhd2FpdCBwdWZmZXJDb250cmFjdC5tZXRob2RzLmJhbGFuY2VPZih3YWxsZXRBZGRyZXNzKS5jYWxsKCk7XG4gICAgICAgIGNvbnN0IG1ha2VfcmFuZ2UgPSAocywgZSkgPT4gQXJyYXkoZSAtIHMgKyAxKS5maWxsKCkubWFwKChfLCBpKSA9PiBzICsgaSk7XG4gICAgICAgIGNvbnN0IENIVU5LX1NJWkUgPSAxMDsgLy8gaW4gY2FzZSB3ZSBoYXZlIHRvb28gbWFueVxuXG4gICAgICAgIC8vIGNvbnN0IHRva2VucyA9IFtdO1xuICAgICAgICBmb3IgKGxldCBjID0gMDsgYyA8IGJhbDsgYyArPSBDSFVOS19TSVpFKSB7XG4gICAgICAgICAgICBjb25zdCByID0gbWFrZV9yYW5nZShjLCBNYXRoLm1pbihiYWwgLSAxLCBjICsgQ0hVTktfU0laRSkpO1xuICAgICAgICAgICAgY29uc29sZS5sb2cocik7XG5cbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaWRzID0gYXdhaXQgUHJvbWlzZS5hbGwoci5tYXAoKGkpID0+XG4gICAgICAgICAgICAgICAgICAgIHB1ZmZlckNvbnRyYWN0Lm1ldGhvZHMudG9rZW5PZk93bmVyQnlJbmRleCh3YWxsZXRBZGRyZXNzLCBpKS5jYWxsKClcbiAgICAgICAgICAgICAgICApKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhpZHMpO1xuXG4gICAgICAgICAgICAgICAgY29uc3Qgb2JqcyA9IGF3YWl0IFByb21pc2UuYWxsKGlkcy5tYXAoKGlkKSA9PlxuICAgICAgICAgICAgICAgICAgICBwdWZmZXJDb250cmFjdC5tZXRob2RzLnRva2VuVVJJKE51bWJlci5wYXJzZUludChpZCwgMTApKS5jYWxsKClcbiAgICAgICAgICAgICAgICApKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhvYmpzKTtcblxuICAgICAgICAgICAgICAgIC8vIHN3aXRjaCBhdHRycyB0byB0aGlzIG9uY2UgY29ycyBoZWFkZXJzIGhhdmUgYmVlbiByZXNvbHZlZCBvbiBkZW1vcG9vbHNpZGVwdWZmZXJzLnZlcmNlbC5hcHBcbiAgICAgICAgICAgICAgICAvLyBjb25zdCBhdHRycyA9IGF3YWl0IFByb21pc2UuYWxsKG9ianMubWFwKChvYmopID0+XG4gICAgICAgICAgICAgICAgLy8gICBmZXRjaChvYmopLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcbiAgICAgICAgICAgICAgICAvLyApKTtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhhdHRycyk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBhdHRycyA9IGF3YWl0IFByb21pc2UuYWxsKGlkcy5tYXAoKGlkKSA9PlxuICAgICAgICAgICAgICAgICAgICBmZXRjaChgL2FwaS8ke2lkfWApLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcbiAgICAgICAgICAgICAgICApKTtcblxuICAgICAgICAgICAgICAgIHNldFB1ZmZlckNhcmREYXRhKGF0dHJzKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9LCBbXSk7XG5cbiAgICByZXR1cm4gKDxkaXYgaWQ9XCJwdWZmZXItcG9vbFwiIGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIGp1c3RpZnktY2VudGVyXCI+e3JlbmRlckNhcmRzKCl9PC9kaXY+KTtcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/PufferCard.js\n");

/***/ })

});