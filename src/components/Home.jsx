import { Button } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'
import Service from './Service';
import CallMadeIcon from '@mui/icons-material/CallMade';
import InfoIcon from '@mui/icons-material/Info';
// import ChatBot from './ChatBot';
import { Player } from '@lottiefiles/react-lottie-player';
import Footer from './Footer';



const Home = () => {

  const [showIcon, setShowIcon] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setShowIcon(false);
      window.removeEventListener('scroll', handleScroll);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const scrollRef = useRef(null);

  const handleGetStarted = () => {
    scrollRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };


  return (
    <div>
  
      <div className='hero'>
        <div className="left">
          <div className="texts">
            <h1>Discover the <br /> Art of Possibility</h1>
            <p>Explore the Magic of AI Generative Tools</p>
            <div>
              <Button onClick={handleGetStarted} id="getStarted" size="large">Get Started <CallMadeIcon /></Button>
              <Button size="large">Guide <InfoIcon /></Button>
            </div>
          </div>

        </div>
        <div className="right">
          <div className="img">
            <Player
              src='https://assets2.lottiefiles.com/packages/lf20_uJwv9KEHdN.json'
              // src="https://lottie.host/fbf816e0-05db-431e-8f8c-5755e1aa7da3/JXl0T2zWR4.json"
              className="player"
              loop
              autoplay
              style={{ height: '400px', width: '400px' }}
            />
            {/* <img src=../Images/hero.svg" alt="hero ai image" /> */}
          </div>
        </div>
      </div>
      <div className={`scroll-indicator ${showIcon ? 'show' : 'hide'}`}>
        <div className="mouse">
          <div className="wheel"></div>
        </div>
      </div>

      <Service scrollRef={scrollRef} />
{/* <DeepAIImageGen/> */}

     <Footer/>
    </div>

  )
}

export default Home
