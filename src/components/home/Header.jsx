import "../styles/Header.css";

export default function Header({ date, setDate }) {
  // 월 이동 함수
  const decreaseMonth = () => {
    const newDate = new Date(
      date.getFullYear(),
      date.getMonth() - 1,
      date.getDate()
    );
    setDate(newDate);
  };

  const increaseMonth = () => {
    const newDate = new Date(
      date.getFullYear(),
      date.getMonth() + 1,
      date.getDate()
    );
    setDate(newDate);
  };

  // 연월 포맷팅
  const dateString = `${date.getFullYear()}년 ${date.getMonth() + 1}월`;

  return (
    <div className="home-header">
      <h2>감정일기장</h2>
      <div className="date-navigator">
        <button onClick={decreaseMonth}>&#60;</button>
        <div className="date-display">{dateString}</div>
        <button onClick={increaseMonth}>&#62;</button>
      </div>
    </div>
  );
}
