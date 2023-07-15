import React, { useState } from 'react';
import {Configuration, OpenAIApi} from 'openai';
import {OPENAI_API_KEY} from '../file'

const configuration=new Configuration({
    apiKey:process.env.OPENAI_API_KEY
})
function ChatBot() {
    const [messages, setMessages] = useState([]);
    const [inputText, setInputText] = useState('');

    const openAiInstance = new OpenAIApi(OPENAI_API_KEY);

    const handleInputChange = (e) => {
        setInputText(e.target.value);
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        if (inputText.trim() === '') return;

        const userMessage = {
            role: 'user',
            content: inputText,
        };

        setMessages((prevMessages) => [...prevMessages, userMessage]);
        setInputText('');

        try {
            const response = await openAiInstance.createChatCompletion({
                engine: 'gpt-3.5-trubo',
                prompt: 'User: ' + inputText + '\nAI: ',
                maxTokens: 100,
                temperature: 0.6,
                n: 1,
                stop: '\n',
            });

            const chatbotMessage = {
                role: 'system',
                content: response.choices[0].text.trim(),
            };
            setMessages((prevMessages) => [...prevMessages, chatbotMessage]);
        } catch (error) {
            console.log('Error:', error);
        }
    };

    return (
        <div className="App">
            <h1>Chatbot</h1>
            <div className="message-container">
                {messages.map((message, index) => (
                    <div key={index} className={`message ${message.role}`}>
                        {message.content}
                    </div>
                ))}
            </div>
            <form onSubmit={handleFormSubmit}>
                <input
                    type="text"
                    placeholder="Type your message..."
                    value={inputText}
                    onChange={handleInputChange}
                />
                <button type="submit">Send</button>
            </form>
        </div>
    );
}

export default ChatBot;
