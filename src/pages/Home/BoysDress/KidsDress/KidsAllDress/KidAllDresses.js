import React from 'react';
import UserKidsDress from '../../../../../Hooks/UserKidsDress';
import KidAllDresss from './KidAllDresss';
import { Link } from 'react-router-dom';

const KidAllDresses = () => {
    const [kidsDresses] = UserKidsDress([])
    return (
        <>

            <div>
                <h4 className='text-center text-3xl text-white'> Kids Boys all Dresses </h4>
                <div className='w-11/12 mx-auto grid gap-5 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 py-10' >
                    {

                        kidsDresses.map(kidsDress => <KidAllDresss
                            key={kidsDress._id}
                            kidsDress={kidsDress}

                        ></KidAllDresss>)

                    }


                </div>
                <div className='flex justify-center '>
                    <Link to="/home">
                        <button class=" btn btn-link  text-white font-bold ">Home</button>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default KidAllDresses;