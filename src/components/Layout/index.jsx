import Header from "../Header/Header";
import UseGlobalStyles from "../../styles/global";
import { Outlet } from "react-router-dom";
import Popup from "../../styledComponents/Popup";
import { useState } from "react";
import Main from "../../styledComponents/Main";
import { CartContext, DispatchContext } from "../../context";
import { useReducer } from "react";
import { cartDispatch } from "../../actions/dispatch/cartDispatch";

export default function Layout() {
	const [isOpen, setOpen] = useState(false);
	const [cart, dispatch] = useReducer(cartDispatch, [])
	return (
		<>
			<UseGlobalStyles />
			<CartContext.Provider value={cart}>
			<DispatchContext.Provider value={dispatch}>
			<Header setOpen={setOpen} />
			<Main>
				<Outlet />
			</Main>
			{isOpen && <Popup />}
			</DispatchContext.Provider>
			</CartContext.Provider>
		</>
	);
}
