import { useCallback, useMemo, useState } from "react";
import useApiGet from "../../hooks/useApiGet";
import { Paginate } from "../../types/Paginate";
import { Product } from "../../types/Product";

const useProduct = () => {
  const [products, setProducts] = useState<Product[]>();
  const apiGet = useApiGet();
  const [paginate, setPaginate] = useState<Paginate>({ pages: 0, total: 0 });
  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState("");

  const featchMore = () => {
    if (products && paginate.pages > currentPage)
      setCurrentPage(prev => prev + 1);
  };

  const handleChangeFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value);
  };

  useMemo(async () => {
    const response = await apiGet<{
      data: Product[];
      total: number;
      pages: number;
    }>("/products", `?page=${currentPage}&filter=${filter}`);
    if (response && response?.data?.length > 0) {
      const allProducts = products || [];
      allProducts?.push(...response.data);
      setProducts(allProducts);
      setPaginate({ total: response.total, pages: response.pages });
    }
  }, [currentPage]);

  const handleFilter = useCallback(async () => {
    if (currentPage !== 1) setCurrentPage(1);
    const response = await apiGet<{
      data: Product[];
      total: number;
      pages: number;
    }>("/products", `?page=${currentPage}&filter=${filter}`);
    if (response && response?.data?.length > 0) {
      setProducts(response?.data);
      setPaginate({ total: response.total, pages: response.pages });
    }
  }, [filter]);

  return { products, featchMore, handleChangeFilter, handleFilter, filter };
};

export default useProduct;
