// import { useState, useEffect } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { motion, AnimatePresence } from 'framer-motion';
// import './Header.css'
// const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);
//   const location = useLocation();

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 20);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   useEffect(() => {
//     setIsMenuOpen(false);
//   }, [location]);

//   const navigation = [
//     { name: 'Home', href: '/' },
//     { name: 'Courses', href: '/courses' },
//     { name: 'About', href: '/about' },
//     { name: 'Contact', href: '/contact' }
//   ];

//   return (
//     <header 
//       className={`fixed w-full top-0 z-50 transition-all duration-300 ${
//         isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
//       }`}
//     >
//       <a href="#main-content" className="skip-link">
//         Skip to main content
//       </a>
      
//       <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
//         <div className="flex justify-between items-center h-16">
//           {/* Logo */}
//           <Link to="/" className="flex items-center space-x-2">
//             <div className="w-10 h-10 bg-primary-500 rounded-lg flex items-center justify-center">
//               <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
//                 <path d="M12 2L2 7v10c0 5.55 3.84 9.739 9 11 5.16-1.261 9-5.45 9-11V7l-10-5z"/>
//                 <path d="M9 12l2 2 4-4" stroke="white" strokeWidth="2" fill="none"/>
//               </svg>
//             </div>
//             <div className="font-heading font-bold text-xl text-gray-900">
//               CSG Education
//             </div>
//           </Link>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-center space-x-8">
//             {navigation.map((item) => (
//               <Link
//                 key={item.name}
//                 to={item.href}
//                 className={`font-medium transition-colors duration-200 ${
//                   location.pathname === item.href
//                     ? 'text-primary-500 border-b-2 border-primary-500'
//                     : 'text-gray-700 hover:text-primary-500'
//                 }`}
//                 aria-current={location.pathname === item.href ? 'page' : undefined}
//               >
//                 {item.name}
//               </Link>
//             ))}
//             <Link to="/contact" className="btn-primary">
//               Enroll Now
//             </Link>
//           </div>

//           {/* Mobile menu button */}
//           <button
//             type="button"
//             className="md:hidden p-2 rounded-md text-gray-700 hover:text-primary-500 focus:outline-none"
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//             aria-expanded={isMenuOpen}
//             aria-label="Toggle navigation menu"
//           >
//             <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
//               />
//             </svg>
//           </button>
//         </div>

//         {/* Mobile Navigation */}
//         <AnimatePresence>
//           {isMenuOpen && (
//             <motion.div
//               initial={{ opacity: 0, height: 0 }}
//               animate={{ opacity: 1, height: 'auto' }}
//               exit={{ opacity: 0, height: 0 }}
//               className="md:hidden border-t border-gray-200"
//             >
//               <div className="px-2 pt-2 pb-3 space-y-1 bg-white">
//                 {navigation.map((item) => (
//                   <Link
//                     key={item.name}
//                     to={item.href}
//                     className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
//                       location.pathname === item.href
//                         ? 'text-primary-500 bg-primary-50'
//                         : 'text-gray-700 hover:text-primary-500 hover:bg-gray-50'
//                     }`}
//                     aria-current={location.pathname === item.href ? 'page' : undefined}
//                   >
//                     {item.name}
//                   </Link>
//                 ))}
//                 <div className="pt-2">
//                   <Link to="/contact" className="btn-primary w-full justify-center">
//                     Enroll Now
//                   </Link>
//                 </div>
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </nav>
//     </header>
//   );
// };

// export default Header;


import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const courses = [
    {
      title: "Programming",
      topics: ["C", "C++", "Java","SQL","VB script","Python"],
    },
    {
      title: "Design & Animation",
      topics: ["3D Animation", "CorelDRAW","Flash","DTP","Graphic Designing","Multimedia"],
    },
    {
      title: "Software Development",
      topics: ["ASP.NET","J2EE","J2ME","Foxpro Programming","DOT.NET"],
    },
    {
      title: "Web Technologies",
      topics: ["E Commerce","Web Design","HTML","XML","Internet"],
    },
    {
      title: "Computer Fundamentals",
      topics: ["Basic Computers", "Windows","Windows NT", "MS Excel","Adobe","Adobe Photoshop 5","DCA","Linux"],
    },
    {
      title: "Non-IT Courses",
      topics: ["Tally", "Accounting","CAD","Mechanical Cad"],
    },
  ];

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary-500 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L2 7v10c0 5.55 3.84 9.739 9 11 5.16-1.261 9-5.45 9-11V7l-10-5z"/>
                <path d="M9 12l2 2 4-4" stroke="white" strokeWidth="2" fill="none"/>
              </svg>
            </div>
            <div className="font-heading font-bold text-xl text-gray-900">
              CSG Education
            </div>
          </Link>

          {/* Horizontal Menu */}
          <ul className="flex space-x-6 items-center">
            <li>
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>

            {/* Courses Dropdown */}
            <li
              className="relative"
              onMouseEnter={() => setOpenDropdown("courses")}
              onMouseLeave={() => {
                setOpenDropdown(null);
                setOpenSubmenu(null);
              }}
            >
              <span className="nav-link cursor-pointer">Courses ▾</span>

              {openDropdown === "courses" && (
                <ul className="absolute left-0 mt-2 w-56 bg-white shadow-lg rounded-md py-2 z-50">
                  {courses.map((cat, idx) => (
                    <li
                      key={idx}
                      className="relative group"
                      onMouseEnter={() => setOpenSubmenu(cat.title)}
                      onMouseLeave={() => setOpenSubmenu(null)}
                    >
                      {/* Title is clickable */}
                      <Link
                        to={`#`}
                        className="flex justify-between items-center px-4 py-2 text-gray-700 hover:bg-gray-100"
                      >
                        {cat.title} <span>▸</span>
                      </Link>

                      {/* Submenu for topics */}
                      {openSubmenu === cat.title && (
                        <ul className="absolute left-full top-0 mt-0 ml-1 w-56 bg-white shadow-lg rounded-md py-2 z-50">
                          {cat.topics.map((topic, i) => (
                            <li key={i}>
                              <Link
                                to={`/course/csg-${topic.toLowerCase().replace(/\s+/g, "-")}`}
                                className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
                              >
                                {topic}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </li>

            <li>
              <Link to="/about" className="nav-link">
                About
              </Link>
            </li>
            <li>
              <Link to="/success" className="nav-link">
                Success Story
              </Link>
            </li>
            <li>
              <Link to="/contact" className="nav-link">
                Contact
              </Link>
            </li>

            <Link to="/contact" className="btn-primary">
              Enroll Now
            </Link>
          </ul>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-primary-500 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-gray-200"
            >
              <div className="px-2 pt-2 pb-3 space-y-1 bg-white">
                <Link to="/" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary-500 hover:bg-gray-50">
                  Home
                </Link>
                <Link to="/about" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary-500 hover:bg-gray-50">
                  About
                </Link>
                <Link to="/contact" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary-500 hover:bg-gray-50">
                  Contact
                </Link>
                <div className="pt-2">
                  <Link to="/contact" className="btn-primary w-full justify-center">
                    Enroll Now
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Header;