import React from 'react';

// Prop Types
import PropTypes from 'prop-types';

// moment
import moment from 'moment';

// React Currency Format
import CurrencyFormat from 'react-currency-format';

// reducer
import { getTotalPrice } from '../../store/reducer';

// Components
import CheckoutProduct from '../checkout/CheckoutProduct';

// Style
import './Order.scss';

const Order = ({order}) => {
    const renderItemsWithPrice = (value) => (
        <h3>Order Total: {value}</h3>
    );

    return (
        <div className="order">
            <h2>Order</h2>
            <p className="order__id">
                <small>{order.id}</small>
            </p>
            <p>{
                moment.unix(order.data.created).format('MMMM Do YYYY, h:mma')
                }
            </p>
            {order.data.cart?.map((product) => (
                <CheckoutProduct 
                    id={product.id}
                    title={product.title}
                    price={product.price}
                    image={product.image}
                    rating={product.rating}
                    hideRemoveButton
                />
            ))}
            <div className="order__total">
                <CurrencyFormat
                    renderText={(value) => renderItemsWithPrice(value)}
                    decimalScale={2}
                    value={getTotalPrice(order.data.cart)}
                    displayType={"text"}
                    thousandSeperator={true}
                    prefix={"$"}
                />
            </div>
        </div>
    );
};

Order.propTypes = {
    order: PropTypes.object.isRequired,
  };

export default Order;
