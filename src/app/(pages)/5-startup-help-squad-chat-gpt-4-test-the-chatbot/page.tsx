import { StartupHelpSquadChatGpt4TestTheChatbotImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const StartupHelpSquadChatGpt4TestTheChatbotPage = () => {
  return (
    <CommonPage
      pageTitle={`Test the Chatbot`}
      src={StartupHelpSquadChatGpt4TestTheChatbotImage}
      backRoute="/ig-chat-gpt-4-training"
    />
  );
};

export default StartupHelpSquadChatGpt4TestTheChatbotPage;
