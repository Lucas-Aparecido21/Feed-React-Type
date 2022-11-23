import React, { useState } from 'react';
import './Post.modules.css';
import {Comment} from './Comment';
import { Avatar } from './Avatar';
import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

export function Post({author, publishedAt, content}){
const publisheDateFormatted = format(publishedAt, "d 'de' LLLL 'ás' HH:mm 'h'", {locale: ptBR, })
const publishedDateReltiveToNow= formatDistanceToNow(publishedAt, {locale: ptBR, addSuffix: true,} )
const [comments, setComments] = useState([
'Post  muito bacana!'
])

const [newCommentText, setNewCommentText] = useState('')

function handleNewCommentChange(event){
  setNewCommentText(event.target.value);
  event.target.setCustomValidity('');

}

function handleNewCommentInvalid(event){
event.target.setCustomValidity('Esse campo é obrigatório');
}

function handleCreateNewComment(event)
{
event.preventDefault();
setNewCommentText('');
setComments([...comments, newCommentText]);


}

function deleteComment(commentToDelete)
{
const commentsWithoutDeletedOne =  comments.filter(comment =>{
    return comment !== commentToDelete;

})

setComments(commentsWithoutDeletedOne);
}
    return (
    <article className="post">
        <header>
            <div className="author">
                <Avatar src={author.avatarUrl} />
                <div className="authorInfo">
                <strong>{author.name}</strong>    
                <span>{author.role}</span>
                </div>
                </div>
            

            <time title ={publisheDateFormatted} dateTime={ publishedAt.toISOString()}>
              {publishedDateReltiveToNow}
                </time>

        </header>
        <div className="content2">

       {content.map(line => {
        if(line.type === 'paragraph') {
            return <p key={line.content}>{line.content}</p>;
        } else if(line.type === 'link') {
            return <p key={line.content}><a href="#">{line.content}</a> </p>;
        }
       })}
       </div>

        <form onSubmit={handleCreateNewComment} className="commentForm">
            <strong>Deixe seu feedback</strong>

            <textarea name="comment" 
            placeholder="Deixe um comentário"
            onChange={handleNewCommentChange}
            value={newCommentText}
            onInvalid={handleNewCommentInvalid}
            required={true}
            />
            <footer>
            <button type="submit" disabled={newCommentText.length === 0}>Publicar</button>
            </footer>

            </form>

            <div className="commentList">
               {comments.map(comment => {
                return <Comment key={comment}
                 content={comment}
                 onDeleteComment={deleteComment}
                 />
               })}    
            </div>
    </article>
    );
}