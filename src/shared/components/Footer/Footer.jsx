import * as S from "./Footer.styles";

export default function Footer() {
  return (
    <S.Footer>
      <S.Container>
        <S.Section>
          <h3>Ekart Hub</h3>
          <p>
            Your destination for premium electronics,
            gadgets, and computing devices.
          </p>
        </S.Section>

        <S.Section>
          <h4>Categories</h4>
          <ul>
            <li>Mobiles</li>
            <li>Laptops</li>
            <li>Accessories</li>
            <li>Appliances</li>
          </ul>
        </S.Section>

        <S.Section>
          <h4>Quick Links</h4>
          <ul>
            <li>Home</li>
            <li>Products</li>
            <li>Cart</li>
            <li>Orders</li>
          </ul>
        </S.Section>

        <S.Section>
          <h4>Contact</h4>
          <p>Email: support@ekarthub.com</p>
        </S.Section>
      </S.Container>

      <S.Bottom>
        © 2026 Ekart Hub. All Rights Reserved.
      </S.Bottom>
    </S.Footer>
  );
}