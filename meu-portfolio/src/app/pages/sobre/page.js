import NavBar from '../../components/NavBar';

export default function Sobre() {
  return (
    <div>
      <NavBar />
      <section className="min-h-screen bg-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-6 text-center">Sobre Mim</h2>
          <p className="text-lg mb-4 text-center">Sou um desenvolvedor full-stack em formação, apaixonado por estudar para aumentar meu conhecimento e buscar soluções inovadoras.</p>
          <p className="text-lg mb-4 text-center">Desenvolvi este projeto para a cadeira de Front-End da minha faculdade com o intuito de melhorar também as minhas hablidades.</p>
          <h3 className="text-2xl font-semibold mb-4 text-center">Tecnologias e Módulos Utilizados</h3>
          <ul className="no-style pl-6 text-center ">
            <li>React 18.2.0 - Biblioteca para construção de interfaces</li>
            <li>Next.js 14.2.3 - Framework para renderização server-side</li>
            <li>Tailwind CSS 3.4.3 - Framework CSS utilitário</li>
            <li>Axios 1.7.2 - Cliente HTTP para requisições à API</li>
            <li>API do GitHub - Para buscar dados de projetos</li>
          </ul>
        </div>
      </section>
    </div>
  );
}