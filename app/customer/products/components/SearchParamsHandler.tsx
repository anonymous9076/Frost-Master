"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

interface SearchParamsClientProps {
  onCategoryChange: (category: string | null) => void;
}

const SearchParamsClient: React.FC<SearchParamsClientProps> = ({
  onCategoryChange,
}) => {
  const searchParams = useSearchParams();
  const category = searchParams.get("category");

  useEffect(() => {
    onCategoryChange(category);
  }, [category, onCategoryChange]);

  return null;
};

export default SearchParamsClient;
