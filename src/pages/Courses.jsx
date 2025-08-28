import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import CoursesGrid from '../components/CoursesGrid';
import { courseCategories } from '../data/courses';

const Courses = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState('All Courses');
  const [searchTerm, setSearchTerm] = useState('');

  // Initialize from URL params
  useEffect(() => {
    const categoryParam = searchParams.get('category');
    const searchParam = searchParams.get('search');
    
    if (categoryParam && courseCategories.includes(categoryParam)) {
      setSelectedCategory(categoryParam);
    }
    if (searchParam) {
      setSearchTerm(searchParam);
    }
  }, [searchParams]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    const newSearchParams = new URLSearchParams(searchParams);
    if (category === 'All Courses') {
      newSearchParams.delete('category');
    } else {
      newSearchParams.set('category', category);
    }
    setSearchParams(newSearchParams);
  };

  const handleSearchChange = (term) => {
    setSearchTerm(term);
    const newSearchParams = new URLSearchParams(searchParams);
    if (term) {
      newSearchParams.set('search', term);
    } else {
      newSearchParams.delete('search');
    }
    setSearchParams(newSearchParams);
  };

  return (
    <>
      <Helmet>
        <title>All Courses - CSG Education | Computer Training & Design Courses</title>
        <meta name="description" content="Browse all computer training courses at CSG Education. Programming, Design, Business software, Web development and more. Expert instructors, hands-on training, offline mode." />
        <meta name="keywords" content="computer courses, programming training, design courses, Java, Photoshop, 3D Animation, Tally, HTML, CSS, offline training" />
        
        {/* Open Graph */}
        <meta property="og:title" content="All Courses - CSG Education Computer Training" />
        <meta property="og:description" content="Complete catalog of professional computer training courses with expert instructors and hands-on learning." />
        <meta property="og:type" content="website" />
        
        {/* Structured Data for Course Catalog */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Course",
            "name": "CSG Education Computer Training Courses",
            "description": "Comprehensive computer training programs including programming, design, and business applications",
            "provider": {
              "@type": "Organization",
              "name": "CSG Education",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "123 Education Lane",
                "addressLocality": "Tech City",
                "postalCode": "12345",
                "addressCountry": "IN"
              }
            },
            "courseMode": "offline",
            "availableLanguage": "English"
          })}
        </script>
      </Helmet>

      <main id="main-content" className="pt-20">
        {/* Page Header */}
        <section className="bg-gradient-to-r from-primary-600 to-accent-600 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center text-white"
            >
              <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
                Our Courses
              </h1>
              <p className="text-xl opacity-90 max-w-2xl mx-auto">
                Discover professional training programs designed to advance your career in technology and design
              </p>
            </motion.div>
          </div>
        </section>

        {/* Course Categories Navigation */}
        <section className="bg-white shadow-sm border-b border-gray-200 sticky top-16 z-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex space-x-1 overflow-x-auto py-4" aria-label="Course categories">
              {courseCategories.map((category) => (
                <button
                  key={category}
                  onClick={() => handleCategoryChange(category)}
                  className={`whitespace-nowrap px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                    selectedCategory === category
                      ? 'bg-primary-100 text-primary-700 shadow-sm'
                      : 'text-gray-600 hover:text-primary-600 hover:bg-gray-50'
                  }`}
                  aria-current={selectedCategory === category ? 'page' : undefined}
                >
                  {category}
                </button>
              ))}
            </nav>
          </div>
        </section>

        {/* Courses Content */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <CoursesGrid 
              searchTerm={searchTerm} 
              selectedCategory={selectedCategory}
            />
          </div>
        </section>

        {/* Training Information */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg p-8"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-2xl font-heading font-bold text-gray-900 mb-4">
                    Training Information
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">Training Types</h3>
                      <ul className="space-y-1 text-gray-600">
                        <li className="flex items-center">
                          <svg className="w-4 h-4 text-primary-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          Computer Training
                        </li>
                        <li className="flex items-center">
                          <svg className="w-4 h-4 text-primary-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          Professional Training Institute
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">Mode of Instruction</h3>
                      <div className="flex items-center text-gray-600">
                        <svg className="w-4 h-4 text-accent-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        Offline (In-person training)
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Why Offline Training?</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• Direct interaction with expert instructors</li>
                    <li>• Hands-on practice with professional equipment</li>
                    <li>• Immediate doubt resolution and guidance</li>
                    <li>• Collaborative learning environment</li>
                    <li>• Access to high-spec computers and software</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-white"
            >
              <h2 className="text-3xl font-heading font-bold mb-4">
                Can't Find the Course You're Looking For?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Contact us to discuss custom training programs tailored to your specific needs
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:+916384482138" className="btn-accent text-lg px-8 py-3">
                  Call Now: +91 63844 82138
                </a>
                <a href="/contact" className="btn-secondary bg-white text-primary-600 hover:bg-gray-50 text-lg px-8 py-3">
                  Contact Us
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Courses;