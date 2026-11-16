
import api from "@/api/axios";

// GET ALL ADDRESSES
export const getAddresses = async () => {
  const response = await api.get("/user/addresses");
  return response.data;
};

// ADD ADDRESS
export const addAddress = async (addressData) => {
  const response = await api.post("/user/addresses", addressData);
  return response.data;
};

// UPDATE ADDRESS
export const updateAddress = async (id, addressData) => {
  const response = await api.put(`/user/addresses/${id}`, addressData);
  return response.data;
};

// DELETE ADDRESS
export const deleteAddress = async (id) => {
  const response = await api.delete(`/user/addresses/${id}`);
  return response.data;
};

// SET DEFAULT ADDRESS
export const setDefaultAddress = async (id) => {
  const response = await api.patch(`/user/addresses/${id}/default`);
  return response.data;
};

