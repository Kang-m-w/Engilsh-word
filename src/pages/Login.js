import React, { useEffect, useState } from "react";
import styles from "../styles/Login.module.css";
import InputBox from "../components/InputBox";
import { Link } from "react-router-dom";
import Button from "../components/Button";

const Login = () => {
  const [id, setId] = useState("");
  const [pwd, setPwd] = useState("");

  useEffect(() => {
    console.log(id, pwd);
  }, [id, pwd]);

  const onSubmit = () => {};

  return (
    <div className={styles.login}>
      <div className={styles.container}>
        <div className={styles.box}>
          <h3 align="center">로그인</h3>
          <div className={styles.inputList}>
            <InputBox type={"text"} wordType={"아이디"} setWord={setId} />
            <InputBox
              type={"password"}
              wordType={"비밀번호"}
              setWord={setPwd}
            />
            <div className={styles.etc}>
              <div className={styles.maintain}>
                <input type="checkbox" />
                <span>계정 기억하기</span>
              </div>
              <span>
                <Link to="/register">회원가입 {">"}</Link>
              </span>
            </div>
            <Button btnvalue={"로그인"} size={"big"} clickEvent={onSubmit} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
