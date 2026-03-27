import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-50 font-sans selection:bg-amber-500/30">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-neutral-950/70 backdrop-blur-md">
        <div className="mx-auto px-6 h-14 flex items-center justify-between">
          <span className="tracking-tight text-white hover:text-amber-400 transition-colors cursor-pointer">UNKNOWN</span>
          <div className="flex items-center gap-3">
            <Link
              href="/sign-in"
              className="rounded-full px-4 py-1 text-sm border border-theme-fg text-white hover:opacity-80 transition-opacity"
            >
              Sign In
            </Link>
            <Link
              href="/sign-up"
              className="px-4 py-1 rounded-full bg-theme-fg text-neutral-950 text-sm  hover:bg-neutral-200 transition-colors shadow-sm"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="relative pt-32 pb-16 min-h-screen flex flex-col overflow-hidden">
        <div className="px-6 space-y-8 relative z-10 w-full flex flex-col">
          <div className=" w-fit inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-950 border border-neutral-800 text-xs font-medium text-amber-400 mb-2 hover:border-amber-400/30 hover:bg-neutral-800 transition-colors cursor-default">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
            </span>
            Meet the modern standard
          </div>

          <h1 className="text-xl sm:text-2xl md:text-3xl tracking-tight text-white mb-6 leading-[1.1]">
            Lorem ipsum dolor sit amet consectetur.
          </h1>

          <p className="max-w-md text-sm md:text-base text-neutral-400 leading-relaxed font-light">
            A beautiful, clean, and modern platform designed to help you ship faster. Join thousand of developers creating stunning applications today.
          </p>
        </div>
      </main>
    </div>
  )
}
