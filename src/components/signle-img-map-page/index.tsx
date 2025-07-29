"use client";

import { Box, Button } from "@mui/material";
import Image from "next/image";
import { useCallback, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

interface AreaItem {
  alt: string;
  title: string;
  href: string;
  coords: string;
  shape: string;
}

interface SinglePageProps {
  image?: string;
  amendmentButtonRoute1?: string;
  amendmentButtonRoute2?: string;
  amendmentButtonRoute3?: string;
  amendmentButtonTitle1?: string;
  amendmentButtonTitle2?: string;
  amendmentButtonTitle3?: string;
  downloadUrl?: string;
  downloadFileName?: string;
  target?: string;
  areas?: AreaItem[];
}

const SingleImgMapPage: React.FC<SinglePageProps> = ({
  amendmentButtonRoute1,
  amendmentButtonRoute2,
  amendmentButtonRoute3,
  amendmentButtonTitle1,
  amendmentButtonTitle2,
  amendmentButtonTitle3,
  downloadUrl,
  downloadFileName,
  image,
  target = "_self",
  areas = [],
}) => {
  const router = useRouter();
  const mapRef = useRef<HTMLMapElement>(null);

  useEffect(() => {
    const resizeMap = async () => {
      if (typeof window !== "undefined" && mapRef.current) {
        const mod = await import("image-map-resizer");
        mod.default(); // run the default export function
      }
    };
    resizeMap();
  }, [areas, image]);

  const onAmendmentButtonClick1 = useCallback(() => {
    if (downloadUrl && downloadFileName) {
      const link = document.createElement("a");
      link.href = downloadUrl;
      link.download = downloadFileName;
      link.click();
    } else if (amendmentButtonRoute1) {
      router.push(amendmentButtonRoute1);
    } else {
      console.warn("No action available");
    }
  }, [downloadUrl, downloadFileName, amendmentButtonRoute1, router]);

  const onAmendmentButtonClick2 = useCallback(() => {
    if (amendmentButtonRoute2) router.push(amendmentButtonRoute2);
  }, [router, amendmentButtonRoute2]);

  const onAmendmentButtonClick3 = useCallback(() => {
    if (amendmentButtonRoute3) router.push(amendmentButtonRoute3);
  }, [router, amendmentButtonRoute3]);

  return (
    <Box px={{ md: 3, xs: 2 }}>
      <Box
        display="flex"
        flexDirection={{ lg: "row", xs: "column" }}
        alignItems={{ md: "center", xs: "left" }}
        justifyContent="space-between"
        marginBottom={2}
        gap={0}
      >
        <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap", ml: "auto" }}>
          {amendmentButtonTitle1 && (
            <Button
              variant="contained"
              onClick={onAmendmentButtonClick1}
              sx={{
                backgroundColor: "#5A5867",
                color: "#FFFFFF",
                "&:hover": { backgroundColor: "#4A4857" },
                cursor: "pointer",
                fontSize: { xs: "0.7rem", sm: "0.9rem", md: "1rem" },
                padding: { xs: "6px 12px", md: "8px 16px" },
                textTransform: "capitalize",
                fontFamily: "Outfit, inherit",
              }}
            >
              {amendmentButtonTitle1}
            </Button>
          )}
          {amendmentButtonTitle2 && (
            <Button
              variant="contained"
              onClick={onAmendmentButtonClick2}
              sx={{
                backgroundColor: "#5A5867",
                color: "#FFFFFF",
                "&:hover": { backgroundColor: "#4A4857" },
                cursor: "pointer",
                fontSize: { xs: "0.7rem", sm: "0.9rem", md: "1rem" },
                padding: { xs: "6px 12px", md: "8px 16px" },
                textTransform: "capitalize",
                fontFamily: "Outfit, inherit",
              }}
            >
              {amendmentButtonTitle2}
            </Button>
          )}
          {amendmentButtonTitle3 && (
            <Button
              variant="contained"
              onClick={onAmendmentButtonClick3}
              sx={{
                backgroundColor: "#5A5867",
                color: "#FFFFFF",
                "&:hover": { backgroundColor: "#4A4857" },
                cursor: "pointer",
                fontSize: { xs: "0.7rem", sm: "0.9rem", md: "1rem" },
                padding: { xs: "6px 12px", md: "8px 16px" },
                textTransform: "capitalize",
                fontFamily: "Outfit, inherit",
              }}
            >
              {amendmentButtonTitle3}
            </Button>
          )}
        </Box>
      </Box>

      {image && (
        <>
          <Image
            src={image}
            alt="crypto"
            useMap={areas && areas.length > 0 ? "#image-map" : undefined}
            width={200}
            height={200}
            style={{ width: "100%", height: "auto" }}
            onLoadingComplete={() => {
              import("image-map-resizer").then((mod) => mod.default());
            }}
          />
          {areas && areas.length > 0 && (
            <map name="image-map" ref={mapRef}>
              {areas.map((area, index) => (
                <area
                  key={index}
                  target={target}
                  alt={area.alt}
                  title={area.title}
                  href={area.href}
                  coords={area.coords}
                  shape={area.shape}
                />
              ))}
            </map>
          )}
        </>
      )}
    </Box>
  );
};

export default SingleImgMapPage;
