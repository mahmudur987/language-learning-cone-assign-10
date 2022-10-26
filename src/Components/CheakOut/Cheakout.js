import React from 'react';
import { useContext } from 'react';
import { authContext } from '../../UserContext/UserContext';

const Cheakout = () => {
    const { cart } = useContext(authContext);
    console.log(cart)

    return (
        <div className='p-4 border border-blue-600 m-5 rounded-lg'>

            <h1 className='text-3xl font-bold m-5 text-rose-700 '> Course Name :{cart.name}</h1>
            <h1 className='text-2xl font-bold m-5 '> Course title :{cart.title}</h1>
            <h1 className='text-2xl font-bold m-5 '> Group Name :{cart.company}</h1>
            <h1 className='text-2xl font-bold m-5 '> Phone number :{cart.phone}</h1>
            <h1 className='text-2xl font-bold m-5 '> Price:{cart.price}</h1>

            <button className='btn btn-info font-bold'>Confirm</button>





        </div>
    );
};

export default Cheakout;