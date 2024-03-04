import 'dotenv/config'

import OpenAI from 'openai'

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
})

async function main() {
    const completion = await openai.chat.completions.create({
      messages: [
        { role: "system", content: "You are a helpful assistant." },
        { role: "user", content: "can you make me three beginner level coding challenges with test cases"}
    ],
      model: "gpt-3.5-turbo",
    });
  
    console.log(completion.choices[0]);
  }
  
  main();