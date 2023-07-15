import React, { useState } from 'react';

const TextToSpeech = () => {
    const [text, setText] = useState('');

    const handleInputChange = (event) => {
        setText(event.target.value);
    };

    const handleButtonClick = () => {
        const speech = new SpeechSynthesisUtterance(text);
        speechSynthesis.speak(speech);
    };

    const handleDownloadAudio = () => {
        const tts = new SpeechSynthesisUtterance(text);
        const speechSynthesisUrl = URL.createObjectURL(
            new Blob([tts.text], { type: 'audio/wav' })
        );
        const link = document.createElement('a');
        link.href = speechSynthesisUrl;
        link.download = 'converted_audio.wav';
        link.click();
        URL.revokeObjectURL(speechSynthesisUrl);
    };

    return (
        <div>
            <div>
                <textarea
                    value={text}
                    onChange={handleInputChange}
                    placeholder="Enter text..."
                />
            </div>
            <button onClick={handleButtonClick}>Listen</button>
            <button onClick={handleDownloadAudio}>Download Audio</button>
        </div>
    );
};

export default TextToSpeech;
