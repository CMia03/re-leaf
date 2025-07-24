"use client";
import { useAuth } from "@/components/contexts/AuthContexts";
import BreadcrumbAccount from "../BreadcrumbAccount";
import SignIn from "./signin";
import SignUp from "./signUp";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const LoginComponent = () => {
  const { user, loading, isAuthenticated } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && user && isAuthenticated) {
      router.push("/");
    }
  }, [user, loading, isAuthenticated]);

  if (loading) {
    return <div className="text-center py-10">Chargement...</div>; // Tu peux mettre un spinner ici si tu veux
  }

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
