import Link from "next/link";

export function Header() {
  return (
    <header className="flex items-center justify-between h-16 px-4 md:px-6 border-b border-gray-200 dark:border-gray-800 bg-paladin-white dark:bg-gray-950">
      <Link className="flex items-center gap-2 font-semibold" href="#">
        <img
          src="/paladin/paladin-lockup.svg"
          alt="Paladin Management Group Logo"
          className="h-7"
        />
      </Link>
      <nav className="hidden md:flex items-center gap-6">
        <Link
          className="text-sm font-medium hover:underline underline-offset-4 text-paladin-dark-blue dark:text-gray-300"
          href="#summary"
        >
          Summary
        </Link>
        <Link
          className="text-sm font-medium hover:underline underline-offset-4 text-paladin-dark-blue dark:text-gray-300"
          href="#best-practices"
        >
          Best Practices
        </Link>
        <Link
          className="text-sm font-medium hover:underline underline-offset-4 text-paladin-dark-blue dark:text-gray-300"
          href="#discovery"
        >
          Discovery
        </Link>
        <Link
          className="text-sm font-medium hover:underline underline-offset-4 text-paladin-dark-blue dark:text-gray-300"
          href="#scope"
        >
          Scope
        </Link>
        <Link
          className="text-sm font-medium hover:underline underline-offset-4 text-paladin-dark-blue dark:text-gray-300"
          href="#case-studies"
        >
          Case Studies
        </Link>
        <Link
          className="text-sm font-medium hover:underline underline-offset-4 text-paladin-dark-blue dark:text-gray-300"
          href="#estimates"
        >
          Estimates
        </Link>
      </nav>
    </header>
  );
}
