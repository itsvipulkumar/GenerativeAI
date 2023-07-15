import React, { useEffect, useState } from 'react';
import axios from 'axios';

const apiKey = 'acc_2b7b2c8aa7798cd';
const apiSecret = '2399d7479de2a521e019c4337b8e6e27';
const imageUrl = 'https://www.recordnet.com/gcdn/presto/2021/03/22/NRCD/9d9dd9e4-e84a-402e-ba8f-daa659e6e6c5-PhotoWord_003.JPG?width=1320&height=850&fit=crop&format=pjpg&auto=webp';
// const imageUrl="https://drive.google.com/file/d/1fDnEvdj0BnHQdMkWWg_csYDBt-sNUJAi/view?usp=sharing"
const url = 'https://api.imagga.com/v2/tags?image_url=' + encodeURIComponent(imageUrl);

const ImageTagger = () => {
  const [tags, setTags] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url, {
          auth: {
            username: apiKey,
            password: apiSecret
          }
        });
        const tagsData = response.data.result.tags.map(tag => ({
          name: tag.tag.en,
          confidence: tag.confidence
        }));
        setTags(tagsData);
      } catch (error) {
        console.log(error.response.data);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Image Tags</h1>
      {/* <input type="file" accept="image/*" onChange={handleImageUpload} /> */}
      <ul>
        {tags.map((tag, index) => (
          <li key={index}>
            {tag.name} - Confidence: {tag.confidence}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ImageTagger;
