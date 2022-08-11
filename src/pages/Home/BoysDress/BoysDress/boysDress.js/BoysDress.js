import React from 'react';
import './BoysDress.css'

const boysDress = ({ boysDress }) => {
    const { name, price, img, color } = boysDress
    return (
        <div class="card w-96  shadow-xl bg-white text-black">
            <figure class="px-10 pt-10">
                <img src={img} alt="Shoes" class="rounded-xl boys-style" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title"> Dress Name:- {name}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <p >price:- ${price}</p>
                <p >color:- {color}</p>
                <div class="card-actions">
                    <button class="btn btn-dark text-white">Buy Now</button>
                </div>
            </div>

        </div>
    );
};

export default boysDress;