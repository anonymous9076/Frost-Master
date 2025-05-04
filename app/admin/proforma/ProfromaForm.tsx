import React, { useEffect, useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";

// InvoiceForm: Controlled form with value and onChange for each input
const InvoiceForm = () => {
  // Define form state
  const [formData, setFormData] = useState({
    invoiceNumber: "",
    issueDate: "",

    buyer_name: "",
    buyer_address: "",
    buyer_gstin: "",
    buyer_state_name: "",
    buyer_state_code: "",

    consignee_name: "",
    consignee_address: "",
    consignee_gstin: "",
    consignee_state_name: "",
    consignee_state_code: "",

    delivery_note: "",
    reference_no: "",

    products: [],

    subtotal: "",
    freight: "",
    tax_total: "",
    round_off: "",
    grand_total: "",
    total_in_words: "",

    account_holder: "",
    bank_name: "",
    account_number: "",
    ifsc_code: "",
    branch: "",
  });
  const [invoice, setInvoice] = useState<boolean>(false);
  const [buyer, setBuyer] = useState<boolean>(false);
  const [consignee, setConsignee] = useState<boolean>(false);
  const [shipping, setShipping] = useState<boolean>(false);
  const [total, setTotal] = useState<boolean>(false);
  const [product, setProducts] = useState<boolean>(false);
  const [Bank, setBank] = useState<boolean>(false);
  const invoiceComplete = formData.invoiceNumber && formData.issueDate;
  const buyerComplete =
    formData.buyer_name &&
    formData.buyer_address &&
    formData.buyer_state_name &&
    formData.buyer_state_code;
  const consigneeComplete =
    formData.consignee_name &&
    formData.consignee_address &&
    formData.consignee_state_name &&
    formData.consignee_state_code;
  const shippingComplete = formData.delivery_note && formData.reference_no;
  const productsComplete = formData.products;
  const totalsComplete =
    formData.subtotal && formData.tax_total && formData.grand_total;

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    // if(name=='products'){

    // }
    // setFormData((prev) => ({ ...prev, [name]: value }));

    // setFormData((prev) => ({ ...prev, [name]: value }));
    if(value){

      if (name === "products") {
        if(formData.products.length>=5){
          alert('done')
          return;
        }
        else{
          setFormData((prev) => ({
        ...prev,
        products: [...prev.products, value], // push value to array
      }));
     }
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  }

    if (invoiceComplete) {
      setBuyer(true);
    }
    if (buyerComplete) {
      setConsignee(true);
    }
    if (consigneeComplete) {
      setShipping(true);
    }
    if (productsComplete) {
      setProducts(true);
    }
    if (shippingComplete) {
      setTotal(true);
    }
    if (totalsComplete) {
      setBank(true);
    }
  };

  // Optional submit handler
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    // Add your submission logic here
  };
  useEffect(() => {
    const id = generateRandomId();
    setFormData((prev) => ({ ...prev, invoiceNumber: id }));
  }, []);
  const generateRandomId = (letterCount = 2, numberCount = 4): string => {
    const letters = Array.from({ length: letterCount }, () =>
      String.fromCharCode(65 + Math.floor(Math.random() * 26))
    ).join("");

    const numbers = Math.floor(Math.random() * 10 ** numberCount)
      .toString()
      .padStart(numberCount, "0");

    return `${letters}-${numbers}`;
  };
  const deliveryNotes = [
    { id: 1, name: "Left at front door" },
    { id: 2, name: "Handed to recipient" },
    { id: 3, name: "Delivered to reception" },
  ];
  const handleRemoveItem=(indx:number)=>{
    setFormData((prev) => ({
      ...prev,
      products: formData.products.filter((_,index:number)=>indx!==index), // push value to array
    }));
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 px-[1rem] sm:px-[3rem] pt-[1.1rem] pb-[5rem] "
    >
      {/* Invoice Details */}
      <div
        onClick={() => setInvoice((curr) => !curr)}
        className="w-full select-none flex border-b items-center px-[0.5rem] p-2  rounded-md justify-between hover:bg-blue-400 hover:text-white"
      >
        <h2 className="text-lg font-semibold ">Invoice Details</h2>
        <FaAngleDown></FaAngleDown>
      </div>
      {invoice ? (
        <>
          <div className="w-full">
            <label className="block text-gray-600  font-medium">
              Invoice Number
            </label>
            <input
              type="text"
              name="invoiceNumber"
              value={formData.invoiceNumber}
              onChange={handleChange}
              required
              className="w-full p-2 bg-white border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="w-full">
            <label className="block text-gray-600 font-medium">
              Issue Date
            </label>
            <input
              type="date"
              name="issueDate"
              value={formData.issueDate}
              onChange={handleChange}
              className="w-full p-2 bg-white border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
        </>
      ) : (
        ""
      )}
      {/* Buyer Details */}
      <div
        onClick={() => setBuyer((curr) => !curr)}
        className="w-full flex select-none items-center border-b px-[0.5rem] p-2  rounded-md justify-between hover:bg-blue-400 hover:text-white"
      >
        <h2 className="text-lg font-semibold ">Buyer Details</h2>
        <FaAngleDown></FaAngleDown>
      </div>
      {buyer ? (
        <>
          <div>
            <label className="block text-gray-600 font-medium">
              Buyer Name
            </label>
            <input
              type="text"
              name="buyer_name"
              value={formData.buyer_name}
              onChange={handleChange}
              required
              className="w-full p-2 bg-white border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block text-gray-600 font-medium">
              Buyer Address
            </label>
            <input
              type="text"
              name="buyer_address"
              value={formData.buyer_address}
              onChange={handleChange}
              required
              className="w-full p-2 bg-white border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block text-gray-600 font-medium">
              Buyer GSTIN
            </label>
            <input
              type="text"
              name="buyer_gstin"
              value={formData.buyer_gstin}
              onChange={handleChange}
              className="w-full p-2 bg-white border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block text-gray-600 font-medium">
              Buyer State Name
            </label>
            <input
              type="text"
              name="buyer_state_name"
              value={formData.buyer_state_name}
              onChange={handleChange}
              required
              className="w-full p-2 bg-white border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block text-gray-600 font-medium">
              Buyer State Code
            </label>
            <input
              type="text"
              name="buyer_state_code"
              value={formData.buyer_state_code}
              onChange={handleChange}
              required
              className="w-full p-2 bg-white border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
        </>
      ) : (
        ""
      )}
      {/* Consignee Details */}
      <div
        onClick={() => setConsignee((curr) => !curr)}
        className="w-full flex select-none items-center border-b px-[0.5rem] p-2  rounded-md justify-between hover:bg-blue-400 hover:text-white"
      >
        <h2 className="text-lg font-semibold ">Consignee Details</h2>
        <FaAngleDown></FaAngleDown>
      </div>
      {consignee ? (
        <>
          <div>
            <label className="block text-gray-600 font-medium">
              Consignee Name
            </label>
            <input
              type="text"
              name="consignee_name"
              value={formData.consignee_name}
              onChange={handleChange}
              required
              className="w-full p-2 bg-white border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block text-gray-600 font-medium">
              Consignee Address
            </label>
            <input
              type="text"
              name="consignee_address"
              value={formData.consignee_address}
              onChange={handleChange}
              required
              className="w-full p-2 bg-white border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block text-gray-600 font-medium">
              Consignee GSTIN
            </label>
            <input
              type="text"
              name="consignee_gstin"
              value={formData.consignee_gstin}
              onChange={handleChange}
              className="w-full p-2 bg-white border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block text-gray-600 font-medium">
              Consignee State Name
            </label>
            <input
              type="text"
              name="consignee_state_name"
              value={formData.consignee_state_name}
              onChange={handleChange}
              required
              className="w-full p-2 bg-white border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block text-gray-600 font-medium">
              Consignee State Code
            </label>
            <input
              type="text"
              name="consignee_state_code"
              value={formData.consignee_state_code}
              onChange={handleChange}
              required
              className="w-full p-2 bg-white border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
        </>
      ) : (
        ""
      )}
      {/* Shipping & Order Info */}
      <div
        onClick={() => setShipping((curr) => !curr)}
        className="w-full flex select-none items-center border-b px-[0.5rem] p-2  rounded-md justify-between hover:bg-blue-400 hover:text-white"
      >
        <h2 className="text-lg font-semibold ">Shipping & Order Info</h2>
        <FaAngleDown></FaAngleDown>
      </div>
      {shipping ? (
        <>
          <div>
            <label className="block text-gray-600 font-medium">
              Delivery Note
            </label>
            <input
              type="text"
              name="delivery_note"
              value={formData.delivery_note}
              onChange={handleChange}
              className="w-full p-2 bg-white border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block text-gray-600 font-medium">
              Reference No
            </label>
            <input
              type="text"
              name="reference_no"
              value={formData.reference_no}
              onChange={handleChange}
              className="w-full p-2 bg-white border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
        </>
      ) : (
        ""
      )}
      {/* Shipping & Order Info */}
      <div
        onClick={() => setProducts((curr) => !curr)}
        className="w-full flex select-none items-center border-b px-[0.5rem] p-2  rounded-md justify-between hover:bg-blue-400 hover:text-white"
      >
        <h2 className="text-lg font-semibold ">Products</h2>
        <FaAngleDown></FaAngleDown>
      </div>
      {product ? (
        <>
          <div>
            <label className="block text-gray-600 font-medium">
              Select Products
            </label>
              <select
                name="products"                
                onChange={handleChange}
                className="w-full p-2 bg-white border  border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                <option value="">Select a Product</option>
                {deliveryNotes.map((note) => (
                  <option key={note.id} value={note.name}>
                    {note.name}
                  </option>
                ))}
              </select>
                {formData.products.map((item, index) => (
                   <p
             key={index}
              className=" relative w-full p-2 bg-white border my-1 border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            >{item}
            <span onClick={()=>handleRemoveItem(index)} className="text-red-600 text-[20px] absolute z-90 top-2 right-3 "><MdDelete></MdDelete></span>
            </p>
            ))}
          </div>
        </>
      ) : (
        ""
      )}
      {/* Totals */}
      <div
        onClick={() => setTotal((curr) => !curr)}
        className="w-full flex select-none items-center border-b px-[0.5rem] p-2  rounded-md justify-between hover:bg-blue-400 hover:text-white"
      >
        <h2 className="text-lg font-semibold ">Total Amount</h2>
        <FaAngleDown></FaAngleDown>
      </div>
      {total ? (
        <>
          <div>
            <label className="block text-gray-600 font-medium">Subtotal</label>
            <input
              type="number"
              name="subtotal"
              value={formData.subtotal}
              onChange={handleChange}
              required
              className="w-full p-2 bg-white border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block text-gray-600 font-medium">Freight</label>
            <input
              type="number"
              name="freight"
              value={formData.freight}
              onChange={handleChange}
              className="w-full p-2 bg-white border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block text-gray-600 font-medium">Tax Total</label>
            <input
              type="number"
              name="tax_total"
              value={formData.tax_total}
              onChange={handleChange}
              required
              className="w-full p-2 bg-white border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block text-gray-600 font-medium">Round Off</label>
            <input
              type="number"
              name="round_off"
              value={formData.round_off}
              onChange={handleChange}
              className="w-full p-2 bg-white border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block text-gray-600 font-medium">
              Grand Total
            </label>
            <input
              type="number"
              name="grand_total"
              value={formData.grand_total}
              onChange={handleChange}
              required
              className="w-full p-2 bg-white border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block text-gray-600 font-medium">
              Total in Words
            </label>
            <input
              type="text"
              name="total_in_words"
              value={formData.total_in_words}
              onChange={handleChange}
              required
              className="w-full p-2 bg-white border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
        </>
      ) : (
        ""
      )}
      {/* Bank Details */}
      <div
        onClick={() => setBank((curr) => !curr)}
        className="w-full flex select-none items-center px-[0.5rem] p-2 border-b  rounded-md justify-between hover:bg-blue-400 hover:text-white"
      >
        <h2 className="text-lg font-semibold ">Bank Details</h2>
        <FaAngleDown></FaAngleDown>
      </div>
      {Bank ? (
        <>
          <div>
            <label className="block text-gray-600 font-medium">
              Account Holder
            </label>
            <input
              type="text"
              name="account_holder"
              value={formData.account_holder}
              onChange={handleChange}
              required
              className="w-full p-2 bg-white border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block text-gray-600 font-medium">Bank Name</label>
            <input
              type="text"
              name="bank_name"
              value={formData.bank_name}
              onChange={handleChange}
              required
              className="w-full p-2 bg-white border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block text-gray-600 font-medium">
              Account Number
            </label>
            <input
              type="text"
              name="account_number"
              value={formData.account_number}
              onChange={handleChange}
              required
              className="w-full p-2 bg-white border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block text-gray-600 font-medium">Branch</label>
            <input
              type="text"
              name="branch"
              value={formData.branch}
              onChange={handleChange}
              className="w-full p-2 bg-white border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block text-gray-600 font-medium">IFSC Code</label>
            <input
              type="text"
              name="ifsc_code"
              value={formData.ifsc_code}
              onChange={handleChange}
              className="w-full p-2 bg-white border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
        </>
      ) : (
        ""
      )}
      <div>
        <button className="bg-blue-400 text-white px-8 rounded-md py-3 ">
          Submit
        </button>
      </div>
    </form>
  );
};
export default InvoiceForm;
