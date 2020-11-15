import React, { useState } from 'react'
import { FormControl, Row, Col } from 'react-bootstrap'
import { Search } from 'react-bootstrap-icons'
import AppUserResult from './AppUserResult';
import AppBidSelect from './AppBidSelect';
import { UserInterface } from '../types'

export function AppSearchBar ({userData}) {
    const user = userData
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState<UserInterface[]>([]);
    const handleChange = event => {
       setSearchTerm(event.target.value);
     };
    React.useEffect(() => {
       const results = user.filter(user =>
         user.email.toLowerCase().includes(searchTerm) ||
         user.first_name.toLowerCase().includes(searchTerm) ||
         user.last_name.toLowerCase().includes(searchTerm)
       );
       setSearchResults(results);
     }, [searchTerm]);

    return (
        <div>
            <Row className='mt-4'>
                <Col xs={12} sm={6} md={4}  lg={3}>
                    <div className="form-group has-search">
                        <Search className="has-search form-control-feedback pt-1 pl-3" />
                        <FormControl 
                            type="text" 
                            placeholder="Search for appointment" 
                            className="mr-sm-2 pl-5"          
                            value={searchTerm}
                            onChange={handleChange}
                        />
                    </div> 
                </Col>

                {/* This is now only Ui element for the dropdown */}
                <AppBidSelect />
            </Row>
            <AppUserResult searchResult={searchResults} />
        </div>
    )
}

export default AppSearchBar
