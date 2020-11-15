import React from 'react'
import { Col, Row } from 'react-bootstrap'
import UserCard from './UserCard'


function AppUserResult ({searchResult}) {
    if(searchResult.length === 0) {
        return (
           <>
            <Row className='mt-4'>
                <Col>
                    <h5> No Result Found</h5>  
                </Col>
            </Row>
           </> 
        )
    }
    return (
        <div>
            <UserCard searchResult={searchResult} propertyStatus='property_set' />
            <UserCard searchResult={searchResult} propertyStatus='property_viewed' />
        </div>
    )
}

export default AppUserResult


