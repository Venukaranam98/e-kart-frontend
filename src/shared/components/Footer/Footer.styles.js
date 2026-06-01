import styled from "@emotion/styled";

export const FooterContainer = styled.footer`
  background-color: #08080c;
  color: rgba(255, 255, 255, 0.4);
  padding: 40px 0;
  margin-top: auto;
  border-top: 1px solid rgba(255, 255, 255, 0.04);
  position: relative;
  z-index: 10;
`;

export const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const Copyright = styled.p`
  font-size: 13px;
  margin: 0;
`;

export const Links = styled.div`
  display: flex;
  gap: var(--spacing-lg);
  margin-top: var(--spacing-md);

  @media (min-width: 768px) {
    margin-top: 0;
  }

  a {
    color: rgba(255, 255, 255, 0.4);
    text-decoration: none;
    font-size: 13px;
    transition: color 0.2s ease;

    &:hover {
      color: var(--color-primary);
    }
  }
`;
