import React from "react";
import "./Home.css";
import video from '../../Assets/video.mp4';
import {ImLinkedin} from 'react-icons/im';
import {BsGithub} from 'react-icons/bs';
import {FaTwitterSquare} from 'react-icons/fa';

const style1 = { fontSize: "1.7em" };

const Home =()=>{

    return (
        <section className="home-section glass-effect">
          
         <div className="aboutSection">
            <div className="Video">
                 <video src = {video} muted autoPlay loop type = "video/mp4"></video>
            </div>
            <div className="about-text">
                <h1 className="about-name">
                    Hello 👋...
                </h1>
                <h1 className="about-name">
                    I am Nirbhay
                </h1>
                <h4 className="name-subtext">
                   Code and Code...
                   I am a big fan of nikitha mattupalli, she is just an idle person i ever met !
                </h4>
                <h1 >
                   <a href="www.google.com" ><ImLinkedin style={style1} className="social-media-icons"/></a>
                   <a href="www.google.com" ><BsGithub style={style1} className="social-media-icons" /></a> 
                   <a href="www.google.com" ><FaTwitterSquare style={style1} className="social-media-icons"/></a> 
                </h1>
            </div>   
        </div>    
       </section> 
    )
}

export default Home