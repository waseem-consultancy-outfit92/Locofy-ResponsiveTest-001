"use client";
import React from "react";
import Image from "next/image";
import { Box, Typography, Link } from "@mui/material";
import { arrowLeft, CqcFeeStructureImage } from "@/assets";
import { useRouter } from "next/navigation";
import { CheckboxForm } from "@/components/checkbox-form";

const CqcFeeStructureImageMap = () => {
    const router = useRouter();

    const handleClick = (path: string) => {
        router.push(path);
    };

    return (
        <>
            <Box sx={{ ml: 2, my: 2 }}>
                <Box sx={{ cursor: 'pointer' }} onClick={() => router.push('/care-quality-commission')}>
                    <Image src={arrowLeft} alt="icon" />
                </Box>
                <Typography sx={{ color: '#5A5867', fontSize: '32px', fontWeight: 600 }}>
                    Free Schedule
                </Typography>
                <CheckboxForm />
            </Box>
            <Box position="relative" width="100%" height="auto">
                {/* Image */}
                <Image
                    src={CqcFeeStructureImage}
                    alt="CQC Fee Structure Diagram"
                    width={1848}
                    height={5246}
                    layout="responsive"
                />

                {/* Hotspots */}
                <Box position="absolute" top={0} left={0} width="100%" height="100%">
                    {/* HOSPICE SERVICES */}
                    <Link
                        component="button"
                        onClick={() => handleClick("/hospice-services")}
                        sx={{
                            position: "absolute",
                            left: "69.8%",
                            top: "24.33%",
                            width: "15.95%",
                            height: "0.8%",
                            "&:hover": {
                                border: "2px solid white",
                                opacity: 0.2,
                                borderRadius: "4px",
                            },
                        }}
                    >
                        <Typography variant="h6">Hospice Services</Typography>
                    </Link>

                    {/* COMMUNITY HEALTH / NHS BLOOD & TRANSPLANT */}
                    <Link
                        component="button"
                        onClick={() => handleClick("/community-health-nhs-blood-transplant")}
                        sx={{
                            position: "absolute",
                            left: "6.27%",
                            top: "35.17%",
                            width: "40.07%",
                            height: "0.87%",
                            "&:hover": {
                                border: "2px solid white",
                                opacity: 0.2,
                                borderRadius: "4px",
                            },
                        }}
                    >
                        <Typography variant="h6">Community Health NHS Blood and Transplant</Typography>
                    </Link>

                    {/* SINGLE SPECIALTY HEALTHCARE */}
                    <Link
                        component="button"
                        onClick={() => handleClick("/single-specialty-healthcare")}
                        sx={{
                            position: "absolute",
                            left: "59.92%",
                            top: "35.27%",
                            width: "25.74%",
                            height: "0.8%",
                            "&:hover": {
                                border: "2px solid white",
                                opacity: 0.2,
                                borderRadius: "4px",
                            },
                        }}
                    >
                        <Typography variant="h6">Single Specialty Healthcare</Typography>
                    </Link>

                    {/* INDEPENDENT AMBULANCE SERVICES */}
                    <Link
                        component="button"
                        onClick={() => handleClick("/independent-ambulance-services")}
                        sx={{
                            position: "absolute",
                            left: "66.47%",
                            top: "40.25%",
                            width: "30.1%",
                            height: "0.9%",
                            "&:hover": {
                                border: "2px solid white",
                                opacity: 0.2,
                                borderRadius: "4px",
                            },
                        }}
                    >
                        <Typography variant="h6">Independent Ambulance Services</Typography>
                    </Link>

                    {/* Out-of-Hours/Walk-In */}
                    <Link
                        component="button"
                        onClick={() => handleClick("/out-of-hours-walk-in")}
                        sx={{
                            position: "absolute",
                            left: "39.79%",
                            top: "52.0%",
                            width: "18.23%",
                            height: "0.87%",
                            "&:hover": {
                                border: "2px solid white",
                                opacity: 0.2,
                                borderRadius: "4px",
                            },
                        }}
                    >
                        <Typography variant="h6">Out of Hours Walk In</Typography>
                    </Link>

                    {/* Single Location */}
                    {/* <Box position="absolute" top={0} left={0} width="100%" height="100%"> */}
                    {/* Only adding click to "Dental Service" (6th item) - rest remain unchanged */}
                    <Link
                        component="button"
                        onClick={() => handleClick("/dental-services")}
                        sx={{
                            position: "absolute",
                            left: "2%",
                            top: "57.3%",
                            width: "20%",
                            height: "2%",
                            "&:hover": {
                                border: "2px solid white",
                                opacity: 0.2,
                                borderRadius: "4px",
                            },
                        }}
                    >
                        <Typography variant="h6">Dental Service</Typography>
                    </Link>
                    {/* </Box> */}
                    {/* Domiciliary Dental Only - Enabled */}
                    <Link
                        component="button"
                        onClick={() => handleClick("/domiciliary-dental-only-9")}
                        sx={{
                            position: "absolute",
                            left: "70.84%",
                            top: "59.19%",
                            width: "18.42%",
                            height: "1.07%",
                            "&:hover": {
                                border: "2px solid white",
                                opacity: 0.2,
                                borderRadius: "4px",
                            },
                        }}
                    >
                        <Typography variant="h6">Domiciliary Dental Only</Typography>
                    </Link>

                    {/* Residential Services - Enabled */}
                    <Link
                        component="button"
                        onClick={() => handleClick("/residential-services")}
                        sx={{
                            position: "absolute",
                            left: "6.93%",
                            top: "65.32%",
                            width: "15.48%",
                            height: "0.84%",
                            "&:hover": {
                                border: "2px solid white",
                                opacity: 0.2,
                                borderRadius: "4px",
                            },
                        }}
                    >
                        <Typography variant="h6">Residential Services</Typography>
                    </Link>

                    {/* Nursing Care Agencies - Enabled */}
                    <Link
                        component="button"
                        onClick={() => handleClick("/nursing-care-agencies")}
                        sx={{
                            position: "absolute",
                            left: "68.09%",
                            top: "76.99%",
                            width: "17.0%",
                            height: "0.94%",
                            "&:hover": {
                                border: "2px solid white",
                                opacity: 0.2,
                                borderRadius: "4px",
                            },
                        }}
                    >
                        <Typography variant="h6">Nursing Care Agencies</Typography>
                    </Link>
                </Box>
            </Box>
        </>

    );
};

export default CqcFeeStructureImageMap;