// Enhanced src/pages/Resources.jsx
import React, { useState, useEffect } from 'react';
import './Resources.css';

// Comprehensive resources data with enhanced information
const resourcesData = [
  {
    id: 1,
    category: 'E-Books & Study Materials',
    title: 'NCERT Textbooks',
    description: 'Complete collection of NCERT textbooks from Class I to XII for all subjects with solutions.',
    url: 'https://ncert.nic.in/textbook.php',
    icon: '📚',
    type: 'Free',
    rating: 4.8,
    popularity: 95,
    subjects: ['Mathematics', 'Science', 'Social Studies', 'Languages'],
    lastUpdated: '2024'
  },
  {
    id: 2,
    category: 'E-Books & Study Materials',
    title: 'NPTEL Online Courses',
    description: 'Free online courses and video lectures from premier engineering institutes like IITs and IISc.',
    url: 'https://nptel.ac.in/',
    icon: '🎓',
    type: 'Free',
    rating: 4.7,
    popularity: 88,
    subjects: ['Engineering', 'Science', 'Management', 'Humanities'],
    lastUpdated: '2024'
  },
  {
    id: 3,
    category: 'E-Books & Study Materials',
    title: 'CBSE Sample Papers',
    description: 'Official CBSE sample papers, marking schemes, and previous year question papers.',
    url: 'https://cbseacademic.nic.in/SQP.html',
    icon: '📝',
    type: 'Free',
    rating: 4.6,
    popularity: 82,
    subjects: ['All CBSE Subjects'],
    lastUpdated: '2024'
  },
  {
    id: 4,
    category: 'E-Books & Study Materials',
    title: 'Khan Academy',
    description: 'Comprehensive online learning platform with interactive exercises and instructional videos.',
    url: 'https://www.khanacademy.org/',
    icon: '🌟',
    type: 'Free',
    rating: 4.9,
    popularity: 92,
    subjects: ['Math', 'Science', 'Computer Programming', 'Arts'],
    lastUpdated: '2024'
  },
  {
    id: 5,
    category: 'Scholarship Portals',
    title: 'National Scholarship Portal (NSP)',
    description: 'Central platform for various scholarship schemes by Government of India for students.',
    url: 'https://scholarships.gov.in/',
    icon: '🏆',
    type: 'Government',
    rating: 4.5,
    popularity: 85,
    subjects: ['All Fields'],
    lastUpdated: '2024'
  },
  {
    id: 6,
    category: 'Scholarship Portals',
    title: 'J&K Scholarship Schemes',
    description: 'State-specific scholarship programs for students of Jammu & Kashmir including merit and need-based awards.',
    url: 'https://jkhighereducation.nic.in/scholarship.html',
    icon: '🎯',
    type: 'State Government',
    rating: 4.3,
    popularity: 78,
    subjects: ['All Fields'],
    lastUpdated: '2024'
  },
  {
    id: 7,
    category: 'Scholarship Portals',
    title: 'Buddy4Study',
    description: 'Comprehensive scholarship search platform with personalized recommendations and application tracking.',
    url: 'https://www.buddy4study.com/',
    icon: '💡',
    type: 'Private',
    rating: 4.4,
    popularity: 71,
    subjects: ['All Fields'],
    lastUpdated: '2024'
  },
  {
    id: 8,
    category: 'Official Websites',
    title: 'J&K Higher Education Department',
    description: 'Official portal for higher education policies, college admissions, and academic updates in J&K.',
    url: 'https://highereducation.jk.gov.in/',
    icon: '🏛️',
    type: 'Government',
    rating: 4.2,
    popularity: 76,
    subjects: ['Higher Education'],
    lastUpdated: '2024'
  },
  {
    id: 9,
    category: 'Official Websites',
    title: 'UGC - University Grants Commission',
    description: 'Regulatory body for higher education with university recognition, quality standards, and funding information.',
    url: 'https://www.ugc.ac.in/',
    icon: '⚖️',
    type: 'Central Government',
    rating: 4.1,
    popularity: 73,
    subjects: ['University Standards'],
    lastUpdated: '2024'
  },
  {
    id: 10,
    category: 'Official Websites',
    title: 'AICTE - All India Council for Technical Education',
    description: 'Statutory body for planning and coordinated development of technical education system.',
    url: 'https://www.aicte-india.org/',
    icon: '⚙️',
    type: 'Central Government',
    rating: 4.0,
    popularity: 69,
    subjects: ['Technical Education'],
    lastUpdated: '2024'
  },
  {
    id: 11,
    category: 'Career Guidance',
    title: 'National Career Service (NCS)',
    description: 'Government initiative providing career counselling, skill development, and job search assistance.',
    url: 'https://www.ncs.gov.in/',
    icon: '🎯',
    type: 'Government',
    rating: 4.3,
    popularity: 67,
    subjects: ['Career Development'],
    lastUpdated: '2024'
  },
  {
    id: 12,
    category: 'Career Guidance',
    title: 'LinkedIn Learning',
    description: 'Professional development courses and career guidance from industry experts.',
    url: 'https://learning.linkedin.com/',
    icon: '💼',
    type: 'Premium/Free Trial',
    rating: 4.6,
    popularity: 84,
    subjects: ['Professional Skills', 'Technology', 'Business'],
    lastUpdated: '2024'
  },
  {
    id: 13,
    category: 'Competitive Exams',
    title: 'NTA - National Testing Agency',
    description: 'Official website for JEE, NEET, UGC NET and other national level competitive examinations.',
    url: 'https://nta.ac.in/',
    icon: '📋',
    type: 'Government',
    rating: 4.4,
    popularity: 91,
    subjects: ['Competitive Exams'],
    lastUpdated: '2024'
  },
  {
    id: 14,
    category: 'Competitive Exams',
    title: 'UPSC - Union Public Service Commission',
    description: 'Premier central recruiting agency for civil services and other government positions.',
    url: 'https://www.upsc.gov.in/',
    icon: '🏅',
    type: 'Government',
    rating: 4.5,
    popularity: 89,
    subjects: ['Civil Services'],
    lastUpdated: '2024'
  },
  {
    id: 15,
    category: 'Skill Development',
    title: 'Skill India Digital',
    description: 'Digital platform for skill development courses, certification, and employment opportunities.',
    url: 'https://www.skillindiadigital.gov.in/',
    icon: '🛠️',
    type: 'Government',
    rating: 4.2,
    popularity: 75,
    subjects: ['Vocational Skills', 'Digital Literacy'],
    lastUpdated: '2024'
  }
];

export default function Resources() {
  const [resources, setResources] = useState(resourcesData);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('popularity');
  const [isLoading, setIsLoading] = useState(false);
  const [favorites, setFavorites] = useState(new Set());

  // Filter and sort resources
  useEffect(() => {
    setIsLoading(true);
    
    const timer = setTimeout(() => {
      let filtered = [...resourcesData];

      // Filter by search term
      if (searchTerm.trim()) {
        filtered = filtered.filter((resource) =>
          resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          resource.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
          resource.subjects.some(subject => 
            subject.toLowerCase().includes(searchTerm.toLowerCase())
          )
        );
      }

      // Filter by category
      if (selectedCategory !== 'All') {
        filtered = filtered.filter((resource) => resource.category === selectedCategory);
      }

      // Sort resources
      filtered.sort((a, b) => {
        switch (sortBy) {
          case 'popularity':
            return b.popularity - a.popularity;
          case 'rating':
            return b.rating - a.rating;
          case 'title':
            return a.title.localeCompare(b.title);
          case 'category':
            return a.category.localeCompare(b.category);
          default:
            return 0;
        }
      });

      setResources(filtered);
      setIsLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchTerm, selectedCategory, sortBy]);

  // Get unique categories
  const categories = ['All', ...new Set(resourcesData.map(item => item.category))];

  // Handle favorite toggle
  const toggleFavorite = (resourceId) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(resourceId)) {
      newFavorites.delete(resourceId);
    } else {
      newFavorites.add(resourceId);
    }
    setFavorites(newFavorites);
  };

  // Handle resource click tracking
  const handleResourceClick = (resource) => {
    console.log(`User clicked on: ${resource.title}`);
    // Here you could add analytics tracking
  };

  const handleClearFilters = () => {
    setSearchTerm('');
    setSelectedCategory('All');
    setSortBy('popularity');
  };

  return (
    <div className="resources-page">
      {/* Enhanced Header */}
      <header className="resources-header">
        <div className="header-content">
          <h1>
            <span className="header-icon">📖</span>
            Educational Resources Hub
          </h1>
          <p>
            Discover a curated collection of premium educational resources, scholarship opportunities, 
            and official platforms to accelerate your learning journey and career growth.
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="resources-controls">
          <div className="search-filter-bar">
            <div className="search-container">
              <input
                type="search"
                placeholder="🔍 Search resources, subjects, or keywords..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
              {searchTerm && (
                <button 
                  onClick={() => setSearchTerm('')}
                  className="clear-search"
                >
                  ✕
                </button>
              )}
            </div>

            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="category-select"
            >
              {categories.map(category => (
                <option key={category} value={category}>
                  {category === 'All' ? '📁 All Categories' : `📁 ${category}`}
                </option>
              ))}
            </select>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="sort-select"
            >
              <option value="popularity">🔥 Most Popular</option>
              <option value="rating">⭐ Highest Rated</option>
              <option value="title">📝 A-Z</option>
              <option value="category">📂 By Category</option>
            </select>
          </div>

          {/* Results Summary */}
          <div className="results-summary">
            <div className="results-count">
              <span className="count-badge">
                {resources.length} resource{resources.length !== 1 ? 's' : ''} available
              </span>
            </div>
            
            {(searchTerm || selectedCategory !== 'All') && (
              <button onClick={handleClearFilters} className="clear-all-btn">
                🔄 Clear Filters
              </button>
            )}
          </div>
        </div>
      </header>

      {/* Resources Grid */}
      <main className="resources-main">
        {isLoading ? (
          <div className="loading-state">
            <div className="loading-spinner"></div>
            <p>Loading resources...</p>
          </div>
        ) : resources.length > 0 ? (
          <div className="resources-container">
            {/* Group resources by category for better organization */}
            {categories.filter(cat => cat !== 'All' && (selectedCategory === 'All' || selectedCategory === cat))
              .map(category => {
                const categoryResources = resources.filter(resource => resource.category === category);
                if (categoryResources.length === 0) return null;

                return (
                  <section key={category} className="category-section">
                    <div className="category-header">
                      <h2 className="category-title">{category}</h2>
                      <span className="category-count">
                        {categoryResources.length} resource{categoryResources.length !== 1 ? 's' : ''}
                      </span>
                    </div>

                    <div className="resources-grid">
                      {categoryResources.map((resource, index) => (
                        <div 
                          key={resource.id} 
                          className="resource-card"
                          style={{ animationDelay: `${index * 0.1}s` }}
                        >
                          <div className="card-header">
                            <div className="resource-icon">
                              <span className="icon-emoji">{resource.icon}</span>
                            </div>
                            <div className="card-actions">
                              <button
                                onClick={() => toggleFavorite(resource.id)}
                                className={`favorite-btn ${favorites.has(resource.id) ? 'favorited' : ''}`}
                              >
                                {favorites.has(resource.id) ? '❤️' : '🤍'}
                              </button>
                              <span className="resource-type">{resource.type}</span>
                            </div>
                          </div>

                          <div className="card-content">
                            <h3 className="resource-title">{resource.title}</h3>
                            <p className="resource-description">{resource.description}</p>
                            
                            <div className="resource-meta">
                              <div className="rating-popularity">
                                <div className="rating">
                                  <span className="star">⭐</span>
                                  <span className="rating-value">{resource.rating}</span>
                                </div>
                                <div className="popularity">
                                  <span className="fire">🔥</span>
                                  <span className="popularity-value">{resource.popularity}%</span>
                                </div>
                              </div>
                              <div className="last-updated">
                                Updated: {resource.lastUpdated}
                              </div>
                            </div>

                            <div className="subjects-list">
                              {resource.subjects.slice(0, 3).map((subject, idx) => (
                                <span key={idx} className="subject-tag">{subject}</span>
                              ))}
                              {resource.subjects.length > 3 && (
                                <span className="subject-tag more-subjects">
                                  +{resource.subjects.length - 3} more
                                </span>
                              )}
                            </div>
                          </div>

                          <div className="card-footer">
                            <a
                              href={resource.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="resource-link"
                              onClick={() => handleResourceClick(resource)}
                            >
                              <span>Visit Resource</span>
                              <span className="external-icon">🔗</span>
                            </a>
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>
                );
              })}
          </div>
        ) : (
          <div className="no-results">
            <div className="no-results-content">
              <div className="no-results-icon">🔍</div>
              <h3>No resources found</h3>
              <p>We couldn't find any resources matching your search criteria.</p>
              <div className="suggestions">
                <p>Try:</p>
                <ul>
                  <li>Using different keywords or subjects</li>
                  <li>Selecting a different category</li>
                  <li>Checking your spelling</li>
                </ul>
              </div>
              <button onClick={handleClearFilters} className="reset-btn">
                🔄 Show All Resources
              </button>
            </div>
          </div>
        )}
      </main>

      {/* Statistics Footer */}
      {!isLoading && resources.length > 0 && (
        <footer className="resources-stats">
          <div className="stats-container">
            <div className="stat-item">
              <span className="stat-number">{resourcesData.length}</span>
              <span className="stat-label">Total Resources</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">{categories.length - 1}</span>
              <span className="stat-label">Categories</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">{favorites.size}</span>
              <span className="stat-label">Favorites</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">
                {Math.round(resourcesData.reduce((acc, res) => acc + res.rating, 0) / resourcesData.length * 10) / 10}
              </span>
              <span className="stat-label">Avg Rating</span>
            </div>
          </div>
        </footer>
      )}
    </div>
  );
}