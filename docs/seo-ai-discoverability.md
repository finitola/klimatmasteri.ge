# AI Search and Technical SEO Notes

## 1. Relevant files

- `src/pages/llms.txt.ts` generates `/llms.txt` from the central business and page data.
- `src/pages/llms-full.txt.ts` generates `/llms-full.txt` from the service data.
- `src/pages/robots.txt.ts` defines crawler access rules.
- `astro.config.ts` configures the sitemap integration and localized URLs.
- `src/data/seo.ts` generates the page-level structured data.
- `src/data/seo-copy.ts` holds localized search-result titles and descriptions.
- `src/data/site.ts` holds page routes, labels, and summaries.
- `src/data/service-details.ts` holds the service descriptions used by the pages and `/llms-full.txt`.

## 2. Structured data

The site dynamically emits:
- **`Organization`**: Includes the business name, phone, service area, hours, logo, and website URL. No street address is published because one has not been provided.
- **`WebSite`**: Points back to the main domain and primary language.
- **`WebPage`**: Ties every URL back to the main entity.
- **`BreadcrumbList`**: Automatically defines hierarchy for every internal page.
- **`Service`**: Each service page includes a localized description and a provider relation pointing to the main business.
- **`FAQPage`**: The FAQ page includes its localized questions and answers.

## 3. Plain-text summaries

These routes summarize business and service information for tools that read them. The content is generated from project data and should be reviewed whenever that data changes.

- **`/llms.txt`**: Contains top-level business facts (Hours, Locations, Phone) and a markdown list of all important pages and their descriptions.
- **`/llms-full.txt`**: Contains service descriptions and scope details generated from `service-details.ts`.

## 4. robots.txt and sitemap

- The `robots.txt` explicitly allows `Googlebot`, `Bingbot`, `OAI-SearchBot`, `ChatGPT-User`, and `PerplexityBot`.
- It explicitly opts out of scraping models: `GPTBot` and `Google-Extended`.
- The sitemap is dynamically generated using Astro's `@astrojs/sitemap` and ignores non-indexable routes like English licensing questions.

## 5. Localization

- The primary language `lang="ka"` is enforced.
- OpenGraph locale `ka_GE` is set.
- Georgian is the default locale, with English routes under `/en/`.

## 6. Maintenance

- **Data edits**: To update search-result titles and descriptions, modify `src/data/seo-copy.ts`. Page headings, card summaries, and URLs live in `src/data/site.ts`; service details live in `src/data/service-details.ts`. The HTML and JSON-LD metadata update automatically.
- When updating public business profiles, confirm the business name and phone number against `src/data/business.ts`.
- The generated sitemap is available at `https://klimatmasteri.ge/sitemap-0.xml` for submission to Google Search Console.
