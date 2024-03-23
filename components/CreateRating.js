import { useState } from "react";
import Link from "next/link";
import { useUser } from "../util/auth/useUser";
import styles from "../styles/Pollform.module.css";
import { AiOutlinePlus, AiOutlineMinus, AiOutlineCopy } from "react-icons/ai";
import Switch from "react-switch";
import { updateUserCookiePolls } from "../util/auth/userCookie";
import { animateScroll as scroll } from "react-scroll/modules";

const CreateRating = (props) => {
  function del() {
    props.remove(props.comp_id);
  }
  return (
    <div>
      <h3 className={styles.subtitle}>Q{props.index} Rating question</h3>
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
    </div>
  );
};

export default CreateRating;
