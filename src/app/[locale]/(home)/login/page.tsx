import LoginComponent from "@/components/features/login/login";

// Force dynamic rendering
export const dynamic = 'force-dynamic';

const LoginPage = () => {
  return (
    <div>
      <LoginComponent />
    </div>
  );
};

export default LoginPage;
