import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

// Styles
import "./style.scss";

// Pages
import LandingPage from "./pages/LandingPage";
import ErrorPage from "./pages/ErrorPage";
import About from "./pages/About";
import Blogs from "./pages/Blogs";
import Projects from "./pages/Projects";
import BlogSingle from "./pages/BlogSingle";
import WriteProject from "./pages/WriteProject";
import WriteBlog from "./pages/WriteBlog";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import PasswordReset from "./pages/PasswordReset";
import SingleProject from "./pages/SingleProject";

// Components
import Navbar from "./components/Navbar";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
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
        path: "projects/create",
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
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
