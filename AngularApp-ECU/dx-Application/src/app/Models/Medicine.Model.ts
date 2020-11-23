export class Medicine {
  constructor() {}
  name: string;
  brand: string;
  quantity: number;
  expiryDate: Date;
  price: string;
  notes: string;
  isExpiryThresholdReached: boolean;
  isCallbackRequest: boolean;
  isError: boolean;
  validationMessages: string;
}
