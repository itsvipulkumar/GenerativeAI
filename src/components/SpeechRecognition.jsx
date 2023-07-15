import React, { useState, useEffect } from 'react';

const SpeechRecognitionComponent = () => {
    const [transcript, setTranscript] = useState('');
    const [isListening, setIsListening] = useState(false);
    const [downloadLink, setDownloadLink] = useState(null);
    const [transcripts, setTranscripts] = useState([]);

    
    let recognition;

    useEffect(() => {
        recognition = new window.webkitSpeechRecognition();
        recognition.continuous = true;
        recognition.onresult = (event) => {
            const currentTranscript = event.results[event.results.length - 1][0].transcript;
            setTranscript(currentTranscript);
        };

        recognition.onerror = (event) => {
            console.error('Speech recognition error:', event.error);
            setIsListening(false);
        };

        recognition.onend = () => {
            setIsListening(false);
        };

        return () => {
            if (recognition) {
                recognition.onresult = null;
                recognition.onerror = null;
                recognition.onend = null;
            }
        };
    }, []);

    const startSpeechRecognition = () => {
        if (!isListening && recognition) {
            setIsListening(true);
            recognition.start();
        }
    };

    const stopSpeechRecognition = () => {
        if (isListening && recognition) {
            setIsListening(false);
            recognition.onresult = null;
            recognition.onerror = null;
            recognition.onend = null;
            recognition.stop();
            // createDownloadLink();
        }
    };

    const handleDownload = () => {
        const element = document.createElement('a');
        const file = new Blob([transcript], { type: 'text/plain' });
        element.href = URL.createObjectURL(file);
        element.download = 'speech.txt';
        document.body.appendChild(element);
        element.click();
        setDownloadLink(element.href);
        document.body.removeChild(element);
    };

    const createDownloadLink = () => {
        const element = document.createElement('a');
        const file = new Blob([transcripts.join(' ')], { type: 'text/plain' });
        element.href = URL.createObjectURL(file);
        element.download = 'speech.txt';
        document.body.appendChild(element);
        setDownloadLink(element.href);
        document.body.removeChild(element);
    };
    return (
        <div>
            <button onClick={startSpeechRecognition} disabled={isListening}>
                Start Listening
            </button>
            <button onClick={stopSpeechRecognition} disabled={!isListening}>
                Stop Listening
            </button>
            <p>{transcript}</p>
            {transcript && (
                <div>
                    <button onClick={handleDownload}>Download Speech</button>
                    {downloadLink && <a href={downloadLink}>Download File</a>}
                </div>
            )}
            <p>{transcripts.join(' ')}</p>
            {downloadLink && <a href={downloadLink}>Download File</a>}
        </div>
    );
};

export default SpeechRecognitionComponent;
