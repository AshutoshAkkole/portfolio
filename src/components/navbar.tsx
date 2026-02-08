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
  }

  return (
    <nav className="fixed top-0 w-full bg-white dark:bg-gray-600 h-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {!darkMode ? (
            <Image
              className="cursor-pointer"
              alt="light mode"
              src="/lightmode.svg"
              width={24}
              height={24}
              onClick={toggleDarkMode}
            />
          ) : (
            <Image
              className="cursor-pointer"
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
            {
              isMenuOpen ? (
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
              )
            }
          </div>
          
        </div>
      </div>
      {
            isMenuOpen && (
              <div className="w-full bg-white dark:bg-gray-600 w-48 py-2 shadow-lg ">
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
            )
          }
    </nav>
  );
}
