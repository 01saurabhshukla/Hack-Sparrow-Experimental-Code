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
exports.id = "pages/api/create_poll";
exports.ids = ["pages/api/create_poll"];
exports.modules = {

/***/ "bson":
/*!***********************!*\
  !*** external "bson" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("bson");

/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ "(api)/./pages/api/create_poll.js":
/*!**********************************!*\
  !*** ./pages/api/create_poll.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _util_mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../util/mongodb */ \"(api)/./util/mongodb.js\");\n/* harmony import */ var bson__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bson */ \"bson\");\n/* harmony import */ var bson__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bson__WEBPACK_IMPORTED_MODULE_1__);\n\n\nasync function handler(req, res) {\n    const client = await _util_mongodb__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n    const db = client.db(process.env.MONGODB_POLLS) // database access for polls\n    ;\n    const dbUsers = client.db(\"users\") // database access for users\n    ;\n    const body = req.body;\n    // create poll\n    const pollID = await db.collection(\"polls\").insertOne(body).then(async (id)=>{\n        console.log(`poll created at: http://localhost:3000/poll?id=${id.insertedId}`);\n        return id.insertedId;\n    }).catch(async ()=>{\n        console.log(\"poll could not be created\");\n        return null;\n    });\n    // add this poll's id to the user's list of created polls\n    await dbUsers.collection(\"users\").updateOne({\n        \"_id\": (0,bson__WEBPACK_IMPORTED_MODULE_1__.ObjectID)(body.userId)\n    }, {\n        $push: {\n            \"polls\": pollID\n        }\n    }, {\n        upsert: true\n    }).catch((e)=>{\n        console.error(e);\n    });\n    // returns the id of the poll so we can generate links to the poll\n    res.json({\n        pollID: pollID\n    });\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvY3JlYXRlX3BvbGwuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUErQztBQUNmO0FBR2pCLGVBQWVFLE9BQU8sQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDOUMsTUFBTUMsTUFBTSxHQUFHLE1BQU1MLHFEQUFhO0lBQ2xDLE1BQU1NLEVBQUUsR0FBR0QsTUFBTSxDQUFDQyxFQUFFLENBQUNDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxhQUFhLENBQUMsQ0FBQyw0QkFBNEI7SUFBN0I7SUFDL0MsTUFBTUMsT0FBTyxHQUFHTCxNQUFNLENBQUNDLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBRSw0QkFBNEI7SUFBOUI7SUFDbEMsTUFBTUssSUFBSSxHQUFHUixHQUFHLENBQUNRLElBQUk7SUFFckIsY0FBYztJQUNkLE1BQU1DLE1BQU0sR0FBRyxNQUFNTixFQUFFLENBQUNPLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQ0MsU0FBUyxDQUFDSCxJQUFJLENBQUMsQ0FDeERJLElBQUksQ0FBQyxPQUFPQyxFQUFFLEdBQUs7UUFDaEJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLENBQUMsK0NBQStDLEVBQUVGLEVBQUUsQ0FBQ0csVUFBVSxDQUFDLENBQUMsQ0FBQztRQUM5RSxPQUFPSCxFQUFFLENBQUNHLFVBQVU7S0FDdkIsQ0FBQyxDQUFDQyxLQUFLLENBQUMsVUFBWTtRQUNqQkgsT0FBTyxDQUFDQyxHQUFHLENBQUMsMkJBQTJCLENBQUM7UUFDeEMsT0FBTyxJQUFJO0tBQ2QsQ0FBQztJQUVKLHlEQUF5RDtJQUN6RCxNQUFNUixPQUFPLENBQUNHLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQ1EsU0FBUyxDQUN2QztRQUNFLEtBQUssRUFBRXBCLDhDQUFRLENBQUNVLElBQUksQ0FBQ1csTUFBTSxDQUFDO0tBQzdCLEVBQ0Q7UUFDRUMsS0FBSyxFQUFFO1lBQUUsT0FBTyxFQUFHWCxNQUFNO1NBQUU7S0FDNUIsRUFDRDtRQUNFWSxNQUFNLEVBQUUsSUFBSTtLQUNiLENBQ0YsQ0FBQ0osS0FBSyxDQUFDLENBQUNLLENBQUMsR0FBSztRQUNiUixPQUFPLENBQUNTLEtBQUssQ0FBQ0QsQ0FBQyxDQUFDO0tBQ2pCLENBQUM7SUFHSixrRUFBa0U7SUFDbEVyQixHQUFHLENBQUN1QixJQUFJLENBQUM7UUFDTGYsTUFBTSxFQUFHQSxNQUFNO0tBQ2xCLENBQUMsQ0FBQztDQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGl2ZV9wb2xsaW5nLy4vcGFnZXMvYXBpL2NyZWF0ZV9wb2xsLmpzP2JjOTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNsaWVudFByb21pc2UgZnJvbSAnLi4vLi4vdXRpbC9tb25nb2RiJztcclxuaW1wb3J0IHsgT2JqZWN0SUQgfSBmcm9tICdic29uJztcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XHJcbiAgY29uc3QgY2xpZW50ID0gYXdhaXQgY2xpZW50UHJvbWlzZVxyXG4gIGNvbnN0IGRiID0gY2xpZW50LmRiKHByb2Nlc3MuZW52Lk1PTkdPREJfUE9MTFMpIC8vIGRhdGFiYXNlIGFjY2VzcyBmb3IgcG9sbHNcclxuICBjb25zdCBkYlVzZXJzID0gY2xpZW50LmRiKFwidXNlcnNcIikgIC8vIGRhdGFiYXNlIGFjY2VzcyBmb3IgdXNlcnNcclxuICBjb25zdCBib2R5ID0gcmVxLmJvZHlcclxuXHJcbiAgLy8gY3JlYXRlIHBvbGxcclxuICBjb25zdCBwb2xsSUQgPSBhd2FpdCBkYi5jb2xsZWN0aW9uKFwicG9sbHNcIikuaW5zZXJ0T25lKGJvZHkpXHJcbiAgICAudGhlbihhc3luYyAoaWQpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhgcG9sbCBjcmVhdGVkIGF0OiBodHRwOi8vbG9jYWxob3N0OjMwMDAvcG9sbD9pZD0ke2lkLmluc2VydGVkSWR9YClcclxuICAgICAgICByZXR1cm4gaWQuaW5zZXJ0ZWRJZFxyXG4gICAgfSkuY2F0Y2goYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdwb2xsIGNvdWxkIG5vdCBiZSBjcmVhdGVkJylcclxuICAgICAgICByZXR1cm4gbnVsbFxyXG4gICAgfSlcclxuXHJcbiAgLy8gYWRkIHRoaXMgcG9sbCdzIGlkIHRvIHRoZSB1c2VyJ3MgbGlzdCBvZiBjcmVhdGVkIHBvbGxzXHJcbiAgYXdhaXQgZGJVc2Vycy5jb2xsZWN0aW9uKFwidXNlcnNcIikudXBkYXRlT25lKFxyXG4gICAgICB7XHJcbiAgICAgICAgXCJfaWRcIjogT2JqZWN0SUQoYm9keS51c2VySWQpLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgJHB1c2g6IHsgXCJwb2xsc1wiIDogcG9sbElEIH1cclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHVwc2VydDogdHJ1ZVxyXG4gICAgICB9XHJcbiAgICApLmNhdGNoKChlKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoZSlcclxuICAgIH0pXHJcblxyXG5cclxuICAvLyByZXR1cm5zIHRoZSBpZCBvZiB0aGUgcG9sbCBzbyB3ZSBjYW4gZ2VuZXJhdGUgbGlua3MgdG8gdGhlIHBvbGxcclxuICByZXMuanNvbih7XHJcbiAgICAgIHBvbGxJRCA6IHBvbGxJRFxyXG4gIH0pO1xyXG59Il0sIm5hbWVzIjpbImNsaWVudFByb21pc2UiLCJPYmplY3RJRCIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJjbGllbnQiLCJkYiIsInByb2Nlc3MiLCJlbnYiLCJNT05HT0RCX1BPTExTIiwiZGJVc2VycyIsImJvZHkiLCJwb2xsSUQiLCJjb2xsZWN0aW9uIiwiaW5zZXJ0T25lIiwidGhlbiIsImlkIiwiY29uc29sZSIsImxvZyIsImluc2VydGVkSWQiLCJjYXRjaCIsInVwZGF0ZU9uZSIsInVzZXJJZCIsIiRwdXNoIiwidXBzZXJ0IiwiZSIsImVycm9yIiwianNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/create_poll.js\n");

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
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/create_poll.js"));
module.exports = __webpack_exports__;

})();