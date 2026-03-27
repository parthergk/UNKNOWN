import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-bg text-text-primary font-sans selection:bg-(--color-accent)/30">
      
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-bg/70 backdrop-blur-md">
        <div className="mx-auto px-6 h-14 flex items-center justify-between">
          
          <span className="tracking-tight text-text-primary hover:text-(--color-accent) transition-colors cursor-pointer">
            UNKNOWN
          </span>

          <div className="flex items-center gap-3">
            
            <Link
              href="/sign-in"
              className="rounded-full px-4 py-1 text-sm border border-border-default text-text-primary hover:opacity-80 transition-opacity"
            >
              Sign In
            </Link>

            <Link
              href="/sign-up"
              className="px-4 py-1 rounded-full bg-text-primary text-bg text-sm hover:opacity-90 transition-colors shadow-sm"
            >
              Sign Up
            </Link>

          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="relative pt-32 pb-16 min-h-screen flex flex-col overflow-hidden">
        <div className="px-6 space-y-8 relative z-10 w-full flex flex-col">

          {/* Badge */}
          <div className="w-fit inline-flex items-center gap-2 px-3 py-1 rounded-full bg-bg border border-border-default text-xs font-medium text-(--color-accent) mb-2 hover:border-(--color-accent)/30 hover:bg-surface transition-colors cursor-default">
            
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-(--color-accent) opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-(--color-accent)"></span>
            </span>

            Meet the modern standard
          </div>

          {/* Heading */}
          <h1 className="text-xl sm:text-2xl md:text-3xl tracking-tight text-text-primary mb-6 leading-[1.1]">
            Lorem ipsum dolor sit amet consectetur.
          </h1>

          {/* Paragraph */}
          <p className="max-w-md text-sm md:text-base text-text-secondary leading-relaxed font-light">
            A beautiful, clean, and modern platform designed to help you ship faster. Join thousand of developers creating stunning applications today.
          </p>

        </div>
      </main>
    </div>
  )
}