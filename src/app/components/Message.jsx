"use client";
// src/components/Message.jsx
import React from "react";

const Message = ({ text, isUser }) => {
  return (
    <div style={{ textAlign: isUser ? "right" : "left", margin: "8px" }}>
      <div
        style={{
          backgroundColor: isUser ? "#DCF8C6" : "#b8e3fc",
          padding: "8px",
          borderRadius: "8px",
        }}
      >
        {text}
      </div>
    </div>
  );
};

export default Message;
