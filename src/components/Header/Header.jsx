import ContainerStyled from "../../styledComponents/Container";
import HeaderStyled from "../../styledComponents/Header/Index";
import logo from "../../img/logo.svg";
import NavStyled from "../../styledComponents/Header/Nav";
import Flex from "../../styledComponents/Other/Flex";
import NavLinkStyled from "../../styledComponents/Header/Link";
import Popup from "../../styledComponents/Popup";
import { useState } from "react";

export default function Header() {
	return (
		<HeaderStyled>
			<ContainerStyled>
				<Flex>
					<img width={60} height={60} src={logo} alt="logo" />
					<NavStyled>
						<NavLinkStyled to="/products">Продукты</NavLinkStyled>
						<NavLinkStyled to="/contacts">Контакты</NavLinkStyled>
					</NavStyled>
				</Flex>
				{/* <button onClick={() => setOpen(!isOpen)}>Open popup</button> */}
			</ContainerStyled>
		</HeaderStyled>
	);
}
