
import React from 'react';
const Post = ({ title, body }) => {
  return (
    <div style={{border:"3px solid teal" , textAlign:"center" , margin:"25px" , height:"160px",borderRadius:"15px"}}>
      <h1>{title}</h1>
      <h3>{body}</h3>
    </div> 
  );
};

export default Post;
