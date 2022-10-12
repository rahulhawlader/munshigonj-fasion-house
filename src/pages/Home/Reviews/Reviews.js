import React from 'react';
import './Reviews.css'
import { FaStar } from "react-icons/fa";


const colors = {
    orange: "#FFBA5A",
    grey: "#a9a9a9"

}

const Reviews = () => {
    const stars = Array(5).fill(0);

    const [currenValue, setCurrenValue] = React.useState(0);
    const [hoverValue, setHoverValue] = React.useState(undefined);


    const handleClick = value => {
        setCurrenValue(value)
    }

    const handleMouseHover = value => {
        setHoverValue(value)
    }

    const handleMouseLeave = () => {
        setHoverValue(undefined)
    }

    return (
        <div style={styles.container} className='reviews-border my-10 shadow'>
            <h1 className='text-6xl text-white mt-10'>Coustomers <span className='text-green-500'> Reviews</span> !!!</h1>
            <h3 className='text-4xl mt-10 text-white'> Please Your <span className='text-green-500'> Reviews</span> !!! </h3>

            <div style={styles.stars} className="star-flex my-10 gap-5">
                {stars.map((_, index) => {
                    return (
                        <FaStar
                            key={index}

                            size={24}
                            style={{

                                marginRight: 10,
                                cursor: "pointer"
                            }}

                            color={(hoverValue || currenValue) > index ? colors.orange : colors.grey}
                            onClick={() => handleClick(index + 1)}
                            onMouseOver={() => handleMouseHover(index + 1)}
                            onMouseLeave={() => handleMouseLeave(index + 1)}
                        />
                    )
                })}




            </div>
            <textarea className='text-black'
                placeholder="What's your feedback"
                style={styles.textarea}


            />

            <button className='btn mb-10 bg-gray-600 text-white'
                style={styles.button}

            >Submit</button>
        </div>
    );
};

const styles = {
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    textarea: {
        border: "1px solid #a9a9a9",
        borderRedius: 5,
        width: 300,
        margin: "20px 0",
        minHeight: 100,
        padding: 10
    },
    button: {
        border: "1px solid #a9a9a9",
        borderRedius: 5,
        width: 300,
        padding: 10
    }
}


export default Reviews;