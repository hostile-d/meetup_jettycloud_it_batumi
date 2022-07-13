/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/for_screenshot";
exports.ids = ["pages/for_screenshot"];
exports.modules = {

/***/ "./pages/for_screenshot.tsx":
/*!**********************************!*\
  !*** ./pages/for_screenshot.tsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Comments),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var _utils_mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/mongodb */ \"./utils/mongodb.js\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ \"./node_modules/bootstrap/dist/css/bootstrap.min.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _braintree_sanitize_url__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @braintree/sanitize-url */ \"@braintree/sanitize-url\");\n/* harmony import */ var _braintree_sanitize_url__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_braintree_sanitize_url__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);\nvar _jsxFileName = \"/Users/danils/Desktop/JS Evening/apps/stored-xss/next/pages/for_screenshot.tsx\";\n\n\n\nconst {\n  useState\n} = (react__WEBPACK_IMPORTED_MODULE_2___default());\n\n\nfunction Comments({\n  comments\n}) {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"ul\", {\n    children: comments.map(comment => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"li\", {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"h2\", {\n        children: comment.name\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 15,\n        columnNumber: 21\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"p\", {\n        children: comment.text\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 16,\n        columnNumber: 21\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"a\", {\n        href: (0,_braintree_sanitize_url__WEBPACK_IMPORTED_MODULE_3__.sanitizeUrl)(comment.author_page),\n        children: \"My website\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 17,\n        columnNumber: 21\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 17\n    }, this))\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 12,\n    columnNumber: 9\n  }, this);\n}\nasync function getServerSideProps() {\n  const {\n    db\n  } = await (0,_utils_mongodb__WEBPACK_IMPORTED_MODULE_0__.connectToDatabase)();\n  const comments = await db.collection(\"d_comments\").find({}).toArray();\n  return {\n    props: {\n      comments: JSON.parse(JSON.stringify(comments))\n    }\n  };\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9mb3Jfc2NyZWVuc2hvdC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBRUEsTUFBTTtBQUFDRSxFQUFBQTtBQUFELElBQWFELDhDQUFuQjtBQUVBOztBQUVlLFNBQVNHLFFBQVQsQ0FBa0I7QUFBQ0MsRUFBQUE7QUFBRCxDQUFsQixFQUE4QjtBQUN6QyxzQkFDSTtBQUFBLGNBQ0tBLFFBQVEsQ0FBQ0MsR0FBVCxDQUFjQyxPQUFELGlCQUNWO0FBQUEsOEJBQ0k7QUFBQSxrQkFBS0EsT0FBTyxDQUFDQztBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixlQUVJO0FBQUEsa0JBQUlELE9BQU8sQ0FBQ0U7QUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkosZUFHSTtBQUFHLFlBQUksRUFBRU4sb0VBQVcsQ0FBQ0ksT0FBTyxDQUFDRyxXQUFULENBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREg7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFXSDtBQUVNLGVBQWVDLGtCQUFmLEdBQW9DO0FBQ3ZDLFFBQU07QUFBQ0MsSUFBQUE7QUFBRCxNQUFPLE1BQU1aLGlFQUFpQixFQUFwQztBQUNBLFFBQU1LLFFBQVEsR0FBRyxNQUFNTyxFQUFFLENBQUNDLFVBQUgsQ0FBYyxZQUFkLEVBQTRCQyxJQUE1QixDQUFpQyxFQUFqQyxFQUFxQ0MsT0FBckMsRUFBdkI7QUFDQSxTQUFPO0FBQUNDLElBQUFBLEtBQUssRUFBRTtBQUFDWCxNQUFBQSxRQUFRLEVBQUVZLElBQUksQ0FBQ0MsS0FBTCxDQUFXRCxJQUFJLENBQUNFLFNBQUwsQ0FBZWQsUUFBZixDQUFYO0FBQVg7QUFBUixHQUFQO0FBQ0giLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9mb3Jfc2NyZWVuc2hvdC50c3g/ZjJhOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2Nvbm5lY3RUb0RhdGFiYXNlfSBmcm9tIFwiLi4vdXRpbHMvbW9uZ29kYlwiO1xuaW1wb3J0IHtDb250YWluZXIsIExpc3RHcm91cCwgQ2FyZCwgRm9ybSwgQnV0dG9uLCBDb2xsYXBzZSwgU3Bpbm5lcn0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcbmltcG9ydCAnYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzJztcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuY29uc3Qge3VzZVN0YXRlfSA9IFJlYWN0O1xuXG5pbXBvcnQge3Nhbml0aXplVXJsfSBmcm9tICdAYnJhaW50cmVlL3Nhbml0aXplLXVybCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbW1lbnRzKHtjb21tZW50c30pIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8dWw+XG4gICAgICAgICAgICB7Y29tbWVudHMubWFwKChjb21tZW50KSA9PiAoXG4gICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICA8aDI+e2NvbW1lbnQubmFtZX08L2gyPlxuICAgICAgICAgICAgICAgICAgICA8cD57Y29tbWVudC50ZXh0fTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17c2FuaXRpemVVcmwoY29tbWVudC5hdXRob3JfcGFnZSl9Pk15IHdlYnNpdGU8L2E+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICkpfVxuICAgICAgICA8L3VsPlxuICAgICk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoKSB7XG4gICAgY29uc3Qge2RifSA9IGF3YWl0IGNvbm5lY3RUb0RhdGFiYXNlKCk7XG4gICAgY29uc3QgY29tbWVudHMgPSBhd2FpdCBkYi5jb2xsZWN0aW9uKFwiZF9jb21tZW50c1wiKS5maW5kKHt9KS50b0FycmF5KCk7XG4gICAgcmV0dXJuIHtwcm9wczoge2NvbW1lbnRzOiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGNvbW1lbnRzKSl9fTtcbn1cbiJdLCJuYW1lcyI6WyJjb25uZWN0VG9EYXRhYmFzZSIsIlJlYWN0IiwidXNlU3RhdGUiLCJzYW5pdGl6ZVVybCIsIkNvbW1lbnRzIiwiY29tbWVudHMiLCJtYXAiLCJjb21tZW50IiwibmFtZSIsInRleHQiLCJhdXRob3JfcGFnZSIsImdldFNlcnZlclNpZGVQcm9wcyIsImRiIiwiY29sbGVjdGlvbiIsImZpbmQiLCJ0b0FycmF5IiwicHJvcHMiLCJKU09OIiwicGFyc2UiLCJzdHJpbmdpZnkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/for_screenshot.tsx\n");

/***/ }),

/***/ "./utils/mongodb.js":
/*!**************************!*\
  !*** ./utils/mongodb.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"connectToDatabase\": () => (/* binding */ connectToDatabase)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\nlet uri = process.env.MONGODB_URI;\nlet dbName = process.env.MONGODB_DB;\nlet cachedClient = null;\nlet cachedDb = null;\n\nif (!uri) {\n  throw new Error('Please define the MONGODB_URI environment variable inside .env.local');\n}\n\nif (!dbName) {\n  throw new Error('Please define the MONGODB_DB environment variable inside .env.local');\n}\n\nasync function connectToDatabase() {\n  if (cachedClient && cachedDb) {\n    return {\n      client: cachedClient,\n      db: cachedDb\n    };\n  }\n\n  const client = await mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient.connect(uri, {\n    useNewUrlParser: true,\n    useUnifiedTopology: true\n  });\n  const db = await client.db(dbName);\n  cachedClient = client;\n  cachedDb = db;\n  return {\n    client,\n    db\n  };\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlscy9tb25nb2RiLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBRUEsSUFBSUMsR0FBRyxHQUFHQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsV0FBdEI7QUFDQSxJQUFJQyxNQUFNLEdBQUdILE9BQU8sQ0FBQ0MsR0FBUixDQUFZRyxVQUF6QjtBQUVBLElBQUlDLFlBQVksR0FBRyxJQUFuQjtBQUNBLElBQUlDLFFBQVEsR0FBRyxJQUFmOztBQUVBLElBQUksQ0FBQ1AsR0FBTCxFQUFVO0FBQ04sUUFBTSxJQUFJUSxLQUFKLENBQ0Ysc0VBREUsQ0FBTjtBQUdIOztBQUVELElBQUksQ0FBQ0osTUFBTCxFQUFhO0FBQ1QsUUFBTSxJQUFJSSxLQUFKLENBQ0YscUVBREUsQ0FBTjtBQUdIOztBQUVNLGVBQWVDLGlCQUFmLEdBQW1DO0FBQ3RDLE1BQUlILFlBQVksSUFBSUMsUUFBcEIsRUFBOEI7QUFDMUIsV0FBTztBQUFFRyxNQUFBQSxNQUFNLEVBQUVKLFlBQVY7QUFBd0JLLE1BQUFBLEVBQUUsRUFBRUo7QUFBNUIsS0FBUDtBQUNIOztBQUVELFFBQU1HLE1BQU0sR0FBRyxNQUFNWCx3REFBQSxDQUFvQkMsR0FBcEIsRUFBeUI7QUFDMUNhLElBQUFBLGVBQWUsRUFBRSxJQUR5QjtBQUUxQ0MsSUFBQUEsa0JBQWtCLEVBQUU7QUFGc0IsR0FBekIsQ0FBckI7QUFLQSxRQUFNSCxFQUFFLEdBQUcsTUFBTUQsTUFBTSxDQUFDQyxFQUFQLENBQVVQLE1BQVYsQ0FBakI7QUFFQUUsRUFBQUEsWUFBWSxHQUFHSSxNQUFmO0FBQ0FILEVBQUFBLFFBQVEsR0FBR0ksRUFBWDtBQUVBLFNBQU87QUFBRUQsSUFBQUEsTUFBRjtBQUFVQyxJQUFBQTtBQUFWLEdBQVA7QUFDSCIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3V0aWxzL21vbmdvZGIuanM/YThkNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb25nb0NsaWVudCB9IGZyb20gJ21vbmdvZGInXG5cbmxldCB1cmkgPSBwcm9jZXNzLmVudi5NT05HT0RCX1VSSVxubGV0IGRiTmFtZSA9IHByb2Nlc3MuZW52Lk1PTkdPREJfREJcblxubGV0IGNhY2hlZENsaWVudCA9IG51bGxcbmxldCBjYWNoZWREYiA9IG51bGxcblxuaWYgKCF1cmkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICdQbGVhc2UgZGVmaW5lIHRoZSBNT05HT0RCX1VSSSBlbnZpcm9ubWVudCB2YXJpYWJsZSBpbnNpZGUgLmVudi5sb2NhbCdcbiAgICApXG59XG5cbmlmICghZGJOYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAnUGxlYXNlIGRlZmluZSB0aGUgTU9OR09EQl9EQiBlbnZpcm9ubWVudCB2YXJpYWJsZSBpbnNpZGUgLmVudi5sb2NhbCdcbiAgICApXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjb25uZWN0VG9EYXRhYmFzZSgpIHtcbiAgICBpZiAoY2FjaGVkQ2xpZW50ICYmIGNhY2hlZERiKSB7XG4gICAgICAgIHJldHVybiB7IGNsaWVudDogY2FjaGVkQ2xpZW50LCBkYjogY2FjaGVkRGIgfVxuICAgIH1cblxuICAgIGNvbnN0IGNsaWVudCA9IGF3YWl0IE1vbmdvQ2xpZW50LmNvbm5lY3QodXJpLCB7XG4gICAgICAgIHVzZU5ld1VybFBhcnNlcjogdHJ1ZSxcbiAgICAgICAgdXNlVW5pZmllZFRvcG9sb2d5OiB0cnVlLFxuICAgIH0pXG5cbiAgICBjb25zdCBkYiA9IGF3YWl0IGNsaWVudC5kYihkYk5hbWUpXG5cbiAgICBjYWNoZWRDbGllbnQgPSBjbGllbnRcbiAgICBjYWNoZWREYiA9IGRiXG5cbiAgICByZXR1cm4geyBjbGllbnQsIGRiIH1cbn1cbiJdLCJuYW1lcyI6WyJNb25nb0NsaWVudCIsInVyaSIsInByb2Nlc3MiLCJlbnYiLCJNT05HT0RCX1VSSSIsImRiTmFtZSIsIk1PTkdPREJfREIiLCJjYWNoZWRDbGllbnQiLCJjYWNoZWREYiIsIkVycm9yIiwiY29ubmVjdFRvRGF0YWJhc2UiLCJjbGllbnQiLCJkYiIsImNvbm5lY3QiLCJ1c2VOZXdVcmxQYXJzZXIiLCJ1c2VVbmlmaWVkVG9wb2xvZ3kiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./utils/mongodb.js\n");

/***/ }),

/***/ "./node_modules/bootstrap/dist/css/bootstrap.min.css":
/*!***********************************************************!*\
  !*** ./node_modules/bootstrap/dist/css/bootstrap.min.css ***!
  \***********************************************************/
/***/ (() => {



/***/ }),

/***/ "@braintree/sanitize-url":
/*!******************************************!*\
  !*** external "@braintree/sanitize-url" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@braintree/sanitize-url");

/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("mongodb");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/for_screenshot.tsx"));
module.exports = __webpack_exports__;

})();