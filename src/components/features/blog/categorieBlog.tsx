import React, { useEffect, useState } from "react";
import { Typography } from "@/components/re-leaf/Typography";
import { useTranslations } from "next-intl";
import { Category } from "@/generated/graphql";
import client from "@/graphql/appoloClient";
import { GET_BLOG_PER_CATEGORY } from "@/graphql/queries/categories";

const CategorieBlog = ({
  onCategorySelect,
}: {
  onCategorySelect: (slug: string) => void;
}) => {
  const t = useTranslations("label");
  const translate = useTranslations("label.listCategorie");

  const [categories, setCategories] = useState<Category[]>([]);

  const fetchBlogCategories = async () => {
    try {
      const { data } = await client.query({
        query: GET_BLOG_PER_CATEGORY,
      });

      setCategories(data.categories);
    } catch (error) {
      console.error("Erreur lors du chargement des categories:", error);
    }
  };

  useEffect(() => {
    fetchBlogCategories();
  }, []);

  return (
    <div>
      <div className="flex flex-col gap-8">
        <Typography variant="h4" className="font-semibold">
          {t("categories")}
        </Typography>
        <div className="flex flex-col gap-6">
          {categories.map((item, index) => (
            <Typography
              key={index}
              variant="D1"
              className="font-normal cursor-pointer hover:text-primary transition"
              onClick={() => onCategorySelect(item.slug!)}
            >
              {item.name}
            </Typography>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategorieBlog;
