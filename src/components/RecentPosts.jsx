import React from "react";
import PostCard from "./PostCard";
import LoadMoreButton from "./LoadMoreButton";

const RecentPosts = ({ posts }) => {
  return (
    <section className="container mx-auto px-4 py-12">
      <h2 className="text-2xl text-white font-semibold mb-8">
        Recent blog posts
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
      <LoadMoreButton />
    </section>
  );
};

export default RecentPosts;
