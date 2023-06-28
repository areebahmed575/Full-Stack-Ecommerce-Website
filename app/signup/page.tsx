import SignupFormComp from "../components/Signup";
import ContextWrapper from "@/global/context";


const SignupForm = () => {
    return (
        <ContextWrapper>
            <SignupFormComp />
        </ContextWrapper>
    );
};

export default SignupForm;