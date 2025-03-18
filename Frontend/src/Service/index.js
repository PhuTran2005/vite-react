import { Get } from "../Utils/Request";

export const getProductList = async () => {
  const data = await Get("products");
  return data;
};
