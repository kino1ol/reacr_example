import { useState } from "react";

export default function Increment2() {

    const [count, setCount] = useState(0);
    const handleClick = () => {
		setCount(count + 1)
	};
    console.log('Increment2')
	return (
		<>
			<h3>Increment2 count: {count}</h3>
			<button onClick={handleClick}>Увеличива count на +1</button>
		</>
	);
}
