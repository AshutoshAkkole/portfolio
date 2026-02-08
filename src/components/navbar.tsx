import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function NavBar({
  darkModeControls,
}: {
  darkModeControls: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
}) {
  const [darkMode, setDarkMode] = darkModeControls;

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <nav className="fixed top-0 w-full bg-white dark:bg-gray-600 h-16 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {!darkMode ? (
            <Image
              className="cursor-pointer dark:invert hover:scale-150 transition-transform duration-300"
              alt="light mode"
              src="/lightmode.svg"
              width={24}
              height={24}
              onClick={toggleDarkMode}
            />
          ) : (
            <Image
              className="cursor-pointer dark:invert hover:scale-150 transition-transform duration-300"
              alt="dark mode"
              src="/darkmode.svg"
              width={24}
              height={24}
              onClick={toggleDarkMode}
            />
          )}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="#about"
              className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
            >
              About
            </Link>
            <Link
              href="#experience"
              className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
            >
              Experience
            </Link>
            <Link
              href="#skills"
              className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
            >
              Skills
            </Link>
            <Link
              href="#education"
              className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
            >
              Education
            </Link>
          </div>
          <div className="md:hidden flex items-center">
            {isMenuOpen ? (
              <Image
                onClick={toggleMenu}
                className="cursor-pointer"
                alt="close menu"
                src="/close.svg"
                width={24}
                height={24}
              />
            ) : (
              <Image
                onClick={toggleMenu}
                className="cursor-pointer"
                alt="menu"
                src="/menu.svg"
                width={24}
                height={24}
              />
            )}
          </div>
        </div>
      </div>
      <div
        className={`absolute top-16 left-0 w-full bg-white dark:bg-gray-600 shadow-lg transition-all duration-300 ease-in-out overflow-hidden ${
          isMenuOpen
            ? "opacity-100 visible max-h-64"
            : "opacity-0 invisible max-h-0"
        }`}
      >
        <div className="py-2">
          <Link
            href="#about"
            className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            onClick={toggleMenu}
          >
            About
          </Link>
          <Link
            href="#experience"
            className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            onClick={toggleMenu}
          >
            Experience
          </Link>
          <Link
            href="#skills"
            className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            onClick={toggleMenu}
          >
            Skills
          </Link>
          <Link
            href="#education"
            className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            onClick={toggleMenu}
          >
            Education
          </Link>
        </div>
      </div>
    </nav>
  );
}
