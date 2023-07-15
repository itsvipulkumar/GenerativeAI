import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Button } from '@mui/material'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Link } from 'react-router-dom';
import { Auth } from '../firebase-config'
import { useAuthState } from 'react-firebase-hooks/auth'


const LandingPage = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.innerHeight * 0.8; // Adjust this value to control when the box appears

            if (window.pageYOffset > scrollPosition) {
                setIsVisible(true);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`animated-box ${isVisible ? 'visible' : ''}`}>
            <h2>Animated Box</h2>
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
    );
};

export default LandingPage;
