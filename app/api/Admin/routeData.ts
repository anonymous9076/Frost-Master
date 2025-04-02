import { axiosInstance } from "@/app/utlis/axiosConfig/AxiosInstance";

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
    console.log(data.data, "show data here:----");
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
export const addProduct=async()=>{
  try {
    
  } catch (error) {
    
  }
}

// delete product
export const deleteProduct=async()=>{
  try {
    
  } catch (error) {
    
  }
}

// delete Enquiry
export const deleteEnquiry=async()=>{
  try {
    
  } catch (error) {
    
  }
}
// export const showPayments = async () => {
//   try {
//   } catch (error) {
//     return error;
//   }
// };
