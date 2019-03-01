// Products create.component.js
import React, { Component } from 'react';

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
       // console.log("this.setState", this.setState);
        console.log("this.state", this.state);
        // e.preventDefault();
        // console.log(`The values are ${this.state.name}, ${this.state.description}, and ${this.state.price}`);
        // this.setState({
        //     name: '',
        //     description: '',
        //     price:''
        // })
    }
    render() {
        return (
            <div style={{marginTop: 10}}>
                <h3>Add New Product</h3>
                <form>
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
                        <input required type="text" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <input onClick={this.onSubmit} type="submit" value="Add Product" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        )
    }
}