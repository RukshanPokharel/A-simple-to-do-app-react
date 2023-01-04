import { React, useState, memo } from "react";

const Button = (props) => {
  console.log("Button component is running!"); // for testing if the component is executed or not.
  return (
    <>
      <button type={props.type || "submit"} className="btn btn-primary">
        {/* props.children is the button name that we passed */}
        {props.children}
      </button>
    </>
  );
};

export default memo(Button);
