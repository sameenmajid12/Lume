import React, { useState, useRef } from "react";
import "../../styles/create.css";
import { use } from "react";
const Create = () => {
  const [blocks, setBlocks] = useState([]);
  const [title, setTitle] = useState("New course");
  const [description, setDescription] = useState(
    "Create a description for your course!"
  );
  const [coverPhoto, setCoverPhoto] = useState(null);
  const [menuVisible, setMenuVisible] = useState(false);
  const [currentBlockIndex, setCurrentBlockIndex] = useState(null);
  const fileInputRef = useRef(null);
  const menuRef = useRef(null);
  const changeTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleKeyDown = (event, index) => {
    if (event.key === "/") {
      setMenuVisible(true);
      setCurrentBlockIndex(index);
    } else {
      if (menuVisible) {
        setMenuVisible(false);
      }
    }
  };
  const handleDescription = (e) => {
    setDescription(e.target.value);
  };
  const coverUpload = (e) => {
    setCoverPhoto(e.target.files[0]);
    console.log(e.target.files[0]);
  };
  const addBlock = (type) => {
    const newBlock = { type, content: "" };
    const updatedBlocks = [...blocks];
    updatedBlocks.splice(currentBlockIndex + 1, 0, newBlock);
    setBlocks(updatedBlocks);
    setMenuVisible(false);
  };

  const updateBlockContent = (index, content) => {
    const updatedBlocks = [...blocks];
    updatedBlocks[index].content = content;
    setBlocks(updatedBlocks);
    if (textareasRefs.current[index]) {
      textareasRefs.current[index].style.height = "auto";
      textareasRefs.current[index].style.height =
        textareasRefs.current[index].scrollHeight + "px";
    }
  };
  const [menuPosition, setMenuPosition] = useState({ top: 0, left: 0 });

const handleMenuDown = (event, index) => {
  if (event.key === "/") {
    const textarea = textareasRefs.current[index];
    if (textarea) {
      const { selectionStart } = textarea;

      // Get the caret position
      const rect = textarea.getBoundingClientRect();
      const caretX = rect.left + textarea.selectionEnd * 7; // Approximate width per character
      const caretY = rect.top + textarea.scrollTop + 25; // Adjust for line height

      setMenuPosition({ top: caretY, left: caretX });
      setMenuVisible(true);
      setCurrentBlockIndex(index);
    }
  } else {
    if (menuVisible) {
      setMenuVisible(false);
    }
  }
};

  const textareasRefs = useRef([]);
  return (
    <div className="create-container-page">
      <div className="create-header">
        <input
          onChange={changeTitle}
          className="create-title-input"
          value={title}
          placeholder="Enter title"
        ></input>
        {!coverPhoto ? (
          <>
            <input
              ref={fileInputRef}
              onChange={coverUpload}
              id="addCoverPhoto"
              type="file"
              accept="image/*"
              style={{ display: "none" }} // Hide default input UI
            />
            <label htmlFor="addCoverPhoto">
              <div className="create-add-cover-photo">
                <i className="fa-regular fa-square-plus"></i>
                <p>Add cover photo</p>
              </div>
            </label>
          </>
        ) : (
          <img
            className="cover-photo"
            src={URL.createObjectURL(coverPhoto)}
          ></img>
        )}
      </div>
      <input
        onChange={handleDescription}
        className="create-description-input"
        value={description}
        placeholder="Enter description"
      ></input>
      {blocks.length === 0 ? (
        <div onClick={() => addBlock("text")} className="add-block">
          <div>
            <i className="fa-solid fa-circle-plus"></i>
          </div>
        </div>
      ) : (
        ""
      )}
      {blocks.map((block, index) => (
        <div key={index} className="block">
          {block.type === "text" && (
            <textarea
              className="text-block"
              value={block.content}
              onChange={(e) => updateBlockContent(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              placeholder="Type '/' for options..."
              wrap="hard"
              ref={(el) => (textareasRefs.current[index] = el)}
            />
          )}
          {block.type === "image" && (
            <div className="image-block">
              {!block.content ? (
                <>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => {
                      const file = e.target.files[0];
                      if (file) {
                        const imageUrl = URL.createObjectURL(file);
                        updateBlockContent(index, imageUrl);
                      }
                    }}
                    style={{ display: "none" }}
                    id={`image-upload-${index}`}
                  />
                  <label
                    htmlFor={`image-upload-${index}`}
                    className="upload-placeholder"
                  >
                    <i className="fa-regular fa-square-plus"></i>
                    <p>Upload an image</p>
                  </label>
                </>
              ) : (
                <img
                  src={block.content}
                  alt="Uploaded preview"
                  className="uploaded-image"
                />
              )}
            </div>
          )}
          {block.type === "video" && (
            <input
              type="text"
              className="video-block"
              placeholder="Paste video URL..."
              onChange={(e) => updateBlockContent(index, e.target.value)}
            />
          )}
          {block.type === "list" && (
            <ul className="list-block">
              {Array.isArray(block.content) ? (
                block.content.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <input
                      type="text"
                      value={item}
                      onChange={(e) => {
                        const updatedList = [...block.content];
                        updatedList[itemIndex] = e.target.value;
                        updateBlockContent(index, updatedList);
                      }}
                      onKeyDown={(e) => {
                        if (
                          (e.key === "Enter" || e.key === " ") &&
                          item.trim() !== ""
                        ) {
                          e.preventDefault();
                          const updatedList = [...block.content, ""];
                          updateBlockContent(index, updatedList);
                        }
                      }}
                    />
                  </li>
                ))
              ) : (
                <li>
                  <input
                    type="text"
                    placeholder="Start typing..."
                    onChange={(e) =>
                      updateBlockContent(index, [e.target.value])
                    }
                    onKeyDown={(e) => {
                      if (
                        (e.key === "Enter" || e.key === " ") &&
                        e.target.value.trim() !== ""
                      ) {
                        e.preventDefault();
                        updateBlockContent(index, [e.target.value, ""]);
                      }
                    }}
                  />
                </li>
              )}
            </ul>
          )}
        </div>
      ))}

      {menuVisible && (
        <div  style={{ top: `${menuPosition.top}px`, left: `${menuPosition.left}px`}} className="menu" ref={menuRef}>
          <h2 className="menu-header">Select</h2>
          <div className="menu-body">
            <div onClick={() => addBlock("text")}>Text</div>
            <div onClick={() => addBlock("image")}>Image</div>
            <div onClick={() => addBlock("video")}>Video</div>
            <div onClick={() => addBlock("list")}>List</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Create;
