"use strict";
(() => {
var exports = {};
exports.id = 544;
exports.ids = [544];
exports.modules = {

/***/ 3213:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var _util_auth_useUser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4710);
/* harmony import */ var _styles_Pollform_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5798);
/* harmony import */ var _styles_Pollform_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_Pollform_module_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9847);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_ai__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_switch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8248);
/* harmony import */ var react_switch__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_switch__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _util_auth_userCookie__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1844);
/* harmony import */ var react_scroll_modules__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7163);
/* harmony import */ var react_scroll_modules__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_scroll_modules__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_util_auth_useUser__WEBPACK_IMPORTED_MODULE_3__, _util_auth_userCookie__WEBPACK_IMPORTED_MODULE_6__]);
([_util_auth_useUser__WEBPACK_IMPORTED_MODULE_3__, _util_auth_userCookie__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









// Generates a div with count(amount) input fields, called when we increase or decrease the size of the form
let listSize = 2;
const CreateMCQ = (props)=>{
    const { 0: options , 1: setOptions  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(makeOptionsList(listSize));
    function makeOptionsList(count1) {
        const optionsList = [];
        for(let i = 0; i < count1; i++){
            optionsList.push(i + 1);
        }
        return optionsList.map((count)=>{
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_styles_Pollform_module_css__WEBPACK_IMPORTED_MODULE_8___default().inputBox),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                    className: (_styles_Pollform_module_css__WEBPACK_IMPORTED_MODULE_8___default().input),
                    type: "text",
                    id: `option${props.index}-${count}`,
                    name: `option${props.index}-${count}`,
                    placeholder: `Option ${count}`,
                    required: true
                })
            }, count);
        });
    }
    function increaseList() {
        listSize++;
        setOptions(makeOptionsList(listSize));
    }
    function decreaseList() {
        if (listSize > 2) {
            listSize--;
            setOptions(makeOptionsList(listSize));
        }
    }
    function del() {
        props.remove(props.comp_id);
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h3", {
                className: (_styles_Pollform_module_css__WEBPACK_IMPORTED_MODULE_8___default().subtitle),
                children: [
                    "Q",
                    props.index,
                    " Multiple Choice question"
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_styles_Pollform_module_css__WEBPACK_IMPORTED_MODULE_8___default().flexRow),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: `${(_styles_Pollform_module_css__WEBPACK_IMPORTED_MODULE_8___default().inputBox)} {$styles.flexColumn} `,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                            className: (_styles_Pollform_module_css__WEBPACK_IMPORTED_MODULE_8___default().input),
                            type: "text",
                            id: `question${props.index}`,
                            name: "question",
                            placeholder: "Poll Question",
                            required: true
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        className: `${(_styles_Pollform_module_css__WEBPACK_IMPORTED_MODULE_8___default().button)} ${(_styles_Pollform_module_css__WEBPACK_IMPORTED_MODULE_8___default().red)} ${(_styles_Pollform_module_css__WEBPACK_IMPORTED_MODULE_8___default().flexColumn)}`,
                        type: "button",
                        onClick: del,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_ai__WEBPACK_IMPORTED_MODULE_4__.AiOutlineMinus, {
                            className: (_styles_Pollform_module_css__WEBPACK_IMPORTED_MODULE_8___default().icon)
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_styles_Pollform_module_css__WEBPACK_IMPORTED_MODULE_8___default().flexColumn),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                        className: (_styles_Pollform_module_css__WEBPACK_IMPORTED_MODULE_8___default().subtitle),
                        children: "Answer options"
                    }),
                    options
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_styles_Pollform_module_css__WEBPACK_IMPORTED_MODULE_8___default().optionsButtons),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        className: `${(_styles_Pollform_module_css__WEBPACK_IMPORTED_MODULE_8___default().button)} ${(_styles_Pollform_module_css__WEBPACK_IMPORTED_MODULE_8___default().blue)}`,
                        type: "button",
                        onClick: increaseList,
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_styles_Pollform_module_css__WEBPACK_IMPORTED_MODULE_8___default().flexRow),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_ai__WEBPACK_IMPORTED_MODULE_4__.AiOutlinePlus, {
                                    className: (_styles_Pollform_module_css__WEBPACK_IMPORTED_MODULE_8___default().icon)
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: (_styles_Pollform_module_css__WEBPACK_IMPORTED_MODULE_8___default().buttonText),
                                    children: "Add option"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        className: `${(_styles_Pollform_module_css__WEBPACK_IMPORTED_MODULE_8___default().button)} ${(_styles_Pollform_module_css__WEBPACK_IMPORTED_MODULE_8___default().red)}`,
                        type: "button",
                        onClick: decreaseList,
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_styles_Pollform_module_css__WEBPACK_IMPORTED_MODULE_8___default().flexRow),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_ai__WEBPACK_IMPORTED_MODULE_4__.AiOutlineMinus, {
                                    className: (_styles_Pollform_module_css__WEBPACK_IMPORTED_MODULE_8___default().icon)
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: (_styles_Pollform_module_css__WEBPACK_IMPORTED_MODULE_8___default().buttonText),
                                    children: "Remove option"
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CreateMCQ);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5132:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var _util_auth_useUser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4710);
/* harmony import */ var _styles_Pollform_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5798);
/* harmony import */ var _styles_Pollform_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_Pollform_module_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9847);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_ai__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_switch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8248);
/* harmony import */ var react_switch__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_switch__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _util_auth_userCookie__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1844);
/* harmony import */ var react_scroll_modules__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7163);
/* harmony import */ var react_scroll_modules__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_scroll_modules__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_util_auth_useUser__WEBPACK_IMPORTED_MODULE_3__, _util_auth_userCookie__WEBPACK_IMPORTED_MODULE_6__]);
([_util_auth_useUser__WEBPACK_IMPORTED_MODULE_3__, _util_auth_userCookie__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









const CreateRating = (props)=>{
    function del() {
        props.remove(props.comp_id);
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h3", {
                className: (_styles_Pollform_module_css__WEBPACK_IMPORTED_MODULE_8___default().subtitle),
                children: [
                    "Q",
                    props.index,
                    " Rating question"
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_styles_Pollform_module_css__WEBPACK_IMPORTED_MODULE_8___default().flexRow),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: `${(_styles_Pollform_module_css__WEBPACK_IMPORTED_MODULE_8___default().inputBox)} {$styles.flexColumn} `,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                            className: (_styles_Pollform_module_css__WEBPACK_IMPORTED_MODULE_8___default().input),
                            type: "text",
                            id: `question${props.index}`,
                            name: "question",
                            placeholder: "Poll Question",
                            required: true
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        className: `${(_styles_Pollform_module_css__WEBPACK_IMPORTED_MODULE_8___default().button)} ${(_styles_Pollform_module_css__WEBPACK_IMPORTED_MODULE_8___default().red)} ${(_styles_Pollform_module_css__WEBPACK_IMPORTED_MODULE_8___default().flexColumn)}`,
                        type: "button",
                        onClick: del,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_ai__WEBPACK_IMPORTED_MODULE_4__.AiOutlineMinus, {
                            className: (_styles_Pollform_module_css__WEBPACK_IMPORTED_MODULE_8___default().icon)
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CreateRating);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 797:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var _util_auth_useUser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4710);
/* harmony import */ var _styles_Pollform_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5798);
/* harmony import */ var _styles_Pollform_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_Pollform_module_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9847);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_ai__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_switch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8248);
/* harmony import */ var react_switch__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_switch__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _util_auth_userCookie__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1844);
/* harmony import */ var react_scroll_modules__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7163);
/* harmony import */ var react_scroll_modules__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_scroll_modules__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_util_auth_useUser__WEBPACK_IMPORTED_MODULE_3__, _util_auth_userCookie__WEBPACK_IMPORTED_MODULE_6__]);
([_util_auth_useUser__WEBPACK_IMPORTED_MODULE_3__, _util_auth_userCookie__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









const CreateTextBox = (props)=>{
    function del() {
        props.remove(props.comp_id);
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h3", {
                className: (_styles_Pollform_module_css__WEBPACK_IMPORTED_MODULE_8___default().subtitle),
                children: [
                    "Q",
                    props.index,
                    " Open-Ended Question"
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_styles_Pollform_module_css__WEBPACK_IMPORTED_MODULE_8___default().flexRow),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: `${(_styles_Pollform_module_css__WEBPACK_IMPORTED_MODULE_8___default().inputBox)} {$styles.flexColumn} `,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                            className: (_styles_Pollform_module_css__WEBPACK_IMPORTED_MODULE_8___default().input),
                            type: "text",
                            id: `question${props.index}`,
                            name: "question",
                            placeholder: "Poll Question",
                            required: true
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        className: `${(_styles_Pollform_module_css__WEBPACK_IMPORTED_MODULE_8___default().button)} ${(_styles_Pollform_module_css__WEBPACK_IMPORTED_MODULE_8___default().red)} ${(_styles_Pollform_module_css__WEBPACK_IMPORTED_MODULE_8___default().flexColumn)}`,
                        type: "button",
                        onClick: del,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_ai__WEBPACK_IMPORTED_MODULE_4__.AiOutlineMinus, {
                            className: (_styles_Pollform_module_css__WEBPACK_IMPORTED_MODULE_8___default().icon)
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CreateTextBox);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8202:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ PollForm)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var _util_auth_useUser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4710);
/* harmony import */ var _styles_Pollform_module_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(5798);
/* harmony import */ var _styles_Pollform_module_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_styles_Pollform_module_css__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9847);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_ai__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_switch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8248);
/* harmony import */ var react_switch__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_switch__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _util_auth_userCookie__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1844);
/* harmony import */ var react_scroll_modules__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7163);
/* harmony import */ var react_scroll_modules__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_scroll_modules__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _CreateMCQ__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3213);
/* harmony import */ var _CreateTextBox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(797);
/* harmony import */ var _CreateRating__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5132);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_util_auth_useUser__WEBPACK_IMPORTED_MODULE_3__, _util_auth_userCookie__WEBPACK_IMPORTED_MODULE_6__, _CreateMCQ__WEBPACK_IMPORTED_MODULE_8__, _CreateTextBox__WEBPACK_IMPORTED_MODULE_9__, _CreateRating__WEBPACK_IMPORTED_MODULE_10__]);
([_util_auth_useUser__WEBPACK_IMPORTED_MODULE_3__, _util_auth_userCookie__WEBPACK_IMPORTED_MODULE_6__, _CreateMCQ__WEBPACK_IMPORTED_MODULE_8__, _CreateTextBox__WEBPACK_IMPORTED_MODULE_9__, _CreateRating__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












// Generates a div with count(amount) input fields, called when we increase or decrease the size of the form
// function makeOptionsList(count) {
//   const optionsList = []
//   for (let i = 0; i < count; i++) {
//     optionsList.push(i + 1);
//   }
//   return optionsList.map( (count) => {
//     return (
//     <div key={count} className={styles.inputBox}>
//       <input
//         className={styles.input}
//         type="text"
//         id={`option${count}`}
//         name={`option${count}`}
//         placeholder={`Option ${count}`}
//         required />
//     </div>)
//   })
// }
// function makeQuestionList(questions,options,increaseList,decreaseList){
// return questions.map((item)=>{
//   if(item.type=="mcq")return (
//   <CreateMCQ />
//   )
// })
// }
// let listSize = 2; // Default is 2 options
let id = 1;
function PollForm() {
    const { user  } = (0,_util_auth_useUser__WEBPACK_IMPORTED_MODULE_3__/* .useUser */ .a)();
    // const [options, setOptions] = useState(makeOptionsList(listSize))
    const { 0: pollLink , 1: setPollLink  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { 0: linkText , 1: setLinkText  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: copyText , 1: setCopyText  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { 0: isPrivate , 1: setPrivate  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: questions , 1: setQuestions  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([
        {}
    ]);
    const { 0: questionlist , 1: setquestionlist  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    function handleSwitch(checked) {
        setPrivate(checked);
    }
    // function increaseList() {
    //   listSize++;
    //   setOptions((makeOptionsList(listSize)))
    // }
    // function decreaseList() {
    //   if (listSize > 2) {
    //     listSize--;
    //     setOptions((makeOptionsList(listSize)))
    //   }
    // }
    function addMcqquestion() {
        const newq = {
            id: id,
            type: "mcq"
        };
        id = id + 1;
        if (questions == []) {
            setQuestions([
                newq
            ]);
        // setquestionlist(makeQuestionList(questions,options,increaseList,decreaseList))
        } else {
            setQuestions([
                ...questions,
                newq
            ]);
        // setquestionlist(makeQuestionList(questions,options,increaseList,decreaseList))
        }
    }
    function addTextquestion() {
        const newq = {
            id: id,
            type: "text"
        };
        id = id + 1;
        if (questions == []) {
            setQuestions([
                newq
            ]);
        // setquestionlist(makeQuestionList(questions,options,increaseList,decreaseList))
        } else {
            setQuestions([
                ...questions,
                newq
            ]);
        // setquestionlist(makeQuestionList(questions,options,increaseList,decreaseList))
        }
    }
    function addRatingquestion() {
        const newq = {
            id: id,
            type: "rating"
        };
        id = id + 1;
        if (questions == []) {
            setQuestions([
                newq
            ]);
        // setquestionlist(makeQuestionList(questions,options,increaseList,decreaseList))
        } else {
            setQuestions([
                ...questions,
                newq
            ]);
        // setquestionlist(makeQuestionList(questions,options,increaseList,decreaseList))
        }
    }
    function copyToClipboard() {
        const tempInput = document.createElement("input");
        tempInput.value = `${"http://localhost:3000"}${pollLink}`;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand("copy");
        document.body.removeChild(tempInput);
        setCopyText("Copied to clipboard");
        setTimeout(()=>{
            setCopyText(null);
        }, 500);
    }
    async function onSubmit(form) {
        form.preventDefault(); // don't render another page
        const target = form.target;
        let data1 = [];
        console.log(questions);
        for(let idx = 0; idx < questions.length; idx++){
            if (questions[idx].type == "mcq") {
                const options = [];
                let count = 0;
                while(document.getElementById(`option${idx}-${count + 1}`)){
                    options.push({
                        option: document.getElementById(`option${idx}-${count + 1}`).value,
                        votes: 0,
                        voters: []
                    });
                    count++;
                }
                data1.push({
                    question: document.getElementById(`question${idx}`).value,
                    type: "mcq",
                    options: options
                });
            } else if (questions[idx].type == "rating" || questions[idx].type == "text") {
                data1.push({
                    question: document.getElementById(`question${idx}`).value,
                    type: questions[idx].type
                });
            }
        }
        let data = {
            // create object with info to pass to create_poll api call
            userId: user.mongoData._id,
            title: document.getElementById("title").value,
            questions: data1,
            private: isPrivate
        };
        console.log(data);
        // Create list of vote options and add this to data
        // let options = []
        // for (let i = 1; i < target.length-4; i++) {
        //   options.push({
        //     id: (i - 1),
        //     option: target[i].value,
        //     votes: 0,
        //     "voters" : []
        //   })
        // }
        // data["options"] = options
        // Create poll in mongodb
        const response = await fetch("/api/create_poll", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        });
        const res = await response.json();
        (0,_util_auth_userCookie__WEBPACK_IMPORTED_MODULE_6__/* .updateUserCookiePolls */ .VJ)(`${res.pollID}`); // Update information in cookies
        setPollLink(`/vote?id=${res.pollID}`);
        setLinkText("Access your poll here");
        setTimeout(()=>{
            // Scroll to bottom so user notices the new poll has been created
            react_scroll_modules__WEBPACK_IMPORTED_MODULE_7__.animateScroll.scrollToBottom();
        }, 300);
    }
    function removeElement(key) {
        const newques = questions;
        newques.splice(key, 1);
        setQuestions(newques);
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_styles_Pollform_module_css__WEBPACK_IMPORTED_MODULE_11___default().main),
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: (_styles_Pollform_module_css__WEBPACK_IMPORTED_MODULE_11___default().container),
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_styles_Pollform_module_css__WEBPACK_IMPORTED_MODULE_11___default().title),
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                        children: "Create a poll"
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                    onSubmit: onSubmit,
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_styles_Pollform_module_css__WEBPACK_IMPORTED_MODULE_11___default().flexColumn),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                    className: (_styles_Pollform_module_css__WEBPACK_IMPORTED_MODULE_11___default().subtitle),
                                    children: "Poll Name"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: (_styles_Pollform_module_css__WEBPACK_IMPORTED_MODULE_11___default().inputBox),
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        className: (_styles_Pollform_module_css__WEBPACK_IMPORTED_MODULE_11___default().input),
                                        type: "text",
                                        id: "title",
                                        name: "title",
                                        placeholder: "Poll Name",
                                        required: true
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    children: questions.map((item, index)=>{
                                        if (item.type == "mcq") return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_CreateMCQ__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                            remove: removeElement,
                                            comp_id: item.id,
                                            index: index,
                                            id: `question-${index}`
                                        }, item.id);
                                        else if (item.type == "text") return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_CreateTextBox__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                            remove: removeElement,
                                            comp_id: item.id,
                                            index: index,
                                            id: `question-${index}`
                                        }, item.id);
                                        else if (item.type == "rating") return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_CreateRating__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                            remove: removeElement,
                                            comp_id: item.id,
                                            index: index,
                                            id: `question-${index}`
                                        }, item.id);
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: (_styles_Pollform_module_css__WEBPACK_IMPORTED_MODULE_11___default().optionsButtons),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                            className: `${(_styles_Pollform_module_css__WEBPACK_IMPORTED_MODULE_11___default().button)} ${(_styles_Pollform_module_css__WEBPACK_IMPORTED_MODULE_11___default().blue)}`,
                                            type: "button",
                                            onClick: addMcqquestion,
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: (_styles_Pollform_module_css__WEBPACK_IMPORTED_MODULE_11___default().flexRow),
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_ai__WEBPACK_IMPORTED_MODULE_4__.AiOutlinePlus, {
                                                        className: (_styles_Pollform_module_css__WEBPACK_IMPORTED_MODULE_11___default().icon)
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        className: (_styles_Pollform_module_css__WEBPACK_IMPORTED_MODULE_11___default().buttonText),
                                                        children: "MCQ"
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                            className: `${(_styles_Pollform_module_css__WEBPACK_IMPORTED_MODULE_11___default().button)} ${(_styles_Pollform_module_css__WEBPACK_IMPORTED_MODULE_11___default().blue)}`,
                                            type: "button",
                                            onClick: addRatingquestion,
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: (_styles_Pollform_module_css__WEBPACK_IMPORTED_MODULE_11___default().flexRow),
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_ai__WEBPACK_IMPORTED_MODULE_4__.AiOutlinePlus, {
                                                        className: (_styles_Pollform_module_css__WEBPACK_IMPORTED_MODULE_11___default().icon)
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        className: (_styles_Pollform_module_css__WEBPACK_IMPORTED_MODULE_11___default().buttonText),
                                                        children: "Scale"
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                            className: `${(_styles_Pollform_module_css__WEBPACK_IMPORTED_MODULE_11___default().button)} ${(_styles_Pollform_module_css__WEBPACK_IMPORTED_MODULE_11___default().blue)}`,
                                            type: "button",
                                            onClick: addTextquestion,
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: (_styles_Pollform_module_css__WEBPACK_IMPORTED_MODULE_11___default().flexRow),
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_ai__WEBPACK_IMPORTED_MODULE_4__.AiOutlinePlus, {
                                                        className: (_styles_Pollform_module_css__WEBPACK_IMPORTED_MODULE_11___default().icon)
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        className: (_styles_Pollform_module_css__WEBPACK_IMPORTED_MODULE_11___default().buttonText),
                                                        children: "Text"
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                            style: {
                                marginLeft: 3 + "rem"
                            },
                            children: "Settings"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_styles_Pollform_module_css__WEBPACK_IMPORTED_MODULE_11___default().settings),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: (_styles_Pollform_module_css__WEBPACK_IMPORTED_MODULE_11___default().switchText),
                                    htmlFor: "private",
                                    children: "Private (only via shared link)"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_switch__WEBPACK_IMPORTED_MODULE_5___default()), {
                                    className: (_styles_Pollform_module_css__WEBPACK_IMPORTED_MODULE_11___default()["switch"]),
                                    onChange: handleSwitch,
                                    checked: isPrivate,
                                    uncheckedIcon: false,
                                    checkedIcon: false,
                                    height: 22,
                                    width: 42,
                                    handleDiameter: 19,
                                    onColor: "#2BAE28"
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            className: (_styles_Pollform_module_css__WEBPACK_IMPORTED_MODULE_11___default().submitButton),
                            type: "submit",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: (_styles_Pollform_module_css__WEBPACK_IMPORTED_MODULE_11___default().buttonText),
                                children: "Create Poll"
                            })
                        })
                    ]
                }),
                pollLink && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_styles_Pollform_module_css__WEBPACK_IMPORTED_MODULE_11___default().sharePoll),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                            children: "Share your poll"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            onClick: ()=>{
                                copyToClipboard();
                            },
                            className: (_styles_Pollform_module_css__WEBPACK_IMPORTED_MODULE_11___default().linkDisplayContainer),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: (_styles_Pollform_module_css__WEBPACK_IMPORTED_MODULE_11___default().linkHolder),
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        id: "voteLink",
                                        children: `${"http://localhost:3000"}${pollLink}`
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_ai__WEBPACK_IMPORTED_MODULE_4__.AiOutlineCopy, {
                                    className: (_styles_Pollform_module_css__WEBPACK_IMPORTED_MODULE_11___default().copySymbol)
                                })
                            ]
                        }),
                        copyText && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            style: {
                                textAlign: "center",
                                lineHeight: 0
                            },
                            children: copyText
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                            href: pollLink,
                            target: "_blank",
                            rel: "noreferrer noopener",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    className: (_styles_Pollform_module_css__WEBPACK_IMPORTED_MODULE_11___default().acessPollButton),
                                    children: linkText
                                })
                            })
                        })
                    ]
                })
            ]
        })
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8819:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps),
/* harmony export */   "default": () => (/* binding */ CreatePoll)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_PollForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8202);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _util_firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2624);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2103);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_PollForm__WEBPACK_IMPORTED_MODULE_1__, _util_firebase__WEBPACK_IMPORTED_MODULE_3__, _components_Navbar__WEBPACK_IMPORTED_MODULE_5__]);
([_components_PollForm__WEBPACK_IMPORTED_MODULE_1__, _util_firebase__WEBPACK_IMPORTED_MODULE_3__, _components_Navbar__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






// Variable to check if bound to authCheck
var authBound = false;
async function getServerSideProps(context) {
    const { query  } = context;
    let redirectLink = query.redirect //getting link that the user is supposed to redirect to, used if user gets a poll link and needs to sign up
    ;
    if (!redirectLink) {
        redirectLink = "/";
    }
    return {
        props: {
            "url": redirectLink
        }
    };
}
function CreatePoll(props) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (!authBound) {
            _util_firebase__WEBPACK_IMPORTED_MODULE_3__/* .auth.onAuthStateChanged */ .I.onAuthStateChanged((authUser)=>{
                if (!authUser) {
                    router.push(`/login?redirect=${props.url}`);
                }
            });
            authBound = true;
        }
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Navbar__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_PollForm__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {})
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 4241:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/routing-items.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 9847:
/***/ ((module) => {

module.exports = require("react-icons/ai");

/***/ }),

/***/ 8547:
/***/ ((module) => {

module.exports = require("react-icons/gr");

/***/ }),

/***/ 7163:
/***/ ((module) => {

module.exports = require("react-scroll/modules");

/***/ }),

/***/ 8248:
/***/ ((module) => {

module.exports = require("react-switch");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 3745:
/***/ ((module) => {

module.exports = import("firebase/app");;

/***/ }),

/***/ 401:
/***/ ((module) => {

module.exports = import("firebase/auth");;

/***/ }),

/***/ 9915:
/***/ ((module) => {

module.exports = import("js-cookie");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [895,61,624,710,813,798], () => (__webpack_exec__(8819)));
module.exports = __webpack_exports__;

})();