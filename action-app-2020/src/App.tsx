import React from 'react';
import './App.css';
import { Container } from 'react-bootstrap';
import AppNavbar from './components/AppNavbar';
import AppInforBar from './components/AppInfoBar';
import { AppSearchBar } from './components/AppSearchBar';
import { AppUserResult } from './components/AppUserResult'
function App() {
  return (
    <div className="App">
      <Container>
          <AppNavbar />
          <div className="shadow mt-3 p-3">
              <AppInforBar />
              <AppSearchBar />
              <AppUserResult />
          </div>
       </Container>
    </div>
  );
}

export default App;
