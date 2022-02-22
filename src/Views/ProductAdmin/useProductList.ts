import { useCallback, useMemo, useState } from "react";
import useApiGet from "../../hooks/useApiGet";
import useApiPost from "../../hooks/useApiPost";
import { Paginate } from "../../types/Paginate";
import { Product } from "../../types/Product";

const useProductList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState("");
  const [products, setProducts] = useState<Product[]>();
  const [paginate, setPaginate] = useState<Paginate>({ pages: 0, total: 0 });
  const apiGet = useApiGet();
  const apiPost = useApiPost();

  const nextPage = () => {
    if (products && paginate.pages > currentPage)
      setCurrentPage(prev => prev + 1);
  };

  const prevPage = () => {
    if (currentPage > 0) setCurrentPage(prev => prev - 1);
  };

  const handleChangeFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value);
  };

  const removeProduct = useCallback(async (idProduct: number) => {
    const response = await apiPost<{ message: string; status: number }>(
      "/products",
      undefined,
      `/${idProduct}`,
      "DELETE"
    );

    if (response)
      setProducts(prev => prev?.filter(product => product.id !== idProduct));
  }, []);

  useMemo(async () => {
    const response = await apiGet<{
      data: Product[];
      total: number;
      pages: number;
    }>("/products", `?page=${currentPage}&filter=${filter}`);
    if (response && response?.data?.length > 0) {
      setPaginate({ total: response.total, pages: response.pages });
      setProducts(response.data);
    }
  }, [currentPage, filter]);

  return useMemo(
    () => ({
      products,
      paginate,
      currentPage,
      nextPage,
      prevPage,
      filter,
      handleChangeFilter,
      removeProduct
    }),
    [products]
  );
};

export default useProductList;
