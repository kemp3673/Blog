import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Blogs = () => {
  const [exampleBlogs, setExampleBlogs] = useState([]);

  useEffect(() => {
    axios
      .get("/api/blogs")
      .then((res) => {
        setExampleBlogs(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    const blogLink = document.getElementById("blog");
    blogLink.classList.add("active");
    // Remove active class on component unmount
    return () => {
      blogLink.classList.remove("active");
    };
  }, []);

  return (
    <div className="posts_container wrapper">
      {exampleBlogs.length > 0 ? (
        <div className="posts">
          {exampleBlogs.map((blog) => (
            <div className="post" key={blog.id}>
              <div className="post_image">
                <img src={blog.main_image} alt={blog.title} />
              </div>
              <div className="post_content">
                <h1 className="post_title">{blog.title}</h1>
                <p className="post_description">{blog.description}</p>
                <Link className="post_link" to={`/blog/${blog.id}`}>
                  <button className="post_button">Read More</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="no_posts">
          <h1>No Posts Found</h1>
          <p>Check back later for more posts!</p>
        </div>
      )}
    </div>
  );
};

export default Blogs;
