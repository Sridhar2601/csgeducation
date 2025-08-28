// import { Helmet } from 'react-helmet-async';
// import { motion } from 'framer-motion';

// const About = () => {
//   const features = [
//     {
//       icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
//       title: "Modern Infrastructure",
//       description: "State-of-the-art computer labs with latest hardware and software"
//     },
//     {
//       icon: "M12 14l9-5-9-5-9 5 9 5z M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z",
//       title: "Expert Faculty",
//       description: "Industry professionals with years of practical experience"
//     },
//     {
//       icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
//       title: "Proven Track Record",
//       description: "12+ years of successful training with 95% job placement rate"
//     },
//     {
//       icon: "M13 10V3L4 14h7v7l9-11h-7z",
//       title: "Hands-on Learning",
//       description: "Project-based curriculum with real-world applications"
//     },
//     {
//       icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
//       title: "Career Support",
//       description: "Job placement assistance and career guidance for all students"
//     },
//     {
//       icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
//       title: "Flexible Timings",
//       description: "Multiple batch options including weekends to fit your schedule"
//     }
//   ];

//   const instructors = [
//     {
//       name: "Dr. Vikram Patel",
//       specialization: "Programming & Software Development",
//       experience: "15+ years",
//       image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300",
//       bio: "Expert in Java, C++, and enterprise application development with extensive industry experience."
//     },
//     {
//       name: "Priya Sharma",
//       specialization: "Business Applications & Accounting",
//       experience: "12+ years",
//       image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300",
//       bio: "Certified Tally professional with expertise in accounting software and business process automation."
//     },
//     {
//       name: "Amit Singh",
//       specialization: "Design & Graphics",
//       experience: "10+ years",
//       image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300",
//       bio: "Creative professional specializing in Adobe Creative Suite, 3D animation, and visual design."
//     },
//     {
//       name: "Neha Gupta",
//       specialization: "Web Development",
//       experience: "8+ years",
//       image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=300",
//       bio: "Full-stack developer with expertise in modern web technologies and responsive design."
//     }
//   ];

//   const milestones = [
//     { year: "2012", event: "CSG Education founded with a vision to provide quality computer training" },
//     { year: "2015", event: "Expanded to 3 specialized labs with advanced equipment" },
//     { year: "2018", event: "Reached 5,000+ trained students milestone" },
//     { year: "2020", event: "Introduced advanced courses in AI and Data Science" },
//     { year: "2022", event: "Achieved 95% placement rate and industry recognition" },
//     { year: "2024", event: "Over 10,000 successful students and growing strong" }
//   ];

//   return (
//     <>
//       <Helmet>
//         <title>About CSG Education - Computer Training Institute | Expert Instructors & Modern Facilities</title>
//         <meta name="description" content="Learn about CSG Education's mission, expert instructors, modern facilities, and 12+ years of successful computer training. Discover why we're the top choice for IT education." />
//         <meta name="keywords" content="CSG Education, about us, computer training institute, expert instructors, modern facilities, IT education, career training" />
        
//         {/* Open Graph */}
//         <meta property="og:title" content="About CSG Education - Leading Computer Training Institute" />
//         <meta property="og:description" content="12+ years of excellence in computer training with expert instructors, modern facilities, and 95% placement rate." />
//         <meta property="og:type" content="website" />
//       </Helmet>

//       <main id="main-content" className="pt-20">
//         {/* Hero Section */}
//         <section className="py-16 bg-gradient-to-r from-primary-600 to-accent-600">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               className="text-center text-white"
//             >
//               <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
//                 About CSG Education
//               </h1>
//               <p className="text-xl opacity-90 max-w-3xl mx-auto">
//                 Empowering careers through quality education and practical training for over a decade
//               </p>
//             </motion.div>
//           </div>
//         </section>

//         {/* Mission Statement */}
//         <section className="py-16">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//               <motion.div
//                 initial={{ opacity: 0, x: -50 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 viewport={{ once: true }}
//                 className="space-y-6"
//               >
//                 <h2 className="text-3xl font-heading font-bold text-gray-900">
//                   Our Mission
//                 </h2>
//                 <p className="text-lg text-gray-700 leading-relaxed">
//                   At CSG Education, we believe in transforming lives through quality education. 
//                   Our mission is to provide practical, industry-relevant computer training that 
//                   empowers students with the skills they need to succeed in today's competitive 
//                   technology landscape.
//                 </p>
//                 <p className="text-lg text-gray-700 leading-relaxed">
//                   We focus on hands-on learning, personalized attention, and career-oriented 
//                   training that bridges the gap between academic knowledge and industry requirements.
//                 </p>
                
//                 <div className="bg-primary-50 rounded-xl p-6">
//                   <h3 className="text-xl font-heading font-semibold text-primary-800 mb-3">
//                     Our Vision
//                   </h3>
//                   <p className="text-primary-700">
//                     To be the leading computer training institute that creates skilled professionals 
//                     ready to excel in the digital economy and contribute to technological advancement.
//                   </p>
//                 </div>
//               </motion.div>

//               <motion.div
//                 initial={{ opacity: 0, x: 50 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 viewport={{ once: true }}
//                 className="relative"
//               >
//                 <div className="aspect-square bg-gradient-to-br from-primary-100 to-accent-100 rounded-2xl flex items-center justify-center relative overflow-hidden">
//                   <img
//                     src="https://images.pexels.com/photos/159751/book-address-book-learning-learn-159751.jpeg?auto=compress&cs=tinysrgb&w=600"
//                     alt="Students learning computer skills"
//                     className="w-full h-full object-cover rounded-2xl"
//                   />
//                   <div className="absolute inset-0 bg-primary-600/20 rounded-2xl"></div>
//                 </div>
//               </motion.div>
//             </div>
//           </div>
//         </section>

//         {/* Features */}
//         <section className="py-16 bg-gray-50">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               className="text-center mb-12"
//             >
//               <h2 className="text-3xl font-heading font-bold text-gray-900 mb-4">
//                 Why Choose CSG Education?
//               </h2>
//               <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//                 We provide everything you need for a successful learning experience
//               </p>
//             </motion.div>

//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//               {features.map((feature, index) => (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, y: 30 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: index * 0.1 }}
//                   className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
//                 >
//                   <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
//                     <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={feature.icon} />
//                     </svg>
//                   </div>
//                   <h3 className="text-xl font-heading font-semibold text-gray-900 mb-2">
//                     {feature.title}
//                   </h3>
//                   <p className="text-gray-600">
//                     {feature.description}
//                   </p>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* Instructors */}
//         <section className="py-16">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               className="text-center mb-12"
//             >
//               <h2 className="text-3xl font-heading font-bold text-gray-900 mb-4">
//                 Meet Our Expert Instructors
//               </h2>
//               <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//                 Learn from industry professionals who bring real-world experience to the classroom
//               </p>
//             </motion.div>

//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//               {instructors.map((instructor, index) => (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, y: 30 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: index * 0.1 }}
//                   className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
//                 >
//                   <img
//                     src={instructor.image}
//                     alt={instructor.name}
//                     className="w-full h-48 object-cover"
//                   />
//                   <div className="p-6">
//                     <h3 className="text-lg font-heading font-semibold text-gray-900 mb-1">
//                       {instructor.name}
//                     </h3>
//                     <p className="text-primary-600 font-medium text-sm mb-2">
//                       {instructor.specialization}
//                     </p>
//                     <p className="text-accent-600 text-sm mb-3">
//                       Experience: {instructor.experience}
//                     </p>
//                     <p className="text-gray-600 text-sm">
//                       {instructor.bio}
//                     </p>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* Timeline */}
//         <section className="py-16 bg-gray-50">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               className="text-center mb-12"
//             >
//               <h2 className="text-3xl font-heading font-bold text-gray-900 mb-4">
//                 Our Journey
//               </h2>
//               <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//                 Over a decade of growth, innovation, and student success
//               </p>
//             </motion.div>

//             <div className="relative">
//               <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-primary-200"></div>
              
//               <div className="space-y-8">
//                 {milestones.map((milestone, index) => (
//                   <motion.div
//                     key={index}
//                     initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
//                     whileInView={{ opacity: 1, x: 0 }}
//                     viewport={{ once: true }}
//                     transition={{ delay: index * 0.1 }}
//                     className={`relative flex items-center ${
//                       index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
//                     }`}
//                   >
//                     <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
//                       <div className={`bg-white rounded-xl shadow-lg p-6 ml-12 md:ml-0 ${
//                         index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
//                       }`}>
//                         <div className="text-2xl font-heading font-bold text-primary-600 mb-2">
//                           {milestone.year}
//                         </div>
//                         <p className="text-gray-700">
//                           {milestone.event}
//                         </p>
//                       </div>
//                     </div>
                    
//                     <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-primary-500 rounded-full border-4 border-white shadow-lg flex items-center justify-center">
//                       <div className="w-2 h-2 bg-white rounded-full"></div>
//                     </div>
//                   </motion.div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Infrastructure */}
//         <section className="py-16">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               className="text-center mb-12"
//             >
//               <h2 className="text-3xl font-heading font-bold text-gray-900 mb-4">
//                 Modern Infrastructure
//               </h2>
//               <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//                 State-of-the-art facilities designed for optimal learning experience
//               </p>
//             </motion.div>

//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//               <motion.div
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 className="bg-white rounded-xl shadow-lg overflow-hidden"
//               >
//                 <img
//                   src="https://images.pexels.com/photos/159751/book-address-book-learning-learn-159751.jpeg?auto=compress&cs=tinysrgb&w=600"
//                   alt="Modern computer lab"
//                   className="w-full h-48 object-cover"
//                 />
//                 <div className="p-6">
//                   <h3 className="text-lg font-heading font-semibold text-gray-900 mb-2">
//                     Advanced Computer Labs
//                   </h3>
//                   <p className="text-gray-600 text-sm">
//                     High-performance computers with latest software and development tools
//                   </p>
//                 </div>
//               </motion.div>

//               <motion.div
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: 0.1 }}
//                 className="bg-white rounded-xl shadow-lg overflow-hidden"
//               >
//                 <img
//                   src="https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=600"
//                   alt="Interactive classrooms"
//                   className="w-full h-48 object-cover"
//                 />
//                 <div className="p-6">
//                   <h3 className="text-lg font-heading font-semibold text-gray-900 mb-2">
//                     Interactive Classrooms
//                   </h3>
//                   <p className="text-gray-600 text-sm">
//                     Smart boards and multimedia facilities for engaging learning sessions
//                   </p>
//                 </div>
//               </motion.div>

//               <motion.div
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: 0.2 }}
//                 className="bg-white rounded-xl shadow-lg overflow-hidden"
//               >
//                 <img
//                   src="https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=600"
//                   alt="Project workspace"
//                   className="w-full h-48 object-cover"
//                 />
//                 <div className="p-6">
//                   <h3 className="text-lg font-heading font-semibold text-gray-900 mb-2">
//                     Project Workspaces
//                   </h3>
//                   <p className="text-gray-600 text-sm">
//                     Dedicated spaces for team projects and practical application
//                   </p>
//                 </div>
//               </motion.div>
//             </div>
//           </div>
//         </section>

//         {/* CTA Section */}
//         <section className="py-16 bg-primary-600">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               className="text-white"
//             >
//               <h2 className="text-3xl font-heading font-bold mb-4">
//                 Join Our Success Story
//               </h2>
//               <p className="text-xl mb-8 opacity-90">
//                 Be part of a community that's committed to your growth and success
//               </p>
//               <div className="flex flex-col sm:flex-row gap-4 justify-center">
//                 <a href="/contact" className="btn-accent text-lg px-8 py-3">
//                   Visit Our Campus
//                 </a>
//                 <a href="/courses" className="btn-secondary bg-white text-primary-600 hover:bg-gray-50 text-lg px-8 py-3">
//                   Browse Courses
//                 </a>
//               </div>
//             </motion.div>
//           </div>
//         </section>
//       </main>
//     </>
//   );
// };

// export default About;


import React from "react";
import { motion } from "framer-motion";
import {
  Users,
  Target,
  Award,
  BookOpen,
  GraduationCap,
  Briefcase,
} from "lucide-react";

const About = () => {
  return (
    <div className="bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold mb-6"
          >
            About CSG Education
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl opacity-90 max-w-3xl mx-auto"
          >
            Empowering careers through quality education and practical training
            for over a decade
          </motion.p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-2 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-gray-900">
                Our Mission
              </h2>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                At CSG Education, we are dedicated to bridging the gap between
                academic knowledge and industry requirements. Our mission is to
                equip students and professionals with practical skills and
                certifications that enhance employability and career growth.
              </p>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                Through a blend of expert faculty, industry partnerships, and
                hands-on learning, we prepare our students to excel in their
                chosen fields.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img
                src="/about-mission.jpg"
                alt="Our Mission"
                className="rounded-2xl shadow-xl w-full object-cover"
              />
              <div className="absolute inset-0 bg-primary-600/10 rounded-2xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-primary-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-gray-900 mb-4">
              Why Choose CSG Education?
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              We provide comprehensive training programs designed to meet the
              evolving needs of industries.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "Expert Faculty",
                description:
                  "Learn from industry professionals with years of real-world experience.",
              },
              {
                icon: Target,
                title: "Industry Relevant",
                description:
                  "Courses designed in collaboration with industry to ensure maximum relevance.",
              },
              {
                icon: Award,
                title: "Certified Programs",
                description:
                  "Gain recognized certifications that validate your skills and knowledge.",
              },
              {
                icon: BookOpen,
                title: "Comprehensive Learning",
                description:
                  "Access a wide range of courses across multiple domains and technologies.",
              },
              {
                icon: GraduationCap,
                title: "Career Support",
                description:
                  "Benefit from placement assistance and career counseling services.",
              },
              {
                icon: Briefcase,
                title: "Practical Training",
                description:
                  "Work on real-world projects to gain hands-on experience.",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow max-w-sm mx-auto"
              >
                <feature.icon className="h-12 w-12 text-primary-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Instructors Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-gray-900 mb-4">
              Meet Our Instructors
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              Learn from industry leaders and experienced professionals who are
              passionate about teaching.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((instructor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow max-w-sm mx-auto"
              >
                <img
                  src={`/instructor-${instructor}.jpg`}
                  alt={`Instructor ${instructor}`}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">
                    Instructor {instructor}
                  </h3>
                  <p className="text-primary-600 mb-2">Subject Expert</p>
                  <p className="text-gray-600 text-sm">
                    Industry professional with extensive teaching experience in
                    their domain.
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-primary-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              A decade of excellence in education and training.
            </p>
          </div>
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-primary-200 hidden md:block"></div>
            <div className="space-y-12">
              {[
                {
                  year: "2010",
                  title: "Foundation",
                  description:
                    "CSG Education was established with a vision to bridge the gap between education and industry requirements.",
                },
                {
                  year: "2015",
                  title: "Expansion",
                  description:
                    "Introduced multiple new programs and formed partnerships with leading industry organizations.",
                },
                {
                  year: "2020",
                  title: "Digital Transformation",
                  description:
                    "Successfully transitioned to hybrid learning models, reaching students globally.",
                },
                {
                  year: "Present",
                  title: "Continuing Excellence",
                  description:
                    "Constantly evolving and adapting to provide the best education and career support.",
                },
              ].map((event, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative flex items-start md:items-center"
                >
                  <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2">
                    <div className="h-8 w-8 rounded-full bg-primary-600 flex items-center justify-center text-white font-bold">
                      {event.year.substring(0, 1)}
                    </div>
                  </div>
                  <div
                    className={`ml-16 md:ml-0 md:w-1/2 ${
                      index % 2 === 0 ? "md:pr-12" : "md:pl-12 md:ml-auto"
                    }`}
                  >
                    <div className="bg-white rounded-xl shadow-lg p-6">
                      <h3 className="text-xl font-semibold mb-2">
                        {event.title} - {event.year}
                      </h3>
                      <p className="text-gray-600">{event.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 text-center">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl font-heading font-bold text-gray-900 mb-6"
          >
            Ready to Start Your Journey?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base sm:text-lg text-gray-600 mb-8 max-w-2xl mx-auto"
          >
            Join CSG Education today and take the first step towards a brighter
            future.
          </motion.p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="btn-accent text-lg px-8 py-3 w-full sm:w-auto"
            >
              Visit Our Campus
            </a>
            <a
              href="/courses"
              className="btn-secondary bg-white text-primary-600 hover:bg-gray-50 text-lg px-8 py-3 w-full sm:w-auto"
            >
              Browse Courses
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
