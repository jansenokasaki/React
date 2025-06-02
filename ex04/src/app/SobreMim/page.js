import Link from "next/link"
export default function SobreMim() {
    return (
      <main className="p-6 space-y-4">
        <h1 className="text-3xl font-bold">Sobre o Desenvolvedor</h1>
        <p>
          Olá! Meu nome é Jansen e sou estudante do terceiro período de <strong>Sistemas para Internet</strong> na <strong>UNICAP</strong> (Universidade Católica de Pernambuco).
        </p>
        <p>
          Atualmente estou participando de uma <strong>residência tecnológica no Porto Digital</strong>, onde venho aprendendo inúmeras coisas, principalmente sobre desenvolvimento de software na prática.
        </p>
        <p>
          Criei este aplicativo com <strong>Next.js</strong> e <strong>Tailwind CSS</strong> como parte dos meus estudos. Ele tem como objetivo mostrar minhas habilidades obtidas a partir do que aprendi nas aulas de Front-End do professor Márcio.
        </p>
        <Link href="/" className="text-blue-600 underline">← Voltar para a Home</Link>
      </main>
    );
  }
  