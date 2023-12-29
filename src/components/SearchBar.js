import React from 'react'
import styles from '../styles/SearchBar.module.css'

const SearchBar = ({ setSearchValue }) => {
  return (
    <div className={styles.searchbar}>
      <input placeholder='검색할 단어를 입력해주세요' onChange={(e) => {
        setSearchValue(e.target.value);
      }} />
    </div>
  )
}

export default SearchBar
