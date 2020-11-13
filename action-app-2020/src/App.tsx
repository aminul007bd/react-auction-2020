import React from 'react';
import './App.css';
import { Card, Container } from 'react-bootstrap';
import AppNavbar from './components/AppNavbar';
import AppInforBar from './components/AppInfoBar';
function App() {
  return (
    <div className="App">
      <Container>
          <AppNavbar />
          <div className="shadow mt-3 p-2">
              <AppInforBar />
          </div>
       </Container>
    </div>
  );
}

export default App;
