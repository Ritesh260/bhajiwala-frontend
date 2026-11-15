
import api from "./axios";

// GET ALL COUPONS
export const getCoupons = async () => {
  const response = await api.get("/coupons");
  return response.data;
};

// GET COUPON BY ID
export const getCouponById = async (id) => {
  const response = await api.get(`/coupons/${id}`);
  return response.data;
};

// CREATE COUPON
export const createCoupon = async (data) => {
  const response = await api.post("/coupons", data);
  return response.data;
};

// UPDATE COUPON
export const updateCoupon = async (id, data) => {
  const response = await api.put(`/coupons/${id}`, data);
  return response.data;
};

// DELETE COUPON
export const deleteCoupon = async (id) => {
  const response = await api.delete(`/coupons/${id}`);
  return response.data;
};
