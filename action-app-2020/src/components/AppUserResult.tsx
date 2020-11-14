import React, { useState, useEffect } from 'react'
import { Col, Row, Card } from 'react-bootstrap'

// userName = () => {
//     return 'AH'
// }
interface UserData {
    id: number
    email: string
    phone_number: string
    bid_status: string
    bid_amount: number
    appointment_date: string
    first_name: string
    last_name: string
}
function AppUserResult () {
    const [data, setData] = useState<any[]>([])
    const fetchURL = "http://localhost:5000"
    const getData = () =>
      fetch(`${fetchURL}/applicants`)
        .then((res) => res.json())
  
    useEffect(() => {
      getData().then((data) => setData(data))
    }, [])

    return (
        <div>
            <Row className='mt-4'>
                <Col>
                    <h5 className='text-left'>Appointment Set ({data?.map.length})</h5>  
                </Col>
            </Row>
            <Row>
                {data?.map((user: UserData) => 
                <Col key={user.id}  xs={12} sm={6}  lg={3} className='mt-2'>
                    <Card>
                        <div className="d-flex justify-content-center mt-3">
                            <Card.Img className='rounded-circle bg-dark-gray'  src="holder.js/70x70?text=AH"  />
                        </div>
                        <Card.Body>
                        <Card.Title className='text-capitalize'>{user.first_name} {user.last_name}</Card.Title>
                        <Card.Subtitle> {user.phone_number}</Card.Subtitle>
                        <Card.Text>{user.email}</Card.Text>
                        <Card.Text className='mb-0'>
                            <span className="badge badge-secondary font-weight-normal text-uppercase">Appointment {user.phone_number}</span>
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

export default AppUserResult


