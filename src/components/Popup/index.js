import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { close } from "../../reducers/popup";

import styles from "./styles.scss";
import animate from "../../styles/animate.scss";

const Popup = ({ children }) => {
  const isOpen = useSelector(state => state.popup.isOpen);
  const dispatch = useDispatch();
  if (!isOpen) return null;
  return (
    <div className={[styles.container, animate.fade].join(" ")}>
      <div
        className={[styles.wrap, animate.fromBottom].join(" ")}
        style={{ animationDelay: ".05s" }}
      >
        <div
          className={[styles.close, animate.fade].join(" ")}
          style={{ animationDelay: ".2s" }}
          onClick={() => dispatch(close())}
        >
          ⛌
        </div>
        <div
          className={[styles.content, animate.fade].join(" ")}
          style={{ animationDelay: ".3s" }}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default Popup;
