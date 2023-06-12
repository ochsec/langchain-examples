import * as dotenv from "dotenv";
import { OpenAI } from "langchain";
// import { getInput } from './template.ts';
import { getChain } from './llmChain.ts';

(async () => {
  dotenv.config();

  const model = new OpenAI({
    modelName: "gpt-3.5-turbo",
    openAIApiKey: process.env.OPENAI_API_KEY,
  });

  const chain = getChain(model);
  const res = await chain.call({ product: 'loud motorcyles' });

  console.log(res);
})();
