
import api from "@/api/axios";

// Add product to cart
export const addToCart = async (productId, quantity = 1, variantId = null) => {
  const data = { productId, quantity };

  if (variantId) {
    data.variantId = variantId;
  }

  const response = await api.post("/user/cart/add", data);
  return response.data;
};

// Get cart
export const getCart = async () => {
  const response = await api.get("/user/cart");
  return response.data;
};

// Update quantity
export const updateCartItem = async (itemId, quantity) => {
  const response = await api.patch(`/user/cart/${itemId}`, {
    quantity,
  });
  return response.data;
};

// Remove cart item
export const removeCartItem = async (itemId) => {
  const response = await api.delete(`/user/cart/${itemId}`);
  return response.data;
};

// Clear cart
export const clearCart = async () => {
  const response = await api.delete("/user/cart/clear");
  return response.data;
};
