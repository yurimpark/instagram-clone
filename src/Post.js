import React from "react";
import "./Post.css";
import { Avatar } from "@mui/material";

function Post({ username, caption, imageUrl }) {
  return (
    <div className="post">
      {/* 헤더 => 아바타+유저네임 */}
      <div className="post__header">
        <Avatar className="post__avatar" alt="username" src="../profile.jpg" />
        <h3>{username}</h3>
      </div>
      {/* 이미지 */}
      <img className="post__image" src={imageUrl} alt="img" />
      {/* 유저네임+글내용 */}
      <h4 className="post__text">
        <strong>{username}</strong> {caption}
      </h4>
    </div>
  );
}

export default Post;
