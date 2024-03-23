import clientPromise from '../util/mongodb'
import PollList from '../components/PollList';
import Navbar from '../components/Navbar';
import styles from '../styles/Browse.module.css'
import { countVotes } from '../util/pollHandling';

// Getting list of all public polls
export async function getServerSideProps(context) {
  const client = await clientPromise
  const dbPolls = client.db("polls")
  const redirectLink = context.resolvedUrl

  const query = await dbPolls.collection("polls").find(
    {"private": { $eq: false} },
  ).toArray()

  const polls = query.map((poll) => {
    return {
      id: poll._id.toString(),
      question:poll.title?.toString(),
          votes: countVotes(poll.questions[0])

      // votes: countVotes(poll.options)
    }
  })
  for(let i=0;i<polls.length;i++)
console.log(polls[i]);
  // const polls = query.map((poll) => {
  //   return {
  //     id: poll._id.toString(),
  //     question: poll.question,
  //     votes: countVotes(poll.questions.options)
  //   }
  // })



  // const sortedPolls = polls.sort((a, b) => {
  //   return b.votes - a.votes
  // })

  return {
      props: {
          "url" : redirectLink,
          "polls": polls
      }
  }
}

export default function Browsepolls(props) {  
  // console.log(props.polls);
  return (
    <div>
      <Navbar></Navbar>
      <div className={styles.main}>
        <PollList pageType='vote' polls={props.polls}></PollList>
      </div>
    </div>
  )
}