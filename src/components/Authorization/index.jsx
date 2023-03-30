import { useDispatch, useSelector } from "react-redux";
import { exit } from "../../actions/reducer/auth";
import ButtonStyled from "../../styledComponents/Button";
import Flex from "../../styledComponents/Flex";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

export default function Auth() {
  const auth = useSelector((state) => state.auth.value);
  const dispatch = useDispatch();
  console.log("auth", auth);
  return (
    <Flex g={10}>
      {!auth ? (
        <>
          <SignUp />
          <SignIn />
        </>
      ) : (
        <ButtonStyled onClick={() => dispatch(exit())}>Exit</ButtonStyled>
      )}
    </Flex>
  );
}
