import MyAccount from "@/components/features/dashboard/myAccount";

// Force dynamic rendering
export const dynamic = 'force-dynamic';

const DashboardPage = () => {
  return (
    <div>
      <MyAccount />
    </div>
  );
};

export default DashboardPage;
