import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`;

export const PageWrapper = styled.div`
  height: 100vh;
  background-color: var(--color-canvas);
`;

export const ErrorCode = styled.h1`
  font-family: var(--font-family-base);
  font-size: 180px;
  font-weight: var(--font-weight-heavy);
  line-height: 1;
  color: var(--color-primary);
  margin: 0;
  letter-spacing: -4px;
  animation: ${float} 6s ease-in-out infinite;

  @media (max-width: 768px) {
    font-size: 120px;
  }
`;

export const Title = styled.h2`
  font-family: var(--font-family-base);
  font-size: var(--font-size-display-md);
  font-weight: var(--font-weight-heavy);
  color: var(--color-ink);
  margin-top: var(--spacing-lg);
  margin-bottom: var(--spacing-lg);
  text-transform: uppercase;
  letter-spacing: -1px;

  @media (max-width: 768px) {
    font-size: var(--font-size-display-sm);
  }
`;

export const Subtitle = styled.p`
  font-size: var(--font-size-body-lg);
  color: var(--color-body);
  margin-bottom: var(--spacing-3xl);
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: var(--font-size-body-md);
  }
`;

export const Button = styled.button`
  padding: 16px var(--spacing-3xl);
  background-color: var(--color-ink);
  color: var(--color-canvas);
  border: none;
  border-radius: var(--rounded-pill-lg);
  font-size: var(--font-size-button-md);
  font-weight: var(--font-weight-bold);
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 12px rgba(37, 40, 43, 0.2);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(37, 40, 43, 0.3);
    background-color: var(--color-primary);
  }

  &:active {
    transform: translateY(0);
    box-shadow: none;
  }
`;
