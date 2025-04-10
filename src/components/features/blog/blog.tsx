import BreadcrumbHeader from "../BreadcrumbHeader";
import ArticleBlog from "./articleBlog";

const BlogComponent = () => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col gap-10">
        <BreadcrumbHeader />
      </div>
      <div className="flex flex-row justify-between">
        <div className="flex flex-col w-[60%] gap-10">
          {/* BLOG SECTION 1 */}
          <ArticleBlog />
        </div>

        <div className="flex flex-col w-[40%] bg-red-700 gap-10">
          {/* BLOG SECTION 2 */}
SECTION
        </div>
      </div>
    </div>
  );
};
export default BlogComponent;
