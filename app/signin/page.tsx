import SignInForm from "../components/SignIn"
import ContextWrapper from "@/global/context"

const SignIn = () => {
    return (
        <ContextWrapper>
            <SignInForm />
        </ContextWrapper>
    )
}

export default SignIn