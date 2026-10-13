import type { Metadata } from "next";
import { PageTitle } from "@/components/ui";
import { person } from "@/content/site";

export const metadata: Metadata = {
  title: "CV",
  description:
    "Curriculum vitae for Indu Khurana: appointments, publications, grants, service, and teaching.",
};

export default function CV() {
  return (
    <>
      <PageTitle lead="Appointments, publications, grants, editorial and professional service, teaching, and student mentoring.">
        Curriculum Vitae
      </PageTitle>

      <div className="mb-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-[0.92rem]">
        <a
          href={person.cv}
          target="_blank"
          rel="noopener"
          className="rounded-full bg-accent px-6 py-2.5 font-medium text-on-accent transition-opacity hover:opacity-85"
        >
          Download PDF
        </a>
        <span className="text-ink-faint">Last updated September 2026</span>
      </div>

      {/* The PDF itself. Browsers that can't display it inline show the
          fallback below, so the download link above is always the fallback. */}
      <object
        data={person.cv}
        type="application/pdf"
        className="h-[80vh] min-h-[480px] w-full border border-rule"
        aria-label="Curriculum vitae"
      >
        <div className="p-8 text-center text-ink-soft">
          <p>Your browser can’t display the PDF here.</p>
          <p className="mt-2">
            <a
              href={person.cv}
              className="underline decoration-rule underline-offset-4 hover:text-ink"
            >
              Download the CV instead
            </a>
          </p>
        </div>
      </object>
    </>
  );
}
