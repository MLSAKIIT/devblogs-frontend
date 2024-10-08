// import React from "react";

const PostCard = ({ post }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src={post.img}
        alt={post.title}
        className="w-full h-64 object-fill object-center"
      />
      <div className="p-4">
        <h3 className="text-lg font-bold">{post.title}</h3>
        <p className="text-gray-600">
          By {post.author} on {post.date}
        </p>
      </div>
    </div>
  );
};

export default PostCard;
