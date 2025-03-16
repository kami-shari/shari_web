function HomePage() {
  return (
    <div>
      <header>
        <nav className="nav-box">
          <img src="/heart.svg" alt="logo" className="logo" />
          <a href="https://www.google.de/" className="button-header">Take Action</a>
        </nav>
      </header>

      <section>
        <div className="home-container">
        <div className="intro-section">
          <h3 className="introducing-title">It's a pleasure to meet you!</h3>
          <img src="/bewerbungsfoto_weiss_2024.jpg" alt="CV photo" className="profile-photo" />
          <div className="intro-window">
            <h1 className="name-title">My Name is Kami Shari</h1>
            <h2 className="job-title">Junior IT Project Coordinator</h2>
          </div>
          <div className="quote-window">
            <p className="introducing-text">
              My ambition is to dive into project management, combining my extensive frontend experience with my past 
              professional skills to bridge tech and business, creating solid, impactful, and user-friendly products while 
              thriving in agile environments for flexibility and efficiency.
            </p>
          </div>
        </div>
        </div>
      </section>

      <section className="page2-section">
        <div className="skills-section">
          <h2>My Skills</h2>
          <ul>
            <li><span>•</span> TypeScript, JavaScript, React, CSS/HTML</li>
            <li><span>•</span> Supabase, Node.js</li>
            <li><span>•</span> Agile Project Management <br /> 
                (Certified Professional Scrum Master I - PSM I )</li>
            <li><span>•</span> With 11 years of leadership experience in management and key account roles, I combine business knowledge with tech expertise to drive successful projects.</li>
          </ul>
        </div>
      </section>

      <section>
        <img src="/stat-workers-color.svg" alt="heads-logo" className="general-logos" />
        <h2 className="page3-title">2.5 Million</h2>
        <p className="page3-text">
          domestic Workers <span>in the united states</span>
        </p>
      </section>

      <section>
        <img src="/stat-pay-color.svg" alt="pay-money" className="general-logos" />
        <p className="page4-text">
          70% are <span>paid less than</span>
        </p>
        <h2 className="page4-title">$13/HR</h2>
      </section>

      <section>
        <img src="/stat-health-color.svg" alt="health-logo" className="general-logos" />
        <h2 className="page5-title">65%</h2>
        <p className="page5-text">
          Have no <span>health insurance</span>
        </p>
      </section>

      <section>
        <p className="page6-text">
          DOMESTIC WORKERS ARE <span>THE UNSUNG HEROINES OF OUR CHILDHOODS AND FAMILIES.</span>
          THEY ARE NANNIES, HOUSE CLEANERS, AND CARE WORKERS — MOSTLY WOMEN OF COLOR AND
          IMMIGRANTS. DESPITE THEIR IMPORTANT ROLES, THEIR WORK OFTEN GOES UNRECOGNIZED AND
          THEIR INDUSTRY UNREGULATED. TAKE ACTION AND HELP US SHIFT THE NARRATIVE.
        </p>
      </section>

      <section className="page7-family-photo"></section>

      <section className="page8-last-page">
        <p className="page8-text">
          YOU CAN HELP IMPROVE WORKING CONDITIONS FOR DOMESTIC WORKERS.
        </p>
        <a href="https://www.google.de" className="button-donate">Donate</a>
        <p className="last-text">
          Website inspired from the film <span>ROMA</span>
        </p>
      </section>
    </div>
  );
}

export default HomePage;
