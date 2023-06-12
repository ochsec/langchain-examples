import { OpenAI } from "langchain";
import { initializeAgentExecutor } from "langchain/agents";
import { SerpAPI, Calculator } from "langchain/tools";

const tools = [
    new SerpAPI(process.env.SERPAPI_API_KEY, {
        location: "Austin,Texas,United States",
        hl: "en",
        gl: "us"
    }),
    new Calculator(),
];

export const getExecutor = async (model: OpenAI) => {
    return await initializeAgentExecutor(tools, model, "zero-shot-react-description");
};

export const input = 
    "Who is Olivia Wilde's boyfriend?" +
    " What is his current age raised to the 0.23 power?";
