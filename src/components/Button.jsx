import React from "react";

const Button = ({
    type = "button",
    label,
    bgColor,
    textColor,
    fontWeight,
    borderColor,
    hoverBgColor,
    hoverBorderColor,
    height,
    width,
    onClick,
    border,
    borderWidth,
    fontSize,
}) => {
    return (
        <button
            type={type}
            onClick={(e) => onClick(e)}
            className={`m-2 ${width} ${height} ${fontSize} ${bgColor} ${border} ${borderWidth} hover:${hoverBgColor} ${textColor} ${fontWeight}  py-1  px-2 ${borderColor} hover:${hoverBorderColor} rounded  hover:shadow-xl`}
        >
            {label}
        </button>
    );
};
export default Button;
