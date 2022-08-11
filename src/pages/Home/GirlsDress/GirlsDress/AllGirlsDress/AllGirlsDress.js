import React from 'react';

const AllGirlsDress = ({ girlsDress }) => {
    const { name, img, price, color } = girlsDress;
    return (
        <div>
            <div class="card  text-white bg-black shadow-xl">
                <figure class="px-10 pt-10">
                    <img src={img} alt="Shoes" class="rounded-xl styl" />
                </figure>
                <div class="card-body items-center text-center">
                    <h2 class="card-title">Dress Name:- {name}</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <p>Price:- ${price}   Color:- {color}</p>
                    <div class="card-actions">
                        <button class="btn bg-white hover:bg-white text-black">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllGirlsDress;