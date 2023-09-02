import React, { useEffect, useState } from "react";
import { API_KEY } from "../file";
import { HUG_API_KEY }  from '../file'
import lottie from 'lottie-web';
import { defineElement } from 'lord-icon-element';
import { css } from "@emotion/react";
import { Player } from '@lottiefiles/react-lottie-player';
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import ShareIcon from '@mui/icons-material/Share';
import { Auth, db, firestoreCollection } from '../firebase-config'
import { useAuthState } from 'react-firebase-hooks/auth'
import { toast } from "react-hot-toast";
defineElement(lottie.loadAnimation);
function NewGenerateImage() {
    const auth = Auth;
    const [loading, setLoading] = useState(false)
    const navigator = useNavigate()
    const [user] = useAuthState(Auth)
    const [counter, setCounter] = useState(0);
    const [filename, setFilename] = useState('')
    const [btnDisable, setBtnDisable] = useState(false)


    const [caption, setCaption] = useState("");
    const [generatedImage, setGeneratedImage] = useState(null);
    let file_n;
    const handleCaptionChange = (e) => {
        setCaption(e.target.value);
        console.log(e.target.value.length)
        if (e.target.value.length > 0) {
            setBtnDisable(false)
        }
        else
            setBtnDisable(false)
        file_n = e.target.value;
    };

    const generateImage = (event) => {
        setLoading(true);
        setGeneratedImage(null);
        fetch(
            "Remove Comment When want to use it"
            // "https://api-inference.huggingface.co/models/prompthero/openjourney"
            ,
            {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                    "Authorization": `Bearer ${API_KEY}`
                },
                body: JSON.stringify({ inputs: caption }),
            }
        )
            .then((res) => res.blob())
            .then((blob) => {
                const imageUrl = window.URL.createObjectURL(blob);
                setGeneratedImage(imageUrl);
                setLoading(false);
                setFilename(caption)
                setCaption("")
                toast.success('Image Generated.', {
                    style: {
                        border: '1px solid #713200',
                        padding: '16px',
                        color: '#713200',
                    },
                    iconTheme: {
                        primary: '#713200',
                        secondary: '#FFFAEE',
                    },
                });
            });

    };

    const downloadImage = (e) => {
        if (generatedImage) {
            const link = document.createElement("a");
            link.href = generatedImage;
            link.download = filename;
            link.click();
        }
    };

    const shareImage = () => {
        if (generatedImage) {
            if (navigator.share) {
                navigator.share({
                    title: "Generated AI Image",
                    url: generatedImage,
                });
            } else {
                alert("Sharing is not supported in your browser.");
            }
        }
    };


    const override = css`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  `;
    return (
        <div className="image_wrap" >
            <div className="image_wrap_heading">
                <h1>AI-Powered Image Generation</h1>
                <h3>Unleash Your Creativity with AI-Powered Image Generation</h3>
                <div className="demo_images">
                    <img className="demo_text" src="./Images/ss1.png" alt="Screenshot AI" />
                    <img className="demo_img" src="./Images/girl.jpeg" alt="Ai Girl with flower" />
                </div>
            </div>
            <form>
                <div className="left">
                    <input className="input-field" type="text" value={caption} onChange={handleCaptionChange} placeholder="Ex: A sad man setting on the table" />
                    <Button className={btnDisable ? "notgenbtn" : "genbtn"} disabled={btnDisable} onClick={generateImage}>Generate Image</Button>
                </div>
            </form>
            {loading &&
                (
                    <div className="loading-overlay">
                        <Player
                            src='https://assets3.lottiefiles.com/packages/lf20_cqnkwhf1.json'
                            className="player"
                            loop
                            autoplay
                            style={{ height: '300px', width: '300px' }}
                        />
                        {/* <lord-icon className="loading-icon" trigger="loop"
                        delay="0" src="https://cdn.lordicon.com/ymrqtsej.json"  size={400}></lord-icon> */}
                    </div>
                )
            }
            {generatedImage && (

                <div className="image">
                    <div className="inner_img_wrap">
                        <img src={generatedImage} title={caption} alt="Generated AI Image" />
                        <div>

                            <Button className="img_btn" onClick={downloadImage}>Download   <CloudDownloadIcon /></Button>


                            <Button className="img_btn" onClick={shareImage}>Share  <ShareIcon /></Button>

                        </div>
                    </div>
                </div>

            )}




        </div>
    );
}

export default NewGenerateImage;
