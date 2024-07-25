import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import '../App.css';

const BlogPostList = ({ posts }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const postsPerPage = 3; // Adjust this number as per your requirement
  const totalPages = Math.ceil(posts.length / postsPerPage);

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < totalPages - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <div className="post-list-container">
      <div className="post-list horizontal-scroll">
        {posts
          .slice(currentIndex * postsPerPage, (currentIndex + 1) * postsPerPage)
          .map((post, index) => (
            <Card className="post-item" key={index}>
              <Card.Body>
                <Card.Title className="post-title">{post.title}</Card.Title>
                <Card.Text className="post-excerpt">{post.description}</Card.Text>
                <Link to={`/post/${post.title}`} className="read-more">Read More</Link>
              </Card.Body>
            </Card>
          ))}
      </div>
      <div className="pagination-controls">
        <button onClick={handlePrev} className="pagination-button">&lt;</button>
        <span>Page {currentIndex + 1} of {totalPages}</span>
        <button onClick={handleNext} className="pagination-button">&gt;</button>
      </div>
    </div>
  );
};

export default BlogPostList;