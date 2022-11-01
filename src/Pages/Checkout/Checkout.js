import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../useContexts/AuthProvider';

const Checkout = () => {
    const {title,price,_id} =useLoaderData()
    
    const {user}=useContext(AuthContext)

    const handlePlaceOrder=(event)=>{
        event.preventDefault();
        const form =event.target
        const name =`${form.firstName.value} ${form.lastName.value}`
        const email= user?.email || 'Unregisterd' ;
        const phone =form.phone.value;
        const message =form.message;

        const order ={
            service: _id,
            serviceName: title,
            price,
            customer:name,
            email,
            phone,
            message
        }
    }
    return (
        <div className='my-5'>
           <form onSubmit={handlePlaceOrder}>
            <h2 className="text-4xl font-bold my-10">You are about to order {title}</h2>
            <h2 className="text-3xl font-bold my-10">{price}</h2>
           <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>

           <input type="text" name='firstName' placeholder="First Name" className="input input-bordered w-full " />
           
           <input type="text" name='lastName' placeholder="Last Name" className="input input-bordered w-full " />
           
           <input type="text" name='phone' placeholder="Your Phone" className="input input-bordered w-full " />
           
           <input type="text" name='email' placeholder="Your email" defaultValue={user?.email} className="input input-bordered w-full " readOnly />
           </div>
           <textarea className="textarea textarea-bordered h-24 w-full my-7" name='message' placeholder="your message"></textarea>

           <input type="submit" className='btn w-full bg-red-600 border-none hover:bg-red-400' value='Place Your order' />
           </form>
        </div>
    );
};

export default Checkout;