import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Loading from "../components/Loading";
// Redux
import { useSelector, useDispatch } from "react-redux";
import { addBlogEntry } from "../state/blogReducer.js";

const Blogs = () => {
  // REDUX
  const blogState = useSelector((state) => state.blog.entries);
  const dispatch = useDispatch();
  // LOCAL STATE
  const [blogData, setBlogData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // When page loads, check if redux already has blog entries
    if (blogState.length === 0) {
      // If no entries, GET entries from API
      axios
        .get("/api/blogs") // TODO change to /api/auth/user/${user_id}
        .then((res) => {
          setBlogData(res.data);
          dispatch(addBlogEntry(res.data));
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      // If blog entries already present, use those instead of making API call
      setBlogData(...blogState);
      setLoading(false);
    }

    // Set navbar 'Blog' option to active so it is underlined
    const blogLink = document.getElementById("blog");
    blogLink.classList.add("active");
    // Remove active class on component unmount
    return () => {
      blogLink.classList.remove("active");
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* Set loading spinner until data comes back */
  if (loading) {
    return (
      <div className="loading">
        <Loading />
      </div>
    );
    /* Once API call is back, determines if entries or blank */
  } else {
    return (
      <div className="posts_container wrapper">
        {blogData.length > 0 ? (
          <div className="posts">
            {blogData.map((blog) => (
              <div className="post" key={blog.id}>
                <div className="post_image">
                  <img src={`/uploads/${blog.main_image}`} alt={blog.title} />
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
  }
};

export default Blogs;
