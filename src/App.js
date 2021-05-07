import React from 'react';
import Form1 from './components/Form1';
import Form2 from './components/Form2';
import Form3 from './components/Form3';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-around',
        flexWrap: 'wrap'
      }}
    >
      <Form1 />
      <Form2 />
      <Form3 />
    </div>
  );
}

export default App;
