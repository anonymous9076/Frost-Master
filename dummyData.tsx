// interfaces.ts

export interface ScanDetail {
  Instructions: string;
  Scan: string;
  ScanDateTime: string;
  ScanType: string;
  ScannedLocation: string;
  StatusCode: string;
  StatusDateTime: string;
  call_duration?: number;
  geo_location?: {
    lat: number;
    long: number;
  };
}


export interface Scan {
  ScanDetail: ScanDetail;
}

export interface Consignee {
  Address1: string[];
  Address2: string[];
  Address3: string;
  City: string;
  Country: string;
  Name: string;
  PinCode: number;
  State: string;
  Telephone1: string;
  Telephone2: string;
}

export interface Shipment {
  AWB: string;
  CODAmount: number;
  ChargedWeight: number | null;
  Consignee: Consignee;
  DeliveryDate: string;
  DestRecieveDate: string;
  Destination: string;
  DispatchCount: number;
  Ewaybill: string[];
  ExpectedDeliveryDate: string;
  Extras: string;
  FirstAttemptDate: string;
  InvoiceAmount: number;
  OrderType: string;
  Origin: string;
  OriginRecieveDate: string;
  OutDestinationDate: string;
  PickUpDate: string;
  PickedupDate: string;
  PickupLocation: string;
  PromisedDeliveryDate: string;
  Quantity: string;
  RTOStartedDate: string | null;
  ReferenceNo: string;
  ReturnPromisedDeliveryDate: string | null;
  ReturnedDate: string | null;
  ReverseInTransit: boolean;
  Scans: Scan[];
   Status: ShipmentStatus;
  SenderName:string;
}
export interface ShipmentStatus {
  Instructions: string;
  RecievedBy: string;
  Status: string;
  StatusCode: string;
  StatusDateTime: string;
  StatusLocation: string;
  StatusType: string;
}
export interface ShipmentDataItem {
  Shipment: Shipment;
}

export interface TrackData {
  ShipmentData: ShipmentDataItem[];
}

const trackData:TrackData = 
    {
    "ShipmentData": [
        {
            "Shipment": {
                "AWB": "38261910000346",
                "CODAmount": 3400,
                "ChargedWeight": null,
                "Consignee": {
                    "Address1": [],
                    "Address2": [],
                    "Address3": "",
                    "City": "Ajmer",
                    "Country": "India",
                    "Name": "M/S HOTEL ATLANTICA,  M/S HOTEL ATLANTICA",
                    "PinCode": 305001,
                    "State": "Rajasthan",
                    "Telephone1": "",
                    "Telephone2": ""
                },
                "DeliveryDate": "2025-07-16T19:49:53.002",
                "DestRecieveDate": "2025-07-16T11:41:36.886",
                "Destination": "Ajmer",
                "DispatchCount": 1,
                "Ewaybill": [
                    "751543579493"
                ],
                "ExpectedDeliveryDate": "2025-07-17T23:59:59",
                "Extras": "",
                "FirstAttemptDate": "2025-07-16T12:36:45",
                "InvoiceAmount": 58410,
                "OrderType": "COD",
                "Origin": "Noida_Bairangpur_GW (Uttar Pradesh)",
                "OriginRecieveDate": "2025-07-15T02:15:02.078",
                "OutDestinationDate": "2025-07-15T06:19:57.799",
                "PickUpDate": "2025-07-14T16:52:49",
                "PickedupDate": "2025-07-14T16:52:49",
                "PickupLocation": "ANKUR OIL AND REFRIGERATION",
                "PromisedDeliveryDate": "2025-07-17T23:59:59",
                "Quantity": "",
                "RTOStartedDate": null,
                "ReferenceNo": "885",
                "ReturnPromisedDeliveryDate": null,
                "ReturnedDate": null,
                "ReverseInTransit": false,
                "Scans": [
                    {
                        "ScanDetail": {
                            "Instructions": "Manifest uploaded",
                            "Scan": "Manifested",
                            "ScanDateTime": "2025-07-14T11:37:21.053",
                            "ScanType": "UD",
                            "ScannedLocation": "Noida_Bairangpur_GW (Uttar Pradesh)",
                            "StatusCode": "X-UCI",
                            "StatusDateTime": "2025-07-14T11:37:21.053"
                        }
                    },
                    {
                        "ScanDetail": {
                            "Instructions": "Package details changed by shipper",
                            "Scan": "Manifested",
                            "ScanDateTime": "2025-07-14T16:51:21.685",
                            "ScanType": "UD",
                            "ScannedLocation": "Noida_Bairangpur_GW (Uttar Pradesh)",
                            "StatusCode": "DTUP-203",
                            "StatusDateTime": "2025-07-14T16:51:21.685"
                        }
                    },
                    {
                        "ScanDetail": {
                            "Instructions": "Ewaybill updated",
                            "Scan": "Manifested",
                            "ScanDateTime": "2025-07-14T16:52:43.384",
                            "ScanType": "UD",
                            "ScannedLocation": "Noida_Bairangpur_GW (Uttar Pradesh)",
                            "StatusCode": "DTUP-215",
                            "StatusDateTime": "2025-07-14T16:52:43.384"
                        }
                    },
                    {
                        "ScanDetail": {
                            "Instructions": "Package details changed by Delhivery",
                            "Scan": "Manifested",
                            "ScanDateTime": "2025-07-14T16:52:43.463",
                            "ScanType": "UD",
                            "ScannedLocation": "Noida_Bairangpur_GW (Uttar Pradesh)",
                            "StatusCode": "DTUP-205",
                            "StatusDateTime": "2025-07-14T16:52:43.463"
                        }
                    },
                    {
                        "ScanDetail": {
                            "Instructions": "Shipment picked up",
                            "Scan": "In Transit",
                            "ScanDateTime": "2025-07-14T16:52:49",
                            "ScanType": "UD",
                            "ScannedLocation": "Noida_Bairangpur_GW (Uttar Pradesh)",
                            "StatusCode": "X-PPOM",
                            "StatusDateTime": "2025-07-14T16:52:49"
                        }
                    },
                    {
                        "ScanDetail": {
                            "Instructions": "Vehicle departed from client location",
                            "Scan": "In Transit",
                            "ScanDateTime": "2025-07-14T16:52:56",
                            "ScanType": "UD",
                            "ScannedLocation": "Noida_Bairangpur_GW (Uttar Pradesh)",
                            "StatusCode": "FMDEPART-101",
                            "StatusDateTime": "2025-07-14T16:52:56"
                        }
                    },
                    {
                        "ScanDetail": {
                            "Instructions": "Shipment Recieved at Origin Center",
                            "Scan": "In Transit",
                            "ScanDateTime": "2025-07-15T02:15:02.078",
                            "ScanType": "UD",
                            "ScannedLocation": "Noida_Bairangpur_GW (Uttar Pradesh)",
                            "StatusCode": "X-PIOM",
                            "StatusDateTime": "2025-07-15T02:15:02.078"
                        }
                    },
                    {
                        "ScanDetail": {
                            "Instructions": "Ewaybill updated",
                            "Scan": "In Transit",
                            "ScanDateTime": "2025-07-15T03:06:29.589",
                            "ScanType": "UD",
                            "ScannedLocation": "Noida_Bairangpur_GW (Uttar Pradesh)",
                            "StatusCode": "DTUP-215",
                            "StatusDateTime": "2025-07-15T03:06:29.589"
                        }
                    },
                    {
                        "ScanDetail": {
                            "Instructions": "Package details changed by Delhivery",
                            "Scan": "In Transit",
                            "ScanDateTime": "2025-07-15T03:06:29.672",
                            "ScanType": "UD",
                            "ScannedLocation": "Noida_Bairangpur_GW (Uttar Pradesh)",
                            "StatusCode": "DTUP-205",
                            "StatusDateTime": "2025-07-15T03:06:29.672"
                        }
                    },
                    {
                        "ScanDetail": {
                            "Instructions": "Added to Bag",
                            "Scan": "In Transit",
                            "ScanDateTime": "2025-07-15T06:19:57.839",
                            "ScanType": "UD",
                            "ScannedLocation": "Noida_Bairangpur_GW (Uttar Pradesh)",
                            "StatusCode": "X-DBL1F",
                            "StatusDateTime": "2025-07-15T06:19:57.839"
                        }
                    },
                    {
                        "ScanDetail": {
                            "Instructions": "Bag Added To Trip",
                            "Scan": "In Transit",
                            "ScanDateTime": "2025-07-15T06:19:57.849",
                            "ScanType": "UD",
                            "ScannedLocation": "Noida_Bairangpur_GW (Uttar Pradesh)",
                            "StatusCode": "X-DLL2F",
                            "StatusDateTime": "2025-07-15T06:19:57.849"
                        }
                    },
                    {
                        "ScanDetail": {
                            "Instructions": "Vehicle Departed",
                            "Scan": "In Transit",
                            "ScanDateTime": "2025-07-15T07:25:17.406",
                            "ScanType": "UD",
                            "ScannedLocation": "Noida_Bairangpur_GW (Uttar Pradesh)",
                            "StatusCode": "X-OLL4F",
                            "StatusDateTime": "2025-07-15T07:25:17.406"
                        }
                    },
                    {
                        "ScanDetail": {
                            "Instructions": "Trip Arrived",
                            "Scan": "In Transit",
                            "ScanDateTime": "2025-07-15T15:52:10.309",
                            "ScanType": "UD",
                            "ScannedLocation": "Jaipur_Sez_GW (Rajasthan)",
                            "StatusCode": "X-ILL2F",
                            "StatusDateTime": "2025-07-15T15:52:10.309"
                        }
                    },
                    {
                        "ScanDetail": {
                            "Instructions": "Bag Received at Facility",
                            "Scan": "In Transit",
                            "ScanDateTime": "2025-07-15T18:06:00.435",
                            "ScanType": "UD",
                            "ScannedLocation": "Jaipur_Sez_GW (Rajasthan)",
                            "StatusCode": "X-ILL1F",
                            "StatusDateTime": "2025-07-15T18:06:00.435"
                        }
                    },
                    {
                        "ScanDetail": {
                            "Instructions": "Bag Added To Trip",
                            "Scan": "In Transit",
                            "ScanDateTime": "2025-07-16T00:03:14.821",
                            "ScanType": "UD",
                            "ScannedLocation": "Jaipur_Sez_GW (Rajasthan)",
                            "StatusCode": "X-DLL2F",
                            "StatusDateTime": "2025-07-16T00:03:14.821"
                        }
                    },
                    {
                        "ScanDetail": {
                            "Instructions": "Vehicle Departed",
                            "Scan": "In Transit",
                            "ScanDateTime": "2025-07-16T06:23:06.818",
                            "ScanType": "UD",
                            "ScannedLocation": "Jaipur_Sez_GW (Rajasthan)",
                            "StatusCode": "X-OLL4F",
                            "StatusDateTime": "2025-07-16T06:23:06.818"
                        }
                    },
                    {
                        "ScanDetail": {
                            "Instructions": "Trip Arrived",
                            "Scan": "In Transit",
                            "ScanDateTime": "2025-07-16T09:31:53.602",
                            "ScanType": "UD",
                            "ScannedLocation": "Ajmer_Ratanzila_I (Rajasthan)",
                            "StatusCode": "X-ILL2F",
                            "StatusDateTime": "2025-07-16T09:31:53.602"
                        }
                    },
                    {
                        "ScanDetail": {
                            "Instructions": "Bag Received at Facility",
                            "Scan": "In Transit",
                            "ScanDateTime": "2025-07-16T11:41:36.868",
                            "ScanType": "UD",
                            "ScannedLocation": "Ajmer_Ratanzila_I (Rajasthan)",
                            "StatusCode": "X-ILL1F",
                            "StatusDateTime": "2025-07-16T11:41:36.868"
                        }
                    },
                    {
                        "ScanDetail": {
                            "Instructions": "Shipment Received at Facility",
                            "Scan": "Pending",
                            "ScanDateTime": "2025-07-16T11:41:36.894",
                            "ScanType": "UD",
                            "ScannedLocation": "Ajmer_Ratanzila_I (Rajasthan)",
                            "StatusCode": "X-IBD3F",
                            "StatusDateTime": "2025-07-16T11:41:36.894"
                        }
                    },
                    {
                        "ScanDetail": {
                            "Instructions": "Out for delivery",
                            "Scan": "Dispatched",
                            "ScanDateTime": "2025-07-16T12:36:45.77",
                            "ScanType": "UD",
                            "ScannedLocation": "Ajmer_Ratanzila_I (Rajasthan)",
                            "StatusCode": "X-DDD3FD",
                            "StatusDateTime": "2025-07-16T12:36:45.77"
                        }
                    },
                    {
                        "ScanDetail": {
                            "Instructions": "Call placed to consignee",
                            "Scan": "Dispatched",
                            "ScanDateTime": "2025-07-16T12:50:33.002",
                            "ScanType": "UD",
                            "ScannedLocation": "Ajmer_Ratanzila_I (Rajasthan)",
                            "StatusCode": "ST-114",
                            "StatusDateTime": "2025-07-16T12:50:33.002",
                            "call_duration": 27,
                            "geo_location": {
                                "lat": 26.4342533,
                                "long": 74.7018583
                            }
                        }
                    },
                    // {
                    //     "ScanDetail": {
                    //         "Instructions": "Delivered to consignee",
                    //         "Scan": "Delivered",
                    //         "ScanDateTime": "2025-07-16T19:49:53.002",
                    //         "ScanType": "DL",
                    //         "ScannedLocation": "Ajmer_Ratanzila_I (Rajasthan)",
                    //         "StatusCode": "EOD-38",
                    //         "StatusDateTime": "2025-07-16T19:49:53.002",
                    //         "call_duration": 27,
                    //         "geo_location": {
                    //             "lat": 26.4342252,
                    //             "long": 74.7019308
                    //         }
                    //     }
                    // },
                    // {
                    //     "ScanDetail": {
                    //         "Instructions": "Shipment Delivered",
                    //         "Scan": "Delivered",
                    //         "ScanDateTime": "2025-07-16T19:49:53.002",
                    //         "ScanType": "DL",
                    //         "ScannedLocation": "Ajmer_Ratanzila_I (Rajasthan)",
                    //         "StatusCode": "CP-101",
                    //         "StatusDateTime": "2025-07-16T19:49:53.002",
                    //         "call_duration": 27,
                    //         "geo_location": {
                    //             "lat": 26.4342252,
                    //             "long": 74.7019308
                    //         }
                    //     }
                    // },
                    // {
                    //     "ScanDetail": {
                    //         "Instructions": "POD Audit - Incorrect",
                    //         "Scan": "Delivered",
                    //         "ScanDateTime": "2025-07-17T16:36:57.244",
                    //         "ScanType": "DL",
                    //         "ScannedLocation": "Ajmer_Ratanzila_I (Rajasthan)",
                    //         "StatusCode": "B2BPOD-102",
                    //         "StatusDateTime": "2025-07-17T16:36:57.244",
                    //         "call_duration": 27,
                    //         "geo_location": {
                    //             "lat": 26.4342252,
                    //             "long": 74.7019308
                    //         }
                    //     }
                    // },
                    // {
                    //     "ScanDetail": {
                    //         "Instructions": "POD uploaded",
                    //         "Scan": "Delivered",
                    //         "ScanDateTime": "2025-07-23T11:47:35.683",
                    //         "ScanType": "DL",
                    //         "ScannedLocation": "Ajmer_Ratanzila_I (Rajasthan)",
                    //         "StatusCode": "B2BPOD-107",
                    //         "StatusDateTime": "2025-07-23T11:47:35.683"
                    //     }
                    // },
                    // {
                    //     "ScanDetail": {
                    //         "Instructions": "POD Audit - without stamp",
                    //         "Scan": "Delivered",
                    //         "ScanDateTime": "2025-07-23T19:40:40.299",
                    //         "ScanType": "DL",
                    //         "ScannedLocation": "Ajmer_Ratanzila_I (Rajasthan)",
                    //         "StatusCode": "B2BPOD-103",
                    //         "StatusDateTime": "2025-07-23T19:40:40.299"
                    //     }
                    // }
                ],
                "SenderName": "FROST MASTER 4316 B2B",
                "Status": {
                    "Instructions": "POD Audit - without stamp",
                    "RecievedBy": "",
                    "Status": "Dispatched",
                    "StatusCode": "B2BPOD-103",
                    "StatusDateTime": "2025-07-23T19:40:40.299",
                    "StatusLocation": "Ajmer_Ratanzila_I (Rajasthan)",
                    "StatusType": "DL"
                }
            }
        }
    ]

}

export default trackData;