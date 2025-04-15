import SignIn from "./signin";
import SignUp from "./signUp";


const LoginComponent = () => {
    return (
        <div className="container mx-auto ">
            <div className="flex flex-col gap-5">
                <div>

                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 w-full px-[100px]">
                    <SignIn />
                    <SignUp />
                </div>

            </div>
        </div>
    );
};
export default LoginComponent;
