import React from 'react'
import Heroimg from '../Assets/Hero.jpeg'
import hackathon from '../Assets/hackathonchamps.jpeg'
import coordinator from '../Assets/Coordinator.jpeg'
import research from '../Assets/Research.jpeg'
import './Hero.css'
import { Link } from 'react-router-dom'
const Hero = () => {
  return (
    <div>
      <div className="hero_page">
        <div className="left">
            <h1 id='hi'>Hi,<i class="fa-solid fa-handshake"></i></h1>
            <h1>I am Dev </h1>
            <p>A Fronted Web Developer</p>
            <Link style={{textDecoration:'none'}} to="/projects"><button>View my work</button></Link>
        </div>
        <div className="right">
            <img src={Heroimg} alt="hero" />
            <h2>A CODE Blooded Developer !</h2>
        </div>

      </div>

      <div className="know-me">
        <h2><u>Get to know me</u></h2>
        <p>Hi, I am Dev Patil, 
I'm a self-taught frontend web developer specializing in HTML, CSS, JavaScript, React, Bootstrap, and Tailwind. Passionate about exploring new technologies, I am currently pursuing a Computer Science degree. My skills and enthusiasm drive me to continually enhance and apply my web development expertise.</p>
      </div>

    <div className="tech-stack">
        <div id='header-tech'>
        <h2><u>My Tech Stack</u></h2>
        </div>
        <div className="tech">
            <div className="tech-logo"><i class="fa-brands fa-html5"></i><h3>HTML 5</h3></div>
            <div className="tech-logo"><i class="fa-brands fa-css3-alt"></i><h3>CSS</h3></div>
            <div className="tech-logo"><i class="fa-brands fa-js"></i><h3>Java Script</h3></div>
            <div className="tech-logo"><i class="fa-brands fa-react"></i><h3>React</h3></div>
            <div className="tech-logo"><i class="fa-brands fa-bootstrap"></i><h3>Bootstrap</h3></div>
            <div className="tech-logo"><i class="fa-brands fa-python"></i><h3>Python</h3></div>
        </div>
    </div>

    <div className="my_works">
    <h2><u>Extracurriculars and Achivements</u></h2>
      <div className="hackathon-winners">
        <div id="left">
          <h2>Illuminati Hackathon Winners !</h2>
          <img src={hackathon} alt="hackathon" />
        </div>
        <div id="right">
          <p>Our team triumphed at the college-organized Illuminati Hackathon, where we developed a groundbreaking logistics management website. This versatile platform is designed to streamline the transportation of goods for businesses of all sizes, enhancing efficiency through sophisticated tracking, scheduling, and real-time updates, thereby revolutionizing logistics operations across various industries.</p>
        </div>
      </div>
      <div className="Coordinator">
        <div id="left">
          <h2>Appreciation letter form University!</h2>
          <img src={coordinator} alt="coordinator" />
        </div>
        <div id="right">
          <p>I was deeply honored to receive an appreciation letter from my university for my role as coordinator of the college's tech events. This recognition not only validates my efforts in organizing successful events but also fuels my passion for contributing to the vibrant tech community on campus.</p>
        </div>
      </div>
      <div className="Research">
        <div id="left">
          <h2>Presented Research Paper in Conference!</h2>
          <img src={research} alt="coordinator" />
        </div>
        <div id="right">
          <p>
My friend Haard and I presented a research paper on enhancing color perception for individuals with color vision deficiency using a CGAN (Conditional Generative Adversarial Network) model. Our innovative approach leverages deep learning to improve color differentiation, offering a new horizon in assistive technology for the visually impaired.</p>
        </div>
      </div>
    </div>

    </div>
    
  )
}

export default Hero
