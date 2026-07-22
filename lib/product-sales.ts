export type ProductSalesInfo = {
  priceLabel: string;
  packaging: string;
  moq: string;
  note?: string;
  grades?: string[];
};

export const productSalesInfo: Record<string, ProductSalesInfo> = {
  'copper-oxide': {
    priceLabel: 'PKR 3,500 per kg',
    packaging: '25 kg standard packaging',
    moq: '10 kg minimum order; 25 kg recommended',
    note: 'Best value is usually the full 25 kg pack.',
  },
  'copper-sulphate': {
    priceLabel: 'PKR 750-1,200 per kg',
    packaging: '25 kg standard packaging',
    moq: '25 kg bag',
    grades: [
      'Lab grade, 25%: PKR 1,200 per kg',
      'Agriculture grade, 20%: PKR 900 per kg',
      'Agriculture grade, 15%: PKR 750 per kg',
    ],
    note: 'Both agriculture grades are popular for agri buyers; choose grade by application and budget.',
  },
  'silver-nitrate': {
    priceLabel: 'PKR 12,000 per 25 g for 99.9%; PKR 8,000 per 25 g for 70%',
    packaging: '25 g light-protected box',
    moq: '25 g minimum order',
    note: 'Silver nitrate prices may vary with current silver market rates.',
  },
  'copper-carbonate': {
    priceLabel: 'PKR 2,000 per kg',
    packaging: 'Packaging confirmed at quotation',
    moq: 'MOQ confirmed at quotation',
    grades: ['55% grade'],
  },
  'silver-chloride': {
    priceLabel: 'Price on request',
    packaging: '25 g packaging',
    moq: '25 g minimum order',
    note: 'Current price is confirmed at quotation.',
  },
  'cobalt-oxide': {
    priceLabel: 'Price on request',
    packaging: 'Bulk packaging available',
    moq: '2 kg minimum order',
    note: 'Black cobalt oxide is traded and supplied, not manufactured by Sulman Traders.',
  },
};
