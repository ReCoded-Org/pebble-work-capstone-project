import React from "react";

const Button = ({ type = "button", onClick, children }) => {
    //you should put these classes to the div you will use to wrappe the button so you can use it to change buttons styles
    // <div className='w-max rounded ...'>

    return (
        <>
            <button
                type={type}
                onClick={onClick}
                className='rounded border py-2 px-4 text-white'
            >
                {children}
            </button>
        </>
    );
};

export default Button;
