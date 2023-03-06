import { useContext } from "react";
import { CartContext } from "../../context";
import cartIcon from "../../img/cart-2872012-2389411.webp";
import {
	CartCountStyled,
	CartCountWrapper,
} from "../../styledComponents/Cart";

export default function Cart() {
    const cart = useContext(CartContext)

	return (
		<CartCountWrapper>
			<img src={cartIcon} alt="cart" width={45} height={45} />
			<CartCountStyled>
				{cart.reduce((acc, product) => {
                    return acc + product.count
                }, 0)}
			</CartCountStyled>
		</CartCountWrapper>
	);
}
