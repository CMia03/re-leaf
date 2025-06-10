"use client";

import { useTheme } from "next-themes";
import { Toaster as Sonner, ToasterProps } from "sonner";

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme();

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      toastOptions={{
        classNames: {
          toast: "rounded-md shadow-md !border-0", // commun à tous
          success: "!bg-[var(--tertiary-foreground)] text-white ",
          error: "!bg-red-500 text-white",
        },
      }}
      {...props}
    />
  );
};

export { Toaster };
