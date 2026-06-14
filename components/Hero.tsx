export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-teal-50 pt-20"
    >
      <div className="max-w-6xl mx-auto px-6 py-24 flex flex-col items-center text-center">
        {/* Badge */}
        <span className="inline-flex items-center gap-2 bg-teal-50 text-teal-700 text-xs font-semibold px-4 py-1.5 rounded-full border border-teal-100 mb-8 tracking-wide uppercase">
          <span className="w-1.5 h-1.5 bg-teal-500 rounded-full animate-pulse" />
          Available for opportunities
        </span>

        {/* Name */}
        <h1 className="text-5xl md:text-7xl font-bold text-slate-900 tracking-tight mb-4 leading-tight">
          Atar Ramadana
          <br />
          <span className="text-teal-500">Dermawan</span>
        </h1>

        {/* Role */}
        <p className="text-lg md:text-xl text-slate-500 font-medium mb-6">
          Business Analyst &nbsp;·&nbsp; Founder &amp; CEO &nbsp;·&nbsp; Technology Student
        </p>

        {/* Intro */}
        <p className="max-w-2xl text-slate-600 text-base md:text-lg leading-relaxed mb-10">
          I am an Information Systems and Technology undergraduate student at{" "}
          <span className="font-semibold text-slate-800">Institut Teknologi Bandung</span> with a strong interest in
          product management, business strategy, and technology-driven innovation. I enjoy working at the intersection
          of business, data, and digital product development to create practical solutions with real impact.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="#projects"
            className="px-7 py-3 bg-teal-500 hover:bg-teal-600 text-white text-sm font-semibold rounded-xl transition-all duration-200 shadow-md hover:shadow-teal-200 hover:shadow-lg"
          >
            View Projects
          </a>
          <a
            href="https://www.linkedin.com/in/atharmdh/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-7 py-3 bg-white hover:bg-slate-50 text-slate-700 text-sm font-semibold rounded-xl border border-slate-200 transition-all duration-200 shadow-sm hover:shadow-md flex items-center gap-2"
          >
            <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            Contact on LinkedIn
          </a>
        </div>

        {/* Scroll cue */}
        <div className="mt-20 animate-bounce text-slate-400">
          <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </section>
  );
}
