import React, { useState, useRef } from "react";
import '../../styles/create.css'
const ContentBlockEditor = () => {
  const [blocks, setBlocks] = useState([]);
  const [title, setTitle] = useState("New course")
  const [menuVisible, setMenuVisible] = useState(false);
  const [currentBlockIndex, setCurrentBlockIndex] = useState(null);
  const menuRef = useRef(null);
  const changeTitle=()=>{
    
  }
  const handleKeyDown = (event, index) => {
    if (event.key === "/") {
      setMenuVisible(true);
      setCurrentBlockIndex(index);
    }
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
  };

  return (
    <div className="create-container-page">
      <input onChange={changeTitle} value={title}></input>
      {blocks.map((block, index) => (
        <div key={index} className="block">
          {block.type === "text" && (
            <textarea
              className="text-block"
              value={block.content}
              onChange={(e) => updateBlockContent(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              placeholder="Type '/' for options..."
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
          <button onClick={() => addBlock("text")}>Text</button>
          <button onClick={() => addBlock("image")}>Image</button>
          <button onClick={() => addBlock("video")}>Video</button>
          <button onClick={() => addBlock("list")}>List</button>
        </div>
      )}

      <button className="add-block" onClick={() => setBlocks([...blocks, { type: "text", content: "" }])}>
        + Add Block
      </button>
    </div>
  );
};

export default ContentBlockEditor;
