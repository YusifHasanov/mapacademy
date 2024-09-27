import React from 'react';

const HomeworkHelperSection = () => {
  return (
    <section className="homework-helper-section">
      <div className="content-container">
        <div className="text-section">
          <Header />
          <Features />
          <ActionButtons />
        </div>
        <Illustration />
      </div>
    </section>
  );
};

const Header = () => (
  <div className="header">
    <h1>Map Academy’nin üstünlükləri</h1>
  </div>
);

const Features = () => (
  <ul className="features">
    <li className="feature-item">
      <span className="checkmark">✔</span> Praktiki tədris metodu
    </li>
    <li className="feature-item">
      <span className="checkmark">✔</span> Mentor sistemi
    </li>
    <li className="feature-item">
      <span className="checkmark">✔</span> Buraxılış layihəsi
    </li>
  </ul>
);

const ActionButtons = () => (
  <div className="action-buttons">
    <button className="ask-button">ASK A QUESTION</button>
    <button className="discover-button">DISCOVER</button>
  </div>
);

const Illustration = () => (
  <div className="illustration">
    {/* Replace with the correct path to your image */}
    <img src="/table.png" alt="People Discussing" />
  </div>
);

export default HomeworkHelperSection;
