import React from 'react'
import { Col, Row, Card } from 'react-bootstrap'
import { UserInterface } from '../types'

function CardProfile () {
    return (
        <div className="d-flex justify-content-center mt-3">
            <Card.Img className='rounded-circle w-25'  src="https://dummyimage.com/60x60/ccc/fff&text=AH" />
        </div>    
    )
}
function AppUserResult ({searchResult}) {
    return (
        <div>
            <Row className='mt-4'>
                <Col>
                    <h5 className='text-left'>Appointment Set ({searchResult?.map.length})</h5>  
                </Col>
            </Row>
            <Row>
                {searchResult?.filter(user => user.bid_status === 'property_set').map((user: UserInterface) => 
                    <Col key={user.id}  xs={12} sm={6}  lg={3} className='mt-2'>
                        <Card>
                            <CardProfile />
                            <Card.Body>
                            <Card.Title className='text-capitalize'>{user.first_name} {user.last_name}</Card.Title>
                            <Card.Subtitle> {user.phone_number}</Card.Subtitle>
                            <Card.Text>{user.email}</Card.Text>
                            <Card.Text className='mb-0'>
                                <span className="badge badge-secondary font-weight-normal text-uppercase">Appointment {user.appointment_date}</span>
                            </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                )}
            </Row>

            {/* Property viewed */}
            <Row className='mt-4'>
                <Col>
                    <h5 className='text-left'>Property viewed(3)</h5>  
                </Col>
            </Row>

            <Row>
                {searchResult?.filter(user => user.bid_status === 'property_viewed').map((user: UserInterface) => 
                    <Col key={user.id}  xs={12} sm={6}  lg={3} className='mt-2'>
                        <Card>
                            <CardProfile />
                            <Card.Body>
                            <Card.Title className='text-capitalize'>{user.first_name} {user.last_name}</Card.Title>
                            <Card.Subtitle> {user.phone_number}</Card.Subtitle>
                            <Card.Text>{user.email}</Card.Text>
                            <Card.Text className='mb-0'>
                                <span className="badge badge-secondary font-weight-normal text-uppercase">Appointment {user.appointment_date}</span>
                            </Card.Text>
                            <Card.Text>
                                <span className="badge badge-warning font-weight-normal text-white text-uppercase">Bid {user.bid_amount}</span>
                            </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                )}
            </Row>
        </div>
    )
}

export default AppUserResult


