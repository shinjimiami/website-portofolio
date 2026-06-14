const achievements = [
  {
    title: "Speaker of OSKM ITB 2025 Class",
    issuer: "OSKM ITB",
    date: "July 2025",
    association: "Institut Teknologi Bandung",
    description:
      "Selected as a speaker for the OSKM ITB 2025 orientation class, contributing to the education and development of new students at Institut Teknologi Bandung.",
    icon: "🎤",
    color: "from-blue-50 to-indigo-50 border-blue-100",
    badge: "bg-blue-50 text-blue-700 border-blue-100",
  },
  {
    title: "Live Trading Competition — 5th Place",
    issuer: "BNI Sekuritas",
    date: "August 2025",
    association: "Institut Teknologi Bandung",
    description:
      "Achieved 5th place in the Live Trading Competition organized by BNI Sekuritas, demonstrating strong analytical skills and market strategy.",
    icon: "🏆",
    color: "from-amber-50 to-orange-50 border-amber-100",
    badge: "bg-amber-50 text-amber-700 border-amber-100",
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="text-xs font-semibold text-teal-600 uppercase tracking-widest">Achievements</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-slate-900">Recognition &amp; Awards</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {achievements.map((a) => (
            <div
              key={a.title}
              className={`bg-gradient-to-br ${a.color} border rounded-2xl p-7 hover:shadow-md transition-all duration-200 hover:-translate-y-0.5`}
            >
              <div className="flex items-start gap-4">
                <span className="text-3xl flex-shrink-0">{a.icon}</span>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-slate-900 leading-snug">{a.title}</h3>
                  <p className="text-sm font-semibold text-slate-600 mt-1">Issued by {a.issuer}</p>

                  <div className="flex flex-wrap gap-2 mt-4">
                    <span className={`text-xs px-3 py-1 rounded-full border font-medium ${a.badge}`}>{a.date}</span>
                    <span className="text-xs bg-slate-100 text-slate-600 border border-slate-200 px-3 py-1 rounded-full font-medium">
                      {a.association}
                    </span>
                  </div>

                  <p className="mt-4 text-slate-600 text-sm leading-relaxed">{a.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
