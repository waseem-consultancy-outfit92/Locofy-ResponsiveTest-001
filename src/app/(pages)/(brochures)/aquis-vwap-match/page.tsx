'use client'
import React from 'react';
import Box from '@mui/material/Box';
import Image from 'next/image';
import Link from 'next/link';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import { AquisVWAPMatchImage } from "@/assets";
import { Stack } from '@mui/material';
import { CommonBackIcon } from '@/assets/common-assets';
import { useRouter } from "next/navigation";

const AquisVWAPMatchPage = () => {
  const router = useRouter();

  const areas = [
    {
      id: 1,
      title: 'How AVM Works (Process)',
      href: '/how-avm-works',
      x: 87.74928774928775,
      y: 1823.4301994301995,
      width: 373.8119658119658,
      height: 47.384615384615245,
    }
  ];
  return (
    <Stack px={5} py={3} gap={'40px'}>
      <Stack>
        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
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
          <Box component={Link} href={'/'} sx={{ color: '#0246BC', fontSize: '40px', fontWeight: '500', textDecoration: 'underline', lineHeight: '1.2' }}>
            Reference Doc
          </Box>
        </Box>
        <Typography
          variant="h5"
          color="#5A5867"
          fontSize={{ xs: "24", sm: "26px", md: "32px" }}
          fontWeight={{ md: 600, xs: 500 }}
          mt={3}
          sx={{
            fontFamily: "inherit",
            lineHeight: '1.25',
          }}
        >
          Aquis	VWAP	Match
        </Typography>
      </Stack>

      <Box sx={{ position: 'relative', width: '100%', height: 'auto' }}>
        <Image
          src={AquisVWAPMatchImage}
          alt="Aquis	VWAP	Match"
          width={1848}
          height={4563}
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
                  top: `${(area.y / 4563) * 100}%`,
                  width: `${(area.width / 1848) * 100}%`,
                  height: `${(area.height / 4563) * 100}%`,
                }}
              />
            </Link>
          </Tooltip>
        ))}
      </Box>
    </Stack>


    // <CommonPage
    //   pageTitle={`Aquis	VWAP	Match`}
    //   src={AquisVWAPMatchImage}
    //   backRoute="/"
    // />
  );
};

export default AquisVWAPMatchPage;
