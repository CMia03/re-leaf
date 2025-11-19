"use client";
import { FC, useEffect, useState } from "react";
import CategorieBlog from "../categorieBlog";
import LatestArticles from "../latestArticles";
import GalerieBlog from "../galerieBlog";
import { Blog } from "@/generated/graphql";
import client from "@/graphql/appoloClient";
import { GET_ARTICLE } from "@/graphql/queries/articles";
import { Typography } from "@/components/re-leaf/Typography";
import { format, parseISO, getDate } from "date-fns";
import { fr } from "date-fns/locale";
import Image from "next/image";
import Comment from "./comments/comment";
import ReactMarkdown from "react-markdown";

const BlogDetailsComponent: FC<{ blogId?: string }> = ({ blogId }) => {
  const [blog, setBlog] = useState<Blog>();
  const [, setSelectedCategory] = useState<string | null>(null);

  const fetchCurrentBlog = async (id?: string) => {
    try {
      const { data } = await client.query({
        query: GET_ARTICLE,
        variables: {
          documentId: id,
        },
      });
      if (data?.blog) {
        setBlog(data.blog);
      }
    } catch (error) {
      console.error("Erreur lors du chargement du produit :", error);
    }
  };

  useEffect(() => {
    if (blogId) {
      fetchCurrentBlog(blogId);
    }
  }, [blogId]);

  console.log("blog ====", blog);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-6 sm:gap-8 lg:gap-10 mb-6">
        <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-5 mt-6 sm:mt-8 lg:mt-9 justify-between">
          <div className="flex flex-col relative w-full lg:w-[60%] gap-6 sm:gap-8 lg:gap-10">
            {blog?.cover_image && (
              <div className="relative w-full">
                <Image
                  src={`${blog.cover_image?.url}`}
                  alt={blog.title || ""}
                  width={blog.cover_image?.width || 800}
                  height={blog.cover_image?.height || 500}
                  className="w-full h-[15em] sm:h-[18em] lg:h-[20em] object-cover rounded-none"
                />
                {blog?.publish_at && (
                  <div className="absolute top-2 right-2 sm:top-4 sm:right-4 lg:top-5 lg:right-5 lg:mr-5 lg:mt-5 rounded-tl-[150px] sm:rounded-tl-[180px] lg:rounded-tl-[230px] h-[5em] w-[4em] sm:h-[6em] sm:w-[4.5em] lg:h-[7em] lg:w-[5em] bg-[#B6C335] rounded-b-none rounded-tr-[150px] sm:rounded-tr-[180px] lg:rounded-tr-[230px] flex flex-col gap-0 justify-center items-center p-2 sm:p-2.5 lg:p-3">
                    <Typography
                      variant="h1"
                      className="text-white text-sm sm:text-base lg:text-md font-500"
                    >
                      {getDate(parseISO(blog.publish_at))}
                    </Typography>
                    <Typography variant="p" className="text-white text-xs sm:text-sm lg:text-md font-500">
                      {format(parseISO(blog.publish_at), "MMMM", {
                        locale: fr,
                      }).toUpperCase()}
                    </Typography>
                  </div>
                )}
              </div>
            )}
            {!blog?.cover_image && blog?.publish_at && (
              <div className="flex justify-end">
                <div className="rounded-tl-[150px] sm:rounded-tl-[180px] lg:rounded-tl-[230px] h-[5em] w-[4em] sm:h-[6em] sm:w-[4.5em] lg:h-[7em] lg:w-[5em] bg-[#B6C335] rounded-b-none rounded-tr-[150px] sm:rounded-tr-[180px] lg:rounded-tr-[230px] flex flex-col gap-0 justify-center items-center p-2 sm:p-2.5 lg:p-3">
                  <Typography
                    variant="h1"
                    className="text-white text-sm sm:text-base lg:text-md font-500"
                  >
                    {getDate(parseISO(blog.publish_at))}
                  </Typography>
                  <Typography variant="p" className="text-white text-xs sm:text-sm lg:text-md font-500">
                    {format(parseISO(blog.publish_at), "MMMM", {
                      locale: fr,
                    }).toUpperCase()}
                  </Typography>
                </div>
              </div>
            )}
            <Typography
              variant="h2"
              className="font-semibold text-xl sm:text-2xl lg:text-3xl"
              style={{ lineHeight: "1.4em" }}
            >
              {blog?.title}
            </Typography>
            <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none">
              <ReactMarkdown>{blog?.content}</ReactMarkdown>
            </div>
            <Comment />
          </div>

          <div className="flex flex-col w-full lg:w-[30%] gap-6 sm:gap-8 lg:gap-12">
            <CategorieBlog onCategorySelect={setSelectedCategory} />
            <LatestArticles />
            <GalerieBlog />
          </div>
        </div>
      </div>
    </div>
  );
};
export default BlogDetailsComponent;
