import React, { useEffect } from 'react';
import Paralleldots from 'paralleldots';

const Demo = () => {
    useEffect(() => {
        // Setting your API key
        Paralleldots.apiKey = 'wdNlnLV2jrfBaYf7XZpzrPGyNOMbQ3hKLcPPT2CUwqc';

        // Examples
        const text = "Did you hear the latest Porcupine Tree song? It's rocking!";
        Paralleldots.emotion(text)
            .then(emotion => {
                console.log(emotion);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    return <div>Check the console for the emotion generated.</div>;
};

export default Demo;
