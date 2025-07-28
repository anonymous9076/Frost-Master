'use client';
import React from 'react';
import trackData from '../../../dummyData'; 
import { AiOutlineInbox } from 'react-icons/ai';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
const Tracking: React.FC = () => {
  const shipment = trackData.ShipmentData[0].Shipment;

  const steps = ["Manifested", "In Transit", "Pending","Dispatched", "Delivered"];
  const statusName = shipment.Status.Status; // e.g. "Delivered"
  const currentStepIndex = steps.indexOf(statusName);
  const currentStep = currentStepIndex >= 0 ? currentStepIndex + 1 : 0;

  const sortedScans = [...shipment.Scans].sort((a, b) => {
    const dateA = new Date(a.ScanDetail.ScanDateTime).getTime();
    const dateB = new Date(b.ScanDetail.ScanDateTime).getTime();
    return dateB - dateA;
  });

//   console.log(statusName,currentStepIndex,currentStep,steps.length)

  return (
    <div className="bg-gray-100 text-gray-800">
        <Navbar active=''></Navbar>
      <div className="w-full bg-white p-[5%]">
        <h1 className="text-2xl font-bold text-[#35736E] mb-4">
          <AiOutlineInbox className="inline-block mr-2"/> Tracking for AWB: <span className="text-gray-900">{shipment.AWB}</span>
        </h1>

        {/* Shipment overview grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm mb-6">
          <div>
            <strong>Status:</strong>{' '}
            <span className={`font-semibold ${statusName === "Delivered" ? 'text-[#35736E]' : 'text-gray-600'}`}>
              {statusName}
            </span>
          </div>
          <div><strong>Reference #:</strong> {shipment.ReferenceNo}</div>
          <div><strong>Customer:</strong> {shipment.Consignee.Name}</div>
          <div>
            <strong>Destination:</strong> {shipment.Consignee.City}, {shipment.Consignee.State} - {shipment.Consignee.PinCode}
          </div>
          <div><strong>Invoice Amount:</strong> ₹{shipment.InvoiceAmount}</div>
          <div><strong>COD Amount:</strong> ₹{shipment.CODAmount}</div>
          <div>
            <strong>Delivered On:</strong>{' '}
            {shipment.DeliveryDate ? new Date(shipment.DeliveryDate).toLocaleString() : 'N/A'}
          </div>
          <div>
            <strong>Expected Delivery:</strong>{' '}
            {shipment.ExpectedDeliveryDate ? new Date(shipment.ExpectedDeliveryDate).toLocaleDateString() : 'N/A'}
          </div>
        </div>

        {/* Progress Steps */}
        <h2 className="text-lg font-semibold text-[#35736E] mb-2">Progress</h2>
        <div className="flex items-center justify-between mb-8 relative">
          {/* Background line */}
          <div className="absolute top-4 left-0 w-full h-1 bg-gray-300 z-0">
            <div
              className="h-1 bg-[#35736E] z-10"
              style={{ width: `${(currentStep/steps.length) * 100}%` }}
            ></div>
          </div>
          {/* Step circles */}
          {steps.map((label, idx) => (
            <div key={idx} className="text-center z-10 w-1/5">
              <div
                className={`w-8 h-8 rounded-full text-white mx-auto flex items-center justify-center ${
                  (idx + 1) <= currentStep ? 'bg-[#35736E]' : 'bg-gray-300'
                }`}
              >
                {idx + 1}
              </div>
              <p className="text-xs mt-2">{label}</p>
            </div>
          ))}
        </div>

        {/* Scan History */}
        <h2 className="text-lg font-semibold text-[#35736E] mb-2">📍 Scan History</h2>
        <ol className="relative border-l border-indigo-300 pl-4">
          {sortedScans.map((scan, idx) => (
            <li key={idx} className="mb-6">
              <span
                className={`absolute w-3 h-3 rounded-full -left-1.5 top-1 ${
                  idx === 0 ? 'bg-[#35736E]' : 'bg-[#35736E]'
                }`}
              ></span>
              <p className={`font-medium ${idx === 0 ? 'text-[#35736E]' : ''}`}>
                {scan.ScanDetail.Scan}
              </p>
              <p className="text-xs text-gray-600">
                {scan.ScanDetail.ScanDateTime} — {scan.ScanDetail.ScannedLocation}
              </p>
            </li>
          ))}
        </ol>
      </div>
       <Footer></Footer>
    </div>
  );
};

export default Tracking;
