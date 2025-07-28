'use client'
import React from 'react'
import { Box, IconButton } from '@mui/material'
import Image from 'next/image'
import { IconArrowSquareLeft } from '@/assets'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

interface IFeatureItem {
  key: string | number
  href: string
  title: string
}

interface FeaturesScreenProps {
  pageTitle: string;
  backRoute: string;
  dataArray: IFeatureItem[]
  maxCol?: number
}

export default function FeaturesScreen({ pageTitle, backRoute, dataArray, maxCol = 4 }: FeaturesScreenProps) {
  const router = useRouter()

  const handleBackClick = () => {
    router.push(backRoute)
  }
  return (
    <Box sx={{ p: '30px' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px', py: '16px' }}>
        <IconButton onClick={handleBackClick} >
          <Image height={36} width={36} src={IconArrowSquareLeft} alt={backRoute} />
        </IconButton>
        <Box sx={{ color: '#0246BC', fontSize: '24px', lineHeight: '1.2' }}>{pageTitle}</Box>
      </Box>
      <Box sx={{ border: '3px dashed #0246BC', borderRadius: '3px', p: '24px' }}>
        <Box sx={{
          display: 'grid',
          gridTemplateColumns: {
            xs: 'repeat(1, 1fr)',
            sm: `repeat(${Math.min(2, maxCol)}, 1fr)`,
            md: `repeat(${Math.min(3, maxCol)}, 1fr)`,
            lg: `repeat(${maxCol}, 1fr)`
          },
          gap: '20px',
          justifyContent: 'center'
        }}>
          {dataArray?.map((item) => (
            <Box key={item.key} sx={{ minWidth: '0' }}>
              <Box
                component={Link}
                href={item.href}
                sx={{
                  height: '200px',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#000',
                  fontSize: '24px',
                  fontWeight: '500',
                  p: '30px',
                  backgroundColor: '#E1ECFF'
                }}
              >
                <Box sx={{ maxWidth: '366px', textAlign: 'center' }}>{item.title}</Box>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  )
}
