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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ Comments; }\n/* harmony export */ });\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ \"./node_modules/bootstrap/dist/css/bootstrap.min.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _braintree_sanitize_url__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @braintree/sanitize-url */ \"./node_modules/@braintree/sanitize-url/dist/index.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/danils/Desktop/JS Evening/apps/stored-xss/next/pages/for_screenshot.tsx\";\n\n\nvar useState = (react__WEBPACK_IMPORTED_MODULE_1___default().useState);\n\n\nvar __N_SSP = true;\nfunction Comments(_ref) {\n  var _this = this;\n\n  var comments = _ref.comments;\n  var safeComment = (0,_braintree_sanitize_url__WEBPACK_IMPORTED_MODULE_2__.sanitizeUrl)(comments[0].author_page);\n  console.log(comments[0].author_page);\n  console.log(safeComment);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"ul\", {\n    children: comments.map(function (comment) {\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"li\", {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"h2\", {\n          children: comment.name\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 18,\n          columnNumber: 21\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"p\", {\n          children: comment.text\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 19,\n          columnNumber: 21\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"a\", {\n          href: comment.author_page,\n          children: comment.author_page\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 20,\n          columnNumber: 21\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 17,\n        columnNumber: 17\n      }, _this);\n    })\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 15,\n    columnNumber: 9\n  }, this);\n}\n_c = Comments;\n\nvar _c;\n\n$RefreshReg$(_c, \"Comments\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9mb3Jfc2NyZWVuc2hvdC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFFQTtBQUNBO0FBRUEsSUFBT0MsUUFBUCxHQUFtQkQsdURBQW5CO0FBQ0E7OztBQUdlLFNBQVNHLFFBQVQsT0FBOEI7QUFBQTs7QUFBQSxNQUFYQyxRQUFXLFFBQVhBLFFBQVc7QUFDekMsTUFBTUMsV0FBVyxHQUFHSCxvRUFBVyxDQUFDRSxRQUFRLENBQUMsQ0FBRCxDQUFSLENBQVlFLFdBQWIsQ0FBL0I7QUFDQUMsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlKLFFBQVEsQ0FBQyxDQUFELENBQVIsQ0FBWUUsV0FBeEI7QUFDQUMsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlILFdBQVo7QUFDQSxzQkFDSTtBQUFBLGNBQ0tELFFBQVEsQ0FBQ0ssR0FBVCxDQUFhLFVBQUNDLE9BQUQ7QUFBQSwwQkFDVjtBQUFBLGdDQUNJO0FBQUEsb0JBQUtBLE9BQU8sQ0FBQ0M7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKLGVBRUk7QUFBQSxvQkFBSUQsT0FBTyxDQUFDRTtBQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkosZUFHSTtBQUFHLGNBQUksRUFBRUYsT0FBTyxDQUFDSixXQUFqQjtBQUFBLG9CQUErQkksT0FBTyxDQUFDSjtBQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURVO0FBQUEsS0FBYjtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQVdIO0tBZnVCSCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9mb3Jfc2NyZWVuc2hvdC50c3g/ZjJhOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2Nvbm5lY3RUb0RhdGFiYXNlfSBmcm9tIFwiLi4vdXRpbHMvbW9uZ29kYlwiO1xuaW1wb3J0IHtDb250YWluZXIsIExpc3RHcm91cCwgQ2FyZCwgRm9ybSwgQnV0dG9uLCBDb2xsYXBzZSwgU3Bpbm5lcn0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcbmltcG9ydCAnYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzJztcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuY29uc3Qge3VzZVN0YXRlfSA9IFJlYWN0O1xuaW1wb3J0IHtzYW5pdGl6ZVVybH0gZnJvbSAnQGJyYWludHJlZS9zYW5pdGl6ZS11cmwnO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbW1lbnRzKHtjb21tZW50c30pIHtcbiAgICBjb25zdCBzYWZlQ29tbWVudCA9IHNhbml0aXplVXJsKGNvbW1lbnRzWzBdLmF1dGhvcl9wYWdlKTtcbiAgICBjb25zb2xlLmxvZyhjb21tZW50c1swXS5hdXRob3JfcGFnZSk7XG4gICAgY29uc29sZS5sb2coc2FmZUNvbW1lbnQpO1xuICAgIHJldHVybiAoXG4gICAgICAgIDx1bD5cbiAgICAgICAgICAgIHtjb21tZW50cy5tYXAoKGNvbW1lbnQpID0+IChcbiAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgIDxoMj57Y29tbWVudC5uYW1lfTwvaDI+XG4gICAgICAgICAgICAgICAgICAgIDxwPntjb21tZW50LnRleHR9PC9wPlxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtjb21tZW50LmF1dGhvcl9wYWdlfT57Y29tbWVudC5hdXRob3JfcGFnZX08L2E+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICkpfVxuICAgICAgICA8L3VsPlxuICAgICk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoKSB7XG4gICAgY29uc3Qge2RifSA9IGF3YWl0IGNvbm5lY3RUb0RhdGFiYXNlKCk7XG4gICAgY29uc3QgY29tbWVudHMgPSBhd2FpdCBkYi5jb2xsZWN0aW9uKFwiZF9jb21tZW50c1wiKS5maW5kKHt9KS50b0FycmF5KCk7XG4gICAgcmV0dXJuIHtwcm9wczoge2NvbW1lbnRzOiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGNvbW1lbnRzKSl9fTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwic2FuaXRpemVVcmwiLCJDb21tZW50cyIsImNvbW1lbnRzIiwic2FmZUNvbW1lbnQiLCJhdXRob3JfcGFnZSIsImNvbnNvbGUiLCJsb2ciLCJtYXAiLCJjb21tZW50IiwibmFtZSIsInRleHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/for_screenshot.tsx\n");

/***/ })

});