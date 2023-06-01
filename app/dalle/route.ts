import { NextResponse } from "next/server";
import { Configuration, OpenAIApi } from "openai";

export interface RequestBody {
  apiKey: string;
  prompt: string;
}

export interface ResponseBody {
  image?: string;
}

export const POST = async (request: Request) => {
  const { apiKey, prompt } = (await request.json()) as RequestBody;

  const openAiConfig = new Configuration({
    apiKey,
  });
  const openai = new OpenAIApi(openAiConfig);

  try {
    const response = await openai.createImage({
      prompt,
      n: 1,
      size: "256x256",
      response_format: "b64_json",
    });

    const base64Image = response.data.data[0].b64_json;

    const data: ResponseBody = {
      image: base64Image,
    };

    return NextResponse.json(data);
  } catch (error) {
    console.error(error);
    return NextResponse.error();
  }
};
