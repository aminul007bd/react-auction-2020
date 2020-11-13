import React from 'react';
import './App.css';
import AppHeader from './components/AppHeader';
import { Container, Row, Col } from 'react-bootstrap';
function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Col>
          <AppHeader />
          </Col>
        </Row>
    </Container>

    </div>
  );
}

export default App;
