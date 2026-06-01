import { useSearchParams } from "react-router-dom";
import * as S from "./CategoryChips.styles";

const CATEGORIES = ["All", "Mobiles", "Laptops", "Accessories", "Appliances"];

export default function CategoryChips() {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentCategory = searchParams.get("category") || "All";

  const handleCategoryClick = (category) => {
    const params = new URLSearchParams(searchParams);
    if (category === "All") {
      params.delete("category");
    } else {
      params.set("category", category);
    }
    setSearchParams(params);
  };

  return (
    <S.ScrollContainer>
      <S.ChipList>
        {CATEGORIES.map((cat) => (
          <S.Chip
            key={cat}
            $isActive={currentCategory === cat}
            onClick={() => handleCategoryClick(cat)}
          >
            {cat}
          </S.Chip>
        ))}
      </S.ChipList>
    </S.ScrollContainer>
  );
}
