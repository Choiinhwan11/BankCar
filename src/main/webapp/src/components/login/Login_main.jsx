import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { useNavigate } from "react-router-dom";
import { GoArrowLeft } from "react-icons/go";

import "./LoginBtn.css";

const Login_main = () => {
  const navigate = useNavigate();

  // const cliend_google_id="601610993000-u4u34s3r1op37juvet6fmr0hee3e3u1d.apps.googleusercontent.com";
  // const redirect_google_uri="http://localhost:8080/login/google";
  // const cliend_kakao_id=""
  // const redirect_kakao_uri="http://localhost:8080/login/kakao";
  // onClick={()=>window.location.href=`https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${cliend_kakao_id}&redirect_uri=${redirect_kakao_uri}`}
  const cliend_id =
    "601610993000-u4u34s3r1op37juvet6fmr0hee3e3u1d.apps.googleusercontent.com";
  const redirect_uri = "http://localhost:8080/login/google";

  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  const isBigScreen = useMediaQuery({
    query: "(min-width: 1824px)",
  });
  const isTabletOrMobile = useMediaQuery({
    query: "(max-width: 1224px)",
  });

  const [pressed, setPressed] = useState(null); // 눌린 버튼의 id를 저장하는 상태
  const [selected, setSelected] = useState(1);
  return (
    <div>
      {isDesktopOrLaptop && <p>모바일 환경으로 접속 바랍니당 ~~__~~ ^^!!</p>}
      {isBigScreen && <p>You have a huge screen</p>}
      {isTabletOrMobile && (
        <div>
          <header>
            <div className="headernav">
              <GoArrowLeft
                style={{
                  width: "30px",
                  height: "30px",
                  marginTop: "4%",
                  marginLeft: "20px",
                }}
                navigate={-1}
              />
              <h1
                style={{
                  textAlign: "center",
                  font: "apple SD Gothic Neo",
                  fontSize: "18px",
                  marginTop: "-9%",
                }}
              >
                로그인
              </h1>
            </div>
          </header>
          <div className="Logo">
            <img src="./image/Logo.png" alt="로고" />
          </div>
          <button className="kakao-login-button">
            <img src="./image/kakao.png" alt="카카오 아이콘" />
            카카오로 로그인하기
          </button>

          <button className="naver-login-button" type="button">
            <img src="./image/naverBtn.png" alt="네이버 아이콘" />
            네이버로 로그인하기
          </button>

          <button
            className="google-login-button"
            onClick={() =>
              (window.location.href = `https://accounts.google.com/o/oauth2/auth?client_id=${cliend_id}&redirect_uri=${redirect_uri}&response_type=code&scope=https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile`)
            }
          >
            <img src="./image/google01.png" alt="구글 아이콘" />
            구글로 로그인하기
          </button>

          <button
            className="github-login-button"
            type="button"
            value="깃허브로 로그인하기"
          >
            <img src="./image/gitBtn.png" alt="깃허브 아이콘" />
            깃허브로 로그인하기
          </button>
        </div>
      )}
    </div>
  );
};

export default Login_main;
