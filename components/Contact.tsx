export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          <span className="text-xs font-semibold text-teal-600 uppercase tracking-widest">Contact</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-slate-900">Let&apos;s Connect</h2>
          <p className="mt-4 text-slate-500 text-lg leading-relaxed">
            Whether you want to discuss a project, explore collaboration opportunities, or just say hello — feel free to
            reach out on LinkedIn.
          </p>

          <div className="mt-10 bg-slate-50 rounded-2xl p-8 border border-slate-100">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </div>
              <div className="text-left">
                <p className="text-sm text-slate-500 font-medium">Connect on</p>
                <p className="text-lg font-bold text-slate-900">LinkedIn</p>
              </div>
            </div>

            <a
              href="https://www.linkedin.com/in/atharmdh/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 w-full justify-center px-7 py-3.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-xl transition-all duration-200 shadow-md hover:shadow-blue-200 hover:shadow-lg"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              View LinkedIn Profile
            </a>

            <p className="mt-4 text-xs text-slate-400">
              Athar Ramadhana Dermawan · Yogyakarta, Indonesia
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
