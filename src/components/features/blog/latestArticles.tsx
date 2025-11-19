"use client";

import React, { useEffect, useState } from "react";
import { Typography } from "@/components/re-leaf/Typography";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { useTranslations } from "next-intl";
import client from "@/graphql/appoloClient";
import { GET_LATEST_ARTICLES } from "@/graphql/queries/articles";
import { Blog } from "@/generated/graphql";

const LatestArticles = () => {
  const t = useTranslations("label");

  const [latestArticles, setLatestArticles] = useState<Blog[]>([]);

  const fetchLatestArticles = async () => {
    try {
      const { data } = await client.query({
        query: GET_LATEST_ARTICLES,
      });

      if (data && data.blogs) {
        const sortedArticles = [...data.blogs].sort((a: Blog, b: Blog) => {
          return (
            new Date(b.publishedAt).getTime() -
            new Date(a.publishedAt).getTime()
          );
        });

        const latestTwo = sortedArticles.slice(0, 2);

        setLatestArticles(latestTwo);
      }
    } catch (error) {
      console.error(
        "Erreur lors du chargement des dernières articles :",
        error
      );
    }
  };

  useEffect(() => {
    fetchLatestArticles();
  }, []);

  return (
    <div>
      <div className="flex flex-col gap-6">
        <Typography variant="h4" className="font-semibold">
          {t("latestArticles")}
        </Typography>
        {latestArticles.map((item, index) => (
          <div key={index}>
            <Card className="w-full border-none rounded-none shadow-none p-0">
              <CardContent className="relative flex px-0 flex-row gap-3 sm:gap-4 w-full">
                <Image
                  src={`${item.cover_image?.url}`}
                  width={item.cover_image?.width || undefined}
                  height={item.cover_image?.height || undefined}
                  alt={item.cover_image?.name || ""}
                  className="w-[6em] sm:w-[7em] lg:w-[8em] h-[6em] sm:h-[7em] lg:h-[8em] object-cover rounded-none flex-shrink-0"
                />
                <div className="flex flex-col w-full text-left gap-1 sm:gap-2 min-w-0">
                  <Typography
                    variant="D1"
                    className="text-[#6B4727] cursor-pointer hover:underline-offset-4 hover:underline text-sm sm:text-base lg:text-[1.1em] w-[100%] clampTitle font-medium"
                  >
                    {item.title}
                  </Typography>
                  <Typography variant="D1" className="font-light text-xs sm:text-sm">
                    {item.publish_at}
                  </Typography>
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestArticles;
