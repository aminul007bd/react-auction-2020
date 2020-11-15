import React from 'react'
import { Col, Row, Card } from 'react-bootstrap'
import { UserInterface } from '../types'

function BidBadge ({bidAmound}) {
    if (bidAmound === null) {
        return <></>
    }
    return (
        <Card.Text className='mb-0'>
            <span className="badge badge-warning font-weight-normal text-uppercase">{bidAmound}</span>
        </Card.Text>
    )
}

function UserCardImage ({firstName, lastName}) {
    const fullNameLetter = firstName.charAt(0) + lastName.charAt(0)
    const colors = ["info", "secondary", "warning", "dark", "danger"]
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    return (
        <div className="d-flex justify-content-center mt-3">
            <div className='imgContainer '>
            <div className={'imageRound bg-' + randomColor}>
                <span className='profileName text-uppercase text-white'>{fullNameLetter}</span>
            </div>
            </div>
        </div>    
    )
}

function UserCard ({searchResult, propertyStatus}) {
    let userResult;
    let totalNumber;
    let cardTitle;
    if (propertyStatus === 'property_set' ) {
        userResult = searchResult?.filter(user => user.bid_status === 'property_set')
        totalNumber = userResult.length
        cardTitle = 'Appointment Set (' + totalNumber + ')'
    }
    if (propertyStatus === 'property_viewed') {
        userResult = searchResult?.filter(user => user.bid_status === 'property_viewed')
        totalNumber = userResult.length
        cardTitle = 'Property viewed (' + totalNumber + ')'
    } 


    return (
        <>
            <Row className='mt-4'>
                <Col>
                    <h5 className='text-left'>{cardTitle}</h5>  
                </Col>
            </Row>
            <Row>
                {userResult?.map((user: UserInterface) => 
                    <Col key={user.id}  xs={12} sm={6}  lg={3} className='mt-2'>
                        <Card>
                            <UserCardImage firstName={user.first_name} lastName={user.last_name} />
                            <Card.Body>
                            <Card.Title className='text-capitalize'>{user.first_name} {user.last_name}</Card.Title>
                            <Card.Subtitle> {user.phone_number}</Card.Subtitle>
                            <Card.Text>{user.email}</Card.Text>
                            <Card.Text className='mb-0'>
                                <span className="badge badge-secondary font-weight-normal text-uppercase">Appointment {user.appointment_date}</span>
                            </Card.Text>
                            <BidBadge bidAmound={user.bid_amount}/>
                            </Card.Body>
                        </Card>
                    </Col>
                )}
            </Row>
        </>
    )
}

export default UserCard


