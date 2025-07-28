// 'use client';
// import React from 'react';
// import { Box, Typography, Paper, Tooltip, Grid } from '@mui/material';

// const ImageMapComponent = () => {
//   // Define all the areas with their coordinates and titles
//   const areas = [
//     { id: 1, x: 300.93, y: 38.94, width: 210.65, height: 214.19, title: "Authorised User (Company Admin)" },
//     { id: 2, x: 1166.55, y: 56.65, width: 219.5, height: 171.71, title: "System" },
//     { id: 3, x: 109.75, y: 293.85, width: 851.46, height: 53.11, title: "Application API's (APIs Used Throughout the Check My DBS Platform)" },
//     { id: 4, x: 111.52, y: 876.24, width: 182.33, height: 42.48, title: "Dashboard" },
//     { id: 5, x: 70.81, y: 955.9, width: 201.8, height: 138.07, title: "Create DBS Application" },
//     { id: 6, x: 320.4, y: 939.97, width: 200.03, height: 157.55, title: "Pending Application Evidence Check" },
//     { id: 7, x: 577.08, y: 938.2, width: 196.49, height: 175.25, title: "Pay or Fix Issues with Applications" },
//     { id: 8, x: 833.75, y: 936.43, width: 208.88, height: 171.71, title: "Incomplete DBS Applications" },
//     { id: 9, x: 1088.66, y: 929.34, width: 201.8, height: 185.87, title: "Reject DBS Application" },
//     { id: 10, x: 1338.26, y: 936.43, width: 215.96, height: 185.87, title: "DBS Application Requiring Payment" },
//     { id: 11, x: 1573.69, y: 929.34, width: 233.66, height: 187.64, title: "DBS Application already Paid For" },
//     { id: 12, x: 76.12, y: 1127.6, width: 300.93, height: 56.65, title: "Create Application" },
//     { id: 13, x: 433.69, y: 1132.92, width: 200.03, height: 200.03, title: "Application Pending for DBS" },
//     { id: 14, x: 699.22, y: 1148.85, width: 230.12, height: 185.87, title: "Completed DBS checks Certificate Posted Out" },
//     { id: 15, x: 984.22, y: 1145.31, width: 231.89, height: 192.95, title: "DBS Certificate Eligible for reprint(if not received)" },
//     { id: 17, x: 1290.46, y: 1159.47, width: 228.35, height: 162.86, title: "Spend History for your DBS Checks" },
//     { id: 18, x: 1570.15, y: 1147.08, width: 228.35, height: 182.33, title: "Successful Payment to your DBS Account" },
//     { id: 19, x: 116.83, y: 1391.36, width: 155.78, height: 53.11, title: "Apply For" },
//     { id: 20, x: 69.04, y: 1455.09, width: 191.18, height: 130.99, title: "Create User" },
//     { id: 21, x: 543.45, y: 1433.85, width: 212.42, height: 164.63, title: "Settings" },
//     { id: 22, x: 1053.26, y: 1435.62, width: 210.65, height: 159.32, title: "Manage Users" },
//     { id: 23, x: 1554.22, y: 1440.93, width: 207.11, height: 141.61, title: "User List" },
//     { id: 24, x: 81.43, y: 1704.68, width: 171.71, height: 49.57, title: "User Types" },
//     { id: 25, x: 745.25, y: 1662.2, width: 150.47, height: 58.42, title: "User List" },
//     { id: 26, x: 677.98, y: 1745.4, width: 240.74, height: 150.47, title: "Create DBS Application" },
//     { id: 27, x: 952.36, y: 1770.18, width: 352.27, height: 49.57, title: "Create DBS Application" },
//     { id: 28, x: 676.21, y: 1906.48, width: 242.51, height: 134.53, title: "Prepopulated DBS Application" },
//     { id: 29, x: 115.06, y: 2110.06, width: 258.45, height: 46.02, title: "DBS Application" },
//     { id: 30, x: 146.92, y: 2173.78, width: 410.68, height: 54.88, title: "List of Assigned Application" },
//     { id: 31, x: 787.73, y: 2180.86, width: 423.07, height: 46.02, title: "Pay or Fix Issues Application" },
//     { id: 32, x: 65.5, y: 2274.68, width: 230.12, height: 154.01, title: "View Application Details" },
//     { id: 33, x: 414.22, y: 2251.67, width: 224.81, height: 173.48, title: "View History" },
//     { id: 34, x: 708.07, y: 2472.94, width: 207.11, height: 180.56, title: "Resent to Counter Signatory" },
//     { id: 35, x: 977.14, y: 2467.63, width: 146.92, height: 173.48, title: "View Details" },
//     { id: 36, x: 1129.38, y: 2467.63, width: 185.87, height: 177.02, title: "Check DBS Application" },
//     { id: 37, x: 1352.42, y: 2449.93, width: 189.41, height: 189.41, title: "View History" },
//     { id: 38, x: 1554.22, y: 2444.62, width: 228.35, height: 215.96, title: "Signatory Reconcile Details" },
//     { id: 39, x: 145.15, y: 2719, width: 423.07, height: 51.34, title: "Incomplete DBS Application" },
//     { id: 40, x: 70.81, y: 2991.6, width: 198.26, height: 173.48, title: "Reject DBS Application" },
//     { id: 41, x: 290.31, y: 2977.44, width: 150.47, height: 226.58, title: "View DBS Application Details" },
//     { id: 42, x: 477.95, y: 2982.75, width: 184.1, height: 159.32, title: "View History" },
//     { id: 43, x: 791.27, y: 2717.23, width: 384.13, height: 46.02, title: "Rejected DBS Application" },
//     { id: 44, x: 716.92, y: 3018.16, width: 235.43, height: 159.32, title: "Mark Application Read" },
//     { id: 45, x: 955.9, y: 3005.77, width: 228.35, height: 169.94, title: "View Details" },
//     { id: 46, x: 1304.62, y: 2980.98, width: 224.81, height: 203.57, title: "View Results" },
//     { id: 47, x: 1540.06, y: 3002.23, width: 242.51, height: 180.56, title: "View History" },
//     { id: 48, x: 150.47, y: 3251.82, width: 481.49, height: 51.34, title: "Application Pending for the DBS" },
//     { id: 49, x: 1258.6, y: 3250.05, width: 527.51, height: 61.96, title: "DBS Application Requiring Payment" },
//     { id: 50, x: 81.43, y: 3547.44, width: 226.58, height: 196.49, title: "Continue DBS Application" },
//     { id: 51, x: 327.48, y: 3543.9, width: 228.35, height: 180.56, title: "View Details" },
//     { id: 52, x: 631.95, y: 3524.43, width: 240.74, height: 208.88, title: "View Results" },
//     { id: 53, x: 885.09, y: 3520.89, width: 224.81, height: 196.49, title: "View History" },
//     { id: 54, x: 139.84, y: 3795.27, width: 111.52, height: 136.3, title: "DBS Application Already Paid For" },
//     { id: 55, x: 375.28, y: 3800.58, width: 345.19, height: 46.02, title: "Completed DBS Checks" },
//     { id: 56, x: 957.67, y: 3798.81, width: 591.24, height: 53.11, title: "Application Pending for Evidence Check" },
//     { id: 57, x: 306.24, y: 3862.53, width: 182.33, height: 154.01, title: "Reject DBS Application" },
//     { id: 58, x: 302.7, y: 4115.67, width: 217.73, height: 180.56, title: "Erased Applications" },
//     { id: 59, x: 879.78, y: 4126.29, width: 208.88, height: 169.94, title: "Continue DBS Application" },
//     { id: 60, x: 1111.67, y: 4124.52, width: 194.72, height: 162.86, title: "View Details" },
//     { id: 61, x: 1329.41, y: 4087.35, width: 212.42, height: 194.72, title: "View Results" },
//     { id: 62, x: 1555.99, y: 4089.12, width: 212.42, height: 205.34, title: "Reject DBS Application" },
//     { id: 63, x: 164.63, y: 4335.17, width: 511.58, height: 53.11, title: "DBS Certificate Eligible for Reprint" },
//     { id: 64, x: 816.05, y: 4331.63, width: 426.61, height: 63.73, title: "Spend History For your DBS Checks" },
//     { id: 65, x: 1359.5, y: 4333.4, width: 424.84, height: 61.96, title: "Successful Payment to your DBS Account" },
//     { id: 66, x: 69.04, y: 4609.55, width: 192.95, height: 155.78, title: "Reprint" },
//     { id: 67, x: 265.53, y: 4618.4, width: 191.18, height: 169.94, title: "View Application Details" },
//     { id: 68, x: 465.56, y: 4623.71, width: 201.8, height: 157.55, title: "Result" },
//     { id: 69, x: 116.83, y: 4885.7, width: 196.49, height: 61.96, title: "My Accounts" },
//     { id: 70, x: 148.7, y: 4951.19, width: 136.3, height: 65.5, title: "Invoices" },
//     { id: 71, x: 1233.82, y: 4954.74, width: 198.26, height: 65.5, title: "Transaction" },
//     { id: 72, x: 1566.61, y: 4954.74, width: 168.17, height: 54.88, title: "Payments" },
//     { id: 73, x: 1235.59, y: 5218.49, width: 104.44, height: 53.11, title: "Spent" },
//     { id: 74, x: 1571.92, y: 5218.49, width: 173.48, height: 56.65, title: "User Spent" },
//     { id: 75, x: 118.6, y: 5029.08, width: 185.87, height: 145.15, title: "Create Invoice" },
//     { id: 76, x: 481.49, y: 5004.3, width: 201.8, height: 159.32, title: "Invoice Listing" },
//     { id: 77, x: 145.15, y: 5491.1, width: 141.61, height: 61.96, title: "Invoices" },
//     { id: 78, x: 354.04, y: 5484.02, width: 221.27, height: 164.63, title: "Adjust DBS Fee to Admin Fee" },
//     { id: 79, x: 720.46, y: 5482.25, width: 253.14, height: 164.63, title: "Adjust Admin Fee to DBS Fee" },
//     { id: 80, x: 1106.36, y: 5492.87, width: 118.6, height: 61.96, title: "Refund" },
//     { id: 81, x: 1124.06, y: 5563.68, width: 235.43, height: 150.47, title: "Create Refund" },
//     { id: 82, x: 1472.79, y: 5553.06, width: 283.23, height: 161.09, title: "List of Refunded Amounts" },
//     { id: 83, x: 1109.9, y: 5749.55, width: 235.43, height: 54.88, title: "Balance Details" },
//     { id: 84, x: 1109.9, y: 5807.96, width: 251.37, height: 157.55, title: "Funds Deposited" },
//     { id: 85, x: 1488.72, y: 5788.49, width: 258.45, height: 177.02, title: "Funds Remaining" },
//     { id: 86, x: 118.6, y: 6043.4, width: 143.38, height: 65.5, title: "Trainings" },
//     { id: 87, x: 902.79, y: 6043.4, width: 123.91, height: 61.96, title: "Report" },
//     { id: 88, x: 1416.14, y: 6045.17, width: 203.57, height: 61.96, title: "Notifications" },
//     { id: 89, x: 115.06, y: 6423.98, width: 157.55, height: 63.73, title: "Support" },
//     { id: 90, x: 830.21, y: 6422.21, width: 116.83, height: 65.5, title: "Header" },
//     { id: 91, x: 116.83, y: 6567.37, width: 212.42, height: 168.17, title: "Help (FAQs)" },
//     { id: 92, x: 423.07, y: 6570.91, width: 223.04, height: 162.86, title: "User Manual" },
//     { id: 93, x: 90.28, y: 6930.26, width: 277.92, height: 65.5, title: "Counter Signature" },
//     { id: 94, x: 130.99, y: 7008.14, width: 175.25, height: 74.35, title: "Dashboard" },
//     { id: 95, x: 435.46, y: 7043.55, width: 130.99, height: 47.79, title: "Actions" },
//     { id: 96, x: 69.04, y: 7160.38, width: 214.19, height: 185.87, title: "DBS Applications List" },
//     { id: 97, x: 630.18, y: 7110.81, width: 157.55, height: 150.47, title: "Post Comment on Applications" },
//     { id: 98, x: 920.49, y: 7013.45, width: 407.14, height: 60.19, title: "View Assigned Applications" },
//     { id: 99, x: 870.93, y: 7071.87, width: 201.8, height: 152.24, title: "Companies" },
//     { id: 100, x: 879.78, y: 7323.24, width: 169.94, height: 138.07, title: "Individual User" },
//     { id: 101, x: 129.22, y: 7470.16, width: 456.71, height: 67.27, title: "Post Comment on Application" },
//     { id: 102, x: 129.22, y: 7546.28, width: 189.41, height: 155.78, title: "Companies" },
//     { id: 103, x: 113.29, y: 7710.91, width: 215.96, height: 146.92, title: "Individual User" },
//     { id: 104, x: 414.22, y: 7599.38, width: 231.89, height: 201.8, title: "DBS Applications List" },
//     { id: 105, x: 99.13, y: 8056.09, width: 269.07, height: 67.27, title: "Evidence checker" },
//     { id: 106, x: 116.83, y: 8130.44, width: 184.1, height: 70.81, title: "Dashboard" },
//     { id: 107, x: 81.43, y: 8210.1, width: 217.73, height: 168.17, title: "Assigned Applicants for DBS" },
//     { id: 108, x: 361.12, y: 8183.54, width: 217.73, height: 205.34, title: "Incomplete DBS Application" },
//     { id: 109, x: 660.28, y: 8194.17, width: 231.89, height: 210.65, title: "Application Pending for the DBS" },
//     { id: 110, x: 952.36, y: 8194.17, width: 230.12, height: 208.88, title: "DBS Application already Paid For" },
//     { id: 111, x: 1244.44, y: 8192.4, width: 233.66, height: 200.03, title: "Completed DBS checks Certificate Posted Out" },
//     { id: 112, x: 1520.58, y: 8190.62, width: 260.22, height: 194.72, title: "DBS Certificate Eligible for reprint (if not received)" },
//     { id: 113, x: 74.35, y: 8378.26, width: 198.26, height: 157.55, title: "Application Pending Evidence Check" },
//     { id: 114, x: 318.63, y: 8381.8, width: 231.89, height: 157.55, title: "Reject DBS Application" },
//     { id: 115, x: 65.5, y: 8532.27, width: 205.34, height: 166.4, title: "Fix Issues with Applications" },
//     { id: 116, x: 308.01, y: 8537.58, width: 215.96, height: 169.94, title: "DBS application requirement payment" },
//     { id: 117, x: 639.04, y: 8441.99, width: 159.32, height: 72.58, title: "Attributes" },
//     { id: 118, x: 939.97, y: 8450.84, width: 247.83, height: 54.88, title: "DBS Application Already Paid for" },
//     { id: 119, x: 1332.95, y: 8440.22, width: 440.77, height: 72.58, title: "DBS Certificate Eligible for Reprint (If Not Received)" },
//     { id: 120, x: 130.99, y: 8744.69, width: 251.37, height: 65.5, title: "DBS Application" },
//     { id: 121, x: 164.63, y: 8820.81, width: 474.41, height: 70.81, title: "View Assigned DBS Application" },
//     { id: 122, x: 966.52, y: 8819.04, width: 485.03, height: 72.58, title: "Fix Issues with DBS Applications" },
//     { id: 123, x: 171.71, y: 9321.77, width: 430.15, height: 63.73, title: "Application Pending for DBS" },
//     { id: 124, x: 1026.7, y: 9321.77, width: 396.52, height: 60.19, title: "Rejected DBS Applications" },
//     { id: 125, x: 168.17, y: 9842.2, width: 587.7, height: 69.04, title: "Application Pending Evidence Checker" },
//     { id: 126, x: 975.37, y: 9836.89, width: 686.83, height: 65.5, title: "Completed DBS Checks-Certificate Posted Out" },
//     { id: 127, x: 892.17, y: 9932.48, width: 244.28, height: 189.41, title: "Application with DBS Result" },
//     { id: 128, x: 943.51, y: 10164.38, width: 228.35, height: 145.15, title: "Erased Applications" },
//   ];

//   return (
//     <Box sx={{ position: 'relative', width: '100%', height: '12953px' }}>
//       {/* Background Image */}
//       <Box
//         component="img"
//         src="/IG Product Diagram(Release 1) Chekc My DBS - Image.svg"
//         alt="Check My DBS Product Diagram"
//         sx={{ width: '100%', height: 'auto', position: 'absolute', top: 0, left: 0 }}
//       />

//       {/* Interactive Areas */}
//       {areas.map((area) => (
//         <Tooltip key={area.id} title={area.title} arrow>
//           <Paper
//             sx={{
//               position: 'absolute',
//               left: `${(area.x / 1864) * 100}%`,
//               top: `${(area.y / 12953) * 100}%`,
//               width: `${(area.width / 1864) * 100}%`,
//               height: `${(area.height / 12953) * 100}%`,
//               backgroundColor: 'rgba(0, 0, 0, 0)',
//               border: '1px solid transparent',
//               '&:hover': {
//                 borderColor: 'white',
//                 backgroundColor: 'rgba(255, 255, 255, 0.2)',
//               },
//               cursor: 'pointer',
//             }}
//             onClick={() => console.log(`Area ${area.id} clicked: ${area.title}`)}
//           />
//         </Tooltip>
//       ))}
//     </Box>
//   );
// };

// export default ImageMapComponent;



"use client";
import React, { useState, useEffect } from 'react';
import { Box, Tooltip } from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { IGProductDiagramRelease1ChekcMyDBSImage1 } from '@/assets';
 
interface DiagramArea {
  id: number;
  title: string;
  x: number;
  y: number;
  width: number;
  height: number;
  route: string;
}
 
const InteractiveDBSDiagram = () => {
  const router = useRouter();
  const [hoveredArea, setHoveredArea] = useState<number | null>(null);
  const [isMounted, setIsMounted] = useState(false);
 
  useEffect(() => {
    setIsMounted(true);
  }, []);
 
  const areas: DiagramArea[] = [
    // ==================== ADMIN ROUTES ====================
    { id: 1, title: "Authorised User (Company Admin)", x: 300.93, y: 38.94, width: 210.65, height: 214.19, route: "/1-dbs-authorised-user" },

    { id: 20, title: "Create User", x: 69.04, y: 1455.09, width: 191.18, height: 130.99, route: "/admin/users/create" },
    { id: 22, title: "Manage Users", x: 1053.26, y: 1435.62, width: 210.65, height: 159.32, route: "/admin/users/manage" },
    { id: 23, title: "User List", x: 1554.22, y: 1440.93, width: 207.11, height: 141.61, route: "/admin/users/list" },
    { id: 24, title: "User Types", x: 81.43, y: 1704.68, width: 171.71, height: 49.57, route: "/admin/users/types" },
    { id: 25, title: "User List", x: 745.25, y: 1662.20, width: 150.47, height: 58.42, route: "/admin/users/all" },
    { id: 100, title: "Individual User", x: 879.78, y: 7323.24, width: 169.94, height: 138.07, route: "/admin/users/individual" },
    { id: 103, title: "Individual User", x: 113.29, y: 7710.91, width: 215.96, height: 146.92, route: "/admin/users/individual/view" },
 
    // ==================== DASHBOARD & SETTINGS ====================
    { id: 4, title: "Dashboard", x: 111.52, y: 876.24, width: 182.33, height: 42.48, route: "/3-1-dbs-company-admin-dashboard" },
    { id: 19, title: "Apply For", x: 116.83, y: 1391.36, width: 155.78, height: 53.11, route: "/apply" },
    { id: 21, title: "Settings", x: 543.45, y: 1433.85, width: 212.42, height: 164.63, route: "/settings" },
    { id: 90, title: "Header", x: 830.21, y: 6422.21, width: 116.83, height: 65.50, route: "/header" },
 
    // ==================== SYSTEM ROUTES ====================
    { id: 2, title: "System", x: 1166.55, y: 56.65, width: 219.50, height: 171.71, route: "/dbs-system" },



    { id: 3, title: "Application API's", x: 109.75, y: 293.85, width: 851.46, height: 53.11, route: "/system/apis" },
 
    // ==================== APPLICATION ROUTES ====================
    { id: 5, title: "Create DBS Application", x: 70.81, y: 955.90, width: 201.80, height: 138.07, route: "/3-1-1-dbs-company-admin-create-dbs-application" },
    { id: 6, title: "DBS Company Admin Pending Application Evidence Check", x: 320.40, y: 939.97, width: 200.03, height: 157.55, route: "/3-1-2-dbs-company-admin-pending-application-evidence-check" },


    { id: 7, title: "DBS Company Admin Pay or Fix Issues with Applications", x: 577.08, y: 938.20, width: 196.49, height: 175.25, route: "/3-1-3-dbs-company-admin-pay-or-fix-issues-with-applications" },
    { id: 8, title: " DBS Company Admin Incomplete DBS Applications", x: 833.75, y: 936.43, width: 208.88, height: 171.71, route: "/3-1-4-dbs-company-admin-incomplete-dbs-applications" },
    { id: 9, title: "DBS Company Admin Reject DBS Application", x: 1088.66, y: 929.34, width: 201.80, height: 185.87, route: "/3-1-5-dbs-company-admin-reject-dbs-applications" },
    { id: 10, title: "DBS Company Admin DBS Application Requiring Payment", x: 1338.26, y: 936.43, width: 215.96, height: 185.87, route: "/3-1-6-dbs-company-admin-dbs-application-requiring-payment" },
    { id: 11, title: "DBS Company Admin DBS Application already Paid For", x: 1573.69, y: 929.34, width: 233.66, height: 187.64, route: "/3-1-7-dbs-company-admin-dbs-application-already-paid-for" },
    { id: 12, title: "Create Application", x: 76.12, y: 1127.60, width: 300.93, height: 56.65, route: "/3-2-dbs-company-admin-apply-for" },
   
    { id: 13, title: "Application Pending for DBS", x: 433.69, y: 1132.92, width: 200.03, height: 200.03, route: "/3-1-8-dbs-company-admin-application-pending-for-dbs" },
   
    { id: 14, title: "Completed DBS checks Certificate Posted Out", x: 699.22, y: 1148.85, width: 230.12, height: 185.87, route: "/3-1-9-dbs-company-admin-completed-dbs-checks-certificate-posted-out" },
    { id: 15, title: "DBS Certificate Eligible for reprint(if not received)", x: 984.22, y: 1145.31, width: 231.89, height: 192.95, route: "/applications/reprint" },
    { id: 26, title: "Create DBS Application", x: 677.98, y: 1745.40, width: 240.74, height: 150.47, route: "/applications/create/dbs" },
    { id: 27, title: "Create DBS Application", x: 952.36, y: 1770.18, width: 352.27, height: 49.57, route: "/applications/create/dbs-form" },
    { id: 28, title: "Prepopulated DBS Application", x: 676.21, y: 1906.48, width: 242.51, height: 134.53, route: "/applications/prepopulated" },
    { id: 29, title: "DBS Application", x: 115.06, y: 2110.06, width: 258.45, height: 46.02, route: "/applications/view" },
    { id: 30, title: "List of Assigned Application", x: 146.92, y: 2173.78, width: 410.68, height: 54.88, route: "/applications/assigned" },
    { id: 31, title: "Pay or Fix Issues Application", x: 787.73, y: 2180.86, width: 423.07, height: 46.02, route: "/applications/fix" },
    { id: 32, title: "View Application Details", x: 65.50, y: 2274.68, width: 230.12, height: 154.01, route: "/applications/details" },
    { id: 33, title: "View History", x: 414.22, y: 2251.67, width: 224.81, height: 173.48, route: "/applications/history" },
    { id: 34, title: "Resent to Counter Signatory", x: 708.07, y: 2472.94, width: 207.11, height: 180.56, route: "/applications/resend" },
    { id: 35, title: "View Details", x: 977.14, y: 2467.63, width: 146.92, height: 173.48, route: "/applications/view-details" },
    { id: 36, title: "Check DBS Application", x: 1129.38, y: 2467.63, width: 185.87, height: 177.02, route: "/applications/check" },
    { id: 37, title: "View History", x: 1352.42, y: 2449.93, width: 189.41, height: 189.41, route: "/applications/view-history" },
    { id: 38, title: "Signatory Reconcile Details", x: 1554.22, y: 2444.62, width: 228.35, height: 215.96, route: "/applications/reconcile" },
    { id: 39, title: "Incomplete DBS Application", x: 145.15, y: 2719.00, width: 423.07, height: 51.34, route: "/applications/incomplete-list" },
    { id: 40, title: "Reject DBS Application", x: 70.81, y: 2991.60, width: 198.26, height: 173.48, route: "/applications/reject-app" },
    { id: 41, title: "View DBS Application Details", x: 290.31, y: 2977.44, width: 150.47, height: 226.58, route: "/applications/view-full" },
    { id: 42, title: "View History", x: 477.95, y: 2982.75, width: 184.10, height: 159.32, route: "/applications/full-history" },
    { id: 43, title: "Rejected DBS Application", x: 791.27, y: 2717.23, width: 384.13, height: 46.02, route: "/applications/rejected" },
    { id: 44, title: "Mark Application Read", x: 716.92, y: 3018.16, width: 235.43, height: 159.32, route: "/applications/mark-read" },
    { id: 45, title: "View Details", x: 955.90, y: 3005.77, width: 228.35, height: 169.94, route: "/applications/details-view" },
    { id: 46, title: "View Results", x: 1304.62, y: 2980.98, width: 224.81, height: 203.57, route: "/applications/results" },
    { id: 47, title: "View History", x: 1540.06, y: 3002.23, width: 242.51, height: 180.56, route: "/applications/results-history" },
    { id: 48, title: "Application Pending for the DBS", x: 150.47, y: 3251.82, width: 481.49, height: 51.34, route: "/applications/pending-dbs" },
    { id: 49, title: "DBS Application Requiring Payment", x: 1258.60, y: 3250.05, width: 527.51, height: 61.96, route: "/applications/payment-pending" },
    { id: 50, title: "Continue DBS Application", x: 81.43, y: 3547.44, width: 226.58, height: 196.49, route: "/applications/continue" },
    { id: 51, title: "View Details", x: 327.48, y: 3543.90, width: 228.35, height: 180.56, route: "/applications/continue-details" },
    { id: 52, title: "View Results", x: 631.95, y: 3524.43, width: 240.74, height: 208.88, route: "/applications/continue-results" },
    { id: 53, title: "View History", x: 885.09, y: 3520.89, width: 224.81, height: 196.49, route: "/applications/continue-history" },
    { id: 54, title: "DBS Application Already Paid For", x: 139.84, y: 3795.27, width: 111.52, height: 136.30, route: "/applications/already-paid" },
    { id: 55, title: "Completed DBS Checks", x: 375.28, y: 3800.58, width: 345.19, height: 46.02, route: "/applications/completed-checks" },
    { id: 56, title: "Application Pending for Evidence Check", x: 957.67, y: 3798.81, width: 591.24, height: 53.11, route: "/applications/evidence-pending" },
    { id: 57, title: "Reject DBS Application", x: 306.24, y: 3862.53, width: 182.33, height: 154.01, route: "/applications/reject-evidence" },
    { id: 58, title: "Erased Applications", x: 302.70, y: 4115.67, width: 217.73, height: 180.56, route: "/applications/erased" },
    { id: 59, title: "Continue DBS Application", x: 879.78, y: 4126.29, width: 208.88, height: 169.94, route: "/applications/continue-dbs" },
    { id: 60, title: "View Details", x: 1111.67, y: 4124.52, width: 194.72, height: 162.86, route: "/applications/continue-view" },
    { id: 61, title: "View Results", x: 1329.41, y: 4087.35, width: 212.42, height: 194.72, route: "/applications/continue-results-view" },
    { id: 62, title: "Reject DBS Application", x: 1555.99, y: 4089.12, width: 212.42, height: 205.34, route: "/applications/reject-dbs" },
    { id: 63, title: "DBS Certificate Eligible for Reprint", x: 164.63, y: 4335.17, width: 511.58, height: 53.11, route: "/applications/reprint-eligible" },
    { id: 66, title: "Reprint", x: 69.04, y: 4609.55, width: 192.95, height: 155.78, route: "/applications/reprint-action" },
    { id: 67, title: "View Application Details", x: 265.53, y: 4618.40, width: 191.18, height: 169.94, route: "/applications/reprint-details" },
    { id: 68, title: "Result", x: 465.56, y: 4623.71, width: 201.80, height: 157.55, route: "/applications/reprint-result" },
    { id: 120, title: "DBS Application", x: 130.99, y: 8744.69, width: 251.37, height: 65.50, route: "/applications/dbs" },
    { id: 121, title: "View Assigned DBS Application", x: 164.63, y: 8820.81, width: 474.41, height: 70.81, route: "/applications/view-assigned" },
    { id: 122, title: "Fix Issues with DBS Applications", x: 966.52, y: 8819.04, width: 485.03, height: 72.58, route: "/applications/fix-dbs" },
    { id: 123, title: "Application Pending for DBS", x: 171.71, y: 9321.77, width: 430.15, height: 63.73, route: "/applications/pending-dbs-view" },
    { id: 124, title: "Rejected DBS Applications", x: 1026.70, y: 9321.77, width: 396.52, height: 60.19, route: "/applications/rejected-view" },
    { id: 125, title: "Application Pending Evidence Checker", x: 168.17, y: 9842.20, width: 587.70, height: 69.04, route: "/applications/pending-checker" },
    { id: 126, title: "Completed DBS Checks-Certificate Posted Out", x: 975.37, y: 9836.89, width: 686.83, height: 65.50, route: "/applications/completed-checks-view" },
    { id: 127, title: "Application with DBS Result", x: 892.17, y: 9932.48, width: 244.28, height: 189.41, route: "/applications/result-view" },
    { id: 128, title: "Erased Applications", x: 943.51, y: 10164.38, width: 228.35, height: 145.15, route: "/applications/erased-view" },
 
    // ==================== FINANCE ROUTES ====================
    { id: 17, title: "Spend History for your DBS Checks", x: 1290.46, y: 1159.47, width: 228.35, height: 162.86, route: "/finance/spend-history" },
    { id: 18, title: "Successful Payment to your DBS Account", x: 1570.15, y: 1147.08, width: 228.35, height: 182.33, route: "/finance/payments/successful" },
    { id: 64, title: "Spend History For your DBS Checks", x: 816.05, y: 4331.63, width: 426.61, height: 63.73, route: "/finance/spend-history-full" },
    { id: 65, title: "Successful Payment to your DBS Account", x: 1359.50, y: 4333.40, width: 424.84, height: 61.96, route: "/finance/payments/success" },
    { id: 69, title: "My Accounts", x: 116.83, y: 4885.70, width: 196.49, height: 61.96, route: "/finance/accounts" },
    { id: 70, title: "Invoices", x: 148.70, y: 4951.19, width: 136.30, height: 65.50, route: "/finance/invoices" },
    { id: 71, title: "Transaction", x: 1233.82, y: 4954.74, width: 198.26, height: 65.50, route: "/finance/transactions" },
    { id: 72, title: "Payments", x: 1566.61, y: 4954.74, width: 168.17, height: 54.88, route: "/finance/payments" },
    { id: 73, title: "Spent", x: 1235.59, y: 5218.49, width: 104.44, height: 53.11, route: "/finance/spent" },
    { id: 74, title: "User Spent", x: 1571.92, y: 5218.49, width: 173.48, height: 56.65, route: "/finance/user-spent" },
    { id: 75, title: "Create Invoice", x: 118.60, y: 5029.08, width: 185.87, height: 145.15, route: "/finance/invoices/create" },
    { id: 76, title: "Invoice Listing", x: 481.49, y: 5004.30, width: 201.80, height: 159.32, route: "/finance/invoices/list" },
    { id: 77, title: "Invoices", x: 145.15, y: 5491.10, width: 141.61, height: 61.96, route: "/finance/invoices/all" },
    { id: 78, title: "Adjust DBS Fee to Admin Fee", x: 354.04, y: 5484.02, width: 221.27, height: 164.63, route: "/finance/adjust/dbs-to-admin" },
    { id: 79, title: "Adjust Admin Fee to DBS Fee", x: 720.46, y: 5482.25, width: 253.14, height: 164.63, route: "/finance/adjust/admin-to-dbs" },
    { id: 80, title: "Refund", x: 1106.36, y: 5492.87, width: 118.60, height: 61.96, route: "/finance/refunds" },
    { id: 81, title: "Create Refund", x: 1124.06, y: 5563.68, width: 235.43, height: 150.47, route: "/finance/refunds/create" },
    { id: 82, title: "List of Refunded Amounts", x: 1472.79, y: 5553.06, width: 283.23, height: 161.09, route: "/finance/refunds/list" },
    { id: 83, title: "Balance Details", x: 1109.90, y: 5749.55, width: 235.43, height: 54.88, route: "/finance/balance" },
    { id: 84, title: "Funds Deposited", x: 1109.90, y: 5807.96, width: 251.37, height: 157.55, route: "/finance/funds/deposited" },
    { id: 85, title: "Funds Remaining", x: 1488.72, y: 5788.49, width: 258.45, height: 177.02, route: "/finance/funds/remaining" },
 
    // ==================== TRAINING & SUPPORT ROUTES ====================
    { id: 86, title: "Trainings", x: 118.60, y: 6043.40, width: 143.38, height: 65.50, route: "/training" },
    { id: 87, title: "Report", x: 902.79, y: 6043.40, width: 123.91, height: 61.96, route: "/reports" },
    { id: 88, title: "Notifications", x: 1416.14, y: 6045.17, width: 203.57, height: 61.96, route: "/notifications" },
    { id: 89, title: "Support", x: 115.06, y: 6423.98, width: 157.55, height: 63.73, route: "/support" },
    { id: 91, title: "Help (FAQs)", x: 116.83, y: 6567.37, width: 212.42, height: 168.17, route: "/support/faqs" },
    { id: 92, title: "User Manual", x: 423.07, y: 6570.91, width: 223.04, height: 162.86, route: "/support/manual" },
 
    // ==================== COUNTER SIGNATURE ROUTES ====================
    { id: 93, title: "Counter Signature", x: 90.28, y: 6930.26, width: 277.92, height: 65.50, route: "/counter-signature" },
    { id: 94, title: "Dashboard", x: 130.99, y: 7008.14, width: 175.25, height: 74.35, route: "/counter-signature/dashboard" },
    { id: 95, title: "Actions", x: 435.46, y: 7043.55, width: 130.99, height: 47.79, route: "/counter-signature/actions" },
    { id: 96, title: "DBS Applications List", x: 69.04, y: 7160.38, width: 214.19, height: 185.87, route: "/counter-signature/applications" },
    { id: 97, title: "Post Comment on Applications", x: 630.18, y: 7110.81, width: 157.55, height: 150.47, route: "/counter-signature/comments" },
    { id: 98, title: "View Assigned Applications", x: 920.49, y: 7013.45, width: 407.14, height: 60.19, route: "/counter-signature/assigned" },
    { id: 99, title: "Companies", x: 870.93, y: 7071.87, width: 201.80, height: 152.24, route: "/counter-signature/companies" },
    { id: 101, title: "Post Comment on Application", x: 129.22, y: 7470.16, width: 456.71, height: 67.27, route: "/counter-signature/post-comment" },
    { id: 102, title: "Companies", x: 129.22, y: 7546.28, width: 189.41, height: 155.78, route: "/counter-signature/companies-list" },
    { id: 104, title: "DBS Applications List", x: 414.22, y: 7599.38, width: 231.89, height: 201.80, route: "/counter-signature/applications-list" },
 
    // ==================== EVIDENCE CHECKER ROUTES ====================
    { id: 105, title: "Evidence checker", x: 99.13, y: 8056.09, width: 269.07, height: 67.27, route: "/evidence-checker" },
    { id: 106, title: "Dashboard", x: 116.83, y: 8130.44, width: 184.10, height: 70.81, route: "/evidence-checker/dashboard" },
    { id: 107, title: "Assigned Applicants for DBS", x: 81.43, y: 8210.10, width: 217.73, height: 168.17, route: "/evidence-checker/assigned" },
    { id: 108, title: "Incomplete DBS Application", x: 361.12, y: 8183.54, width: 217.73, height: 205.34, route: "/evidence-checker/incomplete" },
    { id: 109, title: "Application Pending for the DBS", x: 660.28, y: 8194.17, width: 231.89, height: 210.65, route: "/evidence-checker/pending" },
    { id: 110, title: "DBS Application already Paid For", x: 952.36, y: 8194.17, width: 230.12, height: 208.88, route: "/evidence-checker/paid" },
    { id: 111, title: "Completed DBS checks Certificate Posted Out", x: 1244.44, y: 8192.40, width: 233.66, height: 200.03, route: "/evidence-checker/completed" },
    { id: 112, title: "DBS Certificate Eligible for reprint (if not received)", x: 1520.58, y: 8190.62, width: 260.22, height: 194.72, route: "/evidence-checker/reprint" },
    { id: 113, title: "Application Pending Evidence Check", x: 74.35, y: 8378.26, width: 198.26, height: 157.55, route: "/evidence-checker/pending-evidence" },
    { id: 114, title: "Reject DBS Application", x: 318.63, y: 8381.80, width: 231.89, height: 157.55, route: "/evidence-checker/reject" },
    { id: 115, title: "Fix Issues with Applications", x: 65.50, y: 8532.27, width: 205.34, height: 166.40, route: "/evidence-checker/fix-issues" },
    { id: 116, title: "DBS application requirement payment", x: 308.01, y: 8537.58, width: 215.96, height: 169.94, route: "/evidence-checker/payment-required" },
    { id: 117, title: "Attributes", x: 639.04, y: 8441.99, width: 159.32, height: 72.58, route: "/evidence-checker/attributes" },
    { id: 118, title: "DBS Application Already Paid for", x: 939.97, y: 8450.84, width: 247.83, height: 54.88, route: "/evidence-checker/already-paid" },
    { id: 119, title: "DBS Certificate Eligible for Reprint (If Not Received)", x: 1332.95, y: 8440.22, width: 440.77, height: 72.58, route: "/evidence-checker/eligible-reprint" }
  ];
 
  const handleAreaClick = (route: string) => {
    if (isMounted) {
      router.push(route);
    }
  };
 
  if (!isMounted) {
    return <div>Loading...</div>;
  }
 
  return (
    <Box sx={{ position: 'relative', width: '100%', height: 'auto' }}>
      <Image
        src={IGProductDiagramRelease1ChekcMyDBSImage1}
        alt="DBS Product Diagram"
        width={1864}
        height={12953}
        style={{ width: '100%', height: 'auto' }}
      />
 
      {areas.map((area) => (
        <Tooltip key={area.id} title={area.title} arrow>
          <Box
            component="div"
            sx={{
              position: 'absolute',
              left: `${(area.x / 1864) * 100}%`,
              top: `${(area.y / 12953) * 100}%`,
              width: `${(area.width / 1864) * 100}%`,
              height: `${(area.height / 12953) * 100}%`,
              backgroundColor: hoveredArea === area.id ? 'rgba(255, 255, 255, 0.2)' : 'transparent',
              border: hoveredArea === area.id ? '2px solid white' : 'none',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                border: '2px solid white',
              },
            }}
            onMouseEnter={() => setHoveredArea(area.id)}
            onMouseLeave={() => setHoveredArea(null)}
            onClick={() => handleAreaClick(area.route)}
          />
        </Tooltip>
      ))}
    </Box>
  );
};
 
export default InteractiveDBSDiagram;