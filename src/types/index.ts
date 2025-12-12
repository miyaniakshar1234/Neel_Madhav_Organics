export interface Product {
  id: string;
  name: string;
  category_id: string;
  base_unit: string;
  hsn_code: string;
  tax_rate: number;
  min_stock_alert: number;
  created_at: string;
}

export interface Category {
  id: string;
  name: string;
  parent_id?: string;
}

export interface BillItem {
    product_id: string;
    product_name: string;
    quantity: number;
    unit_price: number;
    total: number;
}
