import { redirect } from "next/navigation";
import { routing } from "@/i18n/routing";

export default function DashboardCommandePage() {
  redirect(`/${routing.defaultLocale}/dashboard/commande`);
} 