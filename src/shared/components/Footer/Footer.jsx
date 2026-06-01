import { Link } from "react-router-dom";
import * as S from "./Footer.styles";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <S.FooterContainer>
      <div className="container">
        <S.FooterContent>
          <S.Copyright>
            &copy; {year} Ekart Hub. All rights reserved.
          </S.Copyright>
          
          <S.Links>
            <Link to="/about">About Us</Link>
            <Link to="/terms">Terms of Service</Link>
            <Link to="/privacy">Privacy Policy</Link>
          </S.Links>
        </S.FooterContent>
      </div>
    </S.FooterContainer>
  );
}
