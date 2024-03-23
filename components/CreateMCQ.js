import { useState } from "react";
import Link from "next/link";
import { useUser } from "../util/auth/useUser";
import styles from "../styles/Pollform.module.css";
import { AiOutlinePlus, AiOutlineMinus, AiOutlineCopy } from "react-icons/ai";
import Switch from "react-switch";
import { updateUserCookiePolls } from "../util/auth/userCookie";
import { animateScroll as scroll } from "react-scroll/modules";
// Generates a div with count(amount) input fields, called when we increase or decrease the size of the form

let listSize = 2;

const CreateMCQ = (props) => {
  const [options, setOptions] = useState(makeOptionsList(listSize));
  function makeOptionsList(count) {
    const optionsList = [];
    for (let i = 0; i < count; i++) {
      optionsList.push(i + 1);
    }
    return optionsList.map((count) => {
      return (
        <div key={count} className={styles.inputBox}>
          <input
            className={styles.input}
            type="text"
            id={`option${props.index}-${count}`}
            name={`option${props.index}-${count}`}
            placeholder={`Option ${count}`}
            required
          />
        </div>
      );
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

  return (
    <div>
      <h3 className={styles.subtitle}>
        Q{props.index} Multiple Choice question
      </h3>
      <div className={styles.flexRow}>
        <div className={`${styles.inputBox} {$styles.flexColumn} `}>
          <input
            className={styles.input}
            type="text"
            id={`question${props.index}`}
            name="question"
            placeholder="Poll Question"
            required
          />
        </div>
        <button
          className={`${styles.button} ${styles.red} ${styles.flexColumn}`}
          type="button"
          onClick={del}
        >
          {/* <div className={styles.flexRow}> */}
          <AiOutlineMinus className={styles.icon} />
          {/* <p className={styles.buttonText}>Remove option</p> */}
          {/* </div> */}
        </button>
      </div>
      <div className={styles.flexColumn}>
        <h3 className={styles.subtitle}>Answer options</h3>
        {options}
      </div>
      <div className={styles.optionsButtons}>
        <button
          className={`${styles.button} ${styles.blue}`}
          type="button"
          onClick={increaseList}
        >
          <div className={styles.flexRow}>
            <AiOutlinePlus className={styles.icon} />
            <p className={styles.buttonText}>Add option</p>
          </div>
        </button>
        <button
          className={`${styles.button} ${styles.red}`}
          type="button"
          onClick={decreaseList}
        >
          <div className={styles.flexRow}>
            <AiOutlineMinus className={styles.icon} />
            <p className={styles.buttonText}>Remove option</p>
          </div>
        </button>
      </div>
    </div>
  );
};

export default CreateMCQ;
