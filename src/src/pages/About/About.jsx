import React from 'react';
import "./About.css";
import aboutImg from "../../images/about-img.jpg";

const About = () => {
  return (
    <section className='about'>
      <div className='container'>
        <div className='section-title'>
          <h2>About</h2>
        </div>

        <div className='about-content grid'>
          <div className='about-img'>
            <img src = {aboutImg} alt = "" />
          </div>
          <div className='about-text'>
            <h2 className='about-title fs-26 ls-1'>About Mapoma Book Library</h2>
            <p className='fs-17'>Welcome to Mapoma Book Library, where the world of knowledge opens its doors to you. Established with a passion for learning and a commitment to fostering a love for literature, we strive to be your premier destination for literary exploration and intellectual growth.</p>
            <p className='fs-17'>Our Story:

Mapoma Book Library was born out of a shared vision among bibliophiles and tech enthusiasts who believed in the transformative power of literature and the boundless possibilities that technology could offer. With a collective goal to make the world's literary treasures accessible to everyone, we embarked on a journey to create a virtual haven for book lovers.</p>
            <p className='fs-17'>Our Mission:

At Mapoma Book Library, our mission is to democratize access to knowledge and nurture a global community of lifelong learners. We are dedicated to curating an extensive collection of diverse and thought-provoking books, ensuring that our virtual shelves cater to a wide range of interests, genres, and cultures. Through the seamless integration of technology, we aim to break down barriers and make reading a delightful and immersive experience for all.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
