import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../useContexts/AuthProvider';

const Checkout = () => {
    const {title,price,_id,img} =useLoaderData()
    
    const {user}=useContext(AuthContext)

    const handlePlaceOrder=(event)=>{
        event.preventDefault();
        const form =event.target
        const name =`${form.firstName.value} ${form.lastName.value}`
        const email= user?.email || 'Unregisterd' ;
        const phone =form.phone.value;
        const message =form.message.value;

        
        const order = {
            service: _id,
            serviceName: title,
            price,
            customer: name,
            email,
            phone,
            message
        }
        
    //   if(phone.length > 10){
    //     alert('phone number most 10 degiest')
    //   }
    
    fetch('http://localhost:5000/orders', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(order)
    })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.acknowledged){
                alert('Order placed successfully')
                form.reset();
                
            }
        })
        .catch(er => console.error(er));

    }
    return (
        <div className='my-5'>
            <div className=''>
                <img src={img} alt="" className='w-full rounded-md h-[400px] mb-32'/>
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-[230px]  top-1/3">
          <h1 className='text-6xl font-bold text-white'>
          Check Out
          </h1>
          </div>
           <form onSubmit={handlePlaceOrder}>
            <h2 className="text-4xl font-bold my-10">You are about to order {title}</h2>
            <h2 className="text-3xl font-bold my-10">{price}</h2>
           <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>

           <input type="text" name='firstName' placeholder="First Name" className="input input-bordered w-full " />
           
           <input type="text" name='lastName' placeholder="Last Name" className="input input-bordered w-full " />
           
           <input type="text" name='phone' placeholder="Your Phone" className="input input-bordered w-full " required/>
           
           <input type="text" name='email' placeholder="Your email" defaultValue={user?.email} className="input input-bordered w-full " readOnly />
           </div>
           <textarea className="textarea textarea-bordered h-24 w-full my-7" name='message' placeholder="your message" required></textarea>

           <input type="submit" className='btn w-full bg-red-600 border-none hover:bg-red-400' value='Place Your order' />
           </form>
        </div>
    );
};

export default Checkout;