import React, { useState, useEffect } from 'react';

// React Currency Format
import CurrencyFormat from 'react-currency-format';

// React Router
import { Link, useHistory } from 'react-router-dom';

// Stripe Hooks
import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js';

// React Flip Move
import FlipMove from 'react-flip-move';

// Services
import { instance } from '../../services';

// Components
import CheckoutProduct from '../checkout/CheckoutProduct';
import { Alert } from '../../components/elements';

// reducer
import { getNameFromEmailUser, getTotalPrice } from '../../store/reducer';

// Data Layer
import { useStateValue } from '../../store/StateProvider';

// Style
import './Payment.scss';

const Payment = () => {

  const history = useHistory();
  const stripe = useStripe();
  const elements = useElements();

  // States
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [processing, setProcessing] = useState('');
  const [succeeded, setSucceeded] = useState(false);
  const [clientSecret, setClientSecret] = useState(true);

  const [{cart, user}, dispatch] = useStateValue();

  useEffect(() => {
    // generate the special stripe secret which allows us charge a customer
    const getClientSecret = async () => {
      const response = await instance({
        method: 'post',
        url: `/payments/create?total=${Math.round(getTotalPrice(cart) * 100)}`,
      });
      console.log('CLIENT SECRET FROM SERVER: ', response.data.clientSecret)
      setClientSecret(response.data.clientSecret);
    };

    getClientSecret();
  },[cart]);

  console.log('payment component client secret: ', clientSecret);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // start processing logic...
    setProcessing(true);

    const payload = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
      }
    }).then(({paymentIntent}) => {
      // paymentIntent = payment confirmation
      setSucceeded(true);
      setError(null);
      setProcessing(false);

      // with replace you can't back to payment page after payment done!
      history.replace('/orders')
    })

  };

  const hadnleChange = (e) => {
    // Listen for changes in CardElement
    // display errors if card customer details worng or some...
    setDisabled(e.empty);
    setError(e.error ? e.error.message : '');
  };

  const renderItemsWithPrice = (value) => (
    <h3>Order Total: {value}</h3>
  );

  return (
    <div className="payment">
      <h1>
        Checkout (
          <Link to="/checkout">{cart.length} items</Link>
        )
      </h1>
      <div className="payment__container">

        {/* Payment section - Delivery Address */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment__address">
            <p>
            { getNameFromEmailUser(user) },
            </p>
            <p>Av 145 Madrid</p>
            <p>Morocco, Rabat</p>
          </div>
        </div>

        {/* Payment section - Items */}
        <div className="payment__section">
          <div classNamme="payment__title">
            <h3>Review Items and delivery</h3>
          </div>
          <div className="payment__items">
            <FlipMove>
              {
                cart?.map(({ id, title, price, image, rating }) => (
                  <CheckoutProduct
                    key={id}
                    id={id}
                    title={title}
                    price={price}
                    image={image}
                    rating={rating}
                  />
                ))
              }
            </FlipMove>
          </div>
        </div>

        {/* Payment section - Payment Method */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment method</h3>
          </div>
          <div className="payment__details">
            <form onSubmit={handleSubmit}>
              <CardElement onChange={hadnleChange}/>
              <div className="paymentprice__container">
                <CurrencyFormat
                  renderText={(value) => renderItemsWithPrice(value)}
                  decimalScale={2}
                  value={getTotalPrice(cart)}
                  displayType={"text"}
                  thousandSeperator={true}
                  prefix={"$"}
                />
                <button disabled={processing || disabled || succeeded}>
                  <span>
                    {
                      processing ? <p>Processing...</p> : 'BUY NOW'
                    }
                  </span>
                </button>
              </div>
              {error && <Alert message={error} />}
            </form>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Payment;
