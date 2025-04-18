import PersonnalInfoBody from "./personnalInfoBody";
import BreadcrumbAccount from "../BreadcrumbAccount";


const PersonnalInfoComponent = () => {
    return (
        <div className="px-[100px]">
            <BreadcrumbAccount />
            <PersonnalInfoBody />
        </div>
    );
};

export default PersonnalInfoComponent;
