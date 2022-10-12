import React from 'react';
import { useState } from 'react';
import './Time.css'


const Time = () => {
    let time = new Date().toLocaleTimeString();
    let date = new Date().toLocaleDateString();

    const [ctime, setCtime] = useState(time)

    const UpdateTime = () => {
        time = new Date().toLocaleTimeString();

        setCtime(time)

    }

    setInterval(UpdateTime, 1000)
    return (
        <div className='grid ms:grid-cols-1 md:grid-cols-2 lg:grid-cols-2  my-20  container  mx-auto'>
            <div className='text-center time'>

                <h1 className='text-3xl text-black '>{ctime}</h1>

            </div>
            <div className='text-center date'>
                <h1 className='text-3xl text-black  '>{date}</h1>
            </div>
        </div>
    );
};

export default Time;