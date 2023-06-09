"use client";

import { useSession, signOut } from "next-auth/react";
import React from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import NewChat from "./NewChat";
import { collection, orderBy, query } from "firebase/firestore";
import { db } from "../firebase";
import ChatRow from "./ChatRow";

export default function SideBar() {
  const { data: session } = useSession();

  const [chats, loading, error] = useCollection(
    session &&
      query(
        collection(db, "users", session.user?.email, "chats"),
        orderBy("createdAt", "asc")
      )
  );

  return (
    <div className="p-2 flex flex-col h-screen">
      <div className="flex-1">
        <div>
          <NewChat />
          {chats?.docs.map((chat) => {
            return <ChatRow key={chat.id} id={chat.id} />;
          })}
        </div>
      </div>

      {session && (
        <img
          onClick={() => signOut()}
          src={session.user?.image}
          alt="ProfilePic"
          className="h-12 w-12 rounded-full cursor-pointer mx-autp mb-2 hover:opacity-50"
        />
      )}
    </div>
  );
}
