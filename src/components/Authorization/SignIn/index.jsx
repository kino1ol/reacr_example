import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { set } from "../../../actions/reducer/auth";
import ButtonStyled from "../../../styledComponents/Button";
import Flex from "../../../styledComponents/Flex";
import Popup from "../../Popup";

export default function SignIn() {
  const [isOpen, setOpen] = useState(false);
  const [isComplete, setComplete] = useState(null);
  const login = useRef(null);
  const pass = useRef(null);
  const dispatch = useDispatch();

  return (
    <>
      <ButtonStyled onClick={open} w={80}>
        Sign-In
      </ButtonStyled>
      <Popup isOpen={isOpen} setOpen={setOpen}>
        {isComplete === null && (
          <div style={{ marginTop: 40 }}>
            <Flex fd="col" g={25}>
              <Flex fd="col" g={15}>
                <label>Логин</label>
                <input ref={login} type="text" />
                <label>Пароль</label>
                <input ref={pass} type="password" />
              </Flex>
              <ButtonStyled onClick={submit} type="submit">
                Войти
              </ButtonStyled>
            </Flex>
          </div>
        )}
        {isComplete === false && (
          <h3 style={{ color: "red" }}>Неудачная попытка входа</h3>
        )}
        {isComplete === true && (
          <h3 style={{ color: "green" }}>Вы авторизованы!</h3>
        )}
      </Popup>
    </>
  );

  function open() {
    setOpen(true);
  }

  async function submit() {
    let statusOk;
    await fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: login.current.value,
        password: pass.current.value,
      }),
    })
      .then((res) => {
        statusOk = res.ok;
        return res.json();
      })
      .then((userData) => {
        if (statusOk) {
          setComplete(true);
          setTimeout(() => {
            setOpen(false);
            setComplete(null);
          }, 1000);
          dispatch(set(userData));
        } else {
          setComplete(false);
          setTimeout(() => setComplete(null), 1000);
        }
      });
  }
}
