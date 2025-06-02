'use client';
import { useState } from 'react';

export default function LengthConverter() {
  const [meters, setMeters] = useState('');
  const [feet, setFeet] = useState('');
  const [inches, setInches] = useState('');

  const handleMetersChange = (e) => {
    const valor = e.target.value;
    setMeters(valor);
    const num = parseFloat(valor);
    if (!isNaN(num)) {
      const ft = num * 3.28084;
      setFeet(ft.toFixed(2));
      setInches((ft * 12).toFixed(2));
    } else {
      setFeet('');
      setInches('');
    }
  };

  const handleFeetChange = (e) => {
    const valor = e.target.value;
    setFeet(valor);
    const num = parseFloat(valor);
    if (!isNaN(num)) {
      setMeters((num / 3.28084).toFixed(2));
      setInches((num * 12).toFixed(2));
    } else {
      setMeters('');
      setInches('');
    }
  };

  const handleInchesChange = (e) => {
    const valor = e.target.value;
    setInches(valor);
    const num = parseFloat(valor);
    if (!isNaN(num)) {
      const ft = num / 12;
      setFeet(ft.toFixed(2));
      setMeters((ft / 3.28084).toFixed(2));
    } else {
      setFeet('');
      setMeters('');
    }
  };

  return (
    <main className="p-6 space-y-4">
      <h1 className="text-xl font-bold">Conversor de Comprimento</h1>
      <input className="border p-2 w-full" placeholder="Metros" value={meters} onChange={handleMetersChange} />
      <input className="border p-2 w-full" placeholder="Pés" value={feet} onChange={handleFeetChange} />
      <input className="border p-2 w-full" placeholder="Polegadas" value={inches} onChange={handleInchesChange} />
    </main>
  );
}
