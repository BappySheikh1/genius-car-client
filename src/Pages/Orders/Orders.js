import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../useContexts/AuthProvider';
import OrderRow from './OrderRow';

const Orders = () => {
    const {user}=useContext(AuthContext);
     const [orders,setOrder]=useState([])
   
    useEffect(()=>{
      fetch(`http://localhost:5000/orders?email=${user?.email}`)
      .then(res => res.json())
      .then(data => setOrder(data))

    },[user?.email])
    // console.log(orders);
    return (
        <div>
            <h2 className="text-5xl">You have {orders.length} Orders</h2>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Services</th>
                            <th>Customer Contract</th>
                            <th>Message</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders?.map(order => <OrderRow 
                            key={order._id}
                            order={order}
                            orders={orders}
                            setOrder={setOrder}
                            />)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Orders;