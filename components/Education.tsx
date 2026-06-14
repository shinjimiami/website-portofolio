export default function Education() {
  return (
    <section id="education" className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="text-xs font-semibold text-teal-600 uppercase tracking-widest">Education</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-slate-900">Academic Background</h2>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl p-8 border border-slate-100 hover:border-teal-100 hover:shadow-md transition-all duration-200">
            <div className="flex items-start gap-5">
              <div className="w-14 h-14 bg-teal-50 rounded-xl flex items-center justify-center flex-shrink-0 border border-teal-100">
                <svg className="w-7 h-7 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                  />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-slate-900">Institut Teknologi Bandung</h3>
                <p className="text-teal-600 font-semibold text-sm mt-1">
                  Bachelor&apos;s Degree in Information Systems and Technology
                </p>
                <span className="inline-block mt-3 text-xs bg-green-50 text-green-700 border border-green-100 px-3 py-1 rounded-full font-semibold">
                  Currently Enrolled
                </span>
                <p className="mt-4 text-slate-500 text-sm leading-relaxed">
                  Studying at one of Indonesia&apos;s most prestigious engineering institutions, focusing on information
                  systems, technology management, data, and the intersection of business and digital innovation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
