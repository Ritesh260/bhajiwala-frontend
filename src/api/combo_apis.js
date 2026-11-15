
import api from "./axios";

// GET ALL COMBOS
export const getCombos = async () => {
  const response = await api.get("/offers/combos");
  return response.data;
};

// GET COMBO BY ID
export const getComboById = async (id) => {
  const response = await api.get(`/offers/combos/${id}`);
  return response.data;
};

// CREATE COMBO
export const createCombo = async (formData) => {
  const response = await api.post("/offers/combos", formData);
  return response.data;
};

// UPDATE COMBO
export const updateCombo = async (id, formData) => {
  const response = await api.put(`/offers/combos/${id}`, formData);
  return response.data;
};

// DELETE COMBO
export const deleteCombo = async (id) => {
  const response = await api.delete(`/offers/combos/${id}`);
  return response.data;
};
