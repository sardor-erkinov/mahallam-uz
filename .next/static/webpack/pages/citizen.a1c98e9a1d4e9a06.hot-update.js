"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/citizen",{

/***/ "./src/pages/citizen.tsx":
/*!*******************************!*\
  !*** ./src/pages/citizen.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_aaa_Projects_ariza_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_aaa_Projects_ariza_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_aaa_Projects_ariza_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\nvar _this = undefined;\n\n\nvar _s = $RefreshSig$();\nvar Citizen = function() {\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), users = ref[0], setUsers = ref[1];\n    var getUsers = function() {\n        var _ref = _asyncToGenerator(_Users_aaa_Projects_ariza_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var res1;\n            return _Users_aaa_Projects_ariza_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return fetch(\"https://dummyjson.com/users/\").then(function(res) {\n                            return res.json();\n                        }).then(function(res) {\n                            setUsers(res.users);\n                        });\n                    case 2:\n                        res1 = _ctx.sent;\n                    case 3:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function getUsers() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        getUsers();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        style: {\n            width: \"100%\",\n            padding: 20,\n            display: \"flex\",\n            justifyContent: \"center\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"table\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"tr\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"th\", {\n                            style: {\n                                border: \"1px solid #dddddd\",\n                                textAlign: \"left\",\n                                padding: 8\n                            },\n                            children: \"Ismi\"\n                        }, void 0, false, {\n                            fileName: \"/Users/aaa/Projects/ariza/src/pages/citizen.tsx\",\n                            lineNumber: 18,\n                            columnNumber: 21\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"th\", {\n                            style: {\n                                border: \"1px solid #dddddd\",\n                                textAlign: \"left\",\n                                padding: 8\n                            },\n                            children: \"Familiyasi\"\n                        }, void 0, false, {\n                            fileName: \"/Users/aaa/Projects/ariza/src/pages/citizen.tsx\",\n                            lineNumber: 23,\n                            columnNumber: 21\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"th\", {\n                            style: {\n                                border: \"1px solid #dddddd\",\n                                textAlign: \"left\",\n                                padding: 8\n                            },\n                            children: \"Telefon raqami\"\n                        }, void 0, false, {\n                            fileName: \"/Users/aaa/Projects/ariza/src/pages/citizen.tsx\",\n                            lineNumber: 28,\n                            columnNumber: 21\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"th\", {\n                            style: {\n                                border: \"1px solid #dddddd\",\n                                textAlign: \"left\",\n                                padding: 8\n                            },\n                            children: \"Elektron pochtasi\"\n                        }, void 0, false, {\n                            fileName: \"/Users/aaa/Projects/ariza/src/pages/citizen.tsx\",\n                            lineNumber: 33,\n                            columnNumber: 21\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/aaa/Projects/ariza/src/pages/citizen.tsx\",\n                    lineNumber: 17,\n                    columnNumber: 17\n                }, _this),\n                users === null || users === void 0 ? void 0 : users.map(function(user) {\n                    /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"tr\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"td\", {\n                                style: {\n                                    border: \"1px solid #dddddd\",\n                                    textAlign: \"left\",\n                                    padding: 8\n                                },\n                                children: user === null || user === void 0 ? void 0 : user.firstName\n                            }, void 0, false, {\n                                fileName: \"/Users/aaa/Projects/ariza/src/pages/citizen.tsx\",\n                                lineNumber: 40,\n                                columnNumber: 21\n                            }, _this1),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"td\", {\n                                style: {\n                                    border: \"1px solid #dddddd\",\n                                    textAlign: \"left\",\n                                    padding: 8\n                                },\n                                children: user === null || user === void 0 ? void 0 : user.firstName\n                            }, void 0, false, {\n                                fileName: \"/Users/aaa/Projects/ariza/src/pages/citizen.tsx\",\n                                lineNumber: 45,\n                                columnNumber: 21\n                            }, _this1),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"td\", {\n                                style: {\n                                    border: \"1px solid #dddddd\",\n                                    textAlign: \"left\",\n                                    padding: 8\n                                },\n                                children: \"Germany\"\n                            }, void 0, false, {\n                                fileName: \"/Users/aaa/Projects/ariza/src/pages/citizen.tsx\",\n                                lineNumber: 50,\n                                columnNumber: 21\n                            }, _this1)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/aaa/Projects/ariza/src/pages/citizen.tsx\",\n                        lineNumber: 39,\n                        columnNumber: 44\n                    }, _this1);\n                })\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/aaa/Projects/ariza/src/pages/citizen.tsx\",\n            lineNumber: 16,\n            columnNumber: 13\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/aaa/Projects/ariza/src/pages/citizen.tsx\",\n        lineNumber: 15,\n        columnNumber: 9\n    }, _this);\n};\n_s(Citizen, \"0R7l53CiwQu7ziyMeHtgYF+Ya+E=\");\n_c = Citizen;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Citizen);\nvar _c;\n$RefreshReg$(_c, \"Citizen\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SyxFQUFFO29DQUNQUSxNQUFNLEVBQUUsbUJBQW1CO29DQUMzQkMsU0FBUyxFQUFFLE1BQU07b0NBQ2pCUCxPQUFPLEVBQUUsQ0FBQztpQ0FDYjswQ0FBRSxTQUFPOzs7OztzQ0FBSzs7Ozs7OzhCQUNkO2lCQUFBLENBQUM7Ozs7OztpQkFDRjs7Ozs7YUFDTixDQUNUO0NBQ0o7R0F2REtYLE9BQU87QUFBUEEsS0FBQUEsT0FBTztBQXdEYiwrREFBZUEsT0FBTyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvY2l0aXplbi50c3g/NzVjNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcblxuXG5jb25zdCBDaXRpemVuID0gKCkgPT4ge1xuICAgIGNvbnN0IFt1c2Vycywgc2V0VXNlcnNdID0gdXNlU3RhdGUoW10pXG4gICAgY29uc3QgZ2V0VXNlcnMgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwczovL2R1bW15anNvbi5jb20vdXNlcnMvJylcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHsgc2V0VXNlcnMocmVzLnVzZXJzKSB9KTtcbiAgICB9XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgZ2V0VXNlcnMoKVxuICAgIH0sIFtdKVxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJywgcGFkZGluZzogMjAsIGRpc3BsYXk6ICdmbGV4JywganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInIH19PlxuICAgICAgICAgICAgPHRhYmxlPlxuICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6ICcxcHggc29saWQgI2RkZGRkZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246ICdsZWZ0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDhcbiAgICAgICAgICAgICAgICAgICAgfX0+SXNtaTwvdGg+XG4gICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAnMXB4IHNvbGlkICNkZGRkZGQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiAnbGVmdCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA4XG4gICAgICAgICAgICAgICAgICAgIH19PkZhbWlsaXlhc2k8L3RoPlxuICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogJzFweCBzb2xpZCAjZGRkZGRkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogJ2xlZnQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogOFxuICAgICAgICAgICAgICAgICAgICB9fT5UZWxlZm9uIHJhcWFtaTwvdGg+XG4gICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAnMXB4IHNvbGlkICNkZGRkZGQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiAnbGVmdCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA4XG4gICAgICAgICAgICAgICAgICAgIH19PkVsZWt0cm9uIHBvY2h0YXNpPC90aD5cbiAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgIHt1c2Vycz8ubWFwKCh1c2VyOiBhbnkpID0+IDx0cj5cbiAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6ICcxcHggc29saWQgI2RkZGRkZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246ICdsZWZ0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDhcbiAgICAgICAgICAgICAgICAgICAgfX0+e3VzZXI/LmZpcnN0TmFtZX08L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogJzFweCBzb2xpZCAjZGRkZGRkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogJ2xlZnQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogOFxuICAgICAgICAgICAgICAgICAgICB9fT57dXNlcj8uZmlyc3ROYW1lfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAnMXB4IHNvbGlkICNkZGRkZGQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiAnbGVmdCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA4XG4gICAgICAgICAgICAgICAgICAgIH19Pkdlcm1hbnk8L3RkPlxuICAgICAgICAgICAgICAgIDwvdHI+KX1cbiAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cbmV4cG9ydCBkZWZhdWx0IENpdGl6ZW4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJDaXRpemVuIiwidXNlcnMiLCJzZXRVc2VycyIsImdldFVzZXJzIiwicmVzIiwiZmV0Y2giLCJ0aGVuIiwianNvbiIsImRpdiIsInN0eWxlIiwid2lkdGgiLCJwYWRkaW5nIiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwidGFibGUiLCJ0ciIsInRoIiwiYm9yZGVyIiwidGV4dEFsaWduIiwibWFwIiwidXNlciIsInRkIiwiZmlyc3ROYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/citizen.tsx\n");

/***/ })

});