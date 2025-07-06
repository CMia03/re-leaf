import React, { useEffect, useState } from "react";
import { Typography } from "@/components/re-leaf/Typography";
import { useTranslations } from "next-intl";
import { Category } from "@/generated/graphql";
import client from "@/graphql/appoloClient";
import { GET_BLOG_PER_CATEGORY } from "@/graphql/queries/categories";
import { Button } from "@/components/ui/button";

const CategorieBlog = ({
  onCategorySelect,
}: {
  onCategorySelect: (slug: string | null) => void;
}) => {
  const t = useTranslations("label");
  // const translate = useTranslations("label.listCategorie");
  const translate = useTranslations("header");

  const [categories, setCategories] = useState<Category[]>([]);

  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

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
      <div className="flex flex-col gap-6">
        <Typography variant="h4" className="font-semibold">
          {t("categories")}
        </Typography>

        <div
          onClick={() => {
            setSelectedCategory(null);
            onCategorySelect(null);
          }}
          className={`flex items-center px-3 py-2 rounded-md cursor-pointer transition-colors ${
            selectedCategory === null
              ? "text-[var(--tertiary)]"
              : "text-primary hover:bg-muted/75"
          }`}
        >
          <Typography variant="p" className="text-[16px]">
            {t("viewAllArticle")}
          </Typography>
        </div>

        <div className="flex flex-col gap-4">
          {categories.map((item, index) => {
            const isActive = item.slug === selectedCategory;
            return (
              <div
                key={index}
                onClick={() => {
                  const newSlug = isActive ? null : item.slug!;
                  setSelectedCategory(newSlug);
                  onCategorySelect(newSlug!);
                }}
                className={`flex items-center px-3 py-2 rounded-md cursor-pointer transition-colors ${
                  isActive
                    ? "text-[var(--tertiary)]"
                    : "text-primary hover:bg-muted/75"
                }`}
              >
                <Typography variant="p" className="text-[16px]">
                  {item.name}
                </Typography>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CategorieBlog;
