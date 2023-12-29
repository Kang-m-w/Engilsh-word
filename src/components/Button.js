import React from "react";
import styles from "../styles/Button.module.css";
import classNames from "classnames";

const Button = ({ btnvalue, size, clickEvent }) => {
  const cx = classNames.bind(styles);

  return (
    <button
      className={`${cx([`btn-${size}`].join(""))} ${styles.btn}`}
      onClick={clickEvent}
    >{btnvalue}</button>
  );
};

export default Button;
