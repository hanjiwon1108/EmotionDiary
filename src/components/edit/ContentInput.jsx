import "../styles/ContentInput.css";

export default function ContentInput({ content, onChange }) {
  return (
    <div className="input-section">
      <h2>오늘의 일기</h2>
      <textarea
        placeholder="오늘 하루는 어땠나요?"
        className="content-textarea"
        value={content}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
