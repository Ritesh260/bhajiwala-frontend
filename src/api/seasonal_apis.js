
import api from "./axios";

// GET ALL SEASONAL OFFERS
export const getSeasonalOffers = async () => {
  const response = await api.get("/offers/seasonal");
  return response.data;
};

// GET SEASONAL OFFER BY ID
export const getSeasonalOfferById = async (id) => {
  const response = await api.get(`/offers/seasonal/${id}`);
  return response.data;
};

// CREATE SEASONAL OFFER
export const createSeasonalOffer = async (formData) => {
  const response = await api.post("/offers/seasonal", formData);
  return response.data;
};

// UPDATE SEASONAL OFFER
export const updateSeasonalOffer = async (id, formData) => {
  const response = await api.put(`/offers/seasonal/${id}`, formData);
  return response.data;
};

// DELETE SEASONAL OFFER
export const deleteSeasonalOffer = async (id) => {
  const response = await api.delete(`/offers/seasonal/${id}`);
  return response.data;
};
