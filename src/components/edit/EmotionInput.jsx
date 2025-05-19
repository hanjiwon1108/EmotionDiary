import 완전좋음 from "../../assets/완전 좋음.png";
import 좋음 from "../../assets/좋음.png";
import 그럭저럭 from "../../assets/그럭 저럭.png";
import 나쁨 from "../../assets/나쁨.png";
import 끔찍함 from "../../assets/끔찍함.png";
import "../styles/EmotionInput.css";

export default function EmotionInput({ emotion, onChange }) {
  const emotionList = ["완전 좋음", "좋음", "그럭저럭", "나쁨", "끔직함"];

  const emotionImages = {
    "완전 좋음": 완전좋음,
    좋음: 좋음,
    그럭저럭: 그럭저럭,
    나쁨: 나쁨,
    끔직함: 끔찍함,
  };

  return (
    <div className="input-section">
      <h2>오늘의 감정</h2>
      <div className="emotions-list">
        {emotionList.map((emotionText) => (
          <div key={emotionText}>
            <input
              type="radio"
              id={`emotion-${emotionText}`}
              name="emotion"
              value={emotionText}
              checked={emotion === emotionText}
              onChange={(e) => onChange(e.target.value)}
              className="emotion-radio"
            />
            <label htmlFor={`emotion-${emotionText}`} className="emotion-label">
              <img src={emotionImages[emotionText]} alt={emotionText} />
              <span>{emotionText}</span>
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}
