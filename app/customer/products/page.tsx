// app/customer/products/page.js
import { Suspense } from "react";
import ProductsPageContent from "./productPageContent";

export default function ProductsPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ProductsPageContent />
    </Suspense>
  );
}
