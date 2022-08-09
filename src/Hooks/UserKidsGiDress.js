import React, { useEffect, useState } from 'react';

const UserKidsGiDress = () => {
    const [kidsGiDresses, setKidsGiDresses] = useState([]);

    useEffect(() => {
        fetch('kidsGiDress.json')
            .then(res => res.json())
            .then(data => setKidsGiDresses(data))
    }, [])
    return [kidsGiDresses, setKidsGiDresses]
};

export default UserKidsGiDress;