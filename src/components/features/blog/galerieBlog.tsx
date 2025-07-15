import React, { useEffect, useState } from "react";
import { Typography } from "@/components/re-leaf/Typography";
import { useTranslations } from "next-intl";

import Image from "next/image";
import { GET_GALERIE_ARTICLES } from "@/graphql/queries/articles";
import client from "@/graphql/appoloClient";
import { Blog } from "@/generated/graphql";

const GalerieBlog = () => {
  const t = useTranslations("label");

  const [galerieBlog, setGalerieBlog] = useState<Blog[]>([]);

  const fetchGalerieBlogs = async () => {
    try {
      const { data } = await client.query({
        query: GET_GALERIE_ARTICLES,
      });

      setGalerieBlog(data.blogs);
    } catch (error) {
      console.error("Erreur lors du chargement des images de blog :", error);
    }
  };

  useEffect(() => {
    fetchGalerieBlogs();
  }, []);

  return (
    <div>
      <div className="flex flex-col gap-7">
        <Typography variant="h4" className="font-semibold">
          {t("Gallery")}
        </Typography>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
          {galerieBlog.map((item, index) => (
            <Image
              key={index}
              src={`${item.cover_image?.url}`}
              width={item.cover_image?.width || undefined}
              height={item.cover_image?.height || undefined}
              alt={item.cover_image?.name || ""}
              className="w-full h-[7em] object-cover rounded-none"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GalerieBlog;
