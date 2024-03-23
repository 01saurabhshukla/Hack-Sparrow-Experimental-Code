import { ObjectID } from 'bson';
import clientPromise from '../../util/mongodb';
import pusher from '../../util/pusher.js';
import { ObjectId } from 'bson';

export default async function handler(req, res) {
  try {
    const client = await clientPromise;
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
    const document = await db.collection("polls").findOne({ "_id": ObjectId(pollID) })
    console.log(document)
    votes.forEach((vote,index)=>{
      if(types[index]==="mcq"){
        document.questions[index].options[vote].votes=document.questions[index].options[vote].votes+1;
      }else{
        document.questions[index].options = (document.questions[index].options?.length>0)?[...document.questions[index].options,vote]:[vote];
        document.questions[index].votes = (document.questions[index].votes>0)?document.questions[index].votes+1:1;
      }
    })
    await db.collection("polls").replaceOne({"_id":document._id},document);

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
    await pusher.trigger('polling-development', `new-vote-${pollID}`, {});

    // Update user's voted polls
    await dbUsers.collection("users").updateOne(
      {
        "_id": ObjectID(userId)
      },
      {
        $push: { "votedPolls": pollID }
      },
      {
        upsert: true
      }
    );

    res.status(200).json();
  } catch (error) {
    console.error("Error updating vote count:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
