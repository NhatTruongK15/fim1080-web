import React, { useEffect, useState } from 'react'
import './Nav.css'

function Nav() {
    const [show, handleShow] = useState(false);

    const transitionNavBar = () =>{
        if(window.scrollY > 100){
            handleShow(true);
        } else{
            handleShow(false);
        }
    }

    useEffect(()=> {
    window.addEventListener("scroll",transitionNavBar);
    return ()=> window.removeEventListener("scroll", transitionNavBar);
    },[]);
    
  return (
    <div className={`nav ${show &&"nav_black"}`}>
        <div className='nav_contents'>

            <img 
            className='nav_logo' 
            src="https://fim1080.com/assets/img/phim1080.png" 
            alt=''></img>

            <img 
            className='nav_avatar' 
            src='https://ih0.redbubble.net/image.618369215.1083/flat,1000x1000,075,f.u2.jpg' 
            alt=''></img>
        </div>
        
       
    </div>
  )
}

export default Nav