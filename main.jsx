import React from 'react';
import ReactDOM from 'react-dom';
import Colors from './Colors';

const App = () => {
  // Array di oggetti colori con proprietà 'id' e 'name'
  const colors = [
    { id: 1, name: 'Red' },
    { id: 2, name: 'Blue' },
    { id: 3, name: 'Green' },
    { id: 4, name: 'Yellow' },
    // Aggiungi altri colori se necessario
  ];

  return (
    <div>
      <h1>Colors List</h1>
      {/* Passa l'array di colori come prop 'colors' al componente Colors */}
      <Colors colors={colors} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));