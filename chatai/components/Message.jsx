import React from "react";

export default function Message({ message }) {
  const isChat = message.user.name === "chat";
  return (
    <div className={`py-5 text-white ${isChat && "bg-[#434654]"}`}>
      <div className="flex space-x-5 px-10 max-w-2xl mx-auto">
        <img src={message.user.avatar} alt="" className="h-8 w-8" />
        <p className="pt-1 text-sm">{message.text}</p>
      </div>
    </div>
  );
}
