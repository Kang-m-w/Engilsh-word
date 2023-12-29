import React, { useState } from "react";
import styles from "../styles/Register.module.css";
import InputBox from "../components/InputBox";
import Button from "../components/Button";

const Register = () => {
  const [id, setId] = useState("");
  const [pwd, setPwd] = useState("");
  const [checkPwd, setCheckPwd] = useState("");

  const regexId = /^[a-zA-Z0-9]{4,12}$/;
  const regexPwd = /^(?=.*[a-z])(?=.*[0-9])(?=.*[\W_])[a-z0-9\W_]{8,16}$/;

  const onSubmit = () => {
    if (!regexId.test(id)) {
      alert("아이디를 다시 확인해주세여")
    } else if (!regexPwd.test(pwd)) {
      alert("비밀번호를 다시 확인해주세여")
    } else if (pwd && checkPwd && pwd === checkPwd) {
      alert('비밀번호가 일치합니다');
    };
  };

  return (
    <div className={styles.register}>
      <div className={styles.container}>
        <div className={styles.box}>
          <h3 align="center">회원가입</h3>
          <div className={styles.inputList}>
            <InputBox type={"text"} wordType={"아이디"} setWord={setId} />
            <InputBox
              type={"password"}
              wordType={"비밀번호"}
              setWord={setPwd}
            />
            <InputBox
              type={"password"}
              wordType={"비밀번호"}
              setWord={setCheckPwd}
              checkRe={true}
            />
            <div className={styles.area} />
            <Button btnvalue={"회원가입"} size={"big"} clickEvent={onSubmit} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
