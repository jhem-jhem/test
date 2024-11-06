import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import React from 'react'

function App() {
  const [isHeaderActive, setIsHeaderActive] = useState(false);
  const [isGoTopActive, setIsGoTopActive] = useState(false);
  const [isNavActive, setIsNavActive] = useState(false);
  const [isSkillsActive, setIsSkillsActive] = useState(false);
  const [isThemeLight, setIsThemeLight] = useState(
    localStorage.getItem("theme") === "light_theme"
  );

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 10) {
        setIsHeaderActive(true);
        setIsGoTopActive(true);
      } else {
        setIsHeaderActive(false);
        setIsGoTopActive(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("dark_theme", !isThemeLight);
    document.body.classList.toggle("light_theme", isThemeLight);
  }, [isThemeLight]);

  const toggleNav = () => {
    setIsNavActive(!isNavActive);
    document.body.classList.toggle("active");
  };

  const toggleSkills = () => {
    setIsSkillsActive(!isSkillsActive);
  };

  const toggleTheme = () => {
    const newTheme = !isThemeLight;
    setIsThemeLight(newTheme);
    localStorage.setItem("theme", newTheme ? "light_theme" : "dark_theme");
  };
  return (
    <>
      <header className={`header ${isHeaderActive ? "active" : ""}`} data-header>
        <div className="container">
          <h1 className="h1 logo">
            <a href="#">
              AppDev<span>.</span>
            </a>
          </h1>
          <div className="navbar-actions">
            <select name="language" id="lang">
              <option value="en">En</option>
              <option value="ar">Ar</option>
            </select>
            <button
              className="theme-btn"
              aria-label="Change Theme"
              title="Change Theme"
              data-theme-btn=""
              onClick={toggleTheme}
            >
              <span className="icon" />
            </button>
          </div>
          <button
            className="nav-toggle-btn"
            aria-label="Toggle Menu"
            title="Toggle Menu"
            data-nav-toggle-btn=""
          >
            <span className="one" />
            <span className="two" />
            <span className="three" />
          </button>
          <nav className="navbar" data-navbar="">
            <ul className="navbar-list">
              <li>
                <a href="#home" className="navbar-link">
                  Home.
                </a>
              </li>
              <li>
                <a href="#about" className="navbar-link">
                  About.
                </a>
              </li>
              <li>
                <a href="#skills" className="navbar-link">
                  Skills.
                </a>
              </li>
              <li>
                <a href="#portfolio" className="navbar-link">
                  Project.
                </a>
              </li>
              <li>
                <a href="#contact" className="navbar-link">
                  Contact.
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main>
        <article className="container">
          <section className="hero" id="home">
            <figure className="hero-banner">
              <picture>
                <source
                  srcSet="./assets/images/hero-banner.jpg"
                  media="(min-width: 768px)"
                />
                <source
                  srcSet="./assets/images/hero-banner-md.jpg"
                  media="(min-width: 500px)"
                />
                <img
                  src="./assets/images/hero-banner-sm.jpg"
                  alt="A man in a blue shirt with a happy expression"
                  className="w-100"
                />
              </picture>
            </figure>
            <div className="hero-content">
              <h2 className="h2 hero-title">
                Hi! My name is Jemyll P. Ramoya
              </h2>
              <a href="#contact" className="btn btn-primary">
                Get in touch
              </a>
            </div>
            <ul className="hero-social-list">
              <li>
                <a href="#" className="hero-social-link">
                  <ion-icon name="logo-facebook" />
                  <div className="tooltip">Facebook</div>
                </a>
              </li>
              <li>
                <a href="#" className="hero-social-link">
                  <ion-icon name="logo-twitter" />
                  <div className="tooltip">Twitter</div>
                </a>
              </li>
              <li>
                <a href="#" className="hero-social-link">
                  <ion-icon name="logo-linkedin" />
                  <div className="tooltip">Linkedin</div>
                </a>
              </li>
            </ul>
            <a href="#stats" className="scroll-down">
              Scroll
            </a>
          </section>
          <section className="stats" id="stats">
            <ul className="stats-list">
              <li>
                <a href="#" className="stats-card">
                  <div className="card-icon">
                    <img
                      src="./assets/images/stats-card_icon-1.png"
                      alt="Badge icon"
                    />
                  </div>
                  <h2 className="h2 card-title">
                    4 <strong>Years in BSIS</strong>
                  </h2>
                  <ion-icon name="chevron-forward-outline" />
                </a>
              </li>
              <li>
                <a href="#" className="stats-card">
                  <div className="card-icon">
                    <img
                      src="./assets/images/stats-card_icon-2.png"
                      alt="Checkmark icon"
                    />
                  </div>
                  <h2 className="h2 card-title">
                    7 <strong>Completed Projects</strong>
                  </h2>
                  <ion-icon name="chevron-forward-outline" />
                </a>
              </li>
              <li>
                <a href="#" className="stats-card">
                  <div className="card-icon">
                    <img
                      src="./assets/images/stats-card_icon-3.png"
                      alt="Peoples rating icon"
                    />
                  </div>
                  <h2 className="h2 card-title">
                    UI/UX <strong>Designer</strong>
                  </h2>
                  <ion-icon name="chevron-forward-outline" />
                </a>
              </li>
            </ul>
          </section>
          <section className="about" id="about">
            <figure className="about-banner">
              <img
                src="./assets/images/about-banner.png"
                alt="A man in a alice blue shirt with a thinking expression"
                className="w-100"
              />
            </figure>
            <div className="about-content section-content">
              <p className="section-subtitle">About me</p>
              <h2 className="h3 section-title">
                Need a Creative Product? I can Help You!
              </h2>
              <p className="section-text">
              I am a 22-year-old from Cavite and have been a Dean's Lister since my 
              third year of studies. Last year, I participated in a marketing competition 
              during ICT Week and proudly secured second place. I have a passion for 
              programming and UI/UX design, which I apply in my team projects. In my 
              free time, I enjoy the beauty of tulip flowers, and my favorite color is pink.
              </p>
              <div className="btn-group">
                <button className="btn btn-secondary">Hire me</button>
                <button className="btn btn-primary">Download cv</button>
              </div>
            </div>
          </section>
          <section className="skills" id="skills">
            <div className="skills-content section-content">
              <p className="section-subtitle">My skills</p>
              <h2 className="h3 section-title">
                What My Programming Skills and Tools included?
              </h2>
              <p className="section-text">
              I possess solid programming skills and a strong understanding of UI/UX design, 
              which I apply effectively in our capstone team. My proficiency with design tools 
              allows me to create user-friendly interfaces that enhance user experience. 
              I collaborate well with my teammates, ensuring our projects are both functional 
              and visually appealing, making me a valuable asset in our development process.
              </p>
              <div className="skills-toggle" data-toggle-box="">
                <button className="toggle-btn active" data-toggle-btn="">
                  Skills
                </button>
                <button className="toggle-btn" data-toggle-btn="">
                  Tools
                </button>
              </div>
            </div>
            <div className="skills-box" data-skills-box="">
              <ul className="skills-list">
                <li>
                  <div className="skill-card">
                    <div className="tooltip">HTML5</div>
                    <div className="card-icon">
                      <img src="./assets/images/html5.png" alt="HTML5 logo" />
                    </div>
                  </div>
                </li>
                <li>
                  <div className="skill-card">
                    <div className="tooltip">CSS3</div>
                    <div className="card-icon">
                      <img src="./assets/images/css3.png" alt="CSS3 logo" />
                    </div>
                  </div>
                </li>
                <li>
                  <div className="skill-card">
                    <div className="tooltip">JavaScript</div>
                    <div className="card-icon">
                      <img
                        src="./assets/images/javascript.png"
                        alt="JavaScript logo"
                      />
                    </div>
                  </div>
                </li>
                <li>
                  <div className="skill-card">
                    <div className="tooltip">GitHub</div>
                    <div className="card-icon">
                      <img
                        src="./assets/images/github.png"
                        alt="Bootstrap logo"
                      />
                    </div>
                  </div>
                </li>
                <li>
                  <div className="skill-card">
                    <div className="tooltip">Figma</div>
                    <div className="card-icon">
                      <img src="./assets/images/figma.png" alt="Angular logo" />
                    </div>
                  </div>
                </li>
                <li>
                  <div className="skill-card">
                    <div className="tooltip">React</div>
                    <div className="card-icon">
                      <img src="./assets/images/react.png" alt="React logo" />
                    </div>
                  </div>
                </li>
                <li>
                  <div className="skill-card">
                    <div className="tooltip">Python</div>
                    <div className="card-icon">
                      <img src="./assets/images/python.png" alt="Vue logo" />
                    </div>
                  </div>
                </li>
                <li>
                  <div className="skill-card">
                    <div className="tooltip">Visual Studio Code</div>
                    <div className="card-icon">
                      <img src="./assets/images/vs-code.png" alt="Firebase logo" />
                    </div>
                  </div>
                </li>
                <li>
                  <div className="skill-card">
                    <div className="tooltip">Azure</div>
                    <div className="card-icon">
                      <img src="./assets/images/azure.png" alt="PugJs logo" />
                    </div>
                  </div>
                </li>
                <li>
                  <div className="skill-card">
                    <div className="tooltip">Npm</div>
                    <div className="card-icon">
                      <img src="./assets/images/npm.png" alt="Npm logo" />
                    </div>
                  </div>
                </li>
                <li>
                  <div className="skill-card">
                    <div className="tooltip">Photoshop</div>
                    <div className="card-icon">
                      <img
                        src="./assets/images/photoshop.png"
                        alt="Photoshop logo"
                      />
                    </div>
                  </div>
                </li>
                <li>
                  <div className="skill-card">
                    <div className="tooltip">Adobe XD</div>
                    <div className="card-icon">
                      <img src="./assets/images/adobe-xd.png" alt="Adobe XD logo" />
                    </div>
                  </div>
                </li>
              </ul>
              <ul className="tools-list">
                <li>
                  <div className="skill-card">
                    <div className="tooltip">Ajax</div>
                    <div className="card-icon">
                      <img src="./assets/images/ajax.png" alt="Ajax logo" />
                    </div>
                  </div>
                </li>
                <li>
                  <div className="skill-card">
                    <div className="tooltip">Git</div>
                    <div className="card-icon">
                      <img src="./assets/images/git.png" alt="Git logo" />
                    </div>
                  </div>
                </li>
                <li>
                  <div className="skill-card">
                    <div className="tooltip">VS Code</div>
                    <div className="card-icon">
                      <img src="./assets/images/vs-code.png" alt="VS Code logo" />
                    </div>
                  </div>
                </li>
                <li>
                  <div className="skill-card">
                    <div className="tooltip">Slack</div>
                    <div className="card-icon">
                      <img src="./assets/images/slack.png" alt="Slack logo" />
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </section>
          <section className="project" id="portfolio">
            <ul className="project-list">
              <li>
                <div className="project-content section-content">
                  <p className="section-subtitle">My Works</p>
                  <h2 className="h3 section-title">
                    See My Works Which Will Amaze You!
                  </h2>
                  <p className="section-text">
                    We develop the best quality website that serves for the
                    long-term. Well-documented, clean, easy and elegant interface
                    helps any non-technical clients.
                  </p>
                </div>
              </li>
              <li>
                <a href="#" className="project-card">
                  <figure className="card-banner">
                    <img
                      src="./assets/images/project-1.jpg"
                      className="w-100"
                      alt="A macintosh on a yellow background."
                    />
                  </figure>
                  <div className="card-content">
                    <h3 className="h4 card-title">Capstone Project</h3>
                    <time className="publish-date" dateTime="2022-04">
                      2024
                    </time>
                  </div>
                </a>
              </li>
              <li>
                <a href="#" className="project-card">
                  <figure className="card-banner">
                    <img
                      src="./assets/images/project-2.jpg"
                      className="w-100"
                      alt="On a Blue background, a Wacom and a mouse."
                    />
                  </figure>
                  <div className="card-content">
                    <h3 className="h4 card-title">Marketing Competition</h3>
                    <time className="publish-date" dateTime="2022-04">
                      April 2024
                    </time>
                  </div>
                </a>
              </li>
              <li>
                <a href="#" className="project-card">
                  <figure className="card-banner">
                    <img
                      src="./assets/images/project-3.jpg"
                      className="w-100"
                      alt="A Cassette tape on a mellow apricot background."
                    />
                  </figure>
                  <div className="card-content">
                    <h3 className="h4 card-title">Portfolio</h3>
                    <time className="publish-date" dateTime="2022-04">
                      October 2023
                    </time>
                  </div>
                </a>
              </li>
              <li>
                <a href="#" className="project-card">
                  <figure className="card-banner">
                    <img
                      src="./assets/images/project-4.jpg"
                      className="w-100"
                      alt="Blue digital watch on a dark liver background."
                    />
                  </figure>
                  <div className="card-content">
                    <h3 className="h4 card-title">Final Project</h3>
                    <time className="publish-date" dateTime="2022-04">
                      December 2023
                    </time>
                  </div>
                </a>
              </li>
              <li>
                <a href="#" className="project-card">
                  <figure className="card-banner">
                    <img
                      src="./assets/images/project-5.jpg"
                      className="w-100"
                      alt="On a dark liver background, Airport luggage car carrying a luggage."
                    />
                  </figure>
                  <div className="card-content">
                    <h3 className="h4 card-title">Web App Activity</h3>
                    <time className="publish-date" dateTime="2022-04">
                      2022
                    </time>
                  </div>
                </a>
              </li>
              <li>
                <a href="#" className="project-card">
                  <figure className="card-banner">
                    <img
                      src="./assets/images/project-6.jpg"
                      className="w-100"
                      alt="On a yellow background, a digital watch and a glass."
                    />
                  </figure>
                  <div className="card-content">
                    <h3 className="h4 card-title">Final Project</h3>
                    <time className="publish-date" dateTime="2022-04">
                      June 2024
                    </time>
                  </div>
                </a>
              </li>
              <li>
                <a href="#" className="project-card">
                  <figure className="card-banner">
                    <img
                      src="./assets/images/projetc-7.jpg"
                      className="w-100"
                      alt="A fujifilm instant camera on a dark electric blue background."
                    />
                  </figure>
                  <div className="card-content">
                    <h3 className="h4 card-title">Midterm Project</h3>
                    <time className="publish-date" dateTime="2022-04">
                      November 2023
                    </time>
                  </div>
                </a>
              </li>
              <li>
                <button className="load-more">Load more work</button>
              </li>
            </ul>
          </section>
          <section className="contact" id="contact">
            <div className="contact-content section-content">
              <p className="section-subtitle">Contact</p>
              <h2 className="h3 section-title">
                Have You Any Project? Please Drop a Message
              </h2>
              <p className="section-text">
                Get in touch and let me know how i can help. Fill out the form and
                i’ll be in touch as soon as possible.
              </p>
              <ul className="contact-list">
                <li className="contact-list-item">
                  <div className="contact-item-icon">
                    <ion-icon name="location-outline" />
                  </div>
                  <div className="wrapper">
                    <h3 className="h4 contact-item-title">Address:</h3>
                    <address className="contact-info">
                     Halifax St. Highview hills, Apalit, Pampanga
                    </address>
                  </div>
                </li>
                <li className="contact-list-item">
                  <div className="contact-item-icon">
                    <ion-icon name="call-outline" />
                  </div>
                  <div className="wrapper">
                    <h3 className="h4 contact-item-title">Phone:</h3>
                    <a href="tel:09338712073" className="contact-info">
                      09338712073
                    </a>
                    <a href="tel:09935957423" className="contact-info">
                      09935957423
                    </a>
                  </div>
                </li>
                <li className="contact-list-item">
                  <div className="contact-item-icon">
                    <ion-icon name="mail-outline" />
                  </div>
                  <div className="wrapper">
                    <h3 className="h4 contact-item-title">Email:</h3>
                    <a href="jhempr15@gmail.com" className="contact-info">
                      jhempr15@gmail.com
                    </a>
                    <a href="jemyllramoya@student.laverdad.edu.ph" className="contact-info">
                      jemyllramoya@student.laverdad.edu.ph
                    </a>
                  </div>
                </li>
                <li>
                  <ul className="contac-social-list">
                    <li>
                      <a href="#" className="contact-social-link">
                        <div className="tooltip">Facebook</div>
                        <ion-icon name="logo-facebook" />
                      </a>
                    </li>
                    <li>
                      <a href="#" className="contact-social-link">
                        <div className="tooltip">Twitter</div>
                        <ion-icon name="logo-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="#" className="contact-social-link">
                        <div className="tooltip">Linkedin</div>
                        <ion-icon name="logo-linkedin" />
                      </a>
                    </li>
                    <li>
                      <a href="#" className="contact-social-link">
                        <div className="tooltip">Youtube</div>
                        <ion-icon name="logo-youtube" />
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <form action="" className="contact-form">
              <div className="form-wrapper">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <div className="input-wrapper">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required=""
                    placeholder="e.g John Doe"
                    className="input-field"
                  />
                  <ion-icon name="person-circle" />
                </div>
              </div>
              <div className="form-wrapper">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <div className="input-wrapper">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required=""
                    placeholder="e.g johndoe@mail.com"
                    className="input-field"
                  />
                  <ion-icon name="mail" />
                </div>
              </div>
              <div className="form-wrapper">
                <label htmlFor="phone" className="form-label">
                  Phone
                </label>
                <div className="input-wrapper">
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    required=""
                    placeholder="Phone Number"
                    className="input-field"
                  />
                  <ion-icon name="call" />
                </div>
              </div>
              <div className="form-wrapper">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <div className="input-wrapper">
                  <textarea
                    name="message"
                    id="message"
                    required=""
                    placeholder="Write message..."
                    className="input-field"
                    defaultValue={""}
                  />
                  <ion-icon name="chatbubbles" />
                </div>
              </div>
              <button type="submit" className="btn btn-primary">
                Send
              </button>
            </form>
          </section>
        </article>
      </main>
      <footer className="footer">
        <div className="container">
          <p className="h1 logo">
            <a href="#">
              AppDev<span>.</span>
            </a>
          </p>
          <p className="copyright">
            © 2024 <a href="#">codewithsadee</a>. All rights reserved
          </p>
        </div>
      </footer>
      <a href="#top" className="go-top" data-go-top="" title="Go to Top">
        <ion-icon name="arrow-up" />
      </a>
    </>
  )
}

export default App