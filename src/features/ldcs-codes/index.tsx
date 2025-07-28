"use client";

import React, { useCallback } from "react";
import Image from "next/image";
import { Box, Card, CardContent, Grid, Stack, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { MultiBackIcon } from "@/assets/common-assets";
import type { ResponsiveStyleValue } from "@mui/system";

type LDcsCodesProps = {
    backRoute?: string;
    fontSize?: ResponsiveStyleValue<string>;
    iconWidth?: string;
    background?: string;
};

const arrayData = [
    {
        key: "sector-1",
        link: "/ldcs-codes",
        background: "#FCE3E5",
        title: "DA.83 - Combined Studies",
    },
    {
        key: "sector-2",
        link: "/ldcs-codes",
        background: "#E1ECFF",
        title: "DA. - Humanities / General Studies / Combined Studies",
    },
    {
        key: "sector-3",
        link: "/db-history",
        background: "#D4E4FF",
        title: "DB. - History",
    },
    {
        key: "sector-4",
        link: "/ldcs-codes",
        background: "#D3FFED",
        title: "DB.91 - Genealogy",
    },
    {
        key: "sector-5",
        link: "/ldcs-codes",
        background: "#E8E0D3",
        title: "JA.331 - Art History",
    },
    {
        key: "sector-6",
        link: "/ldcs-codes",
        background: "#FCE3E5",
        title: "ED. - Social Sciences",
    },
    {
        key: "sector-7",
        link: "/ldcs-codes",
        background: "#E1ECFF",
        title: "DB.21 - Ancient History",
    },
    {
        key: "sector-8",
        link: "/ldcs-codes",
        background: "#D4E4FF",
        title: "QA. - Environmental Protection / Conservation",
    },
    {
        key: "sector-9",
        link: "/ldcs-codes",
        background: "#D3FFED",
        title: "DB.25 - Modern History (17Th To 20Th Century)",
    },
    {
        key: "sector-10",
        link: "/ldcs-codes",
        background: "#E8E0D3",
        title: "DB.1 - History (Theoretical)",
    },
    {
        key: "sector-11",
        link: "/ldcs-codes",
        background: "#FCE3E5",
        title: "DB.521 - English History",
    },
    {
        key: "sector-12",
        link: "/ldcs-codes",
        background: "#E1ECFF",
        title: "DB.21 - ADF. - Classics",
    },
    {
        key: "sector-13",
        link: "/ldcs-codes",
        background: "#D3FFED",
        title: "DB.751 - Local / Regional Studies",
    },
];


const LDcsCodes: React.FC<LDcsCodesProps> = () => {
    const router = useRouter();

    const onBackIconClick = useCallback(() => {
        router.push("/sector-subject-area-2-codes");
    }, [router]);

    return (
        <Box p={{ md: 3, xs: 2 }}>
            <Stack
                flexDirection="row"
                alignItems="center"
                mt={{ md: 2, xs: 1 }}
                mb={{ md: 5, sm: 3, xs: 2 }}
            >
                <Image
                    src={MultiBackIcon}
                    alt=""
                    width={40}
                    height={40}
                    onClick={onBackIconClick}
                    style={{ cursor: "pointer" }}
                />
                <Typography
                    variant="h5"
                    color="#0246BC"
                    fontSize={"40px"}
                    fontWeight={{ md: 600, xs: 500 }}
                    ml={{ md: 2, xs: 1 }}
                    sx={{
                        fontFamily: "inherit",
                    }}
                >
                    LDCS Category - 10.1-History
                </Typography>
            </Stack>
            <Grid container spacing={2}>
                {arrayData.map((item) => (
                    <Grid size={{ xs: 12, sm: 6, md: 6, lg: 4, xl: 3 }} key={item.key}>
                        <Card
                            onClick={() => {
                                if (item.link) {
                                    router.push(item.link);
                                }
                            }}
                            sx={{
                                width: "100%",
                                height: "100%",
                                minHeight: "355px",
                                backgroundColor: item.background,
                                cursor: item.link ? "pointer" : "default",
                                borderRadius: 2,
                                textAlign: "center",
                                boxShadow: "none",
                                p: 4,
                                alignContent: "center",
                            }}
                        >
                            <CardContent>
                                <Typography
                                    variant="h5"
                                    color="#444"
                                    fontSize={{ xs: "1.2rem", sm: "18px", md: "32px" }}
                                    fontWeight={{ md: 600, xs: 500 }}
                                    sx={{
                                        fontFamily: "inherit",
                                    }}
                                >
                                    {item.title}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default LDcsCodes;
