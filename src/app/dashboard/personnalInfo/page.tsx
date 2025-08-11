import { redirect } from "next/navigation";
import { routing } from "@/i18n/routing";

export default function DashboardPersonnalInfoPage() {
  redirect(`/${routing.defaultLocale}/dashboard/personnalInfo`);
} 