import React from 'react';
import { useParams, Link } from 'react-router-dom';
import '../App.css';

const BlogPostDetails = ({ posts }) => {
  const { id } = useParams();
  const post = posts.find(p => p.title === id);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="post-detail">
      <h2 className="post-title">{post.title}</h2>
      <div className="post-content" dangerouslySetInnerHTML={{ __html: post.content }} />
      {post.urlToImage && <img src={post.urlToImage} alt={post.title} className="post-image" />}
      <Link to="/" className="back-link">Back to Posts</Link>
    </div>
  );
};

export default BlogPostDetails;
