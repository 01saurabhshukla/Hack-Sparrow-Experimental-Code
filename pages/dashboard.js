import { useEffect, useState } from 'react';
import { auth } from '../util/firebase';
import { useRouter } from "next/router";
import Navbar from '../components/Navbar';
import styles from '../styles/Dashboard.module.css'
import PollList from '../components/PollList'
import clientPromise from '../util/mongodb';
import { ObjectID } from 'bson';
import { countVotes } from '../util/pollHandling';

// Variable to check if bound to authCheck
var authBound = false

// Get list of created_polls and voted polls
// Takes a while because we are getting the current votes of each poll
export async function getServerSideProps(context) {
  const client = await clientPromise
  const db = client.db("users")
  const dbPolls = client.db("polls")
  const redirectLink = context.resolvedUrl
  const {query} = context
  const id = query.id
  const data = await db.collection("users").findOne(
      {
        "_id": ObjectID(id)
      })

  const output = JSON.parse(JSON.stringify(data))
// console.log(output)
  const polls = []
  for (let i = 0; i < output.polls.length; i++) {
    await dbPolls.collection("polls").findOne(
      {
        "_id": ObjectID(output.polls[i])
    }).then((pd)=> {
      // console.log(pd)
      if(pd){
      polls.push({
        id: pd._id.toString(),
        question:pd.title?.toString(),
          votes: countVotes(pd.questions[0])
  
      
      })
    }
    })
  }

  const votedPolls = []
  for (let i = 0; i < output.votedPolls.length; i++) {
    await dbPolls.collection("polls").findOne(
      {
        "_id": ObjectID(output.votedPolls[i])
    }).then((pd)=> {
      // console.log(pd);
      if(pd?.title){
      votedPolls.push({
        id: output.votedPolls[i],
        questions: pd.title?.toString(),
        votes: countVotes(pd.options.questions[0])
      })
    }
    })
  }

  return {
      props: {
          "url" : redirectLink,
          "polls": polls,
          "votedPolls": votedPolls
      }
  }
}

export default function Dashboard(props){
  const router = useRouter();
  const [madePolls, setMadePolls] = useState(true)

  function displayPolls() {
    setMadePolls(true)
  }

  function displayVotes() {
    setMadePolls(false)
  }

  useEffect( ()=> {
    if (!authBound) {
      auth.onAuthStateChanged((authUser) => {
        if (!authUser) {
            router.push(`/login?redirect=${props.url}`);
        }
      })
      authBound = true
    }

  })

  return (
    <div >
      <Navbar></Navbar>
      <div className={styles.main}>
        <div className={styles.menu}>
          <button onClick={displayPolls} className={(madePolls)? styles.activeButton : styles.button}>Your polls</button>
          <button onClick={displayVotes} className={(!madePolls)? styles.activeButton : styles.button}>Previous votes</button>
        </div>
        {
          (madePolls)?
          <PollList pageType='poll' polls={props.polls}></PollList>:
          <PollList pageType='poll' polls={props.votedPolls}></PollList>
        }
      </div>
    </div>
  )
}
