import React, { useState } from 'react';
import axios from 'axios';

const SpeechToText = () => {
    const [transcript, setTranscript] = useState('');

    const handleAudioUpload = async (event) => {
        const file = event.target.files[0];
        const formData = new FormData();
        formData.append('file', file);

        try {
            const response = await axios.post(
                'https://api.openai.com/v1/speech/direct',
                formData,
                {
                    headers: {
                        'Authorization': `Bearer {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}`,
                        'Content-Type': 'multipart/form-data',
                    },
                }
            );

            setTranscript(response.data.text);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <h2>Speech-to-Text Conversion</h2>
            <input type="file" accept="audio/*" onChange={handleAudioUpload} />
            {transcript && <p>Transcript: {transcript}</p>}
        </div>
    );
};

export default SpeechToText;
