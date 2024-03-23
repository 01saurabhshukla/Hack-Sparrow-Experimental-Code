(() => {
var exports = {};
exports.id = 621;
exports.ids = [621];
exports.modules = {

/***/ 6673:
/***/ ((module) => {

// Exports
module.exports = {
	"main": "Pollpage_main__yxtTB",
	"titleContainer": "Pollpage_titleContainer__Fayph",
	"title": "Pollpage_title__28l_u",
	"voteCount": "Pollpage_voteCount__uJKwY",
	"flexContainer": "Pollpage_flexContainer__zG5w1",
	"barMain": "Pollpage_barMain__Yd3Qo",
	"barContainer": "Pollpage_barContainer__eT8kT",
	"votes": "Pollpage_votes__B20_T",
	"voteBox": "Pollpage_voteBox__eBLp7",
	"donutContainer": "Pollpage_donutContainer__GcN2M"
};


/***/ }),

/***/ 954:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ PollDisplay)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./styles/Pollpage.module.css
var Pollpage_module = __webpack_require__(6673);
var Pollpage_module_default = /*#__PURE__*/__webpack_require__.n(Pollpage_module);
;// CONCATENATED MODULE: external "chart.js"
const external_chart_js_namespaceObject = require("chart.js");
;// CONCATENATED MODULE: external "react-chartjs-2"
const external_react_chartjs_2_namespaceObject = require("react-chartjs-2");
;// CONCATENATED MODULE: ./components/DataChart.js





external_chart_js_namespaceObject.Chart.register(external_chart_js_namespaceObject.BarElement, external_chart_js_namespaceObject.ArcElement, external_chart_js_namespaceObject.CategoryScale, external_chart_js_namespaceObject.LinearScale, external_chart_js_namespaceObject.Title, external_chart_js_namespaceObject.Tooltip, external_chart_js_namespaceObject.Legend, external_chart_js_namespaceObject.Filler);
function generateColors(num) {
    let output = [];
    for(let i = 0; i < num; i++){
        output.push(`hsla(${i * 30 % 360}, 100%, 65%, 0.6)`);
    }
    return output;
}
let barThickness = 50;
function PollDisplay(props) {
    const sortedOptions = props.data.questions.filter((question)=>question.type === "mcq"
    ).map((question)=>question.options.sort((a, b)=>b.votes - a.votes
        )
    );
    // console.log(questions.)
    const questions = props.data.questions.filter((question)=>question.type === "mcq"
    ).map((question)=>{
        return question.question;
    });
    console.log(questions);
    const data1 = sortedOptions.map((ques)=>({
            labels: ques.map((option)=>`    ${option.option}`
            ),
            datasets: [
                {
                    data: ques.map((option)=>option.votes
                    ),
                    backgroundColor: generateColors(ques.length),
                    color: "white",
                    barThickness: barThickness
                }
            ]
        })
    );
    const options = {
        responsive: true,
        maintainAspectRatio: false,
        indexAxis: "y",
        scales: {
            y: {
                ticks: {
                    mirror: true,
                    display: true,
                    color: "black",
                    font: {
                        size: 18,
                        family: "Montserrat, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen"
                    },
                    lineWidth: 30
                },
                grid: {
                    display: false
                }
            },
            x: {
                display: false
            }
        },
        elements: {
            bar: {
                borderWidth: 0,
                borderRadius: 6
            }
        },
        plugins: {
            legend: {
                display: false
            }
        }
    };
    function countVotes1(data) {
        let v = 0;
        for(let i = 0; i < data.length; i++)v += data[i];
        return v;
    }
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: data1.map((data, index1)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (Pollpage_module_default()).titleContainer,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: (Pollpage_module_default()).title,
                            children: questions[index1]
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (Pollpage_module_default()).flexContainer,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (Pollpage_module_default()).barMain,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: (Pollpage_module_default()).barContainer,
                                        style: {
                                            height: data.length * (barThickness + 5) + 32 + "px"
                                        },
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_chartjs_2_namespaceObject.Bar, {
                                            data: data,
                                            options: options
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: (Pollpage_module_default()).votes,
                                        children: sortedOptions[index1].map((option, index)=>{
                                            const votes = option.votes;
                                            const votesText = votes === 1 ? "vote" : "votes";
                                            const percentage = Math.round((votes / countVotes1(data.datasets[0].data) * 100 + Number.EPSILON) * 100) / 100;
                                            const output = `${percentage}% (${votes} ${votesText})`;
                                            return /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: (Pollpage_module_default()).voteBox,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    style: {
                                                        overflowWrap: "none"
                                                    },
                                                    children: output
                                                })
                                            }, index);
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: (Pollpage_module_default()).donutContainer,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_chartjs_2_namespaceObject.Doughnut, {
                                    data: data,
                                    options: {
                                        plugins: {
                                            legend: {
                                                display: false
                                            }
                                        }
                                    }
                                })
                            })
                        ]
                    }, index1)
                ]
            }, index1)
        )
    });
};


/***/ }),

/***/ 4514:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* unused harmony export default */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2750);
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_fi__WEBPACK_IMPORTED_MODULE_2__);




function Dropdown(props) {
    const { 0: display , 1: setDisplay  } = useState(false);
    // Generates a boolean list corresponding to if each ethnicity is selected for filtering
    const { 0: ethnicityState , 1: setEthnicityStates  } = useState(Array(props.ethnicities.length).fill(false));
    // Needs to be a react hook so that we can cause it to re-render
    const { 0: ethnicityDisplay , 1: setEthnicityDisplay  } = useState(props.ethnicities.map((option, index)=>{
        return /*#__PURE__*/ _jsx("div", {
            className: ethnicityState[index] ? styles.selectedContainerElement : styles.containerElement,
            option: option,
            onClick: handleFilterE(index),
            children: /*#__PURE__*/ _jsx("p", {
                className: styles.text,
                children: option
            })
        }, index);
    }));
    // Same as above but for gender
    const { 0: genderState , 1: setGenderStates  } = useState(Array(props.genders.length).fill(false));
    const { 0: genderDisplay , 1: setGenderDisplay  } = useState(props.genders.map((option, index)=>{
        return /*#__PURE__*/ _jsx("div", {
            className: genderState[index] ? styles.selectedContainerElement : styles.containerElement,
            option: option,
            onClick: handleFilterG(index),
            children: /*#__PURE__*/ _jsx("p", {
                className: styles.text,
                children: option
            })
        }, index);
    }));
    // Checks if click outside dropdown menu happened and closes menu
    function useOutsideAlerter(ref) {
        useEffect(()=>{
            function handleClickOutside(event) {
                if (ref.current && !ref.current.contains(event.target)) {
                    setDisplay(false);
                }
            }
            // Bind the event listener
            document.addEventListener("mousedown", handleClickOutside);
            return ()=>{
                // Unbind the event listener on clean up
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }, [
            ref
        ]);
    }
    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef);
    function handleClick() {
        setDisplay(!display);
    }
    // Updates the filter for ethnicity (returns a function specific to the index)
    // index is a string holding the ethnicity that is either being filtered or unfiltered
    function handleFilterE(index1) {
        return ()=>{
            // copy ethnicityState to temp to prevent overwriting of ethnicityState
            let temp = ethnicityState;
            temp[index1] = !temp[index1] // flip state of the ethnicity filter
            ;
            setEthnicityStates(temp) // set state of ethnicity filter
            ;
            props.ethnicityUpdate(props.ethnicities[index1], temp[index1]) // update corresponding filter element in parent
            ;
            setEthnicityDisplay(props.ethnicities.map((option, index)=>{
                return /*#__PURE__*/ _jsx("div", {
                    className: ethnicityState[index] ? styles.selectedContainerElement : styles.containerElement,
                    option: option,
                    onClick: handleFilterE(index),
                    children: /*#__PURE__*/ _jsx("p", {
                        className: styles.text,
                        children: option
                    })
                }, index);
            }));
        };
    }
    // Updates the filter for gender
    // index is a string holding the gender that is either being filtered or unfiltered
    function handleFilterG(index2) {
        return ()=>{
            let temp = genderState;
            temp[index2] = !temp[index2];
            setGenderStates(temp);
            props.genderUpdate(props.genders[index2], temp[index2]);
            setGenderDisplay(props.genders.map((option, index)=>{
                return /*#__PURE__*/ _jsx("div", {
                    className: genderState[index] ? styles.selectedContainerElement : styles.containerElement,
                    option: option,
                    onClick: handleFilterG(index),
                    children: /*#__PURE__*/ _jsx("p", {
                        className: styles.text,
                        children: option
                    })
                }, index);
            }));
        };
    }
    return /*#__PURE__*/ _jsxs("div", {
        ref: wrapperRef,
        className: styles.main,
        children: [
            /*#__PURE__*/ _jsx("p", {
                className: styles.label,
                children: props.title
            }),
            /*#__PURE__*/ _jsxs("div", {
                onClick: handleClick,
                className: styles.DropdownButton,
                children: [
                    /*#__PURE__*/ _jsx("div", {
                        className: styles.buttonText,
                        children: "Select filters "
                    }),
                    /*#__PURE__*/ _jsx("div", {
                        className: styles.arrow,
                        children: display ? /*#__PURE__*/ _jsx(FiChevronUp, {}) : /*#__PURE__*/ _jsx(FiChevronDown, {})
                    })
                ]
            }),
            display && /*#__PURE__*/ _jsx("div", {
                children: /*#__PURE__*/ _jsxs("div", {
                    className: styles.elementsContainer,
                    children: [
                        /*#__PURE__*/ _jsx("div", {
                            className: styles.optionLabel,
                            children: /*#__PURE__*/ _jsx("p", {
                                className: styles.text,
                                children: "Ethnicities"
                            })
                        }),
                        ethnicityDisplay,
                        /*#__PURE__*/ _jsx("div", {
                            className: styles.optionLabel,
                            children: /*#__PURE__*/ _jsx("p", {
                                className: styles.text,
                                children: "Genders"
                            })
                        }),
                        genderDisplay
                    ]
                })
            })
        ]
    });
};


/***/ }),

/***/ 316:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps),
/* harmony export */   "default": () => (/* binding */ Poll)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var bson__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8054);
/* harmony import */ var bson__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bson__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _util_mongodb__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1645);
/* harmony import */ var pusher_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1272);
/* harmony import */ var pusher_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(pusher_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _util_auth_useUser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4710);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_DataChart__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(954);
/* harmony import */ var _util_firebase__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2624);
/* harmony import */ var _styles_Pollpage_module_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(6673);
/* harmony import */ var _styles_Pollpage_module_css__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_styles_Pollpage_module_css__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _styles_Pollform_module_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(5798);
/* harmony import */ var _styles_Pollform_module_css__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_styles_Pollform_module_css__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2103);
/* harmony import */ var _util_pollHandling__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(6373);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9847);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_icons_ai__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_DropdownFilter__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(4514);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_util_auth_useUser__WEBPACK_IMPORTED_MODULE_5__, _util_firebase__WEBPACK_IMPORTED_MODULE_8__, _components_Navbar__WEBPACK_IMPORTED_MODULE_9__]);
([_util_auth_useUser__WEBPACK_IMPORTED_MODULE_5__, _util_firebase__WEBPACK_IMPORTED_MODULE_8__, _components_Navbar__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);















// Variable to check if binded to Pusher
var bound = false;
// Variable to check if bound to authCheck
var authBound = false;
const ethnicities = (/* unused pure expression or super */ null && ([
    "American Indian or Alaska Native",
    "Asian",
    "Black or African American",
    "Hispanic or Latino",
    "Native Hawaiian or Other Pacific Islander",
    "White",
    "Other", 
]));
const genders = (/* unused pure expression or super */ null && ([
    "Female",
    "Male",
    "Nonbinary",
    "Other"
]));
// Getting initial database read
async function getServerSideProps(context) {
    const redirectLink = context.resolvedUrl;
    const client = await _util_mongodb__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z;
    const db = client.db(process.env.MONGODB_POLLS);
    const { query  } = context;
    const id = query.id;
    const data = await db.collection("polls").findOne({
        _id: (0,bson__WEBPACK_IMPORTED_MODULE_2__.ObjectID)(id)
    });
    const output = JSON.parse(JSON.stringify(data));
    return {
        props: {
            data: output,
            url: redirectLink
        }
    };
}
function Poll(props) {
    const { user , logout  } = (0,_util_auth_useUser__WEBPACK_IMPORTED_MODULE_5__/* .useUser */ .a)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();
    const { 0: data , 1: setData  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(props.data);
    const { 0: numVotes , 1: setNumVotes  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)((0,_util_pollHandling__WEBPACK_IMPORTED_MODULE_12__/* .countVotes */ .d)(props.data.questions[0]));
    const { 0: ethnicityFilters , 1: setEthnicityFilters  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        "American Indian or Alaska Native": false,
        Asian: false,
        "Black or African American": false,
        "Hispanic or Latino": false,
        "Native Hawaiian or Other Pacific Islander": false,
        White: false,
        Other: false
    });
    const { 0: genderFilters , 1: setGenderFilters  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        Female: false,
        Male: false,
        Nonbinary: false,
        Other: false
    });
    const { 0: copyText , 1: setCopyText  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const { 0: chart , 1: setChart  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_DataChart__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
        data: props.data
    }));
    const pollID = props.data._id;
    function handleEthnicityFilter(ethnicity, state) {
        ethnicityFilters[ethnicity] = state;
        setChart(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_DataChart__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
            data: getFilteredData()
        }));
    }
    function handleGenderFilter(gender, state) {
        genderFilters[gender] = state;
        setChart(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_DataChart__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
            data: getFilteredData()
        }));
    }
    // Runs through the list of filters and gets a filtered count for each vote option
    function getFilteredData() {
        const filterList1 = []; // list of ethnicites that are selected
        for(var key in ethnicityFilters){
            if (ethnicityFilters[key]) {
                filterList1.push(key);
            }
        }
        const filterList2 = []; // list of genders that are selected
        for(var key in genderFilters){
            if (genderFilters[key]) {
                filterList2.push(key);
            }
        }
        // if no filters, return data as is
        if (filterList1.length + filterList2.length == 0) {
            console.log(data);
            return data;
        }
        let output = JSON.parse(JSON.stringify(data)); // create copy of data to send to charts so we don't alter the real data
        for(let i = 0; i < output.options.length; i++){
            let count = 0;
            for(let j = 0; j < output.options[i].voters.length; j++){
                let voted = false;
                for(let k = 0; k < filterList1.length; k++){
                    if (filterList1[k] == output.options[i].voters[j].info.ethnicity) {
                        count++;
                        voted = true;
                    }
                }
                for(let k1 = 0; k1 < filterList2.length; k1++){
                    if (filterList2[k1] == output.options[i].voters[j].info.gender && !voted) {
                        count++;
                    }
                }
            }
            output.options[i].votes = count;
        }
        return output;
    }
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
        var pusher = new (pusher_js__WEBPACK_IMPORTED_MODULE_4___default())("0168aa531179337f1e2b", {
            cluster: "ap2",
            useTLS: true
        });
        console.log("new pusher");
        // Subscribing to messenger channel
        const channel = pusher.subscribe("polling-development");
        // bind to pusher channel for live updates
        channel.bind(`new-vote-${pollID}`, async ()=>{
            await fetch(`/api/get_votes`, {
                method: "POST",
                body: JSON.stringify({
                    _id: `${pollID}`
                }),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            }).then(async (response)=>{
                await response.json().then((res)=>{
                    setData(res);
                    // setNumVotes(countVotes(res.options));
                    setChart(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_DataChart__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                        data: res
                    }));
                });
            });
        });
    // check to see if user has not voted on this poll yet
    // if not, send back to voting page
    // if (user?.mongoData && pollID) {
    //   let voted = false;
    //   const votedPolls = user.mongoData.votedPolls;
    //   votedPolls.forEach((poll) => {
    //     if (poll == pollID) {
    //       voted = true;
    //     }
    //   });
    //   if (!voted) {
    //     router.push(`/vote?id=${pollID}`);
    //   }
    // }
    }, [
        user
    ]);
    function copyToClipboard() {
        const tempInput = document.createElement("input");
        tempInput.value = `${"http://localhost:3000"}/vote${props.url.slice(5)}`;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand("copy");
        document.body.removeChild(tempInput);
        setCopyText("Copied to clipboard");
        setTimeout(()=>{
            setCopyText(null);
        }, 500);
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Navbar__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_styles_Pollpage_module_css__WEBPACK_IMPORTED_MODULE_13___default().main),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                        className: (_styles_Pollpage_module_css__WEBPACK_IMPORTED_MODULE_13___default().title),
                        children: data.question
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: (_styles_Pollpage_module_css__WEBPACK_IMPORTED_MODULE_13___default().voteCount),
                        children: `Total votes - ${numVotes}`
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        children: chart
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                        style: {
                            marginTop: "3rem"
                        },
                        children: "Share this poll"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        onClick: ()=>{
                            copyToClipboard();
                        },
                        className: (_styles_Pollform_module_css__WEBPACK_IMPORTED_MODULE_14___default().linkDisplayContainer),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_styles_Pollform_module_css__WEBPACK_IMPORTED_MODULE_14___default().linkHolder),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    id: "voteLink",
                                    children: `${"http://localhost:3000"}/vote${props.url.slice(5)}`
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_ai__WEBPACK_IMPORTED_MODULE_10__.AiOutlineCopy, {
                                className: (_styles_Pollform_module_css__WEBPACK_IMPORTED_MODULE_14___default().copySymbol)
                            })
                        ]
                    }),
                    copyText && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        style: {
                            textAlign: "center",
                            lineHeight: 0
                        },
                        children: copyText
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

/***/ 9847:
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/ai");

/***/ }),

/***/ 2750:
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/fi");

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
var __webpack_exports__ = __webpack_require__.X(0, [895,61,624,710,813,581,798], () => (__webpack_exec__(316)));
module.exports = __webpack_exports__;

})();