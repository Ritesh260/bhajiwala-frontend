
import api from "./axios";

// GET TODAY OFFERS
export const getTodayOffers = async () => {
  const response = await api.get("/offers/today");
  return response.data;
};
