import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const ProjectDetail = () => {
  const { projectId } = useParams();
  const [selectedImage, setSelectedImage] = useState(null);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeSection, setActiveSection] = useState('overview');

  // Project data directly in component
  const projects = {
    "externit": {
      id: "externit",
      title: "ExternIT",
      category: "Full-Stack Development",
      description: "A task outsourcing web platform connecting university students with companies for freelance work. Led the project from concept to implementation, including market research, UI/UX design, full-stack development, and team management.",
      longDescription: "ExternIT is a comprehensive web platform designed to bridge the gap between companies seeking cost-effective task outsourcing and university students looking for practical experience. The platform enables companies to post tasks and students to submit their work, with a fair evaluation system that rewards excellence while providing certificates to all qualifying participants.",
      image: "/assets/externit/project-new.png",
      tags: ["PHP", "JavaScript", "CSS", "Bootstrap", "phpMyAdmin", "Full-Stack"],
      link: "https://docs.google.com/document/d/1rw2l7Ue4Aonv62AXJ_b8DU3sSQ0IzJwK1fuJf3JPhjs/edit?usp=sharing",
      linkText: "View Documentation",
      github: null,
      technologies: [
        { name: "PHP", purpose: "Backend development and server-side scripting" },
        { name: "JavaScript", purpose: "Frontend interactivity and dynamic content" },
        { name: "CSS & Bootstrap", purpose: "Responsive UI design and styling" },
        { name: "MySQL", purpose: "Database management and data storage" },
        { name: "phpMyAdmin", purpose: "Database administration and management" },
        { name: "XAMPP", purpose: "Local development environment" }
      ],
      challenges: [
        "Balancing student workload with task availability",
        "Ensuring quality work from varying skill levels",
        "Building trust between companies and students",
        "Creating fair evaluation and payment systems",
        "Managing legal constraints for student labor",
        "Implementing secure data protection"
      ],
      solutions: [
        "Conducted comprehensive user research and interviews",
        "Developed multi-tier evaluation with feedback systems",
        "Implemented SSL encryption and privacy compliance",
        "Designed intuitive UI with progress tracking",
        "Established clear terms and IP guidelines",
        "Built notification system for transparency"
      ],
      results: [
        "Connected companies with affordable student talent",
        "Provided practical experience and industry exposure",
        "Created scalable platform for expansion",
        "Developed comprehensive database architecture",
        "Implemented secure authentication system",
        "Achieved positive stakeholder feedback"
      ],
      screenshots: [
        { url: "/assets/externit/Homepage.png?v=2", alt: "ExternIT Homepage", caption: "Platform homepage showcasing available tasks and user navigation" },
        { url: "/assets/externit/Student dashboard.png?v=2", alt: "Student Dashboard", caption: "Student interface for viewing available tasks and tracking progress" },
        { url: "/assets/externit/Company dashboard.png?v=2", alt: "Company Dashboard", caption: "Company dashboard for posting and managing tasks" },
        { url: "/assets/externit/Avivable tsks.png?v=2", alt: "Available Tasks", caption: "Task listing page showing all available opportunities for students" },
        { url: "/assets/externit/company all submitons.png?v=2", alt: "All Submissions View", caption: "Overview of all student submissions for a specific task" },
        { url: "/assets/externit/Admin dashboard.png?v=2", alt: "Admin Dashboard", caption: "Administrative panel for platform management and oversight" }
      ],
      presentationDay: [
        { url: "/assets/externit/our team.jpg", alt: "Our Team", caption: "The ExternIT development team during project presentation" },
        { url: "/assets/externit/Presentaion day.gif", alt: "Presentation Day", caption: "Live demonstration of the ExternIT platform during presentation" },
        { url: "/assets/externit/TA Bassem khaled.jpg", alt: "TA Bassem Khaled", caption: "With our Teaching Assistant Bassem Khaled during project evaluation" }
      ]
    },
    "casakt": {
      id: "casakt",
      title: "Casa.kt Order Management System",
      category: "Full-Stack Development",
      description: "A comprehensive desktop application designed for furniture and kitchen manufacturing businesses, featuring bilingual support (English/Arabic) and component-based product configuration with professional PDF report generation.",
      longDescription: "Casa.kt is a comprehensive desktop application designed for furniture and kitchen manufacturing businesses. The system features bilingual support (English/Arabic) with RTL text rendering, component-based product management with detailed dimension tracking, and professional PDF report generation with Arabic font support. Built using Electron, React, and Node.js, it provides a complete order management solution with client information management, product catalog with 6 component types, and automated report generation.",
      image: "/assets/casa kt/create order.png",
      tags: ["Electron", "React", "Node.js", "MongoDB", "Bilingual Support", "PDF Generation", "Desktop App"],
      link: null,
      linkText: null,
      github: null,
      technologies: [
        { name: "React 18", purpose: "Modern functional components with hooks for frontend development" },
        { name: "Bootstrap 5", purpose: "Responsive CSS framework for modern UI design" },
        { name: "Electron", purpose: "Cross-platform desktop application framework" },
        { name: "Node.js", purpose: "JavaScript runtime environment for backend development" },
        { name: "Express.js", purpose: "Web application framework for RESTful API" },
        { name: "MongoDB", purpose: "NoSQL database with Mongoose ODM for data storage" },
        { name: "JWT", purpose: "JSON Web Token authentication for secure access" },
        { name: "jsPDF + html2canvas", purpose: "PDF generation with Arabic font support" },
        { name: "Multer", purpose: "File upload middleware for image management" },
        { name: "React Router", purpose: "Client-side routing for navigation" }
      ],
      challenges: [
        "Implementing Arabic text rendering with RTL support in PDFs",
        "Designing flexible component-based product specification system",
        "Creating seamless Electron app with automatic server startup",
        "Implementing secure image upload and storage system",
        "Developing complete translation system with language switching",
        "Building client-side PDF generation with Arabic support",
        "Managing complex data structures for component-based products"
      ],
      solutions: [
        "Implemented proper RTL support and Arabic font rendering in PDFs",
        "Designed flexible product specification system with 6 component types",
        "Created seamless Electron app with automatic server startup",
        "Implemented secure file upload with validation and storage",
        "Developed complete translation system with language switching",
        "Built client-side PDF generation with Arabic support using jsPDF",
        "Used MongoDB with Mongoose for efficient data management"
      ],
      results: [
        "Streamlined order processing for furniture manufacturing businesses",
        "Reduced manual work through automated PDF generation",
        "Improved accuracy with component-based product specifications",
        "Enhanced customer service with professional bilingual reports",
        "Provided offline capability for businesses with limited internet access",
        "Created scalable database architecture for future enhancements",
        "Implemented secure authentication and file management system"
      ],
      screenshots: [
        { url: "/assets/casa kt/homepage.png", alt: "Casa.kt Homepage", caption: "Main dashboard showing the application overview and navigation" },
        { url: "/assets/casa kt/all units.png", alt: "Product Management Interface", caption: "Component-based product creation and editing with dimension tracking for all units" },
        { url: "/assets/casa kt/create unit form.png", alt: "Create Unit Form", caption: "Form interface for creating new product units with detailed specifications" },
        { url: "/assets/casa kt/create order.png", alt: "Order Creation Interface", caption: "Split-screen interface for client information and product selection" },
        { url: "/assets/casa kt/all orders.png", alt: "Order Management Dashboard", caption: "Complete order history and editing capabilities with search functionality" },
        { url: "/assets/casa kt/PDF.png", alt: "PDF Report Generation", caption: "Professional bilingual reports with Arabic support and company branding" }
      ],
      presentationDay: []
    },
    "demoblaze": {
      id: "demoblaze",
       title: "Sprints Summer Camp",
      category: "UI/UX Design",
       description: "A comprehensive UI/UX redesign project completed during the Sprints x Microsoft Summer UI/UX Camp. Enhanced usability, visual appeal, and user experience through usability testing, wireframing, and interactive prototyping.",
       longDescription: "As part of the Sprints x Microsoft Summer UI/UX Camp, I worked on redesigning the DemoBlaze tech e-commerce website. The goal was to improve the overall user experience by identifying key usability issues and proposing a modern, user-centered redesign with interactive flows and a complete UI system.",
      image: "/assets/Sprints sumer/project img.png",
      tags: ["Figma", "UI/UX Design", "E-Commerce", "Prototyping", "Sprints Camp"],
      technologies: [
        { name: "Figma", purpose: "UI/UX design and prototyping" },
        { name: "Jakob Nielsen's Heuristics", purpose: "Usability evaluation framework" },
        { name: "Usability Testing", purpose: "User research and validation" },
        { name: "Wireframing", purpose: "Creating initial layout structures" },
        { name: "Interactive Prototyping", purpose: "Design validation and user testing" }
      ],
      challenges: [
        "Lack of filtering and search functionality",
        "Outdated UI design with poor visual hierarchy",
        "Poor product information visibility",
        "Inconsistent design elements and navigation"
      ],
      solutions: [
        "Conducted usability testing with Jakob Nielsen's heuristics",
        "Created comprehensive wireframes for all key pages",
        "Developed interactive prototypes for user validation",
        "Implemented improved visual hierarchy and navigation"
      ],
      results: [
        "Improved navigation and mobile usability",
        "Enhanced visual consistency and brand appeal",
        "Smoother shopping experience with better product discovery",
        "Increased user satisfaction through better UX design"
      ],
      uxEvaluation: {
        text: "This is the first step in the UX design process. I used Jakob Nielsen's Heuristics to identify UI/UX problems and usability issues for the DemoBlaze e-commerce website. This comprehensive evaluation helped identify key areas for improvement.",
        link: "https://docs.google.com/document/d/1vosenaslkN4MAIMgiop_rUfNBqGMZJJ-rq29gyNm_eY/edit?usp=sharing",
        linkText: "View UX Evaluation Report"
      },
      wireframes: [
        { url: "/assets/Sprints sumer/wireframes/homepage.png", alt: "Wireframe 1: Homepage Layout", caption: "Initial wireframe showing the homepage structure with improved navigation and product organization" },
        { url: "/assets/Sprints sumer/wireframes/product listing.png", alt: "Wireframe 2: Product Listing", caption: "Wireframe of the product listing page with enhanced product information visibility and filtering options" },
        { url: "/assets/Sprints sumer/wireframes/product details page.png", alt: "Wireframe 3: Product Details", caption: "Wireframe of the product details page with improved product information and user flow" },
        { url: "/assets/Sprints sumer/wireframes/login.png", alt: "Wireframe 4: User Authentication", caption: "Wireframe of the login/signup process with streamlined user authentication" }
      ],
      beforeAfter: [
        { url: "/assets/Sprints sumer/before & after/before.png", alt: "Before - Original DemoBlaze", caption: "Original DemoBlaze website with cluttered interface, poor navigation, and outdated design elements" },
        { url: "/assets/Sprints sumer/before & after/after.png", alt: "After - Redesigned DemoBlaze", caption: "Redesigned DemoBlaze with modern UI, improved navigation, and better user experience" }
      ],
      screenshots: [],
      finalUI: [
        { url: "/assets/Sprints sumer/final ui/homepage.png", alt: "Final UI: Homepage", caption: "Final homepage design with clean layout, prominent search, and improved product showcase" },
        { url: "/assets/Sprints sumer/final ui/product page.png", alt: "Final UI: Product Page", caption: "Final product page with enhanced product information, filtering options, and clear call-to-actions" },
        { url: "/assets/Sprints sumer/final ui/cart.png", alt: "Final UI: Shopping Cart", caption: "Final shopping cart design with streamlined checkout process and clear pricing information" },
        { url: "/assets/Sprints sumer/final ui/checkout.png", alt: "Final UI: Checkout", caption: "Final checkout page with streamlined payment process and clear order summary" },
        { url: "/assets/Sprints sumer/final ui/login.png", alt: "Final UI: Login", caption: "Final login page with clean authentication interface" },
        { url: "/assets/Sprints sumer/final ui/signup.png", alt: "Final UI: Signup", caption: "Final signup page with user-friendly registration process" }
      ],
      prototype: [
        { url: "/assets/Sprints sumer/final ui/prototype.gif", alt: "Interactive Prototype Demo", caption: "Interactive prototype walkthrough showing key user flows and micro-interactions" },
        { url: "https://www.figma.com/proto/wy0AgvGAbyRqwCATL0vUtF/Demoblaze?page-id=6%3A652&node-id=6-870&p=f&viewport=-86%2C135%2C0.11&t=ld65DWeVebogiI7G-1&scaling=scale-down-width&content-scaling=fixed&starting-point-node-id=6%3A870", alt: "Figma Prototype Link", caption: "Click to view the interactive Figma prototype with all user flows and interactions" }
      ],
      presentationDay: []
    },
    "amazon-eg": {
      id: "amazon-eg",
      title: "Amazon.eg Homepage Redesign",
      category: "UI/UX Design",
      description: "Mobile app homepage redesign focused on improving usability, accessibility, and shopping experience. Addressed cluttered interface with better hierarchy, cleaner visuals, and clearer call-to-actions.",
      longDescription: "Amazon Egypt is one of the leading e-commerce platforms, but its mobile app had usability issues that impacted the shopping experience. The app's cluttered interface, poor visual hierarchy, and inconsistent design elements made navigation difficult. This case study presents a redesign of the Amazon Egypt app's homepage to improve usability, accessibility, and overall user experience.",
      image: "/assets/Amazon/final UI.png",
      tags: ["Figma", "Mobile Design", "User Research", "Usability Testing"],
      technologies: [
        { name: "Figma", purpose: "Mobile UI design and prototyping" },
        { name: "User Research", purpose: "Understanding mobile user behavior" },
        { name: "Usability Testing", purpose: "Validating design improvements" },
        { name: "Accessibility", purpose: "Ensuring inclusive design practices" }
      ],
      challenges: [
        "Cluttered homepage with overwhelming amount of promotions and banners",
        "Small category icons crowded in horizontal scroll",
        "Busy backgrounds with bright colors and overlapping elements",
        "Poor readability with inconsistent text sizes and spacing"
      ],
      solutions: [
        "Conducted comprehensive user research and testing",
        "Implemented cleaner visual hierarchy with breathing space",
        "Redesigned navigation with prominent, tappable category icons",
        "Enhanced accessibility features and guidelines"
      ],
      results: [
        "Improved mobile user experience and engagement",
        "Enhanced accessibility and usability",
        "Reduced cognitive load for users",
        "Increased conversion rates through better CTAs"
      ],
      beforeAfter: [
        { url: "/assets/Amazon/Before.png", alt: "Before - Cluttered Amazon Homepage", caption: "Cluttered Layout: Overwhelming amount of promotions and banners with no clear visual hierarchy. Small Icons: Category icons are small and crowded in horizontal scroll. Busy Backgrounds: Bright colors and overlapping elements make the interface visually noisy." },
        { url: "/assets/Amazon/after.png", alt: "After - Redesigned Amazon Homepage", caption: "Cleaner Layout: Improved structure with clearly separated sections and breathing space. Prominent Categories: Main categories shown as large, tappable icons. Better Visual Hierarchy: Fonts, colors, and layout create a smoother flow and easier navigation." }
      ],
      finalUI: [],
      screenshots: [],
      presentationDay: []
    },
    "aast-app": {
      id: "aast-app",
       title: "AAST App – Student Services & Attendance Tracker",
      category: "UI/UX Design",
       description: "AAST is a mobile app designed to help Arab Academy for Science and Technology (AAST) students manage university services efficiently. This case study focuses on improving the navigation, usability, and attendance tracking within the app.",
       longDescription: "AAST is a mobile app designed to help Arab Academy for Science and Technology (AAST) students manage university services efficiently. This case study focuses on improving the navigation, usability, and attendance tracking within the app. Students struggled with disorganized services and no way to track attendance. The goal was to simplify service navigation and integrate an attendance tracker.",
       image: "/assets/Aast/before and after/after.png",
       tags: ["Figma", "Mobile UX", "User Research", "Case Study", "Student Services"],
       technologies: [
         { name: "Figma", purpose: "Mobile app design and prototyping" },
         { name: "User Research", purpose: "Understanding student needs and pain points through surveys and interviews" },
         { name: "Usability Testing", purpose: "Validating design solutions with real users" },
         { name: "Information Architecture", purpose: "Restructuring app navigation and content organization" }
       ],
       challenges: [
         "Hard-to-find services in disorganized structure",
         "No attendance system for students to track their attendance",
         "Unclear layout with poor information hierarchy",
         "Overwhelming design with high cognitive load"
       ],
       solutions: [
         "Conducted surveys and interviews to understand user confusion",
         "Redesigned navigation with clear service categories (Academic, Financial, etc.)",
         "Integrated attendance tracking functionality with detailed views",
         "Improved visual hierarchy and reduced cognitive load"
       ],
       results: [
         "Significantly improved usability - students found it clearer and faster to navigate",
         "Enhanced attendance tracking capabilities with detailed views",
         "Better information organization with categorized services",
         "Reduced confusion and saved time for students"
       ],
       beforeAfter: [
         { url: "/assets/Aast/before and after/before.png", alt: "Before - Original AAST App", caption: "All services were shown in a long, unorganized vertical list. No categories or grouping – made it hard to find specific features. High cognitive load due to lack of structure." },
         { url: "/assets/Aast/before and after/after.png", alt: "After - Redesigned AAST App", caption: "Services are grouped into clear categories (Academic, Financial, etc.). Cleaner layout improves scannability and user focus. New/important features (e.g., Attendance Tracker) are visually highlighted. Easier and faster navigation with reduced mental effort." }
       ],
       attendanceTracker: [
         { url: "/assets/Aast/attendace tracker/attendace tracker taps closed.png", alt: "Attendance Tracker - Closed", caption: "Attendance tracker interface showing closed tabs for easy access to attendance information" },
         { url: "/assets/Aast/attendace tracker/detailed attendace.png", alt: "Detailed Attendance View", caption: "Detailed attendance view showing comprehensive attendance tracking and statistics for students" }
       ],
       screenshots: [],
       presentationDay: []
    },
    "evently": {
      id: "evently",
       title: "Evently – Event Planning & Management App",
      category: "UI/UX Design",
       description: "Evently is a mobile application designed to simplify the process of planning and managing events. This case study focuses on enhancing user engagement, streamlining event creation, and providing intuitive navigation for users.",
       longDescription: "Evently is a mobile application designed to simplify the process of planning and managing events. This case study focuses on enhancing user engagement, streamlining event creation, and providing intuitive navigation for users. Through surveys and interviews, we discovered that users desired a straightforward event creation process and easy access to event details and updates.",
       image: "/assets/Evently/Final ui/feed.png",
       tags: ["Figma", "Mobile App", "UI Design", "User Research"],
       technologies: [
         { name: "Figma", purpose: "Mobile app design and prototyping" },
         { name: "User Research", purpose: "Understanding event planning user needs" },
         { name: "UI Design", purpose: "Creating intuitive and engaging interfaces" },
         { name: "Calendar Integration", purpose: "Seamless scheduling and event management" }
       ],
       challenges: [
         "Users found existing event planning tools to be cluttered and unintuitive",
         "Leading to frustration and decreased usage",
         "Need for straightforward event creation process",
         "Requirement for easy access to event details and updates"
       ],
       solutions: [
         "Design a user-friendly interface that allows seamless event creation",
         "Implement management and participation tracking features",
         "Create personalized and interest-driven feed system",
         "Add calendar integration and external ticket links for improved planning"
       ],
       results: [
         "The Evently app successfully streamlined event discovery by offering users a personalized and interest-driven feed",
         "Users found it easier to find relevant events, thanks to the onboarding and content curation process",
         "The addition of calendar integration and external ticket links improved planning and accessibility",
         "Enhanced user engagement and made the event experience smoother and more actionable"
       ],
       wireframes: [
         { url: "/assets/Evently/wireframes/select your interst.png", alt: "Wireframe 1: Select Your Interests", caption: "Wireframe showing the interest selection process for personalized event recommendations" },
         { url: "/assets/Evently/wireframes/Personlized feed.png", alt: "Wireframe 2: Personalized Feed", caption: "Wireframe of the personalized feed showing curated events based on user interests" },
         { url: "/assets/Evently/wireframes/Event details.png", alt: "Wireframe 3: Event Details", caption: "Wireframe of the event details page with comprehensive event information" },
         { url: "/assets/Evently/wireframes/Calender intgration.png", alt: "Wireframe 4: Calendar Integration", caption: "Wireframe showing calendar integration for seamless event scheduling" }
       ],
       finalUI: [
         { url: "/assets/Evently/Final ui/Select you intrest.png", alt: "Final UI: Select Your Interests", caption: "Final design of the interest selection interface with improved visual hierarchy" },
         { url: "/assets/Evently/Final ui/feed.png", alt: "Final UI: Personalized Feed", caption: "Final design of the personalized feed with enhanced user experience" },
         { url: "/assets/Evently/Final ui/Event details.png", alt: "Final UI: Event Details", caption: "Final design of the event details page with clear information architecture" },
         { url: "/assets/Evently/Final ui/Calender integration.png", alt: "Final UI: Calendar Integration", caption: "Final design of the calendar integration feature for seamless scheduling" }
       ],
       userPersona: [
         { 
           url: "/assets/Evently/user persona/User Persona Example.png", 
           alt: "User Persona Example", 
           caption: "User persona created through research to understand target audience needs and behaviors.",
           needs: [
             "A quick glance to check what events are happening today or this week",
             "Simple access to external ticket links without creating an account or logging in",
             "A way to add events to Google Calendar or Apple Calendar with one tap",
             "Clean, uncluttered UI that focuses only on essential event info",
             "Trust that the event info is accurate and up-to-date"
           ],
           painPoints: [
             "Clunky event platforms overloaded with irrelevant features",
             "Too many steps just to find a ticket link or calendar integration",
             "Apps that force sign-ups or accounts to access basic event details",
             "Hard to find reliable, centralized listings for niche/local events"
           ]
         }
       ],
       screenshots: [],
       presentationDay: []
     }
  };

  // Scroll to top functionality and active section tracking
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
      
      // Track active section
      const sections = [
        'overview',
        'technologies',
        'challenges-solutions',
        'results',
        'user-persona',
        'wireframes',
        'before-after',
        'attendance-tracker',
        'final-ui',
        'screenshots',
        'presentation-day'
      ];
      
      const scrollPosition = window.scrollY + 100; // Offset for better detection
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    // Initial call to set active section
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const project = projects[projectId];

  if (!project) {
    return (
      <div className="project-detail-page">
        <div className="project-detail-container">
          <div className="project-not-found">
            <h1>Project Not Found</h1>
            <p>The project you're looking for doesn't exist.</p>
            <Link to="/projects" className="btn btn-primary">Back to Projects</Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="project-detail-page">
      <div className="project-detail-container">
        {/* Navigation */}
        <div className="project-detail-nav">
          <Link to="/projects" className="back-link">
            <span className="back-arrow">←</span>
            Back to Projects
          </Link>
        </div>

        {/* Project Header */}
        <div className="project-detail-header">
          <div className="project-detail-image">
            <img src={project.image} alt={project.title} />
          </div>
          <div className="project-detail-info">
            <div className="project-category">{project.category}</div>
            <h1 className="project-detail-title">{project.title}</h1>
            <p className="project-detail-description">{project.description}</p>
            <div className="project-tags">
              {project.tags.map((tag, index) => (
                <span key={index} className="project-tag">{tag}</span>
              ))}
            </div>
            <div className="project-links">
              {project.link && (
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  {project.linkText || "View Project"}
                </a>
              )}
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                  View Code
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Project Content */}
        <div className="project-detail-content">
          {/* Overview */}
          <section id="overview" className="project-section">
            <h2>Project Overview</h2>
            <p>{project.longDescription}</p>
          </section>

          {/* Technologies */}
          {project.technologies && project.technologies.length > 0 && (
            <section id="technologies" className="project-section">
              <h2>Technologies Used</h2>
              <div className="technologies-grid">
                {project.technologies.map((tech, index) => (
                  <div key={index} className="technology-item">
                    <span className="tech-name">{tech.name}</span>
                    <span className="tech-purpose">{tech.purpose}</span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Challenges and Solutions */}
          {project.challenges && project.challenges.length > 0 && project.solutions && project.solutions.length > 0 && (
            <section id="challenges-solutions" className="project-section">
              <h2>Challenges & Solutions</h2>
              <div className="challenges-solutions-container">
                <div className="challenges-section">
                  <h3>Challenges Faced</h3>
                  <ul className="challenges-list">
                    {project.challenges.map((challenge, index) => (
                      <li key={index}>{challenge}</li>
                    ))}
                  </ul>
                </div>
                <div className="solutions-section">
                  <h3>Solutions Implemented</h3>
                  <ul className="solutions-list">
                    {project.solutions.map((solution, index) => (
                      <li key={index}>{solution}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>
          )}

          {/* Results */}
           {project.results && project.results.length > 0 && (
            <section id="results" className="project-section">
              <h2>Results</h2>
              <ul className="results-list">
                {project.results.map((result, index) => (
                  <li key={index}>{result}</li>
                ))}
              </ul>
            </section>
          )}

           {/* User Persona */}
           {project.userPersona && project.userPersona.length > 0 && (
             <section id="user-persona" className="project-section">
               <h2>User Persona</h2>
               <div style={{ display: 'flex', alignItems: 'flex-start', gap: '40px', flexWrap: 'wrap' }}>
                 {project.userPersona.map((persona, index) => (
                   <div key={index} style={{ display: 'flex', alignItems: 'flex-start', gap: '40px', width: '100%' }}>
                     <div style={{ flex: '1', minWidth: '300px' }}>
                       <img 
                         src={persona.url} 
                         alt={persona.alt}
                         onClick={() => setSelectedImage(persona)}
                         style={{ 
                           width: '100%', 
                           height: 'auto', 
                           borderRadius: '10px',
                           cursor: 'pointer',
                           boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
                         }}
                       />
                     </div>
                     <div style={{ flex: '1', minWidth: '300px' }}>
                       <h3 style={{ marginBottom: '20px', fontSize: '24px', fontWeight: 'bold', color: 'white' }}>
                         {persona.alt}
                       </h3>
                       <p style={{ fontSize: '16px', lineHeight: '1.6', color: 'white', marginBottom: '25px' }}>
                         {persona.caption}
                       </p>
                       
                       {persona.needs && persona.needs.length > 0 && (
                         <div style={{ marginBottom: '25px' }}>
                           <h4 style={{ fontSize: '18px', fontWeight: 'bold', color: 'white', marginBottom: '15px' }}>
                             Needs
                           </h4>
                           <ul style={{ paddingLeft: '20px', margin: '0' }}>
                             {persona.needs.map((need, needIndex) => (
                               <li key={needIndex} style={{ fontSize: '16px', lineHeight: '1.6', color: 'white', marginBottom: '8px' }}>
                                 {need}
                               </li>
                             ))}
                           </ul>
                         </div>
                       )}
                       
                       {persona.painPoints && persona.painPoints.length > 0 && (
                         <div>
                           <h4 style={{ fontSize: '18px', fontWeight: 'bold', color: 'white', marginBottom: '15px' }}>
                             Pain Points
                           </h4>
                           <ul style={{ paddingLeft: '20px', margin: '0' }}>
                             {persona.painPoints.map((painPoint, painIndex) => (
                               <li key={painIndex} style={{ fontSize: '16px', lineHeight: '1.6', color: 'white', marginBottom: '8px' }}>
                                 {painPoint}
                               </li>
                             ))}
                           </ul>
                         </div>
                       )}
                     </div>
                   </div>
                 ))}
               </div>
             </section>
           )}

           {/* UX Evaluation */}
           {project.uxEvaluation && (
             <section id="ux-evaluation" className="project-section">
               <h2>UX Evaluation</h2>
               <p style={{ color: 'rgba(255, 255, 255, 0.8)', marginBottom: '2rem', lineHeight: '1.6' }}>
                 {project.uxEvaluation.text}
               </p>
               <div style={{ textAlign: 'center' }}>
                 <a 
                   href={project.uxEvaluation.link} 
                   target="_blank" 
                   rel="noopener noreferrer"
                   style={{
                     display: 'inline-flex',
                     alignItems: 'center',
                     gap: '0.5rem',
                     padding: '1rem 2rem',
                     background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                     color: '#ffffff',
                     textDecoration: 'none',
                     borderRadius: '12px',
                     fontWeight: '600',
                     transition: 'all 0.3s ease',
                     boxShadow: '0 4px 20px rgba(102, 126, 234, 0.3)'
                   }}
                   onMouseEnter={(e) => {
                     e.target.style.transform = 'translateY(-2px)';
                     e.target.style.boxShadow = '0 8px 30px rgba(102, 126, 234, 0.4)';
                   }}
                   onMouseLeave={(e) => {
                     e.target.style.transform = 'translateY(0)';
                     e.target.style.boxShadow = '0 4px 20px rgba(102, 126, 234, 0.3)';
                   }}
                 >
                   <span>📊</span>
                   {project.uxEvaluation.linkText}
                 </a>
               </div>
             </section>
           )}

           {/* Wireframes */}
           {project.wireframes && project.wireframes.length > 0 && (
             <section id="wireframes" className="project-section">
               <h2>Wireframes</h2>
               <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center' }}>
                 {project.wireframes.map((wireframe, index) => (
                   <div key={index} style={{ flex: '1', minWidth: '250px', maxWidth: '400px', textAlign: 'center' }}>
                     <img 
                       src={wireframe.url} 
                       alt={wireframe.alt}
                       onClick={() => setSelectedImage(wireframe)}
                       style={{ 
                         width: '100%', 
                         height: 'auto', 
                         borderRadius: '10px',
                         cursor: 'pointer',
                         boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                         marginBottom: '15px'
                       }}
                     />
                     <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#666', margin: '0' }}>
                       {wireframe.caption}
                     </p>
                   </div>
                 ))}
               </div>
             </section>
           )}

           {/* Before/After */}
           {project.beforeAfter && project.beforeAfter.length > 0 && (
             <section id="before-after" className="project-section">
               <h2>Before/After</h2>
               <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center' }}>
                 {project.beforeAfter.map((comparison, index) => (
                   <div key={index} style={{ flex: '1', minWidth: '250px', maxWidth: '400px', textAlign: 'center' }}>
                     <img 
                       src={comparison.url} 
                       alt={comparison.alt}
                       onClick={() => setSelectedImage(comparison)}
                       style={{ 
                         width: '100%', 
                         height: 'auto', 
                         borderRadius: '10px',
                         cursor: 'pointer',
                         boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                         marginBottom: '15px'
                       }}
                     />
                     <h3 style={{ marginBottom: '10px', fontSize: '18px', fontWeight: 'bold' }}>
                       {comparison.alt}
                     </h3>
                     <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#666', textAlign: 'left' }}>
                       {comparison.caption}
                     </p>
                   </div>
                 ))}
               </div>
             </section>
           )}

           {/* Attendance Tracker Feature */}
           {project.attendanceTracker && project.attendanceTracker.length > 0 && (
             <section id="attendance-tracker" className="project-section">
               <h2>Attendance Tracker Feature</h2>
               <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center' }}>
                 {project.attendanceTracker.map((tracker, index) => (
                   <div key={index} style={{ flex: '1', minWidth: '250px', maxWidth: '400px', textAlign: 'center' }}>
                     <img 
                       src={tracker.url} 
                       alt={tracker.alt}
                       onClick={() => setSelectedImage(tracker)}
                       style={{ 
                         width: '100%', 
                         height: 'auto', 
                         borderRadius: '10px',
                         cursor: 'pointer',
                         boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                         marginBottom: '15px'
                       }}
                     />
                     <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#666', margin: '0' }}>
                       {tracker.caption}
                     </p>
                   </div>
                 ))}
               </div>
             </section>
           )}

           {/* Final UI */}
           {project.finalUI && project.finalUI.length > 0 && (
             <section id="final-ui" className="project-section">
               <h2>Final UI</h2>
               <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center' }}>
                 {project.finalUI.map((ui, index) => (
                   <div key={index} style={{ flex: '1', minWidth: '250px', maxWidth: '400px', textAlign: 'center' }}>
                     <img 
                       src={ui.url} 
                       alt={ui.alt}
                       onClick={() => setSelectedImage(ui)}
                       style={{ 
                         width: '100%', 
                         height: 'auto', 
                         borderRadius: '10px',
                         cursor: 'pointer',
                         boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                         marginBottom: '15px'
                       }}
                     />
                     <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#666', margin: '0' }}>
                       {ui.caption}
                     </p>
                   </div>
                 ))}
               </div>
             </section>
           )}

          {/* Screenshots */}
          {project.screenshots && project.screenshots.length > 0 && (
            <section id="screenshots" className="project-section">
              <h2>Project Screenshots</h2>
              <div className="screenshots-grid">
                {project.screenshots.map((screenshot, index) => (
                  <div key={index} className="screenshot-item">
                    <img 
                      src={screenshot.url} 
                      alt={screenshot.alt}
                      onClick={() => setSelectedImage(screenshot)}
                    />
                    <p className="screenshot-caption">{screenshot.caption}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Presentation Day */}
          {project.presentationDay && project.presentationDay.length > 0 && (
            <section id="presentation-day" className="project-section">
              <h2>Presentation Day</h2>
              <div className="screenshots-grid">
                {project.presentationDay.map((media, index) => (
                  <div key={index} className="screenshot-item">
                    <img 
                      src={media.url} 
                      alt={media.alt}
                      onClick={() => setSelectedImage(media)}
                    />
                    <p className="screenshot-caption">{media.caption}</p>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Navigation to other projects */}
        <div className="project-navigation">
          <h3>Explore More Projects</h3>
          <div className="project-nav-grid">
            {Object.values(projects)
              .filter(p => p.id !== project.id)
              .slice(0, 3)
              .map((relatedProject) => (
                <Link key={relatedProject.id} to={`/projects/${relatedProject.id}`} className="related-project-card">
                  <img src={relatedProject.image} alt={relatedProject.title} />
                  <div className="related-project-info">
                    <h4>{relatedProject.title}</h4>
                    <p>{relatedProject.category}</p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>

      {/* Section Navigation */}
      <div className="section-navigation">
         <button 
           onClick={() => scrollToSection('overview')} 
           className={`nav-btn ${activeSection === 'overview' ? 'active' : ''}`}
         >
          <span>📋</span>
           <span className="nav-text">Overview</span>
           {activeSection === 'overview' && <div className="active-indicator"></div>}
        </button>
         {project.technologies && project.technologies.length > 0 && (
           <button 
             onClick={() => scrollToSection('technologies')} 
             className={`nav-btn ${activeSection === 'technologies' ? 'active' : ''}`}
           >
            <span>⚙️</span>
             <span className="nav-text">Tech</span>
             {activeSection === 'technologies' && <div className="active-indicator"></div>}
          </button>
        )}
         {project.challenges && project.challenges.length > 0 && (
           <button 
             onClick={() => scrollToSection('challenges-solutions')} 
             className={`nav-btn ${activeSection === 'challenges-solutions' ? 'active' : ''}`}
           >
            <span>🎯</span>
             <span className="nav-text">Challenges</span>
             {activeSection === 'challenges-solutions' && <div className="active-indicator"></div>}
          </button>
        )}
         {project.results && project.results.length > 0 && (
           <button 
             onClick={() => scrollToSection('results')} 
             className={`nav-btn ${activeSection === 'results' ? 'active' : ''}`}
           >
            <span>📈</span>
             <span className="nav-text">Results</span>
             {activeSection === 'results' && <div className="active-indicator"></div>}
           </button>
         )}
         {project.userPersona && project.userPersona.length > 0 && (
           <button 
             onClick={() => scrollToSection('user-persona')} 
             className={`nav-btn ${activeSection === 'user-persona' ? 'active' : ''}`}
           >
             <span>👤</span>
             <span className="nav-text">User Persona</span>
             {activeSection === 'user-persona' && <div className="active-indicator"></div>}
           </button>
         )}
         {project.wireframes && project.wireframes.length > 0 && (
           <button 
             onClick={() => scrollToSection('wireframes')} 
             className={`nav-btn ${activeSection === 'wireframes' ? 'active' : ''}`}
           >
             <span>📐</span>
             <span className="nav-text">Wireframes</span>
             {activeSection === 'wireframes' && <div className="active-indicator"></div>}
           </button>
         )}
         {project.beforeAfter && project.beforeAfter.length > 0 && (
           <button 
             onClick={() => scrollToSection('before-after')} 
             className={`nav-btn ${activeSection === 'before-after' ? 'active' : ''}`}
           >
             <span>🔄</span>
             <span className="nav-text">Before/After</span>
             {activeSection === 'before-after' && <div className="active-indicator"></div>}
           </button>
         )}
         {project.attendanceTracker && project.attendanceTracker.length > 0 && (
           <button 
             onClick={() => scrollToSection('attendance-tracker')} 
             className={`nav-btn ${activeSection === 'attendance-tracker' ? 'active' : ''}`}
           >
             <span>📊</span>
             <span className="nav-text">Attendance Tracker</span>
             {activeSection === 'attendance-tracker' && <div className="active-indicator"></div>}
           </button>
         )}
         {project.finalUI && project.finalUI.length > 0 && (
           <button 
             onClick={() => scrollToSection('final-ui')} 
             className={`nav-btn ${activeSection === 'final-ui' ? 'active' : ''}`}
           >
             <span>🎨</span>
             <span className="nav-text">Final UI</span>
             {activeSection === 'final-ui' && <div className="active-indicator"></div>}
          </button>
        )}
         {project.screenshots && project.screenshots.length > 0 && (
           <button 
             onClick={() => scrollToSection('screenshots')} 
             className={`nav-btn ${activeSection === 'screenshots' ? 'active' : ''}`}
           >
            <span>🖼️</span>
             <span className="nav-text">Screenshots</span>
             {activeSection === 'screenshots' && <div className="active-indicator"></div>}
          </button>
        )}
        {project.presentationDay && project.presentationDay.length > 0 && (
          <button 
            onClick={() => scrollToSection('presentation-day')} 
            className={`nav-btn ${activeSection === 'presentation-day' ? 'active' : ''}`}
          >
            <span>🎉</span>
            <span className="nav-text">Presentation</span>
            {activeSection === 'presentation-day' && <div className="active-indicator"></div>}
          </button>
        )}
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button onClick={scrollToTop} className="scroll-to-top">
          <span>↑</span>
        </button>
      )}

      {/* Image Modal */}
      {selectedImage && (
        <div className="image-modal" onClick={() => setSelectedImage(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedImage(null)}>×</button>
            <img src={selectedImage.url} alt={selectedImage.alt} />
            <p className="modal-caption">{selectedImage.caption}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectDetail;
