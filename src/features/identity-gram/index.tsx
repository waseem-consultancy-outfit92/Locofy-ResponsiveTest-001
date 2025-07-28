"use client";
import { Box, Grid, Stack, Typography } from "@mui/material";
import { cardsData } from "./identity-gram-data";
import ColorLegends from "./color-legends";
import Image from "next/image";
import Link from "next/link";

const IdentityGramFeature = () => {

  return (
    <Box p={{ xs: 3, md: 4, lg: 6 }} position="relative">
      <Stack flexDirection="row" justifyContent={{ xs: "center", md: "space-between" }} flexWrap={"wrap"} alignItems="center">
        <Box display="flex" alignItems="center" mr={2}>
          <Typography
            variant="h3"
            color="#0246BC"
            fontSize={{ xs: "1rem", sm: "1.5rem", md: "2rem" }}
            fontWeight={600}
            ml={2}
          >
            Identity Gram
          </Typography>
        </Box>

        <ColorLegends />
      </Stack>

      <Box mt={'70px'}>
        <Grid container spacing={2}>
          {cardsData.map((item: any) => (
            <Grid size={{ xs: 12, md: 6, lg: 3 }} key={item.key}>
              <Box
                component={Link}
                href={item.href}
                sx={{
                  display: 'block',
                  p: '80px 80px 40px',
                  position: 'relative',
                  backgroundColor: item.bgCard,
                  borderRadius: '40px',
                  height: '100%',
                }}
              >

                <Box sx={{
                  height: '40px',
                  width: '40px',
                  borderRadius: '5px',
                  position: 'absolute',
                  right: '24px',
                  top: '24px',
                  backgroundColor: item.bgLegend,
                }}
                ></Box>

                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                  <Image
                    src={item.icon}
                    alt={item.title ?? item.key}
                    width={200}
                    height={200}
                  />
                </Box>
                <Typography
                  variant="h5"
                  color="#024D9C"
                  fontSize={{ xs: "1.2rem", sm: "18px", md: "24px" }}
                  fontWeight={'500'}
                  sx={{
                    fontFamily: "inherit",
                    textAlign: 'center',
                    maxWidth: '247px',
                    mx: 'auto',
                    mt: '20px'
                  }}
                >
                  {item.title}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default IdentityGramFeature;
