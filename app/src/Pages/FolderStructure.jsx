
import React, { useState } from "react";

const Folder = () => {
  const data = {
    name: "src",
    type: "folder",
    children: [
      {
        name: "components",
        type: "folder",
        children: [
          { name: "Navbar.jsx", type: "file" },
          { name: "Footer.jsx", type: "file" }
        ]
      },
      {
        name: "pages",
        type: "folder",
        children: [
          { name: "Home.jsx", type: "file" },
          { name: "About.jsx", type: "file" }
        ]
      },
      { name: "App.js", type: "file" },
      { name: "index.js", type: "file" }
    ]
  };

  const Solution = ({ data }) => {
    const [expanded, setExpanded] = useState(false);
    const [addFile , setAddFile] = useState(false)
    const [addFolder , setAddFolder] = useState(false)
    const [inputFile , setInputFile] = useState("")
    const [inputFolder , setInputFolder] = useState("")

    // If it's a file → just show 📄
    if (data.type === "file") {
      return <div style={{ marginLeft: 20 }}>📄 {data.name}</div>;
    }

    // If it's a folder
    return (
      <div style={{ marginLeft: 20 }}>
        <div className="flex flex-wrap gap-9">
        <div
          onClick={() => setExpanded(!expanded)}
          style={{ cursor: "pointer" }}
        >
          {expanded ? "📂" : "📁"} {data.name}
        </div>
        <div>
          <button onClick={()=>setAddFolder(!addFolder)} className="border bg-gray-400 px-1">Folder +</button>
          <button onClick={()=>setAddFile(!addFile)} className="border bg-gray-400 px-1">File +</button>
          
        </div>
        
        </div>
        {addFile && 
          <input
          type="text"
          onChange={(e)=> setInputFile(e.target.value)}
           onKeyDown={(e) => {
      if (e.key === "Enter" && inputFile.trim()) {
        // Add file and close input
        setAddFile(false);
      }
    }}/>
          
          }
          {
            inputFile && <Solution data={{ name: inputFile, type: "file" }}/>
          }
          
          {addFolder && 
          <input
          type="text"
          onChange={(e)=> setInputFolder(e.target.value)}
           onKeyDown={(e) => {
      if (e.key === "Enter" && inputFolder.trim()) {
        // Add file and close input
        setAddFolder(false);
      }
    }}/>
          }
          {inputFolder && <Solution data={{ name: inputFolder, type: "folder", children: [] }}/>}
        
        {/* Recursively render children if expanded */}
        {expanded &&
          data.children.map((child, i) => (
            <Solution key={i} data={child} />
          ))}
      </div>
    );
  };

  return (
    <div>
      <h1>📂 Project Explorer</h1>
      <Solution data={data} />
    </div>
  );
};

export default Folder;
