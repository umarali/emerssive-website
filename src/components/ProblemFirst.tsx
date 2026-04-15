export function ProblemFirst() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white border-b border-gray-100">
      <div className="max-w-5xl mx-auto">
        {/* Section eyebrow — consistent with site-wide label style */}
        <p className="text-sm text-primary font-medium uppercase tracking-wide mb-3">
          How we work
        </p>

        {/* Editorial split */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mt-10">
          {/* Left: Pull quote */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-text leading-tight mb-6">
              Problem first.<br />AI/software second.
            </h2>
            <div className="w-10 h-0.5 bg-accent rounded-full" />
          </div>

          {/* Right: Supporting text */}
          <div className="space-y-8 pt-1">
            <div className="pl-5 border-l-2 border-gray-200">
              <p className="text-base text-text-light leading-relaxed">
                We do not start with tools, trends, or generic AI demos. We start
                with <strong className="text-text font-semibold">the work that is slowing your business down.</strong>
              </p>
            </div>
            <div className="pl-5 border-l-2 border-gray-200">
              <p className="text-base text-text-light leading-relaxed">
                Inside Emerssive, we use the same approach ourselves — simplify
                the workflow, eliminate the manual work that should not exist, and
                use AI only where it improves real output.
              </p>
            </div>
            <div className="pl-5 border-l-2 border-gray-200">
              <p className="text-base text-text-light leading-relaxed">
                That is the same lens we bring to every client — whether we are
                building an AI shopping agent, modernizing a legacy platform, or
                turning a product idea into production software.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
