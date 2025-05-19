import "../styles/DateInput.css";

export default function DateInput({ date, onChange }) {
  return (
    <div className="input-section">
      <h2>오늘의 날짜</h2>
      <input
        type="date"
        className="date-input"
        value={date}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
