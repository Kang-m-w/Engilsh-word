import React, { useState } from "react";
import styles from "../styles/WordItem.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const WordItem = ({ id, english, korean, isMemorized, onDelete, onUpdate }) => {
  const [isChecked, setIsChecked] = useState(isMemorized);

  const checkhandler = (e) => {
    setIsChecked(e.target.checked);
    onUpdate(id, english, korean, isChecked);
  };

  const listenWord = () => {
    let word = new SpeechSynthesisUtterance(english);
    word.lang = "en-US";
    speechSynthesis.speak(word);
};


  return (
    <div className={styles.container} onClick={listenWord}>
      <div className={styles.checkbox}>
        <input type="checkbox" checked={isChecked} onChange={checkhandler} />
      </div>
      <div className={styles.body}>
        <span
          id={styles.english}
          style={
            isChecked
              ? {
                  textDecorationLine: "line-through",
                  textDecorationThickness: "2px",
                  color: "gray",
                }
              : {}
          }
        >
          {english}
        </span>
        <span id={styles.korean}>{korean}</span>
      </div>
      <div className={styles.delete}>
        <span
          className={styles.deleteBtn}
          onClick={() => {
            onDelete(id);
          }}
        >
          <FontAwesomeIcon icon={faXmark} />
        </span>
      </div>
    </div>
  );
};

export default WordItem;
