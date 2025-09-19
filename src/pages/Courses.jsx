// src/pages/Courses.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Courses.css'; // Import the new CSS file

// Data for the course cards. You can easily add more here.
const courseData = [
  {
    icon: '/assets/mbbs-icon.png',
    name: 'M.B.B.S.',
    careers: 'Specialization (MD/MS), Diploma in ICU',
  },
  {
    icon: '/assets/btech-icon.png',
    name: 'B.Tech',
    careers: 'Software Engineer, Cyber Security, Data Science',
  },
  {
    icon: '/assets/bca-icon.png',
    name: 'BCA',
    careers: 'M.Tech, GATE, Business, Placements',
  },
  {
    icon: '/assets/bcom-icon.png',
    name: 'B.Com',
    careers: 'Financial analyst(CA), Government Services, Management & MBA',
  },
];

export default function Courses() {
  return (
    <div className="courses-page">
      {/* --- Hero Section --- */}
      <section className="courses-hero">
        <div className="hero-text">
          <h1>Explore Career Options Based on Courses</h1>
          <p>
            Discover the right path with our interactive course-to-career mapper
          </p>
          <Link to="/quiz" className="cta-button">
            Take Career Quiz
          </Link>
        </div>
        <div className="hero-image">
          <img
            src="/assets/student-with-laptop.png"
            alt="Student with laptop"
          />
        </div>
      </section>

      {/* --- Courses Grid Section --- */}
      <section className="courses-grid-section">
        <div className="courses-grid-header">
          <h2>Courses to Careers</h2>
          <p>Uncover the best career path with our interactive mapper</p>
        </div>
        <div className="courses-grid">
          {/* Map through the course data to create cards */}
          {courseData.map((course, index) => (
            <div className="course-card" key={index}>
              <div className="icon-container">
                <img src={course.icon} alt={`${course.name} icon`} />
              </div>
              <h3>{course.name}</h3>
              <p>{course.careers}</p>
            </div>
          ))}

          {/* "More" Card */}
          <div className="more-card">
            <span>MORE..</span>
          </div>
        </div>
      </section>
    </div>
  );
}