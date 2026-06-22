export type SubscriptionResult = {
  registered: boolean;
  subscription: {
    vendorId: string;
    plan: string;
    active: boolean;
    startedAt: string;
  };
};
