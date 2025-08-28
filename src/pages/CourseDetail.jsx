import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { courses } from '../data/courses';
import EnrollModal from '../components/EnrollModal';

const CourseDetail = () => {
  const { id } = useParams();
  const [isEnrollModalOpen, setIsEnrollModalOpen] = useState(false);
  const [showFullSyllabus, setShowFullSyllabus] = useState(false);
  
  const course = courses.find(c => c.id === id);

  if (!course) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Course Not Found</h1>
          <Link to="/courses" className="btn-primary">
            View All Courses
          </Link>
        </div>
      </div>
    );
  }

  const getLevelBadgeColor = (level) => {
    switch (level) {
      case 'Beginner':
        return 'bg-green-100 text-green-800';
      case 'Intermediate':
        return 'bg-yellow-100 text-yellow-800';
      case 'Advanced':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const faqItems = [
    {
      question: "What are the prerequisites for this course?",
      answer: course.prerequisites ? course.prerequisites.join(', ') : "Basic computer knowledge is recommended."
    },
    {
      question: "What software will be used in this course?",
      answer: course.technologies ? course.technologies.join(', ') : "Industry-standard software will be covered."
    },
    {
      question: "Do you provide course materials?",
      answer: "Yes, we provide comprehensive study materials, practical exercises, and access to necessary software during the course."
    },
    {
      question: "Is there any certification provided?",
      answer: "Yes, you will receive a certificate of completion from CSG Education upon successfully finishing the course."
    },
    {
      question: "What is the class schedule?",
      answer: "We offer flexible batch timings including morning, afternoon, and weekend batches to suit your schedule."
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": course.title,
    "description": course.description,
    "provider": {
      "@type": "Organization",
      "name": "CSG Education",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "123 Education Lane",
        "addressLocality": "Tech City",
        "postalCode": "12345",
        "addressCountry": "IN"
      },
      "telephone": "+91-98765-43210"
    },
    "courseMode": "offline",
    "educationalLevel": course.level,
    "timeRequired": course.duration,
    "offers": {
      "@type": "Offer",
      "price": course.fees?.replace('₹', ''),
      "priceCurrency": "INR"
    },
    "instructor": {
      "@type": "Person",
      "name": course.instructor || "Expert Instructor"
    }
  };

  return (
    <>
      <Helmet>
        <title>{course.title} Course - CSG Education | Professional Training</title>
        <meta name="description" content={`${course.description} Duration: ${course.duration}. Expert instruction in ${course.mode} mode. Enroll at CSG Education today.`} />
        <meta name="keywords" content={`${course.title}, ${course.category}, ${course.technologies?.join(', ') || ''}, computer training, CSG Education`} />
        
        {/* Open Graph */}
        <meta property="og:title" content={`${course.title} Course - CSG Education`} />
        <meta property="og:description" content={course.short} />
        <meta property="og:image" content={course.image} />
        <meta property="og:type" content="website" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <main id="main-content" className="pt-20">
        {/* Course Hero */}
        <section className="py-16 bg-gradient-to-r from-primary-600 to-accent-600 sticky top-0 z-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-white"
              >
                <div className="mb-4">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getLevelBadgeColor(course.level)}`}>
                    {course.level}
                  </span>
                  <span className="ml-3 text-white/90">{course.category}</span>
                </div>
                
                <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                  {course.title}
                </h1>
                
                <p className="text-xl opacity-90 mb-8">
                  {course.short}
                </p>

                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div>
                    <div className="text-white/70 text-sm">Duration</div>
                    <div className="font-semibold text-lg">{course.duration}</div>
                  </div>
                  <div>
                    <div className="text-white/70 text-sm">Mode</div>
                    <div className="font-semibold text-lg">{course.mode}</div>
                  </div>
                  {course.fees && (
                    <div>
                      <div className="text-white/70 text-sm">Course Fee</div>
                      <div className="font-semibold text-lg">{course.fees}</div>
                    </div>
                  )}
                  {course.instructor && (
                    <div>
                      <div className="text-white/70 text-sm">Instructor</div>
                      <div className="font-semibold text-lg">{course.instructor}</div>
                    </div>
                  )}
                </div>

                <button
                  onClick={() => setIsEnrollModalOpen(true)}
                  className="btn-accent text-lg px-8 py-3"
                >
                  Enroll Now
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                className="lg:pl-8"
              >
                <div className="relative">
                  <img
                    src={course.image}
                    alt={`${course.title} course`}
                    className="w-full h-80 object-cover rounded-2xl shadow-2xl"
                  />
                  <div className="absolute inset-0 bg-black/20 rounded-2xl"></div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Course Description */}
              <motion.section
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-heading font-bold text-gray-900 mb-4">
                  Course Overview
                </h2>
                <p className="text-gray-700 leading-relaxed text-lg">
                  {course.description}
                </p>
              </motion.section>

              {/* Technologies */}
              {course.technologies && course.technologies.length > 0 && (
                <motion.section
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-2xl font-heading font-bold text-gray-900 mb-4">
                    Technologies Covered
                  </h2>
                  <div className="flex flex-wrap gap-3">
                    {course.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium bg-primary-100 text-primary-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.section>
              )}

              {/* Course Syllabus */}
              {course.syllabus && course.syllabus.length > 0 && (
                <motion.section
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-2xl font-heading font-bold text-gray-900 mb-6">
                    Course Syllabus
                  </h2>
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                    <ul className="divide-y divide-gray-200">
                      {course.syllabus.slice(0, showFullSyllabus ? undefined : 4).map((item, index) => (
                        <li key={index} className="p-4 hover:bg-gray-50 transition-colors">
                          <div className="flex items-start">
                            <div className="flex-shrink-0 w-8 h-8 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center text-sm font-semibold mr-3">
                              {index + 1}
                            </div>
                            <p className="text-gray-800 font-medium">{item}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                    {course.syllabus.length > 4 && (
                      <div className="p-4 bg-gray-50 border-t border-gray-200">
                        <button
                          onClick={() => setShowFullSyllabus(!showFullSyllabus)}
                          className="text-primary-600 hover:text-primary-700 font-medium text-sm"
                        >
                          {showFullSyllabus ? 'Show Less' : `Show ${course.syllabus.length - 4} More Topics`}
                        </button>
                      </div>
                    )}
                  </div>
                </motion.section>
              )}

              {/* Prerequisites */}
              {course.prerequisites && course.prerequisites.length > 0 && (
                <motion.section
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-2xl font-heading font-bold text-gray-900 mb-4">
                    Prerequisites
                  </h2>
                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg">
                    <ul className="space-y-1">
                      {course.prerequisites.map((prereq, index) => (
                        <li key={index} className="flex items-center text-yellow-800">
                          <svg className="w-4 h-4 mr-2 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {prereq}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.section>
              )}

              {/* FAQ */}
              <motion.section
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-heading font-bold text-gray-900 mb-6">
                  Frequently Asked Questions
                </h2>
                <div className="space-y-4">
                  {faqItems.map((faq, index) => (
                    <details key={index} className="bg-white rounded-lg shadow-md">
                      <summary className="p-4 cursor-pointer font-medium text-gray-900 hover:text-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500">
                        {faq.question}
                      </summary>
                      <div className="px-4 pb-4">
                        <p className="text-gray-700">{faq.answer}</p>
                      </div>
                    </details>
                  ))}
                </div>
              </motion.section>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Enrollment Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg p-6 sticky top-24"
              >
                <h3 className="text-lg font-heading font-semibold text-gray-900 mb-4">
                  Course Information
                </h3>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Duration:</span>
                    <span className="font-semibold">{course.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Level:</span>
                    <span className={`px-2 py-1 rounded text-xs font-medium ${getLevelBadgeColor(course.level)}`}>
                      {course.level}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Mode:</span>
                    <span className="font-semibold">{course.mode}</span>
                  </div>
                  {course.fees && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">Fee:</span>
                      <span className="font-semibold text-lg text-primary-600">{course.fees}</span>
                    </div>
                  )}
                  {course.instructor && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">Instructor:</span>
                      <span className="font-semibold">{course.instructor}</span>
                    </div>
                  )}
                </div>

                <button
                  onClick={() => setIsEnrollModalOpen(true)}
                  className="w-full btn-primary text-lg py-3 mb-4"
                >
                  Enroll Now
                </button>

                <div className="text-center text-sm text-gray-500 space-y-1">
                  <p>Need more information?</p>
                  <div className="space-y-1">
                    <a href="tel:+919876543210" className="block text-primary-600 hover:underline">
                      📞 +91 98765 43210
                    </a>
                    <a href="mailto:info@csgeducation.com" className="block text-primary-600 hover:underline">
                      ✉️ info@csgeducation.com
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Related Courses */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-xl p-6"
              >
                <h3 className="text-lg font-heading font-semibold text-gray-900 mb-4">
                  Related Courses
                </h3>
                <div className="space-y-3">
                  {courses
                    .filter(c => c.id !== course.id && c.category === course.category)
                    .slice(0, 3)
                    .map(relatedCourse => (
                      <Link
                        key={relatedCourse.id}
                        to={`/course/${relatedCourse.id}`}
                        className="block p-3 bg-white rounded-lg hover:shadow-md transition-shadow"
                      >
                        <h4 className="font-medium text-gray-900 text-sm">{relatedCourse.title}</h4>
                        <p className="text-xs text-gray-600 mt-1">{relatedCourse.duration} • {relatedCourse.level}</p>
                      </Link>
                    ))}
                </div>
                <Link to="/courses" className="block mt-4 text-center text-primary-600 hover:underline text-sm">
                  View All Courses
                </Link>
              </motion.div>
            </div>
          </div>
        </div>

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
                Ready to Start Learning?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Join thousands of students who have advanced their careers with our training
              </p>
              <button
                onClick={() => setIsEnrollModalOpen(true)}
                className="btn-accent text-lg px-8 py-3"
              >
                Enroll in {course.title}
              </button>
            </motion.div>
          </div>
        </section>

        {/* Enrollment Modal */}
        <EnrollModal
          isOpen={isEnrollModalOpen}
          onClose={() => setIsEnrollModalOpen(false)}
          courseTitle={course.title}
        />
      </main>
    </>
  );
};

export default CourseDetail;