import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const WriteBlog = () => {
  // State
  const [isEdit, setIsEdit] = useState(false);
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [text, setText] = useState("");
  const [selectedFiles, setSelectedFile] = useState([]);
  const [imagePreview, setImagePreview] = useState(null);

  // Try and grab id from query string
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const blogId = queryParams.get("edit");

  console.log("selectedFiles: ", selectedFiles);

  useEffect(() => {
    const getFiles = async () => {
      try {
        if (blogId) {
          setIsEdit(true);
          const { data } = await axios.get(`/api/blogs/${blogId}`);
          const { title, description, content, main_image } = data[0];
          console.log("data: ", data[0]);
          setTitle(title);
          setSummary(description);
          setText(content);
          setSelectedFile(main_image);
          setImagePreview(`/uploads/${main_image}`);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getFiles();
  }, []);

  const handleUpdate = async () => {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", summary);
    formData.append("content", text);
    formData.append("main_image", selectedFiles);
    formData.append("user_id", 1); // TODO change to user_id
    try {
      const { data } = await axios.patch(
        `/api/auth/blogs/${blogId}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      alert("Blog updated!");
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handlePost = async () => {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", summary);
    formData.append("content", text);
    formData.append("main_image", selectedFiles);
    formData.append("user_id", 1); // TODO change to user_id

    try {
      const { data } = await axios.post("/api/auth/blogs/write", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      alert("Blog posted!");
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        // Set the data URL as the preview image
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  /*
   * Quill modules to attach to editor
   * See https://quilljs.com/docs/modules/ for complete options
   */
  const modules = {
    toolbar: [
      [{ header: "1" }, { header: "2" }, { font: [] }],
      [{ size: [] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "code-block"],
      ["clean"],
    ],
    clipboard: {
      // toggle to add extra line breaks when pasting HTML:
      matchVisual: false,
    },
  };
  /*
   * Quill editor formats
   * See https://quilljs.com/docs/formats/
   */
  const formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "code-block",
  ];

  return (
    <div className="writeblog_container">
      <div className="writeblog_inner">
        <div className="writeblog_content">
          <div className="writeblog_Title_Sum">
            <label htmlFor="summary">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              maxLength="255"
            />
          </div>
          <div className="writeblog_Title_Sum">
            <label htmlFor="summary">Summary</label>
            <textarea
              className="writeblog_summary"
              type="text"
              value={summary}
              onChange={(e) => setSummary(e.target.value)}
              maxLength="1000"
            />
          </div>
          <div className="editor_container">
            <ReactQuill
              className="editor"
              theme="snow"
              value={text}
              modules={modules}
              formats={formats}
              bounds={".app"}
              onChange={(e) => setText(e)}
            />
          </div>
        </div>
        <div className="writeblog_menu">
          <div className="writeblog_menu_item">
            <h1>Publish</h1>
            <span>
              <b>Status: </b> Draft
            </span>
            <span>
              <b>Visibility: </b> Public
            </span>
            <input
              type="file"
              id="file"
              accept="image/*"
              style={{ display: "none" }}
              onChange={handleImageUpload}
            />
            <label className="file_upload" htmlFor="file">
              Upload Image
            </label>
            {/* TODO Update image to use stored image and not url */}
            <div className="uploaded_images">
              {imagePreview ? (
                <img
                  style={{ maxHeight: "100px", maxWidth: "100px" }}
                  src={imagePreview}
                  alt="uploaded"
                />
              ) : null}
            </div>
            <div className="write_buttons">
              {isEdit ? (
                <>
                  <button className="write_button">Save as Draft</button>
                  <button className="write_button" onClick={handleUpdate}>
                    Update
                  </button>
                </>
              ) : (
                <>
                  <button className="write_button">Save as Draft</button>
                  <button className="write_button" onClick={handlePost}>
                    Post
                  </button>
                </>
              )}
            </div>
          </div>
          <div className="writeblog_menu_item">
            <h1>Categories</h1>
            <div className="radio_group">
              <input type="radio" name="category" id="insight" />
              <label htmlFor="insight">Insight</label>
            </div>
            <div className="radio_group">
              <input type="radio" name="category" id="tutorials" />
              <label htmlFor="tutorials">Tutorial</label>
            </div>
            <div className="radio_group">
              <input type="radio" name="category" id="reviews" />
              <label htmlFor="reviews">Review</label>
            </div>
            <div className="radio_group">
              <input type="radio" name="category" id="other" />
              <label htmlFor="other">Other</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WriteBlog;
