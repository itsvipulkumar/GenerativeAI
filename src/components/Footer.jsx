import React from 'react'
import { Link } from 'react-router-dom'
import FacebookIcon from '@mui/icons-material/Facebook'; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMugHot } from "@fortawesome/free-solid-svg-icons";
import { faAnglesDown } from "@fortawesome/free-solid-svg-icons";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
const Footer = () => {
    return (
        <>

            <div className="footer_wrap">
                <div className='up'>
                    <div className='left'>
                         <img src="./Images/logo.png" alt="logo" /> <h3>Generative AI</h3>
                    </div>
                    {/* <h4>Generative AI</h4> */}
                    <div className='anchor_links'>
                        <a href="#">Tools</a>
                        <a href="#">About us</a>
                        <a href="#">blog</a>
                        <a href="#">Contact us</a>
                    </div>
                </div>
                <hr />
                <div className='down'>
                    <small> © {new Date().getFullYear()} Generative AI <span class="bold_dot">·</span> All Rights Reserved</small>
                    <div className='social_icons'>
                        <GitHubIcon className='icons g'/>
                        <LinkedInIcon className='icons l'/>
                        <WhatsAppIcon className='icons w'/>
                    </div>
                   
                </div>
                <p className='madeby'>Designed and Developed by <a target='_blank' href="https://itsaboutvipul.web.app/">Vipul</a> With <FontAwesomeIcon icon={faMugHot} /> <span></span></p>
               
            </div>
        </>
    )
}

export default Footer
