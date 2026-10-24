import type { Metadata } from "next";
import { Note, PageTitle, Section, YearRow } from "@/components/ui";
import type { Article } from "@/content/site";
import {
  articles,
  bookChapters,
  inProgress,
  otherPublications,
  researchAreas,
  researchStatement,
  reviseAndResubmit,
  underReview,
} from "@/content/site";

export const metadata: Metadata = {
  title: "Research",
  description:
    "Peer-reviewed articles, book chapters, and work in progress on entrepreneurship, institutions, and policy.",
};

function Citation({ a }: { a: Article }) {
  return (
    <p className="font-cite text-[0.95rem] leading-snug">
      {a.title}. <span className="text-ink-soft">{a.authors}</span>,{" "}
      <span className="italic text-ink-soft">{a.venue}</span>.
      {a.note ? <Note>{a.note}</Note> : null}
    </p>
  );
}

export default function Research() {
  return (
    <div className="mx-auto max-w-3xl">
      <PageTitle lead={researchAreas.join(" \u00b7 ")}>Research</PageTitle>

      <p className="mb-10 text-ink-soft">{researchStatement}</p>

      <Section title="Peer-reviewed articles">
        <ul>
          {articles.map((a) => (
            <YearRow key={a.title} year={a.year}>
              <Citation a={a} />
            </YearRow>
          ))}
        </ul>
      </Section>

      <Section title="Book chapters">
        <ul>
          {bookChapters.map((a) => (
            <YearRow key={a.title} year={a.year}>
              <Citation a={a} />
            </YearRow>
          ))}
        </ul>
      </Section>

      <Section title="Revise and resubmit">
        <ul>
          {reviseAndResubmit.map((m) => (
            <li key={m.authors + m.venue} className="py-2">
              <p className="font-cite text-[0.95rem] leading-snug">
                {m.authors}, <span className="italic">{m.venue}</span>.{" "}
                <span className="text-ink-faint">{m.status}</span>
              </p>
            </li>
          ))}
        </ul>
      </Section>

      <Section title="Under review">
        <ul>
          {underReview.map((m) => (
            <li key={m.authors + m.venue} className="py-2">
              <p className="font-cite text-[0.95rem] leading-snug">
                {m.authors}, <span className="italic">{m.venue}</span>.
              </p>
            </li>
          ))}
        </ul>
        <p className="mt-2 text-[0.82rem] italic text-ink-faint">
          Titles withheld while under review and revision.
        </p>
      </Section>

      <Section title="Work in progress">
        <ul>
          {inProgress.map((p) => (
            <li key={p.title} className="py-2">
              <p className="font-cite text-[0.95rem] leading-snug">
                {p.title}{" "}
                <span className="text-ink-soft">{p.authors}</span>
                {"note" in p && p.note ? <Note>{p.note}</Note> : null}
              </p>
            </li>
          ))}
        </ul>
      </Section>

      <Section title="Other writing">
        <ul>
          {otherPublications.map((p) => (
            <YearRow key={p.title} year={p.year}>
              <p className="font-cite text-[0.95rem] leading-snug">
                {p.href ? (
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noopener"
                    className="underline decoration-rule underline-offset-4 hover:text-ink"
                  >
                    {p.title}
                  </a>
                ) : (
                  p.title
                )}
                . <span className="text-ink-soft">{p.venue}</span>
              </p>
            </YearRow>
          ))}
        </ul>
      </Section>
    </div>
  );
}
