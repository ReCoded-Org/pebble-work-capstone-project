const InputComponent = ({
    placeholder = "Your input here",
    type = "text",
    callback,
    className = "h-full w-full rounded-md border-2 border-black p-2",
    label,
    name,
    id,
    value,
}) => {
    return (
        <>
            <input
                className={className}
                type={type}
                placeholder={placeholder}
                onChange={callback}
                name={name}
                id={id}
                value={value}
            />
            <label htmlFor={name}>{label}</label>
        </>
    );
};

export default InputComponent;
