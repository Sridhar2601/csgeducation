import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const CourseCard = ({ course, index = 0 }) => {
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

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <article className="card h-full flex flex-col">
        {/* Course Image */}
        <div className="relative overflow-hidden">
          <img
            src={course.image}
            alt={`${course.title} course thumbnail`}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
          <div className="absolute top-4 left-4">
            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getLevelBadgeColor(course.level)}`}>
              {course.level}
            </span>
          </div>
          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1">
            <span className="text-xs font-semibold text-gray-700">{course.mode}</span>
          </div>
        </div>

        {/* Course Content */}
        <div className="p-6 flex-1 flex flex-col">
          <div className="flex-1">
            {/* Course Category */}
            <div className="mb-2">
              <span className="text-xs font-medium text-primary-600 bg-primary-50 px-2 py-1 rounded-lg">
                {course.category}
              </span>
            </div>

            {/* Course Title */}
            <h3 className="text-xl font-heading font-semibold text-gray-900 mb-2 line-clamp-2">
              {course.title}
            </h3>

            {/* Course Description */}
            <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-1">
              {course.short}
            </p>

            {/* Course Details */}
            <div className="space-y-2 mb-4">
              <div className="flex items-center text-sm text-gray-500">
                <svg className="w-4 h-4 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Duration: {course.duration}
              </div>
              {course.fees && (
                <div className="flex items-center text-sm text-gray-500">
                  <svg className="w-4 h-4 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                  Fee: {course.fees}
                </div>
              )}
              {course.instructor && (
                <div className="flex items-center text-sm text-gray-500">
                  <svg className="w-4 h-4 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  {course.instructor}
                </div>
              )}
            </div>

            {/* Technologies */}
            {course.technologies && course.technologies.length > 0 && (
              <div className="mb-4">
                <div className="flex flex-wrap gap-1">
                  {course.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800"
                    >
                      {tech}
                    </span>
                  ))}
                  {course.technologies.length > 3 && (
                    <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-600">
                      +{course.technologies.length - 3} more
                    </span>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Action Button */}
          <div className="pt-4 border-t border-gray-100">
            <Link
              to={`/course/${course.id}`}
              className="w-full btn-primary group-hover:bg-primary-600 transition-colors duration-200"
              aria-label={`View details for ${course.title} course`}
            >
              View Details
              <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </article>
    </motion.div>
  );
};

export default CourseCard;