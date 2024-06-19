import { useState } from "react";

export function usePagination(initialPage = 1) {
  const [page, setPage] = useState(initialPage);

  const nextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const prevPage = () => {
    setPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  return { page, nextPage, prevPage };
}
