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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ PufferCard; }\n/* harmony export */ });\n/* harmony import */ var _Users_corbinfraser_Documents_GitHub_poolside_puffers_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_corbinfraser_Documents_GitHub_poolside_puffers_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_corbinfraser_Documents_GitHub_poolside_puffers_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_corbinfraser_Documents_GitHub_poolside_puffers_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _jsxFileName = \"/Users/corbinfraser/Documents/GitHub/poolside-puffers/pages/PufferCard.js\",\n    _s = $RefreshSig$();\n\n\nfunction PufferCard(_ref) {\n  _s();\n\n  var pufferContract = _ref.pufferContract,\n      walletAddress = _ref.walletAddress;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]),\n      pufferCardData = _useState[0],\n      setPufferCardData = _useState[1];\n\n  function renderCards() {\n    var _this = this;\n\n    var pufferList = [];\n\n    if (pufferCardData.length == 0) {\n      pufferList.push( /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n        className: \"puffer flex flex-col\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"img\", {\n          src: \"images/loading.gif\",\n          alt: \"loading\",\n          className: \"loading\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 13,\n          columnNumber: 21\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"h2\", {\n          className: \"Poppitandfinchsans text-center text-2xl text-black\",\n          children: \"Searching Blockchain...\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 14,\n          columnNumber: 21\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 12,\n        columnNumber: 17\n      }, this));\n    }\n\n    for (var i = 0; i < pufferCardData.length; i++) {\n      console.log(pufferCardData);\n      var obj = pufferCardData[i];\n      var attributes = obj.attributes;\n      pufferList.push( /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n        className: \"puffer flex flex-col\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n          className: \"rare\",\n          children: attributes.map(function (attributes) {\n            attributes.value.reduce(function (sums, entry) {\n              sums[entry.city] = (sums[entry.city] || 0) + 1; // return sums;\n\n              console.log(\"sums\", sums);\n            }, {});\n\n            if (attributes.value.indexOf(\"Animated\") >= 0) {\n              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"span\", {\n                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"img\", {\n                  src: \"images/diamond.png\",\n                  alt: \"rare\",\n                  className: \"diamond\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 36,\n                  columnNumber: 42\n                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"img\", {\n                  src: \"images/diamond.png\",\n                  alt: \"rare\",\n                  className: \"diamond\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 36,\n                  columnNumber: 109\n                }, _this)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 36,\n                columnNumber: 36\n              }, _this);\n            }\n\n            if (attributes.value.indexOf(\"Ripped\") >= 0) {\n              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"img\", {\n                src: \"images/diamond.png\",\n                alt: \"rare\",\n                className: \"diamond\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 39,\n                columnNumber: 36\n              }, _this);\n            }\n\n            if (attributes.value.indexOf(\"Cigarette\") >= 0) {\n              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"img\", {\n                src: \"images/diamond.png\",\n                alt: \"rare\",\n                className: \"diamond\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 42,\n                columnNumber: 36\n              }, _this);\n            }\n\n            if (attributes.value.indexOf(\"Joint\") >= 0) {\n              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"img\", {\n                src: \"images/diamond.png\",\n                alt: \"rare\",\n                className: \"diamond\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 45,\n                columnNumber: 36\n              }, _this);\n            }\n\n            if (attributes.value.indexOf(\"Pool Animated\") >= 0) {\n              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"span\", {\n                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"img\", {\n                  src: \"images/diamond.png\",\n                  alt: \"rare\",\n                  className: \"diamond\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 48,\n                  columnNumber: 42\n                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"img\", {\n                  src: \"images/diamond.png\",\n                  alt: \"rare\",\n                  className: \"diamond\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 48,\n                  columnNumber: 109\n                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"img\", {\n                  src: \"images/diamond.png\",\n                  alt: \"rare\",\n                  className: \"diamond\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 48,\n                  columnNumber: 176\n                }, _this)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 48,\n                columnNumber: 36\n              }, _this);\n            }\n          })\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 26,\n          columnNumber: 21\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"img\", {\n          src: obj.image,\n          alt: obj.name\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 52,\n          columnNumber: 21\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"h3\", {\n          className: \"Poppitandfinchsans text-center text-4xl text-black\",\n          children: obj.name\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 53,\n          columnNumber: 21\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"p\", {\n          className: \"Poppitandfinchsans text-center text-black\",\n          children: \"Traits:\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 54,\n          columnNumber: 21\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"ul\", {\n          className: \"pufferAttributes \",\n          children: attributes.map(function (attributes) {\n            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"li\", {\n              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"span\", {\n                children: [attributes.trait_type, \":\"]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 58,\n                columnNumber: 40\n              }, _this), \" \", attributes.value]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 58,\n              columnNumber: 36\n            }, _this);\n          })\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 55,\n          columnNumber: 21\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 17\n      }, this));\n    }\n\n    return pufferList;\n  }\n\n  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)( /*#__PURE__*/(0,_Users_corbinfraser_Documents_GitHub_poolside_puffers_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/_Users_corbinfraser_Documents_GitHub_poolside_puffers_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n    var bal, make_range, CHUNK_SIZE, c, r, ids, objs, attrs;\n    return _Users_corbinfraser_Documents_GitHub_poolside_puffers_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.next = 2;\n            return pufferContract.methods.balanceOf(walletAddress).call();\n\n          case 2:\n            bal = _context.sent;\n\n            make_range = function make_range(s, e) {\n              return Array(e - s + 1).fill().map(function (_, i) {\n                return s + i;\n              });\n            };\n\n            CHUNK_SIZE = 10; // in case we have tooo many\n            // const tokens = [];\n\n            c = 0;\n\n          case 6:\n            if (!(c < bal)) {\n              _context.next = 30;\n              break;\n            }\n\n            r = make_range(c, Math.min(bal - 1, c + CHUNK_SIZE));\n            console.log(r);\n            _context.prev = 9;\n            _context.next = 12;\n            return Promise.all(r.map(function (i) {\n              return pufferContract.methods.tokenOfOwnerByIndex(walletAddress, i).call();\n            }));\n\n          case 12:\n            ids = _context.sent;\n            console.log(ids);\n            _context.next = 16;\n            return Promise.all(ids.map(function (id) {\n              return pufferContract.methods.tokenURI(Number.parseInt(id, 10)).call();\n            }));\n\n          case 16:\n            objs = _context.sent;\n            console.log(objs); // switch attrs to this once cors headers have been resolved on demopoolsidepuffers.vercel.app\n            // const attrs = await Promise.all(objs.map((obj) =>\n            //   fetch(obj).then((res) => res.json())\n            // ));\n            // console.log(attrs);\n\n            _context.next = 20;\n            return Promise.all(ids.map(function (id) {\n              return fetch(\"/api/\".concat(id)).then(function (res) {\n                return res.json();\n              });\n            }));\n\n          case 20:\n            attrs = _context.sent;\n            setPufferCardData(attrs);\n            _context.next = 27;\n            break;\n\n          case 24:\n            _context.prev = 24;\n            _context.t0 = _context[\"catch\"](9);\n            console.error(_context.t0);\n\n          case 27:\n            c += CHUNK_SIZE;\n            _context.next = 6;\n            break;\n\n          case 30:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, null, [[9, 24]]);\n  })), []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n    id: \"puffer-pool\",\n    className: \"flex flex-wrap justify-center\",\n    children: renderCards()\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 109,\n    columnNumber: 13\n  }, this);\n}\n\n_s(PufferCard, \"cygWhJyHfs0iPZkvilqk+DWsbnE=\");\n\n_c = PufferCard;\n\nvar _c;\n\n$RefreshReg$(_c, \"PufferCard\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvUHVmZmVyQ2FyZC5qcz9hN2EzIl0sIm5hbWVzIjpbIlB1ZmZlckNhcmQiLCJwdWZmZXJDb250cmFjdCIsIndhbGxldEFkZHJlc3MiLCJ1c2VTdGF0ZSIsInB1ZmZlckNhcmREYXRhIiwic2V0UHVmZmVyQ2FyZERhdGEiLCJyZW5kZXJDYXJkcyIsInB1ZmZlckxpc3QiLCJsZW5ndGgiLCJwdXNoIiwiaSIsImNvbnNvbGUiLCJsb2ciLCJvYmoiLCJhdHRyaWJ1dGVzIiwibWFwIiwidmFsdWUiLCJyZWR1Y2UiLCJzdW1zIiwiZW50cnkiLCJjaXR5IiwiaW5kZXhPZiIsImltYWdlIiwibmFtZSIsInRyYWl0X3R5cGUiLCJ1c2VFZmZlY3QiLCJtZXRob2RzIiwiYmFsYW5jZU9mIiwiY2FsbCIsImJhbCIsIm1ha2VfcmFuZ2UiLCJzIiwiZSIsIkFycmF5IiwiZmlsbCIsIl8iLCJDSFVOS19TSVpFIiwiYyIsInIiLCJNYXRoIiwibWluIiwiUHJvbWlzZSIsImFsbCIsInRva2VuT2ZPd25lckJ5SW5kZXgiLCJpZHMiLCJpZCIsInRva2VuVVJJIiwiTnVtYmVyIiwicGFyc2VJbnQiLCJvYmpzIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsImF0dHJzIiwiZXJyb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVlLFNBQVNBLFVBQVQsT0FBcUQ7QUFBQTs7QUFBQSxNQUEvQkMsY0FBK0IsUUFBL0JBLGNBQStCO0FBQUEsTUFBaEJDLGFBQWdCLFFBQWhCQSxhQUFnQjs7QUFBQSxrQkFDcEJDLCtDQUFRLENBQUMsRUFBRCxDQURZO0FBQUEsTUFDekRDLGNBRHlEO0FBQUEsTUFDekNDLGlCQUR5Qzs7QUFJaEUsV0FBU0MsV0FBVCxHQUF1QjtBQUFBOztBQUNuQixRQUFNQyxVQUFVLEdBQUcsRUFBbkI7O0FBRUEsUUFBSUgsY0FBYyxDQUFDSSxNQUFmLElBQXlCLENBQTdCLEVBQWdDO0FBQzVCRCxn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Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHVmZmVyQ2FyZCh7IHB1ZmZlckNvbnRyYWN0LHdhbGxldEFkZHJlc3N9KSB7XG4gICAgY29uc3QgW3B1ZmZlckNhcmREYXRhLCBzZXRQdWZmZXJDYXJkRGF0YV0gPSB1c2VTdGF0ZShbXSlcblxuXG4gICAgZnVuY3Rpb24gcmVuZGVyQ2FyZHMoKSB7XG4gICAgICAgIGNvbnN0IHB1ZmZlckxpc3QgPSBbXTtcblxuICAgICAgICBpZiAocHVmZmVyQ2FyZERhdGEubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgIHB1ZmZlckxpc3QucHVzaChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB1ZmZlciBmbGV4IGZsZXgtY29sXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1hZ2VzL2xvYWRpbmcuZ2lmXCIgYWx0PVwibG9hZGluZ1wiIGNsYXNzTmFtZT1cImxvYWRpbmdcIj48L2ltZz5cbiAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cIlBvcHBpdGFuZGZpbmNoc2FucyB0ZXh0LWNlbnRlciB0ZXh0LTJ4bCB0ZXh0LWJsYWNrXCI+U2VhcmNoaW5nIEJsb2NrY2hhaW4uLi48L2gyPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwdWZmZXJDYXJkRGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc29sZS5sb2cocHVmZmVyQ2FyZERhdGEpO1xuICAgICAgICAgICAgdmFyIG9iaiA9IHB1ZmZlckNhcmREYXRhW2ldO1xuICAgICAgICAgICAgdmFyIGF0dHJpYnV0ZXMgPSBvYmouYXR0cmlidXRlcztcbiAgICAgICAgICAgIHB1ZmZlckxpc3QucHVzaChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB1ZmZlciBmbGV4IGZsZXgtY29sXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmFyZVwiPlxuICAgICAgICAgICAgICAgICAgICB7YXR0cmlidXRlcy5tYXAoKGF0dHJpYnV0ZXMpID0+IHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlcy52YWx1ZS5yZWR1Y2UoZnVuY3Rpb24oc3VtcyxlbnRyeSl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Vtc1tlbnRyeS5jaXR5XSA9IChzdW1zW2VudHJ5LmNpdHldIHx8IDApICsgMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyByZXR1cm4gc3VtcztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInN1bXNcIiwgc3Vtcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LHt9KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGF0dHJpYnV0ZXMudmFsdWUuaW5kZXhPZihcIkFuaW1hdGVkXCIpID49IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPHNwYW4+PGltZyBzcmM9XCJpbWFnZXMvZGlhbW9uZC5wbmdcIiBhbHQ9XCJyYXJlXCIgY2xhc3NOYW1lPVwiZGlhbW9uZFwiPjwvaW1nPjxpbWcgc3JjPVwiaW1hZ2VzL2RpYW1vbmQucG5nXCIgYWx0PVwicmFyZVwiIGNsYXNzTmFtZT1cImRpYW1vbmRcIj48L2ltZz48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYXR0cmlidXRlcy52YWx1ZS5pbmRleE9mKFwiUmlwcGVkXCIpID49IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGltZyBzcmM9XCJpbWFnZXMvZGlhbW9uZC5wbmdcIiBhbHQ9XCJyYXJlXCIgY2xhc3NOYW1lPVwiZGlhbW9uZFwiPjwvaW1nPlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGF0dHJpYnV0ZXMudmFsdWUuaW5kZXhPZihcIkNpZ2FyZXR0ZVwiKSA+PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxpbWcgc3JjPVwiaW1hZ2VzL2RpYW1vbmQucG5nXCIgYWx0PVwicmFyZVwiIGNsYXNzTmFtZT1cImRpYW1vbmRcIj48L2ltZz5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhdHRyaWJ1dGVzLnZhbHVlLmluZGV4T2YoXCJKb2ludFwiKSA+PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxpbWcgc3JjPVwiaW1hZ2VzL2RpYW1vbmQucG5nXCIgYWx0PVwicmFyZVwiIGNsYXNzTmFtZT1cImRpYW1vbmRcIj48L2ltZz5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhdHRyaWJ1dGVzLnZhbHVlLmluZGV4T2YoXCJQb29sIEFuaW1hdGVkXCIpID49IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPHNwYW4+PGltZyBzcmM9XCJpbWFnZXMvZGlhbW9uZC5wbmdcIiBhbHQ9XCJyYXJlXCIgY2xhc3NOYW1lPVwiZGlhbW9uZFwiPjwvaW1nPjxpbWcgc3JjPVwiaW1hZ2VzL2RpYW1vbmQucG5nXCIgYWx0PVwicmFyZVwiIGNsYXNzTmFtZT1cImRpYW1vbmRcIj48L2ltZz48aW1nIHNyYz1cImltYWdlcy9kaWFtb25kLnBuZ1wiIGFsdD1cInJhcmVcIiBjbGFzc05hbWU9XCJkaWFtb25kXCI+PC9pbWc+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtvYmouaW1hZ2V9IGFsdD17b2JqLm5hbWV9PjwvaW1nPlxuICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiUG9wcGl0YW5kZmluY2hzYW5zIHRleHQtY2VudGVyIHRleHQtNHhsIHRleHQtYmxhY2tcIj57b2JqLm5hbWV9PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiUG9wcGl0YW5kZmluY2hzYW5zIHRleHQtY2VudGVyIHRleHQtYmxhY2tcIj5UcmFpdHM6PC9wPlxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwicHVmZmVyQXR0cmlidXRlcyBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHthdHRyaWJ1dGVzLm1hcCgoYXR0cmlidXRlcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8bGk+PHNwYW4+e2F0dHJpYnV0ZXMudHJhaXRfdHlwZX06PC9zcGFuPiB7YXR0cmlidXRlcy52YWx1ZX08L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XG5cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHB1ZmZlckxpc3Q7XG4gICAgfVxuXG4gICAgdXNlRWZmZWN0KCBhc3luYygpID0+IHtcbiAgICAgICAgY29uc3QgYmFsID0gYXdhaXQgcHVmZmVyQ29udHJhY3QubWV0aG9kcy5iYWxhbmNlT2Yod2FsbGV0QWRkcmVzcykuY2FsbCgpO1xuICAgICAgICBjb25zdCBtYWtlX3JhbmdlID0gKHMsIGUpID0+IEFycmF5KGUgLSBzICsgMSkuZmlsbCgpLm1hcCgoXywgaSkgPT4gcyArIGkpO1xuICAgICAgICBjb25zdCBDSFVOS19TSVpFID0gMTA7IC8vIGluIGNhc2Ugd2UgaGF2ZSB0b29vIG1hbnlcblxuICAgICAgICAvLyBjb25zdCB0b2tlbnMgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgYyA9IDA7IGMgPCBiYWw7IGMgKz0gQ0hVTktfU0laRSkge1xuICAgICAgICAgICAgY29uc3QgciA9IG1ha2VfcmFuZ2UoYywgTWF0aC5taW4oYmFsIC0gMSwgYyArIENIVU5LX1NJWkUpKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHIpO1xuXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGlkcyA9IGF3YWl0IFByb21pc2UuYWxsKHIubWFwKChpKSA9PlxuICAgICAgICAgICAgICAgICAgICBwdWZmZXJDb250cmFjdC5tZXRob2RzLnRva2VuT2ZPd25lckJ5SW5kZXgod2FsbGV0QWRkcmVzcywgaSkuY2FsbCgpXG4gICAgICAgICAgICAgICAgKSk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coaWRzKTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IG9ianMgPSBhd2FpdCBQcm9taXNlLmFsbChpZHMubWFwKChpZCkgPT5cbiAgICAgICAgICAgICAgICAgICAgcHVmZmVyQ29udHJhY3QubWV0aG9kcy50b2tlblVSSShOdW1iZXIucGFyc2VJbnQoaWQsIDEwKSkuY2FsbCgpXG4gICAgICAgICAgICAgICAgKSk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cob2Jqcyk7XG5cbiAgICAgICAgICAgICAgICAvLyBzd2l0Y2ggYXR0cnMgdG8gdGhpcyBvbmNlIGNvcnMgaGVhZGVycyBoYXZlIGJlZW4gcmVzb2x2ZWQgb24gZGVtb3Bvb2xzaWRlcHVmZmVycy52ZXJjZWwuYXBwXG4gICAgICAgICAgICAgICAgLy8gY29uc3QgYXR0cnMgPSBhd2FpdCBQcm9taXNlLmFsbChvYmpzLm1hcCgob2JqKSA9PlxuICAgICAgICAgICAgICAgIC8vICAgZmV0Y2gob2JqKS50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXG4gICAgICAgICAgICAgICAgLy8gKSk7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coYXR0cnMpO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgYXR0cnMgPSBhd2FpdCBQcm9taXNlLmFsbChpZHMubWFwKChpZCkgPT5cbiAgICAgICAgICAgICAgICAgICAgZmV0Y2goYC9hcGkvJHtpZH1gKS50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXG4gICAgICAgICAgICAgICAgKSk7XG5cbiAgICAgICAgICAgICAgICBzZXRQdWZmZXJDYXJkRGF0YShhdHRycyk7XG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfSwgW10pO1xuXG4gICAgcmV0dXJuICg8ZGl2IGlkPVwicHVmZmVyLXBvb2xcIiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBqdXN0aWZ5LWNlbnRlclwiPntyZW5kZXJDYXJkcygpfTwvZGl2Pik7XG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/PufferCard.js\n");

/***/ })

});