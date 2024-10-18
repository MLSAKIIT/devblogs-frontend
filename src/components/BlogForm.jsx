import { useState } from "react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

const BlogForm = ({ onCreateBlog }) => {
  const schema = Yup.object().shape({
    title: Yup.string().required("Title is required"),
    author: Yup.string().required("Author is required"),
    description: Yup.string().required("Description is required"),
    imgUrl: Yup.string().url("Must be a valid URL").required("Image URL is required"),
  });

  const { register, handleSubmit, control, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    const newBlog = {
      ...data,
      date: new Date().toLocaleDateString(),
    };
    onCreateBlog(newBlog);
  };

  return (
    <div className="max-w-lg mx-auto bg-secondary p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-white text-center">
        Create New Blog
      </h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700">
            Blog Title
          </label>
          <input
            id="title"
            type="text"
            className="w-full px-4 py-2 mt-1 border rounded-lg"
            {...register("title")}
            placeholder="Enter blog title"
          />
          {errors.title && <span className="text-red-500">{errors.title.message}</span>}
        </div>
        <div className="mb-4">
          <label htmlFor="author" className="block text-gray-700">
            Author
          </label>
          <input
            id="author"
            type="text"
            className="w-full px-4 py-2 mt-1 border rounded-lg"
            {...register("author")}
            placeholder="Enter author name"
          />
          {errors.author && <span className="text-red-500">{errors.author.message}</span>}
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-gray-700">
            Description
          </label>
          <Controller
            name="description"
            control={control}
            render={({ field }) => (
              <ReactQuill
                theme="snow"
                className="block text-gray-700"
                value={field.value}
                onChange={field.onChange}
                placeholder="Enter your description..."
              />
            )}
          />
          {errors.description && <span className="text-red-500">{errors.description.message}</span>}
        </div>
        <div className="mb-4">
          <label htmlFor="imgUrl" className="block text-gray-700">
            Image URL
          </label>
          <input
            id="imgUrl"
            type="url"
            className="w-full px-4 py-2 mt-1 border rounded-lg"
            {...register("imgUrl")}
            placeholder="Enter image URL"
          />
          {errors.imgUrl && <span className="text-red-500">{errors.imgUrl.message}</span>}
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
