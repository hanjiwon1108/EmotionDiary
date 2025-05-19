import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import "./styles/Edit.css";
import DateInput from "./edit/DateInput";
import EmotionInput from "./edit/EmotionInput";
import ContentInput from "./edit/ContentInput";
import ButtonGroup from "./edit/ButtonGroup";

export default function Edit() {
  const navigate = useNavigate();
  const location = useLocation();
  const today = new Date().toISOString().split("T")[0];
  const [date, setDate] = useState(today);
  const [emotion, setEmotion] = useState("그럭저럭");
  const [content, setContent] = useState("");
  const isEdit = location.state?.diary;

  useEffect(() => {
    if (isEdit) {
      setDate(isEdit.date);
      setEmotion(isEdit.emotion);
      setContent(isEdit.content);
    }
  }, [isEdit]);

  const handleSubmit = () => {
    const diary = {
      date,
      emotion,
      content,
      id: isEdit ? isEdit.id : Date.now(),
    };

    const diaries = JSON.parse(localStorage.getItem("diaries") || "[]");
    if (isEdit) {
      const index = diaries.findIndex((d) => d.id === isEdit.id);
      diaries[index] = diary;
    } else {
      diaries.push(diary);
    }
    localStorage.setItem("diaries", JSON.stringify(diaries));

    navigate("/");
  };

  const handleDelete = () => {
    if (window.confirm("정말로 이 일기를 삭제하시겠습니까?")) {
      const diaries = JSON.parse(localStorage.getItem("diaries") || "[]");
      const updatedDiaries = diaries.filter((d) => d.id !== isEdit.id);
      localStorage.setItem("diaries", JSON.stringify(updatedDiaries));
      navigate("/");
    }
  };

  return (
    <div className="edit-container">
      <div className="edit-header">
        <button className="back-btn" onClick={() => navigate("/")}>
          뒤로 가기
        </button>
        <h2>{isEdit ? "일기 수정하기" : "새 일기 쓰기"}</h2>
        {isEdit ? (
          <button className="delete-btn" onClick={handleDelete}>
            삭제하기
          </button>
        ) : (
          <div style={{ width: "76px" }}></div>
        )}
      </div>
      <DateInput date={date} onChange={setDate} />
      <EmotionInput emotion={emotion} onChange={setEmotion} />
      <ContentInput content={content} onChange={setContent} />
      <ButtonGroup onCancel={() => navigate("/")} onSubmit={handleSubmit} />
    </div>
  );
}
