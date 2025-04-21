import BreadcrumbHeader from "../BreadcrumbHeader";
import ArticleBlog from "./articleBlog";
import CategorieBlog from "./categorieBlog";
import GalerieBlog from "./galerieBlog";
import LatestArticles from "./latestArticles";
import SearchBlog from "./searchBlog";
import TagsBlog from "./tagsBlog";

const BlogComponent = () => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col gap-10 mt-8.5">
        <BreadcrumbHeader />
      </div>
      <div className="flex flex-row gap-5 mt-9 justify-between">
        <div className="flex flex-col w-[60%] gap-10">
          <ArticleBlog />
        </div>

        <div className="flex flex-col w-[30%] gap-12">
          <SearchBlog />
          <CategorieBlog />
          <LatestArticles />
          <GalerieBlog />
          <TagsBlog />
        </div>
      </div>
    </div>
  );
};
export default BlogComponent;
