import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../useContexts/AuthProvider';
import OrderRow from './OrderRow';

const Orders = () => {
    const {user,logOutUser}=useContext(AuthContext);
     const [orders,setOrder]=useState([])
   
    useEffect(()=>{
      fetch(`https://genius-car-server-topaz.vercel.app/orders?email=${user?.email}`,{
        headers: {
            authorization: `Bearer ${localStorage.getItem('geniusToken')}`
        }
      })
      .then(res => {
        if(res.status === 401 || res.status === 403){
           return logOutUser();
        }
        return res.json()
    
    })
      .then(data => {
        //  console.log(data);
        setOrder(data)
    }
        )

    },[user?.email,logOutUser])
    // console.log(orders);
    return (
        <div className='my-20'>
            <h2 className="text-5xl">You have {orders?.length} Orders</h2>
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