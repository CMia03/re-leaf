import BreadcrumbAccount from "../BreadcrumbAccount";
import SignIn from "./signin";
import SignUp from "./signUp";


const LoginComponent = () => {
    return (
        <div className="container mx-auto ">
            <div className="flex flex-col gap-2 px-[100px]">
                <div className="mt-2">
                    <BreadcrumbAccount />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 w-full">
                    <SignIn />
                    <SignUp />
                </div>

            </div>
        </div>
    );
};
export default LoginComponent;
