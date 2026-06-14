const interests = [
  "Business Analysis",
  "Product Management",
  "Strategic Business Development",
  "Data Analytics",
  "AI Development",
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <span className="text-xs font-semibold text-teal-600 uppercase tracking-widest">About Me</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-slate-900 leading-tight mb-6">
              Building at the intersection of business &amp; technology
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              I am currently pursuing a Bachelor&apos;s Degree in{" "}
              <span className="font-semibold text-slate-800">Information Systems and Technology</span> at Institut
              Teknologi Bandung — one of Indonesia&apos;s leading engineering universities.
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">
              Beyond academics, I serve as the{" "}
              <span className="font-semibold text-slate-800">Founder &amp; CEO of PT Pilar Agrosinergi Nusantara</span>
              , an agribusiness-oriented company where I lead strategic planning, business development, and digital
              initiatives.
            </p>
            <p className="text-slate-600 leading-relaxed">
              I thrive in environments where data meets strategy and technology meets real-world impact. My goal is to
              build solutions that are not only technically sound but also commercially meaningful.
            </p>
          </div>

          {/* Interests */}
          <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
            <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-widest mb-6">Areas of Interest</h3>
            <ul className="space-y-3">
              {interests.map((item) => (
                <li key={item} className="flex items-center gap-3 text-slate-700 font-medium">
                  <span className="w-2 h-2 bg-teal-400 rounded-full flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-8 pt-8 border-t border-slate-200">
              <div className="flex items-center gap-3 text-slate-600 text-sm">
                <svg className="w-4 h-4 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Yogyakarta, Indonesia
              </div>
              <div className="flex items-center gap-3 text-slate-600 text-sm mt-3">
                <svg className="w-4 h-4 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                  />
                </svg>
                Institut Teknologi Bandung
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
