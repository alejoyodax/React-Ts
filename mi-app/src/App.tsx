import { Counter } from "./components/Counter";
import { Usuario } from "./components/Usuario";

import { TimerPadre } from "./components/TimerPadre";
import { ContadorRed } from "./components/ContadorRed";

import { Formulario } from "./components/Formulario";
import { Formulario2 } from "./components/Formulario2";

function App() {
  return (
    <>
      <h1>React + TypeScript</h1>

      <hr />
      <h2>customHooks</h2>
      <Formulario />
      <hr />

      <Formulario2 />
      <hr />

      <Counter />
      <hr />
      <Usuario />

      <h2>useEffect - useRef</h2>
      <hr />
      <TimerPadre />
      <hr />

      <h2>useReducer</h2>
      <ContadorRed />

      <hr />
      <h2>customHooks</h2>
      <hr />
    </>
  );
}

export default App;
