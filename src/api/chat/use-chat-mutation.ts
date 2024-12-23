import { Message } from "@/api/chat/model";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

// 챗봇 API 호출 함수
export const sendChatBotMessage = async (
  messages: Message[],
): Promise<Message> => {
  const response = await axios.post("/api/chat", {
    messages: messages.map((msg) => ({
      text: msg.text,
      isBot: msg.isBot,
    })),
  });
  return {
    id: String(messages.length),
    text: response.data.message,
    createdAt: new Date().toISOString(),
    isBot: true,
  };
};

// 챗봇 API를 호출하는 React Query 훅
export const useChatBotMutation = () => {
  return useMutation({
    mutationFn: sendChatBotMessage,
  });
};
