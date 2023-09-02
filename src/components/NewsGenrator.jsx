import React, { useState } from 'react';
import axios from 'axios';
import Card from '@mui/material/Card';

import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import { Box, Button } from '@mui/material';
import { Player } from '@lottiefiles/react-lottie-player';


function NewsGenrator() {
    const [randomNews, setRandomNews] = useState([]);
  
    const [loadding,setLoading]=useState(false);
    

  
    const handleButtonClick = async () => {
        try {
            setLoading(true)
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
                description: truncateDescription(article.description),
                urlToImage: article.urlToImage,
                url: article.url,
                publishedAt: formatDate(article.publishedAt),
                author: article.author,
            }));
            
            setTimeout(() => {
                setRandomNews(news);
                setLoading(false);
            }, 2000);
        } catch (error) {
            console.error('Error fetching news:', error);
            setLoading(false);
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

    const formatDate = dateString => {
        const options = {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
        };
        const date = new Date(dateString);
        return date.toLocaleString('en-US', options);
    };
    const truncateDescription = description => {
        return description.split(' ').slice(0, 25).join(' ') + '...';
    };


    return (
        <div className='news_wrap'>
        <div className='news_top_header'>
                <h1>Your AI-Powered Trendspotter!</h1>
                <p>AI News News Generation is your personal AI trendspotter, scouring the internet to detect emerging trends and breaking news stories.</p>
                
                <Box textAlign='center'>
                    <Button justifyContent="center" onClick={handleButtonClick}>Generate Random News</Button>
                </Box>
                
        </div>
            {
                loadding && (
                    <>
                        <div className="loading-overlay">
                            <Player
                                // src='https://lottie.host/3390e0e6-0440-4d05-adac-886adb0cf4b2/hTdd6fb3a0.json'
                                src="https://lottie.host/d468ea77-44e4-4a50-86e9-60e8eba44f67/9fOkvs3J0w.json"
                                className="player"
                                loop
                                autoplay
                                style={{ height: '400px', width: '400px' }}
                            />
                        </div>
                    </>
                )
            }
            {randomNews.length > 0 && (
                <div className="news_wrapper">

             

         
                <div className="grid-container">
                   
                        {randomNews.map((article, index) => (

                            
                            <Card className="grid-item" sx={{ maxWidth: 345 }}>
                                <small> {article.publishedAt}</small>
                                
                                <h3>{article.title}</h3>

                                <CardMedia
                                    component="img"
                                    height="194"
                                    image={article.urlToImage}
                                    alt="Paella dish"
                                />
                                <CardContent>
                                    <Typography variant="body2" color="text.secondary">
                                        {article.description}
                                    </Typography>
                                </CardContent>
                                <CardActions disableSpacing>
                                    <IconButton aria-label="add to favorites">
                                        <FavoriteIcon />
                                    </IconButton>
                                    <IconButton aria-label="share">
                                        <ShareIcon />
                                    </IconButton>
                                
                                </CardActions>
                            </Card>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
export default NewsGenrator;

