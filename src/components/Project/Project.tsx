import { Container } from "./styles";
import githubIcon from "../../assets/github.svg"
// import DownloadApp from '../../assets/download.png'
import externalLink from "../../assets/external-link.svg"
import ScrollAnimation from "react-animate-on-scroll";


export function Project() {
  return (
    <Container id="project">
      <h2>My Projects</h2>
      <div className="projects">

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"> <title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
              <div className="project-links">
                <a href="https://github.com/ABINAYA0010/analogdigital.github.io" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" /></a>
                <a href="https://abinaya0010.github.io/analogdigital.github.io/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a> </div>
            </header>
            <div className="body">
              <h3>Analog Digital Watch</h3>
              <p> Developed an Analog Digital Watch application using HTML, CSS, and JavaScript, enabling users to view time in both analog and digital formats, set alarms, and access detailed time-related features through an interactive UI, leveraging modern web technologies for an engaging user experience and seamless performance. </p>
 </div>
            <footer> <ul className="tech-list"> <li>HTML</li> <li>CSS</li> <li>JavaScript</li> </ul> </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
              <div className="project-links">
                <a href="https://github.com/ABINAYA0010/tic-tac-toe.github.io" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" /> </a>
                <a href="https://abinaya0010.github.io/tic-tac-toe.github.io/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" /></a>
              </div>
            </header>
            <div className="body">
              <h3>Tic-Tac-Toe Gaming</h3>
              <p>
  Developed an interactive Tic Tac Toe game using HTML, CSS, and JavaScript, enabling users to play against each other or the computer, providing real-time updates and a responsive, engaging user interface, leveraging modern web technologies for an enjoyable and seamless gaming experience.
</p>

            </div>
            <footer>
              <ul className="tech-list">
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a href="https://github.com/ABINAYA0010/product-card.github.io" target="\_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" />
                </a>
                <a href="https://abinaya0010.github.io/product-card.github.io/" target="\_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Product Card Drsign(HeadPhone)</h3>
              <p>
  Developed a visually appealing product card design for headphones using HTML and CSS, featuring responsive layouts, hover effects, and interactive elements to enhance user engagement, leveraging modern web design techniques to create a seamless and attractive user experience.
</p>

            </div>
            <footer>
              <ul className="tech-list">
                <li>HTML</li>
                <li>CSS</li>
                
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://github.com/ABINAYA0010/Squircle-img-converter.github.io" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" />
                </a>
                <a href="https://abinaya0010.github.io/Squircle-img-converter.github.io/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Squircle-Image-Converter</h3>
              <p>
  Developed a Squircle Image Converter using HTML, CSS, and JavaScript, enabling users to upload images and convert them into squircles, featuring a responsive design, interactive elements, and real-time image processing, leveraging modern web technologies to provide a seamless and engaging user experience.
</p>

            </div>
            <footer>
              <ul className="tech-list">
                
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <title>Code</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a href="https://github.com/ABINAYA0010/birthday-remainder-app" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" />
                </a>
                <a href="https://abinaya0010.github.io/birthday-remainder-app/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Birthday-Remainder-App</h3>
              <p>
  Developed a user-friendly Birthday Reminder App using ReactJS, enabling users to add, edit, and delete birthday reminders with intuitive UI components. Implemented real-time notifications, dynamic data handling, and state management for an efficient and engaging user experience, leveraging modern web technologies to ensure reliable performance and seamless user interaction.
</p>

            </div>
            <footer>
              <ul className="tech-list">
                <li>ReactJS</li>
                <li>HTML</li>
                <li>CSS</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
              <a href="https://github.com/ABINAYA0010/resume" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" />
                </a>
                
                <a href="https://abinaya0010.github.io/resume/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Resume Making</h3>
              <p>
  Developed a dynamic Resume Making application using React, enabling users to create, customize, and download professional resumes. Utilized state management, form handling, and component-based architecture to provide a seamless user experience, ensuring efficient performance and intuitive design.
</p>

            </div>
            <footer>
              <ul className="tech-list">
                <li>ReactJS</li>
                
                <li>HTML</li>
                <li>CSS</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

      

      </div>
    </Container>
  );
}