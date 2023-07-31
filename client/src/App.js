import React, { Suspense } from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

// Styles
import "./style.scss";
// Components
import Navbar from "./components/Navbar";
import Loading from "./components/Loading";
// Pages
const LandingPage = React.lazy(() => import("./pages/LandingPage"));
const ErrorPage = React.lazy(() => import("./pages/ErrorPage"));
const About = React.lazy(() => import("./pages/About"));
const Blogs = React.lazy(() => import("./pages/Blogs"));
const Projects = React.lazy(() => import("./pages/Projects"));
const BlogSingle = React.lazy(() => import("./pages/BlogSingle"));
const WriteProject = React.lazy(() => import("./pages/WriteProject"));
const WriteBlog = React.lazy(() => import("./pages/WriteBlog"));
const Profile = React.lazy(() => import("./pages/Profile"));
const Login = React.lazy(() => import("./pages/Login"));
const PasswordReset = React.lazy(() => import("./pages/PasswordReset"));
const SingleProject = React.lazy(() => import("./pages/SingleProject"));

const Layout = () => {
  return (
    <>
      <Navbar />
      <Suspense fallback={<Loading />}>
        <Outlet />
      </Suspense>
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "about",
        element: <About />,
      },
      {
        path: "blog",
        element: <Blogs />,
      },
      {
        path: "blog/:id",
        element: <BlogSingle />,
      },
      {
        path: "projects",
        element: <Projects />,
      },
      {
        path: "projects/:id",
        element: <SingleProject />,
      },
      {
        path: "projects/write",
        element: <WriteProject />,
      },
      {
        path: "blog/write",
        element: <WriteBlog />,
      },
      {
        path: "profile/:username",
        element: <Profile />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "reset-password",
        element: <PasswordReset />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

function App() {
  return (
    <div className="app">
      <div className="app_container">
        <Suspense fallback={<Loading />}>
          <RouterProvider router={router} />
        </Suspense>
      </div>
    </div>
  );
}

export default App;
