import React, { Component } from 'react';

import  { Route, Switch, withRouter } from 'react-router-dom';

import CreateOrderForm from './CreateOrderForm.jsx';
import OrderTable from './OrderTable.jsx';

/* Main Component */

class Main extends Component {

  constructor() {
    super();

    this.state = {
      order: {
        id: '',
        name : '',
        email: '',
        address: '',
        phone: '',
        units: '',
      },
     orderList: [],
    
    }

    this.initialOrder = this.state.order;

    this.handleButton = this.handleButton.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.resetOrderList = this.resetOrderList.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  
  }

  handleButton() {
    this.props.history.push('/new');
  

  }

  handleChange(name, value) {
    this.setState(
      prevState => { 
        return(
          { 
            order: { ...prevState.order, [name]:value } 
          }
        )
      }
    )
  }

  handleSubmit() {
    this.setState(
      prevState => {
        return(
        {
          orderList: [...prevState.orderList, prevState.order],
          order: this.initialOrder
        })
      }, () => {
        this.props.history.push('/');
        
      }
    )
  }

  resetOrderList() {
    this.setState({
      orderList: []
    })
  }

  handleDelete(itemToBeDeleted) {
 
    let updatedOrderList = this.state.orderList.filter(function(order) { return order.id !== itemToBeDeleted.id });
    this.setState({
      orderList: updatedOrderList
    })
 }

  
  renderTopButtons() {
    return( 
      <div className = "container">
        <div className = "row col-md-8 offset-md-4   mt-4 mb-4">
          <button className = "btn btn-primary mx-2" onClick = { this.handleButton }> Create New Order </button>
          <button className = "btn btn-danger mx-2" onClick = { this.resetOrderList }> Delete All </button>
        </div>
      </div>)
  }

  render() {

    return(
      <div>
       { this.props.history.location.pathname === '/'? this.renderTopButtons() : null }
        <Switch>
          <Route exact path="/" render={ () => <OrderTable {...this.props} orders = { this.state.orderList } onDelete = {this.handleDelete} /> } />
          <Route path="/new" render = { () => <CreateOrderForm {...this.props} onChange = {this.handleChange} onSubmit = {this.handleSubmit} /> } />
        </Switch>
              
      </div>
      
    );
  }
}

export default withRouter(Main);

