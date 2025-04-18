import MyAccount from "./myAccount";
import BreadcrumbAccount from "../BreadcrumbAccount";


const DashboardComponent = () => {
    return (
        <div className="px-[100px]">
            <BreadcrumbAccount />
            <MyAccount />
        </div>
    );
};

export default DashboardComponent;
