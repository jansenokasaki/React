import NavBar from './components/NavBar';

export default function Home() {
  return (
    <div>
      <NavBar />
      <section className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-4">Jansen Okasaki</h1>
          <p className="text-xl mb-6">Sou estudante do terceiro período do curso de Sistemas para Internet da Universidade Católica de Pernambuco. Apaixonado por tecnologia e soluções inovadoras.</p>
          <a href="/pages/sobre" className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700">
            Saiba Mais
          </a>
        </div>
      </section>
    </div>
  );
}