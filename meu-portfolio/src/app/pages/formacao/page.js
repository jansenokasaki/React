import NavBar from '../../components/NavBar';

export default function Formacao() {
  return (
    <div>
      <NavBar />
      <section className="min-h-screen bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-6 text-center">Formação Acadêmica</h2>
          <div className="space-y-4">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-2xl font-semibold">Tecnólogo em Sistemas para Internet</h3>
              <p className="text-lg">Universidade Católica de Pernambuco, 2024-2026</p>
              <p>Curso superior de tecnologia voltado para o desenvolvimento de soluções web e digitais, com foco em inovação.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}