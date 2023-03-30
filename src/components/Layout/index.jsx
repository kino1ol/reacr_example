import Header from "../Header/Header";
import UseGlobalStyles from "../../styles/global";
import { Outlet } from "react-router-dom";
import { PopupStyled } from "../../styledComponents/Popup";
import { useState } from "react";
import Main from "../../styledComponents/Main";
// import { CartContext, DispatchContext } from "../../context";
// import { useReducer } from "react";
// import { cartDispatch } from "../../actions/dispatch/cartDispatch";
import store from '../../store'
import { Provider } from 'react-redux'

export default function Layout() {
	const [isOpen, setOpen] = useState(false);
	// const [cart, dispatch] = useReducer(cartDispatch, [])
	return (
		<>
			<UseGlobalStyles />
			{/* <CartContext.Provider value={cart}>
			<DispatchContext.Provider value={dispatch}> */}
			<Provider store={store}>
			<Header setOpen={setOpen} />
			<Main>
				<Outlet />
			</Main>
			{isOpen && <PopupStyled />}
			</Provider>
			{/* </DispatchContext.Provider>
			</CartContext.Provider> */}
		</>
	);
}
