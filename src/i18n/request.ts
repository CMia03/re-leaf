import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  if (!locale || !routing.locales.includes(locale as any)) {
    locale = routing.defaultLocale;
  }

  return {
    locale,
    messages: {
      ...(await import(`../translations/${locale}/home.json`)).default,
      ...(await import(`../translations/${locale}/header.json`)).default,
      ...(await import(`../translations/${locale}/blog.json`)).default,
      ...(await import(`../translations/${locale}/contact.json`)).default,
      ...(await import(`../translations/${locale}/login.json`)).default,
      ...(await import(`../translations/${locale}/dashboard.json`)).default,
    },
  };
});
