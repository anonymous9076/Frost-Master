import { ReactNode } from "react";

export interface EnquiryTypeResponse {
  typeName: string; // e.g., "Feedback"
  count: number; // e.g., 120
}

export interface EnquiryCardData {
  color: string;
  bg_color: string;
  text_color: string;
  category: string;
  numbers: number;
  icon: ReactNode;
}
