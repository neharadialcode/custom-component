import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function TextEditor() {
  const [content, setContent] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const modules = {
    toolbar: [
      [{ header: "1" }, { header: "2" }, { font: [] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ list: "ordered" }, { list: "bullet" }],
      [{ link: "link" }],
      ["clean"],
    ],
    // Add custom styles for headers and list items
    clipboard: {
      matchVisual: false,
    },
  };

  const formats = [
    "header",
    "font",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "link",
  ];
  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <div>
      <ReactQuill
        value={content}
        onChange={setContent}
        modules={modules}
        formats={formats}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      {!content && !isFocused && (
        <div className="placeholder text-white bg-transparent">
          Type something...
        </div>
      )}
    </div>
  );
}

export default TextEditor;
