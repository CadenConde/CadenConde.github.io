import React from 'react'
import usePageProgress from '../hooks/usePageProgress';
import { IoMenuOutline } from "react-icons/io5";

const expand = () => {
  console.log("EXPANDED!!!")
  const burger = document.getElementById("burger");
  
  if (burger.className === 'Nav-Links-Burger') {
    burger.className += ' expanded';
  }
  else { 
    burger.className = "Nav-Links-Burger";
  }
};

export const NavBar = () => {
  const completion = usePageProgress();

  

  return (
    <div className='nav-bar'>
      <div className='nav-container'>
        <div className='Corner-Title'><a href='#0'>Caden Conde</a></div>

        <div className='Nav-Links'>
          <a href="#2">About</a>
          <a href="#3">Projects</a>
          <a href="#4">Skills</a>
          <a href="#5">Contact</a>
        </div>

        <div className='Nav-Links-Collapse'>
          <IoMenuOutline onClick={() => expand()} size={50} />
          <div className='Nav-Links-Burger' id="burger">
            <a href="#2">About</a><br/>
            <a href="#3">Projects</a><br/>
            <a href="#4">Skills</a><br/>
            <a href="#5">Contact</a><br/>
          </div>
        </div>

      </div>
      <span style={{transform: `translateX(${completion-100}%)`}} className='Scroll-Indicator' />
    </div>
  )
}
