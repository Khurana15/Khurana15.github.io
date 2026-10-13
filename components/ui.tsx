import type { ReactNode } from "react";

/** Page heading — same treatment as the homepage so nothing changes scale
 *  between pages: centered title, short accent bar, full rule. */
export function PageTitle({
  children,
  lead,
}: {
  children: ReactNode;
  lead?: ReactNode;
}) {
  return (
    <>
      <div className="text-center">
        <h1 className="font-display text-[2.8rem] leading-tight sm:text-[3.4rem]">
          {children}
        </h1>
        <span
          aria-hidden
          className="mx-auto mt-4 block h-[7px] w-full max-w-md bg-accent"
        />
        {lead ? (
          <p className="mx-auto mt-5 max-w-2xl text-[1.05rem] italic text-ink-soft">
            {lead}
          </p>
        ) : null}
      </div>
      <hr className="mb-9 mt-6 border-t-2 border-accent" />
    </>
  );
}

/** Compact left-aligned section heading with a hairline rule. */
export function Section({
  title,
  children,
  id,
}: {
  title: string;
  children: ReactNode;
  id?: string;
}) {
  return (
    <section id={id} className="mt-10 first:mt-0">
      <h2 className="font-display mb-3 border-b border-rule pb-1.5 text-[1.35rem]">
        {title}
      </h2>
      {children}
    </section>
  );
}

/** Tight two-column row: year in a narrow gutter, content beside it. */
export function YearRow({
  year,
  children,
}: {
  year: string;
  children: ReactNode;
}) {
  return (
    <li className="flex flex-col gap-0.5 py-1.5 sm:flex-row sm:gap-6">
      <span className="shrink-0 text-[0.85rem] tabular-nums text-ink-faint sm:w-20 sm:pt-[0.35rem]">
        {year}
      </span>
      <div className="min-w-0 flex-1">{children}</div>
    </li>
  );
}

export function Note({ children }: { children: ReactNode }) {
  return (
    <span className="text-[0.85rem] italic"> ({children})</span>
  );
}
