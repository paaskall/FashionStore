import React from 'react';

const OrderHistoryPage = ({ orders }) => {
  return (
    <div className="order-history-page">
      <h2>Your Order History</h2>
      {orders.length === 0 ? (
        <p>No orders found!</p>
      ) : (
        orders.map(order => (
          <div key={order.id} className="order-item">
            <h3>Order #{order.id}</h3>
            <p>Status: {order.status}</p>
            <div className="order-items">
              {order.items.map(item => (
                <div key={item.id} className="order-item-details">
                  <img src={item.image} alt={item.name} />
                  <p>{item.name} - ${item.price}</p>
                </div>
              ))}
            </div>
            <div className="order-total">Total: ${order.total}</div>
          </div>
        ))
      )}
    </div>
  );
};

export default OrderHistoryPage;
