// require('dotenv').config()
// import dotenv from 'dotenv';
// dotenv.config();
async function connectToChatGPT(apiKey,messages){
    const url = 'https://api.openai.com/v1/chat/completions';

    const headers = {
        'Content-Type':'application/json',
        'Authorization':`Bearer ${apiKey}`
    }


    const data = {
        model: 'gpt-3.5-turbo',
        messages
        // messages: [
        //     { role: 'system', content: prompt},
        //     { role: 'user', content: message}
        // ]
    }

    try{
        const response = await fetch(url,{
            method:'POST',
            headers,
            body: JSON.stringify(data)
        });
        const responseData = await response.json();
        return responseData.choices[0].message.content;
    }catch(error){
        console.error('Error:',error);
    }
}

// const message = 'Tell me something interesting about the Mutants from the X-men';
// const prompt = 'You are someone that loves Marvel Universe.';
// const apiKey = process.env.API_KEY;

// Promise.resolve(connectToChatGPT(apiKey,message,prompt)).then(
//     body=> console.log(body)
// )
module.exports = {
    connectToChatGPT
}