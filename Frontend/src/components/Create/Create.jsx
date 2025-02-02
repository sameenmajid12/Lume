  import React, { useState, useRef } from "react";
  import "../../styles/create.css";
  import { use } from "react";
  const Create = () => {
    const [blocks, setBlocks] = useState([]);
    const [title, setTitle] = useState("New course");
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
    const textareasRefs = useRef([]);
    return (
      <div className="create-container-page">
        <div className="create-header">
          <input
            onChange={changeTitle}
            className="create-title-input"
            value={title}
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
              <input
                type="text"
                className="image-block"
                placeholder="Paste image URL..."
                onChange={(e) => updateBlockContent(index, e.target.value)}
              />
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
              <textarea
                className="list-block"
                placeholder="Enter list items..."
                onChange={(e) => updateBlockContent(index, e.target.value)}
              />
            )}
          </div>
        ))}

        {menuVisible && (
          <div className="menu" ref={menuRef}>
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
