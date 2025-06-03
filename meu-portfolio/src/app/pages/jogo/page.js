"use client"

import { useState } from 'react';
import NavBar from '../../components/NavBar';

export default function Jogo() {
  const [secret, setSecret] = useState(generateSecret());
  const [guess, setGuess] = useState('');
  const [attempts, setAttempts] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  const [won, setWon] = useState(false);

  function generateSecret() {
    const digits = '0123456789';
    let secret = '';
    while (secret.length < 4) {
      const digit = digits[Math.floor(Math.random() * digits.length)];
      if (!secret.includes(digit)) secret += digit;
    }
    return secret;
  }

  function evaluateGuess(guess, secret) {
    let bulls = 0, cows = 0;
    for (let i = 0; i < 4; i++) {
      if (guess[i] === secret[i]) bulls++;
      else if (secret.includes(guess[i])) cows++;
    }
    return { bulls, cows };
  }

  const handleGuess = () => {
    if (guess.length !== 4 || !/^\d+$/.test(guess) || new Set(guess).size !== 4) {
      alert('Digite um número de 4 dígitos com dígitos únicos.');
      return;
    }

    const result = evaluateGuess(guess, secret);
    const newAttempt = { guess, ...result };
    const newAttempts = [newAttempt, ...attempts];
    setAttempts(newAttempts);

    if (result.bulls === 4) {
      setGameOver(true);
      setWon(true);
    } else if (newAttempts.length >= 10) {
      setGameOver(true);
    }

    setGuess('');
  };

  const revealSecret = () => {
    alert(`O código secreto era: ${secret}`);
  };

  const newGame = () => {
    setSecret(generateSecret());
    setAttempts([]);
    setGameOver(false);
    setWon(false);
    setGuess('');
  };

  return (
    <div>
      <NavBar />
      <section className="min-h-screen bg-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-6 text-center">Jogo da Senha</h2>
          <div className="max-w-md mx-auto">
            <div className="mb-4">
              <input
                type="text"
                value={guess}
                onChange={(e) => setGuess(e.target.value)}
                className="w-full p-2 border rounded"
                placeholder="Digite um palpite de 4 dígitos"
                disabled={gameOver}
              />
              <button
                onClick={handleGuess}
                className="mt-2 w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
                disabled={gameOver}
              >
                Enviar Palpite
              </button>
            </div>
            {attempts.length > 0 && (
              <div className="mb-4">
                <h3 className="text-xl font-semibold">Tentativas Anteriores</h3>
                <ul className="space-y-2">
                  {attempts.map((attempt, index) => (
                    <li key={index} className="p-2 bg-gray-100 rounded">
                      Palpite: {attempt.guess} - {attempt.bulls} Touros, {attempt.cows} Vacas
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {gameOver && (
              <div className="text-center">
                <p className="text-lg mb-4">
                  {won ? 'Parabéns! Você acertou o código!' : 'Fim de jogo! Suas 10 tentativas acabaram.'}
                </p>
                <button
                  onClick={revealSecret}
                  className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 mr-2"
                >
                  Revelar Código
                </button>
                <button
                  onClick={newGame}
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                  Novo Jogo
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}