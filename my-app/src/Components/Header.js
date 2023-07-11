import React from 'react'
import App from '../App'



function Header() {
  return (
    <div>
        <div className='header'>
            <h3>Behance</h3>
            <h3>For You</h3>
            <h3>Discover</h3>
            <h3>Hire</h3>
            <h3>Assets</h3>
            <h3>Jobs</h3>
            <input placeholder='Search...'></input>
            <input placeholder='Share Your Work'></input>
            <i class="fa-solid fa-envelope"></i>
            <i class="fa-solid fa-bell"></i>
            <i class="fa-solid fa-user"></i>
            <i class="fa-brands fa-linkedin"></i>
        </div>

        <div className='body-tag'>
            <div className='first'>
                <div className='img-tag'>
                    <img src="vikky.jpg" className='img-prop'/>
                    <h3>techtutor - Online IT School</h3>
                    <h3>Vikky Vinez . Follow</h3>
                </div>
                <div className='middle'>
                    <div className='middle-curve'>
                        <div className='edu'>
                            <div>
                            <h3 className='h1'>Education/IT</h3>
                            </div>
                            <div>
                                <h3 className='h2'>UI/UX</h3>
                                <h3 className='h3'>2023</h3>
                            </div>    
                        </div>
                        <h1 className='h1-tag'>techtutor</h1>
                        <h4 className='h4-tag'>
                            it is an online school that helps you turn your passion into a career. Acquire knowledge from professionals all over the world.
                        </h4>
                    </div>
                </div>
            </div>
            <div className='sidebar'>
                <img src="vikky.jpg" className='img-pop'/>
                <i class="fa-solid fa-envelope">Hire Me</i>
                <i class="fa-solid fa-user">Vikky Vinez</i>
                <i class="fa-solid fa-thumbs-up">Appreciate</i>
            </div>
        </div>
    </div>
  )
}

export default Header;
