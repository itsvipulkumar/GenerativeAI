const axios = require('axios');

const encodedParams = new URLSearchParams();
encodedParams.set('in', 'how are you?');
encodedParams.set('op', 'in');
encodedParams.set('cbot', '1');
encodedParams.set('SessionID', 'RapidAPI1');
encodedParams.set('cbid', '1');
encodedParams.set('key', 'RHMN5hnQ4wTYZBGCF3dfxzypt68rVP');
encodedParams.set('ChatSource', 'RapidAPI');
encodedParams.set('duration', '1');

const options = {
    method: 'POST',
    url: 'https://robomatic-ai.p.rapidapi.com/api',
    headers: {
        'content-type': 'application/x-www-form-urlencoded',
        'X-RapidAPI-Key': 'dd500c7313mshb369e8c172c5378p1936f1jsnf617bc9b8085',
        'X-RapidAPI-Host': 'robomatic-ai.p.rapidapi.com'
    },
    data: encodedParams,
};

try {
    const response =await axios.request(options);
    console.log(response.data);
} catch (error) {
    console.error(error);
}