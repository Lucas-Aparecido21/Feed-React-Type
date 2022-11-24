import React from 'react';
import './Avatar.modules.css';

interface AvatarProps {
  hasBorder?: boolean;
  src?: string;
  alt?: string;
}
export function Avatar(props: AvatarProps) {
  return <img className="avatar" src={props.src} />;
}
