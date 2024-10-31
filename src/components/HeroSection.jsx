import React, { useState, useEffect } from "react";
import useFetch from "../hooks/useFetch";
import Loader from "./loader/Loader";

const HeroSection = ({ posts, autoSlideInterval = 5000 }) => {
  const { data: apiPosts, loading, error } = useFetch("/get-blogs");
  const postsToDisplay = error || !apiPosts ? posts : apiPosts;
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the next post
  const handleNextPost = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === postsToDisplay.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Function to go to the previous post
  const handlePrevPost = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? postsToDisplay.length - 1 : prevIndex - 1
    );
  };

  // Auto-slide functionality
  useEffect(() => {
    const slideInterval = setInterval(handleNextPost, autoSlideInterval);

    // Clear interval on unmount to prevent memory leaks
    return () => clearInterval(slideInterval);
  }, [currentIndex, autoSlideInterval]);

  const post = postsToDisplay[currentIndex];

  return (
    <div className="pt-20">
      <section className="relative bg-gray-900 text-white overflow-hidden transition-all duration-500 ease-in-out">
        {loading ? (
          <div className="grid place-items-center h-[36rem]">
            <Loader />
          </div>
        ) : (
          <>
            {/* Background Image */}
            <img
              src={post.img}
              alt={post.title}
              className="w-full h-[36rem] object-cover opacity-80 transition-opacity duration-500"
            />

            {/* Content Overlay */}
            <div className="absolute inset-0 flex items-center md:pl-24 px-3 transition-all duration-500">
              <div className="text-center mx-auto md:mx-0 md:text-left max-w-lg">
                <span className="text-sm font-medium uppercase text-gray-300">
                  Featured
                </span>
                <h1 className="text-2xl sm:text-4xl font-bold leading-tight mt-2 w-4/5 md:w-full mx-auto">
                  {post.title}
                </h1>
                <p className="mt-5 sm:mt-4 text-gray-200 w-[85%] mx-auto md:w-full">
                  {post.description}
                </p>
                <button className="px-4 py-2 mt-6 bg-primary text-white rounded-lg duration-200 hover:opacity-90">
                  Read More
                </button>
              </div>

              {/* Arrow Buttons */}
              <div className="absolute left-0 md:left-4  top-1/2 transform -translate-y-1/2">
                <button
                  onClick={handlePrevPost}
                  className="bg-white text-black p-3 rounded-full"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 sm:h-6 sm:w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
              </div>
              <div className="absolute  right-0 md:right-4 top-1/2 transform -translate-y-1/2">
                <button
                  onClick={handleNextPost}
                  className="bg-white text-black p-3 rounded-full"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 sm:h-6 sm:w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </>
        )}
      </section>
    </div>
  );
};

export default HeroSection;
