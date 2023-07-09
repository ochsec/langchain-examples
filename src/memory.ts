import { OpenAI } from "langchain";
import { BufferMemory } from "langchain/memory";
import { ConversationChain } from "langchain/chains";

const memory = new BufferMemory();

export const getChain = (model: OpenAI): ConversationChain => {
    return new ConversationChain({ llm: model, memory });
};