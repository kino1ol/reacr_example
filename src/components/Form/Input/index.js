const Input = ({ value, name, setState }) => (
    <div>
        <label>{name}:</label>
        <input
            onChange={(event) => {
                setState((value) => {
                    return {
                        ...value,
                        [name]: event.target.value,
                    }
                });
            }}
            style={{ display: "block" }}
            value={value}
        />
    </div>
);

export default Input;