import React from 'react';

const AllKidsGirlsDress = ({ kidsGiDress }) => {
    const { name, img, color, price } = kidsGiDress;
    return (
        <div>
            <div class="card bg-black shadow-xl   text-white">
                <figure class="px-10 pt-10">
                    <img src={img} alt="Dress" class="rounded-xl" />
                </figure>
                <div class="card-body items-center text-center">
                    <h2 class="card-title">Dress Name:- {name}</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <p>Price:- ${price}   Color:- {color}</p>

                    <div class="card-actions">
                        <button class="btn hover:bg-white bg-white text-black">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllKidsGirlsDress;