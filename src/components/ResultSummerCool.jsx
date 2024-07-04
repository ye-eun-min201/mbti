import React from 'react';
import { useNavigate } from 'react-router-dom'; // useNavigate hook을 사용
import summerCool from '../image/summerCool.jpeg'
function ResultSummerCool({ resetState }) {
    const navigate = useNavigate(); // useNavigate hook을 사용하여 navigate 함수를 가져옴

    const handleRestart = () => {
        resetState();
        navigate('/question'); // 프로그래밍 방식으로 다른 경로로 이동
    };
    
    const handleCopyLink = () => {
        navigator.clipboard.writeText(window.location.href).then(() => {
            alert("링크가 복사되었습니다.");
        }).catch((error) => {
            console.error('링크 복사 실패:', error);
        });
    };

    return (
        <div className="content" id="result">
            <p id="qu"> 당신은 '여름 쿨톤' 입니다! </p>
            <img src={summerCool} alt="Summer Cool Image" />

            <div className="result-btn">
                <button className="btn btn-warning" onClick={handleRestart}>
                    다시하기
                </button>
                <button className="btn btn-warning mt-4" onClick={handleCopyLink}>
                    링크복사
                </button>
            </div>
        </div>
    );
}

export default ResultSummerCool;
