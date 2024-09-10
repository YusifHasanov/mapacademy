import React from 'react';

const ProfessionalSection = () => {
  return (
    <section className="professional-section">
      <div className="content-container">
        <Header />
        <Categories />
        <BooksImage />
        <Stats />
        <ActionButton />
      </div>
    </section>
  );
};

const Header = () => (
  <div className="header">
    <h1>Become A Professional In Your Sector</h1>
    <p className="subheader">Grow your skills in top fields and stay competitive in your career.</p>
  </div>
);

const Categories = () => (
  <ul className="categories">
    <li className="category">UI/UX Design</li>
    <li className="category">Web Development</li>
    <li className="category active">Digital Marketing</li>
    <li className="category">Practical Learning</li>
  </ul>
);

const BooksImage = () => (
  <div className="books-image">
    {/* <img src="/logo.png" alt="Books and Apple" /> */}
  </div>
);

const Stats = () => (
  <div className="stats">
    <div className="stat-item">
      <span className="stat-value">4.6</span>
      <span className="stat-label">Overall Rating</span>
    </div>
    <div className="stat-item">
      <span className="stat-value">7.8M+</span>
      <span className="stat-label">Students</span>
    </div>
    <div className="stat-item">
      <span className="stat-value">246</span>
      <span className="stat-label">Instructors</span>
    </div>
  </div>
);

const ActionButton = () => (
  <div className="action-button">
    <button className="explore-button">Explore More</button>
  </div>
);

export default ProfessionalSection;
