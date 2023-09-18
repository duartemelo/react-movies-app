import React from "react";
import classes from "./Tooltip.module.css";
import PropTypes from "prop-types";

import { Tooltip as ReactTooltip } from "react-tooltip";

const Tooltip = (props) => {
  return (
    <>
      <div
        data-tooltip-id={props.toolTipId}
        data-tooltip-content={props.toolTipText}
        data-tooltip-place={props.toolTipPlace ? props.toolTipPlace : "top"}
        className={props.wrapperClassName ? props.wrapperClassName : null}
      >
        {props.children}
      </div>
      <ReactTooltip id={props.toolTipId} className={classes.tooltip} />
    </>
  );
};

Tooltip.propTypes = {
  toolTipId: PropTypes.string.isRequired,
  toolTipText: PropTypes.string,
  toolTipPlace: PropTypes.string,
  wrapperClassName: PropTypes.string,
  children: PropTypes.node,
};

export default Tooltip;
