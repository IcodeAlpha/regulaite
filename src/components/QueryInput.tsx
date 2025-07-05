import { useState } from 'react';

export default function QueryInput({
  onSubmit,
  loading,
}: {
  onSubmit: (query: string) => void;
  loading: boolean;
}) {
  const [input, setInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    onSubmit(input);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Paste or write AI output to audit..."
        className="w-full p-4 border rounded-lg resize-none h-32"
      />
      <button
        type="submit"
        disabled={loading}
        className="bg-black text-white py-2 px-4 rounded mt-2 disabled:opacity-50"
      >
        {loading ? 'Auditing...' : 'Analyze'}
      </button>
    </form>
  );
}
