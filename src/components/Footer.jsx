import React from 'react'
import "../Css/Footer.css";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiWebpack } from "react-icons/si";


function Footer() {
    return (
        <>
        <div class="footer">
            <div class="footercards">
                <p class="footercont">Menu Links</p>
                <hr class="line" />
                <p><a href="#" class="cont">Home</a></p>
                <p><a href="#services" class="cont">Services</a></p>
                <p><a href="#products" class="cont">Products</a></p>
                <p><a href="#team" class="cont">Team</a></p>
                <p><a href="#reviews" class="cont">Reviews</a></p>
            </div>
            <div class="footercards">
                <p class="footercont">Our Service</p>
                <hr class="line" />
                <p class="cont">Web Design</p>
                <p class="cont">Web Development</p>
            </div>
            <div class="footercards">
                <p class="footercont">Information</p>
                <hr class="line" />
                <p class="cont">About Us</p>
                <p class="cont">Delivery Information</p>
                <p class="cont">Privacy Policy</p>
                <p class="cont">About Us</p>
                <p class="cont">Terms &amp; Conditions</p>
            </div>
            <div className="footercards1">
      <p className="footercont">Contact Us</p>
      <hr className="line" />
      <div className='social'>
      <a href="https://www.instagram.com/arunaakash_114/" target="_blank" rel="noopener noreferrer" className='icon'>
        <h6 className='large-icon'><FaInstagram /></h6>
      </a>
      <a href="https://www.linkedin.com/in/arun-kumar-m-020669275/" target="_blank" rel="noopener noreferrer" className='icon'>
        <h6 className='large-icon'><FaLinkedin /></h6>
      </a>
      <a href="https://arun12334.github.io/AK-Portfolio-IT-02/" target="_blank" rel="noopener noreferrer" className='icon'>
        <h6 className='large-icon'><SiWebpack /></h6>
      </a>
    </div>
    </div>
  
        </div>
        <div className='footer1'>
        <p style={{ color: "white", textAlign: "center", margintop: "20px" }}>Copyright © 2024, All Rights Reserved @Arun Kumar M</p>



        </div>
        </>
    )
}

export default Footer