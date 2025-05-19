import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./styles/NotFound.css";

const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // 컴포넌트가 마운트될 때 경고창 표시
    alert("페이지를 찾을 수 없습니다. 홈으로 돌아갑니다.");
  }, []);

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <h1>404</h1>
        <h2>페이지를 찾을 수 없습니다</h2>
        <p>요청하신 페이지가 존재하지 않거나 이동되었을 수 있습니다.</p>
        <button onClick={handleGoHome} className="home-button">
          홈으로 돌아가기
        </button>
      </div>
    </div>
  );
};

export default NotFound;
