import { Blog } from "@/src/types/web/types";
import Link from "next/link";

const BlogCard = ({ blog }: { blog: Blog }) => {
  return (
    <>
      <Link
        key={blog?.id}
        href={`/blog/${blog?.meta_url}`}
        className="block"
      >
        <div className="bg-white flex-col md:flex-row rounded-2xl p-5 flex gap-5 shadow-sm hover:shadow-md transition-all cursor-pointer">
          <div
            className="relative w-full md:w-[220px] h-[200px] min-h-[200px] rounded-xl overflow-hidden flex-shrink-0 bg-gray-200"
            style={{
              backgroundImage: blog?.blog_image
                ? `url(${blog.blog_image})`
                : "none",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            {!blog?.blog_image && (
              <div className="w-full h-full flex items-center justify-center text-gray-500">
                No Image
              </div>
            )}
          </div>


          <div className="flex flex-col justify-between flex-1">
            <div>
              <p className="text-sm text-gray-500 mb-2">
                by <b>{blog?.author}</b>
              </p>
              <h3 className="text-base font-semibold text-gray-900 leading-snug line-clamp-2">
                {blog?.title}          {



                }

              </h3>
              <p className="text-sm text-gray-500 mt-2 line-clamp-3">
                {blog?.meta_description}
              </p>
            </div>

           <span className="mt-4 inline-flex items-center gap-2 w-fit 
  bg-teal-700 text-white pe-2 ps-3 py-1 rounded-full text-sm font-medium 
  transition-all duration-300 group cursor-pointer
  hover:bg-[#0000] hover:text-[#0C1E21]">


  Know More 

  <span
    className="w-8 h-8 rounded-full bg-white text-teal-700 flex items-center justify-center
    transition-colors duration-300
    group-hover:bg-[#0C1E21] group-hover:text-white"
  >
    <span
      className="relative  text-xl leading-none
      transition-all duration-300 ease-out group-hover:-rotate-45 group-hover:translate-x-[-2px]
"
    >
      →
    </span>
  </span>
</span>



          </div>
        </div>
      </Link>
    </>
  )
}
export default BlogCard;