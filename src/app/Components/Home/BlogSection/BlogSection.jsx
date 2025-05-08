import React from "react";
import Image from "next/image";
import { FaRegUserCircle, FaCalendarAlt, FaArrowRight } from "react-icons/fa";

const BlogSection = () => {
  const blogs = [
    {
      id: 1,
      title: "How To Travel With Paper Map",
      image: "/hero-section.jpg",
      date: "25 May, 2021",
      author: "Admin",
      excerpt:
        "It is almost impossible to read the news without coming across a lead story elections through fake social media accounts...",
    },
    {
      id: 2,
      title: "Pack Wisely Before Traveling",
      image: "/hero-section.jpg",
      date: "25 May, 2021",
      author: "Admin",
      excerpt:
        "It is almost impossible to read the news without coming across a lead story elections through fake social media accounts...",
    },
    {
      id: 3,
      title: "Introducing This Amazing City",
      image: "/hero-section.jpg",
      date: "25 May, 2021",
      author: "Admin",
      excerpt:
        "It is almost impossible to read the news without coming across a lead story elections through fake social media accounts...",
    },
  ];

  return (
    <section className="py-12 lg:py-16 bg-[#070707]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-[#D0A148] font-la-belle-aurore mb-2">Our Blog</p>
          <h2 className="text-4xl font-bold mb-4 text-[#D0A148] font-philosopher">
            Travel Tips And Advice
          </h2>
          <p className="text-[#D0A148] max-w-3xl mx-auto">
            An enim nullam tempor gravida donec enim congue magna at pretium
            purus pretium ligula rutrum luctus risus diam eget risus varius
            blandit sit amet non magna.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white border-[#D0A148] border-t-2 border-b-4 rounded-lg shadow-md overflow-hidden"
            >
              <div className="relative h-60">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center text-gray-500 text-sm mb-3">
                  <div className="flex items-center mr-4">
                    <FaRegUserCircle className="mr-1" />
                    <span>{blog.author}</span>
                  </div>
                  <div className="flex items-center">
                    <FaCalendarAlt className="mr-1" />
                    <span>{blog.date}</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#2D3E50]">
                  {blog.title}
                </h3>
                <p className="text-gray-600 mb-4">{blog.excerpt}</p>
                <a
                  href="#"
                  className="text-[#D0A148] font-medium flex items-center hover:underline"
                >
                  Read More <FaArrowRight className="ml-1 text-sm" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;