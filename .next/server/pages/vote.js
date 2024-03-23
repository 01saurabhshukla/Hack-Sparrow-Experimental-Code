(() => {
var exports = {};
exports.id = 786;
exports.ids = [786];
exports.modules = {

/***/ 8311:
/***/ ((module) => {

// Exports
module.exports = {
	"main": "VoteDisplay_main__KQvNt",
	"flexColumn": "VoteDisplay_flexColumn__PFxbX",
	"button": "VoteDisplay_button__R2PAQ",
	"title": "VoteDisplay_title__EAmJt",
	"input": "VoteDisplay_input__wKevE",
	"inputBox": "VoteDisplay_inputBox__PHHit"
};


/***/ }),

/***/ 731:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ VoteDisplay)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _util_auth_useUser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4710);
/* harmony import */ var _styles_VoteDisplay_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8311);
/* harmony import */ var _styles_VoteDisplay_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_VoteDisplay_module_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _util_auth_userCookie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1844);
/* harmony import */ var bson__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8054);
/* harmony import */ var bson__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(bson__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_util_auth_useUser__WEBPACK_IMPORTED_MODULE_3__, _util_auth_userCookie__WEBPACK_IMPORTED_MODULE_4__]);
([_util_auth_useUser__WEBPACK_IMPORTED_MODULE_3__, _util_auth_userCookie__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







// Variable to check if user voted
// Used to prevent multiple votes from registering if spam voting
var voted = false;
function VoteDisplay(props) {
    const { user , logout  } = (0,_util_auth_useUser__WEBPACK_IMPORTED_MODULE_3__/* .useUser */ .a)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        voted = false;
    }, []);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const data = props.data;
    const id = data._id;
    const { 0: selectedOptions , 1: setSelectedOptions  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(Array(data.questions.length).fill(null));
    const { 0: textInput , 1: setTextInput  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: rangeInput , 1: setRangeInput  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(3); // Default value for range input
    const { 0: showModal , 1: setShowModal  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: questionvote , 1: setQuestionVote  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(Array(data.questions.length).fill(null));
    // HeadAche Wala Code
    const handleSubmit = async (questionIndex, selectedOptionIndex)=>{
        try {
            console.log(questionvote);
            // Send a POST request to your backend API to update the vote count
            const response = await fetch("/api/update_vote_count", {
                method: "POST",
                body: JSON.stringify({
                    "_id": (0,bson__WEBPACK_IMPORTED_MODULE_5__.ObjectId)(data._id),
                    "votes": questionvote,
                    "user": user,
                    "types": data.questions.map((question)=>{
                        return question.type;
                    })
                }),
                headers: {
                    "Content-Type": "application/json"
                }
            });
            if (response.ok) {
                console.log("Vote count updated successfully");
            } else {
                console.error("Failed to update vote count");
            }
        } catch (error) {
            console.error("Error updating vote count:", error);
        }
    };
    const handleOptionSelect = (questionIndex, optionIndex)=>{
        const newSelectedOptions = [
            ...selectedOptions
        ];
        newSelectedOptions[questionIndex] = optionIndex;
        setSelectedOptions(newSelectedOptions);
        const vote = questionvote;
        questionvote[questionIndex] = optionIndex;
        setQuestionVote(questionvote);
    };
    const handleTextChange = (i, event)=>{
        setTextInput(event);
        const vote = questionvote;
        questionvote[i] = event;
        setQuestionVote(questionvote);
    };
    const handleRangeChange = (i, event)=>{
        setRangeInput(parseInt(event));
        const vote = questionvote;
        questionvote[i] = event;
        setQuestionVote(questionvote);
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_styles_VoteDisplay_module_css__WEBPACK_IMPORTED_MODULE_6___default().main),
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: (_styles_VoteDisplay_module_css__WEBPACK_IMPORTED_MODULE_6___default().flexColumn),
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                    className: (_styles_VoteDisplay_module_css__WEBPACK_IMPORTED_MODULE_6___default().title),
                    children: data.title
                }),
                data.questions.map((question, questionIndex)=>{
                    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                                children: [
                                    questionIndex + 1,
                                    ". ",
                                    question.question
                                ]
                            }),
                            question.type === "mcq" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                children: question.options.map((option, optionIndex)=>{
                                    /*#__PURE__*/ return react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        children: (user === null || user === void 0 ? void 0 : user.email) && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                            className: selectedOptions[questionIndex] === optionIndex ? `${(_styles_VoteDisplay_module_css__WEBPACK_IMPORTED_MODULE_6___default().button)} ${(_styles_VoteDisplay_module_css__WEBPACK_IMPORTED_MODULE_6___default().selected)}` : (_styles_VoteDisplay_module_css__WEBPACK_IMPORTED_MODULE_6___default().button),
                                            onClick: ()=>handleOptionSelect(questionIndex, optionIndex)
                                            ,
                                            children: [
                                                String.fromCharCode(97 + optionIndex),
                                                ". ",
                                                option.option
                                            ]
                                        })
                                    }, optionIndex);
                                })
                            }),
                            question.type === "rating" && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        type: "range",
                                        min: "1",
                                        max: "5",
                                        value: rangeInput,
                                        onChange: (e)=>handleRangeChange(questionIndex, e.target.value)
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                        children: [
                                            "Selected Rating: ",
                                            rangeInput
                                        ]
                                    })
                                ]
                            }),
                            question.type === "text" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    className: (_styles_VoteDisplay_module_css__WEBPACK_IMPORTED_MODULE_6___default().input),
                                    type: "text",
                                    placeholder: "Type Your Answer...",
                                    value: textInput,
                                    onChange: (e)=>handleTextChange(questionIndex, e.target.value)
                                    ,
                                    required: true
                                })
                            })
                        ]
                    }, questionIndex);
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                    onClick: handleSubmit,
                    children: "Submit"
                }),
                showModal && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_styles_VoteDisplay_module_css__WEBPACK_IMPORTED_MODULE_6___default().modal),
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_styles_VoteDisplay_module_css__WEBPACK_IMPORTED_MODULE_6___default().modalContent),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                            children: "Thank you for your submission!"
                        })
                    })
                })
            ]
        })
    });
};
;

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3808:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps),
/* harmony export */   "default": () => (/* binding */ Vote)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var bson__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8054);
/* harmony import */ var bson__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bson__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _util_mongodb__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1645);
/* harmony import */ var _components_VoteDisplay__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(731);
/* harmony import */ var pusher_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1272);
/* harmony import */ var pusher_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(pusher_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _util_auth_useUser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4710);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _util_firebase__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2624);
/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2103);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_VoteDisplay__WEBPACK_IMPORTED_MODULE_4__, _util_auth_useUser__WEBPACK_IMPORTED_MODULE_6__, _util_firebase__WEBPACK_IMPORTED_MODULE_8__, _components_Navbar__WEBPACK_IMPORTED_MODULE_9__]);
([_components_VoteDisplay__WEBPACK_IMPORTED_MODULE_4__, _util_auth_useUser__WEBPACK_IMPORTED_MODULE_6__, _util_firebase__WEBPACK_IMPORTED_MODULE_8__, _components_Navbar__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










// Variable to check if bound to authCheck
var authBound = false;
// Getting initial database read
async function getServerSideProps(context) {
    const redirectLink = context.resolvedUrl;
    const client = await _util_mongodb__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z;
    const db = client.db(process.env.MONGODB_POLLS);
    const { query  } = context;
    const id = query.id;
    const data = await db.collection("polls").findOne({
        "_id": (0,bson__WEBPACK_IMPORTED_MODULE_2__.ObjectID)(id)
    });
    const output = JSON.parse(JSON.stringify(data));
    return {
        props: {
            "data": output,
            "url": redirectLink
        }
    };
}
function Vote(props) {
    const { user , logout  } = (0,_util_auth_useUser__WEBPACK_IMPORTED_MODULE_6__/* .useUser */ .a)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter)();
    const { 0: pollData , 1: setPollData  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_VoteDisplay__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        data: props.data
    }));
    const pollID = props.data._id;
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (!authBound) {
            _util_firebase__WEBPACK_IMPORTED_MODULE_8__/* .auth.onAuthStateChanged */ .I.onAuthStateChanged((authUser)=>{
                if (!authUser) {
                    router.push(`/login?redirect=${props.url}`);
                }
            });
            authBound = true;
        }
        // Initializing Pusher
        var pusher = new (pusher_js__WEBPACK_IMPORTED_MODULE_5___default())("0168aa531179337f1e2b", {
            cluster: "ap2",
            useTLS: true
        });
        // Subscribing to messenger channel
        const channel = pusher.subscribe("polling-development");
        channel.bind(`new-vote-${pollID}`, async ()=>{
            await fetch(`/api/get_votes`, {
                method: "POST",
                body: JSON.stringify({
                    "_id": `${pollID}`
                }),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            }).then(async (response)=>{
                await response.json().then((res)=>{
                    setPollData(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_VoteDisplay__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        data: res
                    }));
                });
            });
        });
        if ((user === null || user === void 0 ? void 0 : user.mongoData) && pollID) {
            const votedPolls = user.mongoData.votedPolls;
            votedPolls.forEach((poll)=>{
                if (poll == pollID) {
                    router.push(`/poll?id=${pollID}`);
                }
            });
        }
    }, [
        user
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Navbar__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {}),
            pollData
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1645:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8013);
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);

const uri = process.env.MONGODB_URI;
const options = {};
let client;
let clientPromise;
if (!process.env.MONGODB_URI) {
    throw new Error("Mongo URI not in .env.local");
}
if (false) {} else {
    // In production mode, it's best to not use a global variable.
    client = new mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient(uri, options);
    clientPromise = client.connect();
}
// Export a module-scoped MongoClient promise. By doing this in a
// separate module, the client can be shared across functions.
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clientPromise);


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

/***/ 1272:
/***/ ((module) => {

"use strict";
module.exports = require("pusher-js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

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
var __webpack_exports__ = __webpack_require__.X(0, [895,61,624,710,813], () => (__webpack_exec__(3808)));
module.exports = __webpack_exports__;

})();