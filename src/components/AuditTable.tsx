export default function AuditTable({ result }: { result: any }) {
  return (
    <div className="mt-6 border rounded p-4">
      <h2 className="text-xl font-semibold mb-4">Audit Result</h2>
      <p>
        <strong>Status:</strong>{' '}
        <span className={result.status === 'Approved' ? 'text-green-600' : 'text-red-600'}>
          {result.status}
        </span>
      </p>
      <p>
        <strong>Query:</strong> {result.query}
      </p>
      <hr className="my-4" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h3 className="font-semibold">Compliance Check</h3>
          <p>✅ Pass: {result.compliance.pass.toString()}</p>
          {result.compliance.reason && (
            <p className="text-sm text-red-600">{result.compliance.reason}</p>
          )}
        </div>
        <div>
          <h3 className="font-semibold">Bias Check</h3>
          <p>✅ Pass: {result.bias.pass.toString()}</p>
          {result.bias.reason && (
            <p className="text-sm text-red-600">{result.bias.reason}</p>
          )}
        </div>
      </div>
      <div className="mt-4">
        <h3 className="font-semibold">Feedback</h3>
        <p>{result.feedback.comment}</p>
      </div>
    </div>
  );
}
