
import api from "@/api/axios";

// Add product to wishlist
export const addToWishlist = async (productId) => {
  const response = await api.post("/user/wishlist/add", {
    productId,
  });
  return response.data;
};

// Get wishlist
export const getWishlist = async () => {
  const response = await api.get("/user/wishlist");
  return response.data;
};

// Remove wishlist product
export const removeFromWishlist = async (productId) => {
  const response = await api.delete(
    `/user/wishlist/${productId}`
  );
  return response.data;
};

// Clear wishlist
export const clearWishlist = async () => {
  const response = await api.delete("/user/wishlist/clear");
  return response.data;
};
