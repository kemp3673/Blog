import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const exampleBlogs = [
  {
    id: 1,
    title: "SQL Injection Attacks",
    summary: `As a junior software engineer, the concept of SQL injection attacks
    had been taught to me when I was first learning databases, but how to
    deal with them was not really taught. Due to this, I had researched
    the concept a bit in the past but have not put a whole lot of thought
    into recently … that is until today.`,
    text: (
      <>
        <p>
          As a junior software engineer, the concept of SQL injection attacks
          had been taught to me when I was first learning databases, but how to
          deal with them was not really taught. Due to this, I had researched
          the concept a bit in the past but have not put a whole lot of thought
          into recently … that is until today. Today was an interesting day as I
          started receiving messages from my portfolio website en masse. It
          turns out someone was attempting to use my contact form to try an SQL
          injection attack. This in an of itself was not much of a concern as I
          did not have any sort of database being used with my portfolio
          website, but I was planning on building a few blog websites in the
          near future that I would need to use a database with. So how would I
          ensure that these websites are safe from this sort of attack that
          already attempted to make me another one of its’ victims?
        </p>
        <img
          src="https://images.unsplash.com/photo-1598439210625-5067c578f3f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80"
          alt="Penguin Test"
          style={{ height: "100px", objectFit: "contain" }}
        />
        <p>
          First I decided I needed to look into getting a better understanding
          of what an SQL injection attack was, and what vulnerability it was
          taking advantage of. In a very basic nutshell, SQL injections take
          advantage of the fact that un-secure queries can have addition SQL
          statements added into the query throw user input fields.
        </p>
        <p>For example,</p>
        <p>
          <code>
            let query = “SELECT * FROM userTable WHERE userName = “ +
            passed_in_field;
          </code>
        </p>
        <p>
          If an attacker was to pass in “<code>notARealUsername OR 1=1</code> ”
          for the user_name field, the database would receive the query …{" "}
          <code>
            “SELECT * FROM userTable WHERE userName = notARealUsername OR 1=1”
          </code>{" "}
          , which is a valid query, and would result in the database returning
          every entry in the userTable table since <code>‘1=1’</code> would
          result in TRUE for every row.
        </p>
        <p>
          That is a scary thing that can happen, but it can also be much worse
          if the attacked is able to determine the names of your tables, then
          they could also do{" "}
          <code>“notARealUsername OR 1=1; DROP specificTable”</code>
        </p>
        <p>
          In order to prevent these injections of SQL statements, we need to
          figure out how to separate our SQL statements from user inputs. We do
          this by utilizing ‘Parameterized Queries’.
        </p>
        <p>
          Additionally, we should add in some validation to ensure that what we
          are receiving is what we would be expecting. For example, if we are
          expecting an email, we could validate it is an email containing ‘@’
          and ‘.com’ for example or that it does not contain symbols such as =
          or ; which would not be in a valid email but could be in an SQL
          injection.
        </p>
      </>
    ),
    image:
      "https://images.unsplash.com/photo-1509479200622-4503f27f12ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
    author: "Nicholas Kempkes",
    date: "07/24/2023",
  },
  {
    id: 2,
    title: "AI from a Junior Developer's Perspective",
    summary: `As a junior software engineer, the concept of SQL injection attacks
    had been taught to me when I was first learning databases, but how to
    deal with them was not really taught. Due to this, I had researched
    the concept a bit in the past but have not put a whole lot of thought
    into recently … that is until today.`,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque quis dictum orci. Sed ornare interdum viverra. Nunc faucibus lacus vitae lorem sodales aliquam. Praesent aliquam erat erat, non ultricies tortor efficitur a.",
    image:
      "https://media.licdn.com/dms/image/C5612AQFqrP-ZMTy1DA/article-cover_image-shrink_720_1280/0/1542138514335?e=2147483647&v=beta&t=8O-bPV97llYxn4nIgcQh2dn-ovantYb4WavgM3vljLg",
    author: "Nicholas Kempkes",
    date: "07/24/2023",
  },
  {
    id: 3,
    title: "Windows vs. Mac: A Developer's Perspective",
    summary: `As a junior software engineer, the concept of SQL injection attacks
    had been taught to me when I was first learning databases, but how to
    deal with them was not really taught. Due to this, I had researched
    the concept a bit in the past but have not put a whole lot of thought
    into recently … that is until today.`,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque quis dictum orci. Sed ornare interdum viverra. Nunc faucibus lacus vitae lorem sodales aliquam. Praesent aliquam erat erat, non ultricies tortor efficitur a.",
    image: "https://cdn.mos.cms.futurecdn.net/7MuK3L84Usug48SnDBgrMa.jpg",
    author: "Nicholas Kempkes",
    date: "07/24/2023",
  },
  {
    id: 4,
    title: "Should I Update My Resume?",
    summary: `As a junior software engineer, the concept of SQL injection attacks
    had been taught to me when I was first learning databases, but how to
    deal with them was not really taught. Due to this, I had researched
    the concept a bit in the past but have not put a whole lot of thought
    into recently … that is until today.`,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque quis dictum orci. Sed ornare interdum viverra. Nunc faucibus lacus vitae lorem sodales aliquam. Praesent aliquam erat erat, non ultricies tortor efficitur a.",
    image:
      "https://hatrabbits.com/wp-content/uploads/2018/10/risky-assumptions.jpg",
    author: "Nicholas Kempkes",
    date: "07/24/2023",
  },
  {
    id: 5,
    title: "What I Learned From My Software Engineering Bootcamp",
    summary: `As a junior software engineer, the concept of SQL injection attacks
    had been taught to me when I was first learning databases, but how to
    deal with them was not really taught. Due to this, I had researched
    the concept a bit in the past but have not put a whole lot of thought
    into recently … that is until today.`,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque quis dictum orci. Sed ornare interdum viverra. Nunc faucibus lacus vitae lorem sodales aliquam. Praesent aliquam erat erat, non ultricies tortor efficitur a.",
    image:
      "https://images.idgesg.net/images/idge/imported/imageapi/2022/02/03/21/programming_coding_elements_lines_of_code_development_developers_teamwork_by_dean_mitchell_gettyimages-1055056840_2400x1600-100795791-large-100918079-large.jpg?auto=webp&quality=85,70",
    author: "Nicholas Kempkes",
    date: "07/24/2023",
  },
  {
    id: 6,
    title: "Learning MySQL: A Beginner's Guide",
    summary: `As a junior software engineer, the concept of SQL injection attacks
    had been taught to me when I was first learning databases, but how to
    deal with them was not really taught. Due to this, I had researched
    the concept a bit in the past but have not put a whole lot of thought
    into recently … that is until today.`,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque quis dictum orci. Sed ornare interdum viverra. Nunc faucibus lacus vitae lorem sodales aliquam. Praesent aliquam erat erat, non ultricies tortor efficitur a.",
    image:
      "https://images.unsplash.com/photo-1662026911591-335639b11db6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1162&q=80",
    author: "Nicholas Kempkes",
    date: "07/24/2023",
  },
];

const Blogs = () => {
  // Set navbarlink to active on component mount
  useEffect(() => {
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
                <img src={blog.image} alt={blog.title} />
              </div>
              <div className="post_content">
                <h1 className="post_title">{blog.title}</h1>
                <p className="post_description">{blog.summary}</p>
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
