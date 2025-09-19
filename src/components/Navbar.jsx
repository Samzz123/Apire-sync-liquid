<<<<<<< HEAD
import React from "react";
import { useState } from "react";
import CareerAIChat from "./CareerAIChat";

export default function Navbar() {
  const [aiOpen, setAiOpen] = useState(false);
  return (
    <>
      <nav className="navbar">
        {/* existing navbar code */}
        <button className="nav-ai-btn" onClick={() => setAiOpen(true)} title="Career AI">
          💬
        </button>
      </nav>
      <CareerAIChat open={aiOpen} onClose={() => setAiOpen(false)} />
    </>
  );
}
=======
// Enhanced Navbar.jsx with Authentication State
import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  // Mock user data - in a real app, this would come from your auth context/state
  const mockUser = {
    name: "John Doe",
    email: "john.doe@email.com",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face&auto=format",
    role: "Student"
  };

  // Check authentication status on component mount
  useEffect(() => {
    // In a real app, you'd check localStorage, sessionStorage, or your auth context
    const authStatus = localStorage.getItem('isAuthenticated');
    const userData = localStorage.getItem('userData');
    
    if (authStatus === 'true') {
      setIsAuthenticated(true);
      setUser(userData ? JSON.parse(userData) : mockUser);
    }
  }, []);

  // Handle clicks outside dropdown to close it
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setUserDropdownOpen(false);
      }
    }
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleUserDropdown = () => {
    setUserDropdownOpen(!userDropdownOpen);
  };

  const handleLogin = () => {
    // Simulate login - in reality, this would be handled by your auth system
    setIsAuthenticated(true);
    setUser(mockUser);
    localStorage.setItem('isAuthenticated', 'true');
    localStorage.setItem('userData', JSON.stringify(mockUser));
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUser(null);
    setUserDropdownOpen(false);
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('userData');
    navigate('/');
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" className="brand">
          <img src="/assets/logo.png" alt="Aspire Sync Logo" className="logo" />
          <span className="brand-text">Aspire Sync</span>
        </Link>
      </div>

      {/* Desktop Navigation */}
      <div className="nav-links desktop-nav">
        <Link to="/">Home</Link>
        <Link to="/college">College Finder</Link>
        <Link to="/quiz">Career Quiz</Link>
        <Link to="/courses">Courses</Link>
        <Link to="/resources">Resources</Link>
        <Link to="/about">About Us</Link>
        <Link to="/faq">FAQ</Link>
      </div>

      <div className="navbar-right">
        {!isAuthenticated ? (
          <>
            {/* Login/Signup buttons for non-authenticated users */}
            <Link to="/login" className="btn-login">Login</Link>
            <Link to="/signup" className="btn-signup">Sign up</Link>
          </>
        ) : (
          <>
            {/* User profile dropdown for authenticated users */}
            <div className="user-profile-container" ref={dropdownRef}>
              <button 
                className="user-profile-button"
                onClick={toggleUserDropdown}
                aria-label="User menu"
              >
                <img 
                  src={user?.avatar} 
                  alt={user?.name} 
                  className="user-avatar"
                />
                <span className="user-name">{user?.name}</span>
                <svg 
                  className={`dropdown-arrow ${userDropdownOpen ? 'open' : ''}`}
                  width="12" 
                  height="12" 
                  viewBox="0 0 12 12" 
                  fill="none"
                >
                  <path 
                    d="M3 4.5L6 7.5L9 4.5" 
                    stroke="currentColor" 
                    strokeWidth="1.5" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              {/* Dropdown Menu */}
              {userDropdownOpen && (
                <div className="user-dropdown">
                  <div className="dropdown-header">
                    <img 
                      src={user?.avatar} 
                      alt={user?.name} 
                      className="dropdown-avatar"
                    />
                    <div className="dropdown-user-info">
                      <span className="dropdown-name">{user?.name}</span>
                      <span className="dropdown-email">{user?.email}</span>
                    </div>
                  </div>
                  
                  <div className="dropdown-divider"></div>
                  
                  <div className="dropdown-menu">
                    <Link 
                      to="/dashboard" 
                      className="dropdown-item"
                      onClick={() => setUserDropdownOpen(false)}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="3" y="3" width="7" height="9"></rect>
                        <rect x="14" y="3" width="7" height="5"></rect>
                        <rect x="14" y="12" width="7" height="9"></rect>
                        <rect x="3" y="16" width="7" height="5"></rect>
                      </svg>
                      Dashboard
                    </Link>
                    
                    <Link 
                      to="/profile" 
                      className="dropdown-item"
                      onClick={() => setUserDropdownOpen(false)}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                      </svg>
                      Profile
                    </Link>
                    
                    <Link 
                      to="/settings" 
                      className="dropdown-item"
                      onClick={() => setUserDropdownOpen(false)}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="3"></circle>
                        <path d="M12 1v6m0 6v6m11-7h-6m-6 0H1m11-7a4 4 0 0 1 0 8m0-8a4 4 0 0 0 0 8"></path>
                      </svg>
                      Settings
                    </Link>
                    
                    <div className="dropdown-divider"></div>
                    
                    <button 
                      className="dropdown-item logout-item"
                      onClick={handleLogout}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                        <polyline points="16,17 21,12 16,7"></polyline>
                        <line x1="21" y1="12" x2="9" y2="12"></line>
                      </svg>
                      Logout
                    </button>
                  </div>
                </div>
              )}
            </div>
          </>
        )}
        
        {/* Mobile Menu Button */}
        <button 
          className="mobile-menu-btn"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={`mobile-nav ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-nav-content">
          <Link to="/" onClick={toggleMobileMenu}>🏠 Home</Link>
          <Link to="/college" onClick={toggleMobileMenu}>🎓 College Finder</Link>
          <Link to="/quiz" onClick={toggleMobileMenu}>❓ Career Quiz</Link>
          <Link to="/courses" onClick={toggleMobileMenu}>📚 Courses</Link>
          <Link to="/resources" onClick={toggleMobileMenu}>📖 Resources</Link>
          <Link to="/about" onClick={toggleMobileMenu}>ℹ️ About Us</Link>
          <Link to="/faq" onClick={toggleMobileMenu}>💬 FAQ</Link>
          
          {!isAuthenticated ? (
            <div className="mobile-auth-buttons">
              <Link to="/login" className="mobile-btn-login" onClick={toggleMobileMenu}>
                Login
              </Link>
              <Link to="/signup" className="mobile-btn-signup" onClick={toggleMobileMenu}>
                Sign up
              </Link>
            </div>
          ) : (
            <div className="mobile-user-section">
              <div className="mobile-user-info">
                <img src={user?.avatar} alt={user?.name} className="mobile-user-avatar" />
                <div>
                  <div className="mobile-user-name">{user?.name}</div>
                  <div className="mobile-user-email">{user?.email}</div>
                </div>
              </div>
              <Link to="/dashboard" className="mobile-nav-item" onClick={toggleMobileMenu}>
                📊 Dashboard
              </Link>
              <Link to="/profile" className="mobile-nav-item" onClick={toggleMobileMenu}>
                👤 Profile  
              </Link>
              <Link to="/settings" className="mobile-nav-item" onClick={toggleMobileMenu}>
                ⚙️ Settings
              </Link>
              <button className="mobile-logout-btn" onClick={handleLogout}>
                🚪 Logout
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="mobile-menu-overlay"
          onClick={toggleMobileMenu}
        />
      )}
    </nav>
  );
}
>>>>>>> fed4b15ae02a1fa3d5418c4b433ddc9930172977
