import { useState } from "react";
import CardStyled from "../../styledComponents/Card";
import Flex from "../../styledComponents/Flex";
import Image from "../../styledComponents/Image";

export default function Product({ product: {title, price, images, description} }) {
	const [isOpen, setOpen] = useState(false);
	return (
		<CardStyled>
			<Flex fd="cl" g={3} p={15}>
                <Image src={images[0]} width={332} height={250} alt={title}/>
                <h4>{title}</h4>
                <p>{description}</p>
                <h4>{price} $</h4>
                <button>Подробнее...</button>
            </Flex>
		</CardStyled>
	);
}
