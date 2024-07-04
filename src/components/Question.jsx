import { useNavigate } from 'react-router-dom';
import qs1 from '../image/qs1.jpg'
import qs2 from '../image/qs2.jpg';
import qs3 from '../image/qs3.jpg';
import qs4 from '../image/qs4.jpg';
import qs5 from '../image/qs5.jpg';
import qs6 from '../image/qs6.jpg';
import qs7 from '../image/qs7.jpg';
import qs8 from '../image/qs8.jpg';
import qs9 from '../image/qs9.jpeg';
import qs10 from '../image/qs10.jpeg';
import qs11 from '../image/qs11.jpg';
import qs12 from '../image/qs12.jpg';
import qs13 from '../image/qs13.jpg';
import qs14 from '../image/qs14.jpg';
import '../App.css';

const questions = {
  1: {
    title: '평소 립스틱 컬러는?',
    image: qs1,
    type: 'WC',
    A: '오렌지 & 코랄 계열이 잘 어울린다.',
    B: '핑크 컬러가 잘 어울린다.',
  },
  2: {
    title: '손목 안쪽 핏줄 컬러는?',
    image: qs2,
    type: 'WC',
    A: '초록색이 많다.',
    B: '파란색이 많다.',
  },
  3: {
    title: '헤어 컬러는?',
    image: qs3,
    type: 'WC',
    A: '비교적 밝은 브라운이다.',
    B: '짙은 브라운 & 블랙이다.',
  },
  4: {
    title: '평소 잘 어울리는 주얼리는?',
    image: qs4,
    type: 'WC',
    A: '골드 주얼리',
    B: '실버 주얼리',
  },
  5: {
    title: '햇볕에 장시간 노출시',
    image: qs5,
    type: 'WC',
    A: '피부가 어두워지면서 탄다.',
    B: '빨갛게 익는다.',
  },
  6: {
    title: '나의 분위기 및 이미지는?',
    image: qs6,
    type: 'SA',
    A: '성숙 or 분위기 있는 이미지를 가지고 있다.',
    B: '사랑스러운 or 귀여운 이미지를 가지고 있다.',
  },
  7: {
    title: '옷은 어떨까?',
    image: qs7,
    type: 'SA',
    A: '비비드한 컬러보다 자연스러운 (카키 & 베이지 등) 컬러가 더 잘 어울린다.',
    B: '퍼프 소매와 같은 소녀 감성의 옷도 곧잘 어울린다.',
  },
  8: {
    title: '염색은 어떤 걸로 하면 좋을까?',
    image: qs8,
    type: 'SA',
    A: '짙은 브라운 염색이 가장 잘 어울린다.',
    B: '밝은 브라운 컬러 염색도 어울린다.',
  },
  9: {
    title: '내 피부는?',
    image: qs9,
    type: 'SA',
    A: '홍조가 거의 없고, 균일한 스킨톤을 가지고 있다.',
    B: '피부가 얇고 홍조가 있다.',
  },
  10: {
    title: '메이크업 할 때 나는?',
    image: qs10,
    type: 'SA',
    A: '스모키 & 딥한 음영 아이 메이크업이 잘 어울린다. ',
    B: '물광 피부 표현이 잘 어울린다.',
  },
  11: {
    title: '나의 이미지는?',
    image: qs11,
    type: 'WS',
    A: '첫인상이 다가가기 어렵다거나 차가워 보인다는 이야기를 종종 듣는다.',
    B: '청순한 이미지를 가지고 있다.',
  },
  12: {
    title: '나에게 잘 어울리는 립스틱 색은?',
    image: qs12,
    type: 'WS',
    A: '레드립이 잘 어울린다.',
    B: '파스텔톤의 부드러운 컬러가 잘 어울린다.',
  },
  13: {
    title: '나에게 어울리는 염색 컬러는?',
    image: qs13,
    type: 'WS',
    A: '진한 흑발이거나 진한 흑발 염색이 잘 어울린다.',
    B: '그레이 컬러가 잘 어울린다.',
  },
  14: {
    title: '나에게 잘 어울리는 옷은?',
    image: qs14,
    type: 'WS',
    A: ' 정장(or 오피스룩)이 잘 어울린다.',
    B: '캐주얼한 계열 (고프코어, 스트릿 등)보다 여성스러운 옷이 더 잘 어울린다.',
  },
};

function Question({ num, setNum, updateScore, score }) {
  const navigate = useNavigate();

  const handleAnswer = (type, value) => {
    updateScore(type, value);
    const newScore = { ...score, [type]: (score[type] || 0) + value };

    // 점수와 질문 번호 업데이트 로직
    if (num === 5) {
      if (newScore.WC >= 3) { // 5문제 중 3문제를 넘는 경우
        setNum(6);
      } else {
        setNum(11);
      }
    } else if (num >= 6 && num <= 10) {
      if (num === 10) {
        if (newScore.SA >= 3) { // 5문제 중 3문제를 넘는 경우
          navigate('/ResultAutumnWarm');
        } else {
          navigate('/ResultSpringWarm');
        }
      } else {
        setNum(num + 1);
      }
    } else if (num >= 11 && num <= 14) {
      if (num === 14) {
        if (newScore.WS >= 3) { // 4문제 중 3문제를 넘는 경우
          navigate('/ResultWinterCool');
        } else {
          navigate('/ResultSummerCool');
        }
      } else {
        setNum(num + 1);
      }
    } else {
      setNum(num + 1);
    }
  };

  const currentQuestion = questions[num];

  if (!currentQuestion) {
    return <div>Loading...</div>;
  }

  return (
    <div className="content" id="question">
      <p id="pgrNum">{num}/14</p>
      <div className="progress">
        <div
          className="progress-bar progress-bar-striped progress-bar-animated bg-warning"
          style={{ width: `calc(100/14*${num}%)` }}
        ></div>
      </div>
      <p id="title">{currentQuestion.title}</p>
      <div className="question-image-container">
        {currentQuestion.image && (
          <img src={currentQuestion.image} className="question-image" alt="question" />
        )}
      </div>
      <button className="btn btn-warning" onClick={() => handleAnswer(currentQuestion.type, 1)}>
        {currentQuestion.A}
      </button>
      <button className="btn btn-warning mt-3" onClick={() => handleAnswer(currentQuestion.type, 0)}>
        {currentQuestion.B}
      </button>
    </div>
  );
}

export default Question;
