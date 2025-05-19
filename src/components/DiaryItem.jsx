import { useNavigate } from "react-router-dom";
import "./styles/DiaryItem.css";

export default function DiaryItem({ diary, onEdit, emotionImages }) {
  const navigate = useNavigate();

  const handleItemClick = () => {
    navigate(`/diary/${diary.id}`);
  };

  // 날짜를 더 보기 좋게 포맷팅
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const dayOfWeek = ["일", "월", "화", "수", "목", "금", "토"][date.getDay()];

    return `${month}월 ${day}일 ${dayOfWeek}요일`;
  };

  return (
    <div className="diary-item" id={`diary-${diary.id}`}>
      <div className="emotion-img-wrapper" onClick={handleItemClick}>
        <img
          src={emotionImages[diary.emotion]}
          alt={diary.emotion}
          className="emotion-img clickable"
        />
      </div>
      <div className="diary-info" onClick={handleItemClick}>
        <span className="diary-date">{formatDate(diary.date)}</span>
        <p className="diary-content">{diary.content}</p>
      </div>
      <div className="diary-button-group">
        <button className="edit-btn" onClick={() => onEdit(diary)}>
          수정
        </button>
      </div>
    </div>
  );
}
