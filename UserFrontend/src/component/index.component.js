import React, { Component } from 'react';
import axios from 'axios';
import TableRow from './TableRow';

export default class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {business: []};
    }

    componentDidMount() {
        axios.get('http://35.200.154.254:3000/products/all')
            .then(response => {
                console.log("====", response.data);
                this.setState({business: response.data.data});
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    tabRow() {
        return this.state.business.map(function (object, i) {
             return <TableRow obj={object} key={i}/>;
        });
    }

    render() {
        return (
            <div>
                <h3 align="center">Products List</h3>
                <table className="table table-striped" style={{marginTop: 20}}>
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th colSpan="2">Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    { this.tabRow() }
                    </tbody>
                </table>
            </div>
        );
    }
}