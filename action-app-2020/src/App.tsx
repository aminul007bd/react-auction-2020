import React, { useState, useEffect } from 'react';
import './App.css';
import { Container } from 'react-bootstrap';
import AppNavbar from './components/AppNavbar';
import AppInforBar from './components/AppInfoBar';
import AppSearchBar from './components/AppSearchBar';
import { UserInterface } from './types'

function App() {
  const [data, setData] = useState<UserInterface[]>([])
  
  // Local environment url for fetch mock api
  const fetchURL = "http://localhost:5000"
  const getData = () =>
    fetch(`${fetchURL}/applicants`)
      .then((res) => res.json())

  useEffect(() => {
    getData()
    .then((data) => setData(data))
  }, [])

  return (
    <div className="App">
      <Container fluid>
          <AppNavbar />
          <div className="shadow mt-3 p-3">
              <AppInforBar />
              <AppSearchBar userData={data}/>
          </div>
       </Container>
    </div>
  );
}

export default App;
