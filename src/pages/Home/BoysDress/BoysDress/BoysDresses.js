import React from 'react';
import UserBoysDress from '../../../../Hooks/UserBoysDress';
import BoysDress from '../../../Home/BoysDress/BoysDress/boysDress.js/BoysDress'

const BoysDresses = () => {
    const [boysDresses, setBoysDresses] = UserBoysDress([])
    return (
        <>
            <h4 className='text-center text-3xl text-green-600 my-5' >Boys dress</h4>
            <div className='w-11/12 mx-auto grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10'>
                {
                    boysDresses.slice(0, 6).map(boysDress => <BoysDress
                        key={boysDress._id}
                        boysDress={boysDress}
                    ></BoysDress>)
                }

            </div>


        </>
    );
};

export default BoysDresses;