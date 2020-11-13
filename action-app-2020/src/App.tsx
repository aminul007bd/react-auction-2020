import React from 'react';
import './App.css';
import { Container } from 'react-bootstrap';
import AppNavbar from './components/AppNavbar';
import AppInforBar from './components/AppInfoBar';
import { AppSearchBar } from './components/AppSearchBar';
function App() {
  return (
    <div className="App">
      <Container>
          <AppNavbar />
          <div className="shadow mt-3 p-3">
              <AppInforBar />
              <AppSearchBar />
          </div>
       </Container>
    </div>
  );
}

export default App;
