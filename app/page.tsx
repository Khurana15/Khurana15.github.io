import { bio, links, person } from "@/content/site";

export default function Home() {
  return (
    <>
      {/* Name, wide bar, rule — then a full-width band holding photo and bio. */}
      <div className="text-center">
        <h1 className="font-display text-[2.8rem] leading-tight sm:text-[3.4rem]">
          {person.name}, {person.credential}
        </h1>
        <span
          aria-hidden
          className="mx-auto mt-4 block h-[7px] w-full max-w-md bg-accent"
        />
      </div>

      <hr className="mt-6 border-t-2 border-accent" />

      <div className="full-bleed mt-0 bg-band py-10 sm:py-12">
        {/* The photo keeps its own proportions. The bio's line spacing and
            paragraph gaps are set so the text column lands level with the
            photo instead of the photo being cropped to fit. */}
        <div className="grid items-start gap-6 sm:gap-9 md:grid-cols-[18rem_1fr]">
          {person.photo ? (
            /* Natural proportions — never cropped or stretched. */
            /* eslint-disable-next-line @next/next/no-img-element */
            <img
              src={person.photo}
              alt={person.name}
              className="w-full max-w-[18rem]"
            />
          ) : null}

          <div className="space-y-7 text-[0.98rem] leading-[1.9] text-ink-soft">
            {bio.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>

      <hr className="border-t-2 border-accent" />

      <div className="mt-8 flex flex-col items-center gap-3 text-center">
        <a
          href={`mailto:${person.email}`}
          className="underline decoration-rule underline-offset-4 hover:text-ink-faint"
        >
          {person.email}
        </a>
        <ul className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-[0.9rem] text-ink-faint">
          {links.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                target="_blank"
                rel="noopener"
                className="underline decoration-rule underline-offset-4 hover:text-ink"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <p className="text-[0.9rem] text-ink-faint">
          {person.office}
          {person.phone ? <> · {person.phone}</> : null}
        </p>
      </div>
    </>
  );
}
