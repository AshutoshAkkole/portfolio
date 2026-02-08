import Image from "next/image";

const skillsData = [
  { name: "TypeScript", icon: "/skills/typescript.svg" },
  { name: "React", icon: "/skills/react.svg" },
  { name: "Next.js", icon: "/skills/nextjs.svg" },
  { name: "Node.js", icon: "/skills/nodejs.svg" },
  { name: "HTML", icon: "/skills/html.svg" },
  { name: "Cypress", icon: "/skills/cypress.svg" },
  { name: "Gherkin", icon: "/skills/gherkin.svg" },
  { name: "StoryBook", icon: "/skills/storybook.svg" },
  { name: "Jest/Vitest", icon: "/skills/jest.svg" },
  { name: "Vite", icon: "/skills/vite.svg" },
  { name: "Webpack", icon: "/skills/webpack.svg" },
  { name: "Micro Frontend/MFE", icon: "/skills/mfe.svg" },
];

function SkillCard({ name, icon }: { name: string; icon: string }) {
  return (
    <div className="flex items-center gap-2 bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
      <Image src={icon} alt={name} width={24} height={24} />
      <span className="text-gray-900 dark:text-gray-100">{name}</span>
    </div>
  );
}

export default function Skills() {
  return (
    <div id="skills" className="pb-16 px-4 bg-white dark:bg-gray-600">
      <div className="max-w-4xl mx-auto">
        <section className="py-16 px-4">
          <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
            Skills
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {skillsData.map((skill) => (
              <SkillCard key={skill.name} name={skill.name} icon={skill.icon} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
