import React, { useEffect, useState } from 'react';

const UserKidsDress = () => {
    const [kidsDresses, setKidsDresses] = useState([])

    useEffect(() => {
        fetch('kidsDress.json')
            .then(res => res.json())
            .then(data => setKidsDresses(data))
    }, [])
    return [kidsDresses, setKidsDresses]
};

export default UserKidsDress;