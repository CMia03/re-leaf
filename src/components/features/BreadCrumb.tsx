"use client";
import { Typography } from "../re-leaf/Typography";
import { useRouter } from "next/navigation";

const Breadcrumb = ({
  BreadcrumbItems,
}: {
  BreadcrumbItems: { label: string; path?: string }[];
}) => {
  const router = useRouter();
  const navigateTo = (path: string) => router.push(path);
  return (
    <div className="flex items-center gap-2 mb-8.5">
      {BreadcrumbItems.map((item, index) => (
        <span key={index} className="flex  gap-2">
          <Typography
            variant="p"
            className="cursor-pointer"
            onClick={() => item.path && navigateTo(item.path)}
          >
            {item.label}
          </Typography>
          {index !== BreadcrumbItems.length - 1 && "/"}
        </span>
      ))}
    </div>
  );
};

export default Breadcrumb;
