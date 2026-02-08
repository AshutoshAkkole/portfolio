"use client";

import NavBar from "@/src/components/navbar";
import SpaceContainer from "@/src/components/spacecontainer";
import { useState } from "react";


export default function Layout({ children }: { children: React.ReactNode }) {

  const darkModeControls = useState(false);
  const [darkMode] = darkModeControls;

  return (
    <div data-theme={darkMode ? "dark" : "light"}>
      <NavBar darkModeControls={darkModeControls} />
      <SpaceContainer />
      <SpaceContainer />
      {children}
    </div>
  );
}