import React from 'react'
import styles from '../styles/InputBox.module.css'

const InputBox = ({ type, wordType, setWord, checkRe }) => {
  return (
    <div className={styles.inputBox}>
      <input type={`${type}`} placeholder={`${wordType}을(를) ${checkRe ? "재" : ""}입력해주세요`} onChange={(e) => {
        setWord(e.target.value);
      }} />
    </div>
  )
}

export default InputBox
