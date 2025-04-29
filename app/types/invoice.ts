// src/types/invoice.ts

export interface BuyerInfo {
    buyer_name: string;
    buyer_address: string;
    buyer_gstin?: string;
    buyer_state_name: string;
    buyer_state_code: string;
  }
  
  export interface ConsigneeInfo {
    consignee_name: string;
    consignee_address: string;
    consignee_gstin?: string;
    consignee_state_name: string;
    consignee_state_code: string;
  }
  
  export interface ProductItem {
    productId: string; 
    quantity: number;
  }
  
  export interface BankDetails {
    account_holder: string;
    bank_name: string;
    account_number: string;
    ifsc_code: string;
    branch: string;
  }
  
  export interface Invoice {
    invoiceNumber: string;
    issueDate?: Date;
  
    buyer: BuyerInfo;
    consignee: ConsigneeInfo;
  
    delivery_note?: string;
    reference_no?: string;
    buyer_order_no?: string;
    dispatch_doc_no?: string;
    dispatched_through?: string;
    payment_terms?: string;
    delivery_note_date?: Date;
    destination?: string;
    terms_of_delivery?: string;
  
    products: ProductItem[];
  
    subtotal: number;
    freight?: number;
    tax_total: number;
    round_off?: number;
    grand_total: number;
    total_in_words: string;
    declaration?: string;
    terms_conditions?: string;
  
    bank_details: BankDetails;
  }
  