"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/for_screenshot",{

/***/ "./pages/for_screenshot.tsx":
/*!**********************************!*\
  !*** ./pages/for_screenshot.tsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ Comments; }\n/* harmony export */ });\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ \"./node_modules/bootstrap/dist/css/bootstrap.min.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _braintree_sanitize_url__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @braintree/sanitize-url */ \"./node_modules/@braintree/sanitize-url/dist/index.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/danils/Desktop/JS Evening/apps/stored-xss/next/pages/for_screenshot.tsx\";\n\n\nvar useState = (react__WEBPACK_IMPORTED_MODULE_1___default().useState);\n\n\nvar __N_SSP = true;\nfunction Comments(_ref) {\n  var _this = this;\n\n  var comments = _ref.comments;\n  var myFunction = \"console.log(1)\";\n  var func = new Function(myFunction);\n  func();\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"ul\", {\n    children: comments.map(function (comment) {\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"li\", {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"h2\", {\n          children: comment.name\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 18,\n          columnNumber: 21\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"p\", {\n          children: comment.text\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 19,\n          columnNumber: 21\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"a\", {\n          href: (0,_braintree_sanitize_url__WEBPACK_IMPORTED_MODULE_2__.sanitizeUrl)(comment.author_page),\n          children: \"My website\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 20,\n          columnNumber: 21\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 17,\n        columnNumber: 17\n      }, _this);\n    })\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 15,\n    columnNumber: 9\n  }, this);\n}\n_c = Comments;\n\nvar _c;\n\n$RefreshReg$(_c, \"Comments\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9mb3Jfc2NyZWVuc2hvdC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFFQTtBQUNBO0FBRUEsSUFBT0MsUUFBUCxHQUFtQkQsdURBQW5CO0FBRUE7OztBQUVlLFNBQVNHLFFBQVQsT0FBOEI7QUFBQTs7QUFBQSxNQUFYQyxRQUFXLFFBQVhBLFFBQVc7QUFDekMsTUFBTUMsVUFBVSxtQkFBaEI7QUFDQSxNQUFNQyxJQUFJLEdBQUcsSUFBSUMsUUFBSixDQUFhRixVQUFiLENBQWI7QUFDQUMsRUFBQUEsSUFBSTtBQUNKLHNCQUNJO0FBQUEsY0FDS0YsUUFBUSxDQUFDSSxHQUFULENBQWEsVUFBQ0MsT0FBRDtBQUFBLDBCQUNWO0FBQUEsZ0NBQ0k7QUFBQSxvQkFBS0EsT0FBTyxDQUFDQztBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREosZUFFSTtBQUFBLG9CQUFJRCxPQUFPLENBQUNFO0FBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGSixlQUdJO0FBQUcsY0FBSSxFQUFFVCxvRUFBVyxDQUFDTyxPQUFPLENBQUNHLFdBQVQsQ0FBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRFU7QUFBQSxLQUFiO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBV0g7S0FmdUJUIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2Zvcl9zY3JlZW5zaG90LnRzeD9mMmE5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Y29ubmVjdFRvRGF0YWJhc2V9IGZyb20gXCIuLi91dGlscy9tb25nb2RiXCI7XG5pbXBvcnQge0NvbnRhaW5lciwgTGlzdEdyb3VwLCBDYXJkLCBGb3JtLCBCdXR0b24sIENvbGxhcHNlLCBTcGlubmVyfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xuaW1wb3J0ICdib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3MnO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCB7dXNlU3RhdGV9ID0gUmVhY3Q7XG5cbmltcG9ydCB7c2FuaXRpemVVcmx9IGZyb20gJ0BicmFpbnRyZWUvc2FuaXRpemUtdXJsJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29tbWVudHMoe2NvbW1lbnRzfSkge1xuICAgIGNvbnN0IG15RnVuY3Rpb24gPSBgY29uc29sZS5sb2coMSlgO1xuICAgIGNvbnN0IGZ1bmMgPSBuZXcgRnVuY3Rpb24obXlGdW5jdGlvbik7XG4gICAgZnVuYygpO1xuICAgIHJldHVybiAoXG4gICAgICAgIDx1bD5cbiAgICAgICAgICAgIHtjb21tZW50cy5tYXAoKGNvbW1lbnQpID0+IChcbiAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgIDxoMj57Y29tbWVudC5uYW1lfTwvaDI+XG4gICAgICAgICAgICAgICAgICAgIDxwPntjb21tZW50LnRleHR9PC9wPlxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtzYW5pdGl6ZVVybChjb21tZW50LmF1dGhvcl9wYWdlKX0+TXkgd2Vic2l0ZTwvYT5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgIDwvdWw+XG4gICAgKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcygpIHtcbiAgICBjb25zdCB7ZGJ9ID0gYXdhaXQgY29ubmVjdFRvRGF0YWJhc2UoKTtcbiAgICBjb25zdCBjb21tZW50cyA9IGF3YWl0IGRiLmNvbGxlY3Rpb24oXCJkX2NvbW1lbnRzXCIpLmZpbmQoe30pLnRvQXJyYXkoKTtcbiAgICByZXR1cm4ge3Byb3BzOiB7Y29tbWVudHM6IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoY29tbWVudHMpKX19O1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJzYW5pdGl6ZVVybCIsIkNvbW1lbnRzIiwiY29tbWVudHMiLCJteUZ1bmN0aW9uIiwiZnVuYyIsIkZ1bmN0aW9uIiwibWFwIiwiY29tbWVudCIsIm5hbWUiLCJ0ZXh0IiwiYXV0aG9yX3BhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/for_screenshot.tsx\n");

/***/ })

});