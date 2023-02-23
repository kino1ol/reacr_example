import Header from "../Header/Header";
import UseGlobalStyles from "../../styles/global";
import { Outlet } from "react-router-dom";
import Popup from "../../styledComponents/Popup";
import { useState } from "react";

export default function Layout() {
	const [isOpen, setOpen] = useState(false);
	return (
		<>
			<UseGlobalStyles />
			<Header setOpen={setOpen} />
			<main>
				<Outlet />
			</main>
			{isOpen && <Popup />}
		</>
	);
}
