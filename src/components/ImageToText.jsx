import React, { useState, useEffect } from 'react';
import { createWorker } from 'tesseract.js';

function ImageToText() {
    const [selectedImage, setSelectedImage] = useState(null);
    const [recognizedText, setRecognizedText] = useState('');

    useEffect(() => {
        if (selectedImage) {
            recognizeImage(selectedImage);
        }
    }, [selectedImage]);

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        setSelectedImage(URL.createObjectURL(file));
    };

    const recognizeImage = async (imageUrl) => {
        const worker = createWorker({
            logger: (m) => console.log(m), // Optional logger function
        });

        await worker.load();
        await worker.loadLanguage('eng');
        await worker.initialize('eng');

        const { data: { text } } = await worker.recognize(imageUrl);
        setRecognizedText(text);

        await worker.terminate();
    };

    return (
        <div>
            <input type="file" accept="image/*" onChange={handleImageUpload} />
            {selectedImage && <img src={selectedImage} alt="Selected" />}
            <p>Recognized Text:</p>
            <textarea rows="10" value={recognizedText} readOnly />
        </div>
    );
}

export default ImageToText;
