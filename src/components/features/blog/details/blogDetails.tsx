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
    <div className="container mx-auto">
      <div className="flex flex-col gap-10 mb-6">
        <div className="flex flex-row gap-5 mt-9 justify-between">
          <div className="flex flex-col relative w-[60%] gap-10">
            {blog?.cover_image && (
              <Image
                src={`${blog.cover_image?.url}`}
                alt={blog.title || ""}
                width={blog.cover_image?.width || 800}
                height={blog.cover_image?.height || 500}
                className="w-full h-[20em] object-cover rounded-none"
              />
            )}
            {blog?.publish_at && (
              <div className="absolute top-0 right-0 mr-5 mt-5 rounded-tl-[230px] h-[7em] w-[5em] bg-[#B6C335] rounded-b-none rounded-tr-[230px] flex flex-col gap-0 justify-center items-center p-3">
                <Typography
                  variant="h1"
                  className="text-white text-md font-500"
                >
                  {getDate(parseISO(blog.publish_at))}
                </Typography>
                <Typography variant="p" className="text-white text-md font-500">
                  {format(parseISO(blog.publish_at), "MMMM", {
                    locale: fr,
                  }).toUpperCase()}
                </Typography>
              </div>
            )}
            <Typography
              variant="h2"
              className="font-semibold"
              style={{ lineHeight: "1.4em" }}
            >
              {blog?.title}
            </Typography>
            <ReactMarkdown>{blog?.content}</ReactMarkdown>
            <Comment />
          </div>

          <div className="flex flex-col w-[30%] gap-12">
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
