import React, { useEffect, useState } from 'react';
import { FaCross, FaRemoveFormat, FaUser } from 'react-icons/fa';

const OrderRow = ({order,orders,setOrder}) => {
    const {serviceName, price,_id,email, customer,phone,service}=order
     const [orderService,setOrderService]=useState({})

    useEffect(()=>{
        fetch(`http://localhost:5000/services/${service}`)
        .then(res => res.json())
        .then(data => setOrderService(data))
    },[service])
   
    const handleDelete =(_id)=>{
      const proceed =window.confirm('are you sure delete this items')
      if(proceed){
        fetch(`http://localhost:5000/orders/${_id}`,{
            method:'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.deletedCount > 0){
              alert('deleted successFully')

              const remaining=orders.filter(or => or._id !== _id)
              setOrder(remaining)
            }
        })
      }        
    }

    return (
        <>
            
      <tr>
        <th>
          <button className='btn btn-ghost font-bold' onClick={()=>handleDelete(_id)} >x</button>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="rounded w-24 h-24">
                {
                    orderService?.img ? 
                    <img src={orderService.img} alt="Avatar Tailwind CSS Component" />:
                    <FaUser />
                }
              </div>
            </div>
            <div>
              <div className="font-bold">{customer}</div>
              <div className="text-sm opacity-50">{phone}</div>
            </div>
          </div>
        </td>
        <td>
          {serviceName}
          <br/>
          <span className="badge badge-ghost badge-sm">{price}</span>
        </td>
        <td>{email}</td>
        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>
     
        </>
    );
};

export default OrderRow;