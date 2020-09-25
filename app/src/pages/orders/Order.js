import React from 'react';

// Prop Types
import PropTypes from 'prop-types';

// moment
import moment from 'moment';

// Style
import './Order.scss';

const Order = ({order}) => {
    return (
        <div className="order">
            <h2>Order</h2>
            <p className="order__id">
                <small>{order.id}</small>
            </p>
            <p>{moment.unix(order.data.created).format('MMMM Do YYYY, h:mma')}</p>
        </div>
    );
};

Order.propTypes = {
    order: PropTypes.object.isRequired,
  };

export default Order;
