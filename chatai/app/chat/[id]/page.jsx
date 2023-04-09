import Chat from "@/components/Chat";
import ChatInput from "@/components/ChatInput";
import React from "react";

export default function ChatPage({ id }) {
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <Chat id={id} />
      <ChatInput id={id} />
    </div>
  );
}
