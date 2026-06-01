import { useNavigate } from "react-router-dom";
import * as S from "./NotFoundPage.styles";

export default function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <S.PageWrapper>
      <div className="container h-100">
        <div className="row h-100 align-items-center justify-content-center">
          <div className="col-12 col-md-10 col-lg-8 text-center">
            <S.ErrorCode>404</S.ErrorCode>
            <S.Title>Connection Lost.</S.Title>
            <S.Subtitle>
              The page you are looking for might have been removed, had its name
              changed, or is currently unavailable in our network.
            </S.Subtitle>
            <S.Button onClick={() => navigate("/")}>
              Return to Network
            </S.Button>
          </div>
        </div>
      </div>
    </S.PageWrapper>
  );
}
