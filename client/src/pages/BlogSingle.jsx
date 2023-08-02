import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
//Components
import BlogMenu from "../components/BlogMenu";

// Icons
import { IconContext } from "react-icons";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";

// const sampleBlog = {
//   id: 1,
//   title: "SQL Injection Attacks",
//   summary: `As a junior software engineer, the concept of SQL injection attacks
//     had been taught to me when I was first learning databases, but how to
//     deal with them was not really taught. Due to this, I had researched
//     the concept a bit in the past but have not put a whole lot of thought
//     into recently … that is until today.`,
//   text: (
//     <>
//       <p>
//         As a junior software engineer, the concept of SQL injection attacks had
//         been taught to me when I was first learning databases, but how to deal
//         with them was not really taught. Due to this, I had researched the
//         concept a bit in the past but have not put a whole lot of thought into
//         recently … that is until today. Today was an interesting day as I
//         started receiving messages from my portfolio website en masse. It turns
//         out someone was attempting to use my contact form to try an SQL
//         injection attack. This in an of itself was not much of a concern as I
//         did not have any sort of database being used with my portfolio website,
//         but I was planning on building a few blog websites in the near future
//         that I would need to use a database with. So how would I ensure that
//         these websites are safe from this sort of attack that already attempted
//         to make me another one of its’ victims?
//       </p>
//       <img
//         src="https://images.unsplash.com/photo-1598439210625-5067c578f3f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80"
//         alt="Penguin Test"
//         style={{ height: "100px", objectFit: "contain" }}
//       />
//       <p>
//         First I decided I needed to look into getting a better understanding of
//         what an SQL injection attack was, and what vulnerability it was taking
//         advantage of. In a very basic nutshell, SQL injections take advantage of
//         the fact that un-secure queries can have addition SQL statements added
//         into the query throw user input fields.
//       </p>
//       <p>For example,</p>
//       <p>
//         <code>
//           let query = “SELECT * FROM userTable WHERE userName = “ +
//           passed_in_field;
//         </code>
//       </p>
//       <p>
//         If an attacker was to pass in “<code>notARealUsername OR 1=1</code> ”
//         for the user_name field, the database would receive the query …{" "}
//         <code>
//           “SELECT * FROM userTable WHERE userName = notARealUsername OR 1=1”
//         </code>{" "}
//         , which is a valid query, and would result in the database returning
//         every entry in the userTable table since <code>‘1=1’</code> would result
//         in TRUE for every row.
//       </p>
//       <p>
//         That is a scary thing that can happen, but it can also be much worse if
//         the attacked is able to determine the names of your tables, then they
//         could also do <code>“notARealUsername OR 1=1; DROP specificTable”</code>
//       </p>
//       <p>
//         In order to prevent these injections of SQL statements, we need to
//         figure out how to separate our SQL statements from user inputs. We do
//         this by utilizing ‘Parameterized Queries’.
//       </p>
//       <p>
//         Additionally, we should add in some validation to ensure that what we
//         are receiving is what we would be expecting. For example, if we are
//         expecting an email, we could validate it is an email containing ‘@’ and
//         ‘.com’ for example or that it does not contain symbols such as = or ;
//         which would not be in a valid email but could be in an SQL injection.
//       </p>
//     </>
//   ),

//   image:
//     "https://images.unsplash.com/photo-1509479200622-4503f27f12ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
//   author: "Nicholas Kempkes",
//   authorImage: "https://avatars.githubusercontent.com/u/102747919?v=4",
//   date: "07/24/2023",
// };

const BlogSingle = () => {
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [hasToken, setHasToken] = useState(false);

  const { id } = useParams();

  const getBlog = async () => {
    try {
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
    setHasToken(!!jwt);

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

  return (
    <div className="blog_single_container">
      <div className="blog_single_inner">
        {blog && !loading ? (
          <>
            <div className="blog_single_content">
              <img src={blog.main_image} alt={blog.title} />
              <div className="blog_author">
                <img
                  className="blog_author_image"
                  src={blog.author_img}
                  alt={blog.author_name}
                />
                <div className="blog_info">
                  <span className="blog_author_name">{blog.author_name}</span>
                  <br />
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
                    >
                      <AiFillDelete />
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
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default BlogSingle;
