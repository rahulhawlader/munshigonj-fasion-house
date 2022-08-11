import React from 'react';
import UserMarrageDress from '../../../../Hooks/UserMarrageDress';
import MarrageDress from '../MarrageDress/MarrageDress';
import './MarrageDresses.css'
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom'

const MarrageDresses = () => {
    const [marrageDresses] = UserMarrageDress([])
    return (
        <>
            <div className='marrage-style my-10 m-3'>

                <h3 className='text-center font-bold text-4xl text-black my-10' > Marrage Couple Dresses</h3>
                <h3 className='text-red-400 text-3xl bg-black p-2 font-bold'> <Marquee>All New Dresses  </Marquee></h3>
                <div className='w-11/12 mx-auto grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10 '>
                    {
                        marrageDresses.slice(0, 9).map(marrageDress => <MarrageDress
                            key={marrageDress._id}
                            marrageDress={marrageDress}

                        ></MarrageDress>)
                    }
                </div>
                <div className='flex justify-center '>
                    <Link to="/marrageAllDresses">
                        <button class=" btn btn-link  text-black  font-bold">see more</button>

                    </Link>
                </div>
            </div>


        </>
    );
};

export default MarrageDresses;