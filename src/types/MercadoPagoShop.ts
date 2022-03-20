interface BackUrls {
  failure: string;
  pending: string;
  success: string;
}

interface Item {
  id: string;
  category_id: string;
  currency_id: string;
  description: string;
  title: string;
  quantity: number;
  unit_price: number;
}

interface Metadata {}

interface Phone {
  area_code: string;
  number: string;
}

interface Address {
  zip_code: string;
  street_name: string;
  street_number?: unknown;
}

interface Identification {
  number: string;
  type: string;
}

interface Payer {
  phone: Phone;
  address: Address;
  email: string;
  identification: Identification;
  name: string;
  surname: string;
  date_created?: unknown;
  last_purchase?: unknown;
}

interface ExcludedPaymentMethod {
  id: string;
}

interface ExcludedPaymentType {
  id: string;
}

interface PaymentMethods {
  default_card_id?: unknown;
  default_payment_method_id?: unknown;
  excluded_payment_methods: ExcludedPaymentMethod[];
  excluded_payment_types: ExcludedPaymentType[];
  installments?: unknown;
  default_installments?: unknown;
}

interface RedirectUrls {
  failure: string;
  pending: string;
  success: string;
}

interface ReceiverAddress {
  zip_code: string;
  street_name: string;
  street_number?: unknown;
  floor: string;
  apartment: string;
  city_name?: unknown;
  state_name?: unknown;
  country_name?: unknown;
}

interface Shipments {
  default_shipping_method?: unknown;
  receiver_address: ReceiverAddress;
}

export interface MercadoPagoShopType {
  additional_info: string;
  auto_return: string;
  back_urls: BackUrls;
  binary_mode: boolean;
  client_id: string;
  collector_id: number;
  coupon_code?: unknown;
  coupon_labels?: unknown;
  date_created: Date;
  date_of_expiration?: unknown;
  expiration_date_from?: unknown;
  expiration_date_to?: unknown;
  expires: boolean;
  external_reference: string;
  id: string;
  init_point: string;
  internal_metadata?: unknown;
  items: Item[];
  marketplace: string;
  marketplace_fee: number;
  metadata: Metadata;
  notification_url?: unknown;
  operation_type: string;
  payer: Payer;
  payment_methods: PaymentMethods;
  processing_modes?: unknown;
  product_id?: unknown;
  redirect_urls: RedirectUrls;
  sandbox_init_point: string;
  site_id: string;
  shipments: Shipments;
  total_amount?: unknown;
  last_updated?: unknown;
}
