"use client";

import React, { useCallback, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import {
    Box,
    Tooltip,
    Typography,
    Stack
} from '@mui/material';
import Link from 'next/link';
import { colorLegends, CommonBackIcon } from '@/assets/common-assets';
import { IGRequiredAffiliationImage } from '@/assets';
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";


const IGRequiredAffiliation = () => {
    const router = useRouter();

    // Original image dimensions
    const imageWidth = 1844;
    const imageHeight = 1900;
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = useCallback((e: React.MouseEvent) => {
        e.stopPropagation();
        setIsOpen((prev) => !prev);
    }, []);

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
                    <Box display='flex' alignItems='center' gap={2}>
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
                        <Typography
                            variant="h5"
                            color="#5A5867"
                            fontSize={{ xs: "24", sm: "26px", md: "32px" }}
                            fontWeight={{ md: 600, xs: 500 }}
                            sx={{
                                fontFamily: "inherit",
                                lineHeight: '1.25',
                            }}
                        >
                            IG Required Affiliation
                        </Typography>
                    </Box>
                    <Box display="flex" alignItems="center" mr={2}>
                        <Typography
                            component="span"
                            fontSize={{ xs: "1rem", sm: "1.2rem", md: "1.8rem" }}
                            fontWeight={600}
                            color="#5A5867"
                            sx={{ mr: 1 }}
                        >
                            Color Legends (key)
                        </Typography>
                        <KeyboardArrowDownIcon
                            onClick={toggleDropdown}
                            sx={{
                                fontSize: { xs: 28, md: 30 },
                                color: "#5A5867",
                                border: "2px solid",
                                borderRadius: "40px",
                                cursor: "pointer",
                            }}
                        />
                    </Box>
                    {isOpen && (
                        <>
                            <Box
                                sx={{
                                    position: "fixed",
                                    top: 0,
                                    left: 0,
                                    width: "100vw",
                                    height: "100vh",
                                    background: "rgba(0,0,0,0.3)",
                                    zIndex: 1200,
                                }}
                                onClick={() => setIsOpen(false)}
                            />
                            <Box
                                sx={{
                                    position: "absolute",
                                    top: "150px",
                                    right: "50px",
                                    background: "#fff",
                                    borderRadius: "10px",
                                    boxShadow: 3,
                                    p: 1,
                                    zIndex: 1300,
                                }}
                                onClick={(e) => e.stopPropagation()}
                            >
                                <Image
                                    src={colorLegends}
                                    alt="Color Legend"
                                    width={300}
                                    height={200}
                                    style={{ width: "100%", height: "auto" }}
                                />
                            </Box>
                        </>
                    )}
                </Box>
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