"use client";
// src/components/Message.jsx
import React from "react";

const Message = ({ text, isUser }) => {
  return (
    <div style={{ textAlign: isUser ? "left" : "right", marginTop: "5px", marginBottom:"5px" }}>
      <div
        style={{
          backgroundColor: isUser ? "#f0f0f0" : "#b8e3fc" ,
          padding: "8px",
          borderRadius: "8px",
          fontSize:'12px'
        }}
      >
        {text}
      </div>
    </div>
  );
};

export default Message;
