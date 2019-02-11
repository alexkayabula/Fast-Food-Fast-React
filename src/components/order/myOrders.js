/* eslint-disable react/jsx-key */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getMyOrders } from '../../actions/orderAction';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


const API_HOST_URL = process.env.API_URL;
export class MyOrders extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getMyOrders(`${API_HOST_URL}/users/orders`);
  }


  render() {

    const postOrders = this.props.myorders.myorders.map(post => (
      <section id="dashboard-page" className="flex-grow-1">
        <section  className="mt-5 mb-2">
          <div className="container">
            <div className="row">
              <div className="col-md-10 m-auto">
                <div className="card mb-3">
                  <div className="card-body">
                    <h5 className="card-title">Food:{post.item_name}</h5>
                    <h5 className="card-title">Order Id:{post.orderId}</h5>
                    <h5 className="card-text">Quantity:{post.quantity}</h5>
                    <h5 className="card-title">Status:{post.status}</h5>
                    <h5 className="card-title">Username:{post.username}</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    ));
    return (
      <div>
        {postOrders}
        <div className="container d-flex flex-row justify-content-end mb-3">
        </div>
      </div>
    );
  }
}

MyOrders.propTypes = {
  myorders: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  return {
   myorders: state.myorders,
  };
};

export default connect(
  mapStateToProps,
  { getMyOrders: getMyOrders }
)(MyOrders);
