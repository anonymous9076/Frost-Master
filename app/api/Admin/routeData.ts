import { InvoiceFormData } from "@/app/admin/proforma/ProfromaForm";
import { axiosInstance } from "@/app/utlis/axiosConfig/AxiosInstance";
interface productSpecFormData {
  suitableFor: string;
  decks: string;
  trays: string;
  maximumTemperature: number;
  materialFront: string;
  materialBody: string;
  powerType: string;
  ignitionType: string;
  energyEfficiency: string;
  fuelConsumption: string;
  digitalDisplay: boolean;
  temperatureControl: string;
  safety: string;
  usage: string;
}
export const showCustomers = async (userName: string, currentPage: number) => {
  try {
    const data = await axiosInstance.get("/admin/getAllUsers", {
      params: {
        userName: userName,
        pageNo: currentPage,
      },
    });
    return data.data;
  } catch (error) {
    return error;
  }
};

export const deleteCustomer = async (customerId: string) => {
  try {
    const data = await axiosInstance.delete(`/admin/deleteUser/${customerId}`);
    console.log(data, "data");
  } catch (error) {
    return error;
  }
};

export const showProducts = async (
  productName: string,
  productCategory: string,
  currentPage: number
) => {
  try {
    const data = await axiosInstance.get("/showProducts", {
      params: {
        productName: productName,
        productCategory: productCategory,
        pageNo: currentPage,
      },
    });
    console.log(data.data, "show data here:----");
    return data.data;
  } catch (error) {
    return error;
  }
};

export const showOrders = async (
  dateRange: string,
  status: string,
  pageNo: number
) => {
  try {
    const data = await axiosInstance.get("/showAllOrders", {
      params: {
        dateRange: dateRange,
        status: status,
        pageNo: pageNo,
      },
    });
    return data.data;
  } catch (error) {
    return error;
  }
};

export const showEnquires = async (sortBy: string, pageNo: number) => {
  try {
    const data = await axiosInstance.get("/admin/getAllEnquiries", {
      params: {
        sortBy: sortBy,
        pageNo: pageNo,
      },
    });
    return data.data;
  } catch (error) {
    return error;
  }
};

// add product feature
export const addProduct = async (
  productTitle: string,
  productDescription: string,
  price: number,
  category: string,
  subcategory: string,
  material: string
) => {
  // productTitle, productDescription, price, category, material
  try {
    const data = await axiosInstance.post("/addProducts", {
      productTitle,
      productDescription,
      price,
      category,
      subcategory,
      material,
    });
    return data.data;
  } catch (error) {
    return error;
  }
};

// add product images
export const addProductImages = async (files: FormData, productId: string) => {
  try {
    const data = await axiosInstance.post(
      `/addProductImages/${productId}`,
      files
    );
    return data.data;
  } catch (error) {
    return error;
  }
};

export const addProductSpecification = async (
  formData: productSpecFormData,
  productId: string
) => {
  try {
    const data = await axiosInstance.post(
      `/addProductSpec/${productId}`,
      formData
    );
    return data;
  } catch (error) {
    return error;
  }
};
// update product form
export const updateProductForm = async (
  formData: FormData,
  productId: string
) => {
  try {
    const data = await axiosInstance.put(
      `/updateProduct/${productId}`,
      formData
    );
    return data.data;
  } catch (error) {
    return error;
  }
};

// show product details
export const showProductDetails = async (productId: string) => {
  try {
    const data = await axiosInstance.get(`getProductById/${productId}`);
    return data.data;
  } catch (error) {
    return error;
  }
};
// delete product
export const deleteProduct = async (productId: string) => {
  try {
    const data = await axiosInstance.delete(`deleteProduct/${productId}`);
    return data.data;
  } catch (error) {
    return error;
  }
};

// delete Enquiry
export const deleteEnquiry = async (enquiryId: string) => {
  try {
    const data = await axiosInstance.delete(
      `/admin/deleteEnquiry/${enquiryId}`
    );
    return data.data;
  } catch (error) {
    return error;
  }
};
// payment
export const showPaymentsData = async (
  filterTransactionId: string,
  filterDate: string,
  filterStatus: string,
  pageNo: number
) => {
  try {
    const data = await axiosInstance.get(`/payments/showPayments`, {
      params: {
        filterTransactionId,
        filterDate,
        filterStatus,
        pageNo,
      },
    });
    return data.data;
  } catch (error) {
    return error;
  }
};

// export const showOrderDetails = async () => {
//   try {
//   } catch (error) {
//     return error;
//   }
// };

//admin only --> refund
export const refundPayment = async (paymentId: string) => {
  try {
    const response = await axiosInstance.post(`/payments/refund/${paymentId}`);
    return response.data;
  } catch (error) {
    console.error("Refund failed:", error);
    return {
      error: true,
      // message: error?.response?.data?.message || "Refund failed",
    };
  }
};

export const getProducts = async () => {
  const res = await axiosInstance.get("/getProducts");
  return res.data;
};

export const createProforma = async (data: InvoiceFormData) => {
  try {
    const res = await axiosInstance.post("/createPerforma", data);
  } catch (error) {
    return error;
  }
};

export const getProforma = async (pageNo: Number) => {
  try {
    const res = await axiosInstance.get("/showPerforma");
    return res.data;
  } catch (error) {
    return error;
  }
};

export const deleteProforma = async (id: string) => {
  try {
    const res = await axiosInstance.delete(`/deletePerforma/${id}`);
    return res;
  } catch (error) {
    return error;
  }
};

export const showEnquiryData = async()=>{
  try {
    const res = await axiosInstance.delete(`/deletePerforma/${id}`);
    return res;
  } catch (error) {
    return error;
  }
}
