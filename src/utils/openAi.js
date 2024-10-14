import OpenAI from "openai";
import { NETFLIX_GPT_KEY } from "./constants";

const openAi = new OpenAI({
    apiKey: '',
    dangerouslyAllowBrowser: true,
})

export default openAi;