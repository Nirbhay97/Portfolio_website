import React, {useState} from "react";
import "./Navbar.css";
import { AiFillCloseCircle } from "react-icons/ai";
import { TfiLayoutGrid3Alt } from "react-icons/tfi";


const Navbar = () => {

  const [active, setActive] = useState("n-right");
  const [active1, setActive1] = useState("n-list");
  const [active3, setActive3] = useState("");
  
  const showNav = ()=>{
   
    setActive("n-right-1");
    setActive1("n-list-1");
    setActive3("ul-class");
  }

  const removeNav = ()=>{
    setActive("n-right");
    setActive1("n-list");
  }
  return (
    <div className="n-wrapper" id="Navbar">
      {/* left */}
      <div className="n-left">
        <div className="n-name">Nickky</div>
        
      </div>
      {/* right */}
      <div className={active}>
        <div className={active1}>
          <ul style={{ listStyleType: "none" }}>
            <li>

              Home
            
            </li>
            <li>
              Competencies
            </li>
            <li>
             
                Experience
             
            </li>
            <li>
           
                Protfolio
           
            </li>
            <li>
             
                Testimonial
              
            </li>
          </ul>

        </div>
        
        <button className="button n-button">Contact</button>
        <div onClick={removeNav} className="closeNavbar">
          <AiFillCloseCircle className="icon" />
        </div>
      </div>
      <div onClick={showNav} className="toggleNavbar">
          <TfiLayoutGrid3Alt className="icon" />
      </div>
    </div>
  );
};

export default Navbar;