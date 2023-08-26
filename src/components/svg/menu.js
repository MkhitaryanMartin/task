import React from "react";

function Menu({
    width,
    height,
    color,
    onClick,
    classname
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || "40"}
      height={height || "17"}
      fill="none"
      viewBox="0 0 40 17"
      onClick={onClick}
      className={classname}
    >
      <rect width="40" height="3" y="0.2" fill={color || "#FBF7FE"} rx="1.5"></rect>
      <rect width="40" height="3" y="13.2" fill={color || "#FBF7FE"} rx="1.5"></rect>
    </svg>
  );
}

export default Menu;
