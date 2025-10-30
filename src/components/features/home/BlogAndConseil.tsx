"use client";
import React from "react";
import { Typography } from "@/components/re-leaf/Typography";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import flowerAbs from "../../../../public/images/flowerAbsoluteBlog.png";
import Image from "next/image";
import { useTranslations } from "next-intl";
import ArticleBlog from "../blog/articleBlog";
import { useRouter } from "next/navigation";

function BlogAndConseil() {
  const t = useTranslations("home");
  const router = useRouter();

  const toBlog = () => {
    router.push(`/blog`);
  };

  return (
    <div className="relative w-full pt-8 sm:pt-12 lg:pt-[50px] px-4 sm:px-6 lg:px-0">
      <section>
        <div className="container flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6 mt-6 sm:mt-8 lg:mt-10 mb-6 sm:mb-8 lg:mb-10 mx-auto">
          <Typography
            variant="h2"
            className="justify-center border-none rounded-none text-center text-xl sm:text-2xl lg:text-3xl xl:text-4xl"
          >
            {t("blog&advice").toUpperCase()}{" "}
          </Typography>
          <Button
            variant="outline"
            className="border-1 border-black border-solid p-3 sm:p-4 lg:p-6 w-max cursor-pointer rounded-full text-sm sm:text-base"
          >
            <Typography
              variant="p"
              className="text-black ps-3 sm:ps-4 lg:ps-6"
              onClick={toBlog}
            >
              {t("seeAllArticle")}
            </Typography>

            <ChevronRight className="scale-[1.2] me-3 sm:me-4 lg:me-6" />
          </Button>
        </div>
      </section>

      <section>
        <ArticleBlog searchTerm={""} articleNumber={2} />
      </section>

      <Image
        src={flowerAbs}
        alt={"flower"}
        className="absolute bottom-0 right-0 object-contain w-16 h-32 sm:w-20 sm:h-40 lg:w-32 lg:h-64 mb-[-2em] sm:mb-[-3em] lg:mb-[-5em] hidden sm:block"
      />
    </div>
  );
}

export default BlogAndConseil;
