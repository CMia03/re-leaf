import CommandeBody from "./commandeBody";
import BreadcrumbAccount from "../BreadcrumbAccount";

const CommandeComponent = () => {
    return (
        <div className="px-[100px]">
            <BreadcrumbAccount />
            <CommandeBody />
        </div>
    );
};

export default CommandeComponent;
