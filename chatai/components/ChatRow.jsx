"use client";

import { ChatBubbleLeftIcon, TrashIcon } from "@heroicons/react/24/outline";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection, orderBy, query } from "firebase/firestore";
import { db } from "../firebase";

export default function ChatRow({ id }) {
  const pathName = usePathname();
  const router = useRouter();
  const { data: session } = useSession();
  const [active, setActive] = useState(false);

  const [messages] = useCollection(
    query(
      collection(db, "users", session?.user?.email, "chats", id, "messages"),
      orderBy("createdAt", "asc")
    )
  );

  return (
    <Link href={`/chat/${id}`} className={`chatRow justify-center`}>
      <ChatBubbleLeftIcon className="h-5 w-5" />
      <p className="flex-1 hidden md:inline-flex truncate">
        {messages?.docs[messages?.docs.length - 1]?.data().text || "New Chat"}
      </p>
      <TrashIcon className="h-5 w-5 text-gray-700 hover:text-red-700" />
    </Link>
  );
}
