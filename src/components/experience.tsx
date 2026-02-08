import Image from "next/image";

export default function Experience() {
  return (
    <div id="experience" className="pb-16 px-4 bg-white dark:bg-gray-800 pt-16">
      <div className="max-w-4xl mx-auto">
        {/* head */}
        <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
          Experience
        </h2>

        <div className="max-w-4xl bg-gray-100 dark:bg-gray-700 rounded-lg p-6">
          {/* experience of company -1 */}
          <div data-key="company-1">
            <div className="flex items-center mb-4">
              <Image
                src="/logicmonitor.png"
                alt="logicmonitor Logo"
                className="rounded-full mr-4"
                width={40}
                height={40}
              />
              <div className="ml-4">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  LogicMonitor
                </h3>
                <p className="text-gray-600 dark:text-gray-300">SDE II</p>
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  Jan 2026 - Present
                </p>
              </div>
            </div>
            <ul className="list-disc list-outside pl-6">
              <li className="mb-2 text-gray-700 dark:text-gray-300">
                Configured compression-webpack-plugin with S3/CloudFront to
                enable gzip compression, reducing production bundle size from
                10MB to 3MB (70% reduction) and significantly improving page
                load times.
              </li>
              <li className="mb-2 text-gray-700 dark:text-gray-300">
                Migrated state management from Redux to Zustand, improving
                application performance by 20% and significantly reducing
                development complexity through simplified API and reduced
                boilerplate code.
              </li>
            </ul>
          </div>

          {/* experience of company -2 */}
          <div data-key="company-2" className="mt-8">
            <div className="flex items-center mb-4">
              <Image
                src="/logicmonitor.png"
                alt="logicmonitor Logo"
                className="rounded-full mr-4"
                width={40}
                height={40}
              />
              <div className="ml-4">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  LogicMonitor
                </h3>
                <p className="text-gray-600 dark:text-gray-300">SDE I</p>
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  April 2023 - Dec 2025
                </p>
              </div>
            </div>
            <ul className="list-disc list-outside pl-6">
              <li className="mb-2 text-gray-700 dark:text-gray-300">
                Re-engineered UI reports into a config-driven architecture,
                designing a reusable configuration schema and rendering pipeline
                that enabled new reports to be created without code changes —
                reducing development time by 50%.
              </li>
              <li className="mb-2 text-gray-700 dark:text-gray-300">
                Worked with a team of four on LM Lens 2.0 (2025), implementing a
                Z-score–based anomaly detection algorithm that identifies issues
                and their root causes within a single UI page; the feature was
                later integrated into the product, enhancing visibility and
                significantly reducing diagnostic time by 72%.
              </li>
              <li className="mb-2 text-gray-700 dark:text-gray-300">
                Increased unit test coverage from 40% to 60% using Jest and
                React Testing Library, reducing production bugs in new features
                by 60% and improving code reliability.
              </li>
              <li className="mb-2 text-gray-700 dark:text-gray-300">
                Implemented ARIA attributes and semantic HTML patterns to
                improve application accessibility and screen reader
                compatibility, ensuring WCAG compliance.
              </li>
              <li className="mb-2 text-gray-700 dark:text-gray-300">
                Developed an AI-powered chatbot (2023 Hackathon) using the
                facebook/bart-large-mnli model for conversational resource
                creation, later integrated into the product and increasing user
                engagement by 80%.
              </li>
              <li className="mb-2 text-gray-700 dark:text-gray-300">
                Led the platform decomposition (tech debt) initiative —
                refactored and modularized legacy codebases to improve
                maintainability and increase platform performance by 41%.
              </li>
              <li className="mb-2 text-gray-700 dark:text-gray-300">
                Built and maintained micro-frontend architecture using
                react-single-spa with shared component lifecycles, enabling
                independent deployments and team autonomy across multiple
                development teams.
              </li>
              <li className="mb-2 text-gray-700 dark:text-gray-300">
                Collaborated with UX designers to prototype and develop a new
                dashboard featuring top-k resources (servers, instances,
                LogicModules, datapoints) visualization, implementing a
                split-view layout with interactive pie charts and data tables
                for improved resource monitoring.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
