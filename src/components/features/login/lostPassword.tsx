import ImageLostPasswordBody from "./imageLostPasswordBody";
import LostPasswordBody from "./lostPasswordBody";
import BreadcrumbAccount from "../BreadcrumbAccount";



const LostPasswordComponent = () => {
    return (
        <div className="container mx-auto mb-20">
            <div className="flex flex-col gap-5 mt-5  px-[100px]">
                <div className="mb-[-5em]">
                    <BreadcrumbAccount />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 ">
                    <LostPasswordBody/>
                    <ImageLostPasswordBody />
                </div>

            </div>
        </div>
    );
};
export default LostPasswordComponent;
