import React, { useState } from 'react';

const EmailGenerate = () => {
    const [message, setMessage] = useState('');
    const [reply, setReply] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleInputChange = (e) => {
        setMessage(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const automaticReply = await generateAutomaticReply(message);
            setReply(automaticReply);
        } catch (error) {
            console.error('Error:', error);
        }

        setIsLoading(false);
    };

    const generateAutomaticReply = async (message) => {
        const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer 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` // Replace with your ChatGPT API key
            },
            body: JSON.stringify({
                model:"gpt-3.5-trubo",
                messages: [{ role: 'system', content: 'You are a user' }, { role: 'user', content: message }],
                max_tokens: 50, // Adjust the response length as needed
                temperature: 0.7 // Adjust the temperature to control response randomness
            })
        });

        const data = await response.json();
        return data.choices[0].message.content;
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Message:
                    <textarea value={message} onChange={handleInputChange} />
                </label>
                <button type="submit" disabled={isLoading}>
                    {isLoading ? 'Generating...' : 'Generate Reply'}
                </button>
            </form>
            {reply && <div>{reply}</div>}
        </div>
    );
};

export default EmailGenerate;
