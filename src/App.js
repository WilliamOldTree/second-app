import Estilos from "./components/Estilos/Estilos";
import MinMax from "./components/MinMax/MinMax";
import Titulo from "./components/Titulo/Titulo";
import Botao from "./components/Botao/Botao";
import Contador from "./components/contador/Contador";
import React from "react";



function App() {
  return (
    <div className="App">

      <Contador inicial={100} passo={10} limiteMax={150} limiteMin={50}/>
      
    </div>
  );
}
export default App;










/* <Estilos />
      <MinMax min="2" max="10" />
      <MinMax min={4} max={15} />
      <Titulo principal="Olá" secundario="tudo bem" />
      <Botao/> */



// function App() {
//   return (
//     <div className="App">

//         <Estilos/>
//         <MinMax/>

//     </div>
//   );
// }   