import React from 'react'
import { Button } from '@mui/material'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Link } from 'react-router-dom';
import { Auth } from '../firebase-config'
import { useAuthState } from 'react-firebase-hooks/auth'


const Service = ({scrollRef}) => {
    const [user] = useAuthState(Auth)

    const handleSignInGoogle = () => {
        
    }
  return (
      <div ref={scrollRef}>
          <div className="Service">
              <div className="box">
                  <div className="text">
                      <h2>AI Image Generator</h2>
                      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit labore incidunt consectetur! Dolor accusamus earum ab laudantium consequuntur? Quia ipsa ullam esse. Pariatur.</p>
                      <Link to={user ?'/generate-image':"/login"}><Button className="tryNow">Try Now <KeyboardArrowRightIcon /></Button></Link>
                  </div>
                  <div className="image">
                    <img src="./Images/img1.png" alt="Generated image 1" />
                  </div>
              </div>
              <div className="box">
                  <div className="text">
                      <h2>AI Image Generator</h2>
                      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit labore incidunt consectetur! Dolor accusamus earum ab laudantium consequuntur? Quia ipsa ullam esse. Pariatur.</p>
                  </div>
                  <div className="image">
                    <img src="" alt="" />
                  </div>
              </div>
              <div className="box">
                  <div className="text">
                      <h2>AI Image Generator</h2>
                      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit labore incidunt consectetur! Dolor accusamus earum ab laudantium consequuntur? Quia ipsa ullam esse. Pariatur.</p>
                  </div>
                  <div className="image">
                    <img src="" alt="" />
                  </div>
              </div>
          </div>
    </div>
  )
}

export default Service
