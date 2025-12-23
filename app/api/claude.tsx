'use server';

import Anthropic from "@anthropic-ai/sdk";

const client = new Anthropic({
    apiKey: process.env.ANTHROPIC_API_KEY
});

export async function refineHobbies(hobbies: string[]) {
    const message = await client.messages.create({
        model: 'claude-sonnet-4-5-20250929',
        max_tokens: 1024,
        messages: [{
            role: 'user',
            content: `Given these hobbies: ${hobbies.join(', ')}
      
        For each hobby, provide exactly 5 refined subcategories or specializations for each one.

        Return ONLY a JSON object with this structure:
        {
            "[actual_hobby_name]": ["subcategory1", "subcategory2", "subcategory3", "subcategory4", "subcategory5"]
        }

        Do not include any other text, only the JSON.`
        }]
    });

    const textBlock = message.content.find(block => block.type === 'text');

    if (textBlock && textBlock.type === 'text') {
        return Response.json(JSON.parse(textBlock.text));
    }

    throw new Error('No refined hobbies text response from Claude!');
}

export async function findCompanies(refinedHobbies: string[]) {
    const message = await client.messages.create({
        model: 'claude-haiku-4-5-20251001',
        max_tokens: 2048,
        messages: [{
            role: 'user',
            content: `Given these specific interests: ${refinedHobbies.join(', ')}
            
            Identify 3 publicly traded companies that align with these interests. For each company, provide:
            -Company name
            -Stock ticker symbol
            -Brief description of relevance

            Format as JSON array.`
        }]
    });

    const textBlock = message.content.find(block => block.type === 'text');

    if (textBlock && textBlock.type === 'text') {
        return Response.json(JSON.parse(textBlock.text));
    }

    throw new Error('No companies text response from Claude!');
}