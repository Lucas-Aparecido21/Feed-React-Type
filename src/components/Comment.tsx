import React, { useState } from "react";
import "./Comment.modules.css";
import { Trash } from "phosphor-react";
import { ThumbsUp } from "phosphor-react";
import { Avatar } from "./Avatar";

export function Comment({ content, onDeleteComment }) {
  
  const [likeCount, setLikeCount] = useState(0);
  

function handleLikeComment()
{
    setLikeCount(likeCount + 1);
}

  
    function handleDeleteComment() {
    onDeleteComment(content);
  }

  return (
    <div className="comment">
      <Avatar src="https://www.w3schools.com/howto/img_avatar2.png" alt=" " />
      <div className="commentBox">
        <div className="commentContent">
          <header>
            <div className="authorAndTime">
              <strong>Fernanda</strong>
              <time title="11 de maio de 2022" dateTime="2022-05-11 08:13:00">
                Cerca de 1h atrás{" "}
              </time>
            </div>
            <button onClick={handleDeleteComment} title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
