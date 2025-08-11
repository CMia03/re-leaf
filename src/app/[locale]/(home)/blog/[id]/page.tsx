"use client";
import BlogDetailsComponent from "@/components/features/blog/details/blogDetails";
import { useParams } from "next/navigation";
export const dynamic = "force-dynamic";

const BlogDetailsPage = () => {
  const params = useParams();
  const { id } = params;
  return (
    <div>
      <BlogDetailsComponent blogId={id as string | undefined} />
    </div>
  );
};

export default BlogDetailsPage;
