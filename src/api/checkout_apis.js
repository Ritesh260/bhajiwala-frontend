
import api from "./axios";

// POST: Calculate checkout summary
export const getCheckoutSummary = async (checkoutData) => {
  const { data } = await api.post(
    "/user/checkout/summary",
    checkoutData
  );

  return data;
};
