// const axios = require('axios');

// const encodedParams = new URLSearchParams();
// encodedParams.set('in', 'how are you?');
// encodedParams.set('op', 'in');
// encodedParams.set('cbot', '1');
// encodedParams.set('SessionID', 'RapidAPI1');
// encodedParams.set('cbid', '1');
// encodedParams.set('key', 'RHMN5hnQ4wTYZBGCF3dfxzypt68rVP');
// encodedParams.set('ChatSource', 'RapidAPI');
// encodedParams.set('duration', '1');

// const options = {
//     method: 'POST',
//     url: 'https://robomatic-ai.p.rapidapi.com/api',
//     headers: {
//         'content-type': 'application/x-www-form-urlencoded',
//         'X-RapidAPI-Key': 'dd500c7313mshb369e8c172c5378p1936f1jsnf617bc9b8085',
//         'X-RapidAPI-Host': 'robomatic-ai.p.rapidapi.com'
//     },
//     data: encodedParams,
// };

// try {
//     const response =await axios.request(options);
//     console.log(response.data);
// } catch (error) {
//     console.error(error);
// }

import got from 'got';
import { GPT2Tokenizer, GPT2LMHeadModel } from 'transformers';

async function generateText(prompt, model_name = "gpt2") {
    // Load pre-trained model and tokenizer
    const model = await GPT2LMHeadModel.fromPretrained(model_name);
    const tokenizer = await GPT2Tokenizer.fromPretrained(model_name);

    // Tokenize the input text
    const inputIds = tokenizer.encode(prompt);

    // Generate text
    const data = {
        inputs: inputIds,
        max_length: 100,  // Maximum number of tokens in the generated text
        num_return_sequences: 1,  // Number of texts to generate
        pad_token_id: tokenizer.eosTokenId,  // End of sequence token
        top_k: 50,  // Higher value encourages more diverse outputs (can be adjusted)
        temperature: 0.7,  // Controls the randomness of the generated text
    };

    const response = await got.post(`https://api.huggingface.co/models/${model_name}`, {
        json: data,
        responseType: 'json',
    });

    const responseBody = response.body;
    const generatedIds = responseBody[0].generated_text;
    const generatedText = tokenizer.decode(generatedIds, { skipSpecialTokens: true });
    return generatedText;
}

(async () => {
    const prompt = "Once upon a time";
    const model_name = "gpt2"; // Replace this with the desired model name
    const generatedText = await generateText(prompt, model_name);
    console.log(generatedText);
})();
