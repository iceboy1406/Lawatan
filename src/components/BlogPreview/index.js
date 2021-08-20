import React from "react";
import { LikeIcon, CommentIcon } from "../icons";
function BlogPreview(props) {
  return (
    <div
      className='blog-preview-list-item'
      style={{
        background: `linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(250,249,252,.85) 75%), url(${props.backgroundImage}) no-repeat center`,
        backgroundSize: "cover",
      }}>
      <h1 className='title'>{props.blogTitle}</h1>
      <p className='description'>{props.blogDescription}</p>
      <div className='flex'>
        <p className='comment'>
          <CommentIcon />
          <span>{props.commentCount}</span>
        </p>
        <p className='like'>
          <LikeIcon />
          <span>{props.likeCount}</span>
        </p>
      </div>
    </div>
  );
}

export default BlogPreview;
