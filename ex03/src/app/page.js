export default function Home() {
  return (
    <main className="p-6 space-y-4">
      <h1 className="text-2xl font-bold">Conversores Inteligentes</h1>
      <p>Este app converte valores automaticamente e em tempo real:</p>
      <ul className="list-disc ml-6 space-y-1">
        <li><a className="text-blue-500 underline" href="/CurrencyConverter">Conversor de Dólar/Real</a></li>
        <li><a className="text-blue-500 underline" href="/TemperatureConverter">Conversor de Temperatura</a></li>
        <li><a className="text-blue-500 underline" href="/LengthConverter">Conversor de Comprimento</a></li>
      </ul>
    </main>
  );
}
