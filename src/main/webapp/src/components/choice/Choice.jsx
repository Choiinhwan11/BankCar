import React, { useState } from 'react';
import '../../CSS/ChoiceCSS.css';
import "../profile/ProfilePage.css";
import 'react-datepicker/dist/react-datepicker.css';
import Review from '../review/Review';
import { useLocation, useNavigate} from "react-router-dom";
import Carousel from './Carousel';
import OwnerDescription from './OwnerDescription';
import ChoiceFooter from './ChoiceFooter';
import Map from './Map';
import ChoiceData from './ChoiceData';
import {useSelector} from "react-redux";

const Choice = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const carid = searchParams.get('carid');
    const startDate = searchParams.get('startdate');
    const endDate = searchParams.get('enddate');
    const startTime = searchParams.get('starttime');
    const endTime = searchParams.get('endtime');

    const userId = useSelector((state) => state.Login.id);

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [choicedata, setChoicedata] = useState({
        owner: {
            image: "",
            // userid:"",
            name: "",
            email: ""
        },
        map: {
            address: "",
            coordinates: {
                lat: 0,
                lng: 0
            }
        },
        footer: {
            price: "",
            startTime: startTime,
            endTime: endTime,
            startDate:startDate,
            endDate:endDate,
            onReserve: () => {},
            loading: false,
            error: null
        }
    });


    const navigate = useNavigate();
    const onReserve = async () => {
        setLoading(true);
        setError(null);
        try {
            const url = `/payment?userid=${userId}&carid=${carid}&startdate=${startDate}&enddate=${endDate}&price=${choicedata.footer.price}`;
            navigate(url);
        } catch (error) {
            console.error(error);
            setError('결제 실패..');
        } finally {
            setLoading(false);
        }
    }

    // const choicedata = {
    //     owner: {
    //         image: "https://wrtn-image-user-output.s3.ap-northeast-2.amazonaws.com/6631b6db962f730c6207b3c2/fd53f817-13a7-482c-9492-26a270549528.png",
    //         name: "사용자 이름",
    //         email: "user@example.com"
    //     },
    //     map: {
    //         address: "~~~",
    //         coordinates: {
    //             lat: 33.450701,
    //             lng: 126.570667
    //         }
    //     },
    //     footer: {
    //         price: "50,000",
    //         startTime: "2024.06.07  17:00",
    //         endTime: "2024.06.09  10:00",
    //         onReserve: onReserve,
    //         loading: loading,
    //         error: error
    //     }
    // };

    return (
        <div>
            <header></header>
            <ChoiceData setChoicedata={setChoicedata} />
            <div className="description">
                <Carousel />
            </div>
            <div className='car-description'>
                <h3 style={{ textAlign: "-webkit-left" }}>~~차에 대한 설명~~</h3>
            </div>
            <OwnerDescription owner={choicedata.owner} />
            <div className="border-line"></div>
            <Review />
            <Map {...choicedata.map} />
            <ChoiceFooter {...choicedata.footer } onReserve={onReserve} />
        </div>
    );
};

export default Choice;
