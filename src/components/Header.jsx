import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-[#1f2937] sticky top-0 z-10 py-4">
      <div className="mx-auto max-w-7xl px-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img
            src="github-profile.png"
            alt="Profile Picture"
            className="h-17 w-17 rounded-full object-cover"
          />
          <div>
            <h1 className="text-2xl font-bold">
              <Link
                href="/"
                className="text-[#ff00ff] hover:text-[#f8f8f8] transition-colors duration-200"
              >
                Nate Perry
              </Link>
            </h1>
            <p className="text-[#00ff00]">Software Engineer</p>
          </div>
        </div>
        <nav className="flex gap-4">
          {[
            "About",
            "Skills",
            "Experience",
            "Projects",
            "Education",
            "Contact",
          ].map((section) => (
            <Link
              key={section}
              href={`#${section.toLowerCase()}`}
              className="text-[#ffff00] hover:text-[#f8f8f8] transition-colors duration-200"
            >
              {section}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
