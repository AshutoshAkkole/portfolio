const educationData = [
  {
    school: "Vishwakarme Institute of Technology Pune",
    degree: "B.Tech",
    field: "Computer Science and Engineering",
    year: "2019 - 2023",
    description: "",
  },
];

function EducationCard({
  school,
  degree,
  field,
  year,
  description,
}: {
  school: string;
  degree: string;
  field: string;
  year: string;
  description: string;
}) {
  return (
    <div className="border-l-4 border-blue-500 pl-6 py-4">
      <div className="flex justify-between items-start mb-2">
        <div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            {degree}
          </h3>
          <p className="text-blue-600 dark:text-blue-400 font-medium">
            {field}
          </p>
        </div>
        <span className="text-sm text-gray-600 dark:text-gray-400">{year}</span>
      </div>
      <p className="text-gray-700 dark:text-gray-300 mb-2">{school}</p>
      <p className="text-gray-600 dark:text-gray-400 text-sm">
        {description}
      </p>
    </div>
  );
}

export default function Education() {
  return (
    <div id="education" className="pb-16 px-4 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <section className="py-16 px-4">
          <h2 className="text-3xl font-bold mb-16 text-gray-900 dark:text-white">
            Education
          </h2>
          <div className="space-y-6">
            {educationData.map((education, index) => (
              <EducationCard
                key={index}
                school={education.school}
                degree={education.degree}
                field={education.field}
                year={education.year}
                description={education.description}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
