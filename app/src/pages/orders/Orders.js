import React, {useState, useEffect} from 'react';

// state value
import { useStateValue } from '../../store/StateProvider';

// Database from firebase
import { db } from '../../services/firebase';

// Components
import Order from './Order';

// Styles
import './Orders.scss';

const Orders = () => {
    const [{user}, dispatch] = useStateValue();
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        if(user) {
            // create function here instead...
            db
            .collection('users')
            .doc(user?.uid)
            .collection('orders')
            .orderBy('created', 'desc')
            .onSnapshot((snapshot) => (
                setOrders(snapshot.docs.map((doc) => ({
                    id: doc.id,
                    data: doc.data()
                })))
            ));
        } else {
            setOrders([]);
        };
    },[user]);

    return (
        <div className="orders">
            <h1>your orders</h1>
            <div className="orders__order">
                {
                    orders?.map((order) => (
                        <Order order={order} key={order.id} />
                    ))
                }
            </div>
        </div>
    );
};

export default Orders;