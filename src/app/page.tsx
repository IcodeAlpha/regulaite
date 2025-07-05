'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import QueryInput from '@/components/QueryInput';
import AuditTable from '@/components/AuditTable';

export default function Home() {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const analyze = async (query: string) => {
    setLoading(true);
    try {
      const res = await fetch('/api/analyze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query }),
      });
      const data = await res.json();
      setResult(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="max-w-3xl mx-auto py-12 px-4">
      <Header />
      <QueryInput onSubmit={analyze} loading={loading} />
      {result && <AuditTable result={result} />}
    </main>
  );
}
