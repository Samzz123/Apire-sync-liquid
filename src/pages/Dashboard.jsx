import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Dashboard.css";

function Dashboard() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [activeTab, setActiveTab] = useState('overview');
  const [bookmarkedItems, setBookmarkedItems] = useState([]);
  const [showNotifications, setShowNotifications] = useState(false);

  // Mock user data
const user = {
    name: "John Doe",
    email: "john.doe@email.com",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face&auto=format",
    joinedDate: "September 2025",
    role: "Aspiring Student",
  };

  // Mock dashboard data
  const dashboardData = {
    stats: [
      { id: 1, title: "Quizzes Taken", value: "4", icon: "🧠", color: "#667eea" },
      { id: 2, title: "Career Paths Explored", value: "3", icon: "🧭", color: "#f093fb" },
      { id: 3, title: "Scholarships Found", value: "8", icon: "🎓", color: "#4facfe" },
      { id: 4, title: "Bookmarks Saved", value: `${bookmarkedItems.length}`, icon: "🔖", color: "#f5576c" }
    ],
    degreeSuggestions: [
      { id: 1, title: "B.Tech in Computer Science", rating: 92, match: "Excellent Match", field: "Technology" },
      { id: 2, title: "B.Com in Finance", rating: 85, match: "Good Match", field: "Commerce" },
      { id: 3, title: "B.Sc in Data Science", rating: 78, match: "Potential Fit", field: "Science" }
    ],
    scholarshipNotifications: [
      { id: 1, title: "Tech Innovators Scholarship", college: "State University", deadline: "Today", priority: "high" },
      { id: 2, title: "Future Leaders Grant", college: "National College", deadline: "Tomorrow", priority: "medium" },
      { id: 3, title: "Commerce Excellence Award", college: "City Business School", deadline: "Oct 15", priority: "low" },
      { id: 4, title: "Science Achievers Program", college: "Institute of Science", deadline: "Oct 20", priority: "medium" }
    ],
    quizHistory: [
      { id: 1, title: "Aptitude Quiz", score: "95%", icon: "🎯", date: "Sep 18" },
      { id: 2, title: "Personality Test", score: "Insightful", icon: "🤔", date: "Sep 15" },
      { id: 3, title: "Career Interest Quiz", score: "Tech-Oriented", icon: "💡", date: "Sep 12" }
    ]
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', {
      hour12: true,
      hour: 'numeric',
      minute: '2-digit'
    });
  };

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good Morning";
    if (hour < 18) return "Good Afternoon";
    return "Good Evening";
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return '#ff6b6b';
      case 'medium': return '#feca57';
      case 'low': return '#48dbfb';
      default: return '#a4b0be';
    }
  };

  const getMatchColor = (match) => {
    switch (match) {
      case 'Excellent Match': return '#10B981';
      case 'Good Match': return '#F59E0B';
      case 'Potential Fit': return '#3B82F6';
      default: return '#6B7280';
    }
  };

  const toggleBookmark = (item) => {
    const isBookmarked = bookmarkedItems.some(bookmark => bookmark.id === item.id);
    if (isBookmarked) {
      setBookmarkedItems(bookmarkedItems.filter(bookmark => bookmark.id !== item.id));
    } else {
      setBookmarkedItems([...bookmarkedItems, item]);
    }
  };

  const isBookmarked = (item) => bookmarkedItems.some(bookmark => bookmark.id === item.id);


  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside className="dashboard-sidebar">
        <div className="sidebar-header">
          <Link to="/" className="dashboard-logo">
            <span className="logo-icon">🎓</span>
            <span className="logo-text">Aspire Sync</span>
          </Link>
        </div>

        <nav className="sidebar-nav">
          <button
            className={`nav-item ${activeTab === 'overview' ? 'active' : ''}`}
            onClick={() => setActiveTab('overview')}
          >
            <span className="nav-icon">📊</span>
            <span>Overview</span>
          </button>
          <button
            className={`nav-item ${activeTab === 'degrees' ? 'active' : ''}`}
            onClick={() => setActiveTab('degrees')}
          >
            <span className="nav-icon">📈</span>
            <span>Degree Suggestions</span>
          </button>
          <button
            className={`nav-item ${activeTab === 'scholarships' ? 'active' : ''}`}
            onClick={() => setActiveTab('scholarships')}
          >
            <span className="nav-icon">🏆</span>
            <span>Scholarships</span>
          </button>
          <button
            className={`nav-item ${activeTab === 'bookmarks' ? 'active' : ''}`}
            onClick={() => setActiveTab('bookmarks')}
          >
            <span className="nav-icon">🔖</span>
            <span>Bookmarks</span>
          </button>
        </nav>

        <div className="sidebar-footer">
          <Link to="/settings" className="settings-link">
            <span className="nav-icon">⚙️</span>
            <span>Settings</span>
          </Link>
          <Link to="/" className="logout-link">
            <span className="nav-icon">🚪</span>
            <span>Logout</span>
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="dashboard-main">
        {/* Header */}
        <header className="dashboard-header">
          <div className="header-left">
            <h1 className="dashboard-title">
              {getGreeting()}, {user.name}! 👋
            </h1>
            <p className="dashboard-subtitle">
              Let's explore your future career path!
            </p>
          </div>
          <div className="header-right">
            <div className="notification-icon" onClick={() => setShowNotifications(!showNotifications)}>
              <span>🔔</span>
              {dashboardData.scholarshipNotifications.length > 0 && (
                <span className="notification-badge">{dashboardData.scholarshipNotifications.length}</span>
              )}
              {showNotifications && (
                <div className="notification-dropdown">
                  <h3>Scholarship Alerts</h3>
                  {dashboardData.scholarshipNotifications.map(scholarship => (
                    <div key={scholarship.id} className="notification-item">
                      <p><strong>{scholarship.title}</strong></p>
                      <p>Deadline: {scholarship.deadline}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className="time-display">
              <span className="current-time">{formatTime(currentTime)}</span>
              <span className="current-date">{currentTime.toLocaleDateString()}</span>
            </div>
            <div className="user-profile">
              <img src={user.avatar} alt="Profile" className="profile-avatar" />
              <div className="profile-info">
                <span className="profile-name">{user.name}</span>
                <span className="profile-role">{user.role}</span>
              </div>
            </div>
          </div>
        </header>

        {/* Content Area */}
        <div className="dashboard-content">
          {activeTab === 'overview' && (
            <>
              {/* Stats Grid */}
              <section className="stats-grid">
                {dashboardData.stats.map((stat) => (
                  <div key={stat.id} className="stat-card" style={{ '--card-color': stat.color }}>
                    <div className="stat-icon" style={{ backgroundColor: stat.color + '20' }}>
                      {stat.icon}
                    </div>
                    <div className="stat-info">
                      <h3 className="stat-value">{stat.value}</h3>
                      <p className="stat-title">{stat.title}</p>
                    </div>
                  </div>
                ))}
              </section>

              {/* Main Grid */}
              <div className="content-grid">
                {/* Degree Suggestions */}
                <section className="content-card">
                  <div className="card-header">
                    <h2 className="card-title">Top Degree Suggestions</h2>
                    <Link to="#" onClick={() => setActiveTab('degrees')} className="card-action">View All</Link>
                  </div>
                  <div className="degree-list">
                    {dashboardData.degreeSuggestions.map((degree) => (
                      <div key={degree.id} className="degree-item">
                        <div className="degree-info">
                          <h3 className="degree-title">{degree.title}</h3>
                          <div className="degree-meta">
                            <span className="degree-field">{degree.field}</span>
                            <span className="degree-match" style={{ color: getMatchColor(degree.match) }}>{degree.match}</span>
                          </div>
                        </div>
                        <div className="degree-rating">
                          <div className="rating-circle" style={{ background: `conic-gradient(#667eea ${degree.rating * 3.6}deg, #e2e8f0 0deg)` }}>
                            <span className="rating-text">{degree.rating}%</span>
                          </div>
                          <button className={`bookmark-btn ${isBookmarked(degree) ? 'bookmarked' : ''}`} onClick={() => toggleBookmark(degree)}>
                            {isBookmarked(degree) ? '★' : '☆'}
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Scholarships & Quiz History */}
                <div className="right-column">
                  {/* Scholarship Notifications */}
                  <section className="content-card tasks-card">
                    <div className="card-header">
                      <h2 className="card-title">Scholarship Alerts</h2>
                      <span className="task-count">{dashboardData.scholarshipNotifications.length}</span>
                    </div>
                    <div className="tasks-list">
                      {dashboardData.scholarshipNotifications.map((scholarship) => (
                        <div key={scholarship.id} className="task-item">
                          <div className="task-priority" style={{ backgroundColor: getPriorityColor(scholarship.priority) }}></div>
                          <div className="task-info">
                            <h4 className="task-title">{scholarship.title}</h4>
                            <span className="task-due">Deadline: {scholarship.deadline}</span>
                          </div>
                          <button className={`bookmark-btn ${isBookmarked(scholarship) ? 'bookmarked' : ''}`} onClick={() => toggleBookmark(scholarship)}>
                            {isBookmarked(scholarship) ? '★' : '☆'}
                          </button>
                        </div>
                      ))}
                    </div>
                  </section>
                </div>
              </div>
            </>
          )}

          {activeTab === 'bookmarks' && (
            <section className="tab-content">
              <h2 className="tab-title">Your Bookmarks</h2>
              <div className="bookmarks-grid">
                {bookmarkedItems.length > 0 ? (
                  bookmarkedItems.map((item) => (
                    <div key={item.id} className="bookmark-card">
                      <h3>{item.title}</h3>
                      {item.college && <p>College: {item.college}</p>}
                      {item.field && <p>Field: {item.field}</p>}
                      <button className="remove-bookmark-btn" onClick={() => toggleBookmark(item)}>Remove</button>
                    </div>
                  ))
                ) : (
                  <p>You haven't bookmarked any items yet.</p>
                )}
              </div>
            </section>
          )}

          {/* Other tabs content */}
        </div>
      </main>
    </div>
  );
}

export default Dashboard;