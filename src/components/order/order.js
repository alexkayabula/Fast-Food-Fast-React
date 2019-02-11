import React, { Component } from 'react';
import { withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { makeOrder } from '../../actions/orderAction';

export class Order extends Component {
  constructor() {
    super();
    this.state = {
      item_name: '',
      quantity: '',
      notFoundUser: ''
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      if (nextProps.errors.item_name) {
        this.setState({ item_nameError: nextProps.errors.item_name });
      } else if (nextProps.errors.quantity) {
        this.setState({ quantityError: nextProps.errors.quantity });
      } else {
        this.setState({ notFoundUser: nextProps.errors.error });
      }
    } else {
      window.localStorage.setItem('access_token', makeOrder.nextProps.user.token);
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    const userData = {
      item_name: this.state.item_name,
      quantity: this.state.quantity
    };
    this.props.makeOrder(userData, this.props.history);
  }

  render() {
    const { item_nameError, quantityError, notFoundUser } = this.state;
    return (
      <section id="login" className="flex-grow-1">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h3 className="display-4 text-center">Make your Order</h3>
              <form noValidate onSubmit={this.onSubmit}>
                <span>{notFoundUser}</span>
                <div className="form-group">
                  <input
                    type="username"
                    className="form-control form-control-lg"
                    placeholder="Enter Item name"
                    name="item_name"
                    value={this.state.item_name}
                    onChange={this.onChange}
                  />
                  {item_nameError && (
                    <div className="invalid-feedback">{item_nameError}</div>
                  )}
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control form-control-lg"
                    placeholder="Enter Quantity"
                    name="quantity"
                    value={this.state.quantity}
                    onChange={this.onChange}
                  />
                  {quantityError && (
                    <div className="invalid-feedback">{quatityError}</div>
                  )}
                </div>
                <input
                  type="submit"
                  className="btn btn-warning btn-block mt-4"
                />
              </form>
              <div className="mt-2 text-right">
              </div>
              <div className="mt-4 text-center">
              </div>
              <div className="mt-4 text-right">
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

Order.propType = {
  makeOrder: PropTypes.func.isRequired,
  order: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  return {
    order: state.auth,
    errors: state.errors
  };
};

export default connect(
  mapStateToProps,
  { makeOrder }
)(withRouter(Order));
