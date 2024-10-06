import React from 'react'
import pfp from '../imgs/ProfilePic.webp'
import { DiGithubBadge } from "react-icons/di";
import { AiFillLinkedin, AiOutlineMail } from "react-icons/ai";

export const Header = () => {
  return (
    <header className="App-header"> 
      <title>Caden Conde | Portfolio</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      <div className='Header-Container'>
        <span id="0" className='anchor'></span>
        <div className='Intro'>
          <div className='line left first-line'>
            Hello! I am
          </div>
          <div className='line'>
            <span className='name-emphasis'>Caden Conde</span>
          </div>
          <div className='line right'>
            Full-Stack Developer
          </div>
          <div className='header-icons'>
            <a href="mailto:cadenconde@gmail.com"><span className='ico'><AiOutlineMail size={70} /></span></a>
            <a href="https://github.com/CadenConde"><span className='ico'><DiGithubBadge size={70} /></span></a>
            <a href="https://www.linkedin.com/in/caden-conde/"><span className='ico'><AiFillLinkedin size={70} /></span></a>
          </div>
        </div>
        <div className="pfp-container">
          <img className="pfp-img" src={pfp} alt="Profile Pic" />
        </div>
      </div>
    </header>
  )
}
