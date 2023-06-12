import * as dotenv from "dotenv";
import { OpenAI } from "langchain";
import { getInput } from './template.ts';

(async () => {
  dotenv.config();

  const model = new OpenAI({
    modelName: "gpt-3.5-turbo",
    openAIApiKey: process.env.OPENAI_API_KEY,
  });

  const res = await model.call(await getInput());

  console.log(res);
})();
