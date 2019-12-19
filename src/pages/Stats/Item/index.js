import React from "react";
import { useDispatch } from "react-redux";

import { open } from "../../../reducers/popup";
import { Button } from "../../../components/_UI";
import ColoredElement from "../../../components/ColoredElement";

import styles from "./styles.scss";

const Item = props => {
  const { data, value } = props;
  const {
    id,
    keyword,
    color,
    ipad_total_apps,
    ipad_position_info,
    suggestions_count
  } = data;

  const dispatch = useDispatch();

  const onChecked = checked => {
    props.onChecked(id, checked);
  };

  const colors = ["#D6C99F", "#2FB1BF", "#2A83BB", "#82774D", "#D3643D"];
  const randomColor = () => {
    const index = Math.floor(Math.random() * Math.floor(5));
    return colors[index];
  };

  return (
    <tr>
      <td>
        <input
          onChange={e => onChecked(e.target.checked)}
          checked={value}
          type="checkbox"
        />
      </td>
      <td>{keyword}</td>
      <td>
        <Button primary="true" title="Explore" to={`/explore/${id}`} />
      </td>
      <td>
        <Button onClick={() => dispatch(open())} title="show" />
      </td>
      <td>
        {typeof suggestions_count === "number" ||
        typeof suggestions_count === "string"
          ? suggestions_count
          : "—"}
      </td>
      <td>
        {ipad_position_info.position === "-" ? (
          <>—</>
        ) : (
          <>
            {ipad_position_info.position}{" "}
            {ipad_position_info.change !== 0 && (
              <ColoredElement count={ipad_position_info.change}>
                {ipad_position_info.change}
              </ColoredElement>
            )}
          </>
        )}
      </td>
      <td>{ipad_total_apps}</td>
      <td className={styles.color}>
        <div style={{ backgroundColor: colors[color] }}></div>
      </td>
      <td
        className={styles.remove}
        onClick={() => props.onRemove(id)}
        title="Delete"
      >
        <svg height="24px" width="24px" fill="#ccc">
          <path d="M18,20V7H6v13c0,1.1,0.9,2,2,2h8C17.1,22,18,21.1,18,20z"></path>
          <rect x="5" y="4" width="14" height="2"></rect>
          <polygon points="17,6 14,3 10,3 7,6 "></polygon>
        </svg>
      </td>
    </tr>
  );
};

export default Item;
