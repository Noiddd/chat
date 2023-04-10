import { adminDb } from "../../firebaseAdmin";
import query from "../../lib/queryApi";
import admin from "firebase-admin";

export default async function handler(req, res) {
  const { prompt, chatId, session } = req.body;

  // Check if parameters are there
  if (!prompt) {
    res.status(400).json({ answer: "Please provide a prompt!" });
    return;
  }

  if (!chatId) {
    res.status(400).json({ answer: "Please provide a valid chat ID!" });
    return;
  }

  // Query into OPENAI API
  const response = await query(prompt, chatId);
  console.log(response);

  // Storing reply into a message object
  const message = {
    text: response || "Chat was unable to find an answer for that!",
    createdAt: admin.firestore.Timestamp.now(),
    user: {
      _id: "chat",
      name: "chat",
      avatar: "",
    },
  };

  // Add message into firebase using Admin
  await adminDb
    .collection("users")
    .doc(session?.user?.email)
    .collection("chats")
    .doc(chatId)
    .collection("messages")
    .add(message);

  // return reply message
  res.status(200).json({ answer: message.text });
}
