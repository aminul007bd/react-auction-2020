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
          <Card>
              <AppInforBar />
          </Card>
       </Container>
    </div>
  );
}

export default App;
