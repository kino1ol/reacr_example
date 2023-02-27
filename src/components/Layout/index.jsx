import Header from "../Header/Header";
import UseGlobalStyles from "../../styles/global";
import { Outlet } from "react-router-dom";
import Popup from "../../styledComponents/Popup";
import { useState } from "react";
import Main from "../../styledComponents/Main";

export default function Layout() {
	const [isOpen, setOpen] = useState(false);
	return (
		<>
			<UseGlobalStyles />
			<Header setOpen={setOpen} />
			<Main>
				<Outlet />
			</Main>
			{isOpen && <Popup />}
		</>
	);
}
