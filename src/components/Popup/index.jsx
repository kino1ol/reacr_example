import { PopupStyled, CrossImg } from "../../styledComponents/Popup";
import cross from "../../img/close.png";

export default function Popup({ isOpen, setOpen, children }) {
  return (
    <div>
      {isOpen && (
        <PopupStyled>
          <CrossImg
            onClick={close}
            src={cross}
            alt="close"
            width={25}
            height={25}
          />
          {children}
        </PopupStyled>
      )}
    </div>
  );

  function close() {
    setOpen(false);
  }
}
