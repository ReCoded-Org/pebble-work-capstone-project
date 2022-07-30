import React from "react";

const Button = ({
    type = "button",
    label = "Get started",
    bgColor = "bg-secondary-300",
    textColor = "text-white",
    fontWeight = "font-normal",
    borderColor,
    hoverBgColor,
    hoverBorderColor,
    height = "h-8",
    width = "w-30",
    onClick,
    border,
    borderWidth,
    fontSize,
}) => {
    return (
        <button
            type={type}
            onClick={(e) => onClick(e)}
            className={`mt-1 mb-1 ${width} ${height} ${fontSize} ${bgColor} ${border} ${borderWidth} hover:${hoverBgColor} ${textColor} ${fontWeight}  py-1  px-2 ${borderColor} hover:${hoverBorderColor} rounded  hover:shadow-lg`}
        >
            {label}
        </button>
    );
};
export default Button;
