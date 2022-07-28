const InputComponent = (props) => {
    const { placeholder = "Your input here", type = "text", callback } = props;
    return (
        <input
            className={`h-full w-full rounded-md border-2 border-black p-2`}
            type={type}
            placeholder={placeholder}
            onChange={callback}
        />
    );
};

export default InputComponent;
