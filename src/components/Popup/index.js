import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { close } from "../../reducers/popup";

import styles from "./styles.scss";

const Popup = ({ children }) => {
  const isOpen = useSelector(state => state.popup.isOpen);
  const dispatch = useDispatch();
  if (!isOpen) return null;
  return (
    <div className={styles.container}>
      <div className={styles.wrap}>
        <div className={styles.close} onClick={() => dispatch(close())}>
          ⛌
        </div>
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
};

export default Popup;
