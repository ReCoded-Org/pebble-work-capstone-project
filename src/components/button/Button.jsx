import React from "react";

const Button = ({
    type = "button",
    label,
    bgColor,
    textColor,
    borderColor,
    hoverBgColor,
    hoverBorderColor,
    onClick,
}) => {
    return (
        <button
            type={type}
            onClick={(e) => onClick(e)}
            className={`m-1 ${bgColor} hover:${hoverBgColor} ${textColor}  border  py-1 px-4 ${borderColor} hover:${hoverBorderColor} rounded shadow`}
        >
            {label}
        </button>
    );
};
export default Button;
