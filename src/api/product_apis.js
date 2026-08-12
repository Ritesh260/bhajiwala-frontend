import api from "./axios";

// Get all products
export const getProducts = async () => {
  try {
    const response = await api.get("/products");
    return response.data;
  } catch (error) {
    console.error("Failed to fetch products:", error);

    throw error;
  }
};
// Get product by slug
export const getProductBySlug = async (slug) => {
  try {
    const response = await api.get(`/products/slug/${slug}`);
    return response.data;
  } catch (error) {
    console.error("Failed to fetch product by slug:", error);
    throw error;
  }
};