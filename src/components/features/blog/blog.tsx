import BreadcrumbHeader from "../BreadcrumbHeader";
import ArticleBlog from "./articleBlog";
import CategorieBlog from "./categorieBlog";
import SearchBlog from "./searchBlog";

const BlogComponent = () => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col gap-10">
        <BreadcrumbHeader />
      </div>
      <div className="flex flex-row gap-5 justify-between">
        <div className="flex flex-col w-[60%] gap-10">
          {/* BLOG SECTION 1 */}
          <ArticleBlog />
        </div>

        <div className="flex flex-col w-[40%] gap-10">
          {/* BLOG SECTION 2 */}
          <SearchBlog />
          <CategorieBlog />
        </div>
      </div>
    </div>
  );
};
export default BlogComponent;
