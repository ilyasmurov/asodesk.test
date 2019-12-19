import React from "react";
import { Link } from "react-router-dom";

import buttonStyles from "../../styles/button.scss";

export const Button = props => {
  const { primary, title, to } = props;

  return (
    <>
      {to ? (
        <Link
          {...props}
          to={to}
          className={[
            buttonStyles.button,
            primary ? buttonStyles.primary : null
          ].join(" ")}
        >
          {title}
        </Link>
      ) : (
        <div
          {...props}
          className={[
            buttonStyles.button,
            primary ? buttonStyles.primary : null
          ].join(" ")}
        >
          {title}
        </div>
      )}
    </>
  );
};
