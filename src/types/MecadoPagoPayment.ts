interface Metadata {}

interface BusinessInfo {
  unit: string;
  sub_unit: string;
}

interface PointOfInteraction {
  business_info: BusinessInfo;
  type: string;
}

interface FeeDetail {
  amount: number;
  fee_payer: string;
  type: string;
}

interface Identification {
  number: string;
  type: string;
}

interface Phone {
  area_code?: any;
  number?: any;
  extension?: any;
}

export interface Payer {
  first_name?: any;
  last_name?: any;
  email: string;
  identification?: Identification;
  phone?: Phone;
  DNI: string;
  type?: any;
  entity_type?: any;
  id: string;
}

interface TransactionDetails {
  total_paid_amount: number;
  acquirer_reference?: any;
  installment_amount: number;
  financial_institution?: any;
  net_received_amount: number;
  overpaid_amount: number;
  external_resource_url?: any;
  payable_deferral_period?: any;
  payment_method_reference_id?: any;
}

interface Order {
  id: string;
  type: string;
}

interface Item {
  quantity: string;
  category_id?: any;
  picture_url?: any;
  description: string;
  id: string;
  title: string;
  unit_price: string;
}

interface Address {
  street_name: string;
}

interface Payer2 {
  address: Address;
}

interface AdditionalInfo {
  authentication_code?: any;
  ip_address: string;
  nsu_processadora?: any;
  available_balance?: any;
  items: Item[];
  payer: Payer2;
}

interface Identification2 {
  number: string;
  type: string;
}

interface Cardholder {
  identification: Identification2;
  name: string;
}

interface Card {
  first_six_digits: string;
  expiration_year: number;
  date_created: Date;
  expiration_month: number;
  id?: any;
  cardholder: Cardholder;
  last_four_digits: string;
  date_last_updated: Date;
}

export interface MercadoPagoPaymentType {
  metadata: Metadata;
  corporation_id?: any;
  operation_type: string;
  point_of_interaction: PointOfInteraction;
  fee_details: FeeDetail[];
  notification_url?: any;
  date_approved: Date;
  money_release_schema?: any;
  payer: Payer;
  transaction_details: TransactionDetails;
  statement_descriptor: string;
  call_for_authorize_id?: any;
  installments: number;
  pos_id?: any;
  external_reference?: any;
  date_of_expiration?: any;
  charges_details: any[];
  id: number;
  payment_type_id: string;
  order: Order;
  counter_currency?: any;
  brand_id?: any;
  status_detail: string;
  differential_pricing_id?: any;
  additional_info: AdditionalInfo;
  live_mode: boolean;
  marketplace_owner?: any;
  card: Card;
  integrator_id?: any;
  status: string;
  transaction_amount_refunded: number;
  transaction_amount: number;
  description: string;
  money_release_date: Date;
  merchant_number?: any;
  refunds: any[];
  authorization_code?: any;
  captured: boolean;
  collector_id: number;
  merchant_account_id?: any;
  taxes_amount: number;
  date_last_updated: Date;
  coupon_amount: number;
  store_id?: any;
  date_created: Date;
  acquirer_reconciliation: any[];
  sponsor_id?: any;
  shipping_amount: number;
  issuer_id: string;
  payment_method_id: string;
  binary_mode: boolean;
  platform_id?: any;
  deduction_schema?: any;
  processing_mode: string;
  currency_id: string;
  shipping_cost: number;
}
