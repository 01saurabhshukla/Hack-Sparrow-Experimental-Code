import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useUser } from "../util/auth/useUser";
import styles from "../styles/VoteDisplay.module.css";
import { updateUserCookieVotes } from "../util/auth/userCookie";
import { ObjectId } from "bson";

// Variable to check if user voted
// Used to prevent multiple votes from registering if spam voting
var voted = false;

export default function VoteDisplay(props) {
  const { user, logout } = useUser();
  useEffect(() => {
    voted = false;
  }, []);



  const router = useRouter();

  const data = props.data;
  const id = data._id;

  const [selectedOptions, setSelectedOptions] = useState(Array(data.questions.length).fill(null));
  const [textInput, setTextInput] = useState('');
  const [rangeInput, setRangeInput] = useState(3); // Default value for range input
  const [showModal, setShowModal] = useState(false);
  const [questionvote,setQuestionVote]=useState(Array(data.questions.length).fill(null))

// HeadAche Wala Code
const handleSubmit =  async (questionIndex, selectedOptionIndex) => {
  try {
    console.log(questionvote);
    // Send a POST request to your backend API to update the vote count
    const response = await fetch('/api/update_vote_count', {
      method: 'POST',
      body: JSON.stringify({
        "_id": ObjectId(data._id),
        "votes" : questionvote,
        "user" : user,
        "types": data.questions.map((question) =>{
          return question.type;
        })
        //"userid": 
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (response.ok) {
      console.log('Vote count updated successfully');
    } else {
      console.error('Failed to update vote count');
    }
  } catch (error) {
    console.error('Error updating vote count:', error);
  }
};

  

  const handleOptionSelect = (questionIndex, optionIndex) => {
    const newSelectedOptions = [...selectedOptions];
    newSelectedOptions[questionIndex] = optionIndex;
    setSelectedOptions(newSelectedOptions);
    const vote = questionvote;
    questionvote[questionIndex] = optionIndex;
    setQuestionVote(questionvote);
  };

  const handleTextChange = (i,event) => {
    setTextInput(event);
    const vote = questionvote;
    questionvote[i] = event;
    setQuestionVote(questionvote)
  };

  const handleRangeChange = (i,event) => {
    setRangeInput(parseInt(event));
    const vote = questionvote;
    questionvote[i] = event;
    setQuestionVote(questionvote)
  };

  return (
    <div className={styles.main}>
      <div className={styles.flexColumn}>
        <h1 className={styles.title}>{data.title}</h1>
        {data.questions.map((question, questionIndex) => {
          return (
            <div key={questionIndex}>
              <h2>
                {questionIndex + 1}. {question.question}
              </h2>
              {question.type === "mcq" && (
                <>
                  {question.options.map((option, optionIndex) => (
                    <div key={optionIndex}>
                      {user?.email && (
                        <button 
                          className={selectedOptions[questionIndex] === optionIndex ? `${styles.button} ${styles.selected}` : styles.button}
                          onClick={() => handleOptionSelect(questionIndex, optionIndex)}
                        >
                          {String.fromCharCode(97 + optionIndex)}. {option.option}
                        </button>
                      )}
                    </div>
                  ))}
                </>
              )}
              {question.type === "rating" && (
                <div>
                  {/* Render rating input here */}
                  <input 
                    type="range" 
                    min="1" 
                    max="5" 
                    value={rangeInput} 
                    onChange={(e)=>handleRangeChange(questionIndex,e.target.value)} 
                  />
                  <p>Selected Rating: {rangeInput}</p>
                </div>
              )}
              {question.type === "text" && (
                <div>
                  {/* Render text input here */}
                  <input 
                    className={styles.input} 
                    type="text" 
                    placeholder="Type Your Answer..." 
                    value={textInput} 
                    onChange={(e)=>handleTextChange(questionIndex,e.target.value)} 
                    required 
                  />
                </div>
              )}
            </div>
          );
        })}
        <button onClick={handleSubmit}>Submit</button>
        {showModal && (
          <div className={styles.modal}>
            <div className={styles.modalContent}>
              <h2>Thank you for your submission!</h2>
              {/* Additional content in modal if needed */}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};


