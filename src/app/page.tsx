"use client";

import Link from "next/link";
import { useLayoutEffect } from "react";
import { useRouter } from "next/navigation";


export default function Home() {
  const isRedirection = true;
  const router = useRouter();

  useLayoutEffect(() => {
    isRedirection && router.push("/portfolio");
  }, [])

  if (isRedirection) {
    return null;
  }

  return(
    <>
    <h1 className="text-3xl font-bold">Welcome to My Portfolio</h1>
    <Link href="/home">
      Go to Home Page
    </Link>
    </>
  )
}
