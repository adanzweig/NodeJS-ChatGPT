require('dotenv').config()
async function connectToChatGPT(prompt,message){
    const url = 'https://api.openai.com/v1/chat/completions';
    const apiKey = process.env.API_KEY;

    const headers = {
        'Content-Type':'application/json',
        'Authorization':`Bearer ${apiKey}`
    }


    const data = {
        model: 'gpt-3.5-turbo',
        messages: [
            { role: 'system', content: prompt},
            { role: 'user', content: message}
        ]
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

const message = 'Tell me something interesting about the Mutants from the X-men';
const prompt = 'You are someone that loves Marvel Universe.';

Promise.resolve(connectToChatGPT(message,prompt)).then(
    body=> console.log(body)
)