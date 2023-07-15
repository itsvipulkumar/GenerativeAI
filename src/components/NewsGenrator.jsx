import React, { useState } from 'react';
import axios from 'axios';

function NewsGenrator() {
    const [randomNews, setRandomNews] = useState([]);

    const handleButtonClick = async () => {
        try {
            const apiKey = '3b523ea09fc04065aa5179eb240f0889';
            const response = await axios.get(
                `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`
            );
            const articles = response.data.articles;
            console.log(articles)
            const randomIndexes = generateRandomIndexes(articles.length);
            const randomArticles = randomIndexes.map(index => articles[index]);
            const news = randomArticles.map(article => ({
                title: article.title,
                description: article.description
            }));
            setRandomNews(news);
        } catch (error) {
            console.error('Error fetching news:', error);
        }
    };

    const generateRandomIndexes = length => {
        const indexes = [];
        while (indexes.length < 3) { // Generate 3 random indexes (adjust as needed)
            const randomIndex = Math.floor(Math.random() * length);
            if (!indexes.includes(randomIndex)) {
                indexes.push(randomIndex);
            }
        }
        return indexes;
    };

    return (
        <div>
            <button onClick={handleButtonClick}>Generate Random News</button>
            {randomNews.length > 0 && (
                <div>
                    <h2>Random News Articles:</h2>
                    <ul>
                        {randomNews.map((article, index) => (
                            <li key={index}>
                                <h3>{article.title}</h3>
                                <p>{article.description}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default NewsGenrator;

   
    // const newsapi = new NewsAPI('3b523ea09fc04065aa5179eb240f0889')
   