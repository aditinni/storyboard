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
      <div className="stories-wrapper">
        <div className="stories-header">
          <h1>My Stories</h1>
          <p className="stories-subtitle">Explore my collection of captivating narratives</p>
        </div>

        <div className="story-list">
          {stories.map((story, index) => (
            <div key={index} className="story-card">
              <div className="story-image-wrapper">
                <img src={story.thumbnail} alt={story.storyname} className="story-thumbnail" />
              </div>
              <div className="story-content">
                <h2>{story.storyname}</h2>
                <p className="story-description">{story.description}</p>
                <div className="story-meta">
                  <span className="meta-item"><strong>Genre:</strong> {story.genre}</span>
                </div>
                <button 
                  className="read-btn" 
                  onClick={() => handleOpenPdf(story.pdf)}
                >
                  Read Story
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* PDF Viewer Section */}
      {selectedPdf && (
        <div className="pdf-overlay">
          <div className="pdf-container">
            <button className="close-btn" onClick={() => setSelectedPdf(null)}>✕</button>
            <iframe
              src={selectedPdf}
              width="100%"
              height="100%"
              style={{ border: "none" }}
              title="PDF Viewer"
            />
          </div>
        </div>
      )}

    
      
      </div>
  
  );
};

export default Mystories;
