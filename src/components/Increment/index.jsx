import { useState, useEffect, PureComponent } from "react";
import ViewIncrement from "../ViewIncrement";

function Increment() {
	const [increment1, setIncrements1] = useState(0);
    const [increment2, setIncrements2] = useState(0);

	const getData = async () => {}

	useEffect(() => {
		console.log('componentDidMount')
		// const data = getData()
		// setIncrements1(data)
	}, [])

	useEffect(() => {
		increment2 && console.log('componentDidUpdate')
	}, [increment2])

	useEffect(() => {
		return () => {
			console.log('componentWillUnmount')
		}
	}, [])

	return (
		<>
        {increment1 !== 10 && 
            <ViewIncrement
            state={{
                count: increment1,
                setIncrements: setIncrements2,
                nameIncrement: "1",
            }}
        />
        }
			<ViewIncrement
				state={{
					count: increment2,
					setIncrements: setIncrements1,
					nameIncrement: "2",
				}}
			/>
			{console.log('is render')}
		</>
	);
}

export default Increment