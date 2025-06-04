"use client";

import React, { useState, useRef, useEffect } from "react";
import { Typography } from "@/components/re-leaf/Typography";
import { Button } from "@/components/ui/button";

import blog1 from "../../../../public/images/blog/blog1.png";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { useTranslations } from "next-intl";
import { GET_ARTICLES } from "@/graphql/queries/articles";
import client from "@/graphql/appoloClient";
import { Blog } from "@/generated/graphql";
import { apiUrl } from "@/components/constants/constants";

type BlogWithDate = Blog & {
  dateNumber: number;
  month: string;
};
const ArticleBlog = () => {
  const t = useTranslations("home");
  const translate = useTranslations("home.blog&adviceCard");

  const [articles, setArticles] = useState<BlogWithDate[]>([]);

  const fetchArticleBlog = async () => {
    try {
      const { data } = await client.query({
        query: GET_ARTICLES,
      });

      const formattedArticles = data.blogs.map((blog: any) => {
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

      setArticles(formattedArticles);
    } catch (error) {
      console.error("Erreur lors du chargement des articles :", error);
    }
  };

  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 4;
  const totalPages = Math.ceil(articles.length / articlesPerPage);
  const articleBlogRef = useRef<HTMLDivElement>(null);

  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = articles.slice(
    indexOfFirstArticle,
    indexOfLastArticle
  );

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    // Scroll en haut de la section
    if (articleBlogRef.current) {
      articleBlogRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    fetchArticleBlog();
  }, []);

  return (
    <div className="container mx-auto" ref={articleBlogRef}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full">
        {currentArticles.map((item, index) => (
          <div key={index}>
            <Card className="w-full border-none rounded-none shadow-none p-0">
              <CardContent className="relative flex flex-col items-center text-center gap-4 p-0">
                <Image
                  src={`${apiUrl}${item.cover_image?.url}`}
                  // fill
                  alt={`${apiUrl}${item.title}`}
                  width={item.cover_image?.width || 500}
                  height={item.cover_image?.height || 300}
                  className="w-full h-[20em] object-cover rounded-none"
                />
                <div className="flex flex-col items-start text-left gap-3 mt-2">
                  <Typography
                    variant="p"
                    className="text-gray-600 text-md font-500"
                  >
                    {item.title}
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

                {/* DATE */}
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

      {/* Pagination */}
      {articles.length > articlesPerPage && (
        <div className="flex justify-center mt-15 gap-4">
          <Button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            variant="outline"
            className="w-10 h-10 cursor-pointer rounded-full border border-black hover:opacity-100 disabled:opacity-0"
          >
            <svg
              width="8"
              height="18"
              viewBox="0 0 18 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.5 1C16.5 1 1.5 12.0475 1.5 16C1.5 19.9525 16.5 31 16.5 31"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </Button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map(
            (pageNum) => (
              <Button
                key={pageNum}
                onClick={() => handlePageChange(pageNum)}
                variant={currentPage === pageNum ? "default" : "outline"}
                className={`rounded-full w-10 h-10 ${
                  currentPage === pageNum
                    ? "cursor-default"
                    : "cursor-pointer border-1 border-solid border-black opacity-50 hover:opacity-100"
                }`}
              >
                <Typography
                  variant="D1"
                  className="flex text-[1.1em] font-semibold flex-row items-center justify-center w-full h-full"
                >
                  {pageNum}
                </Typography>
              </Button>
            )
          )}
          {/* Bouton Suivant */}
          <Button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            variant="outline"
            className="w-10 h-10 cursor-pointer rounded-full border border-black hover:opacity-100 disabled:opacity-0"
          >
            <svg
              width="10"
              height="20"
              viewBox="0 0 10 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.875 18.3334C1.875 18.3334 8.125 12.1959 8.125 10.0001C8.125 7.80425 1.875 1.66675 1.875 1.66675"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </Button>
        </div>
      )}
    </div>
  );
};

export default ArticleBlog;
