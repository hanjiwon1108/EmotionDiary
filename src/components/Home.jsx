import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import 완전좋음 from "../assets/완전 좋음.png";
import 좋음 from "../assets/좋음.png";
import 그럭저럭 from "../assets/그럭 저럭.png";
import 나쁨 from "../assets/나쁨.png";
import 끔찍함 from "../assets/끔찍함.png";
import Header from "./home/Header";
import DiaryItem from "./DiaryItem";
import "./styles/Home.css";

export default function Home() {
  const navigate = useNavigate();
  const [diaries, setDiaries] = useState([]);
  const [sortOrder, setSortOrder] = useState("최신순");
  const [date, setDate] = useState(new Date());

  const emotionImages = {
    "완전 좋음": 완전좋음,
    좋음: 좋음,
    그럭저럭: 그럭저럭,
    나쁨: 나쁨,
    끔직함: 끔찍함,
  };

  useEffect(() => {
    const savedDiaries = JSON.parse(localStorage.getItem("diaries") || "[]");
    setDiaries(savedDiaries);
  }, []);

  const handleEdit = (diary) => {
    navigate("/edit", { state: { diary } });
  };

  // 현재 선택된 연월에 해당하는 일기만 필터링
  const filteredDiaries = diaries.filter((diary) => {
    const diaryDate = new Date(diary.date);
    return (
      diaryDate.getFullYear() === date.getFullYear() &&
      diaryDate.getMonth() === date.getMonth()
    );
  });

  // 필터링된 일기를 정렬
  const sortedDiaries = [...filteredDiaries].sort((a, b) => {
    if (sortOrder === "최신순") {
      return new Date(b.date) - new Date(a.date);
    } else {
      return new Date(a.date) - new Date(b.date);
    }
  });

  return (
    <div className="home-container">
      <Header date={date} setDate={setDate} />
      <div className="control-menu">
        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option>최신순</option>
          <option>오래된순</option>
        </select>
        <Link to="/edit" style={{ width: "100%" }}>
          <button className="new-diary-btn">새 일기 쓰기</button>
        </Link>
      </div>

      <div className="diary-list">
        {sortedDiaries.length > 0 ? (
          sortedDiaries.map((diary) => (
            <DiaryItem
              key={diary.id}
              diary={diary}
              onEdit={handleEdit}
              emotionImages={emotionImages}
            />
          ))
        ) : (
          <div className="no-diary">
            <p>이 달에 작성된 일기가 없습니다. 새 일기를 작성해보세요!</p>
          </div>
        )}
      </div>
    </div>
  );
}
