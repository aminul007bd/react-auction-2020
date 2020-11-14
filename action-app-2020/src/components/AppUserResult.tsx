import React, { Component } from 'react'
import { Col, Row, Card } from 'react-bootstrap'

export class AppUserResult extends Component {
    userName = () => {
        return 'AH'
    }
    render() {
        return (
            <div>
                <Row className='mt-4'>
                    <Col>
                        <h5 className='text-left'>Appointment Set</h5>  
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} sm={6}  lg={3} className='mt-2'>
                        <Card>
                            <div className="d-flex justify-content-center mt-3">
                                <Card.Img className='rounded-circle bg-dark-gray'  src="holder.js/70x70?text=AH"  />
                            </div>
                            <Card.Body>
                            <Card.Title>Aminul Hoque</Card.Title>
                            <Card.Subtitle> +49017656896943</Card.Subtitle>
                            <Card.Text> aminul.hoque@gmail.com</Card.Text>
                            <Card.Text className='mb-0'>
                                <span className="badge badge-secondary font-weight-normal text-uppercase">Appointment 22 July 14:00</span>
                            </Card.Text>
                            <Card.Text>
                                <span className="badge badge-warning font-weight-normal text-white text-uppercase">Bid 250,000 EU</span>
                            </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default AppUserResult
