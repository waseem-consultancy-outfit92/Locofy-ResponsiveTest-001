'use client';
import React from 'react';
import Box from '@mui/material/Box';
import Image from 'next/image';
import Link from 'next/link';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import { IgProductDiagramRelease1Image } from "@/assets";
import { Stack } from '@mui/material';
import { CommonBackIcon } from '@/assets/common-assets';
import { useRouter } from "next/navigation";

const IgProductDiagramRelease1Page = () => {
  const router = useRouter();
  const areas = [
    {
      id: 1,
      title: 'Frontend Application (Sale Site)',
      href: '/ig-salesite-frontend-application',
      x: 344.98385565052234,
      y: 98.0664767331434,
      width: 252.17094017094013,
      height: 164.61158594491928,
    },
    {
      id: 2,
      title: 'Signup',
      href: '/ig-signup-process-2',
      x: 68.29629629629629,
      y: 337.97910731244065,
      width: 175.1187084520418,
      height: 61.29154795821461,
    },
    {
      id: 3,
      title: 'Fill Registration Form',
      href: '/fill-registration-form-2-1',
      x: 77.05223171889838,
      y: 450.0550807217474,
      width: 213.644824311491,
      height: 161.10921177587846,
    },
    {
      id: 4,
      title: 'Through Google or Outlook',
      href: '/through-google-or-outlook-2-2',
      x: 357.24216524216524,
      y: 446.5527065527065,
      width: 199.6353276353276,
      height: 157.6068376068376,
    },
    {
      id: 5,
      title: 'Send IG Verification Email',
      href: '/verification-email-2-2-1',
      x: 626.9249762583096,
      y: 360.74453941120606,
      width: 232.9078822412156,
      height: 113.8271604938272,
    },
    {
      id: 6,
      title: 'Account link Successfully',
      href: '/account-link-successfully-2-2-2',
      x: 625.1737891737891,
      y: 513.0978157644824,
      width: 220.64957264957263,
      height: 138.34377967711305,
    },
    {
      id: 7,
      title: 'Know Your Customer (KYC)',
      href: '/ig-know-your-customer-3-1',
      x: 187.3770180436847,
      y: 816.0531813865147,
      width: 217.1471984805318,
      height: 159.35802469135808,
    },
    {
      id: 8,
      title: 'Know your Business (KYB)',
      href: '/ig-know-your-business-3-2',
      x: 499.0883190883191,
      y: 826.5603038936372,
      width: 243.41500474833805,
      height: 145.3485280151947,
    },
    {
      id: 9,
      title: 'Identity Verification',
      href: '/identity-verification-service-3-1-1',
      x: 348.48622981956316,
      y: 1069.9753086419753,
      width: 227.65432098765427,
      height: 150.6020892687559,
    },
    {
      id: 10,
      title: 'Company Verification',
      href: '/company-verification-3-2-1',
      x: 80.55460588793922,
      y: 2031.3770180436848,
      width: 161.10921177587846,
      height: 173.36752136752125,
    },
    {
      id: 11,
      title: 'Authorised User (Company Admin)',
      href: '/ig-authorised-user-4',
      x: 966.6552706552707,
      y: 120.83190883190883,
      width: 194.38176638176628,
      height: 162.86039886039885,
    },
    {
      id: 12,
      title: 'Employee',
      href: '/individual-user-employee-5-1',
      x: 970.1576448243115,
      y: 365.9981006647673,
      width: 183.87464387464388,
      height: 161.1092117758784,
    },
    {
      id: 13,
      title: 'System',
      href: '/system-5',
      x: 1260.854700854701,
      y: 392.2659069325736,
      width: 189.12820512820508,
      height: 136.59259259259255,
    },
    {
      id: 14,
      title: 'Company Admin Features',
      href: '/company-admin-5-2',
      x: 975.4112060778727,
      y: 658.4463437796771,
      width: 455.30864197530855,
      height: 64.79392212725543,
    },
    {
      id: 15,
      title: 'Dashboard',
      href: '/dashboard-5-2-1',
      x: 982.4159544159544,
      y: 739.0009496676163,
      width: 259.1756885090218,
      height: 59.540360873694226,
    },
    {
      id: 16,
      title: 'Count Widget',
      href: '/count-widget-5-2-1-1',
      x: 987.6695156695157,
      y: 837.0674264007597,
      width: 180.372269705603,
      height: 141.84615384615392,
    },
    {
      id: 17,
      title: 'Verification Status',
      href: '/verification-status-5-2-1-2',
      x: 1243.3428300094968,
      y: 973.6600189933523,
      width: 210.14245014245012,
      height: 136.59259259259272,
    },
    {
      id: 18,
      title: 'Recent Verification (Grid View)',
      href: '/recent-verification-grid-view-5-2-1-3',
      x: 1507.7720797720797,
      y: 984.1671415004748,
      width: 234.65906932573603,
      height: 133.09021842355173,
    },
    {
      id: 19,
      title: 'Teams',
      href: '/teams-5-2-2',
      x: 984.1671415004748,
      y: 1180.3000949667617,
      width: 175.1187084520418,
      height: 50.78442545109215,
    },
    {
      id: 20,
      title: 'Verification',
      href: '/ig-companyadmin-verification-5-2-3',
      x: 1414.9591642924977,
      y: 1189.0560303893637,
      width: 229.4055080721746,
      height: 59.540360873694226,
    },
    {
      id: 21,
      title: 'Add User',
      href: '/add-user-5-2-2-1',
      x: 984.1671415004748,
      y: 1245.094017094017,
      width: 168.11396011396005,
      height: 131.3390313390314,
    },
    {
      id: 22,
      title: 'View user list',
      href: '/view-user-list-5-2-2-2',
      x: 984.1671415004748,
      y: 1411.4567901234568,
      width: 187.37701804368476,
      height: 115.57834757834758,
    },
    {
      id: 23,
      title: 'Active/Inactive Users',
      href: '/activeinactive-user-5-2-2-3',
      x: 1199.5631528964861,
      y: 1416.710351377018,
      width: 192.63057929724596,
      height: 105.07122507122517,
    },
    {
      id: 24,
      title: 'Select Service (Only Paid Services Shown)',
      href: '/select-service-5-2-3-1',
      x: 1416.710351377018,
      y: 1248.596391263058,
      width: 213.644824311491,
      height: 129.58784425451086,
    },
    {
      id: 25,
      title: 'Select User',
      href: '/select-user-5-2-3-2',
      x: 1420.212725546059,
      y: 1411.4567901234568,
      width: 162.86039886039885,
      height: 113.82716049382725,
    },
    {
      id: 26,
      title: 'Reports',
      href: '/reports-5-2-4',
      x: 984.1671415004748,
      y: 1586.5754985754986,
      width: 203.1377018043686,
      height: 52.53561253561247,
    },
    {
      id: 27,
      title: 'Select Document',
      href: '/select-document-5-2-4-1',
      x: 1001.679012345679,
      y: 1675.88603988604,
      width: 283.6923076923076,
      height: 38.52611585944919,
    },
    {
      id: 28,
      title: 'Components',
      href: '/view-information-components-5-2-4-2',
      x: 1437.724596391263,
      y: 1719.6657169990503,
      width: 245.16619183285843,
      height: 45.530864197530946,
    },
    {
      id: 29,
      title: 'Integrations',
      href: '/integration-5-2-5',
      x: 964.9040835707502,
      y: 1978.8414055080723,
      width: 283.69230769230774,
      height: 45.53086419753072,
    },
    {
      id: 30,
      title: 'View Integrations',
      href: '/view-integration-5-2-5-1',
      x: 987.6695156695157,
      y: 2047.1377018043684,
      width: 311.7113010446344,
      height: 63.0427350427351,
    },
    {
      id: 31,
      title: 'Add Integrations',
      href: '/add-integration-5-2-5-2',
      x: 1504.269705603039,
      y: 1984.0949667616335,
      width: 246.91737891737876,
      height: 71.79867046533695,
    }
  ];

  return (
    <Stack px={5} py={3} gap={2}>
      <Stack
        flexDirection={"row"}
        alignItems={"center"}
        mt={{ md: 2, xs: 1 }}
        mb={{ md: 4, sm: 3, xs: 2 }}
      >
        <Image
          src={CommonBackIcon}
          alt={"backIcon"}
          width={40}
          height={40}
          onClick={() => {
            router.replace("/ig-features");
          }}
          style={{ cursor: "pointer" }}
        />
        <Typography
          variant="h5"
          color="#5A5867"
          fontSize={{ xs: "0.8rem", sm: "18px", md: "22px" }}
          fontWeight={{ md: 600, xs: 500 }}
          ml={{ md: 2, xs: 1 }}
          sx={{
            fontFamily: "inherit",
          }}
        >
          Identity Gram
        </Typography>
      </Stack>
      <Box sx={{ position: 'relative', width: '100%', height: 'auto' }}>
        <Image
          src={IgProductDiagramRelease1Image}
          alt="Identity Gram"
          width={1844}
          height={2404}
          layout="responsive"
        />

        {areas.map((area) => (
          <Tooltip key={area.id} title={area.title} arrow>
            <Link href={area.href} passHref legacyBehavior>
              <Box
                component="a"
                sx={{
                  position: 'absolute',
                  left: `${(area.x / 1844) * 100}%`,
                  top: `${(area.y / 2404) * 100}%`,
                  width: `${(area.width / 1844) * 100}%`,
                  height: `${(area.height / 2404) * 100}%`,
                  color: 'transparent',
                  textDecoration: 'none',
                }}
              />
            </Link>
          </Tooltip>
        ))}
      </Box>
    </Stack>
  );
};

export default IgProductDiagramRelease1Page;