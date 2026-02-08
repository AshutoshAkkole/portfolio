import About from "@/src/components/about";
import Education from "@/src/components/education";
import Experience from "@/src/components/experience";
import Skills from "@/src/components/skills";
import SpaceContainer from "@/src/components/spacecontainer";

export default function Portfolio() {
  return (
    <main className="bg-white dark:bg-gray-900 w-full h-screen">
        <About />
        <Experience />
        <Skills />
        <Education />
      
    </main>
  );
}