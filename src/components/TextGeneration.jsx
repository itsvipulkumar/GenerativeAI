import React, { useState } from 'react';
import deepai from 'deepai'; // Make sure to install the deepai package via npm or yarn

deepai.setApiKey('quickstart-QUdJIGlzIGNvbWluZy4uLi4K');

const TextGeneration = () => {
    const [prompt, setPrompt] = useState('');
    const [generatedText, setGeneratedText] = useState('');
    const [loading, setLoading] = useState(false);

    const generateText = async () => {
        setLoading(true);
        try {
            const resp = await deepai.callStandardApi('text-generator', {
                text: prompt,
            });
            setGeneratedText(resp.output);
        } catch (error) {
            console.error(error);
        }
        setLoading(false)
    };
    

    return (
        <div>
            <input
                type="text"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
            />
            <button onClick={generateText}>{loading?"Loading....":"Generate Text"}</button>
            <p>{generatedText}</p>
        </div>
    );
};

export default TextGeneration;
