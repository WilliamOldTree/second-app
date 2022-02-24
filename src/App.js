import Estilos from "./Components/Estilos/Estilos";
import MinMax from "./Components/MinMax/MinMax";
import Titulo from "./Components/Titulo/Titulo";
import Botao from "./Components/Botao/Botao";
import Contador from "./components/contador/Contador";
import React from "react";

// function App() {
//   return (
//     <div className="App">

//         <Estilos/>
//         <MinMax/>

//     </div>
//   );
// }

function App() {
  return (
    <div className="App">

      <Contador inicial={100} passo={10} />
      
    </div>
  );
}
export default App;


/* <Estilos />
      <MinMax min="2" max="10" />
      <MinMax min={4} max={15} />
      <Titulo principal="Olá" secundario="tudo bem" />
      <Botao/> */