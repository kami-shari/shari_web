import { useEffect } from 'react';

function HomePage() {
  const handleScroll = () => {
    const sections = ['home', 'portfolio', 'cv'];
    
    sections.forEach(section => {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        const offset = section === 'portfolio' ? 250 : 150;
        const isVisible = rect.top <= offset && rect.bottom >= offset;
        const link = document.querySelector(`[href="#${section}"]`);
        if (link) {
          if (isVisible) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        }
      }
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      <header className="header">
        <button className="burger-menu" onClick={() => document.querySelector('.nav-box')?.classList.toggle('active')}>
          <div className="burger">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
        <nav className="nav-box">
          <div className="nav-links">
            <a href="#home" className="nav-link active">Home</a>
            <a href="#portfolio" className="nav-link">Portfolio</a>
            <a href="#cv" className="nav-link">CV</a>
            <a href="/imprint" className="nav-link">Impressum</a>
          </div>
        </nav>
      </header>

      <section id="home">
        <div className="home-container">
          <div className="intro-section">
            <div className="intro-left">
              <img src="/img/bewerbungsfoto_weiss_2024.jpg" alt="CV photo" className="profile-photo" />
              <h3 className="job-title">Junior IT Project Coordinator</h3>
            </div>
            <div className="intro-right">
              <div className="name-title">
                <span>My name is</span>
                <span>Kami Shari</span>
              </div>
              <h2 className="introducing-title">And it's a pleasure to meet you!</h2>
              <p className="intro-text">
                My ambition is to dive into project management, combining my extensive frontend experience with my past 
                professional skills to bridge tech and business, creating solid, impactful, and user-friendly products while 
                thriving in agile environments for flexibility and efficiency.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="page2-section">
        <section className="skills-container">
            <div className="skills-section">
              <h2>My Skills</h2>
              <ul>
                <li><span>•</span> TypeScript, JavaScript, React, CSS/HTML</li>
                <li><span>•</span> Supabase, Node.js</li>
                <li><span>•</span> Agile Project Management <br /> 
                                  (Certified Professional Scrum Master I - PSM I) - February 2025</li>
                <li><span>•</span> With 11 years of leadership experience in management and key account roles, I combine business knowledge with tech expertise to drive successful projects.</li>
              </ul>
            </div>
        </section>
      </section>

      <section id="portfolio" className="portfolio-section">
        <h2>Portfolio</h2>
        <div className="portfolio-grid">
          <div className="portfolio-item">
            <div className="portfolio-zen-images">
              <img src="/img/zen-1-screenshot.png" alt="Zen App Screenshot 1" />
              <img src="/img/zen-3-screenshot.png" alt="Zen App Screenshot 3" />
              <img src="/img/zen-2-screenshot.png" alt="Zen App Screenshot 2" />
            </div>
            <div className="portfolio-title">ZEN App</div>
            <div className="portfolio-slogan">Yoga for Mind & Body</div>
            <p>This project was developed as the final project of my six-month coding bootcamp in collaboration with two other participants. Built within eight days, Zen is a yoga app that offers a curated selection of yoga music and tutorials for various yoga poses. The app features a login function, allowing users to like and save their favorite content for a personalized experience.</p>
            <div className="tech-stack">
                <div className="tech-item">
                    <img src="/img/tech_logos/html-css-logo.png" alt="HTML/CSS" />
                    <span className="tech-label">CSS/HTML</span>
                </div>
                <div className="tech-item">
                    <img src="/img/tech_logos/react-logo.png" alt="React" />
                    <span className="tech-label">React</span>
                </div>
                <div className="tech-item">
                    <img src="/img/tech_logos/typescript-logo.jpg" alt="TypeScript" />
                    <span className="tech-label">TypeScript</span>
                </div>
                <div className="tech-item">
                    <img src="/img/tech_logos/supabase-logo.png" alt="Supabase" />
                    <span className="tech-label">Supabase</span>
                </div>
            </div>
            <div className="portfolio-links">
              <a href="https://zen-yoga-app.netlify.app/" className="portfolio-link" target="_blank" rel="noopener noreferrer">Live Demo</a>
              <a href="https://github.com/kami-shari/zen" className="portfolio-link" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
          </div>
          <div className="portfolio-item">
            <div className="project-image-container">
              <img src="/img/recipe-world-screenshot.png" alt="Recipe World Screenshot" />
            </div>
            <div className="portfolio-title">Recipe World</div>
            <div className="portfolio-slogan">Cook, Share, Inspire – Your Recipe Community</div>
            <p>A recipe website with a registration and login feature, allowing users to create their own recipes and remove them from their personal list. I developed this as a solo project in seven days while becoming familiar with Supabase.</p>
            <div className="tech-stack">
                <div className="tech-item">
                    <img src="/img/tech_logos/html-css-logo.png" alt="HTML/CSS" />
                    <span className="tech-label">CSS/HTML</span>
                </div>
                <div className="tech-item">
                    <img src="/img/tech_logos/react-logo.png" alt="React" />
                    <span className="tech-label">React</span>
                </div>
                <div className="tech-item">
                    <img src="/img/tech_logos/typescript-logo.jpg" alt="TypeScript" />
                    <span className="tech-label">TypeScript</span>
                </div>
                <div className="tech-item">
                    <img src="/img/tech_logos/supabase-logo.png" alt="Supabase" />
                    <span className="tech-label">Supabase</span>
                </div>
            </div>
            <div className="portfolio-links">
                <a href="https://recipe-world-l.netlify.app/" className="portfolio-link" target="_blank" rel="noopener noreferrer">Live Demo</a>
                <a href="https://github.com/kami-shari/recipe_world" className="portfolio-link" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
          </div>
          <div className="portfolio-item">
            <div className="project-image-container">
              <img src="/img/pokemon-screenshot.png" alt="Pokemon API Screenshot" />
            </div>
            <div className="portfolio-title">Pokemon API</div>
            <div className="portfolio-slogan">Gotta Fetch ’em All</div>
            <p>This website allows you to explore all 1,302 Pokémon, with the ability to listen to their original cry sounds on the detail page. Additionally, you can visit the types page to discover and categorize Pokémon by their respective types. This project was developed in collaboration with two other classmates, and we had three days to complete it.</p>
            <div className="tech-stack">
                <div className="tech-item">
                    <img src="/img/tech_logos/html-css-logo.png" alt="HTML/CSS" />
                    <span className="tech-label">CSS/HTML</span>
                </div>
                <div className="tech-item">
                    <img src="/img/tech_logos/react-logo.png" alt="React" />
                    <span className="tech-label">React</span>
                </div>
                <div className="tech-item">
                    <img src="/img/tech_logos/typescript-logo.jpg" alt="TypeScript" />
                    <span className="tech-label">TypeScript</span>
                </div>
            </div>
            <div className="portfolio-links">
              <a href="https://pokemon-api-ten-taupe.vercel.app/" className="portfolio-link" target="_blank" rel="noopener noreferrer">Live Demo</a>
              <a href="https://github.com/kami-shari/pokemon_API" className="portfolio-link" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
          </div>
        </div>
        <div className="more-projects">
          <p>You can find more projects on my GitHub page:</p>
          <div className="portfolio-links">
            <a href="https://github.com/kami-shari/" className="portfolio-link" target="_blank" rel="noopener noreferrer">Visit GitHub</a>
          </div>
        </div>
      </section>

      <section id="cv" className="cv-section">
        <p className="cv-text">
        Feel free to download my CV to explore my professional background and expertise.
        </p>
        <a href="/kami-shari-cv.pdf" className="button-download" download>Download Curriculum Vitae</a>
        <p className="footer-text">
        © 2025 Kami Shari. All rights reserved.
        </p>
      </section>
    </div>
  );
}

export default HomePage;
