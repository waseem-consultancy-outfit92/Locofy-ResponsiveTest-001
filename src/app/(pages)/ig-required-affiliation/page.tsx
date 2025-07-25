"use client";

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import {
    Box,
    Tooltip,
    Typography,
    Stack
} from '@mui/material';
import Link from 'next/link';
import { CommonBackIcon } from '@/assets/common-assets';
import { IGRequiredAffiliationImage } from '@/assets';

const IGRequiredAffiliation = () => {
    const router = useRouter();

    // Original image dimensions
    const imageWidth = 1844;
    const imageHeight = 1900;

    // All interactive areas from your SVG
    const areas = [
        {
            id: 1,
            title: 'ICO (Information Commissioner’s Office)',
            href: '/ig-required-affiliation-ico-information-commissioners-office',
            x: 136.59259259259258,
            y: 150.60208926875595,
            width: 600.6571699905033,
            height: 59.5403608736942
        },
        {
            id: 2,
            title: 'FATF (Financial Action Task Force)',
            href: '/ig-required-affiliation-fatf-financial-action-task-force',
            x: 157.60683760683762,
            y: 597.1547958214625,
            width: 502.59069325735993,
            height: 54.286799620133024
        },
        {
            id: 3,
            title: 'IAPP (International Association of Privacy Professionals)',
            href: '/ig-required-affiliation-app-international-asociation-of-privacy-professionals',
            x: 159.35802469135803,
            y: 1104.9990503323836,
            width: 823.0579297245963,
            height: 49.03323836657182
        },
        {
            id: 4,
            title: 'CIFAS (Credit Industry Fraud Avoidance System)',
            href: '/ig-required-affiliation-cifas-credit-industry-fraud-avoidance-system',
            x: 154.10446343779677,
            y: 1544.5470085470085,
            width: 707.4795821462488,
            height: 56.03798670465335
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
                            router.replace("/identity-gram");
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
                    IG Required Affiliation
                </Typography>
            </Stack>
            <Box sx={{ position: 'relative', width: '100%', height: 'auto' }}>
                <Image
                    src={IGRequiredAffiliationImage}
                    alt="IG Required Affiliation"
                    width={imageWidth}
                    height={imageHeight}
                    layout="responsive"
                />

                {areas.map((area) => (
                    <Tooltip key={area.id} title={area.title} arrow>
                        <Link href={area.href} passHref legacyBehavior>
                            <Box
                                component="a"
                                sx={{
                                    position: 'absolute',
                                    left: `${(area.x / imageWidth) * 100}%`,
                                    top: `${(area.y / imageHeight) * 100}%`,
                                    width: `${(area.width / imageWidth) * 100}%`,
                                    height: `${(area.height / imageHeight) * 100}%`,
                                    '&:hover': {
                                        outline: '2px solid white',
                                        opacity: 0.2,
                                    }
                                }}
                            />
                        </Link>
                    </Tooltip>
                ))}
            </Box>
        </Stack>
    );
};

export default IGRequiredAffiliation;