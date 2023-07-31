import React, { useState } from "react";
import { IconContext } from "react-icons";
import { AiFillDelete } from "react-icons/ai";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Component

const WriteProject = () => {
  // State
  const [title, setTitle] = useState("");
  const [skills, setSkills] = useState([]);
  const [skillInput, setSkillInput] = useState("");
  const [text, setText] = useState("");
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const handleSkillEntry = (e) => {
    e.preventDefault();
    const newSkill = skillInput.trim();

    if (newSkill === "") return;
    if (skills.includes(newSkill)) return;

    setSkills([...skills, newSkill]);
    setSkillInput("");
  };

  const handleSkillInputChange = (e) => {
    setSkillInput(e.target.value);
  };

  console.log(uploadedFiles);
  console.log(text);

  return (
    <div className="writeblog_container">
      <div className="writeblog_inner">
        <div className="writeblog_content">
          <div className="writeblog_Title_Sum">
            <label htmlFor="summary">Project Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="editor_container">
            <ReactQuill
              className="editor"
              theme="snow"
              value={text}
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
            <h1>Skills</h1>
            <form onSubmit={handleSkillEntry}>
              <input
                type="text"
                placeholder="Enter Skill"
                value={skillInput}
                onChange={handleSkillInputChange}
              />
              <button type="submit">Add Skill</button>
            </form>

            <div className="writeblog_skills">
              {skills.map((skill) => (
                <div className="writeblog_skill">
                  <span>{skill}</span>
                  <IconContext.Provider
                    value={{
                      className: "shared-class edit_icon",
                      color: "red",
                      size: 20,
                    }}
                  >
                    <AiFillDelete
                      className="writeblog_delete"
                      onClick={() =>
                        setSkills(skills.filter((s) => s !== skill))
                      }
                    />
                  </IconContext.Provider>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WriteProject;
