import styled from "@emotion/styled";

export const Footer = styled.footer`
  background: #111827;
  color: white;
  margin-top: 60px;
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: auto;
  padding: 50px 20px;
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(220px, 1fr)
  );
  gap: 30px;
`;

export const Section = styled.div`
  h3,
  h4 {
    margin-bottom: 15px;
  }

  p,
  li {
    color: #cbd5e1;
    margin-bottom: 8px;
    list-style: none;
  }

  ul {
    padding: 0;
  }
`;

export const Bottom = styled.div`
  text-align: center;
  padding: 20px;
  border-top: 1px solid #374151;
  color: #94a3b8;
`;