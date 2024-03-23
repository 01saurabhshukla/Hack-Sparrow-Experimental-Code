(() => {
var exports = {};
exports.id = 26;
exports.ids = [26];
exports.modules = {

/***/ 6699:
/***/ ((module) => {

// Exports
module.exports = {
	"main": "Dashboard_main__wjQdL",
	"menu": "Dashboard_menu__IT0Dx",
	"button": "Dashboard_button__IOXjU",
	"activeButton": "Dashboard_activeButton__SHUKF"
};


/***/ }),

/***/ 7178:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps),
/* harmony export */   "default": () => (/* binding */ Dashboard)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _util_firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2624);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2103);
/* harmony import */ var _styles_Dashboard_module_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6699);
/* harmony import */ var _styles_Dashboard_module_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_Dashboard_module_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_PollList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9784);
/* harmony import */ var _util_mongodb__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1645);
/* harmony import */ var bson__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8054);
/* harmony import */ var bson__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(bson__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _util_pollHandling__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6373);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_util_firebase__WEBPACK_IMPORTED_MODULE_2__, _components_Navbar__WEBPACK_IMPORTED_MODULE_4__]);
([_util_firebase__WEBPACK_IMPORTED_MODULE_2__, _components_Navbar__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










// Variable to check if bound to authCheck
var authBound = false;
// Get list of created_polls and voted polls
// Takes a while because we are getting the current votes of each poll
async function getServerSideProps(context) {
    const client = await _util_mongodb__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z;
    const db = client.db("users");
    const dbPolls = client.db("polls");
    const redirectLink = context.resolvedUrl;
    const { query  } = context;
    const id = query.id;
    const data = await db.collection("users").findOne({
        "_id": (0,bson__WEBPACK_IMPORTED_MODULE_7__.ObjectID)(id)
    });
    const output = JSON.parse(JSON.stringify(data));
    // console.log(output)
    const polls = [];
    for(let i = 0; i < output.polls.length; i++){
        await dbPolls.collection("polls").findOne({
            "_id": (0,bson__WEBPACK_IMPORTED_MODULE_7__.ObjectID)(output.polls[i])
        }).then((pd)=>{
            // console.log(pd)
            if (pd) {
                var ref;
                polls.push({
                    id: pd._id.toString(),
                    question: (ref = pd.title) === null || ref === void 0 ? void 0 : ref.toString(),
                    votes: (0,_util_pollHandling__WEBPACK_IMPORTED_MODULE_8__/* .countVotes */ .d)(pd.questions[0])
                });
            }
        });
    }
    const votedPolls = [];
    for(let i1 = 0; i1 < output.votedPolls.length; i1++){
        await dbPolls.collection("polls").findOne({
            "_id": (0,bson__WEBPACK_IMPORTED_MODULE_7__.ObjectID)(output.votedPolls[i1])
        }).then((pd)=>{
            // console.log(pd);
            if (pd === null || pd === void 0 ? void 0 : pd.title) {
                var ref;
                votedPolls.push({
                    id: output.votedPolls[i1],
                    questions: (ref = pd.title) === null || ref === void 0 ? void 0 : ref.toString(),
                    votes: (0,_util_pollHandling__WEBPACK_IMPORTED_MODULE_8__/* .countVotes */ .d)(pd.options.questions[0])
                });
            }
        });
    }
    return {
        props: {
            "url": redirectLink,
            "polls": polls,
            "votedPolls": votedPolls
        }
    };
}
function Dashboard(props) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const { 0: madePolls , 1: setMadePolls  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    function displayPolls() {
        setMadePolls(true);
    }
    function displayVotes() {
        setMadePolls(false);
    }
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (!authBound) {
            _util_firebase__WEBPACK_IMPORTED_MODULE_2__/* .auth.onAuthStateChanged */ .I.onAuthStateChanged((authUser)=>{
                if (!authUser) {
                    router.push(`/login?redirect=${props.url}`);
                }
            });
            authBound = true;
        }
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Navbar__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_styles_Dashboard_module_css__WEBPACK_IMPORTED_MODULE_9___default().main),
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_styles_Dashboard_module_css__WEBPACK_IMPORTED_MODULE_9___default().menu),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                onClick: displayPolls,
                                className: madePolls ? (_styles_Dashboard_module_css__WEBPACK_IMPORTED_MODULE_9___default().activeButton) : (_styles_Dashboard_module_css__WEBPACK_IMPORTED_MODULE_9___default().button),
                                children: "Your polls"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                onClick: displayVotes,
                                className: !madePolls ? (_styles_Dashboard_module_css__WEBPACK_IMPORTED_MODULE_9___default().activeButton) : (_styles_Dashboard_module_css__WEBPACK_IMPORTED_MODULE_9___default().button),
                                children: "Previous votes"
                            })
                        ]
                    }),
                    madePolls ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_PollList__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                        pageType: "poll",
                        polls: props.polls
                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_PollList__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                        pageType: "poll",
                        polls: props.votedPolls
                    })
                ]
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8054:
/***/ ((module) => {

"use strict";
module.exports = require("bson");

/***/ }),

/***/ 8013:
/***/ ((module) => {

"use strict";
module.exports = require("mongodb");

/***/ }),

/***/ 562:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 4241:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/routing-items.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 9847:
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/ai");

/***/ }),

/***/ 8547:
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/gr");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 3745:
/***/ ((module) => {

"use strict";
module.exports = import("firebase/app");;

/***/ }),

/***/ 401:
/***/ ((module) => {

"use strict";
module.exports = import("firebase/auth");;

/***/ }),

/***/ 9915:
/***/ ((module) => {

"use strict";
module.exports = import("js-cookie");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [895,61,624,710,813,581,784], () => (__webpack_exec__(7178)));
module.exports = __webpack_exports__;

})();