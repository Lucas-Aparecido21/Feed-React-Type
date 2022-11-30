import { CommentProps } from '../components/Post';

export const createUniqueId = (comments: CommentProps[]): number => {
  const randomId = Math.random();

  const isRepeated = comments.find((task) => task.id === randomId);

  if (isRepeated) {
    createUniqueId(comments);
  }

  return randomId;
};
