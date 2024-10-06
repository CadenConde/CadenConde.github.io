import React from 'react'
import { COLORS } from '../constants/constants'

export const AboutMe = () => {
  return (
    <div className="About-Section" id='About' style={{ backgroundColor: COLORS.bgSecond }}> 
      <div className='Section-Name'>About Me</div>
      <span id="2" className='anchor'></span>
      <div className='About-Container'>
        <div className='About-Text'>
        <p>My name is Caden and I am currently studying <span className='emphasis'>Computer and Information Science</span> at <span className='emphasis'>The Ohio State University.</span></p>
        <p>I’m interested in all parts of the computer science field from cybersecurity to web development to robotics. I’ve worked on databases, websites, mobile applications, and games and placed in CTFs (Capture The Flag), programming competitions, web development, and robotics competitions. </p>
        <p>Beyond the tech world, I am also part of OSU’s <span className='emphasis'>Entrepreneurship and Innovation</span> Scholars program, and I love the startup landscape. In my free time I like playing chess, learning Mandarin, and playing music. </p>
        <p>I'm currently searching for <span className='emphasis'>jobs or internships.</span> Interested in hearing more about what I do? Feel free to send an email!</p>
      </div>
      </div>
    </div>
  )
}
