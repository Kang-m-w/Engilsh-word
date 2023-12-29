import React, { useEffect, useState } from "react";
import styles from "../styles/WordList.module.css";
import WordItem from "./WordItem";

const WordList = ({ data, search, onDelete, onUpdate }) => {
  const [searchData, setSearchData] = useState([]);


  useEffect(() => {
    const copyList = JSON.parse(JSON.stringify(data));
    const filteredData = copyList.filter((item) =>
      item.english.includes(search),
    );

    setSearchData(filteredData);
  }, [data, search])

  return (
    <div className={styles.list}>
      {searchData.map((it) => (
        <WordItem
          key={it.id}
          id={it.id}
          english={it.english}
          korean={it.korean}
          isMemorized={it.isMemorized}
          onDelete={onDelete}
          onUpdate={onUpdate}
        />
      ))}
    </div>
  );
};

export default WordList;
