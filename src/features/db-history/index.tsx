"use client";

import Image from "next/image";
import React, { useCallback } from "react";
import { useRouter } from "next/navigation";
import { MultiBackIcon } from "@/assets/common-assets";
import type { ResponsiveStyleValue } from "@mui/system";
import { Box, Card, CardContent, Grid, Stack, Typography } from "@mui/material";

type DbHistoryProps = {
  backRoute?: string;
  fontSize?: ResponsiveStyleValue<string>;
  iconWidth?: string;
  background?: string;
};

const arrayData = [
  {
    key: "sector-1",
    link: "/db-history",
    title: "GCSE (9-1) in History",
  },
  {
    key: "sector-2",
    link: "/db-history",
    title: "GCSE (9-1) in History A (Explaining the Modern World)",
  },
  {
    key: "sector-3",
    link: "/db-history",
    title: "MYP History",
  },
  {
    key: "sector-4",
    link: "/db-history",
    title: "Foundation Degree in History, Heritage and Archaeology",
  },
  {
    key: "sector-5",
    link: "/db-history",
    title: "Foundation Degree in History with English - (South Devon College)",
  },
  {
    key: "sector-6",
    link: "/db-history",
    title: "FdA in History, Heritage and Culture - Truro and Penwith College",
  },
  {
    key: "sector-7",
    link: "/db-history",
    title: "Foundation Degree in History with English - (Petroc)",
  },
  {
    key: "sector-8",
    link: "/db-history",
    title: "BA (Hons) in Health and Wellbeing and History - Holy Cross College",
  },
  {
    key: "sector-9",
    link: "/db-history",
    title:
      "BA (Hons) in History and Special Educational Needs - Holy Cross College",
  },
  {
    key: "sector-10",
    link: "/db-history",
    title: "Non regulated provision, Level 6, History",
  },
  {
    key: "sector-11",
    link: "/db-history",
    title: "BA (Hons) in Early Childhood and History - Holy Cross College",
  },
  {
    key: "sector-12",
    link: "/db-history",
    title: "History (City Literary Institute)",
  },
];

const DbHistory: React.FC<DbHistoryProps> = () => {
  const router = useRouter();

  const onBackIconClick = useCallback(() => {
    router.push("/ldcs-codes");
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
          DB. - History
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
                backgroundColor: "#E1ECFF",
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

export default DbHistory;
