const experiences = [
  {
    title: "Founder & CEO",
    company: "PT Pilar Agrosinergi Nusantara",
    period: "Present",
    type: "Full-time",
    description:
      "Leading business development, strategic planning, and digital initiatives for an agribusiness-oriented company. Responsible for overall company direction, stakeholder management, and technology adoption.",
    tags: ["Leadership", "Business Strategy", "Digital Transformation"],
  },
  {
    title: "Business Development",
    company: "ShARE ITB",
    period: "Present",
    type: "Organization",
    description:
      "Involved in business development activities, strategic initiatives, and organizational collaboration within the Share a Ride Ecosystem at Institut Teknologi Bandung.",
    tags: ["Business Development", "Strategy", "Collaboration"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="text-xs font-semibold text-teal-600 uppercase tracking-widest">Experience</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-slate-900">Professional Journey</h2>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-slate-200 -translate-x-1/2 hidden md:block" />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <div
                key={exp.title}
                className={`relative flex flex-col md:flex-row gap-8 items-start ${
                  i % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Dot */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-teal-400 border-4 border-white rounded-full shadow z-10 top-6" />

                {/* Card */}
                <div className="md:w-1/2 bg-slate-50 rounded-2xl p-7 border border-slate-100 hover:border-teal-100 hover:shadow-md transition-all duration-200">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div>
                      <h3 className="text-lg font-bold text-slate-900">{exp.title}</h3>
                      <p className="text-teal-600 font-semibold text-sm mt-0.5">{exp.company}</p>
                    </div>
                    <span className="text-xs bg-teal-50 text-teal-700 border border-teal-100 px-3 py-1 rounded-full font-medium whitespace-nowrap">
                      {exp.type}
                    </span>
                  </div>
                  <p className="text-slate-500 text-xs font-medium mb-4 flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {exp.period}
                  </p>
                  <p className="text-slate-600 text-sm leading-relaxed mb-5">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span key={tag} className="text-xs bg-white text-slate-600 border border-slate-200 px-3 py-1 rounded-lg font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block md:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
