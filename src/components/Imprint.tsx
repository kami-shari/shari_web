function Imprint() {
  return (
    <div className="imprint-container">
      <header className="header">
        <nav className="nav-box">
          <div className="nav-links">
            <a href="/" className="nav-link">Home</a>
            <a href="/#portfolio" className="nav-link">Portfolio</a>
            <a href="/#cv" className="nav-link">CV</a>
            <a href="/imprint" className="nav-link active">Impressum</a>
          </div>
        </nav>
      </header>

      <div className="imprint-content">
        <h1>Legal Notice</h1>
        <div className="contact-info">
          <img src="/img/contact-info.svg" alt="Contact Information" className="contact-svg" />
        </div>
        <div className="legal-text">
          <h2>Disclaimer</h2>
          <p>The contents of our pages have been created with the utmost care. However, we cannot guarantee the contents' accuracy, completeness, or topicality. According to statutory provisions, we are furthermore responsible for our own content on these web pages. In this context, please note that we are not obliged to monitor the transmitted or saved information of third parties, or investigate circumstances pointing to illegal activity. Our obligations to remove or block the use of information under generally applicable laws remain unaffected by this.</p>
          <p>Responsibility for the content of external links (to web pages of third parties) lies solely with the operators of the linked pages. No violations were evident to us at the time of linking. Should any legal infringement become known to us, we will remove the respective link immediately.</p>
          <h2>Copyright</h2>
          <p>Our web pages and their contents are subject to copyright law. Unless expressly permitted by law, every form of utilizing, reproducing, or processing contents subject to copyright protection on our web pages requires the prior consent of the respective owner of the rights. Individual reproductions of a work are only allowed for private use. The materials from these pages are copyrighted and any unauthorized use may violate copyright laws.</p>
          <h2>Data Protection</h2>
          <p>Please refer to our separate Data Protection Policy for information on how we handle your personal data.</p>
        </div>

        <footer className="imprint-footer">
          <p>Website designed by Kami Shari © 2025</p>
          <a href="/" className="back-button">Back to Home</a>
        </footer>
      </div>
    </div>
  );
}

export default Imprint;
