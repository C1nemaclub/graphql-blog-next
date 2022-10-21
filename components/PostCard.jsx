import React from 'react';

export default function PostCard({ post }) {
  return (
    <div>
      {post.title}
      {post.excerpt}
    </div>
  );
}
