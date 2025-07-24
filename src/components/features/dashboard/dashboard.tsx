"use client";
import MyAccount from "./myAccount";
import BreadcrumbAccount from "../BreadcrumbAccount";
import { useAuth } from "@/components/contexts/AuthContexts";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const DashboardComponent = () => {
  const { user, loading } = useAuth();

  const router = useRouter();

  useEffect(() => {
    if (!loading && user) {
      router.push("/dashboard");
    } else {
      router.push("/login");
    }
  }, [user, loading]);

  if (loading) {
    return <div className="text-center py-10">Chargement...</div>; // Tu peux mettre un spinner ici si tu veux
  }
  return (
    <div className="px-[100px]">
      <BreadcrumbAccount />
      <MyAccount />
    </div>
  );
};

export default DashboardComponent;
