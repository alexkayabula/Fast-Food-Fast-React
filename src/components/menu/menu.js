/* eslint-disable react/jsx-key */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getMenu } from '../../actions/menuAction';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';



const API_HOST_URL = process.env.API_URL;

export class Menu extends Component {
  constructor(props) {
    super(props);
  }
  
  componentDidMount() {
    this.props.getMenu(`${API_HOST_URL}/menu`);
  }


  render() {
    const postItem = this.props.menu.menu.map(post => (
      <section id="dashboard-page" className="flex-grow-1">
        <section className="mt-5 mb-2">
          <div className="container">
            <div className="row">
              <div className="col-md-10 m-auto">
                <div className="card mb-3">
                  <div className="card-body">
                    
                    <h5 className="card-title">Food:&nbsp;  {post.item_name}</h5>
                    <h5 className="card-text">Price:&nbsp;  {post.price}/=</h5>
                    <Link to="/order">
                    <button
                        onClick={this.Order}
                        type="button"
                        className="btn btn-warning mr-1"
                      >
                        <i className="fas fa-utensils"></i>
                    </button>
                    </Link>
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
        {postItem}
        <div className="container d-flex flex-row justify-content-end mb-3">
        </div>
      </div>
    );
  }
}

Menu.propTypes = {
  menu: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  return {
    menu: state.menu,
  };
};

export default connect(
  mapStateToProps,
  { getMenu: getMenu }
)(Menu);
