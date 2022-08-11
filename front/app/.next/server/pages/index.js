"use strict";
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
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst Home = (props)=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"POSTの一覧\"\n            }, void 0, false, {\n                fileName: \"/usr/src/app/pages/index.tsx\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: props.posts.map((post)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: [\n                            post.id,\n                            \".\",\n                            post.title\n                        ]\n                    }, post.id, true, {\n                        fileName: \"/usr/src/app/pages/index.tsx\",\n                        lineNumber: 19,\n                        columnNumber: 11\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/usr/src/app/pages/index.tsx\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/usr/src/app/pages/index.tsx\",\n        lineNumber: 15,\n        columnNumber: 5\n    }, undefined);\n};\nconst getStaticProps = async (context)=>{\n    // console.log(context);\n    const response = await fetch(\"http://api:3000/posts\", {\n        method: \"GET\"\n    });\n    const json = await response.json();\n    return {\n        props: {\n            posts: json\n        }\n    };\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFBa0M7QUFZbEMsTUFBTUMsSUFBSSxHQUFjLENBQUNDLEtBQUssR0FBSztJQUNqQyxxQkFDRSw4REFBQ0MsS0FBRzs7MEJBQ0YsOERBQUNDLElBQUU7MEJBQUMsU0FBTzs7Ozs7eUJBQUs7MEJBQ2hCLDhEQUFDQyxJQUFFOzBCQUNBSCxLQUFLLENBQUNJLEtBQUssQ0FBQ0MsR0FBRyxDQUFDLENBQUNDLElBQUksaUJBQ3BCLDhEQUFDQyxJQUFFOzs0QkFDQUQsSUFBSSxDQUFDRSxFQUFFOzRCQUFDLEdBQUM7NEJBQUNGLElBQUksQ0FBQ0csS0FBSzs7dUJBRGRILElBQUksQ0FBQ0UsRUFBRTs7OztpQ0FFWCxDQUNMOzs7Ozt5QkFDQzs7Ozs7O2lCQUNELENBQ047Q0FDSDtBQUVNLE1BQU1FLGNBQWMsR0FBbUIsT0FBT0MsT0FBTyxHQUFLO0lBQy9ELHdCQUF3QjtJQUN4QixNQUFNQyxRQUFRLEdBQUcsTUFBTUMsS0FBSyxDQUFDLHVCQUF1QixFQUFFO1FBQUVDLE1BQU0sRUFBRSxLQUFLO0tBQUUsQ0FBQztJQUN4RSxNQUFNQyxJQUFJLEdBQUcsTUFBTUgsUUFBUSxDQUFDRyxJQUFJLEVBQUU7SUFFbEMsT0FBTztRQUNMZixLQUFLLEVBQUU7WUFDTEksS0FBSyxFQUFFVyxJQUFJO1NBQ1o7S0FDRixDQUFDO0NBQ0gsQ0FBQztBQUVGLGlFQUFlaEIsSUFBSSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYXBwLy4vcGFnZXMvaW5kZXgudHN4PzA3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZDIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBHZXRTdGF0aWNQcm9wcyB9IGZyb20gXCJuZXh0XCI7XG5cbnR5cGUgUG9zdCA9IHtcbiAgaWQ6IG51bWJlcjtcbiAgdGl0bGU6IHN0cmluZztcbn07XG5cbnR5cGUgUHJvcHMgPSB7XG4gIHBvc3RzOiBQb3N0W107XG59O1xuXG5jb25zdCBIb21lOiBGQzxQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGgyPlBPU1Tjga7kuIDopqc8L2gyPlxuICAgICAgPHVsPlxuICAgICAgICB7cHJvcHMucG9zdHMubWFwKChwb3N0KSA9PiAoXG4gICAgICAgICAgPGxpIGtleT17cG9zdC5pZH0+XG4gICAgICAgICAgICB7cG9zdC5pZH0ue3Bvc3QudGl0bGV9XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgKSl9XG4gICAgICA8L3VsPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzOiBHZXRTdGF0aWNQcm9wcyA9IGFzeW5jIChjb250ZXh0KSA9PiB7XG4gIC8vIGNvbnNvbGUubG9nKGNvbnRleHQpO1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiaHR0cDovL2FwaTozMDAwL3Bvc3RzXCIsIHsgbWV0aG9kOiBcIkdFVFwiIH0pO1xuICBjb25zdCBqc29uID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIHBvc3RzOiBqc29uLFxuICAgIH0sXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiSG9tZSIsInByb3BzIiwiZGl2IiwiaDIiLCJ1bCIsInBvc3RzIiwibWFwIiwicG9zdCIsImxpIiwiaWQiLCJ0aXRsZSIsImdldFN0YXRpY1Byb3BzIiwiY29udGV4dCIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJqc29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.tsx"));
module.exports = __webpack_exports__;

})();