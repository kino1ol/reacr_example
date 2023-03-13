import { useRef, useState } from "react";
import ButtonStyled from "../../../styledComponents/Button";
import Flex from "../../../styledComponents/Flex";
import Popup from "../../Popup";

export default function SignIn() {
	const [isOpen, setOpen] = useState(false);
    const [str, setStr] = useState('')
    const login = useRef(null);
    const pass = useRef(null);
    const firstRender = useRef(false)
    let aFirstRender = false;

	return (
		<>
			<ButtonStyled onClick={open} w={80}>Sign-In</ButtonStyled>
			<Popup isOpen={isOpen} setOpen={setOpen} >
				<div>
                    <Flex fd="col">
					<label>Логин</label>
                    {str}
					<input ref={login} type="text" />
					<label>Пароль</label>
					<input ref={pass} type="password" />
					<ButtonStyled onClick={submit} type="submit">Войти</ButtonStyled>
                    </Flex>
				</div>
			</Popup>
		</>
	);

    function open() {
        setOpen(true)
    }
	function submit() {
        // console.log('Login',login);
        // console.log('Pass',pass);
        setStr('123')
        console.log(firstRender);
        console.log(aFirstRender);
        console.log(aFirstRender);
    }
}
