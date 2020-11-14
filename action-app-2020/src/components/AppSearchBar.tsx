import React, { Component } from 'react'
import { FormControl, Row, Form, Col } from 'react-bootstrap'
import { Search } from 'react-bootstrap-icons'

export class AppSearchBar extends Component {
    render() {
        return (
            <div>
                <Row className='mt-4'>
                    <Col xs={12} sm={6} md={4}  lg={3}>
                        <div className="form-group has-search">
                            <Search className="has-search form-control-feedback pt-1 pl-3" />
                            <FormControl type="text" placeholder="Search for appointment" className="mr-sm-2 pl-5" />
                        </div> 
                    </Col>
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
                </Row>
            </div>
        )
    }
}

export default AppSearchBar
