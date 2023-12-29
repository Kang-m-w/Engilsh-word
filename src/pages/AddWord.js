import React from "react";
import styles from "../styles/AddWord.module.css";
import InputBox from "../components/InputBox";
import Button from "../components/Button";

const AddWord = ({ addWordFn, setKor, setEng }) => {
  return (
    <div className={styles.addword}>
      <div className={styles.container}>
        <div className={styles.box}>
          <h3>영단어 추가하기</h3>
          <span>단어를 추가할 수 있습니다!</span>
          <InputBox type={"text"} wordType={"영단어"} setWord={setEng} />
          <InputBox type={"text"} wordType={"한국어"} setWord={setKor} />
          <div className={styles.area}></div>
          <Button
            btnvalue={"단어 추가하기"}
            size={"big"}
            clickEvent={addWordFn}
          />
        </div>
      </div>
    </div>
  );
};

export default AddWord;
