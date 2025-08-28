<template>
  <div class="portfolio-layout">
    <!-- Left Column - Main Content -->
    <div class="main-content">
      <!-- Hero Section -->
      <section id="home" class="hero-section">
        <div class="hero-content">
          <h1 class="hero-title">{{ name }}</h1>
          <p class="hero-subtitle">{{ title }}</p>
          <p class="hero-description">Frontend web developer and technical product manager with 15+ years’ experience delivering digital solutions across Australia and Singapore. Skilled in web development, system architecture, and team leadership with a passion for innovation and mentorship.</p>
          <div class="hero-buttons">
            <button class="btn btn-primary" @click="downloadCV">
              <i class="fas fa-download me-2"></i>Download CV
            </button>
          </div>
        </div>
      </section>

      <!-- About Section -->
      <section id="about" class="section">
        <h2 class="section-title">About Me</h2>
        <div class="about-content">
          <p>I am a web developer / product manager with 15+ years experience creating digital solutions across Australia and Singapore. I love building, leading teams, and exploring new technologies to deliver impactful results.</p>
          <div class="stats-grid">
            <div class="stat-item">
              <h3>15+</h3>
              <p>Years Experience</p>
            </div>
            <div class="stat-item">
              <h3>5+</h3>
              <p>Industries Served</p>
            </div>
            <div class="stat-item">
              <h3>100%</h3>
              <p>Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Experience Section -->
      <section id="experience" class="section">
        <h2 class="section-title">Work Experience</h2>
        <div class="experience-timeline">
          <div class="timeline-item" v-for="(job, index) in workExperience" :key="index">
            <div class="timeline-marker"></div>
            <div class="timeline-content">
              <div class="job-header" @click="toggleJobDescription(index)">
                <h3 class="job-title">
                  {{ job.title }}
                  <i class="fas" :class="expandedJobs.has(index) ? 'fa-chevron-up' : 'fa-chevron-down'"></i>
                </h3>
                <span class="company-name">{{ job.company }}</span>
                <span class="job-period">{{ job.period }}</span>
              </div>
              <div class="job-details" :class="{ 'expanded': expandedJobs.has(index) }">
                <p class="job-description">{{ job.description }}</p>
                <div class="job-technologies">
                  <span class="tech-tag" v-for="tech in job.technologies" :key="tech">{{ tech }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      <!-- Skills Section -->
      <section id="skills" class="section">
        <h2 class="section-title">Skills & Expertise</h2>
        <div class="skills-content">
          <div class="chart-container">
            <apexchart
              width="100%"
              height="600"
              type="bar"
              :options="chartOptions"
              :series="series"
            />
          </div>
        </div>
      </section>

      <!-- Contact Section -->
      <section id="contact" class="section">
        <h2 class="section-title">Get In Touch</h2>
        <div class="contact-content">
          <p>I'm always interested in new opportunities and exciting projects. Let's discuss how we can work together!</p>
          <div class="contact-info">
            <div class="contact-item">
              <i class="fas fa-envelope contact-icon"></i>
              <span>marcobfenda@gmail.com</span>
            </div>
            <div class="contact-item">
              <i class="fas fa-phone contact-icon"></i>
              <span>+61433663962</span>
            </div>
            <div class="contact-item">
              <i class="fas fa-map-marker-alt contact-icon"></i>
              <span>Rooty Hill, NSW</span>
            </div>
          </div>
        </div>
      </section>
    </div>

    <!-- Right Column - Persistent Navigation -->
    <div class="sidebar">
      <div class="sidebar-content">
        <!-- Profile Info -->
        <div class="profile-section">
          <div class="profile-avatar">
            <div class="avatar-placeholder">{{ name.charAt(0) }}</div>
          </div>
          <h3 class="profile-name">{{ name }}</h3>
          <p class="profile-title">{{ title }}</p>
        </div>

        <!-- Navigation Menu -->
        <nav class="sidebar-nav">
          <ul class="nav-list">
            <li class="nav-item">
              <a href="javascript:void(0)" class="nav-link" @click="scrollToSection('home')">
                <i class="fas fa-home nav-icon"></i>
                <span>Home</span>
              </a>
            </li>
            <li class="nav-item">
              <a href="javascript:void(0)" class="nav-link" @click="scrollToSection('about')">
                <i class="fas fa-user nav-icon"></i>
                <span>About</span>
              </a>
            </li>
            <li class="nav-item">
              <a href="javascript:void(0)" class="nav-link" @click="scrollToSection('experience')">
                <i class="fas fa-briefcase nav-icon"></i>
                <span>Experience</span>
              </a>
            </li>

            <li class="nav-item">
              <a href="javascript:void(0)" class="nav-link" @click="scrollToSection('skills')">
                <i class="fas fa-bolt nav-icon"></i>
                <span>Skills</span>
              </a>
            </li>
            <li class="nav-item">
              <a href="javascript:void(0)" class="nav-link" @click="scrollToSection('contact')">
                <i class="fas fa-phone nav-icon"></i>
                <span>Contact</span>
              </a>
            </li>
          </ul>
        </nav>

        <!-- Social Links -->
        <div class="social-links">
          <a href="https://github.com/marcobfenda" target="_blank" class="social-link" title="GitHub">
            <i class="fab fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/marc-obfenda/" target="_blank" class="social-link" title="LinkedIn">
            <i class="fab fa-linkedin"></i>
          </a>
          <!--
          <a href="#" class="social-link" title="Twitter">
            <i class="fab fa-twitter"></i>
          </a>
          <a href="#" class="social-link" title="Dribbble">
            <i class="fab fa-dribbble"></i>
          </a>
          -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import { gsap } from "gsap";
export default {
  name: "App",
  setup() {
    const name = "MARC OBFENDA";
    const title = "Frontend Web Developer";

    const expandedJobs = ref(new Set());
    
    const toggleJobDescription = (index) => {
      const newExpanded = new Set(expandedJobs.value);
      if (newExpanded.has(index)) {
        newExpanded.delete(index);
      } else {
        newExpanded.add(index);
      }
      expandedJobs.value = newExpanded;
    };

    const workExperience = ref([
      {
        title: "Senior Frontend Developer",
        company: "Givtu",
        period: "Mar 2022 - Jun 2025",
        description: "Led frontend development and design of scalable applications for a charity raffle website. Built responsive and accessible user interfaces with newer HTML, CSS, and JavaScript frameworks. Collaborated with cross-functional teams to deploy new features, enhance frontend performance, and increase overall usability. Also participated in backend development by building APIs and server-side logic upkeep. Ensured product quality through end-to-end testing, debugging, and code review across the entire stack.",
        technologies: ["Symfony", "MySQL", "PHP", "JavaScript", "Vue.js", "Bootstrap", "HTML5", "CSS3", "AWS", "Docker", "Git", "CI/CD", "Playwright", "Jira", "Confluence", "Slack", "Figma"]
      },
      {
        title: "Frontend Developer",
        company: "Floktu",
        period: "Mar 2020 - Mar 2022",
        description: "Helped build a full stack of a web-based events platform, including user interface design to be user-friendly and mobile-friendly. Worked with business stakeholders and developers to develop features enhancing event customization and audience engagement. Ensured code quality and system performance through bug fixing, unit test addition, and rendering speed improvement. Also assisted in API integration and backend updates for new frontend feature support.",
        technologies: ["Symfony", "MySQL", "PHP", "JavaScript", "HTML5", "CSS3", "AWS", "Docker", "Git", "CI/CD", "Playwright", "Jira", "Confluence", "Slack"]
      },
      {
        title: "Technical Product Manager",
        company: "Foxtel Media",
        period: "Oct 2019 - Feb 2020",
        description: "Generated digital advertising revenues through managing and executing customized rich media campaigns on a variety of platforms. Played a primary role in aligning client objectives with technology capabilities, and in the effective execution of campaigns. Improved and optimized legacy internal systems used for running campaigns, managing ad inventory, and delivering real-time performance reports. Offered technical expertise and strategic counsel on media formats and platform capabilities to the digital sales force.",
        technologies: ["JavaScript", "HTML5", "CSS3", "Doubleclick Studio", "Doubleclick for Publishers", "Ad Serving"]
      },
      {
        title: "Ad Tech Engineer",
        company: "Nine Entertainment Co.",
        period: "Dec 2018 - Aug 2019",
        description: "Created and launched dynamic ad campaigns for client requirements, supporting many sales teams across Nine's digital assets. Helped refactor the company's internal ad-serving API for higher loading and stability. Automated test suites using Jest to impose code quality and stability on production deployments. Utilized ad tech solutions such as Google Ad Manager, DoubleClick Studio, and DCM to optimize campaign delivery and measurement.",
        technologies: ["JavaScript", "HTML5", "CSS3", "Doubleclick Studio", "Doubleclick for Publishers", "Ad Serving", "Git"]
      },
      {
        title: "Fairfax Media",
        company: "Technical Operations Specialist / Ad Tech Engineer",
        period: "Nov 2014 - Dec 2018",
        description: "Played a key role in delivering engaging, high-performing rich media campaigns on Fairfax's digital network. Primary contributor to reengineering Fairfax's internal ad-serving library to include automated testing for increased release confidence. Developed and deployed creative ad formats with DoubleClick Studio and Native Templates. Coordinated across departments to improve ad performance, platform stability, and optimization of the overall ad operations efficiency.",
        technologies: ["JavaScript", "HTML5", "CSS3", "Doubleclick Studio", "Doubleclick for Publishers", "Ad Serving", "Git"]
      },
      {
        title: "Institute of Chartered Accountants Australia",
        company: "Digital Designer",
        period: "Nov 2013 - Oct 2014",
        description: "Designed and refreshed corporate websites and campaign microsites, balancing aesthetic design against usability. Collaborated with lead designers to create visually cohesive and technically sound digital materials. Directed design realization and frontend delivery, with responsive layout and accessible user experiences on all devices.",
        technologies: ["JavaScript", "HTML", "CSS", "Sitecore", "Photoshop", "Illustrator"]
      },
      {
        title: "Multibase WebAustralis",
        company: "Web Designer",
        period: "Dec 2010 - Sep 2013",
        description: "Created personalized web designs and CMS templates for business clients. Participated in design planning, UI/UX enhancements, and brand-coordinated graphic design. Worked with back-end developers to integrate design and functionality, including creating CMS modules and assisting in database schema design. Helped with QA testing, performance, and project delivery timelines.",
        technologies: ["JavaScript", "HTML", "CSS", "ElcomCMS", "Photoshop", "Illustrator"]
      },
      {
        title: "Stella Design",
        company: "Full Stack Developer",
        period: "Sep 2008 - Dec 2010",
        description: "Delivered end-to-end web solutions by the combination of creative design and good technical execution. Designed site layouts, graphics, and branding materials and converted them into custom CMS and web applications. Collaborated with clients on interface strategy and visual choices. Development-wise, was responsible for server-side logic, database integration, and debugging. Consistently made contributions toward system improvements, adhering to deadlines and good coding practices.",
        technologies: ["JavaScript", "HTML", "CSS", "PHP", "MySQL", "InDesign", "Photoshop", "Illustrator", "Flash", "Visio"]
      }
    ]);

    const chartOptions = ref({
      chart: { 
        toolbar: { show: false },
        type: 'bar',
        horizontal: true
      },
      plotOptions: {
        bar: {
          horizontal: true,
          borderRadius: 6,
          dataLabels: {
            position: 'top',
          },
        }
      },
      dataLabels: {
        enabled: true,
        formatter: function (val) {
          return val + "%";
        },
        position: 'inside',
        offsetX: -20,
        style: {
          fontSize: '14px',
          fontWeight: '600',
          colors: ['#fff']
        }
      },
      xaxis: {
        categories: [
          "HTML5",
          "CSS3",
          "Vue.js",
          "Bootstrap",
          "PHP",
          "Node.js",
          "REST API",
          "MySQL",
          "SQL",
          "Webpack",
          "NPM / Yarn",
          "Playwright",
          "Git / Github",
          "Responsive UI Design",
          "Cross Browser",
          "QA",
          "Agile Collaboration"          
        ],
        labels: {
          style: {
            fontSize: '11px',
            colors: '#333'
          },
          rotate: -45,
          rotateAlways: false
        }
      },
      yaxis: {
        labels: {
          style: {
            fontSize: '12px',
            colors: '#333'
          }
        }
      },
      colors: ["#667eea"],
      grid: {
        borderColor: '#e0e0e0',
        strokeDashArray: 5,
        xaxis: {
          lines: {
            show: true
          }
        }
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return val + "% proficiency";
          }
        }
      }
    });

    const series = ref([
      {
        name: "Skill Level",
        data: [90, 90, 70, 70, 85, 70, 65, 85, 80, 70, 70, 70, 70, 85, 85, 85, 90],
      },
    ]);

    const scrollToSection = (sectionId) => {
      console.log('scrollToSection called with:', sectionId);
      const element = document.getElementById(sectionId);
      console.log('Element found:', element);
      
      if (element) {
        // Get the main content container
        const mainContent = document.querySelector('.main-content');
        
        if (mainContent) {
          // Calculate position relative to the main content container
          const containerRect = mainContent.getBoundingClientRect();
          const elementRect = element.getBoundingClientRect();
          
          // Calculate the scroll position within the container
          const currentScroll = mainContent.scrollTop;
          const elementTop = element.offsetTop;
          const containerTop = mainContent.offsetTop;
          
          const targetPosition = elementTop - containerTop - 20; // 20px offset for better positioning
          
          console.log('Scrolling to position:', targetPosition);
          
          mainContent.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      }
    };

    const downloadCV = () => {
      // Create a link element to trigger the download
      const link = document.createElement('a');
      link.href = 'Marc Obfenda Resume.pdf';
      link.download = 'Marc Obfenda Resume.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };

    onMounted(() => {
      // Hero animations
      gsap.from(".hero-title", { opacity: 0, y: -50, duration: 1 });
      gsap.from(".hero-subtitle", { opacity: 0, y: 20, duration: 1, delay: 0.2 });
      gsap.from(".hero-description", { opacity: 0, y: 20, duration: 1, delay: 0.4 });
      gsap.from(".hero-buttons", { opacity: 0, y: 20, duration: 1, delay: 0.6 });
      
      // Sidebar animations
      gsap.from(".sidebar", { opacity: 0, x: 50, duration: 1, delay: 0.3 });
      
      // Debug: Check if chart data is loaded
      console.log('Chart Options:', chartOptions.value);
      console.log('Chart Series:', series.value);
    });

    return { 
      name, 
      title, 
      workExperience,
      chartOptions, 
      series,
      expandedJobs,
      toggleJobDescription,
      scrollToSection,
      downloadCV
    };
  },
};
</script>

<style scoped>
.portfolio-layout {
  display: grid;
  grid-template-columns: 1fr 350px;
  min-height: 100vh;
  background: #f8f9fa;
}

.main-content {
  padding: 0 60px;
  overflow-y: auto;
  max-height: 100vh;
}

.sidebar {
  position: fixed;
  right: 0;
  top: 0;
  width: 350px;
  height: 100vh;
  background: white;
  border-left: 1px solid #e9ecef;
  overflow-y: auto;
  z-index: 1000;
}

.sidebar-content {
  padding: 40px 30px;
  height: 100%;
  display: flex;
  flex-direction: column;
}

/* Profile Section */
.profile-section {
  text-align: center;
  margin-bottom: 40px;
  padding-bottom: 30px;
  border-bottom: 1px solid #e9ecef;
}

.profile-avatar {
  margin-bottom: 20px;
}

.avatar-placeholder {
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 2rem;
  font-weight: bold;
  margin: 0 auto;
}

.profile-name {
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0 0 10px 0;
  color: #333;
}

.profile-title {
  color: #6c757d;
  margin: 0;
  font-size: 1rem;
}

/* Navigation */
.sidebar-nav {
  flex: 1;
  margin-bottom: 30px;
}

.nav-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.nav-item {
  margin-bottom: 15px;
}

.nav-link {
  display: flex;
  align-items: center;
  padding: 12px 16px;
  color: #6c757d;
  text-decoration: none;
  border-radius: 8px;
  transition: all 0.3s ease;
}

.nav-link:hover {
  background: #f8f9fa;
  color: #333;
  transform: translateX(5px);
}

.nav-icon {
  margin-right: 12px;
  font-size: 1.2rem;
  width: 20px;
  text-align: center;
}

/* Social Links */
.social-links {
  display: flex;
  justify-content: center;
  gap: 15px;
  padding-top: 20px;
  border-top: 1px solid #e9ecef;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: #f8f9fa;
  border-radius: 50%;
  color: #6c757d;
  text-decoration: none;
  transition: all 0.3s ease;
}

.social-link:hover {
  background: #667eea;
  color: white;
  transform: translateY(-2px);
}

/* Main Content Sections */
.section {
  margin-bottom: 80px;
  padding-top: 60px;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 30px;
  color: #333;
  position: relative;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 0;
  width: 60px;
  height: 4px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 2px;
}

/* Hero Section */
.hero-section {
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding-top: 0;
}

.hero-content {
  max-width: 600px;
}

/* Desktop only: match Experience section width */
@media (min-width: 992px) {
  .hero-content {
    max-width: 800px;
  }
}

.hero-title {
  font-size: 4rem;
  font-weight: 800;
  margin-bottom: 20px;
  color: #333;
  line-height: 1.1;
}

.hero-subtitle {
  font-size: 1.5rem;
  color: #667eea;
  margin-bottom: 20px;
  font-weight: 500;
}

.hero-description {
  font-size: 1.1rem;
  color: #6c757d;
  margin-bottom: 30px;
  line-height: 1.6;
}

.hero-buttons {
  display: flex;
  gap: 15px;
}

.btn {
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 500;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;
}

.btn-primary {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.btn-outline-primary {
  background: transparent;
  color: #667eea;
  border: 2px solid #667eea;
}

.btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

/* About Section */
.about-content {
  max-width: 600px;
}

/* Desktop only: match Experience section width */
@media (min-width: 992px) {
  .about-content {
    max-width: 800px;
  }
}

.about-content p {
  font-size: 1.1rem;
  color: #6c757d;
  line-height: 1.8;
  margin-bottom: 30px;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin-top: 40px;
}

.stat-item {
  text-align: center;
  padding: 20px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
}

.stat-item h3 {
  font-size: 2.5rem;
  font-weight: 700;
  color: #667eea;
  margin: 0 0 10px 0;
}

.stat-item p {
  color: #6c757d;
  margin: 0;
  font-weight: 500;
}

/* Desktop only: split Years Experience into two lines */
@media (min-width: 992px) {
  .stat-item p .label-part-1 {
    display: block;
  }
}





/* Experience Section */
.experience-timeline {
  max-width: 800px;
  margin: 0 auto;
  position: relative;
}

.experience-timeline::before {
  content: '';
  position: absolute;
  left: 20px;
  top: 0;
  bottom: 0;
  width: 2px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.timeline-item {
  position: relative;
  margin-bottom: 40px;
  padding-left: 60px;
}

.timeline-marker {
  position: absolute;
  left: 11px;
  top: 0;
  width: 20px;
  height: 20px;
  background: white;
  border: 3px solid #667eea;
  border-radius: 50%;
  z-index: 2;
}

.timeline-content {
  background: white;
  padding: 25px;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
}

.timeline-content:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
}

.job-header {
  margin-bottom: 15px;
}

.job-title {
  font-size: 1.3rem;
  font-weight: 600;
  color: #333;
  margin: 0 0 5px 0;
}

.company-name {
  font-size: 1.1rem;
  color: #667eea;
  font-weight: 500;
  margin-right: 15px;
}

.job-period {
  font-size: 0.9rem;
  color: #6c757d;
  background: #f8f9fa;
  padding: 4px 12px;
  border-radius: 20px;
}

.job-description {
  color: #6c757d;
  line-height: 1.6;
  margin-bottom: 15px;
}

.job-achievements ul {
  list-style: none;
  padding: 0;
  margin: 0 0 15px 0;
}

.job-achievements li {
  color: #6c757d;
  line-height: 1.6;
  margin-bottom: 8px;
  padding-left: 20px;
  position: relative;
}

.job-achievements li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: #4CAF50;
  font-weight: bold;
}

.job-technologies {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.tech-tag {
  background: #f8f9fa;
  color: #667eea;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
}

/* Skills Section */
.skills-content {
  max-width: 1000px;
  margin: 0 auto;
}

.chart-container {
  background: white;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  min-height: 700px;
}

/* Contact Section */
.contact-content {
  max-width: 600px;
}

.contact-content p {
  font-size: 1.1rem;
  color: #6c757d;
  line-height: 1.8;
  margin-bottom: 30px;
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.contact-item {
  display: flex;
  align-items: center;
  padding: 20px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
}

.contact-icon {
  margin-right: 15px;
  font-size: 1.5rem;
  width: 20px;
  text-align: center;
  color: #667eea;
}

.contact-item span {
  color: #333;
  font-weight: 500;
}

/* Responsive Design */
@media (max-width: 1200px) {
  .portfolio-layout {
    grid-template-columns: 1fr 300px;
  }
  
  .sidebar {
    width: 300px;
  }
  
  .main-content {
    padding: 0 40px;
  }
}

@media (max-width: 768px) {
  .portfolio-layout {
    grid-template-columns: 1fr;
  }
  
  .sidebar {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    top: auto;
    width: 100%;
    height: auto;
    border-left: none;
    border-top: 1px solid #e9ecef;
    backdrop-filter: saturate(180%) blur(8px);
    background: rgba(255,255,255,0.92);
    padding-bottom: env(safe-area-inset-bottom);
  }
  
  .sidebar-content {
    padding: 10px 12px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 8px;
  }
  
  .profile-section { display: none; }
  
  .profile-avatar {
    margin-bottom: 0;
  }
  
  .avatar-placeholder {
    width: 50px;
    height: 50px;
    font-size: 1.5rem;
    margin: 0;
  }
  
  .profile-name {
    font-size: 1.1rem;
    margin: 0 0 5px 0;
  }
  
  .profile-title {
    font-size: 0.9rem;
  }
  
  .sidebar-nav { margin-bottom: 0; }
  
  .nav-list {
    display: flex;
    gap: 6px;
    justify-content: space-around;
    width: 100%;
  }
  
  .nav-item {
    margin-bottom: 0;
  }
  
  .nav-link {
    padding: 10px 12px;
    font-size: 0.9rem;
    background: transparent;
  }
  
  .nav-link span:last-child {
    display: none;
  }

  .nav-icon {
    font-size: 1.2rem;
  }
  
  .social-links { display: none; }
  
  .main-content {
    padding: 0 20px;
    padding-bottom: 100px;
  }
  
  .hero-title {
    font-size: 2.5rem;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .stats-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  /* Default: hide toggle, always show details */
  .job-header {
    position: relative;
    cursor: default;
    padding-right: 0;
  }
  .job-title i,
  .job-header::after {
    display: none;
  }
  .job-details {
    max-height: none;
    overflow: visible;
    transition: none;
  }

  /* Mobile & Tablet: show toggle, collapse details by default */
  @media (max-width: 992px) {
    .job-header {
      cursor: pointer;
      padding-right: 30px;
    }
    .job-title i,
    .job-header::after {
      display: inline-block;
    }
    .job-title {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 5px;
    }
    .job-title i {
      font-size: 0.8em;
      transition: transform 0.3s ease;
    }
    .job-details {
      max-height: 0;
      overflow: hidden;
      transition: max-height 0.3s ease-out;
    }
    .job-details.expanded {
      max-height: 1000px;
      transition: max-height 0.5s ease-in;
    }
    .job-header::after {
      content: "Click to expand";
      font-size: 0.8em;
      color: #6c757d;
      margin-top: 5px;
      display: block;
    }
    .job-header:has(+ .job-details.expanded)::after {
      content: "Click to collapse";
    }
  }
    .job-header {
      cursor: pointer;
      padding-right: 30px;
    }

    .job-header:hover {
      opacity: 0.8;
    }

    .job-title {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 5px;
    }

    .job-title i {
      display: inline-block;
      font-size: 0.8em;
      transition: transform 0.3s ease;
    }

    .job-details {
      max-height: 0;
      overflow: hidden;
      transition: max-height 0.3s ease-out;
    }

    .job-details.expanded {
      max-height: 1000px;
      transition: max-height 0.5s ease-in;
    }

    .job-header::after {
      display: block;
      content: "Click to expand";
      font-size: 0.8em;
      color: #6c757d;
      margin-top: 5px;
    }

    .job-header:has(+ .job-details.expanded)::after {
      content: "Click to collapse";
    }
  }


@media (max-width: 576px) {
  .hero-buttons {
    flex-direction: column;
    gap: 10px;
  }

  .hero-buttons .btn {
    width: 100%;
  }
}
</style>
