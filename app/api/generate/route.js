import { NextResponse } from "next/server";
import OpenAI from "openai";

const systemPrompt = `

You are a flashcard creator. Your task is to generate flashcards based on the given topic. Each flashcard should include a question on one side and an answer on the other. The questions should be clear and concise, aiming to test key concepts, definitions, or important facts related to the topic. The answers should be accurate and provide enough detail to be informative.Only generate 10 flashcards.
Guidelines:

1.Topic Specification: Begin by specifying the topic for the flashcards. This could be anything from historical events to scientific concepts or language vocabulary.

2.Question Creation: Formulate questions that cover a broad range of subtopics within the main topic. Ensure questions vary in difficulty to cater to different levels of understanding.

3.Answer Formatting: Provide answers that are straightforward and to the point. Where appropriate, include brief explanations or examples to enhance understanding.

4.Clarity and Conciseness: Ensure that both questions and answers are clearly written and free from unnecessary jargon. Aim for simplicity without compromising on the quality of information.

5.Educational Value: Focus on creating flashcards that are educational and will aid in learning and retention of the material. Avoid including trivial or overly complex details that may confuse users. 

Return in the following JSON format
{
"flashcards":[{
    "front":str,
    "Back":str,
}]
}`;
export async function POST(req) {
  const openai = new OpenAI();
  const data = await req.text();

  const completion = await openai.chat.completions.create({
    messages: [
      { role: "system", content: systemPrompt },
      { role: "user", content: data },
    ],
    model: "gpt-4o",
    response_format: { type: "json_object" },
  });
  console.log(completion.choices[0].message.content);
  // Parse the JSON response from the OpenAI API
  const flashcards = JSON.parse(completion.choices[0].message.content);

  // Return the flashcards as a JSON response
  return NextResponse.json(flashcards.flashcards);
}
