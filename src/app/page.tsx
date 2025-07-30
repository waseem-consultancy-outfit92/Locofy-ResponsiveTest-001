<<<<<<< HEAD
=======
"use client";

>>>>>>> 314f96c83fb30d68d2a996ae5cdb0dc0e1e691c1
import { Box, Typography, Container } from "@mui/material";

export default function Home() {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "#f0f4f8",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          py: 8,
        }}
      >
        <Container maxWidth="md">
          <Typography
            variant="h3"
            component="h1"
            gutterBottom
            sx={{ color: "#003366" }}
          >
<<<<<<< HEAD
            Welcome to the AQSE
=======
            Welcome to the starter template Locofy
>>>>>>> 314f96c83fb30d68d2a996ae5cdb0dc0e1e691c1
          </Typography>
          <Typography variant="h6" sx={{ color: "#555" }}>
            Your trusted platform for care service oversight and reporting.
          </Typography>
        </Container>
      </Box>
    </>
  );
}
