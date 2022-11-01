import React from 'react';
import { FiPhoneCall,} from 'react-icons/fa';

const ContructUs = () => {
    return (
        <div className='w-full h-64 bg-black my-20 rounded-lg text-white flex justify-around items-center'>

            <div>                
              <p>We are open monday-friday</p>
               <p className='text-xl font-bold'>7:00 am- 9:00pm</p>
            </div>

            <div>
            
               <p>Have a question?</p>
                <p className='text-xl font-bold'>+2546 251 2658</p>
            </div>

            <div>
               <p>Need a repair?our address</p>
               <p className='text-xl font-bold'>Liza Street,New York</p>
            </div>
        </div>
    );
};

export default ContructUs;