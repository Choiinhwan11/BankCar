import React, { useEffect, useRef, useState } from 'react';
import { MdOutlineDriveFileRenameOutline } from "react-icons/md";
import { LuSmartphone } from "react-icons/lu";
import { MdEmail } from "react-icons/md";
import { FaAddressCard } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { GoArrowLeft } from 'react-icons/go';
import {Link, useNavigate} from 'react-router-dom';
import styles from './CSS/MyProfile.module.css';
import axios from "axios";

const MyProfile = () => {
    const navigate = useNavigate(); // 페이지 네비게이션 함수
    const [profileImage, setProfileImage] = useState(null); // 프로필 이미지 상태


    return (
        <div>
            {/* 뒤로가기 버튼 */}
            <div className={styles.header}>
                <GoArrowLeft
                    className={styles.backArrow}
                    onClick={() => navigate(-1)}
                />
            </div>
            {/* 제목 */}
            <h1 className={styles.title}></h1>

            <div className={styles.buttonDiv}>
                <button className={styles.button}>
                    {profileImage ? (
                        <img src={profileImage} alt="Profile" className={styles.profileImage}/>
                    ) : (
                        <CgProfile className={styles.icon}/>
                    )}
                </button>
            </div>

            {/* 폼 그룹들 */}
            <div className={styles.formContainer}>
                {/* 이름 입력 폼 그룹 */}
                <div className={styles.formGroup}>
                    <label className={styles.label}>
                        <MdOutlineDriveFileRenameOutline className={styles.iconLabel}/>
                        이름
                    </label>
                    <input type="text" className={styles.input}/>
                </div>

                {/* 핸드폰 번호 입력 폼 그룹 */}
                <div className={styles.formGroup}>
                    <label className={styles.label}>
                        <LuSmartphone className={styles.iconLabel}/>
                        핸드폰 번호
                    </label>
                    <input type="text" className={styles.input} />
                </div>

                {/* 이메일 입력 폼 그룹 */}
                <div className={styles.formGroup}>
                    <label className={styles.label}>
                        <MdEmail className={styles.iconLabel}/>
                        이메일
                    </label>
                    <input type="text" className={styles.input}/>
                </div>

                {/* 면허증 입력 폼 그룹 */}
                <div className={styles.formGroup}>
                    <label className={styles.label}>
                        <FaAddressCard className={styles.iconLabel}/>
                        면허증
                    </label>
                    <input type="text" className={styles.input}/>
                </div>

                {/* 수정하기 버튼 */}
                <div className={styles.submitButtonContainer}>
                    <Link to="/Profile/MyProfileUpdate">
                        <button className={styles.submitButton}>수정하기</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;
