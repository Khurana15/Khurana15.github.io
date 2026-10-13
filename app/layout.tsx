import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import { person, site } from "@/content/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${person.name}`,
    template: `%s | ${person.name}`,
  },
  description: site.description,
  openGraph: {
    title: person.name,
    description: site.description,
    url: site.url,
    type: "profile",
  },
};

const nav = [
  { href: "/", label: "About" },
  { href: "/research", label: "Research" },
  { href: "/teaching", label: "Teaching" },
  { href: "/cv", label: "CV" },
];

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,300..500;1,6..72,300..500&family=Karla:wght@400;500;600&display=swap"
        />
      </head>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-surface focus:px-3 focus:py-2"
        >
          Skip to content
        </a>

        <div className="mx-auto flex min-h-screen w-full max-w-6xl flex-col px-6 sm:px-10">
          <header className="flex flex-col gap-3 py-7 sm:flex-row sm:items-baseline sm:justify-between">
            <Link
              href="/"
              className="font-display text-[1.3rem] hover:text-ink-soft"
            >
              {person.name}
            </Link>
            <nav className="flex flex-wrap gap-x-7 gap-y-2 text-[0.92rem] text-ink-soft">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="hover:text-ink"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </header>

          <main id="main" className="flex-1 pb-20 pt-6 sm:pt-10">
            {children}
          </main>

          <footer className="border-t border-rule py-7 text-[0.85rem] text-ink-faint">
            <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
              <span>
                © {new Date().getFullYear()} {person.name}
              </span>
              <a href={`mailto:${person.email}`} className="hover:text-ink">
                {person.email}
              </a>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
