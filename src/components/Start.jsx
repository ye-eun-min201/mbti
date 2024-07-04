import React from 'react';
import { useNavigate } from 'react-router-dom';
import bannerImage from '../image/짱구배너.png';

function Start() {
  const navigate = useNavigate();

  return (
    <div className="content" id="start">
      <p>나의 퍼스널컬러는 무엇일까?</p>
      <img src={bannerImage} alt="짱구단체" className="img1" />
      <p id="maker">제작자: 임예은</p>
      <p id="require">
        ※자가 진단을 통해서 나의 퍼스널컬러를 알아봐요!
      </p>
      <button className="btn btn-warning" onClick={() => navigate('/question')}>
        퍼스널컬러 진단 시작!!
      </button>
    </div>
  );
}

export default Start;
