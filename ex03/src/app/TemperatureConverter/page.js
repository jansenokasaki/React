'use client';
import { useState } from 'react';

export default function TemperatureConverter() {
  const [celsius, setCelsius] = useState('');
  const [fahrenheit, setFahrenheit] = useState('');

  const handleCelsiusChange = (e) => {
    const valor = e.target.value;
    setCelsius(valor);
    const num = parseFloat(valor);
    setFahrenheit(isNaN(num) ? '' : ((num * 9/5) + 32).toFixed(2));
  };

  const handleFahrenheitChange = (e) => {
    const valor = e.target.value;
    setFahrenheit(valor);
    const num = parseFloat(valor);
    setCelsius(isNaN(num) ? '' : ((num - 32) * 5/9).toFixed(2));
  };

  return (
    <main className="p-6 space-y-4">
      <h1 className="text-xl font-bold">Conversor de Temperatura</h1>
      <input className="border p-2 w-full" placeholder="ºC" value={celsius} onChange={handleCelsiusChange} />
      <input className="border p-2 w-full" placeholder="ºF" value={fahrenheit} onChange={handleFahrenheitChange} />
    </main>
  );
}
