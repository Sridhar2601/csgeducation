# CSG Education Website

A modern, responsive React website for CSG Education - a professional computer training institute offering courses in programming, design, and business applications.

## 🚀 Features

- **Modern React Architecture**: Built with React 18, React Router, and modern hooks
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **SEO Optimized**: Comprehensive meta tags, Open Graph, and structured data
- **Accessibility**: WCAG AA compliant with proper ARIA labels and keyboard navigation  
- **Performance**: Optimized with lazy loading, code splitting, and efficient bundling
- **Interactive**: Smooth animations with Framer Motion
- **Course Management**: Dynamic course catalog with search and filtering
- **Enrollment System**: Modal-based enrollment with form validation
- **Contact System**: Contact forms with validation and success handling

## 🛠️ Tech Stack

- **Frontend**: React 18, JSX
- **Routing**: React Router DOM
- **Styling**: Tailwind CSS with custom design system
- **Animations**: Framer Motion
- **SEO**: React Helmet Async
- **Build Tool**: Vite
- **Icons**: Heroicons (SVG)

## 📦 Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Local Development

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/csg-education.git
   cd csg-education
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser**:
   Navigate to `http://localhost:5173`

### Build for Production

```bash
# Create production build
npm run build

# Preview production build locally
npm run preview
```

## 📁 Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── Header.jsx       # Navigation header
│   ├── Footer.jsx       # Site footer
│   ├── Hero.jsx         # Landing page hero
│   ├── CourseCard.jsx   # Individual course display
│   ├── CoursesGrid.jsx  # Course listing with filters
│   └── EnrollModal.jsx  # Enrollment form modal
├── pages/               # Route components
│   ├── Home.jsx         # Landing page
│   ├── Courses.jsx      # Course catalog
│   ├── CourseDetail.jsx # Individual course details
│   ├── About.jsx        # About institute
│   └── Contact.jsx      # Contact information
├── data/                # Static data
│   └── courses.js       # Course catalog data
├── App.jsx              # Root app component
├── main.jsx            # App entry point
└── index.css           # Global styles and Tailwind imports
```

## 🎨 Design System

### Colors
- **Primary**: Deep Indigo (#4F46E5)
- **Accent**: Teal (#14B8A6)
- **Success**: Green (#10B981)
- **Warning**: Amber (#F59E0B)  
- **Error**: Red (#EF4444)

### Typography
- **Headings**: Inter (400, 500, 600, 700)
- **Body**: Open Sans (300, 400, 500, 600)

### Components
- Cards with `rounded-xl` and subtle shadows
- Buttons with hover states and focus rings
- 8px spacing system for consistent layouts
- Mobile-first responsive breakpoints

## 📚 Course Management

Course data is managed in `src/data/courses.js`. Each course object includes:

```javascript
{
  id: 'unique-course-id',
  title: 'Course Name',
  short: 'Brief description',
  description: 'Detailed description',
  duration: '3 months',
  fees: '₹15,000',
  mode: 'Offline',
  level: 'Beginner',
  category: 'Programming',
  technologies: ['Java', 'Spring'],
  prerequisites: ['Basic programming'],
  syllabus: ['Topic 1', 'Topic 2'],
  instructor: 'Instructor Name',
  image: 'course-image-url'
}
```

## 🔍 SEO Features

- Dynamic page titles and meta descriptions
- Open Graph tags for social media
- Twitter Card support
- JSON-LD structured data for courses
- Semantic HTML structure
- Sitemap ready structure

## ♿ Accessibility Features

- ARIA labels and roles
- Keyboard navigation support
- Focus management for modals
- Color contrast compliance
- Screen reader friendly
- Skip-to-content links

## 📱 Progressive Web App

The site includes PWA features:
- Web App Manifest
- Service Worker ready
- Offline capability structure
- Mobile app-like experience

## 🧪 Testing

```bash
# Run ESLint
npm run lint

# Fix linting issues
npm run lint:fix
```

## 🚀 Deployment

The site is optimized for static hosting services:

- **Netlify**: Drag & drop the `dist` folder
- **Vercel**: Connect repository for automatic deployments  
- **GitHub Pages**: Use `gh-pages` branch deployment
- **Any Static Host**: Upload `dist` folder contents

### Build Commands
- Build Command: `npm run build`
- Publish Directory: `dist`

## 🔧 Customization

### Adding New Courses
1. Add course objects to `src/data/courses.js`
2. Include all required fields
3. Add appropriate course images
4. Update categories if needed

### Styling Changes
1. Modify `tailwind.config.js` for design tokens
2. Update `src/index.css` for custom styles
3. Customize component styles in individual files

### Adding New Pages
1. Create page component in `src/pages/`
2. Add route to `src/App.jsx`
3. Update navigation in `src/components/Header.jsx`

## 📞 Support

For technical support or questions about the codebase:
- Email: dev@csgeducation.com
- Documentation: Check inline code comments
- Issues: Create GitHub issues for bugs

## 📄 License

This project is proprietary and confidential. All rights reserved by CSG Education.

## 🤝 Contributing

This is a private project. For authorized contributors:

1. Fork the repository
2. Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open Pull Request

---

**CSG Education** - Transforming Careers Through Quality Education