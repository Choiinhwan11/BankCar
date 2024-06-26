import React, {createContext, useState} from 'react';
import {insertCarDataApi} from "../api/CarApiService";
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import Swal from "sweetalert2";

export const RegisterContext = createContext();

// 데이터 : 자동차 등록 카테고리, 자동차 상세 정보, 위치, 사진, 가격, 제목 및 설명

const RegisterProvider = ({children}) => {
    const navigate = useNavigate();
    const userId = useSelector((state) => state.Login.id);
    const [data, setData] = useState({
        userId,
        category: "",
        model: "",
        released: "",
        color: "",
        segment: "",
        latitude: 37.49807642572867,
        longitude: 127.02800593613699,
        doroAddress: "",
        jibunAddress: "",
        price: 0,
        title: "",
        content: ""
    });
    const [imageFiles, setImageFiles] = useState([]);   // 이미지 파일 객체
    const [selectImages, setSelectImages] = useState([]);
    const onAddData = (target, value) => {
        setData(prevState => ({...prevState, [target]: value}))
    }
    const onAddImageFile = (files) => {
        setImageFiles(files)
    }

    const onAddSelectImages = (imageUrls) => {
        setSelectImages(imageUrls);
    }

    // 자동차 정도 등록 함수
    const onInsertData = () => {
        const formData = new FormData();
        // JSON 데이터를 Blod 객체로 변환하여 carData에 추가하는 것을 나타낸다
        formData.append("car", new Blob([JSON.stringify(data)], {type: "application/json"}))
        // 이미지 넣기
        // imageFiles.map(item =>
        //     carData.append("image", item)
        // );
        for(var i =0;i < imageFiles.length;i++){
            formData.append("images", imageFiles[i]);
        }
        console.log(formData)

        // axios로 api 호출
        insertCarDataApi(formData, userId)
        .then(
            (response) => {
                Swal.fire({
                    icon: 'success',
                    title:   "<div style='color:#000000;font-size:15px'>자동차 정보를 등록하였습니다.</div>",
                });
                navigate("/profile");
            }
        )
        .catch(
            (error) => console.log(error)
        )
    }


    return (
        <RegisterContext.Provider
            value={{data, selectImages, onInsertData, onAddData, onAddImageFile, onAddSelectImages}}>
            {children}
        </RegisterContext.Provider>
    );
};

export default RegisterProvider;
