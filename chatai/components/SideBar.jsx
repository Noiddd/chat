import React from "react";
import NewChat from "./NewChat";

export default function SideBar() {
  return (
    <div className="p-2 flex flex-col h-screen">
      <div className="flex-1">
        <div>
          <NewChat />
          <div>{/* modelselection */}</div>
          {/* map throught the chat rows */}
        </div>
      </div>
    </div>
  );
}
