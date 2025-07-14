"use client";

import React, { useState, useRef, useEffect } from "react";
import { Typography } from "@/components/re-leaf/Typography";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { useTranslations } from "next-intl";
import { GET_ARTICLES } from "@/graphql/queries/articles";
import client from "@/graphql/appoloClient";
import { Blog, Category } from "@/generated/graphql";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { InfoIcon } from "lucide-react";
import CustomPagination from "@/components/re-leaf/CustomPagination";

type BlogStatesWithMeta = Blog & {
  category: Category;
  dateNumber: number;
  month: string;
};

type BlogStates = {
  data: BlogStatesWithMeta[];
  total: number;
  page: number;
  pageCount: number;
  pageSize: number;
};

const ArticleBlog = ({
  searchTerm,
  articleNumber,
  selectedCategory,
}: {
  searchTerm: string;
  articleNumber?: number;
  selectedCategory?: string | null;
}) => {
  const t = useTranslations("home");

  const [articles, setArticles] = useState<BlogStates>({
    data: [],
    total: 0,
    page: 1,
    pageCount: 1,
    pageSize: 4,
  });

  const articleBlogRef = useRef<HTMLDivElement>(null);

  const fetchArticleBlog = async (page: number) => {
    try {
      const filters = selectedCategory
        ? {
            category: {
              slug: {
                eq: selectedCategory,
              },
            },
          }
        : {};

      const { data } = await client.query({
        query: GET_ARTICLES,
        variables: {
          page,
          pageSize: 100,
          filters,
        },
        fetchPolicy: "network-only",
      });

      const formattedArticles = data.blogs.map((blog: Blog) => {
        const date = new Date(blog.publish_at);
        const dateNumber = date.getDate();
        const month = date
          .toLocaleString("fr-FR", { month: "long" })
          .toUpperCase();
        return {
          ...blog,
          dateNumber,
          month,
        };
      });

      setArticles((prev) => ({
        ...prev,
        data: formattedArticles,
        total: formattedArticles.length,
        pageCount: Math.ceil(formattedArticles.length / prev.pageSize),
      }));
    } catch (error) {
      console.error("Erreur lors du chargement des articles :", error);
    }
  };

  const handlePageChange = (page: number) => {
    setArticles((prev) => ({ ...prev, page }));
    articleBlogRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    fetchArticleBlog(1);
  }, [selectedCategory]);

  const filteredArticles = searchTerm
    ? articles.data.filter(
        (article) =>
          article?.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          article?.content?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          article?.dateNumber.toString().includes(searchTerm.toLowerCase()) ||
          article?.month.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : articles.data;
  const startIndex = (articles.page - 1) * articles.pageSize;
  const endIndex = startIndex + articles.pageSize;
  let paginatedArticles = filteredArticles.slice(startIndex, endIndex);

  if (articleNumber && !isNaN(Number(articleNumber))) {
    paginatedArticles = paginatedArticles.slice(0, Number(articleNumber));
  }

  return (
    <div className="container mx-auto" ref={articleBlogRef}>
      {searchTerm && filteredArticles.length === 0 && (
        <div className="mt-3">
          <Alert>
            <InfoIcon />
            <AlertTitle>Aucun résultat</AlertTitle>
            <AlertDescription>Veuillez changer les mots clés.</AlertDescription>
          </Alert>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full">
        {paginatedArticles.map((item, index) => (
          <div key={index}>
            <Card className="w-full border-none rounded-none shadow-none p-0">
              <CardContent className="relative flex flex-col items-center text-center gap-4 p-0">
                <Image
                  src={`${item.cover_image?.url}`}
                  alt={item.title || ""}
                  width={item.cover_image?.width || 500}
                  height={item.cover_image?.height || 300}
                  className="w-full h-[20em] object-cover rounded-none"
                />
                <div className="flex flex-col items-start text-left gap-3 mt-2">
                  <Typography
                    variant="p"
                    className="text-gray-600 text-md font-500"
                  >
                    {item.category?.name}
                  </Typography>
                  <Typography
                    variant="h2"
                    className="font-semibold clampTitle"
                    style={{ lineHeight: "1.4em" }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    variant="D1"
                    className=" text-md font-normal clampDescription"
                  >
                    {item.content}
                  </Typography>
                  <Button className="p-5.5 px-8 rounded-full mt-4 cursor-pointer">
                    {t("seeMore")}
                  </Button>
                </div>

                <div className="absolute top-0 right-0 mr-5 mt-5 rounded-tl-[230px] h-[7em] w-[5em] bg-[#B6C335] rounded-b-none rounded-tr-[230px] flex flex-col gap-0 justify-center items-center p-3">
                  <Typography
                    variant="h1"
                    className="text-white text-md font-500"
                  >
                    {item.dateNumber}
                  </Typography>
                  <Typography
                    variant="p"
                    className="text-white text-md font-500"
                  >
                    {item.month}
                  </Typography>
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>

      {!searchTerm && articles.pageCount > 1 && !articleNumber && (
        <CustomPagination
          currentPage={articles.page}
          totalPages={articles.pageCount}
          handlePageChange={handlePageChange}
        />
      )}
    </div>
  );
};

export default ArticleBlog;
