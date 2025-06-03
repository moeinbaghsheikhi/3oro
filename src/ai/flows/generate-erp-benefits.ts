'use server';

/**
 * @fileOverview This file defines a Genkit flow to generate tailored benefits of the ERP system for a specific industry.
 *
 * - generateErpBenefits - A function that generates ERP benefits based on the industry provided.
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
  benefits: z.string().describe('The tailored benefits of the ERP system for the specified industry.'),
});
export type GenerateErpBenefitsOutput = z.infer<typeof GenerateErpBenefitsOutputSchema>;

export async function generateErpBenefits(input: GenerateErpBenefitsInput): Promise<GenerateErpBenefitsOutput> {
  return generateErpBenefitsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateErpBenefitsPrompt',
  input: {schema: GenerateErpBenefitsInputSchema},
  output: {schema: GenerateErpBenefitsOutputSchema},
  prompt: `You are an expert copywriter specializing in creating persuasive marketing content for ERP systems.

You will generate tailored benefits of the ERP system for the following industry, highlighting the key selling points in Persian.

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
