import "../styles/ButtonGroup.css";

export default function ButtonGroup({ onCancel, onSubmit }) {
  return (
    <div className="button-group">
      <button className="cancel-btn" onClick={onCancel}>
        취소하기
      </button>
      <button className="submit-btn" onClick={onSubmit}>
        작업완료
      </button>
    </div>
  );
}
