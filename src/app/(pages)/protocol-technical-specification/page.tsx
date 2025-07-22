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
import { ProtocolTechnicalSpecificationImage1 } from '@/assets';

const FixProtocolTechnicalSpecification = () => {
    const router = useRouter();

    // Original image dimensions
    const imageWidth = 1848;
    const imageHeight = 8682;

    // All interactive areas from your SVG
    const areas = [
        {
            id: 1,
            title: 'Restricted Orders',
            href: '/restricted-orders-1',
            x: 1532.1025641025642,
            y: 1437.3333333333333,
            width: 263.24786324786305,
            height: 47.38461538461547
        },
        {
            id: 2,
            title: 'Header on Messages to Aquis',
            href: '/header-on-messages-to-aquis-31',
            x: 100.03418803418803,
            y: 2146.3475783475783,
            width: 436.99145299145295,
            height: 40.364672364672515
        },
        {
            id: 3,
            title: 'Header on Messages from Aquis',
            href: '/header-on-messages-from-aquis',
            x: 103.54415954415954,
            y: 2637.74358974359,
            width: 463.3162393162393,
            height: 45.62962962962956
        },
        {
            id: 4,
            title: 'New Order Single (This message is used to submit a new order to the trading platform)',
            href: '/trade-capture-response-message',
            x: 85.99430199430199,
            y: 4817.4358974358975,
            width: 1214.4501424501423,
            height: 63.179487179487296
        },
        {
            id: 6,
            title: 'Order Sweeps Order Entry (Used for orders that first go to the dark book and any remaining portion is sent to the lit order book.)',
            href: '/order-sweeps-order-entry-1',
            x: 129.86894586894587,
            y: 6081.025641025641,
            width: 1289.9145299145298,
            height: 59.66951566951593
        },
        {
            id: 7,
            title: 'Order Cancel Request (message is used to cancel an open order)',
            href: '/order-cancel-request52',
            x: 103.54415954415954,
            y: 6412.717948717948,
            width: 884.5128205128204,
            height: 52.6495726495732
        },
        {
            id: 8,
            title: 'Order Cancel/Replace Request (message is used to modify an existing order (e.g., price, quantity))',
            href: '/order-cancelreplace-request53',
            x: 101.78917378917379,
            y: 6698.780626780626,
            width: 1351.3390313390314,
            height: 56.159544159544566
        },
        {
            id: 9,
            title: 'Large In Scale/Benchmark Cross Trade Capture Report',
            href: '/large-in-scalebenchmark-cross-trade-capture-report54',
            x: 96.52421652421653,
            y: 6995.373219373219,
            width: 775.7037037037037,
            height: 50.89458689458661
        },
        {
            id: 10,
            title: 'Large In Scale/Benchmark Cross Trade Capture Report Acknowledgement (submission of a trade capture report)',
            href: '/large-in-scalebenchmark-cross-trade-capture-report-acknowledgement55',
            x: 1226.7350427350427,
            y: 7002.393162393162,
            width: 521.2307692307693,
            height: 73.7094017094023
        },
        {
            id: 11,
            title: 'Execution Report (message reports the execution status of an order (e.g., filled, rejected))',
            href: '/execution-report56',
            x: 101.7891737891738,
            y: 7290.210826210827,
            width: 1246.0398860398857,
            height: 52.64957264957229
        },
        {
            id: 12,
            title: 'Order Cancel Reject (This message is sent when an order cancel or replace request cannot be processed)',
            href: '/order-cancel-reject57',
            x: 107.05413105413105,
            y: 7907.9658119658125,
            width: 1442.5982905982908,
            height: 52.64957264957229
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
                            router.replace("/technical-specifications");
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
                    FIX 4.2 Protocol Technical Specification
                </Typography>
            </Stack>
            <Box sx={{ position: 'relative', width: '100%', height: 'auto' }}>
                <Image
                    src={ProtocolTechnicalSpecificationImage1}
                    alt="FIX 4.2 Protocol Technical Specification"
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

export default FixProtocolTechnicalSpecification;