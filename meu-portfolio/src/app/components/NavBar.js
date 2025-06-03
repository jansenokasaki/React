import Link from 'next/link';

export default function NavBar() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="max-w-7xl mx-auto flex justify-between">
        <div className="text-white text-2xl font-bold">Portfólio</div>
        <div className="flex gap-4 space-y-2">
          <Link href="/" className="text-white hover:text-gray-300">
            Home
          </Link>
          <Link href="/pages/sobre" className="text-white hover:text-gray-300">
            Sobre
          </Link>
          <Link href="/pages/formacao" className="text-white hover:text-gray-300">
            Formação
          </Link>
          <Link href="/pages/experiencia" className="text-white hover:text-gray-300">
            Experiência
          </Link>
          <Link href="/pages/projetos" className="text-white hover:text-gray-300">
            Projetos
          </Link>
          <Link href="/pages/jogo" className="text-white hover:text-gray-300">
            Jogo
          </Link>
        </div>
      </div>
    </nav>
  );
}
