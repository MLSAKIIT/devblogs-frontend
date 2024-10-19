// // import React from "react";
// import PostCard from "./PostCard";
// import LoadMoreButton from "./LoadMoreButton";

// const RecentPosts = ({ posts }) => {
//   return (
//     <section className="container mx-auto px-4 py-12">
//       <h2 className="text-2xl text-white font-semibold mb-8">
//         Recent blog posts
//       </h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {posts.map((post) => (
//           <PostCard key={post.id} post={post} />
//         ))}
//       </div>
//       <LoadMoreButton />
//     </section>
//   );
// };

// export default RecentPosts;

const RecentPosts = ({ blogPosts, onCardClick }) => {
  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
        
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="relative rounded-lg shadow-lg overflow-hidden cursor-pointer"
              onClick={() => onCardClick(post)} // Handle card click
            >
              <img
                src={post.img}
                alt={post.title}
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-6">
                <h3 className="text-lg font-bold">{post.title}</h3>
                <p className="mt-2 text-gray-600">{post.author}</p>
                <p className="mt-1 text-sm text-gray-500">{post.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecentPosts;
