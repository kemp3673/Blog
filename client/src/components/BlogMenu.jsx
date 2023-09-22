import React, { useEffect, useState } from "react";
import axios from "axios";
// Redux
import { useSelector, useDispatch } from "react-redux";
import { addBlogEntry, updateCount } from "../state/blogReducer.js";

const BlogMenu = ({ id }) => {
  const [additionalBlogs, setAdditionalBlogs] = useState([]);
  // REDUX
  const blogsList = useSelector((state) => state.blog.entries);
  const dispatch = useDispatch();

  useEffect(() => {
    // If no blog entries in redux
    if (blogsList.length === 0) {
      // Get Count
      axios
        .get("/api/blogs/count")
        .then((res) => {
          dispatch(updateCount(res.data[0].blog_count));
        })
        .catch((err) => {
          console.error(err);
        });
      // Retrieve list
      axios
        .get("/api/blogs")
        .then((res) => {
          setAdditionalBlogs(res.data);
          dispatch(addBlogEntry(res.data));
        })
        .catch((err) => {
          console.error(err);
        });
    } else {
      setAdditionalBlogs(blogsList.slice(0, 10));
    }
  }, []);

  return (
    <div className="blog_menu">
      <h1 className="blog_menu_title">Additional Articles</h1>
      {additionalBlogs.map(
        (blog) =>
          blog.id !== Number(id) && (
            <div className="blog_menu_item" key={blog.id}>
              <img
                className="blog_menu_img"
                src={`/uploads/${blog.main_image}`}
                alt={blog.title}
              />
              <div className="blog_menu_item_content">
                <h2 className="blog_menu_item_title">{blog.title}</h2>
                <button
                  className="blog_menu_button"
                  onClick={() => {
                    // Use window.location.href instead of Link to have page refresh
                    window.location.href = `/blog/${blog.id}`;
                  }}
                >
                  Read More
                </button>
              </div>
            </div>
          )
      )}
    </div>
  );
};

export default BlogMenu;
