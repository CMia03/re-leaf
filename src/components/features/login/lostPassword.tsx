import ImageLostPasswordBody from "./imageLostPasswordBody";
import LostPasswordBody from "./lostPasswordBody";


const LostPasswordComponent = () => {
    return (
        <div className="container mx-auto">
            <div className="flex flex-col gap-5">
                <div>

                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 w-full">
                    <LostPasswordBody />
                    <ImageLostPasswordBody />
                </div>

            </div>
        </div>
    );
};
export default LostPasswordComponent;
