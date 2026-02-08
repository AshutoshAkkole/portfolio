import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return(
    <>
    <h1 className="text-3xl font-bold">Welcome to My Portfolio</h1>
    <Link href="/home">
      Go to Home Page
    </Link>
    </>
  )
}
