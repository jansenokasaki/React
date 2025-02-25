"useClient";

import { useState } from "react";


export function Texto1() {
  return <p>Um outro paragráfo de texto.</p>;
}

export default function Home() {
const [gide, setHide] = useState(false);
const aula = 2;
return (
    <div>
      <h1>Hello Jansen</h1>
      <p>Essa é a nossa aula {aula}ª de React</p>
      <hr />
      <button onClick={() => setHide (!Hide)}>{ hide ? "Show" : "Hide" }</button>
      <hr />
      {hide && (
       <>
      <Texto1 />
      <Texto1 />
       </>
      )}
    </div>
    )
  }

// import Home, { Texto1} from './page'; 
