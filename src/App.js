import React, { useState } from 'react';
import Saludo from './components/Saludo';
import Despedida from './components/Despedida';
import { coches } from './components/ListaCoches';

function App() {
  const [mostrarSaludo, setMostrarSaludo] = useState(true);

  return (
    <div className="App">
       {mostrarSaludo ? (
        <Saludo nombre="Michael" />
      ) : (
        <Despedida nombre="Michael" />
      )}

      {coches.map((coche) => (
        <div  className="StileCoche">
          {coche.Matricula} - {coche.Modelo} {coche.Marca} ({coche.Tipo})
        </div>
      ))}
    </div>
  );
}

export default App;
