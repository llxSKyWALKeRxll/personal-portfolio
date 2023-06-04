import React, { useState } from "react";
import "./Blogs.css";

const Blogs = () => {
  const [selectedBlog, setSelectedBlog] = useState(null);

  const blogsData = [
    // {
    //     id: 1,
    //     title: 'Blog 1',
    //     content: 'This is the content of Blog 1.',
    //   },
    //   {
    //     id: 2,
    //     title: 'Blog 2',
    //     content: 'This is the content of Blog 2.',
    //   },
    // Add your blogs here
  ];

  const handleBlogClick = (blog) => {
    setSelectedBlog(blog);
  };

  const handleBack = () => {
    setSelectedBlog(null);
  };

  return (
    <div className="blogs">
      <h1>Blogs</h1>
      {selectedBlog ? (
        <div className="blog-content">
          <button className="back-button" onClick={handleBack}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-arrow-left"
            >
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Back
          </button>
          <h2>{selectedBlog.title}</h2>
          <p>{selectedBlog.content}</p>
        </div>
      ) : (
        <div className="blog-grid">
          {blogsData.length === 0 ? (
            <div>
              <p>No content here (yet)...</p>
              <p>
                But feel free to check out my{" "}
                <a
                  className="profile-link"
                  href="https://iq.opengenus.org/author/vansh/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  OpenGenus profile
                </a>
                .
              </p>
            </div>
          ) : (
            blogsData.map((blog) => (
              <div
                className="blog"
                key={blog.id}
                onClick={() => handleBlogClick(blog)}
              >
                <h2>{blog.title}</h2>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default Blogs;
