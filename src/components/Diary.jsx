import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import 완전좋음 from "../assets/완전 좋음.png";
import 좋음 from "../assets/좋음.png";
import 그럭저럭 from "../assets/그럭 저럭.png";
import 나쁨 from "../assets/나쁨.png";
import 끔찍함 from "../assets/끔찍함.png";
import "./styles/Diary.css";

export default function Diary() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [diary, setDiary] = useState(null);
  const [loading, setLoading] = useState(true);

  const emotionImages = {
    "완전 좋음": 완전좋음,
    좋음: 좋음,
    그럭저럭: 그럭저럭,
    나쁨: 나쁨,
    끔직함: 끔찍함,
  };

  useEffect(() => {
    const diaries = JSON.parse(localStorage.getItem("diaries") || "[]");
    const foundDiary = diaries.find((d) => d.id === parseInt(id));

    if (foundDiary) {
      setDiary(foundDiary);
    } else {
      alert("존재하지 않는 일기입니다.");
      navigate("/", { replace: true });
    }

    setLoading(false);
  }, [id, navigate]);

  const handleEdit = () => {
    navigate("/edit", { state: { diary } });
  };

  if (loading) {
    return <div className="diary-loading">불러오는 중...</div>;
  }

  return (
    <div className="diary-detail-container">
      <div className="diary-detail-header">
        <button className="back-btn" onClick={() => navigate("/")}>
          홈으로
        </button>
        <h2>일기 상세보기</h2>
        <button className="edit-btn detail-edit-btn" onClick={handleEdit}>
          수정하기
        </button>
      </div>

      <section className="diary-detail-date">
        <h3>작성 날짜</h3>
        <p className="diary-detail-date-text">{diary.date}</p>
      </section>

      <section className="diary-detail-emotion">
        <h3>오늘의 감정</h3>
        <div className="emotion-display">
          <img
            src={emotionImages[diary.emotion]}
            alt={diary.emotion}
            className="diary-detail-emotion-img"
          />
          <p className="emotion-text">{diary.emotion}</p>
        </div>
      </section>

      <section className="diary-detail-content">
        <h3>오늘의 일기</h3>
        <div className="diary-content-box">{diary.content}</div>
      </section>

      <div className="diary-detail-buttons">
        <button className="home-btn" onClick={() => navigate("/")}>
          목록으로
        </button>
        <button className="edit-btn" onClick={handleEdit}>
          수정하기
        </button>
      </div>
    </div>
  );
}
