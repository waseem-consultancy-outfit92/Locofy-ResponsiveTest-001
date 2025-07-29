"use client";

import React, { useRef, useState } from "react";
import {
  Box,
  Tooltip,
  Typography,
  Button,
  Stack,
  IconButton,
  Modal,
} from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import ExpandCircleDownOutlinedIcon from "@mui/icons-material/ExpandCircleDownOutlined";
import { ColorLegendsKeyImage, IGChatGPT4TrainingImage } from "@/assets";
import { CommonBackIcon } from "@/assets/common-assets";

interface ImageMapArea {
  x: number;
  y: number;
  width: number;
  height: number;
  href: string;
  title: string;
  target?: "_blank" | "_parent" | "_self";
}

export default function IGChatGPTTrainingImageMap() {
  const router = useRouter();
  const [isLegendOpen, setIsLegendOpen] = useState(false);
  const imageContainerRef = useRef<HTMLDivElement>(null);

  const originalImageWidth = 1889;
  const originalImageHeight = 1236;

  const areas: ImageMapArea[] = [
    {
      x: 21.53,
      y: 100.46,
      width: 179.39,
      height: 184.77,
      href: "/1-startup-help-squad-chat-gpt-4-define-objectives-data-collection",
      title: "Define Objectives/Data collection",
      target: "_parent",
    },
    {
      x: 990.25,
      y: 107.64,
      width: 161.45,
      height: 168.63,
      href: "/2-startup-help-squad-chat-gpt-4-prepare-data",
      title: "Prepare Data",
      target: "_parent",
    },
    {
      x: 19.73,
      y: 396.46,
      width: 170.42,
      height: 190.16,
      href: "/4-startup-help-squad-chat-gpt-4-leverage-openai-s-api-fine-tuning",
      title: "Leverage OpenAI's API (Fine-Tuning)",
      target: "_parent",
    },
    {
      x: 988.45,
      y: 392.87,
      width: 179.39,
      height: 172.22,
      href: "/3-startup-help-squad-chat-gpt-4-create-custom-prompts",
      title: "Create Custom Prompts",
      target: "_parent",
    },
    {
      x: 14.35,
      y: 687.07,
      width: 166.83,
      height: 179.39,
      href: "/5-startup-help-squad-chat-gpt-4-test-the-chatbot",
      title: "Test the Chatbot",
      target: "_parent",
    },
    {
      x: 988.45,
      y: 685.28,
      width: 172.22,
      height: 182.98,
      href: "/6-startup-help-squad-chat-gpt-4-deploy-on-sales-platforms",
      title: "Deploy on Sales Platforms",
      target: "_parent",
    },
    {
      x: 80.73,
      y: 968.72,
      width: 208.09,
      height: 177.6,
      href: "/6-startup-help-squad-chat-gpt-4-deploy-on-sales-platforms-section1",
      title: "Monitor & Update",
      target: "_parent",
    },
  ];

  const handleAreaClick = (href: string, target?: string) => {
    if (target === "_blank") {
      window.open(href, "_blank", "noopener,noreferrer");
    } else {
      router.push(href);
    }
  };

  return (
    <>
      <Stack spacing={2} px={3} py={2}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <IconButton>
            <Image src={CommonBackIcon} alt="backBTn" />
          </IconButton>
          <Button
            endIcon={
              <ExpandCircleDownOutlinedIcon sx={{ width: 40, height: 40 }} />
            }
            sx={{
              color: "#5A5867",
              fontWeight: "semi-bold",
              fontSize: 32,
              fontFamily: "Outfit",
            }}
            onClick={() => {
              setIsLegendOpen(true);
            }}
          >
            Color Legends (Key)
          </Button>
        </Stack>
        <Typography
          sx={{
            color: "#5A5867",
            fontWeight: 600,
            fontSize: 32,
            fontFamily: "Outfit",
          }}
        >
          Chat GPT 4 Training
        </Typography>
        <Box
          ref={imageContainerRef}
          sx={{
            position: "relative",
            width: "100%",
            height: "auto",
            borderRadius: 2,
            overflow: "hidden",
            boxShadow: 3,
          }}
        >
          <Image
            src={IGChatGPT4TrainingImage}
            alt="ChatGPT 4 Training Process Diagram"
            width={originalImageWidth}
            height={originalImageHeight}
            style={{
              width: "100%",
              height: "auto",
              display: "block",
            }}
            priority
          />

          {areas.map((area, index) => (
            <Tooltip key={index} title={area.title} arrow placement="right">
              <Box
                onClick={() => handleAreaClick(area.href, area.target)}
                sx={{
                  position: "absolute",
                  left: `${(area.x / originalImageWidth) * 100}%`,
                  top: `${(area.y / originalImageHeight) * 100}%`,
                  width: `${(area.width / originalImageWidth) * 100}%`,
                  height: `${(area.height / originalImageHeight) * 100}%`,
                  "&:hover": {
                    backgroundColor: "rgba(255, 255, 255, 0.2)",
                    border: "2px solid white",
                    cursor: "pointer",
                  },
                }}
              />
            </Tooltip>
          ))}
        </Box>
      </Stack>
      <Modal
        open={isLegendOpen}
        onClose={() => {
          setIsLegendOpen(false);
        }}
        sx={{
          width: "fit-content",
          left: { md: "70%", xs: "10%" },
          top: { md: "10%", xs: "20%" },
        }}
      >
        <Image src={ColorLegendsKeyImage} alt="Color Legend" />
      </Modal>
    </>
  );
}
