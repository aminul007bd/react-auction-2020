import React, { Component } from 'react'
import { FormControl, Row, Form } from 'react-bootstrap'
import { Search } from 'react-bootstrap-icons'

export class AppSearchBar extends Component {
    render() {
        return (
            <div>
                <Row className='mt-4'>
                    <Form className='d-flex flex-row ml-3 mr-3'>
                        <div className="form-group has-search">
                            <Search className="has-search form-control-feedback pt-1 pl-3" />
                            <FormControl type="text" placeholder="Search for appointment" className="mr-sm-2 pl-5" />
                        </div>
                        <select name="bid" className="custom-select mb-3 ml-3 w-25">
                            <option >Bid</option>
                            <option value="Appointment_Set">Appointment Set</option>
                            <option value="Property_Viewed">Property Viewed</option>
                            <option value="Interested">Interested</option>
                            <option value="Offer_Accepted">Offer Accepted</option>
                        </select>
                        <select name="status" className="custom-select mb-3 ml-3 w-25">
                            <option >Status</option>
                            <option value="active">Active</option>
                            <option value="inactive">Inactive</option>
                        </select>
                    </Form>
                </Row>
            </div>
        )
    }
}

export default AppSearchBar
