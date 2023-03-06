import { NavLink } from "react-router-dom";
import ButtonStyled from "../../styledComponents/Button";
import CardStyled from "../../styledComponents/Card";
import Flex from "../../styledComponents/Flex";
import Image from "../../styledComponents/Image";

export default function Product({
	product: { id, title, price, images, description },
}) {
	return (
		<CardStyled>
			<Flex fd="cl" g={3} p={15} minH="inherit" jc="space-between">
				<Flex fd="cl" g={7}>
					<Image
						src={images[0]}
						width={332}
						height={250}
						alt={title}
					/>
					<h4>{title}</h4>
					<p>{description}</p>
				</Flex>
				<Flex fd="cl" g={10} minH="60px" jc="space-between">
					<h4>{price} $</h4>
                    <NavLink to={String(id)}>
					    <ButtonStyled>Подробнее...</ButtonStyled>
                    </NavLink>
				</Flex>
			</Flex>
		</CardStyled>
	);
}
