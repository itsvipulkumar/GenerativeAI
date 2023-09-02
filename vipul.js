import got from 'got';
import fs from 'fs';
import FormData from 'form-data';

const apiKey = 'acc_2b7b2c8aa7798cd';
const apiSecret = '2399d7479de2a521e019c4337b8e6e27';
const filePath = './img.jpg';
const formData = new FormData();
formData.append('image', fs.createReadStream(filePath));

(async () => {
    try {
        // Upload the image and get the response with the 'upload_id'
        const response = await got.post('https://api.imagga.com/v2/uploads', {
            body: formData,
            username: apiKey,
            password: apiSecret
        });

        const uploadId = JSON.parse(response.body).result.upload_id;
        console.log('Generated upload_id:', uploadId);

        // Now you can use the 'upload_id' to get the results for the uploaded image
        // For example, to get image tags:
        const tagsResponse = await got.get(`https://api.imagga.com/v2/tags?image_upload_id=${uploadId}`, {
            username: apiKey,
            password: apiSecret
        });

        console.log('Tags:', JSON.parse(tagsResponse.body).result.tags);
    } catch (error) {
        if (error.response && error.response.body) {
            console.log(error.response.body);
        } else {
            console.log(error.message);
        }
    }
})();
