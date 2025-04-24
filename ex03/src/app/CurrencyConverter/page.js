'use client';
import { useState } from 'react';

export default function CurrencyConverter() {
  const COTACAO = 5.10;
  const [real, setReal] = useState('');
  const [dolar, setDolar] = useState('');

  const handleRealChange = (e) => {
    const valor = e.target.value;
    setReal(valor);
    const num = parseFloat(valor);
    setDolar(isNaN(num) ? '' : (num / COTACAO).toFixed(2));
  };

  const handleDolarChange = (e) => {
    const valor = e.target.value;
    setDolar(valor);
    const num = parseFloat(valor);
    setReal(isNaN(num) ? '' : (num * COTACAO).toFixed(2));
  };

  return (
    <main className="p-6 space-y-4">
      <h1 className="text-xl font-bold">Conversor Dólar ↔ Real</h1>
      <input className="border p-2 w-full" placeholder="R$ (real)" value={real} onChange={handleRealChange} />
      <input className="border p-2 w-full" placeholder="US$ (dólar)" value={dolar} onChange={handleDolarChange} />
      <p className="text-sm text-gray-500">Cotação fixa: R$ 5,10</p>
    </main>
  );
}
