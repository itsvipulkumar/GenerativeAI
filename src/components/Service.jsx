import React from 'react'
import { Button, Fab } from '@mui/material'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

import { Link } from 'react-router-dom';
// import { Auth } from '../firebase-config'
// import { useAuthState } from 'react-firebase-hooks/auth'

import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
const Service = ({ scrollRef }) => {
  // const [user] = useAuthState(Auth)


  return (
    <div ref={scrollRef}>
      <div className="Service">
        <div className="box">
          <div className="text">
            <h2>AI Image Generator</h2>
            <p>Welcome to our AI Image Generation app, where imagination becomes tangible. Create awe-inspiring visuals with the power of artificial intelligence. From stunning landscapes to unique abstract art,Unleash your creativity and witness the magic unfold before your eyes."</p>
            <div className='box_buttons'>
              <Link className="box_buttons_link" to={'/generate-image'}><Button className="tryNow">Try Now <KeyboardArrowRightIcon /></Button></Link>
              <Link className="box_buttons_link" to="/more"><Fab className='fab' color="primary" aria-label="add">
                <MoreHorizIcon />
              </Fab></Link>
            </div>
          </div>
          <div className="image">
            <img src="./Images/img1.png" alt="Generated image 1" />
          </div>
        </div>
        <div className="box">
          <div className="text">
            <h2>Discover Objects Availability</h2>
            <p>Upload any image, and our AI algorithms will identify objects with remarkable accuracy, saving you time and effort.</p>
            <div className='box_buttons'>
              <Link className="box_buttons_link" to={'/image-tagger'}><Button className="tryNow">Try Now <KeyboardArrowRightIcon /></Button></Link>
              <Link className="box_buttons_link" to="/more">
                <Fab className='fab' color="primary" aria-label="add">
                  <MoreHorizIcon sx={{}} />
                </Fab></Link>
            </div>
          </div>
          <div className="image">
            <img src="./Images/img2.png" alt="Generated image 1" />
          </div>
        </div>
        {/* <div className="box">
          <div className="text">
            <h2>Top News Generation</h2>
            <p>Welcome to our AI Image Generation app, where imagination becomes tangible. Create awe-inspiring visuals with the power of artificial intelligence. From stunning landscapes to unique abstract art, our app empowers you to effortlessly transform your ideas into captivating images. Unleash your creativity and witness the magic unfold before your eyes."</p>
            <div className='box_buttons'>
              <Link className="box_buttons_link" to={'/news-generation'}><Button className="tryNow">Try Now <KeyboardArrowRightIcon /></Button></Link>
              <Link className="box_buttons_link" to="/more"><Fab color="primary" className='fab' aria-label="add">
                <MoreHorizIcon />
              </Fab></Link>
            </div>
          </div>
          <div className="image">
            <img src="./Images/img3.png" alt="" />
          </div>
        </div> */}

      </div>
    </div>
  )
}

export default Service
