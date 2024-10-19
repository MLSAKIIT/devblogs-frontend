import React, { useEffect, useState } from "react";
import PostCard from "./PostCard";
import LoadMoreButton from "./LoadMoreButton";

const RecentPosts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch posts from the /get-blogs route
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("/get-blogs");

        // Check if the response is JSON because sometime response geting is not in json
        const contentType = response.headers.get("content-type");
        if (!contentType || !contentType.includes("application/json")) {
          throw new Error("Expected JSON, received: " + contentType);
        }

        const data = await response.json();
        setPosts(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return <p className="text-white">Loading...</p>;
  }

  if (error) {
    return <p className="text-red-500">Error: {error}</p>;
  }

  return (
    <section className="container mx-auto px-4 py-12">
      <h2 className="text-2xl text-white font-semibold mb-8">
        Recent blog posts
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.length > 0 ? (
          posts.map((post) => <PostCard key={post.id} post={post} />)
        ) : (
          <p className="text-white">No posts available</p>
        )}
      </div>
      <LoadMoreButton />
    </section>
  );
};

export default RecentPosts;
