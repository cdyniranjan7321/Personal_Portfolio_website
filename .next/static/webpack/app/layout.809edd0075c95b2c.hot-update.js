"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-client)/./lib/data.ts":
/*!*********************!*\
  !*** ./lib/data.ts ***!
  \*********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   experiencesData: function() { return /* binding */ experiencesData; },\n/* harmony export */   links: function() { return /* binding */ links; },\n/* harmony export */   projectsData: function() { return /* binding */ projectsData; },\n/* harmony export */   skillsData: function() { return /* binding */ skillsData; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react-experimental/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_icons_cg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/cg */ \"(app-client)/./node_modules/react-icons/cg/index.esm.js\");\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/fa */ \"(app-client)/./node_modules/react-icons/fa/index.esm.js\");\n/* harmony import */ var react_icons_lu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/lu */ \"(app-client)/./node_modules/react-icons/lu/index.esm.js\");\n/* harmony import */ var _public_corpcomment_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/public/corpcomment.png */ \"(app-client)/./public/corpcomment.png\");\n/* harmony import */ var _public_rmtdev_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/public/rmtdev.png */ \"(app-client)/./public/rmtdev.png\");\n/* harmony import */ var _public_wordanalytics_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/public/wordanalytics.png */ \"(app-client)/./public/wordanalytics.png\");\n\n\n\n\n\n\n\nconst links = [\n    {\n        name: \"Home\",\n        hash: \"#home\"\n    },\n    {\n        name: \"About\",\n        hash: \"#about\"\n    },\n    {\n        name: \"Projects\",\n        hash: \"#projects\"\n    },\n    {\n        name: \"Skills\",\n        hash: \"#skills\"\n    },\n    {\n        name: \"Experience\",\n        hash: \"#experience\"\n    },\n    {\n        name: \"Contact\",\n        hash: \"#contact\"\n    }\n];\nconst experiencesData = [\n    {\n        title: \"Graduated bootcamp\",\n        location: \"Miami, FL\",\n        description: \"I graduated after 6 months of studying. I immediately found a job as a front-end developer.\",\n        icon: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_lu__WEBPACK_IMPORTED_MODULE_4__.LuGraduationCap),\n        date: \"2019\"\n    },\n    {\n        title: \" Full-Stack Developer\",\n        location: \"Orlando, FL\",\n        description: \"I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.\",\n        icon: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_cg__WEBPACK_IMPORTED_MODULE_5__.CgWorkAlt),\n        date: \"2023 - 2024\"\n    },\n    {\n        title: \"Front-End Developer\",\n        location: \"Houston, TX\",\n        description: \"I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.\",\n        icon: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_6__.FaReact),\n        date: \"2024 - present\"\n    }\n];\nconst projectsData = [\n    {\n        title: \"CorpComment\",\n        description: \"I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.\",\n        tags: [\n            \"React\",\n            \"Next.js\",\n            \"MongoDB\",\n            \"Tailwind\",\n            \"Prisma\"\n        ],\n        imageUrl: _public_corpcomment_png__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n    },\n    {\n        title: \"rmtDev\",\n        description: \"Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.\",\n        tags: [\n            \"React\",\n            \"TypeScript\",\n            \"Next.js\",\n            \"Tailwind\",\n            \"Redux\"\n        ],\n        imageUrl: _public_rmtdev_png__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n    },\n    {\n        title: \"Word Analytics\",\n        description: \"A public web app for quick analytics on text. It shows word count, character count and social media post limits.\",\n        tags: [\n            \"React\",\n            \"Next.js\",\n            \"SQL\",\n            \"Tailwind\",\n            \"Framer\"\n        ],\n        imageUrl: _public_wordanalytics_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n    }\n];\nconst skillsData = [\n    \"HTML\",\n    \"CSS\",\n    \"JavaScript\",\n    \"TypeScript\",\n    \"React\",\n    \"Next.js\",\n    \"Node.js\",\n    \"Git\",\n    \"Tailwind\",\n    \"Prisma\",\n    \"MongoDB\",\n    \"Redux\",\n    \"GraphQL\",\n    \"Apollo\",\n    \"Express\",\n    \"PostgreSQL\",\n    \"Python\",\n    \"Django\",\n    \"Framer Motion\"\n];\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vbGliL2RhdGEudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQTBCO0FBQ2lCO0FBQ0Y7QUFDUTtBQUNLO0FBQ1Y7QUFDYztBQUVuRCxNQUFNTyxRQUFRO0lBQ25CO1FBQ0VDLE1BQU07UUFDTkMsTUFBTTtJQUNSO0lBQ0E7UUFDRUQsTUFBTTtRQUNOQyxNQUFNO0lBQ1I7SUFDQTtRQUNFRCxNQUFNO1FBQ05DLE1BQU07SUFDUjtJQUNBO1FBQ0VELE1BQU07UUFDTkMsTUFBTTtJQUNSO0lBQ0E7UUFDRUQsTUFBTTtRQUNOQyxNQUFNO0lBQ1I7SUFDQTtRQUNFRCxNQUFNO1FBQ05DLE1BQU07SUFDUjtDQUNELENBQVU7QUFFSixNQUFNQyxrQkFBa0I7SUFDN0I7UUFDRUMsT0FBTztRQUNQQyxVQUFVO1FBQ1ZDLGFBQ0U7UUFDRkMsTUFBTWQsMERBQW1CLENBQUNHLDJEQUFlQTtRQUN6Q2EsTUFBTTtJQUNSO0lBQ0E7UUFDRUwsT0FBTztRQUNQQyxVQUFVO1FBQ1ZDLGFBQ0U7UUFDRkMsTUFBTWQsMERBQW1CLENBQUNDLHFEQUFTQTtRQUNuQ2UsTUFBTTtJQUNSO0lBQ0E7UUFDRUwsT0FBTztRQUNQQyxVQUFVO1FBQ1ZDLGFBQ0U7UUFDRkMsTUFBTWQsMERBQW1CLENBQUNFLG1EQUFPQTtRQUNqQ2MsTUFBTTtJQUNSO0NBQ0QsQ0FBVTtBQUVKLE1BQU1DLGVBQWU7SUFDMUI7UUFDRU4sT0FBTztRQUNQRSxhQUNFO1FBQ0ZLLE1BQU07WUFBQztZQUFTO1lBQVc7WUFBVztZQUFZO1NBQVM7UUFDM0RDLFVBQVVmLCtEQUFjQTtJQUMxQjtJQUNBO1FBQ0VPLE9BQU87UUFDUEUsYUFDRTtRQUNGSyxNQUFNO1lBQUM7WUFBUztZQUFjO1lBQVc7WUFBWTtTQUFRO1FBQzdEQyxVQUFVZCwwREFBU0E7SUFDckI7SUFDQTtRQUNFTSxPQUFPO1FBQ1BFLGFBQ0U7UUFDRkssTUFBTTtZQUFDO1lBQVM7WUFBVztZQUFPO1lBQVk7U0FBUztRQUN2REMsVUFBVWIsaUVBQWdCQTtJQUM1QjtDQUNELENBQVU7QUFFSixNQUFNYyxhQUFhO0lBQ3hCO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0NBQ0QsQ0FBVSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9saWIvZGF0YS50cz8xNmYxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IENnV29ya0FsdCB9IGZyb20gXCJyZWFjdC1pY29ucy9jZ1wiO1xuaW1wb3J0IHsgRmFSZWFjdCB9IGZyb20gXCJyZWFjdC1pY29ucy9mYVwiO1xuaW1wb3J0IHsgTHVHcmFkdWF0aW9uQ2FwIH0gZnJvbSBcInJlYWN0LWljb25zL2x1XCI7XG5pbXBvcnQgY29ycGNvbW1lbnRJbWcgZnJvbSBcIkAvcHVibGljL2NvcnBjb21tZW50LnBuZ1wiO1xuaW1wb3J0IHJtdGRldkltZyBmcm9tIFwiQC9wdWJsaWMvcm10ZGV2LnBuZ1wiO1xuaW1wb3J0IHdvcmRhbmFseXRpY3NJbWcgZnJvbSBcIkAvcHVibGljL3dvcmRhbmFseXRpY3MucG5nXCI7XG5cbmV4cG9ydCBjb25zdCBsaW5rcyA9IFtcbiAge1xuICAgIG5hbWU6IFwiSG9tZVwiLFxuICAgIGhhc2g6IFwiI2hvbWVcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiQWJvdXRcIixcbiAgICBoYXNoOiBcIiNhYm91dFwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJQcm9qZWN0c1wiLFxuICAgIGhhc2g6IFwiI3Byb2plY3RzXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIlNraWxsc1wiLFxuICAgIGhhc2g6IFwiI3NraWxsc1wiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJFeHBlcmllbmNlXCIsXG4gICAgaGFzaDogXCIjZXhwZXJpZW5jZVwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJDb250YWN0XCIsXG4gICAgaGFzaDogXCIjY29udGFjdFwiLFxuICB9LFxuXSBhcyBjb25zdDtcblxuZXhwb3J0IGNvbnN0IGV4cGVyaWVuY2VzRGF0YSA9IFtcbiAge1xuICAgIHRpdGxlOiBcIkdyYWR1YXRlZCBib290Y2FtcFwiLFxuICAgIGxvY2F0aW9uOiBcIk1pYW1pLCBGTFwiLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJJIGdyYWR1YXRlZCBhZnRlciA2IG1vbnRocyBvZiBzdHVkeWluZy4gSSBpbW1lZGlhdGVseSBmb3VuZCBhIGpvYiBhcyBhIGZyb250LWVuZCBkZXZlbG9wZXIuXCIsXG4gICAgaWNvbjogUmVhY3QuY3JlYXRlRWxlbWVudChMdUdyYWR1YXRpb25DYXApLFxuICAgIGRhdGU6IFwiMjAxOVwiLFxuICB9LFxuICB7XG4gICAgdGl0bGU6IFwiIEZ1bGwtU3RhY2sgRGV2ZWxvcGVyXCIsXG4gICAgbG9jYXRpb246IFwiT3JsYW5kbywgRkxcIixcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiSSB3b3JrZWQgYXMgYSBmcm9udC1lbmQgZGV2ZWxvcGVyIGZvciAyIHllYXJzIGluIDEgam9iIGFuZCAxIHllYXIgaW4gYW5vdGhlciBqb2IuIEkgYWxzbyB1cHNraWxsZWQgdG8gdGhlIGZ1bGwgc3RhY2suXCIsXG4gICAgaWNvbjogUmVhY3QuY3JlYXRlRWxlbWVudChDZ1dvcmtBbHQpLFxuICAgIGRhdGU6IFwiMjAyMyAtIDIwMjRcIixcbiAgfSxcbiAge1xuICAgIHRpdGxlOiBcIkZyb250LUVuZCBEZXZlbG9wZXJcIixcbiAgICBsb2NhdGlvbjogXCJIb3VzdG9uLCBUWFwiLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJJJ20gbm93IGEgZnVsbC1zdGFjayBkZXZlbG9wZXIgd29ya2luZyBhcyBhIGZyZWVsYW5jZXIuIE15IHN0YWNrIGluY2x1ZGVzIFJlYWN0LCBOZXh0LmpzLCBUeXBlU2NyaXB0LCBUYWlsd2luZCwgUHJpc21hIGFuZCBNb25nb0RCLiBJJ20gb3BlbiB0byBmdWxsLXRpbWUgb3Bwb3J0dW5pdGllcy5cIixcbiAgICBpY29uOiBSZWFjdC5jcmVhdGVFbGVtZW50KEZhUmVhY3QpLFxuICAgIGRhdGU6IFwiMjAyNCAtIHByZXNlbnRcIixcbiAgfSxcbl0gYXMgY29uc3Q7XG5cbmV4cG9ydCBjb25zdCBwcm9qZWN0c0RhdGEgPSBbXG4gIHtcbiAgICB0aXRsZTogXCJDb3JwQ29tbWVudFwiLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJJIHdvcmtlZCBhcyBhIGZ1bGwtc3RhY2sgZGV2ZWxvcGVyIG9uIHRoaXMgc3RhcnR1cCBwcm9qZWN0IGZvciAyIHllYXJzLiBVc2VycyBjYW4gZ2l2ZSBwdWJsaWMgZmVlZGJhY2sgdG8gY29tcGFuaWVzLlwiLFxuICAgIHRhZ3M6IFtcIlJlYWN0XCIsIFwiTmV4dC5qc1wiLCBcIk1vbmdvREJcIiwgXCJUYWlsd2luZFwiLCBcIlByaXNtYVwiXSxcbiAgICBpbWFnZVVybDogY29ycGNvbW1lbnRJbWcsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJybXREZXZcIixcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiSm9iIGJvYXJkIGZvciByZW1vdGUgZGV2ZWxvcGVyIGpvYnMuIEkgd2FzIHRoZSBmcm9udC1lbmQgZGV2ZWxvcGVyLiBJdCBoYXMgZmVhdHVyZXMgbGlrZSBmaWx0ZXJpbmcsIHNvcnRpbmcgYW5kIHBhZ2luYXRpb24uXCIsXG4gICAgdGFnczogW1wiUmVhY3RcIiwgXCJUeXBlU2NyaXB0XCIsIFwiTmV4dC5qc1wiLCBcIlRhaWx3aW5kXCIsIFwiUmVkdXhcIl0sXG4gICAgaW1hZ2VVcmw6IHJtdGRldkltZyxcbiAgfSxcbiAge1xuICAgIHRpdGxlOiBcIldvcmQgQW5hbHl0aWNzXCIsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIkEgcHVibGljIHdlYiBhcHAgZm9yIHF1aWNrIGFuYWx5dGljcyBvbiB0ZXh0LiBJdCBzaG93cyB3b3JkIGNvdW50LCBjaGFyYWN0ZXIgY291bnQgYW5kIHNvY2lhbCBtZWRpYSBwb3N0IGxpbWl0cy5cIixcbiAgICB0YWdzOiBbXCJSZWFjdFwiLCBcIk5leHQuanNcIiwgXCJTUUxcIiwgXCJUYWlsd2luZFwiLCBcIkZyYW1lclwiXSxcbiAgICBpbWFnZVVybDogd29yZGFuYWx5dGljc0ltZyxcbiAgfSxcbl0gYXMgY29uc3Q7XG5cbmV4cG9ydCBjb25zdCBza2lsbHNEYXRhID0gW1xuICBcIkhUTUxcIixcbiAgXCJDU1NcIixcbiAgXCJKYXZhU2NyaXB0XCIsXG4gIFwiVHlwZVNjcmlwdFwiLFxuICBcIlJlYWN0XCIsXG4gIFwiTmV4dC5qc1wiLFxuICBcIk5vZGUuanNcIixcbiAgXCJHaXRcIixcbiAgXCJUYWlsd2luZFwiLFxuICBcIlByaXNtYVwiLFxuICBcIk1vbmdvREJcIixcbiAgXCJSZWR1eFwiLFxuICBcIkdyYXBoUUxcIixcbiAgXCJBcG9sbG9cIixcbiAgXCJFeHByZXNzXCIsXG4gIFwiUG9zdGdyZVNRTFwiLFxuICBcIlB5dGhvblwiLFxuICBcIkRqYW5nb1wiLFxuICBcIkZyYW1lciBNb3Rpb25cIixcbl0gYXMgY29uc3Q7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJDZ1dvcmtBbHQiLCJGYVJlYWN0IiwiTHVHcmFkdWF0aW9uQ2FwIiwiY29ycGNvbW1lbnRJbWciLCJybXRkZXZJbWciLCJ3b3JkYW5hbHl0aWNzSW1nIiwibGlua3MiLCJuYW1lIiwiaGFzaCIsImV4cGVyaWVuY2VzRGF0YSIsInRpdGxlIiwibG9jYXRpb24iLCJkZXNjcmlwdGlvbiIsImljb24iLCJjcmVhdGVFbGVtZW50IiwiZGF0ZSIsInByb2plY3RzRGF0YSIsInRhZ3MiLCJpbWFnZVVybCIsInNraWxsc0RhdGEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./lib/data.ts\n"));

/***/ })

});