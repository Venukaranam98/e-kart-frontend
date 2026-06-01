import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

export const PageWrapper = styled.div`
  background-color: #0a0a0f;
  min-height: 100vh;
  padding-top: 80px;
  position: relative;
  overflow-x: hidden;

  &::before {
    content: "";
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 80% 20%, rgba(230, 0, 0, 0.04) 0%, transparent 50%),
      radial-gradient(circle at 20% 80%, rgba(0, 100, 255, 0.03) 0%, transparent 50%);
    pointer-events: none;
    z-index: 0;
  }

  > * {
    position: relative;
    z-index: 1;
  }
`;

export const OrdersContainer = styled.div`
  min-height: calc(100vh - 140px);
  padding: 40px 20px;
  max-width: 900px;
  margin: 0 auto;
`;

export const Title = styled.h1`
  font-family: var(--font-family-base);
  font-size: 22px;
  font-weight: var(--font-weight-heavy);
  color: var(--color-on-dark);
  text-transform: uppercase;
  letter-spacing: -0.5px;
  margin-bottom: 32px;
  border-left: 3px solid var(--color-primary);
  padding-left: 16px;
  animation: ${fadeInUp} 0.6s ease forwards;

  @media (min-width: 768px) {
    font-size: 32px;
  }
`;

export const OrdersList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const OrderCard = styled.div`
  background: linear-gradient(165deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.015) 100%);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 20px;
  overflow: hidden;
  backdrop-filter: blur(8px);
  transition: all 0.3s ease;
  animation: ${fadeInUp} 0.5s ease forwards;
  opacity: 0;

  &:nth-of-type(1) { animation-delay: 0.1s; }
  &:nth-of-type(2) { animation-delay: 0.15s; }
  &:nth-of-type(3) { animation-delay: 0.2s; }
  &:nth-of-type(4) { animation-delay: 0.25s; }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
  }

  &:hover {
    border-color: rgba(230, 0, 0, 0.15);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  }
`;

export const OrderHeader = styled.div`
  padding: 20px 24px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.04);
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
    padding: 16px;
  }
`;

export const OrderInfo = styled.div`
  display: flex;
  gap: 40px;

  @media (max-width: 768px) {
    width: 100%;
    justify-content: space-between;
    gap: 16px;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 4px;

    span {
      color: rgba(255, 255, 255, 0.35);
      font-size: 10px;
      text-transform: uppercase;
      letter-spacing: 1.5px;
      font-weight: var(--font-weight-bold);
    }

    strong {
      color: var(--color-on-dark);
      font-size: 14px;
      letter-spacing: 0.3px;

      @media (min-width: 768px) {
        font-size: 16px;
      }
    }
  }
`;

export const ItemsList = styled.div`
  padding: 20px 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (max-width: 768px) {
    padding: 16px;
  }
`;

export const ItemRow = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  padding-bottom: 16px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.03);

  &:last-child {
    padding-bottom: 0;
    border-bottom: none;
  }

  .image-placeholder {
    width: 56px;
    height: 56px;
    background: linear-gradient(135deg, rgba(255,255,255,0.04), rgba(255,255,255,0.02));
    border: 1px solid rgba(255,255,255,0.06);
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: rgba(255, 255, 255, 0.2);
    flex-shrink: 0;
  }

  img {
    width: 56px;
    height: 56px;
    object-fit: cover;
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.08);
    flex-shrink: 0;
  }

  .details {
    flex: 1;
    min-width: 0;

    h4 {
      font-size: 14px;
      font-weight: var(--font-weight-bold);
      color: var(--color-on-dark);
      margin: 0 0 4px;
      letter-spacing: 0.2px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    p {
      font-size: 13px;
      color: rgba(255, 255, 255, 0.4);
      margin: 0;
      display: flex;
      align-items: center;
      gap: 8px;

      span {
        background: rgba(255,255,255,0.05);
        padding: 2px 8px;
        border-radius: 6px;
        font-size: 11px;
      }
    }
  }

  .price {
    font-size: 16px;
    font-weight: var(--font-weight-heavy);
    color: var(--color-on-dark);
    white-space: nowrap;
  }
`;

export const EmptyState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 80px 20px;
  background: linear-gradient(165deg, rgba(255, 255, 255, 0.04) 0%, rgba(255, 255, 255, 0.01) 100%);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 24px;
  text-align: center;
  backdrop-filter: blur(8px);
  animation: ${fadeInUp} 0.6s ease forwards;

  svg {
    color: rgba(255, 255, 255, 0.15);
    margin-bottom: 24px;
  }

  h2 {
    color: var(--color-on-dark);
    font-size: 22px;
    margin-bottom: 8px;
    font-weight: var(--font-weight-heavy);
  }

  p {
    color: rgba(255, 255, 255, 0.4);
    margin-bottom: 32px;
    font-size: 14px;
  }

  a {
    display: inline-block;
    padding: 12px 28px;
    background: linear-gradient(135deg, var(--color-primary), #ff1a1a);
    color: var(--color-on-primary);
    font-weight: var(--font-weight-bold);
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 1px;
    border-radius: 12px;
    transition: all 0.3s ease;
    font-size: 13px;

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 24px rgba(230, 0, 0, 0.3);
    }
  }
`;
