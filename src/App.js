import React from 'react';
import './App.css';
import Table from './components/Table';
import MyProvider from './context/MyProvider';

function App() {
  return (
    <MyProvider>
      <main>
        <Table />
      </main>
    </MyProvider>
  );
}

export default App;
