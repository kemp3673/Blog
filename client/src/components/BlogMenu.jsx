import React, { useEffect, useState } from "react";
import axios from "axios";

const BlogMenu = ({ id }) => {
  const [additionalBlogs, setAdditionalBlogs] = useState([]);

  useEffect(() => {
    axios
      .get("/api/blogs") // TODO change to /api/auth/user/${user_id}
      .then((res) => {
        setAdditionalBlogs(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
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
