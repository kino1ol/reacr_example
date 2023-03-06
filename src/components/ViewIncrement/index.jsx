import { memo, useEffect } from "react";
import style from "./style.module.css";

export default function ViewIncrement({ state: {count, setIncrements, nameIncrement} }) {
    const handleClick = () => {
        if (nameIncrement === '1') {
            setIncrements((value) => {
                return value + 1
            })
        } else {
            setIncrements((value) => {
                return value + 1
            })
        }
    }

	return (
		<div>
			<hr />
			Increment {nameIncrement}:
			<h1 className={style.redColor}>{count}</h1>
            <button onClick={handleClick}>
                добавить к Increment {nameIncrement === '1' ? '2' : '1'}
            </button>
		</div>
	);
}
