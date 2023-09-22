import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Loading from "../components/Loading";
// Icons
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
// Redux
import { useSelector, useDispatch } from "react-redux";
import { addBlogEntry, updateCount } from "../state/blogReducer.js";

const Blogs = () => {
  // REDUX
  const blogState = useSelector((state) => state.blog.entries);
  const totalCount = useSelector((state) => state.blog.count);
  const dispatch = useDispatch();
  // LOCAL STATE
  const [blogData, setBlogData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);

  // GET BLOG ENTRIES BY PAGE NUMBER
  const loadBlogEntries = (pageNumber) => {
    axios
      .get(`/api/blogs?page=${pageNumber}`)
      .then((res) => {
        setBlogData(res.data);
        dispatch(addBlogEntry(res.data));
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  };

  // METHOD TO HANDLE BLOG ENTRIES ON PAGE CHANGE
  const changePage = (newPage) => {
    setLoading(true);
    let nextIndex = newPage * 10;
    switch (blogState[nextIndex]) {
      case undefined:
        loadBlogEntries(newPage);
        window.scrollTo(0, 0);
        break;
      default:
        setBlogData(blogState.slice(nextIndex, nextIndex + 10));
        setLoading(false);
        window.scrollTo(0, 0);
        break;
    }
  };

  // HANDLE PAGE CHANGE
  const handlePageChange = (direction) => {
    if (direction === "prev" && currentPage > 0) {
      let newPage = currentPage - 1;
      setCurrentPage(newPage);
      changePage(newPage);
    } else if (
      direction === "next" &&
      currentPage < Math.ceil(totalCount / 10) - 1
    ) {
      let newPage = currentPage + 1;
      setCurrentPage(newPage);
      changePage(newPage);
    } else if (typeof direction === "number" && direction !== currentPage) {
      setCurrentPage(direction);
      changePage(direction);
    }
  };

  useEffect(() => {
    // When page loads, check if redux already has blog entries
    if (blogState.length === 0) {
      // Get total count of blog entries
      axios
        .get("/api/blogs/count")
        .then((res) => {
          dispatch(updateCount(res.data[0].blog_count));
          loadBlogEntries(currentPage);
        })
        .catch((err) => {
          console.error(err);
        });
    } else {
      // If blog entries already present, reload with first page of entries
      const reloadedEntries = blogState.slice(0, 10);
      setBlogData(reloadedEntries);
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
            {totalCount <= 10 ? null : (
              <div className="page_wrapper">
                <button onClick={() => handlePageChange("prev")}>
                  <BsChevronLeft />
                </button>
                {Array.from({ length: Math.ceil(totalCount / 10) }).map(
                  (_, index) => (
                    <button
                      key={index}
                      onClick={() => handlePageChange(index)}
                      className={index + 1 === currentPage ? "active" : ""}
                    >
                      {index + 1}
                    </button>
                  )
                )}
                <button onClick={() => handlePageChange("next")}>
                  <BsChevronRight />
                </button>
              </div>
            )}
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
