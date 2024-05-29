import React, { useState, useEffect } from 'react';
import { FaCar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { IoCalendarNumber } from "react-icons/io5";
import styles from './CSS/BookingDetails.module.css'; // 스타일 파일을 import

const images = [
    { url: 'data:image/jpeg;base64,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', alt: 'image1' },
    { url: 'data:image/jpeg;base64,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', alt: 'image2' },
    { url: 'data:image/jpeg;base64,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', alt: 'image3' },
];

const Details = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [memo, setMemo] = useState('');
    const [details, setDetails] = useState({
        carModel: '두발자전거',
        rating: 4.5,
        usagePeriod: '2023-04-01 to 2023-04-07',
    });

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className={styles.container}>
            <div className={styles.imageSlider}>
                <img  src={images[currentImageIndex].url} alt={images[currentImageIndex].alt}
                     style={{opacity: 1, maxWidth: '500px', borderRadius : "15px"}}/>
            </div>
            <div className={styles.imageSlider}>
                {images.map((image, index) => (
                    <img key={index} src={image.url} alt={image.alt}
                         className={styles.thumbnail}
                         style={{width: '100px', opacity: currentImageIndex === index ? 1 : 0.5}}/>
                ))}
            </div>
            <div className={styles.details}>
                <p><FaCar className={styles.FaCar}/> 차종: {details.carModel}</p>
                <p><FaStar className={styles.FaStar}/> 평점: {details.rating}</p>
                <p><IoCalendarNumber className={styles.IoCalendarNumber}/> 이용기간: {details.usagePeriod}</p>
            </div>

        </div>
    );
};

export default Details;
