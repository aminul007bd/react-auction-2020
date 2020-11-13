import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import { ArrowLeftShort } from 'react-bootstrap-icons';

export class AppInforBar extends Component {
    render() {
        return (
            <div>
                <div className="d-flex mt-4">
                    <div className="mr-auto">
                        <h5> 
                            <ArrowLeftShort size={32}/>  
                            <span className='ml-2'>Applications </span>
                        </h5>  
                    </div>
                    <div className="align-items-end flex-column border-right pr-4 text-secondary">
                        <p className="font-weight-bold mb-0">100</p>
                        <p className="font-weight-normal mb-0">Total</p>
                    </div>
                    <div className="align-items-end flex-column border-right pr-4 pl-4 text-secondary">
                        <p className="font-weight-bold mb-0">100</p>
                        <p className="font-weight-normal mb-0">New</p>
                    </div>
                    <div className="align-items-end flex-column border-right pr-4 pl-4 text-secondary">
                        <p className="font-weight-bold  mb-0">100</p>
                        <p className="font-weight-normal mb-0">Viewd</p>
                    </div>
                    <div className="align-items-end flex-column border-right pr-4 pl-4 text-secondary">
                        <p className="font-weight-bold mb-0">100</p>
                        <p className="font-weight-normal mb-0">Appointment</p>
                    </div>
                    <div className="align-items-end flex-column pr-4 pl-4 text-secondary">
                        <p className="font-weight-bold mb-0">100</p>
                        <p className="font-weight-normal mb-0">Others</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default AppInforBar;
