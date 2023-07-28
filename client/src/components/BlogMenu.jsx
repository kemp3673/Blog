import { Link } from "react-router-dom";

const exampleBlogs = [
  {
    id: 1,
    title: "AI from a Junior Developer's Perspective",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque quis dictum orci. Sed ornare interdum viverra. Nunc faucibus lacus vitae lorem sodales aliquam. Praesent aliquam erat erat, non ultricies tortor efficitur a.",
    image:
      "https://media.licdn.com/dms/image/C5612AQFqrP-ZMTy1DA/article-cover_image-shrink_720_1280/0/1542138514335?e=2147483647&v=beta&t=8O-bPV97llYxn4nIgcQh2dn-ovantYb4WavgM3vljLg",
    author: "Nicholas Kempkes",
    date: "07/24/2023",
  },
  {
    id: 2,
    title: "Windows vs. Mac: A Developer's Perspective",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque quis dictum orci. Sed ornare interdum viverra. Nunc faucibus lacus vitae lorem sodales aliquam. Praesent aliquam erat erat, non ultricies tortor efficitur a.",
    image: "https://cdn.mos.cms.futurecdn.net/7MuK3L84Usug48SnDBgrMa.jpg",
    author: "Nicholas Kempkes",
    date: "07/24/2023",
  },
  {
    id: 3,
    title: "Should I Update My Resume?",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque quis dictum orci. Sed ornare interdum viverra. Nunc faucibus lacus vitae lorem sodales aliquam. Praesent aliquam erat erat, non ultricies tortor efficitur a.",
    image:
      "https://hatrabbits.com/wp-content/uploads/2018/10/risky-assumptions.jpg",
    author: "Nicholas Kempkes",
    date: "07/24/2023",
  },
  {
    id: 4,
    title: "What I Learned From My Software Engineering Bootcamp",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque quis dictum orci. Sed ornare interdum viverra. Nunc faucibus lacus vitae lorem sodales aliquam. Praesent aliquam erat erat, non ultricies tortor efficitur a.",
    image:
      "https://images.idgesg.net/images/idge/imported/imageapi/2022/02/03/21/programming_coding_elements_lines_of_code_development_developers_teamwork_by_dean_mitchell_gettyimages-1055056840_2400x1600-100795791-large-100918079-large.jpg?auto=webp&quality=85,70",
    author: "Nicholas Kempkes",
    date: "07/24/2023",
  },
  {
    id: 5,
    title: "Learning MySQL: A Beginner's Guide",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque quis dictum orci. Sed ornare interdum viverra. Nunc faucibus lacus vitae lorem sodales aliquam. Praesent aliquam erat erat, non ultricies tortor efficitur a.",
    image:
      "https://images.unsplash.com/photo-1662026911591-335639b11db6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1162&q=80",
    author: "Nicholas Kempkes",
    date: "07/24/2023",
  },
];

const BlogMenu = () => {
  return (
    <div className="blog_menu">
      <h1 className="blog_menu_title">Additional Articles</h1>
      {exampleBlogs.map((blog) => (
        <div className="blog_menu_item" key={blog.id}>
          <img className="blog_menu_img" src={blog.image} alt={blog.title} />
          <div className="blog_menu_item_content">
            <h2 className="blog_menu_item_title">{blog.title}</h2>
            <Link to={`/blog/${blog.id}`}>
              <button className="blog_menu_button">Read More</button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogMenu;
