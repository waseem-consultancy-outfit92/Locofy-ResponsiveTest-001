'use client'
import React from 'react';
import Box from '@mui/material/Box';
import Image from 'next/image';
import Link from 'next/link';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import { MarketDataFeeScheduleImage } from "@/assets";
import { Stack } from '@mui/material';
import { CheckboxForm } from '@/components/checkbox-form';
import { CommonBackIcon } from '@/assets/common-assets';
import { useRouter } from "next/navigation";


const MarketDataFeeSchedulePage = () => {
  const router = useRouter();

  const areas = [
    {
      id: 2,
      title: 'DATA AND LICENCE FEES',
      href: '/fee-schedule-data-and-licence-fees',
      x: 78.97435897435898,
      y: 587.920227920228,
      width: 377.3219373219373,
      height: 40.36467236467229,
    },
    {
      id: 3,
      title: 'DISAGGREGATED DATA',
      href: '/fee-schedule-disaggregated-data',
      x: 71.95441595441595,
      y: 1751.4757834757834,
      width: 389.60683760683764,
      height: 45.62962962962979,
    },
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
            router.replace("/market-data");
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
          Fee Schedule (Market Data) - Effective June 2025
        </Typography>
      </Stack>
      <CheckboxForm onChange={() => { }} />
      <Box sx={{ position: 'relative', width: '100%', height: 'auto' }}>
        <Image
          src={MarketDataFeeScheduleImage}
          alt="Fee Schedule (Market Data) - Effective June 2025"
          width={1848}
          height={2843}
          layout="responsive"
        />

        {areas.map((area) => (
          <Tooltip key={area.id} title={area.title} arrow>
            <Link href={area.href} passHref legacyBehavior>
              <Box
                component="a"
                sx={{
                  position: 'absolute',
                  left: `${(area.x / 1848) * 100}%`,
                  top: `${(area.y / 2843) * 100}%`,
                  width: `${(area.width / 1848) * 100}%`,
                  height: `${(area.height / 2843) * 100}%`,
                  '&:hover': {
                    border: '2px solid white',
                    opacity: 0.2,
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                  },
                }}
              />
            </Link>
          </Tooltip>
        ))}
      </Box>
    </Stack>
  );
};

export default MarketDataFeeSchedulePage;
