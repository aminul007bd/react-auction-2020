import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import { ArrowLeft } from 'react-bootstrap-icons';

export class AppInforBar extends Component {
    render() {
        return (
            <div>
                <Row>
                    <Col>
                        <ArrowLeft />
                        <h2> Applications </h2>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default AppInforBar;
