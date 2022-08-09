import React from 'react';
import './BoysDress.css'

const boysDress = ({ boysDress }) => {
    const { name, price, img, color } = boysDress
    return (
        <div class="card w-96 bg-base-300 shadow-xl">
            <figure class="px-10 pt-10">
                <img src={img} alt="Shoes" class="rounded-xl boys-style" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title">{name}</h2>
                <p>price:- ${price}</p>
                <p>color:- {color}</p>
                <div class="card-actions">
                    <button class="btn btn-primary">Buy Now</button>
                </div>
            </div>

        </div>
    );
};

export default boysDress;