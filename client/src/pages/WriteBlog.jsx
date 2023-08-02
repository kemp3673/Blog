import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const WriteBlog = () => {
  // State
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [text, setText] = useState("");
  const [uploadedFiles, setUploadedFiles] = useState([]);

  console.log(uploadedFiles);
  console.log(text);

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
              maxlength="255"
            />
          </div>
          <div className="writeblog_Title_Sum">
            <label htmlFor="summary">Summary</label>
            <textarea
              className="writeblog_summary"
              type="text"
              value={summary}
              onChange={(e) => setSummary(e.target.value)}
              maxlength="1000"
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
              style={{ display: "none" }}
              onChange={(e) => setUploadedFiles(e.target.files)}
            />
            <label className="file_upload" htmlFor="file">
              Upload Image
            </label>
            <div className="write_buttons">
              <button className="write_button">Save as Draft</button>
              <button className="write_button">Update</button>
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
