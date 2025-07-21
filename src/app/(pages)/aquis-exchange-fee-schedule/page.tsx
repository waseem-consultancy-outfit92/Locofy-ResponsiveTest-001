import React from 'react';
import Image from 'next/image';
import { Box, Link, Tooltip } from '@mui/material';
import { AquisExchangeFeeScheduleImage } from '@/assets';

interface ImageMapArea {
  x: number;
  y: number;
  width: number;
  height: number;
  href: string;
  title: string;
}

const AquisExchangeFeeSchedule: React.FC = () => {
  // Original SVG dimensions
  const originalWidth = 1848;
  const originalHeight = 6439;
  const imageSrc = '/AQUIS EXCHANGE FEE SCHEDULE.svg';

  const areas: ImageMapArea[] = [
    {
      x: 82.48433048433048,
      y: 633.5498575498575,
      width: 375.56695156695156,
      height: 43.87464387464388,
      href: "#",
      title: "TRADING MEMBERSHIPS"
    },
    {
      x: 84.23931623931624,
      y: 2281.4814814814813,
      width: 352.7521367521368,
      height: 36.85470085470115,
      href: "#",
      title: "Liquidity Providers (LPs)"
    },
    {
      x: 459.8062678062678,
      y: 3634.5754985754984,
      width: 852.923076923077,
      height: 43.87464387464388,
      href: "#",
      title: "AQUIS MATCHING POOL (AMP) & CONDITIONAL ORDERS"
    },
    {
      x: 75.46438746438747,
      y: 3999.612535612536,
      width: 415.9316239316239,
      height: 43.87464387464388,
      href: "#",
      title: "TRANSACTION REPORTING"
    },
    {
      x: 71.95441595441598,
      y: 5280.752136752137,
      width: 250.96296296296293,
      height: 52.6495726495732,
      href: "#",
      title: "CONNECTIVITY"
    }
  ];

  return (
    <Box sx={{
      position: 'relative',
      width: '100%',
      height: 'auto',
      aspectRatio: `${originalWidth}/${originalHeight}`,
    }}>
      {/* Next.js Image Component */}
      <Image
        src={AquisExchangeFeeScheduleImage}
        alt="Aquis Exchange Fee Schedule"
        fill
        style={{
          objectFit: 'contain',
          width: '100%',
        }}
        quality={100}
        priority
      />

      {/* Interactive Areas */}
      {areas.map((area, index) => (
        <Tooltip key={index} title={area.title} arrow>
          <Link
            href={area.href}
            target="_parent"
            sx={{
              position: 'absolute',
              left: `${(area.x / originalWidth) * 100}%`,
              top: `${(area.y / originalHeight) * 100}%`,
              width: `${(area.width / originalWidth) * 100}%`,
              height: `${(area.height / originalHeight) * 100}%`,
              cursor: 'pointer',
              '&:hover': {
                outline: '2px solid white',
                backgroundColor: 'rgba(255, 255, 255, 0.2)'
              }
            }}
            aria-label={area.title}
          />
        </Tooltip>
      ))}
    </Box>
  );
};

export default AquisExchangeFeeSchedule;