import React, { Component } from 'react';
import axios from 'axios';
import TableRow from './TableRow';
import Pagination from './pagination.component';

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
                <div className="d-flex flex-row py-4 align-items-center">
                    <Pagination
                        totalRecords={10}
                        pageLimit={8}
                        pageNeighbours={1}
                        onPageChanged={this.onPageChanged}
                    />
                </div>
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