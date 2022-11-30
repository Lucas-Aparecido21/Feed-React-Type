/* eslint-disable array-callback-return */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {
  FormEvent,
  useState,
  ChangeEvent,
  InvalidEvent,
  useEffect,
} from 'react';
import './Post.modules.css';
import { Comment } from './Comment';
import { Avatar } from './Avatar';
import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { createUniqueId } from '../utils/createUniqueId';

interface Author {
  name: string;
  role: string;
  avatarUrl: string;
}

interface Content {
  type: 'paragraph' | 'link';
  content: string;
}

interface PostProps {
  author: Author;
  publishedAt: Date;
  content: Content[];
}

export interface CommentProps {
  id: number;
  comment: string;
}

export function Post({ author, publishedAt, content }: PostProps) {
  const publisheDateFormatted = format(
    publishedAt,
    "d 'de' LLLL 'ás' HH:mm 'h'",
    { locale: ptBR }
  );
  const publishedDateReltiveToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });
  const [comments, setComments] = useState<CommentProps[]>([
    { id: 1, comment: 'Post  muito bacana!' },
  ]);

  const [newCommentText, setNewCommentText] = useState('');

  function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
    setNewCommentText(event.target.value);
    event.target.setCustomValidity('');
  }

  function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('Esse campo é obrigatório');
  }

  function handleCreateNewComment(event: FormEvent) {
    event.preventDefault();
    setNewCommentText('');

    const newComent = {
      id: createUniqueId(comments),
      comment: newCommentText,
    };

    setComments([...comments, newComent]);
  }

  function deleteComment(commentToDelete: number) {
    const commentsWithoutDeletedOne = comments.filter((comment) => {
      return comment.id !== commentToDelete;
    });

    setComments(commentsWithoutDeletedOne);
  }

  useEffect(() => {
    console.log(comments);
  }, [comments]);

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

        <time
          title={publisheDateFormatted}
          dateTime={publishedAt.toISOString()}
        >
          {publishedDateReltiveToNow}
        </time>
      </header>
      <div className="content2">
        {content.map((line) => {
          if (line.type === 'paragraph') {
            return <p key={line.content}>{line.content}</p>;
          } else if (line.type === 'link') {
            return (
              <p key={line.content}>
                <a href="#">{line.content}</a>{' '}
              </p>
            );
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className="commentForm">
        <strong>Deixe seu feedback</strong>

        <textarea
          name="comment"
          placeholder="Deixe um comentário"
          onChange={handleNewCommentChange}
          value={newCommentText}
          onInvalid={handleNewCommentInvalid}
          required={true}
        />
        <footer>
          <button type="submit" disabled={newCommentText.length === 0}>
            Publicar
          </button>
        </footer>
      </form>

      <div className="commentList">
        {comments.map((comment) => {
          return (
            <Comment
              key={comment.id}
              comment={comment}
              onDeleteComment={deleteComment}
            />
          );
        })}
      </div>
    </article>
  );
}
