"use client";

import NavBar from "@/src/components/navbar";
import SpaceContainer from "@/src/components/spacecontainer";
import Image from "next/image";
import { useState } from "react";


export default function Layout({ children }: { children: React.ReactNode }) {

  const darkModeControls = useState(true);
  const [darkMode] = darkModeControls;

  return (
    <div data-theme={darkMode ? "dark" : "light"}>
      <NavBar darkModeControls={darkModeControls} />
      <SpaceContainer />
      <SpaceContainer />
      {children}
      <div className="fixed bottom-4 right-4 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
        <Image src="/uparrow.svg" alt="up arrow" width={50} height={50} className="dark:invert" />
      </div>
    </div>
  );
}