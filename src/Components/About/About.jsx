import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import about_img1 from '../../assets/about.jpg'
import play_icon from '../../assets/play-icon.png'

const About = () => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about_img1} alt="" className='about-img' />
            <img src={play_icon} alt="" className='play-icon' />
        </div>
        <div className="about-right">
            <h3>About College</h3>
            <h2>Nurturing Tommorow's Leader's Today</h2>
            <p>Embark on a transformative educational journey with our college's comprehensive education programs. Our cutting -edge curriculum is designed to empower students with the knowledge , skill, and experiences needed to excel in the dynamic field of education. </p>
            <p>With a focus on innovation , hands-on learning, and personalized mentorship, our programs prepare aspiring educators to make a meaningful impacts in classrooms, schools, and communities</p>
            <p>Whether you aspire a become a teacher, administrator, counselor, or educational leader, our diverse range of programs offers the perfect pathway to achieve your goals and unlock your full potential in shaping the future of education. </p>
        </div>

    </div>
  )
}

export default About