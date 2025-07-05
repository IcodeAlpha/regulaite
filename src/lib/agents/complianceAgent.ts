import { ChatOpenAI } from '@langchain/openai';
import { PromptTemplate } from '@langchain/core/prompts';

const llm = new ChatOpenAI({ temperature: 0 });

export async function runComplianceCheck(output: string) {
  const prompt = PromptTemplate.fromTemplate(
    `Check this AI output for GDPR and ISO 42001 compliance:\n\nOutput: {output}\n\nReturn PASS or FAIL with a reason.`
  );

  const formatted = await prompt.format({ output });
  const response = await llm.call([{ role: 'user', content: formatted }]);

  const content = response.content ?? '';
  return {
    pass: content.includes('PASS'),
    reason: content.includes('FAIL') ? content : null,
  };
}
