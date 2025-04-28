import { useBillingContext } from "../context/BillingContext";

export const useBilling = () => {
  return useBillingContext();
};
