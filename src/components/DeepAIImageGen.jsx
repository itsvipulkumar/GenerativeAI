import React, { useEffect, useState } from 'react';
import deepai from 'deepai'; // Assuming you've installed the deepai package via npm
// import fs from 'fs'
deepai.setApiKey('quickstart-QUdJIGlzIGNvbWluZy4uLi4K');

const DeepAIImageGen = () => {
    const [imageUrl, setImageUrl] = useState('');
    const textFilePath = '/path/to/your/file.txt'; 
    useEffect(() => {
        const convertTextToImage = async () => {
            try {
                const response = await fetch(textFilePath);
                const textContent = await response.text();

                const resp = await deepai.callStandardApi('text2img', {
                    text: "Salman",
                });

                console.log(resp);
                setImageUrl(resp.output_url); // Set the generated image URL in the state
            } catch (error) {
                console.error(error);
                // Handle error if conversion fails
            }
        };

        convertTextToImage();
    }, []);

    return (
        <div>
            {imageUrl ? (
                <img src={imageUrl} alt="Generated Image" />
            ) : (
                <div>Converting text to image...</div>
            )}
        </div>
    );
};

export default DeepAIImageGen;
