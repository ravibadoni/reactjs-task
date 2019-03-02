// TableRow.js

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class TableRow extends Component {
    render() {
        return (
            <tr>
                <td>
                    {this.props.obj.name}
                </td>
                <td>
                    {this.props.obj.description}
                </td>
                <td>
                    {this.props.obj.price}
                </td>
                <td>
                    <Link to={'/create'} className="btn btn-primary">Edit</Link>
                </td>
            </tr>
        );
    }
}

export default TableRow;