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
exports.id = "pages/api/get_user";
exports.ids = ["pages/api/get_user"];
exports.modules = {

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ "(api)/./pages/api/get_user.js":
/*!*******************************!*\
  !*** ./pages/api/get_user.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _util_mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../util/mongodb */ \"(api)/./util/mongodb.js\");\n\nasync function handler(req, res) {\n    const client = await _util_mongodb__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n    const db = client.db(\"users\");\n    const email = req.body.email;\n    const data = await db.collection(\"users\").findOne({\n        \"email\": email\n    }).catch();\n    const output = JSON.parse(JSON.stringify(data));\n    if (output) {\n        res.json(output);\n    } else {\n        res.json({\n            email: null\n        });\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZ2V0X3VzZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBK0M7QUFFaEMsZUFBZUMsT0FBTyxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUM5QyxNQUFNQyxNQUFNLEdBQUcsTUFBTUoscURBQWE7SUFDbEMsTUFBTUssRUFBRSxHQUFHRCxNQUFNLENBQUNDLEVBQUUsQ0FBQyxPQUFPLENBQUM7SUFDN0IsTUFBTUMsS0FBSyxHQUFHSixHQUFHLENBQUNLLElBQUksQ0FBQ0QsS0FBSztJQUU1QixNQUFNRSxJQUFJLEdBQUcsTUFBTUgsRUFBRSxDQUFDSSxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUNDLE9BQU8sQ0FDN0M7UUFDSSxPQUFPLEVBQUVKLEtBQUs7S0FDakIsQ0FBQyxDQUFDSyxLQUFLLEVBQUU7SUFHZCxNQUFNQyxNQUFNLEdBQUdDLElBQUksQ0FBQ0MsS0FBSyxDQUFDRCxJQUFJLENBQUNFLFNBQVMsQ0FBQ1AsSUFBSSxDQUFDLENBQUM7SUFFL0MsSUFBSUksTUFBTSxFQUFFO1FBQ1ZULEdBQUcsQ0FBQ2EsSUFBSSxDQUFDSixNQUFNLENBQUMsQ0FBQztLQUNsQixNQUFNO1FBQ0xULEdBQUcsQ0FBQ2EsSUFBSSxDQUFDO1lBQ1BWLEtBQUssRUFBRSxJQUFJO1NBQ1osQ0FBQztLQUNIO0NBRUYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9saXZlX3BvbGxpbmcvLi9wYWdlcy9hcGkvZ2V0X3VzZXIuanM/ZTMzMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2xpZW50UHJvbWlzZSBmcm9tICcuLi8uLi91dGlsL21vbmdvZGInO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xyXG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNsaWVudFByb21pc2VcclxuICBjb25zdCBkYiA9IGNsaWVudC5kYihcInVzZXJzXCIpXHJcbiAgY29uc3QgZW1haWwgPSByZXEuYm9keS5lbWFpbFxyXG5cclxuICBjb25zdCBkYXRhID0gYXdhaXQgZGIuY29sbGVjdGlvbihcInVzZXJzXCIpLmZpbmRPbmUoXHJcbiAgICAgIHtcclxuICAgICAgICAgIFwiZW1haWxcIjogZW1haWxcclxuICAgICAgfSkuY2F0Y2goKVxyXG5cclxuXHJcbiAgY29uc3Qgb3V0cHV0ID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShkYXRhKSlcclxuXHJcbiAgaWYgKG91dHB1dCkge1xyXG4gICAgcmVzLmpzb24ob3V0cHV0KTtcclxuICB9IGVsc2Uge1xyXG4gICAgcmVzLmpzb24oe1xyXG4gICAgICBlbWFpbDogbnVsbFxyXG4gICAgfSlcclxuICB9XHJcbiAgXHJcbn1cclxuIl0sIm5hbWVzIjpbImNsaWVudFByb21pc2UiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwiY2xpZW50IiwiZGIiLCJlbWFpbCIsImJvZHkiLCJkYXRhIiwiY29sbGVjdGlvbiIsImZpbmRPbmUiLCJjYXRjaCIsIm91dHB1dCIsIkpTT04iLCJwYXJzZSIsInN0cmluZ2lmeSIsImpzb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/get_user.js\n");

/***/ }),

/***/ "(api)/./util/mongodb.js":
/*!*************************!*\
  !*** ./util/mongodb.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\nconst uri = process.env.MONGODB_URI;\nconst options = {};\nlet client;\nlet clientPromise;\nif (!process.env.MONGODB_URI) {\n    throw new Error(\"Mongo URI not in .env.local\");\n}\nif (true) {\n    // In development mode, use a global variable so that the value\n    // is preserved across module reloads caused by HMR (Hot Module Replacement).\n    if (!global._mongoClientPromise) {\n        client = new mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient(uri, options);\n        global._mongoClientPromise = client.connect();\n    }\n    clientPromise = global._mongoClientPromise;\n} else {}\n// Export a module-scoped MongoClient promise. By doing this in a\n// separate module, the client can be shared across functions.\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clientPromise);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi91dGlsL21vbmdvZGIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXFDO0FBRXJDLE1BQU1DLEdBQUcsR0FBR0MsT0FBTyxDQUFDQyxHQUFHLENBQUNDLFdBQVc7QUFDbkMsTUFBTUMsT0FBTyxHQUFHLEVBQUU7QUFFbEIsSUFBSUMsTUFBTTtBQUNWLElBQUlDLGFBQWE7QUFFakIsSUFBSSxDQUFDTCxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsV0FBVyxFQUFFO0lBQzVCLE1BQU0sSUFBSUksS0FBSyxDQUFDLDZCQUE2QixDQUFDO0NBQy9DO0FBRUQsSUFBSU4sSUFBc0MsRUFBRTtJQUMxQywrREFBK0Q7SUFDL0QsNkVBQTZFO0lBQzdFLElBQUksQ0FBQ08sTUFBTSxDQUFDQyxtQkFBbUIsRUFBRTtRQUMvQkosTUFBTSxHQUFHLElBQUlOLGdEQUFXLENBQUNDLEdBQUcsRUFBRUksT0FBTyxDQUFDO1FBQ3RDSSxNQUFNLENBQUNDLG1CQUFtQixHQUFHSixNQUFNLENBQUNLLE9BQU8sRUFBRTtLQUM5QztJQUNESixhQUFhLEdBQUdFLE1BQU0sQ0FBQ0MsbUJBQW1CO0NBQzNDLE1BQU0sRUFJTjtBQUVELGlFQUFpRTtBQUNqRSw4REFBOEQ7QUFDOUQsaUVBQWVILGFBQWEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9saXZlX3BvbGxpbmcvLi91dGlsL21vbmdvZGIuanM/NDUwNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb25nb0NsaWVudCB9IGZyb20gJ21vbmdvZGInXHJcblxyXG5jb25zdCB1cmkgPSBwcm9jZXNzLmVudi5NT05HT0RCX1VSSVxyXG5jb25zdCBvcHRpb25zID0ge31cclxuXHJcbmxldCBjbGllbnRcclxubGV0IGNsaWVudFByb21pc2VcclxuXHJcbmlmICghcHJvY2Vzcy5lbnYuTU9OR09EQl9VUkkpIHtcclxuICB0aHJvdyBuZXcgRXJyb3IoJ01vbmdvIFVSSSBub3QgaW4gLmVudi5sb2NhbCcpXHJcbn1cclxuXHJcbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xyXG4gIC8vIEluIGRldmVsb3BtZW50IG1vZGUsIHVzZSBhIGdsb2JhbCB2YXJpYWJsZSBzbyB0aGF0IHRoZSB2YWx1ZVxyXG4gIC8vIGlzIHByZXNlcnZlZCBhY3Jvc3MgbW9kdWxlIHJlbG9hZHMgY2F1c2VkIGJ5IEhNUiAoSG90IE1vZHVsZSBSZXBsYWNlbWVudCkuXHJcbiAgaWYgKCFnbG9iYWwuX21vbmdvQ2xpZW50UHJvbWlzZSkge1xyXG4gICAgY2xpZW50ID0gbmV3IE1vbmdvQ2xpZW50KHVyaSwgb3B0aW9ucylcclxuICAgIGdsb2JhbC5fbW9uZ29DbGllbnRQcm9taXNlID0gY2xpZW50LmNvbm5lY3QoKVxyXG4gIH1cclxuICBjbGllbnRQcm9taXNlID0gZ2xvYmFsLl9tb25nb0NsaWVudFByb21pc2VcclxufSBlbHNlIHtcclxuICAvLyBJbiBwcm9kdWN0aW9uIG1vZGUsIGl0J3MgYmVzdCB0byBub3QgdXNlIGEgZ2xvYmFsIHZhcmlhYmxlLlxyXG4gIGNsaWVudCA9IG5ldyBNb25nb0NsaWVudCh1cmksIG9wdGlvbnMpXHJcbiAgY2xpZW50UHJvbWlzZSA9IGNsaWVudC5jb25uZWN0KClcclxufVxyXG5cclxuLy8gRXhwb3J0IGEgbW9kdWxlLXNjb3BlZCBNb25nb0NsaWVudCBwcm9taXNlLiBCeSBkb2luZyB0aGlzIGluIGFcclxuLy8gc2VwYXJhdGUgbW9kdWxlLCB0aGUgY2xpZW50IGNhbiBiZSBzaGFyZWQgYWNyb3NzIGZ1bmN0aW9ucy5cclxuZXhwb3J0IGRlZmF1bHQgY2xpZW50UHJvbWlzZVxyXG5cclxuXHJcbiJdLCJuYW1lcyI6WyJNb25nb0NsaWVudCIsInVyaSIsInByb2Nlc3MiLCJlbnYiLCJNT05HT0RCX1VSSSIsIm9wdGlvbnMiLCJjbGllbnQiLCJjbGllbnRQcm9taXNlIiwiRXJyb3IiLCJnbG9iYWwiLCJfbW9uZ29DbGllbnRQcm9taXNlIiwiY29ubmVjdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./util/mongodb.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/get_user.js"));
module.exports = __webpack_exports__;

})();