import type { Metadata } from "next";
import { PageTitle, Section, YearRow } from "@/components/ui";
import {
  currentCourses,
  previousTeaching,
  teachingPhilosophy,
} from "@/content/site";

export const metadata: Metadata = {
  title: "Teaching",
  description:
    "Courses in entrepreneurship, strategy, economics, and accounting at Hampden-Sydney College.",
};

export default function Teaching() {
  return (
    <div className="mx-auto max-w-3xl">
      <PageTitle lead={teachingPhilosophy.join(" ")}>Teaching</PageTitle>

      <Section title="Courses at Hampden-Sydney College">
        <ul className="space-y-3">
          {currentCourses.map((c) => (
            <li key={c.name}>
              <p className="font-cite text-[1.02rem] font-medium">
                {c.name}
                {c.note ? (
                  <span className="text-[0.82rem] italic text-ink-faint">
                    {" "}
                    ({c.note})
                  </span>
                ) : null}
              </p>
              <p className="text-[0.95rem] text-ink-soft">{c.description}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section title="Previously taught">
        <ul>
          {previousTeaching.map((p) => (
            <YearRow key={p.school} year={p.years}>
              <p className="text-[0.98rem]">{p.school}</p>
              <p className="text-[0.9rem] text-ink-faint">
                {p.courses.join(" · ")}
              </p>
            </YearRow>
          ))}
        </ul>
      </Section>
    </div>
  );
}
