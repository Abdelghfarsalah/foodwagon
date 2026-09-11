"use client";

import { usePathname, useRouter } from "@/i18n/navigation";
import { useLocale } from "next-intl";

export const useLanguage = () => {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const changeLanguage = (newLocale: "en" | "ar") => {
    router.replace(pathname, {
      locale: newLocale,
    });
  };

  return {
    locale,
    changeLanguage,
  };
};