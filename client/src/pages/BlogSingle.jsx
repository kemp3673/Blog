import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
//Components
import BlogMenu from "../components/BlogMenu";
import ConfirmationDialog from "../components/ConfirmationDialog";
import Loading from "../components/Loading";
// Icons
import { IconContext } from "react-icons";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";

const BlogSingle = () => {
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [hasToken, setHasToken] = useState(false);
  // Delete confirmation dialog
  const [isOpen, setIsOpen] = useState(false);
  const [confirmation, setConfirmation] = useState(false);

  const { id } = useParams();

  const getBlog = async () => {
    try {
      // TODO change to /api/auth/user/${user_id}
      axios.get(`/api/blogs/${id}`).then((res) => {
        setBlog(res.data[0]);
        setLoading(false);
      });
    } catch (err) {
      console.log(err);
      setLoading(false); // Set loading to false even if there's an error
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      await getBlog();
    };
    fetchData();
  }, [id]);

  useEffect(() => {
    const jwt = Cookies.get("jwt");
    // setHasToken(!!jwt); // TODO uncomment this line
    setHasToken(true); // TODO remove this line

    const blogLink = document.getElementById("blog");
    blogLink.classList.add("active");
    // Remove active class on component unmount
    return () => {
      blogLink.classList.remove("active");
    };
  }, []);

  const convertDate = (date) => {
    const newDate = new Date(date);
    return newDate.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const handleDeleteConfirm = async () => {
    setIsOpen(true);
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`/api/auth/blogs/${id}`);
      window.location.href = "/blog";
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (!confirmation) return;
    handleDelete();
  }, [confirmation]);

  return (
    <div className="blog_single_container">
      {loading && (
        <div className="loading">
          <Loading />
        </div>
      )}
      {isOpen && (
        <div className="confirmation_dialog_container">
          <ConfirmationDialog
            setConfirmation={setConfirmation}
            setIsOpen={setIsOpen}
          />
        </div>
      )}
      <div className="blog_single_inner">
        {blog && !loading ? (
          <>
            <div className="blog_single_content">
              <img src={`/uploads/${blog.main_image}`} alt={blog.title} />
              <div className="blog_author">
                <img
                  className="blog_author_image"
                  src={blog.author_img}
                  alt={blog.author_name}
                />
                <div className="blog_info">
                  <span className="blog_author_name">{blog.author_name}</span>
                  <span className="blog_date_posted">
                    Posted {convertDate(blog.created_at)}
                  </span>
                </div>
                {hasToken && (
                  <div className="edit_blog">
                    <Link to={`/blog/write?edit=${blog.id}`}>
                      <IconContext.Provider
                        value={{
                          className: "shared-class edit_icon",
                          color: "black",
                          size: 30,
                        }}
                      >
                        <AiFillEdit />
                      </IconContext.Provider>
                    </Link>
                    <IconContext.Provider
                      value={{
                        className: "shared-class edit_icon",
                        color: "red",
                        size: 30,
                      }}
                      onClick={handleDeleteConfirm}
                    >
                      <AiFillDelete onClick={handleDeleteConfirm} />
                    </IconContext.Provider>
                  </div>
                )}
              </div>
              <h1 className="blog_single_title">{blog.title}</h1>
              {/* TODO Add error handling if something is wrong with text */}
              <div
                className="blog_single_text"
                dangerouslySetInnerHTML={{ __html: blog.content }}
              />
            </div>
            <div className="blog_single_menu">
              <BlogMenu id={id} />
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default BlogSingle;
