import { useUserContext } from '../Context/useUserContext'
import { useEffect, useState } from 'react';
import './OrderDetails.css'

function Orders() {
  const {userDetails} = useUserContext();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    async function fetchOrders() {
      const response = await fetch(`http://localhost:3000/tsir/purchase/users/${userDetails._id}`);
      const data = await response.json();
      console.log(data)
      setOrders(data);
    }
    fetchOrders();
  }, []);


  return (
    <div className='orders'>
      <h2>Orders</h2>
      <table>
        <thead>
          <tr>
            <th>Product ID</th>
            <th>Purchase Date</th>
            <th>Quantity</th>
            <th>Total Price</th>
            <th>Is Delivered</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order._id}>
              <td>{order.productId}</td>
              <td>{order.purchaseDate}</td>
              <td>{order.quantity}</td>
              <td>{order.totalPrice}</td>
              <td>{order.isDelivered ? 'Yes' : 'No'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Orders;

