import { useNavigate } from "react-router-dom";
import * as S from "./Home.styles";

export default function Home() {
  const navigate = useNavigate();

  return (
    <S.HeroSection>
      <S.GlowOrb />
      <S.GlowOrb />

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10 col-xl-8">
            <S.Eyebrow>Premium Electronics</S.Eyebrow>
            <S.Title>
              Welcome to <span>Ekart Hub</span>
            </S.Title>
            <S.Subtitle>Your ultimate destination for next-gen technology.</S.Subtitle>
            <S.Description>
              Discover our curated selection of top-tier electronics, cutting-edge gadgets,
              and powerful computing gear designed for the modern world.
            </S.Description>
            <S.Button onClick={() => navigate("/products")}>
              Explore Products →
            </S.Button>
          </div>
        </div>
      </div>
    </S.HeroSection>
  );
}
