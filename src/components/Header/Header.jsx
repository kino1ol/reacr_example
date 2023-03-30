import ContainerStyled from "../../styledComponents/Container";
import HeaderStyled from "../../styledComponents/Header/Index";
import logo from "../../img/logo.svg";
import NavStyled from "../../styledComponents/Header/Nav";
import Flex from "../../styledComponents/Flex";
import NavLinkStyled from "../../styledComponents/Header/Link";
import Cart from "../Cart";
import { NavLink } from 'react-router-dom';
import Auth from "../Authorization";
import { useState } from "react";

export default function Header() {
	const [backgroundColor, setColor] = useState('#ac3caca7')

	return (
		<HeaderStyled color={backgroundColor}>
			<ContainerStyled>
				<Flex jc="space-between">
					<NavLink onClick={() => setColor('green')} to="/">
						<img width={60} height={60} src={logo} alt="logo" />
					</NavLink>
					<NavStyled>
						<NavLinkStyled onClick={() => setColor('yellow')} to="/products">Продукты</NavLinkStyled>
						<NavLinkStyled to="/contacts">Контакты</NavLinkStyled>
					</NavStyled>
					<Flex g={10}>
					<Auth />
					<Cart />
					</Flex>
				</Flex>
			</ContainerStyled>
		</HeaderStyled>
	);
}
