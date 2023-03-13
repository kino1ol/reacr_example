import ButtonStyled from "../../styledComponents/Button";
import PopupStyled from "../../styledComponents/Popup";

export default function Popup({ isOpen, setOpen, children }) {
	return (
		<div>
			{isOpen && (
				<PopupStyled>
					<ButtonStyled onClick={close} type="button" w={80}>
						Закрыть
					</ButtonStyled>
                    {children}
				</PopupStyled>
			)}
		</div>
	);

    function close() {
        setOpen(false)
    }
}
