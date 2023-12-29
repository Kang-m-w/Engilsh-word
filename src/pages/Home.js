import React, { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import SearchBar from "../components/SearchBar";
import Button from "../components/Button";
import WordList from "../components/WordList";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Home = ({ data, onDelete, onUpdate }) => {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState("");
  const clickAdd = () => {
    navigate('/addword');
  };

  useEffect(() => {
    console.log(data)
  }, [data]);

  return (
    <div className={styles.home}>
      <div className={styles.container}>
        <h3>📒영단어 암기장</h3>
        <div className={styles.top}>
          <div className={styles.search}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            <SearchBar setSearchValue={setSearchValue} />
          </div>
          <div className={styles.add}>
            <Button
              btnvalue={"단어 추가하기"}
              size={"middle"}
              clickEvent={clickAdd}
            />
          </div>
        </div>
        <h4>단어 리스트</h4>
        <WordList data={data} search={searchValue} onDelete={onDelete} onUpdate={onUpdate} />
      </div>
    </div>
  );
};

export default Home;
