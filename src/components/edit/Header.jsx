import { useNavigate } from "react-router-dom";

export default function Header({ isEdit, onDelete }) {
  const navigate = useNavigate();
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        height: "60px",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <button onClick={() => navigate("/")}>뒤로 가기</button>
      <h2>{isEdit ? "일기 수정하기" : "새 일기 쓰기"}</h2>
      {isEdit && (
        <button onClick={onDelete} style={{ color: "#ff4444" }}>
          삭제하기
        </button>
      )}
    </div>
  );
}
