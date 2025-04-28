import React, { createContext, useContext, useState } from "react";
import { BillingUseCase } from "../../core/usecases/BillingUseCase";
import { StripeBillingService } from "../../infrastructure/services/StripeBillingService";
import { Subscription } from "../../core/entities/Subscription";

interface BillingContextType {
  subscription: Subscription | null;
  fetchSubscription: (userId: string) => Promise<void>;
  upgradePlan: (userId: string, newPlan: 'basic' | 'pro' | 'enterprise') => Promise<void>;
}

const BillingContext = createContext<BillingContextType | undefined>(undefined);

const billingUseCase = new BillingUseCase(new StripeBillingService());

export const BillingProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [subscription, setSubscription] = useState<Subscription | null>(null);

  const fetchSubscription = async (userId: string) => {
    const sub = await billingUseCase.fetchSubscription(userId);
    setSubscription(sub);
  };

  const upgradePlan = async (userId: string, newPlan: 'basic' | 'pro' | 'enterprise') => {
    const updatedSub = await billingUseCase.upgradePlan(userId, newPlan);
    setSubscription(updatedSub);
  };

  return (
    <BillingContext.Provider value={{ subscription, fetchSubscription, upgradePlan }}>
      {children}
    </BillingContext.Provider>
  );
};

export const useBillingContext = () => {
  const context = useContext(BillingContext);
  if (!context) {
    throw new Error("useBillingContext must be used within a BillingProvider");
  }
  return context;
};
