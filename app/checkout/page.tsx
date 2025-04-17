"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
// import UserAuthContext from "../context/userAuthContext";
// import { axiosInstance } from "../utlis/axiosConfig/AxiosInstance";
import {
  createRazorpayOrder,
  verifyPayment,
  placeCODOrder,
} from "../api/Payment/index";

const CheckoutPage = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const shippingAddress = {
    fullName: "AR",
    phone: "9876543210",
    addressLine1: "123 Main St",
    city: "Delhi",
    pincode: "110001",
    state: "Delhi",
  };

  const loadRazorpayScript = (): Promise<boolean> =>
    new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });

  const handleRazorpayPayment = async () => {
    setLoading(true);
    const scriptLoaded = await loadRazorpayScript();
    if (!scriptLoaded) return alert("Razorpay SDK load failed.");

    const res = await createRazorpayOrder(shippingAddress);
    if (res?.error) return alert(res.message);

    const razorpay = new window.Razorpay({
      key: res.keyId,
      amount: res.amount * 100,
      currency: res.currency,
      name: "Frost",
      description: "Complete your secure payment",
      order_id: res.razorpayOrderId,
      handler: async (response) => {
        const verifyRes = await verifyPayment(
          response.razorpay_order_id,
          response.razorpay_payment_id,
          response.razorpay_signature,
          shippingAddress
        );
        if (!verifyRes.error) {
          alert("Payment Successful");
          router.push("/orders");
        } else {
          alert("msg : " + verifyRes.message);
        }
      },
      prefill: {
        name: shippingAddress.fullName,
        contact: shippingAddress.phone,
      },
      theme: { color: "#3399cc" },
    });

    razorpay.open();
    setLoading(false);
  };

  const handleCOD = async () => {
    setLoading(true);
    const res = await placeCODOrder(shippingAddress);
    if (!res.error) {
      alert("cod order placed.");
      router.push("/orders");
    } else {
      alert("msg :" + res.message);
    }
    setLoading(false);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 border rounded shadow">
      <h1 className="text-xl font-bold mb-4">Checkout</h1>
      <button
        className="w-full py-2 bg-green-600 text-white rounded mb-3"
        onClick={handleRazorpayPayment}
        disabled={loading}
      >
        {loading ? "Processing..." : "Pay with Razorpay"}
      </button>
      <button
        className="w-full py-2 bg-gray-800 text-white rounded"
        onClick={handleCOD}
        disabled={loading}
      >
        {loading ? "Placing COD Order..." : "Cash on Delivery"}
      </button>
    </div>
  );
};

export default CheckoutPage;
