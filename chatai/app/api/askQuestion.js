import { adminDb } from "@/firebaseAdmin";
import query from "@/lib/queryApi";
import React from "react";

export default async function handler(req, res) {
  const { prompt, chatId, session } = req.body;

  if (!prompt) {
    res.status(400).json({ answer: "Please provide a prompt!" });
    return;
  }

  if (!chatId) {
    res.status(400).json({ answer: "Please provide a valid chat ID!" });
    return;
  }

  const response = await query(prompt, chatId);

  const message = {
    text: response || "Chat was unable to find an answer for that!",
    createdAt: adminDb.firestore.Timestamp.now(),
    user: {
      _id: "chat",
      name: "chat",
      avatar: "",
    },
  };

  await adminDb
    .collection("users")
    .doc(session?.user?.email)
    .collection("chats")
    .doc(chatId)
    .collection("messages")
    .add(message);

  res.status(200).json({ answer: message.text });
}
