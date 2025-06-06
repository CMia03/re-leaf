"use client";
import React from "react";
import { Typography } from "@/components/re-leaf/Typography";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import flowerAbs from "../../../../public/images/flowerAbsoluteBlog.png";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { useTranslations } from "next-intl";
import ArticleBlog from "../blog/articleBlog";
import { useRouter } from "next/navigation";

function BlogAndConseil() {
  const t = useTranslations("home");
  const translate = useTranslations("home.blog&adviceCard");
  const router = useRouter();

  const toBlog = () => {
    router.push(`/blog`);
  };

  return (
    <div className="relative w-full pt-[50px]">
      <section>
        <div className="container flex flex-row justify-between items-center mt-10 mb-10 mx-auto">
          <Typography
            variant="h2"
            className="justify-center border-none rounded-none text-center"
          >
            {t("blog&advice").toUpperCase()}{" "}
          </Typography>
          <Button
            variant="outline"
            className="border-1 border-black border-solid p-6 w-max cursor-pointer  rounded-full"
          >
            <Typography
              variant="p"
              className="text-black ps-6"
              onClick={toBlog}
            >
              {t("seeAllArticle")}
            </Typography>

            <ChevronRight className="scale-[1.2] me-6" />
          </Button>
        </div>
      </section>

      <section>
        <ArticleBlog searchTerm={""} articleNumber={2} />
      </section>

      <Image
        src={flowerAbs}
        alt={"flower"}
        className="absolute bottom-0 right-0 object-contain w-[8em] h-[16em] mb-[-5em]"
      />
    </div>
  );
}

export default BlogAndConseil;
