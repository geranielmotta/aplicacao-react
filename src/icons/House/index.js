import React from "react";
import PropTypes from "prop-types";
import grey from "@material-ui/core/colors/grey";
import { SvgIcon } from "@material-ui/core";

export default function House({ color, size }) {
  return (
    <SvgIcon width={size} height={size}>
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path
        fill={color}
        d="M12 5.69l5 4.5V18h-2v-6H9v6H7v-7.81l5-4.5M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z"
      />
    </SvgIcon>
  );
}

House.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
};

House.defaultProps = {
  size: "100%",
  color: grey[50],
};
