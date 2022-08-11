import React from 'react';

const DiscountAllDress = ({ discountDress }) => {
    const { name, img, price, color, discount } = discountDress;
    return (
        <div>
            <div class="card mx-auto bg-black text-white shadow-xl ">
                <figure><img className='new-styles-img' src={img} alt="Dress" /></figure>
                <div class="card-body">
                    <h2 class="card-title">
                        Discount
                        <div class="badge badge-secondary">20%</div>
                    </h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <p> Price  <del>${price}    </del>
                        OF<span className=' font-bold'> ${discount}</span>  </p>
                    <div class="card-actions justify-end b">
                        <button class="btn bg-white   text-black">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DiscountAllDress;