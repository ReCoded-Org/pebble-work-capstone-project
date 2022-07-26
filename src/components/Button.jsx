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
    onClick,
}) => {
    return (
        <button
            type={type}
            onClick={(e) => onClick(e)}
            className={`m-1 p-0 ${bgColor}  hover:${hoverBgColor} ${textColor} ${fontWeight} border  px-4 ${borderColor} hover:${hoverBorderColor} rounded  hover:shadow-xl`}
        >
            {label}
        </button>
    );
};
export default Button;
