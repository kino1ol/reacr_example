import Flex from "../../styledComponents/Flex";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

export default function Auth() {
    return (
        <Flex g={10} >
            <SignUp />
            <SignIn />
        </Flex>
    );
};
