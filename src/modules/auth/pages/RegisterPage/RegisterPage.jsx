import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useRegister } from "../../hooks/ui/useRegister";
import * as S from "./RegisterPage.styles";

export default function RegisterPage() {
  const { register, handleSubmit, errors, isPending } = useRegister();

  return (
    <S.PageWrapper>
      <div className="container-fluid p-0">
        <div className="row g-0">
          <div className="d-none d-lg-block col-lg-6 order-lg-2">
            <S.HeroBand>
              <S.HeroTitle>Join The<br />Network.</S.HeroTitle>
            </S.HeroBand>
          </div>
          
          <div className="col-12 col-lg-6 order-lg-1">
            <S.ContentBand>
              <S.AuthCard>
                <S.BackButton to="/products">
                  <ArrowLeft size={14} /> Back to Products
                </S.BackButton>
                <S.Title>Sign Up</S.Title>
                <S.Subtitle>Start your journey with us today.</S.Subtitle>

                <form onSubmit={handleSubmit}>
                  <S.FormGroup>
                    <S.Label htmlFor="username">Username</S.Label>
                    <S.Input
                      id="username"
                      type="text"
                      placeholder="Choose a username"
                      {...register("username")}
                    />
                    {errors.username && (
                      <S.ErrorMessage>{errors.username.message}</S.ErrorMessage>
                    )}
                  </S.FormGroup>

                  <S.FormGroup>
                    <S.Label htmlFor="email">Email</S.Label>
                    <S.Input
                      id="email"
                      type="email"
                      placeholder="name@example.com"
                      {...register("email")}
                    />
                    {errors.email && (
                      <S.ErrorMessage>{errors.email.message}</S.ErrorMessage>
                    )}
                  </S.FormGroup>

                  <S.FormGroup>
                    <S.Label htmlFor="password">Password</S.Label>
                    <S.Input
                      id="password"
                      type="password"
                      placeholder="Create a password"
                      {...register("password")}
                    />
                    {errors.password && (
                      <S.ErrorMessage>{errors.password.message}</S.ErrorMessage>
                    )}
                  </S.FormGroup>

                  <S.Button type="submit" disabled={isPending}>
                    {isPending ? "Creating account..." : "Create Account"}
                  </S.Button>
                </form>

                <S.LinkText>
                  Already part of the network? <Link to="/login">Sign in here</Link>
                </S.LinkText>
              </S.AuthCard>
            </S.ContentBand>
          </div>
        </div>
      </div>
    </S.PageWrapper>
  );
}
