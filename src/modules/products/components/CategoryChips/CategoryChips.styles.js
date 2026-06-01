import styled from "@emotion/styled";

export const ScrollContainer = styled.div`
  width: 100%;
  overflow-x: auto;
  padding-bottom: var(--spacing-sm);
  margin-top: var(--spacing-xl);
  
  -ms-overflow-style: none;  
  scrollbar-width: none;  
  &::-webkit-scrollbar { 
    display: none; 
  }
`;

export const ChipList = styled.div`
  display: flex;
  gap: var(--spacing-sm);
  width: max-content;
`;

export const Chip = styled.button`
  background: ${(props) => (props.$isActive 
    ? "linear-gradient(135deg, var(--color-primary), #ff1a1a)" 
    : "rgba(255, 255, 255, 0.04)")};
  color: ${(props) => (props.$isActive ? "var(--color-on-primary)" : "rgba(255, 255, 255, 0.5)")};
  border: 1px solid ${(props) => (props.$isActive ? "transparent" : "rgba(255, 255, 255, 0.08)")};
  padding: 6px 14px;
  border-radius: 10px;
  font-size: 11px;
  font-weight: var(--font-weight-bold);
  cursor: pointer;
  transition: all 0.25s ease;
  white-space: nowrap;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  ${(props) => props.$isActive && "box-shadow: 0 4px 12px rgba(230, 0, 0, 0.25);"}

  &:hover {
    background: ${(props) => (props.$isActive 
      ? "linear-gradient(135deg, #ff1a1a, var(--color-primary))" 
      : "rgba(255, 255, 255, 0.08)")};
    color: ${(props) => (props.$isActive ? "var(--color-on-primary)" : "var(--color-on-dark)")};
    border-color: ${(props) => (props.$isActive ? "transparent" : "rgba(255, 255, 255, 0.15)")};
    transform: translateY(-1px);
  }
  
  &:active {
    transform: translateY(0);
  }
`;
