import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import EnrollModal from '../components/EnrollModal';

const Contact = () => {
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [isEnrollModalOpen, setIsEnrollModalOpen] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setContactForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setSubmitStatus('success');
      setContactForm({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      
      setTimeout(() => setSubmitStatus(null), 5000);
    } catch (error) {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus(null), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z",
      title: "Visit Us",
      details: ["No 1432, Near Krishna Ammal College", "Avinashi Road, Peelamedu", "Coimbatore-641004"]
    },
    {
      icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z",
      title: "Call Us",
      details: ["+91 63844 92536", "+91 63844 92536", "Mon-Sat: 9AM-7PM"]
    },
    {
      icon: "M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
      title: "Email Us",
      details: ["info@csgeducation.com", "admissions@csgeducation.com", "support@csgeducation.com"]
    }
  ];

  const faqs = [
    {
      question: "What are the admission requirements?",
      answer: "Most courses only require basic computer knowledge. Specific prerequisites are listed on each course page."
    },
    {
      question: "Do you provide certificates?",
      answer: "Yes, we provide industry-recognized certificates upon successful completion of each course."
    },
    {
      question: "What are the payment options?",
      answer: "We accept cash, bank transfer, UPI payments, and offer installment plans for longer courses."
    },
    {
      question: "Can I switch batches if needed?",
      answer: "Yes, you can switch to another batch of the same course based on availability and valid reasons."
    },
    {
      question: "Do you provide job placement assistance?",
      answer: "Yes, we offer career guidance, resume preparation, and job placement assistance to all our students."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Contact CSG Education - Get in Touch | Address, Phone, Email</title>
        <meta name="description" content="Contact CSG Education for course inquiries, admissions, and support. Visit our campus, call +91 98765 43210, or email info@csgeducation.com. Located in Tech City." />
        <meta name="keywords" content="contact CSG Education, address, phone number, email, admissions, course inquiry, Tech City computer training" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Contact CSG Education - Computer Training Institute" />
        <meta property="og:description" content="Get in touch with CSG Education for course information, admissions, and support. Multiple contact options available." />
        <meta property="og:type" content="website" />
      </Helmet>

      <main id="main-content" className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-r from-primary-600 to-accent-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center text-white"
            >
              <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                Get in Touch
              </h1>
              <p className="text-xl opacity-90 max-w-2xl mx-auto">
                Ready to start your learning journey? Contact us for course information, admissions, or any questions you may have.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Information Cards */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow"
                >
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={info.icon} />
                    </svg>
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-gray-900 mb-4">
                    {info.title}
                  </h3>
                  <div className="space-y-1 text-gray-600">
                    {info.details.map((detail, detailIndex) => (
                      <p key={detailIndex}>{detail}</p>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form and Map */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="bg-white rounded-xl shadow-lg p-8">
                  <h2 className="text-2xl font-heading font-bold text-gray-900 mb-6">
                    Send us a Message
                  </h2>

                  {submitStatus === 'success' && (
                    <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                      <p className="text-green-800 font-medium">
                        ✓ Message sent successfully! We'll get back to you within 24 hours.
                      </p>
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                      <p className="text-red-800">
                        ✗ Sorry, there was an error sending your message. Please try again or contact us directly.
                      </p>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="contact-name" className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="contact-name"
                          name="name"
                          required
                          value={contactForm.name}
                          onChange={handleInputChange}
                          className="input-field"
                          placeholder="Enter your name"
                        />
                      </div>
                      <div>
                        <label htmlFor="contact-email" className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="contact-email"
                          name="email"
                          required
                          value={contactForm.email}
                          onChange={handleInputChange}
                          className="input-field"
                          placeholder="Enter your email"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="contact-phone" className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="contact-phone"
                          name="phone"
                          value={contactForm.phone}
                          onChange={handleInputChange}
                          className="input-field"
                          placeholder="Enter your phone"
                        />
                      </div>
                      <div>
                        <label htmlFor="contact-subject" className="block text-sm font-medium text-gray-700 mb-2">
                          Subject
                        </label>
                        <select
                          id="contact-subject"
                          name="subject"
                          value={contactForm.subject}
                          onChange={handleInputChange}
                          className="input-field"
                        >
                          <option value="">Select a subject</option>
                          <option value="course-inquiry">Course Inquiry</option>
                          <option value="admission">Admission Information</option>
                          <option value="fee-structure">Fee Structure</option>
                          <option value="schedule">Batch Schedule</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="contact-message" className="block text-sm font-medium text-gray-700 mb-2">
                        Message *
                      </label>
                      <textarea
                        id="contact-message"
                        name="message"
                        rows={4}
                        required
                        value={contactForm.message}
                        onChange={handleInputChange}
                        className="input-field resize-none"
                        placeholder="Tell us how we can help you..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center">
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        'Send Message'
                      )}
                    </button>
                  </form>
                </div>
              </motion.div>

              {/* Map and Quick Enrollment */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                {/* Map Placeholder */}
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="h-64 bg-gradient-to-br from-primary-100 to-accent-100 flex items-center justify-center">
                    <div className="text-center">
                      <svg className="w-12 h-12 text-primary-500 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <p className="text-gray-600 font-medium">CSG Education Campus</p>
                      <p className="text-sm text-gray-500">Peelamedu, Coimbatore-641004</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-heading font-semibold text-gray-900 mb-2">Visit Our Campus</h3>
                    <p className="text-gray-600 text-sm mb-4">
                      Come see our modern facilities and speak with our admission counselors in person.
                    </p>
                    <p className="text-sm text-gray-500">
                      <strong>Office Hours:</strong> Monday - Saturday, 9:00 AM - 7:00 PM
                    </p>
                  </div>
                </div>

                {/* Quick Enrollment */}
                <div className="bg-primary-600 rounded-xl p-8 text-white">
                  <h3 className="text-xl font-heading font-semibold mb-4">
                    Ready to Enroll?
                  </h3>
                  <p className="mb-6 opacity-90">
                    Skip the wait and start your enrollment process online. Our team will contact you within 24 hours.
                  </p>
                  <button
                    onClick={() => setIsEnrollModalOpen(true)}
                    className="w-full btn-accent"
                  >
                    Start Enrollment Process
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-heading font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-gray-600">
                Quick answers to common questions about our courses and services
              </p>
            </motion.div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.details
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-md group"
                >
                  <summary className="p-6 cursor-pointer font-medium text-gray-900 hover:text-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500 rounded-lg">
                    <span className="flex items-center justify-between">
                      {faq.question}
                      <svg className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </summary>
                  <div className="px-6 pb-6">
                    <p className="text-gray-700">{faq.answer}</p>
                  </div>
                </motion.details>
              ))}
            </div>
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
                Still Have Questions?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Our friendly team is here to help you choose the right course for your career goals
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:+916384482138" className="btn-accent text-lg px-8 py-3">
                  Call Now: +91 63844 82138
                </a>
                <a href="mailto:info@csgeducation.com" className="btn-secondary bg-white text-primary-600 hover:bg-gray-50 text-lg px-8 py-3">
                  Send Email
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Enrollment Modal */}
        <EnrollModal
          isOpen={isEnrollModalOpen}
          onClose={() => setIsEnrollModalOpen(false)}
          courseTitle=""
        />
      </main>
    </>
  );
};

export default Contact;