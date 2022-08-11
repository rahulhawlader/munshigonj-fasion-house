import React from 'react';
import UserBoysDress from '../../../../../Hooks/UserBoysDress';
import { Link } from 'react-router-dom';
import BoysAllDress from './BoysAllDress';

const BoysAllDresses = () => {
    const [boysDresses, setBoysDresses] = UserBoysDress([])
    return (
        <>
            <h4 className='text-center text-3xl text-white my-5' >Boys All dresses</h4>
            <div className='w-11/12 mx-auto grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-10'>
                {
                    boysDresses.map(boysDress => <BoysAllDress

                        key={boysDress._id}
                        boysDress={boysDress}
                    ></BoysAllDress>)
                }

            </div>
            <div className='flex justify-center '>
                <Link to="/home">
                    <button class=" btn btn-link  text-white font-bold ">Home</button>
                </Link>
            </div>
        </>
    );
};

export default BoysAllDresses;