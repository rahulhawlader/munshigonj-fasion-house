import React from 'react';
import UserDiscountDress from '../../../Hooks/UserDiscountDress';
import DisCountDress from './DisCountDress';
import './DiscountDresses.css'
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom'

const DisCountDresses = () => {
    const [discountDresses, setDiscountDresses] = UserDiscountDress([])
    return (
        <>
            <div className='background-style m-3'>
                <h1 className='text-5xl text-center mt-10 text-white'> Discount Section</h1>
                <h3 className='text-3xl text-center text-red-700 '>   <Marquee>20% ALL Dress Discount</Marquee> </h3>

                <div className='w-11/12 mx-auto grid gap-10  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 bg-black my-10  '>
                    {
                        discountDresses.slice(0, 8).map(discountDress => <DisCountDress
                            key={discountDress._id}
                            discountDress={discountDress}
                        ></DisCountDress>)
                    }
                </div>
                <div className='flex justify-center '>
                    <Link to="/discountAllDresses">

                        <button class=" btn btn-link  text-white font-bold  ">see more</button>
                    </Link>
                </div>
            </div>

        </>
    );
};

export default DisCountDresses;