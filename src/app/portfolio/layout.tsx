"use client";

import NavBar from "@/src/components/navbar";
import SpaceContainer from "@/src/components/spacecontainer";
import { useState } from "react";


export default function Layout({ children }: { children: React.ReactNode }) {

    const darkModeControls = useState(false);

  return (
    <div className={darkModeControls[0] ? "dark" : ""}>
      <NavBar darkModeControls={darkModeControls} />
      <SpaceContainer />
      <SpaceContainer />
      {children}
    </div>
  );
}