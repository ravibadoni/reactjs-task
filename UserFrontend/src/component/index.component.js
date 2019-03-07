import React, { Component } from 'react';
import axios from 'axios';
import TableRow from './TableRow';
import Pagination from './pagination.component';

export default class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {business: [],totalRecords: 0, response:false};
        this.onSubmit = this.onSubmit.bind(this);
        this.onPageChanged = this.onPageChanged.bind(this);
    }
    async componentDidMount() {
        try {
            const response = await  axios.get('http://localhost:3000/products/all')
            await this.setState({business: response.data.data,totalRecords: response.data.totalProducts, response:true});
          } catch (err) {
            console.log(`Cannot GET data.`, err)
          }

    }

    /**
     * for getting data in table
     * @returns {any[]}
     */
    tabRow() {
        return this.state.business.map(function (object, i) {
             return <TableRow obj={object} key={i}/>;
        });
    }

    /**
     * pagination on page change function
     * @param data
     */
    onPageChanged = data => {
        const { currentPage } = data;
        console.log("currentPage", currentPage);
        try {
            axios.get('http://localhost:3000/products/paginate/'+currentPage)
            .then(response=>{
                this.setState({business: response.data.data,totalRecords: response.data.totalProducts, response:true});
            });
        } catch (err) {
            console.log(`Cannot GET data.`, err)
        }
      };

    /**
     * search data functionality
     * @param e
     */
    onSubmit(e) {
        e.preventDefault();
        const form = document.getElementById("search_text");
        const obj = {name: form.value};
        axios.post('http://localhost:3000/products/search' , obj)
        .then(response => {
            console.log("set state", this.state);
            console.log("====", response.data.data);
            this.setState({business: response.data.data});
        })
        .catch(function (error) {
            console.log(error);
        })
    }

    /**
     * simple sorting ascending function
     */
    sortAscending = () => {
    const listing = this.state.business;
    const sort = listing.reverse();
    this.setState({ business: sort })
}
    /**
     * simple sorting descending function
     */
    sortDescending = () => {
    const listing = this.state.business;
    const sort = listing.reverse();
    this.setState({ business: sort })
}

    render() {
        const totalCount = this.state.totalRecords;
        
        if (!this.state.response){
            return <div>Loading...</div>
        }else{
            return (
                <div>
                    <h3 align="center">Products List</h3>
            <button className="btn btn-primary" onClick={this.sortAscending}>asc</button>
            <button className="btn btn-primary" onClick={this.sortDescending}>desc</button>
                    <h4>Total products: {totalCount}</h4>
                    <form className="float-right" onSubmit={this.onSubmit}>
                        <div className="form-group"
                             >
                            <input id="search_text" placeholder="product name" required type="text" className="form-control"/>
                        </div>
                        <div className="form-group">
                            <input type="submit" value="Search Product" className="btn btn-primary"/>
                        </div>
                    </form>
    
                    <div className="d-flex flex-row py-4 align-items-center">
                        <Pagination
                            totalRecords={totalCount}
                            pageLimit={10}
                            pageNeighbours={4}
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
}