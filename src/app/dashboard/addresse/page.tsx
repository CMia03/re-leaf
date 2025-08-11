import { redirect } from "next/navigation";
import { routing } from "@/i18n/routing";

export default function DashboardAddressePage() {
  redirect(`/${routing.defaultLocale}/dashboard/addresse`);
} 