"use client";
import { useState } from "react";
import BreadcrumbHeader from "../BreadcrumbHeader";
import ArticleBlog from "./articleBlog";
import CategorieBlog from "./categorieBlog";
import GalerieBlog from "./galerieBlog";
import LatestArticles from "./latestArticles";
import SearchBlog from "./searchBlog";
import TagsBlog from "./tagsBlog";

const BlogComponent = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="container mx-auto">
      <div className="flex flex-col gap-10 mb-6">
        <BreadcrumbHeader />
      </div>
      <div className="flex flex-row gap-5 mt-9 justify-between">
        <div className="flex flex-col w-[60%] gap-10">
          <ArticleBlog searchTerm={searchTerm} />
        </div>

        <div className="flex flex-col w-[30%] gap-12">
          <SearchBlog onSearchChange={(value) => setSearchTerm(value)} />
          <CategorieBlog />
          <LatestArticles />
          {/* <GalerieBlog />
          <TagsBlog /> */}
        </div>
      </div>
    </div>
  );
};
export default BlogComponent;
