import { Search } from "lucide-react";
import { useSearchParams, useNavigate, useLocation } from "react-router-dom";
import * as S from "./SearchBar.styles";

export default function SearchBar({ placeholder = "Search products..." }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const location = useLocation();
  const query = searchParams.get("q") || "";

  const handleChange = (e) => {
    const val = e.target.value;
    
    // If we're not on the products page, navigate there first with the query
    if (location.pathname !== "/products") {
      navigate(`/products?q=${encodeURIComponent(val)}`);
      return;
    }

    if (val) {
      setSearchParams({ q: val });
    } else {
      setSearchParams({});
    }
  };

  return (
    <S.SearchWrapper>
      <S.IconWrapper>
        <Search size={16} />
      </S.IconWrapper>
      <S.SearchInput
        type="text"
        value={query}
        onChange={handleChange}
        placeholder={placeholder}
      />
    </S.SearchWrapper>
  );
}
