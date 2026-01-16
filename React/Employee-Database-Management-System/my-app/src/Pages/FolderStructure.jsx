import React, { useState } from "react";

export default function FileExplorer() {
  const initialData = {
    id: 1,
    name: "root",
    type: "folder",
    isOpen: true,
    children: [
      {
        id: 2,
        name: "src",
        type: "folder",
        isOpen: false,
        children: [
          {
            id: 3,
            name: "index.js",
            type: "file"
          }
        ]
      },
      {
        id: 4,
        name: "package.json",
        type: "file"
      }
    ]
  };

  const [tree, setTree] = useState(initialData);

  return (
    <div className="min-h-screen bg-slate-900 p-6 font-mono">
      <Folder node={tree} setTree={setTree} />
    </div>
  );
}

function Folder({ node }) {
  const [isOpen, setIsOpen] = useState(node.isOpen || false);
  const [isFolderInputTrue, setIsFolderInputTrue] = useState(false);
  const [newFolderName, setNewFolderName] = useState("");
  const [isFileInputTrue, setIsFileInputTrue] = useState(false);
  const [newFileName, setNewFileName] = useState("");
  const [children, setChildren] = useState(node.children || []);

  const addFolder = () => {
    if (!newFolderName.trim()) return;

    setChildren((prev) => [
      ...prev,
      {
        id: Date.now(),
        name: newFolderName,
        type: "folder",
        isOpen: false,
        children: []
      }
    ]);

    setNewFolderName("");
    setIsFolderInputTrue(false);
    setIsOpen(true);
  };

  const addFile = () => {
    if (!newFileName.trim()) return;

    setChildren((prev) => [
      ...prev,
      {
        id: Date.now(),
        name: newFileName,
        type: "file"
      }
    ]);

    setNewFileName("");
    setIsFileInputTrue(false);
    setIsOpen(true);
  };

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  const clickFolder = (e) => {
    e.stopPropagation();
    setIsFolderInputTrue((prev) => !prev);
  };

  const clickFile = (e) => {
    e.stopPropagation();
    setIsFileInputTrue((prev) => !prev);
  };

  return (
    <div className="pl-4">
      <div className="flex items-center gap-3 py-1">
        <div
          onClick={handleClick}
          className="cursor-pointer text-slate-200 hover:text-white select-none"
        >
          {node.type === "folder"
            ? isOpen
              ? `📂 ${node.name}`
              : `📁 ${node.name}`
            : `📝 ${node.name}`}
        </div>

        {node.type === "folder" && (
          <div className="flex items-center gap-2">
            <button
              onClick={clickFolder}
              className="text-xs border border-slate-400 px-2 py-0.5 rounded text-slate-200 hover:bg-slate-700"
            >
              Folder +
            </button>

            {isFolderInputTrue && (
              <input
                value={newFolderName}
                onChange={(e) => setNewFolderName(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && addFolder()}
                className="bg-slate-800 border border-slate-600 text-white text-xs px-2 py-0.5 rounded outline-none"
              />
            )}

            <button
              onClick={clickFile}
              className="text-xs border border-slate-400 px-2 py-0.5 rounded text-slate-200 hover:bg-slate-700"
            >
              File +
            </button>

            {isFileInputTrue && (
              <input
                value={newFileName}
                onChange={(e) => setNewFileName(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && addFile()}
                className="bg-slate-800 border border-slate-600 text-white text-xs px-2 py-0.5 rounded outline-none"
              />
            )}
          </div>
        )}
      </div>

      {isOpen && (
        <div className="border-l border-slate-700 ml-2">
          {children.map((child) =>
            child.type === "file" ? (
              <div
                key={child.id}
                className="pl-4 py-1 text-slate-300 hover:text-white"
              >
                📝 {child.name}
              </div>
            ) : (
              <Folder key={child.id} node={child} />
            )
          )}
        </div>
      )}
    </div>
  );
}





