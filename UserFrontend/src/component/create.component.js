// Products create.component.js
import React, { Component } from 'react';
import axios from 'axios';

export default class Create extends Component {
    constructor(props) {
        super(props);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangedescripton = this.onChangedescripton.bind(this);
        this.onChangeprice = this.onChangeprice.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: '',
            description: '',
            price:''
        }
    }
    onChangeName(e) {
        this.setState({
            name: e.target.value
        });
    }
    onChangedescripton(e) {
        this.setState({
            description: e.target.value
        })
    }
    onChangeprice(e) {
        this.setState({
            price: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();
        const obj = {
            name: this.state.name,
            description: this.state.description,
            price: this.state.price
        };
        axios.post('http://localhost:3000/products/create', obj)
            .then(res =>{
                console.log(res.data);
                this.setState({ message: "Product added Successfully" });
                }
            );

        this.setState({
            message: '',
            name: '',
            description: '',
            price: ''
        })

    }
    render() {
        return (
            <div style={{marginTop: 10}}>
                <h2 className="text-success">{ this.state.message }</h2>
                <h3>Add New Product</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group"
                         value={this.state.name}
                         onChange={this.onChangeName}>
                        <label>Product Name:  </label>
                        <input required type="text" className="form-control"/>
                    </div>
                    <div className="form-group"
                         value={this.state.description}
                         onChange={this.onChangedescripton}>
                        <label>Product Description: </label>
                        <textarea required className="form-control"></textarea>
                    </div>
                    <div className="form-group"
                         value={this.state.price}
                         onChange={this.onChangeprice}>
                        <label>Product Price: </label>
                        <input required type="number" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Add Product" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        )
    }
}