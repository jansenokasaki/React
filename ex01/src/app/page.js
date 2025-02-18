import Image from "next/image";

export function Texto1() {
  return <p>Um outro paragráfo de texto.</p>;
}

export default function Home() {
const aula = 2;
return (
    <div>
      <h1>Hello Jansen</h1>
      <p>Essa é a nossa aula {aula}ª de React</p>
      <Texto1 />
      <Texto1 />
    </div>
  );
}


// import Home, { Texto1} from './page'; 
