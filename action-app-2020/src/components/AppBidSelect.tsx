import React from 'react'
import { Col } from 'react-bootstrap'

export function AppBidSelect () {
    return (
        <>
            <Col xs={6} sm={3} md={2} lg={2}>
                <select name="bid" className="custom-select">
                    <option >Bid</option>
                    <option value="Appointment_Set">Appointment Set</option>
                    <option value="Property_Viewed">Property Viewed</option>
                    <option value="Interested">Interested</option>
                    <option value="Offer_Accepted">Offer Accepted</option>
                </select>
            </Col>
            <Col xs={6} sm={3}  md={2} lg={2}>
                <select name="status" className="custom-select">
                    <option >Status</option>
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                </select>
            </Col>
        </>
    )
}

export default AppBidSelect
