import React, { useState } from "react";

const BlogForm = ({ onCreateBlog }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [author, setAuthor] = useState("");
  const [imgUrl, setImgUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBlog = {
      title,
      description,
      author,
      img: imgUrl,
      date: new Date().toLocaleDateString(),
    };
    // Callback to send blog data to parent component
    onCreateBlog(newBlog);

    // Reset form fields after submission
    setTitle("");
    setDescription("");
    setAuthor("");
    setImgUrl("");
  };

  return (
    <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Create New Blog</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700">
            Blog Title
          </label>
          <input
            id="title"
            type="text"
            className="w-full px-4 py-2 mt-1 border rounded-lg"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter blog title"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="author" className="block text-gray-700">
            Author
          </label>
          <input
            id="author"
            type="text"
            className="w-full px-4 py-2 mt-1 border rounded-lg"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            placeholder="Enter author name"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-gray-700">
            Description
          </label>
          <textarea
            id="description"
            className="w-full px-4 py-2 mt-1 border rounded-lg"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter blog description"
            rows="4"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="imgUrl" className="block text-gray-700">
            Image URL
          </label>
          <input
            id="imgUrl"
            type="url"
            className="w-full px-4 py-2 mt-1 border rounded-lg"
            value={imgUrl}
            onChange={(e) => setImgUrl(e.target.value)}
            placeholder="Enter image URL"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Create Blog
        </button>
      </form>
    </div>
  );
};

export default BlogForm;
