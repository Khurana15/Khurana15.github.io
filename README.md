# ikhurana.com

Your academic site. Next.js, static — no WordPress, no page builder, no server.

---

## Do this first

| When | What |
|---|---|
| **Today** | Add your CV (see below). Run `npm install` then `npm run dev`, open http://localhost:3000, read every page, tell Claude what to change. |
| **Next 30 days** | Push to a public GitHub repo → turn on Pages → point ikhurana.com at it → retire WordPress. Steps below. |
| **Ongoing** | Nothing weekly. When a paper lands: edit one file, `git push`. Done. |
| **Focus** | `content/site.ts` is the whole site. Never edit the pages. |

---

## The one file you edit

**`content/site.ts`**

Everything on the site comes from it — your titles, bio, education, editorial roles, all 21 publications, courses, students, links. Change it in one place and every page updates.

To add a publication, copy an existing block and edit it:

```ts
{
  year: "2026",
  authors: "Khurana, I., & Someone, A.",
  title: "The title of the paper",
  venue: "Journal Name",
  note: "Optional — awards or recognition",
},
```

Newest goes at the top of the list.

---

## Your CV

**You need to add it.** Export your CV to PDF and save it as:

```
public/cv.pdf
```

The name must be exactly `cv.pdf`. Every CV link on the site points at `/cv.pdf` and always will — so when you update your CV, you overwrite that one file and nothing else changes. No dates in filenames, no second copy, no stale link. That was the whole problem with the old site.

---

## Running it locally

```bash
npm install     # once
npm run dev     # then open http://localhost:3000
```

To check the real build:

```bash
npm run build   # writes the finished site to out/
```

---

## Putting it online (GitHub Pages)

Once, at the start:

1. Create a **public** GitHub repo. (Free accounts can only serve Pages from public repos — fine here, the content is public anyway.)
2. Push this folder to it.
3. Repo → **Settings → Pages → Source: GitHub Actions**.
4. The included workflow (`.github/workflows/deploy.yml`) builds and publishes automatically.
5. Check the site on the `username.github.io/repo` URL it gives you. **Do not touch DNS until it looks right.**
6. Settings → Pages → **Custom domain** → `ikhurana.com`. Commit the `CNAME` file it creates.
7. At your current DNS host, point the apex domain at GitHub's four A records and add a `www` CNAME to `username.github.io`.
8. Tick **Enforce HTTPS** once the certificate issues.

After that, publishing is just:

```bash
git add -A && git commit -m "Add new paper" && git push
```

Don't delete the WordPress site until this has been live and correct for a week.

---

## What's deliberately not here

- **No separate CV page.** It was only ever a link. It's a button now.
- **No separate Contact page.** Three lines, folded into the home page.
- **No duplicated nav in the footer.**
- **No grants, awards, service, or conference lists.** The CV is the exhaustive record; the site is the front door. If you want any of these, say so — they're a new block in `content/site.ts`, not a redesign.
- **No references.** Your CV lists seven colleagues' personal emails and phone numbers. Those must never go on a public page.

## Things to check

- Course descriptions were rewritten from your old site (the original wording couldn't be copied verbatim). Read them and adjust.
- Your phone number is **off** the site. To add it, set `phone` in `content/site.ts`.
- The two "Other writing" items have no links yet — add URLs in `otherPublications` if you want them clickable.
