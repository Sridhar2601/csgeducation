import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CourseCard from './CourseCard';
import { courses, courseCategories, skillLevels, durations } from '../data/courses';

const CoursesGrid = ({ searchTerm = '', selectedCategory = 'All Courses' }) => {
  const [localSearchTerm, setLocalSearchTerm] = useState(searchTerm);
  const [selectedLevel, setSelectedLevel] = useState('All Levels');
  const [selectedDuration, setSelectedDuration] = useState('All Durations');
  const [sortBy, setSortBy] = useState('title');

  // Filter and search courses
  const filteredCourses = useMemo(() => {
    let filtered = courses.filter((course) => {
      const matchesSearch = 
        course.title.toLowerCase().includes(localSearchTerm.toLowerCase()) ||
        course.short.toLowerCase().includes(localSearchTerm.toLowerCase()) ||
        course.category.toLowerCase().includes(localSearchTerm.toLowerCase()) ||
        (course.technologies && course.technologies.some(tech => 
          tech.toLowerCase().includes(localSearchTerm.toLowerCase())
        ));

      const matchesCategory = selectedCategory === 'All Courses' || course.category === selectedCategory;
      const matchesLevel = selectedLevel === 'All Levels' || course.level === selectedLevel;
      const matchesDuration = selectedDuration === 'All Durations' || course.duration === selectedDuration;

      return matchesSearch && matchesCategory && matchesLevel && matchesDuration;
    });

    // Sort courses
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'title':
          return a.title.localeCompare(b.title);
        case 'duration':
          return a.duration.localeCompare(b.duration);
        case 'level':
          return a.level.localeCompare(b.level);
        default:
          return 0;
      }
    });

    return filtered;
  }, [localSearchTerm, selectedCategory, selectedLevel, selectedDuration, sortBy]);

  const clearFilters = () => {
    setLocalSearchTerm('');
    setSelectedLevel('All Levels');
    setSelectedDuration('All Durations');
    setSortBy('title');
  };

  return (
    <div className="space-y-6">
      {/* Search and Filters */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        {/* Search Bar */}
        <div className="mb-6">
          <div className="relative">
            <input
              type="text"
              placeholder="Search courses, technologies, or categories..."
              value={localSearchTerm}
              onChange={(e) => setLocalSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-gray-900 placeholder-gray-500"
              aria-label="Search courses"
            />
            <svg className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

        {/* Filter Controls */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Skill Level Filter */}
          <div>
            <label htmlFor="level-filter" className="block text-sm font-medium text-gray-700 mb-2">
              Skill Level
            </label>
            <select
              id="level-filter"
              value={selectedLevel}
              onChange={(e) => setSelectedLevel(e.target.value)}
              className="w-full input-field"
            >
              {skillLevels.map((level) => (
                <option key={level} value={level}>
                  {level}
                </option>
              ))}
            </select>
          </div>

          {/* Duration Filter */}
          <div>
            <label htmlFor="duration-filter" className="block text-sm font-medium text-gray-700 mb-2">
              Duration
            </label>
            <select
              id="duration-filter"
              value={selectedDuration}
              onChange={(e) => setSelectedDuration(e.target.value)}
              className="w-full input-field"
            >
              {durations.map((duration) => (
                <option key={duration} value={duration}>
                  {duration}
                </option>
              ))}
            </select>
          </div>

          {/* Sort By */}
          <div>
            <label htmlFor="sort-filter" className="block text-sm font-medium text-gray-700 mb-2">
              Sort By
            </label>
            <select
              id="sort-filter"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full input-field"
            >
              <option value="title">Course Name</option>
              <option value="duration">Duration</option>
              <option value="level">Skill Level</option>
            </select>
          </div>

          {/* Clear Filters */}
          <div className="flex items-end">
            <button
              onClick={clearFilters}
              className="w-full btn-secondary"
            >
              Clear Filters
            </button>
          </div>
        </div>

        {/* Active Filters Display */}
        {(localSearchTerm || selectedLevel !== 'All Levels' || selectedDuration !== 'All Durations') && (
          <div className="mt-4 pt-4 border-t border-gray-200">
            <div className="flex flex-wrap gap-2">
              <span className="text-sm text-gray-600">Active filters:</span>
              {localSearchTerm && (
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 text-primary-800">
                  Search: "{localSearchTerm}"
                </span>
              )}
              {selectedLevel !== 'All Levels' && (
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-accent-100 text-accent-800">
                  Level: {selectedLevel}
                </span>
              )}
              {selectedDuration !== 'All Durations' && (
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                  Duration: {selectedDuration}
                </span>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Results Summary */}
      <div className="flex items-center justify-between">
        <p className="text-gray-600">
          {filteredCourses.length === 0 ? 'No courses found' : 
           filteredCourses.length === 1 ? '1 course found' :
           `${filteredCourses.length} courses found`}
        </p>
      </div>

      {/* Courses Grid */}
      <AnimatePresence mode="wait">
        {filteredCourses.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-center py-12"
          >
            <svg className="mx-auto h-12 w-12 text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No courses found</h3>
            <p className="text-gray-500 mb-4">
              Try adjusting your search terms or filters to find the courses you're looking for.
            </p>
            <button onClick={clearFilters} className="btn-primary">
              Clear All Filters
            </button>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredCourses.map((course, index) => (
              <CourseCard key={course.id} course={course} index={index} />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CoursesGrid;