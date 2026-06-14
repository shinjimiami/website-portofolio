const skills = [
  { name: "JavaScript", icon: "⚡", category: "Technical" },
  { name: "C", icon: "🔧", category: "Technical" },
  { name: "C++", icon: "🔧", category: "Technical" },
  { name: "Data Analysis", icon: "📊", category: "Analytics" },
  { name: "AI Development", icon: "🤖", category: "Analytics" },
  { name: "Business Analysis", icon: "📋", category: "Business" },
  { name: "Product Management", icon: "🎯", category: "Business" },
  { name: "Business Strategy", icon: "🚀", category: "Business" },
];

const categoryColors: Record<string, string> = {
  Technical: "bg-blue-50 text-blue-700 border-blue-100",
  Analytics: "bg-purple-50 text-purple-700 border-purple-100",
  Business: "bg-teal-50 text-teal-700 border-teal-100",
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="text-xs font-semibold text-teal-600 uppercase tracking-widest">Skills</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-slate-900">What I work with</h2>
          <p className="mt-4 text-slate-500 max-w-xl mx-auto">
            A blend of technical, analytical, and business skills that I apply to solve real-world problems.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className={`flex flex-col items-center gap-3 p-6 rounded-2xl border ${categoryColors[skill.category]} transition-all duration-200 hover:-translate-y-1 hover:shadow-md cursor-default`}
            >
              <span className="text-2xl">{skill.icon}</span>
              <span className="text-sm font-semibold text-center leading-tight">{skill.name}</span>
              <span className="text-xs opacity-60 font-medium">{skill.category}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
