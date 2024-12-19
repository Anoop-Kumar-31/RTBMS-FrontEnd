import React from "react";
import {Link}from 'react-router-dom'
import LOGO from '../images/LOGO.png'
function Nav(){
    return(
        [
        <nav>
            <img src={LOGO} className='logo' alt="logo.png" />
            <div>
                <a href="/"><button className='butt'>Home</button></a>
                <a href="/Blogs"><button className='butt'> Blogs</button></a>
                <a href="/AboutUs"><button className='butt'> About Us</button></a>
                <a href="/Contactus"><button className='butt'> Contact Us</button></a>
            </div>
        </nav>,
        <hr/>
        ]
    )
}
export default Nav;