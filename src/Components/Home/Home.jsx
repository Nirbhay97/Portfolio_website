import React from "react";
import "./Home.css";
import video from '../../Assets/video.mp4';
import {ImLinkedin} from 'react-icons/im';
import {BsGithub} from 'react-icons/bs';
import {FaTwitterSquare} from 'react-icons/fa';
import personalImg from '../../Assets/personaImg.png';
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';

const style1 = { fontSize: "1.7em" };

const Home =()=>{

    return (
        <section className="home-section glass-effect">
         
         <div className="aboutSection">
            <div className="Video">
                 <video src = {video} muted autoPlay loop type = "video/mp4"></video>
            </div>
            <div className="Intro" id="Intro">
            {/* left name side */}
            <div className="i-left">
                <div className="i-name">
               
                <span style={style1}>Hy! I Am</span>
                <span>Nirbhay</span>
                <span className="name-subtext">
                    Frontend Developer with high level of experience in web designing
                    and development, producting the Quality work
                </span>
                </div>
                <button className="button i-button">Hire me</button>
                {/* social icons */}
                <div className="i-icons">
                   <a href="www.google.com" ><ImLinkedin style={style1} className="social-media-icons"/></a>
                   <a href="www.google.com" ><BsGithub style={style1} className="social-media-icons" /></a> 
                   <a href="www.google.com" ><FaTwitterSquare style={style1} className="social-media-icons"/></a> 
                </div>
            </div>
            {/* right image side */}
            <div className="i-right">
                <img className="img-personal1" src={Vector1} alt="" />
                <img className="img-personal2" src={Vector2} alt="" />
                <img className="img-personal3" src={personalImg} alt="" />
       
            </div>
            </div>
            </div>   
       </section> 
    )
}

export default Home
