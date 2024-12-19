import React from "react";
import { BsFacebook, BsGithub, BsInstagram, BsLinkedin, BsTwitterX } from "react-icons/bs";
import '../App.css';
import people from './OurInfo'
function AboutUs(){
      return (
        <div className="about-us">
        <h1 className="heading" style={{fontSize:'5vh'}}> Devloper of this website: </h1>
          {people.map((person,index) => (
            <div key={person.id} style={{display:'flex',width:'70%',minWidth:'680px'}}>
              <div style={{width:'30%',padding:'5vh 2vw 5vh 3vw'}}>
                <img src={person.image} alt={person.name} style={{width:'95%',border:'#E4959A solid 5px',borderRadius:'38%',boxShadow:'#756767 2px 2px 5px'}}/>
              </div>
              <div style={{width:'70%',display:'flex',flexDirection:'column',justifyContent:'space-between'}}>
                <h1 style={{marginBottom:'.5vh'}}>{person.name}</h1>
                <p style={{margin:'0'}}>{person.about}</p><br/>
                <p style={{margin:'0'}}><b>Phone:</b> {person.phone}</p>
                <p style={{margin:'0'}}><b>Email:</b> {person.email}</p>
                <p><b>Social media:</b></p>
                <div className="icons" style={{margin:'-1vh 0 2vh 0',display:'flex',flexDirection:'row',justifyContent:'space-between',width:'20%'}}>
                  
                  <a href={person.social.linkedin} target="_blank" rel="noopener noreferrer">
                    <BsLinkedin/>
                  </a>
                  <a href={person.social.github} target="_blank" rel="noopener noreferrer">
                    <BsGithub/>
                  </a>
                  <a href={person.social.instagram} target="_blank" rel="noopener noreferrer">
                    <BsInstagram/>
                  </a>
                </div>
                <div>
                  <p> <b>My Portfolio:</b> <a href={person.portfolio}>Click Me</a></p>
                </div>
              </div>
            </div>
          ))}
        </div>
      );
}
export default AboutUs;