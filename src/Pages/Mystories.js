import { useState, useEffect } from "react";
import storiesData from "./stories";
import "./Mystories.css";

const Mystories = () => {
  const [stories, setStories] = useState([]);
  const [selectedPdf, setSelectedPdf] = useState(null);
  const [comments, setComments] = useState(() => {
    // Load comments from localStorage or initialize to an empty array
    const savedComments = localStorage.getItem("comments");
    return savedComments ? JSON.parse(savedComments) : [];
  });

  useEffect(() => {
    setStories(storiesData);
  }, []);

  const handleOpenPdf = (pdf) => {
    setSelectedPdf(pdf);
  };

  const handleAddComment = (name, comment) => {
    const newComment = {
      name,
      comment,
      time: new Date().toLocaleString()
    };
    const updatedComments = [...comments, newComment];
    setComments(updatedComments);
    localStorage.setItem("comments", JSON.stringify(updatedComments));
  };

  const handleDeleteComment = (index) => {
    const updatedComments = comments.filter((_, idx) => idx !== index);
    setComments(updatedComments);
    localStorage.setItem("comments", JSON.stringify(updatedComments));
  };

  const handleEditComment = (index, newComment) => {
    const updatedComments = comments.map((comment, idx) => idx === index ? { ...comment, comment: newComment, time: new Date().toLocaleString() } : comment);
    setComments(updatedComments);
    localStorage.setItem("comments", JSON.stringify(updatedComments));
  };

  return (
    <div className="stories-container">
      <div className="story-list">
        {stories.map((story, index) => (
          <div key={index} className="story-card">
            <img src={story.thumbnail} alt={story.storyname} className="story-thumbnail" />
            <div className="story-content">
              <h2>{story.storyname}</h2>
              <p>{story.description}</p>
              <p><strong>Author:</strong> {story.author}</p>
              <p><strong>Genre:</strong> {story.genre}</p>
              <button 
                className="read-btn" 
                onClick={() => handleOpenPdf(story.pdf)}
              >
                Read PDF
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* PDF Viewer Section */}
      {selectedPdf && (
        <div className="pdf-container">
          <button className="close-btn" onClick={() => setSelectedPdf(null)}>Close</button>
          <iframe
            src={selectedPdf}
            width="100%"
            height="600px"
            style={{ border: "none" }}
            title="PDF Viewer"
          />
        </div>
      )}
    

      {/* Comments Section */}
     
      <div className="comments-section">
      <h1>Drop your comments</h1>
       
        <ul>
          {comments.map((comment, idx) => (
            <li key={idx}>
              <p>
                <strong>{comment.name}</strong> ({comment.time}): {comment.comment}
                <span 
                  className="edit-symbol" 
                  onClick={() => {
                    const newComment = prompt("Edit your comment:", comment.comment);
                    if (newComment) {
                      handleEditComment(idx, newComment);
                    }
                  }}
                >✏️</span>
                <span 
                  className="delete-symbol" 
                  onClick={() => handleDeleteComment(idx)}
                >🗑️</span>
              </p>
            </li>
          ))}
        </ul>
        <div className="comment-form">
          <input 
            type="text" 
            placeholder="Your name" 
            id="comment-name" 
          />
          <textarea 
            placeholder="Write a comment..." 
            id="comment-text"
          />
          <button 
            onClick={() => {
              const name = document.getElementById("comment-name").value;
              const comment = document.getElementById("comment-text").value;
              if (name && comment) {
                handleAddComment(name, comment);
                document.getElementById("comment-name").value = "";
                document.getElementById("comment-text").value = "";
              }
            }}
          >
            Add Comment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Mystories;
