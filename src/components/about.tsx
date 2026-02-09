import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <div id="about" className="pb-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl text-gray-900 dark:text-white font-bold">
          Ashutosh Akkole
        </h1>
        <h2 className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-6">
          Frontend Software Engineer II
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
          I am a passionate frontend software engineer with 3+ years of
          experience in building high-quality web applications. I specialize in
          React and Next.js, and I have a strong background in JavaScript,
          TypeScript, and modern frontend technologies. I am dedicated to
          creating seamless user experiences and writing clean, maintainable
          code.
        </p>
        <div className="flex md:flex-row flex-col md:space-x-4 mb-8">
          <Image
            className="dark:invert"
            src="/mail.svg"
            alt="Mail Icon"
            width={24}
            height={24}
          />
          <Link
            href="mailto:akkoleashutosh01@gmail.com"
            className="text-gray-700 hover:text-black dark:text-white dark:hover:text-gray-300 transition-colors my-auto"
          >
            akkoleashutosh01@gmail.com
          </Link>
          <Image
            className="dark:invert"
            src="/phone.svg"
            alt="Phone Icon"
            width={24}
            height={24}
          />
          <Link
            href="tel:+919876543210"
            className="text-gray-700 hover:text-black dark:text-white dark:hover:text-gray-300 transition-colors my-auto"
          >
            +91 9307284399
          </Link>
        </div>
        <div className="flex space-x-4 items-center">
          <Link
            href="https://www.linkedin.com/in/ashutosh-akkole/"
            target="_blank"
          >
            <Image
              className="dark:invert hover:scale-150 transition-transform duration-300"
              src="/linkedin.svg"
              alt="LinkedIn Icon"
              width={24}
              height={24}
            />
          </Link>
          <Link href="https://github.com/AshutoshAkkole" target="_blank">
            <Image
              className="dark:invert hover:scale-150 transition-transform duration-300"
              src="/github.svg"
              alt="GitHub Icon"
              width={24}
              height={24}
            />
          </Link>
          <Link href="https://www.x.com/Ashu1292574" target="_blank">
            <Image
              className="dark:invert hover:scale-150 transition-transform duration-300"
              src="/x.svg"
              alt="x Icon"
              width={24}
              height={24}
            />
          </Link>
          <Link
            href="https://drive.google.com/file/d/1-DlcRKVQVDF4hOSAV7Xl-xCYrDwbJn7I"
            target="_blank"
          >
            <h4 className="border-4 p-2 text-gray-700 hover:text-black hover:scale-110 transition-transform duration-300 dark:text-white dark:hover:text-gray-300 my-auto">
              View Resume
            </h4>
          </Link>
        </div>
      </div>
    </div>
  );
}
