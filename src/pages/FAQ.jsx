// src/pages/FAQ.jsx
import React, { useState, useEffect } from 'react';
import './FAQ.css';

const faqData = [
  {
    id: 1,
    category: 'Getting Started',
    question: 'What is Aspire Sync and how can it help me?',
    answer: 'Aspire Sync is a comprehensive educational guidance platform designed specifically for students in Jammu & Kashmir. We help you discover your perfect career path through personalized quizzes, explore suitable colleges, find scholarship opportunities, and access premium educational resources. Our AI-powered recommendations ensure you make informed decisions about your academic and professional future.',
    keywords: ['aspire sync', 'career guidance', 'educational platform'],
    popular: true
  },
  {
    id: 2,
    category: 'Getting Started',
    question: 'How do I get started with Aspire Sync?',
    answer: 'Getting started is easy! Simply create a free account, take our comprehensive career discovery quiz (takes about 5-10 minutes), and receive personalized recommendations for courses and colleges. You can then explore our college finder, browse scholarship opportunities, and access our extensive resource library. No payment is required for basic features.',
    keywords: ['getting started', 'account creation', 'career quiz'],
    popular: true
  },
  {
    id: 3,
    category: 'Career Quiz',
    question: 'How accurate is the career guidance quiz?',
    answer: 'Our career quiz is built on scientifically-backed psychometric principles and has been refined based on feedback from over 50,000 students. It analyzes your interests, aptitudes, personality traits, and values to provide highly accurate career recommendations. The quiz has a 92% accuracy rate based on user feedback and follow-up surveys conducted 6 months post-completion.',
    keywords: ['career quiz', 'accuracy', 'psychometric'],
    popular: true
  },
  {
    id: 4,
    category: 'Career Quiz',
    question: 'Can I retake the career quiz?',
    answer: 'Yes! You can retake the career quiz as many times as you like. We actually recommend retaking it every 6-12 months as your interests and goals may evolve. Each time you take the quiz, our AI learns more about your preferences and provides increasingly personalized recommendations.',
    keywords: ['retake quiz', 'multiple attempts'],
    popular: false
  },
  {
    id: 5,
    category: 'College Finder',
    question: 'How do you select and verify college information?',
    answer: 'We partner directly with colleges and educational institutions across J&K to ensure accurate, up-to-date information. Our team conducts regular verification visits, maintains relationships with admission offices, and cross-references data with official government sources. All information is updated at least quarterly, with critical details like fees and admission dates updated in real-time.',
    keywords: ['college verification', 'accurate information', 'partnerships'],
    popular: true
  },
  {
    id: 6,
    category: 'College Finder',
    question: 'Do you cover colleges outside Jammu & Kashmir?',
    answer: 'While our primary focus is on J&K institutions, we also feature major universities and colleges across India that actively recruit students from J&K or offer special quotas/scholarships for J&K students. This includes IITs, NITs, central universities, and other premier institutions. We\'re continuously expanding our database.',
    keywords: ['colleges outside jk', 'national colleges', 'iit nit'],
    popular: false
  },
  {
    id: 7,
    category: 'Scholarships & Financial Aid',
    question: 'What types of scholarships do you help with?',
    answer: 'We provide information on merit-based scholarships, need-based financial aid, minority scholarships, sports scholarships, and special programs for J&K students. This includes government schemes (NSP, J&K state scholarships), private foundation grants, college-specific aid, and international scholarship opportunities. We also help with application processes and deadlines.',
    keywords: ['scholarships', 'financial aid', 'government schemes'],
    popular: true
  },
  {
    id: 8,
    category: 'Scholarships & Financial Aid',
    question: 'How do I apply for scholarships through your platform?',
    answer: 'We provide detailed application guides, deadline reminders, and direct links to official scholarship portals. While you apply directly through the respective organizations, we offer step-by-step guidance, document checklists, essay tips, and sometimes even connect you with scholarship recipients for mentorship.',
    keywords: ['scholarship application', 'application process'],
    popular: false
  },
  {
    id: 9,
    category: 'Technical Support',
    question: 'Is there a mobile app available?',
    answer: 'Yes! Our mobile apps are available for both iOS and Android devices. The app includes all web features plus offline access to saved colleges and resources, push notifications for important deadlines, and a streamlined quiz experience. Search for "Aspire Sync" in your device\'s app store.',
    keywords: ['mobile app', 'ios android', 'offline access'],
    popular: true
  },
  {
    id: 10,
    category: 'Technical Support',
    question: 'What should I do if I encounter technical issues?',
    answer: 'For technical issues, first try refreshing your browser or updating the app. If problems persist, contact our support team at support@aspiresync.com or use the chat widget on our website. Include details about your device, browser, and the specific issue. We typically respond within 2-4 hours during business days.',
    keywords: ['technical issues', 'support', 'troubleshooting'],
    popular: false
  },
  {
    id: 11,
    category: 'Account & Privacy',
    question: 'Is my personal information safe and secure?',
    answer: 'Absolutely. We use bank-level encryption (256-bit SSL) to protect your data and comply with international privacy standards including GDPR. We never sell your personal information to third parties. You can review, update, or delete your data at any time through your account settings. Our privacy policy is transparent and easily accessible.',
    keywords: ['data security', 'privacy', 'encryption'],
    popular: true
  },
  {
    id: 12,
    category: 'Account & Privacy',
    question: 'How do I delete my account?',
    answer: 'You can delete your account at any time by going to Settings > Account > Delete Account. This will permanently remove all your data from our servers within 30 days. Before deletion, you can download a copy of your data including quiz results and saved colleges. Note that this action cannot be undone.',
    keywords: ['delete account', 'data removal'],
    popular: false
  },
  {
    id: 13,
    category: 'Pricing & Plans',
    question: 'Is Aspire Sync completely free to use?',
    answer: 'Yes, our core features including career quiz, college search, basic resources, and scholarship information are completely free. We also offer a premium subscription with advanced features like one-on-one counseling sessions, detailed career reports, priority support, and early access to new features. Premium plans start at ₹499/month.',
    keywords: ['free features', 'pricing', 'premium subscription'],
    popular: true
  },
  {
    id: 14,
    category: 'Pricing & Plans',
    question: 'What additional features do premium users get?',
    answer: 'Premium users get personalized counseling sessions with certified career advisors, detailed psychometric reports, priority college application support, advanced filters in college search, unlimited quiz retakes with detailed analysis, early access to new features, and ad-free experience. Premium users also get access to exclusive webinars and workshops.',
    keywords: ['premium features', 'counseling', 'detailed reports'],
    popular: false
  },
  {
    id: 15,
    category: 'Career Guidance',
    question: 'Do you provide one-on-one career counseling?',
    answer: 'Yes! We offer personalized career counseling sessions with certified counselors who have expertise in J&K\'s education system. Sessions are available via video call, phone, or in-person (in select cities). Basic users get one free 30-minute session, while premium users get unlimited access. Book sessions through your dashboard.',
    keywords: ['career counseling', 'one on one', 'certified counselors'],
    popular: true
  },
  {
    id: 16,
    category: 'Career Guidance',
    question: 'How do you stay updated with changing career trends?',
    answer: 'Our team continuously monitors industry trends, job market data, and emerging career opportunities. We maintain partnerships with industry professionals, conduct regular surveys with employers, and analyze government employment data. Our recommendations are updated monthly to reflect current market demands and future opportunities.',
    keywords: ['career trends', 'market data', 'industry insights'],
    popular: false
  }
];

const categories = [...new Set(faqData.map(faq => faq.category))];

export default function FAQ() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [openItems, setOpenItems] = useState(new Set());
  const [filteredFAQs, setFilteredFAQs] = useState(faqData);
  const [showPopularOnly, setShowPopularOnly] = useState(false);

  // Filter FAQs based on search and category
  useEffect(() => {
    let filtered = faqData;

    // Filter by search term
    if (searchTerm.trim()) {
      filtered = filtered.filter(faq =>
        faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
        faq.keywords.some(keyword => 
          keyword.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }

    // Filter by category
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(faq => faq.category === selectedCategory);
    }

    // Filter by popularity
    if (showPopularOnly) {
      filtered = filtered.filter(faq => faq.popular);
    }

    setFilteredFAQs(filtered);
  }, [searchTerm, selectedCategory, showPopularOnly]);

  const toggleItem = (id) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id);
    } else {
      newOpenItems.add(id);
    }
    setOpenItems(newOpenItems);
  };

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedCategory('All');
    setShowPopularOnly(false);
    setOpenItems(new Set());
  };

  const expandAll = () => {
    setOpenItems(new Set(filteredFAQs.map(faq => faq.id)));
  };

  const collapseAll = () => {
    setOpenItems(new Set());
  };

  return (
    <div className="faq-page">
      {/* Header */}
      <header className="faq-header">
        <div className="header-content">
          <h1>
            <span className="header-icon">❓</span>
            Frequently Asked Questions
          </h1>
          <p>
            Find answers to common questions about Aspire Sync. Can't find what you're looking for? 
            <a href="mailto:support@aspiresync.com" className="contact-link"> Contact our support team</a>
          </p>
        </div>

        {/* Search and Filter Controls */}
        <div className="faq-controls">
          <div className="search-filter-row">
            <div className="search-container">
              <input
                type="search"
                placeholder="🔍 Search questions, answers, or keywords..."
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
              <option value="All">📁 All Categories</option>
              {categories.map(category => (
                <option key={category} value={category}>📁 {category}</option>
              ))}
            </select>

            <label className="popular-toggle">
              <input
                type="checkbox"
                checked={showPopularOnly}
                onChange={(e) => setShowPopularOnly(e.target.checked)}
              />
              <span className="toggle-slider"></span>
              <span className="toggle-label">🔥 Popular Only</span>
            </label>
          </div>

          <div className="control-buttons">
            <div className="results-info">
              <span className="results-count">
                {filteredFAQs.length} question{filteredFAQs.length !== 1 ? 's' : ''} found
              </span>
            </div>

            <div className="bulk-actions">
              <button onClick={expandAll} className="expand-btn">
                📖 Expand All
              </button>
              <button onClick={collapseAll} className="collapse-btn">
                📑 Collapse All
              </button>
              {(searchTerm || selectedCategory !== 'All' || showPopularOnly) && (
                <button onClick={clearFilters} className="clear-filters-btn">
                  🔄 Clear Filters
                </button>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* FAQ Content */}
      <main className="faq-main">
        {filteredFAQs.length > 0 ? (
          <div className="faq-container">
            {/* Group FAQs by category if not filtering by specific category */}
            {selectedCategory === 'All' ? (
              categories.map(category => {
                const categoryFAQs = filteredFAQs.filter(faq => faq.category === category);
                if (categoryFAQs.length === 0) return null;

                return (
                  <div key={category} className="category-section">
                    <div className="category-header">
                      <h2 className="category-title">{category}</h2>
                      <span className="category-count">
                        {categoryFAQs.length} question{categoryFAQs.length !== 1 ? 's' : ''}
                      </span>
                    </div>

                    <div className="faq-list">
                      {categoryFAQs.map((faq, index) => (
                        <div 
                          key={faq.id} 
                          className={`faq-item ${openItems.has(faq.id) ? 'open' : ''} ${faq.popular ? 'popular' : ''}`}
                          style={{ animationDelay: `${index * 0.1}s` }}
                        >
                          <button
                            className="faq-question"
                            onClick={() => toggleItem(faq.id)}
                            aria-expanded={openItems.has(faq.id)}
                          >
                            <span className="question-text">
                              {faq.popular && <span className="popular-badge">🔥</span>}
                              {faq.question}
                            </span>
                            <span className="toggle-icon">
                              {openItems.has(faq.id) ? '−' : '+'}
                            </span>
                          </button>
                          
                          <div className="faq-answer">
                            <div className="answer-content">
                              <p>{faq.answer}</p>
                              <div className="answer-keywords">
                                <span className="keywords-label">Related topics:</span>
                                {faq.keywords.map((keyword, idx) => (
                                  <span key={idx} className="keyword-tag">{keyword}</span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })
            ) : (
              // Show filtered FAQs without category grouping
              <div className="faq-list">
                {filteredFAQs.map((faq, index) => (
                  <div 
                    key={faq.id} 
                    className={`faq-item ${openItems.has(faq.id) ? 'open' : ''} ${faq.popular ? 'popular' : ''}`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <button
                      className="faq-question"
                      onClick={() => toggleItem(faq.id)}
                      aria-expanded={openItems.has(faq.id)}
                    >
                      <span className="question-text">
                        {faq.popular && <span className="popular-badge">🔥</span>}
                        {faq.question}
                        <span className="question-category">({faq.category})</span>
                      </span>
                      <span className="toggle-icon">
                        {openItems.has(faq.id) ? '−' : '+'}
                      </span>
                    </button>
                    
                    <div className="faq-answer">
                      <div className="answer-content">
                        <p>{faq.answer}</p>
                        <div className="answer-keywords">
                          <span className="keywords-label">Related topics:</span>
                          {faq.keywords.map((keyword, idx) => (
                            <span key={idx} className="keyword-tag">{keyword}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ) : (
          <div className="no-results">
            <div className="no-results-content">
              <div className="no-results-icon">🤔</div>
              <h3>No questions found</h3>
              <p>We couldn't find any FAQs matching your search criteria.</p>
              <div className="no-results-suggestions">
                <p>Try:</p>
                <ul>
                  <li>Using different keywords or phrases</li>
                  <li>Checking your spelling</li>
                  <li>Browsing different categories</li>
                  <li>Removing some filters</li>
                </ul>
              </div>
              <div className="no-results-actions">
                <button onClick={clearFilters} className="reset-btn">
                  🔄 Clear All Filters
                </button>
                <a href="mailto:support@aspiresync.com" className="contact-btn">
                  📧 Ask Our Team
                </a>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Contact Section */}
      <section className="faq-contact">
        <div className="contact-content">
          <h3>Still have questions?</h3>
          <p>Our friendly support team is here to help you succeed.</p>
          <div className="contact-options">
            <a href="mailto:support@aspiresync.com" className="contact-option">
              <span className="contact-icon">📧</span>
              <div className="contact-info">
                <strong>Email Support</strong>
                <span>support@aspiresync.com</span>
              </div>
            </a>
            <a href="tel:+919876543210" className="contact-option">
              <span className="contact-icon">📞</span>
              <div className="contact-info">
                <strong>Phone Support</strong>
              </div>
            </a>
            <div className="contact-option">
              <span className="contact-icon">💬</span>
              <div className="contact-info">
                <strong>Live Chat</strong>
                <span>Available 9 AM - 6 PM</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}