import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import { Card } from "./ProductCard.styles";

const shimmer = keyframes`
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
`;

export const SkeletonCard = styled(Card)`
  cursor: default;
  backdrop-filter: none;
  
  &:hover {
    transform: none;
    box-shadow: none;
    border-color: rgba(255, 255, 255, 0.05);
  }
  
  &::before {
    display: none;
  }
`;

export const SkeletonBase = styled.div`
  background: linear-gradient(90deg, 
    rgba(255, 255, 255, 0.05) 25%, 
    rgba(255, 255, 255, 0.1) 37%, 
    rgba(255, 255, 255, 0.05) 63%
  );
  background-size: 400% 100%;
  animation: ${shimmer} 1.4s ease infinite;
  border-radius: 4px;
`;

export const SkeletonImage = styled(SkeletonBase)`
  width: 100%;
  height: 220px;
  border-radius: 0;
`;

export const SkeletonContent = styled.div`
  padding: var(--spacing-xl);
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

export const SkeletonCategory = styled(SkeletonBase)`
  width: 60px;
  height: 12px;
  margin-bottom: var(--spacing-sm);
  border-radius: 10px;
`;

export const SkeletonTitle = styled(SkeletonBase)`
  width: 80%;
  height: 20px;
  margin-bottom: var(--spacing-sm);
`;

export const SkeletonDescriptionLine = styled(SkeletonBase)`
  width: 100%;
  height: 12px;
  margin-bottom: 6px;
  
  &:last-of-type {
    width: 60%;
    margin-bottom: var(--spacing-xl);
  }
`;

export const SkeletonFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
  padding-top: var(--spacing-md);
  border-top: 1px solid rgba(255, 255, 255, 0.05);
`;

export const SkeletonPrice = styled(SkeletonBase)`
  width: 60px;
  height: 24px;
`;

export const SkeletonButton = styled(SkeletonBase)`
  width: 100px;
  height: 32px;
  border-radius: var(--rounded-pill-md);
`;
