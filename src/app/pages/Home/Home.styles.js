import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const shimmer = keyframes`
  0% { background-position: -200% center; }
  100% { background-position: 200% center; }
`;

const float = keyframes`
  0%, 100% { transform: translate(0, 0) scale(1); }
  33% { transform: translate(30px, -20px) scale(1.05); }
  66% { transform: translate(-20px, 15px) scale(0.95); }
`;

const pulse = keyframes`
  0%, 100% { opacity: 0.4; }
  50% { opacity: 0.8; }
`;

export const HeroSection = styled.div`
  min-height: 100vh;
  background-color: #0a0a0f;
  background-image: linear-gradient(rgba(10, 10, 15, 0.65), rgba(10, 10, 15, 0.95)), url('/images/home-bg.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: var(--spacing-3xl) var(--spacing-xl);
  position: relative;
  overflow: hidden;

  /* Animated gradient mesh background */
  &::before {
    content: "";
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: 
      radial-gradient(circle at 20% 50%, rgba(230, 0, 0, 0.08) 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, rgba(120, 0, 255, 0.06) 0%, transparent 50%),
      radial-gradient(circle at 50% 80%, rgba(0, 100, 255, 0.05) 0%, transparent 50%);
    animation: ${float} 20s ease-in-out infinite;
    z-index: 0;
  }

  /* Subtle grid overlay */
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: 
      linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px);
    background-size: 60px 60px;
    z-index: 0;
  }

  > * {
    position: relative;
    z-index: 1;
  }
`;

export const GlowOrb = styled.div`
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  animation: ${pulse} 4s ease-in-out infinite;
  z-index: 0;

  &:nth-of-type(1) {
    width: 300px;
    height: 300px;
    background: rgba(230, 0, 0, 0.15);
    top: 10%;
    right: 15%;
    animation-delay: 0s;
  }

  &:nth-of-type(2) {
    width: 200px;
    height: 200px;
    background: rgba(120, 0, 255, 0.1);
    bottom: 20%;
    left: 10%;
    animation-delay: 2s;
  }
`;

export const Eyebrow = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  font-weight: var(--font-weight-bold);
  text-transform: uppercase;
  letter-spacing: 3px;
  color: var(--color-primary);
  margin-bottom: var(--spacing-2xl);
  animation: ${fadeInUp} 1s cubic-bezier(0.22, 1, 0.36, 1) forwards;
  opacity: 0;

  &::before, &::after {
    content: "";
    width: 24px;
    height: 1px;
    background: var(--color-primary);
  }
`;

export const Title = styled.h1`
  font-family: var(--font-family-base);
  font-size: 42px;
  font-weight: var(--font-weight-heavy);
  line-height: 1.1;
  letter-spacing: -2px;
  color: var(--color-on-dark);
  margin-bottom: var(--spacing-lg);
  text-transform: uppercase;
  animation: ${fadeInUp} 1s cubic-bezier(0.22, 1, 0.36, 1) 0.15s forwards;
  opacity: 0;

  span {
    background: linear-gradient(135deg, var(--color-primary) 0%, #ff6b6b 50%, var(--color-primary) 100%);
    background-size: 200% auto;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: ${shimmer} 3s linear infinite;
  }

  @media (min-width: 768px) {
    font-size: 64px;
  }

  @media (min-width: 992px) {
    font-size: 90px;
    line-height: var(--line-height-display-xl);
  }
`;

export const Subtitle = styled.h2`
  font-size: 20px;
  font-weight: var(--font-weight-light);
  line-height: 1.4;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: var(--spacing-xl);
  animation: ${fadeInUp} 1s cubic-bezier(0.22, 1, 0.36, 1) 0.3s forwards;
  opacity: 0;

  @media (min-width: 768px) {
    font-size: var(--font-size-display-sm);
    line-height: var(--line-height-display-sm);
  }
`;

export const Description = styled.p`
  font-size: 15px;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.45);
  max-width: 520px;
  margin: 0 auto var(--spacing-3xl);
  animation: ${fadeInUp} 1s cubic-bezier(0.22, 1, 0.36, 1) 0.45s forwards;
  opacity: 0;

  @media (min-width: 768px) {
    font-size: var(--font-size-body-lg);
  }
`;

export const Button = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 16px 40px;
  background: linear-gradient(135deg, var(--color-primary), #ff1a1a);
  color: var(--color-on-primary);
  border: none;
  border-radius: var(--rounded-pill-lg);
  font-size: 14px;
  font-weight: var(--font-weight-bold);
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  text-transform: uppercase;
  letter-spacing: 2px;
  animation: ${fadeInUp} 1s cubic-bezier(0.22, 1, 0.36, 1) 0.6s forwards;
  opacity: 0;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
    transition: left 0.5s ease;
  }

  &:hover {
    transform: translateY(-3px) scale(1.02);
    box-shadow: 0 10px 40px rgba(230, 0, 0, 0.4), 0 0 80px rgba(230, 0, 0, 0.15);

    &::before {
      left: 100%;
    }
  }

  &:active {
    transform: translateY(0) scale(1);
    box-shadow: 0 4px 16px rgba(230, 0, 0, 0.3);
  }
`;

export const Stats = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
  margin-top: 60px;
  animation: ${fadeInUp} 1s cubic-bezier(0.22, 1, 0.36, 1) 0.8s forwards;
  opacity: 0;

  @media (max-width: 480px) {
    gap: 24px;
    margin-top: 40px;
  }
`;

export const StatItem = styled.div`
  text-align: center;

  strong {
    display: block;
    font-size: 28px;
    font-weight: var(--font-weight-heavy);
    color: var(--color-on-dark);
    letter-spacing: -1px;

    @media (max-width: 480px) {
      font-size: 22px;
    }
  }

  span {
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    color: rgba(255, 255, 255, 0.4);
    font-weight: var(--font-weight-bold);
  }
`;
