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
    customStyle,
}) => {
    return (
        <button
            type={type}
            onClick={(e) => onClick(e)}
            className={`m-2 ${width} ${height} ${bgColor}  hover:${hoverBgColor} ${textColor} ${fontWeight}  py-1  px-2 ${borderColor} hover:${hoverBorderColor}  rounded hover:shadow-xl ${customStyle}`}
        >
            {label}
        </button>
    );
};
export default Button;
