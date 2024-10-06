import React from 'react'
import { ProjCard } from './ProjCard'


export const Projects = () => {
  return (
    <div className='Section-Title'>
      <div className='Section-Name'>Projects</div>
      <span id="3" className='anchor'></span>
      <div className='Proj-Container'>
        <ProjCard src="ProfilePic.webp" title="This Site!" gitLink="https://github.com/CadenConde/CadenConde.github.io" projID='1'>
          This responsive portfolio website was developed in React JS
        </ProjCard>
        <ProjCard src="EulerLaser.webp" title="Project Euler" gitLink="https://github.com/CadenConde/Euler-202-Solution" projID='2'>
          A site hosting over 900 math problems designed to be solved with programming. As of 2024, I have solved 101 (using Java).
          Check out my progress <a href="https://projecteuler.net/progress=Chad1234" className='Euler-Link'>here</a>  or click the link for an example solution
        </ProjCard>
        <ProjCard src="MinigolfSite.webp" title="My Adventure Golf Site" gitLink="https://github.com/CadenConde/My-Golf-Site" projID='3'>
          In 2023 worked with a team of 4 to redesign a website for a local minigolf business. I worked mostly on the backend in php and SQL
        </ProjCard>
        <ProjCard src="PythonCode.webp" title="Science Olympiad Robot Tour" gitLink="https://github.com/CadenConde/SciOly-Robot-Tour-Code" projID='4'>
          I built and programmed a robot to navigate a maze using python and a Raspberry Pi. 
        </ProjCard>
        <ProjCard src="ChromeExt.webp" title="Patristocrat Chrome Extension" gitLink="https://github.com/CadenConde/PuzzleBaronPatExtension" projID='5'>
          A fun little chrome extension made to help my Science Olympiad teammates practice for the Codebuster event.
        </ProjCard>
        <ProjCard src="FOMO.webp" title="FOMO" gitLink="#" projID='6'>
          Multi-Platform mobile app being developed in React Native, coming soon!
        </ProjCard>
      </div>
    </div>
  )
}
