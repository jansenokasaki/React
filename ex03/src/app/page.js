export default function Home() {
  return (
    <main className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">Conversor Inteligente</h1>
      <p>
        Este aplicativo tem como objetivo ajudar você a converter diferentes tipos de unidades de forma simples e automática.
      </p>
      <ul className="list-disc ml-6 space-y-1">
        <li>Conversão de moeda (Dólar ↔ Real)</li>
        <li>Conversão de temperatura (ºC ↔ ºF)</li>
        <li>Conversão de comprimento (Metros ↔ Pés/Polegadas)</li>
      </ul>

      <div className="space-y-2 pt-4">
        <a href="/CurrencyConverter" className="block text-blue-600 underline">Ir para Conversor de Moeda</a>
        <a href="/TemperatureConverter" className="block text-blue-600 underline">Ir para Conversor de Temperatura</a>
        <a href="/LengthConverter" className="block text-blue-600 underline">Ir para Conversor de Comprimento</a>
        <a href="/SobreMim" className="block text-blue-600 underline">Sobre o Desenvolvedor</a>
      </div>
    </main>
  );
}

