import { runComplianceCheck } from './agents/complianceAgent';
import { runBiasCheck } from './agents/biasAgent';
import { runFeedbackCollection } from './agents/feedbackAgent';

export async function processQuery(query: string) {
  const compliance = await runComplianceCheck(query);
  const bias = await runBiasCheck(query);
  const feedback = await runFeedbackCollection(query);

  return {
    query,
    compliance,
    bias,
    feedback,
    status: compliance.pass && bias.pass ? 'Approved' : 'Flagged',
  };
}
