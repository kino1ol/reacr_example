import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { DispatchContext } from "../../../context";
import ButtonStyled from "../../../styledComponents/Button";
import ContainerStyled from "../../../styledComponents/Container";
import Image from "../../../styledComponents/Image";

export default function ProductCard() {
	const { id } = useParams();
	const product = useLoaderData(id);
	const { creationAt, description, images, price, title, updatedAt } =
		product;

	const [count, setCount] = useState(0);
	const [isError, setError] = useState(false);
	const [isComplete, setComplete] = useState(false);

    useEffect(() => {
        isComplete && setTimeout(() => setComplete(false), 3000)
    }, [isComplete])

	const dispatch = useContext(DispatchContext);
	return (
		<article>
			<ContainerStyled>
				<h1>{title}</h1>
				<Image src={images[0]} alt={title} />
				<p>Дата создания: {new Date(creationAt).toDateString()}</p>
				<p>Дата обновления: {new Date(updatedAt).toDateString()}</p>
				<h3>Описание</h3>
				<p>{description}</p>
				<h4>Цена:</h4>
				<h4>{price} $</h4>
				<div style={{display: 'flex'}}>
					<button onClick={handleMinus}>-</button>
					<h3>{count}</h3>
					<button onClick={handlePlus}>+</button>
				</div>
				<ButtonStyled
					onClick={handleAdd}>
					Добавить в корзину
				</ButtonStyled>
                {isError && (
                    <div style={{color: 'red'}}>
                        Поставь количество товара больше 0
                    </div>
                )}
                {isComplete && (
                    <div style={{color: 'green'}}>
                        Товар добавлен
                    </div>
                )}
			</ContainerStyled>
		</article>
	);
    function handleAdd() {
        if (!count) {
            setError(true)
        } else {
            setError(false)
            dispatch({ type: "add", payload: {
                ...product,
                 count
            } })
            setComplete(true)
        }
    }
    function handlePlus() {
        setCount(count + 1)
    }
    function handleMinus() {
        if (count) {
            setCount(count - 1)
        }
    }
}
