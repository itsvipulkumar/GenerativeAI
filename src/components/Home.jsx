import { Button } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'
import Service from './Service';
import CallMadeIcon from '@mui/icons-material/CallMade';
import InfoIcon from '@mui/icons-material/Info';
// import ChatBot from './ChatBot';
import { Player } from '@lottiefiles/react-lottie-player';
import SpeechToText from './SpeechToText';
import ImageToText from './ImageToText';
import SpeechRecognition from './SpeechRecognition';
import SpeechRecognitionApp from './SpeechRecognition';
import SpeechRecognitionComponent from './SpeechRecognition';
import ImageTagger from './Test'
import EmailGenerate from './EmailGenrate';
import TextToSpeech from './TextToSpeech';
import LandingPage from './LandingPage';
import NewsGenrator from './NewsGenrator';
import DeepAIImageGen from './DeepAIImageGen';
import TextGeneration from './TextGeneration';
import Demo from './Demo';

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

  const text = "This is some text that will be spoken aloud.";

  return (
    <div>
      <div className='hero'>
        <div className="left">
          <div className="texts">
            <h1>Discover the <br /> Art of Possibility</h1>
            <p>Explore the Magic of AI Generative Tools</p>
            <div>
              <Button onClick={handleGetStarted} id="getStarted" size="large">Get Started <CallMadeIcon/></Button>
              <Button size="large">Guide <InfoIcon  /></Button>
            </div>
          </div>

        </div>
        <div className="right">
          <div className="img">
          {/* <lord-icon
    src="https://cdn.lordicon.com/ridbdkcb.json"
    trigger="loop"
    delay="2000"
    colors="primary:#4be1ec,secondary:#cb5eee"
   >
</lord-icon> */}
            <Player
              src='https://assets2.lottiefiles.com/packages/lf20_uJwv9KEHdN.json'
              className="player"
              loop
              autoplay
              style={{ height: '300px', width: '300px' }}
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
     {/* <EmailGenerate/> */}
      {/* <ChatBot/> */}
      {/* <SpeechToText/> */}
      {/* <ImageToText/> */}
      {/* <TextToSpeech text={text} /> */}
      {/* <SpeechRecognitionApp/> */}
      {/* <SpeechRecognitionComponent/> */}
      {/* <NewsGenrator/> */}

{/* <DeepAIImageGen/>     */}
{/* <TextGeneration/> */}
   {/* <TextToSpeech/> */}
      
      {/* <ImageTagger /> */}
      <Demo/>
    </div>
    
  )
}

export default Home
