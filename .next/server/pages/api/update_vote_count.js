"use strict";
(() => {
var exports = {};
exports.id = 755;
exports.ids = [755];
exports.modules = {

/***/ 8054:
/***/ ((module) => {

module.exports = require("bson");

/***/ }),

/***/ 8013:
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ 5670:
/***/ ((module) => {

module.exports = require("pusher");

/***/ }),

/***/ 4478:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var bson__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8054);
/* harmony import */ var bson__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bson__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util_mongodb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6264);
/* harmony import */ var _util_pusher_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5273);




async function handler(req, res) {
    try {
        const client = await _util_mongodb__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z;
        const db = client.db("polls");
        const dbUsers = client.db("users");
        const data = req.body;
        const pollID = data._id;
        // const voteIndex = data.index;
        const user = data.user;
        const userId = user._id;
        const votes = data.votes;
        const types = data.types;
        // user.votedPolls.push(pollID);
        const document = await db.collection("polls").findOne({
            "_id": (0,bson__WEBPACK_IMPORTED_MODULE_0__.ObjectId)(pollID)
        });
        console.log(document);
        votes.forEach((vote, index)=>{
            if (types[index] === "mcq") {
                document.questions[index].options[vote].votes = document.questions[index].options[vote].votes + 1;
            } else {
                var ref;
                document.questions[index].options = ((ref = document.questions[index].options) === null || ref === void 0 ? void 0 : ref.length) > 0 ? [
                    ...document.questions[index].options,
                    vote
                ] : [
                    vote
                ];
                document.questions[index].votes = document.questions[index].votes > 0 ? document.questions[index].votes + 1 : 1;
            }
        });
        await db.collection("polls").replaceOne({
            "_id": document._id
        }, document);
        // Update vote count for the selected option in the poll
        // votes.forEach((element,index) => {
        //     response(element,index,types[index]);
        // });
        // async function response(element,index,type){
        //     if(type == "mcq"){
        //         db.collection("polls").updateOne(
        //             {
        //               "_id": ObjectID(pollID)
        //             },
        //             {
        //               $inc: { `questions.$.question${index}].options.$.votes`: 1 },
        //               $push: { "questions.$.options.$.voters": user }
        //             },
        //             {
        //               upsert: true
        //             }
        //           );
        //     }else{
        //         db.collection("polls").updateOne(
        //             {
        //               "_id": ObjectID(pollID)
        //             },
        //             {
        //               $inc: { "questions.$.options.$.votes": 1 },
        //               $push: { "questions.$.options.$.voters": user }
        //             },
        //             {
        //               upsert: true
        //             }
        //           );
        //     }
        // }
        // Trigger Pusher event to notify clients about new vote
        await _util_pusher_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"].trigger */ .Z.trigger("polling-development", `new-vote-${pollID}`, {});
        // Update user's voted polls
        await dbUsers.collection("users").updateOne({
            "_id": (0,bson__WEBPACK_IMPORTED_MODULE_0__.ObjectID)(userId)
        }, {
            $push: {
                "votedPolls": pollID
            }
        }, {
            upsert: true
        });
        res.status(200).json();
    } catch (error) {
        console.error("Error updating vote count:", error);
        res.status(500).json({
            error: "Internal Server Error"
        });
    }
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [908], () => (__webpack_exec__(4478)));
module.exports = __webpack_exports__;

})();