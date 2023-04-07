"use client";

import { useSession, signOut } from "next-auth/react";
import React from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import NewChat from "./NewChat";
import { collection } from "firebase/firestore";
import { db } from "../firebase";
import ChatRow from "./ChatRow";

export default function SideBar() {
  const { data: session } = useSession();

  const [chats, loading, error] = useCollection(
    session && collection(db, "users", session.user?.email, "chats")
  );

  console.log(chats);

  return (
    <div className="p-2 flex flex-col h-screen items-center">
      <div className="flex-1">
        <div>
          <NewChat />
          <div>{/* modelselection */}</div>

          {chats?.docs.map((chat) => {
            return <ChatRow key={chat.id} id={chat.id} />;
          })}
        </div>
      </div>

      {session && (
        <img
          onClick={() => signOut()}
          src="https://plus.unsplash.com/premium_photo-1679523690051-03499a7914a0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
          alt="ProfilePic"
          className="h-12 w-12 rounded-full cursor-pointer mx-autp mb-2 hover:opacity-50"
        />
      )}
    </div>
  );
}
