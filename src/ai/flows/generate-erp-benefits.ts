'use server';

/**
 * @fileOverview This file defines a Genkit flow to generate tailored benefits of the 30Ro system for a specific industry.
 *
 * - generateErpBenefits - A function that generates 30Ro benefits based on the industry provided.
 * - GenerateErpBenefitsInput - The input type for the generateErpBenefits function.
 * - GenerateErpBenefitsOutput - The return type for the generateErpBenefits function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateErpBenefitsInputSchema = z.object({
  industry: z.string().describe('The industry for which to generate ERP benefits.'),
});
export type GenerateErpBenefitsInput = z.infer<typeof GenerateErpBenefitsInputSchema>;

const GenerateErpBenefitsOutputSchema = z.object({
  benefits: z.string().describe('The tailored benefits of the 30Ro system for the specified industry, keeping the description concise (around 1-2 short sentences).'),
});
export type GenerateErpBenefitsOutput = z.infer<typeof GenerateErpBenefitsOutputSchema>;

export async function generateErpBenefits(input: GenerateErpBenefitsInput): Promise<GenerateErpBenefitsOutput> {
  return generateErpBenefitsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateErpBenefitsPrompt',
  input: {schema: GenerateErpBenefitsInputSchema},
  output: {schema: GenerateErpBenefitsOutputSchema},
  prompt: `You are an expert copywriter specializing in creating persuasive and concise marketing content for 30Ro, an ERP system.

You will generate tailored benefits of the 30Ro system for the following industry, highlighting the key selling points in Persian.
Keep the description very short and to the point, ideally 1-2 sentences.

Industry: {{{industry}}}
`,
});

const generateErpBenefitsFlow = ai.defineFlow(
  {
    name: 'generateErpBenefitsFlow',
    inputSchema: GenerateErpBenefitsInputSchema,
    outputSchema: GenerateErpBenefitsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
