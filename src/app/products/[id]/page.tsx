import { redirect } from "next/navigation";
import { routing } from "@/i18n/routing";

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  redirect(`/${routing.defaultLocale}/products/${id}`);
} 