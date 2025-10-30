"use client";
import { useState } from "react";
import BreadcrumbHeader from "../BreadcrumbHeader";
import ArticleBlog from "./articleBlog";
import CategorieBlog from "./categorieBlog";
import GalerieBlog from "./galerieBlog";
import LatestArticles from "./latestArticles";
import SearchBlog from "./searchBlog";

const BlogComponent = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-6 sm:gap-8 lg:gap-10 mb-6">
        <BreadcrumbHeader />
      </div>
      <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-8 mt-6 sm:mt-8 lg:mt-9 justify-between">
        <div className="flex flex-col w-full lg:w-[60%] gap-6 sm:gap-8 lg:gap-10">
          <ArticleBlog
            searchTerm={searchTerm}
            selectedCategory={selectedCategory}
          />
        </div>

        <div className="flex flex-col w-full lg:w-[30%] gap-8 sm:gap-10 lg:gap-12">
          <SearchBlog onSearchChange={(value) => setSearchTerm(value)} />
          <CategorieBlog onCategorySelect={setSelectedCategory} />
          <LatestArticles />
          <GalerieBlog />
          {/* <TagsBlog /> */}
        </div>
      </div>
    </div>
  );
};
export default BlogComponent;
