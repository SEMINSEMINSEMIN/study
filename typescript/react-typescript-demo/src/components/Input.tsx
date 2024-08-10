type InputProps = {
    value: string;
};

// props destructuring
export const Input = ({ value }: InputProps) => {
    const handleInpChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event);
    };
    return <input type="text" value={value} onChange={handleInpChange} />;
};
