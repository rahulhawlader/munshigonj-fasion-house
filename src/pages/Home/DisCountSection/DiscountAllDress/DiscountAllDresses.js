import React from 'react';
import UserDiscountDress from '../../../../Hooks/UserDiscountDress';
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom'
import DiscountAllDress from './DiscountAllDress';


const DiscountAllDresses = () => {
    const [discountDresses] = UserDiscountDress([])
    return (
        <>
            <div className='background-style m-3'>
                <h1 className='text-5xl text-center mt-10 text-white'> Discount Section</h1>
                <h3 className='text-3xl text-center text-red-700 '>   <Marquee>20% ALL Dress Discount</Marquee> </h3>

                <div className='w-11/12 mx-auto grid gap-10  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 bg-black my-10  '>
                    {

                        discountDresses.map(discountDress => <DiscountAllDress
                            key={discountDress._id}
                            discountDress={discountDress}

                        ></DiscountAllDress>)
                    }
                </div>
                <div className='flex justify-center '>
                    <Link to="/home">

                        <button class=" btn btn-link  text-white font-bold  ">Home</button>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default DiscountAllDresses;