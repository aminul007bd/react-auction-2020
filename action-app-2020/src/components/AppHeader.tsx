import React, { Component } from 'react'
import { ArrowLeft } from 'react-bootstrap-icons';

export class AppHeader extends Component {
    render() {
        return (
            <div>
                <ArrowLeft color="royalblue" size={96} />
                <h1> App Header </h1>
            </div>
        )
    }
}

export default AppHeader
