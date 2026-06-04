# SEO and Lead Capture Plan

## SEO pages added

The site now has dedicated long-form pages for the main buyer searches:

- `/blog/copper-carbonate-uses-pakistan`
- `/blog/copper-oxide-uses-buying-guide-pakistan`
- `/blog/copper-sulphate-uses-agriculture-industry`
- `/blog/silver-chloride-uses-photography-lab-industry`

These pages target direct product searches, use-case searches, Pakistan supplier intent, and common spelling variants such as `copper sulfate`, `copper carboante`, `xopper sulphatee`, and `sivler chloride`.

## Image strategy

- Existing real product images are reused for copper oxide, copper sulphate, silver chloride, and silver nitrate.
- A new AI-generated product-style bitmap was added at `public/copper-carbonate-powder.png` for copper carbonate.
- Avoid placeholders on SEO pages. Product/application images should show real powder, crystals, packaging, lab use, or industrial use.

## Lead capture strategy

Do not try to silently collect phone numbers, email addresses, age, or identity. A website cannot reliably know those details unless a visitor submits them, and using hidden collection for cold outreach creates trust and compliance risk.

Use this analytics approach:

- Google Analytics for page views, traffic source, device, city/country-level location, and product-page interest.
- Internal visitor intelligence endpoint for page URL, referrer, UTM tags, browser language, device type, platform, screen/viewport size, timezone, approximate country/region/city headers, and user agent.
- Contact form for submitted name, company, email, phone/WhatsApp, product interest, and message.
- Consent checkbox before using submitted contact information for quote follow-ups or relevant product marketing.
- Export Formspree submissions to Google Sheets using Formspree integrations, Zapier, Make, or a Google Apps Script webhook.

## Google Sheets setup

The code already sends inquiries through Formspree form ID `xldbdaoy`. To save leads into Google Sheets:

1. Open the Formspree dashboard for form `xldbdaoy`.
2. Add a Google Sheets integration if available on the plan.
3. If direct Sheets integration is not available, connect Formspree to Google Sheets through Zapier or Make.
4. Suggested columns: submitted_at, name, company, email, phone, product, subject, message, marketingConsent, source_page, country, city.
5. For `source_page`, add a hidden field later if you want page-level attribution inside the form submission.

## Next SEO improvements

- Add internal links from product pages to the matching blogs and from blogs back to product/contact pages.
- Create comparison articles such as `Copper Oxide vs Copper Carbonate` and `Copper Sulphate vs Copper Oxide`.
- Add product FAQ sections to `/products/copper-carbonate`, `/products/silver-chloride`, `/products/copper-sulphate`, and `/products/copper-oxide`.
- Submit the generated sitemap in Google Search Console after deployment.
- Upgrade Next.js to a patched release because npm warns that `15.2.6` has a security advisory.

## CTR improvement plan

Search Console showed low CTR for formula queries such as `agcl`. These searches need commercial, formula-first snippets, not broad educational titles.

Priority title pattern:

- `{Formula} {Chemical Name} Supplier Pakistan | Purity / Price / COA`
- `{Chemical Name} {Formula} Supplier Pakistan | Uses, Price & COA`

Use snippet language that gives buyers a reason to click:

- `Buy`
- `Supplier Pakistan`
- `COA/SDS available`
- `high-purity`
- `bulk supply`
- `request a quote`
- the chemical formula, e.g. `AgCl`, `CuSO4`, `CuO`, `AgNO3`

Updated metadata targets:

- `/products/silver-chloride`: `AgCl Silver Chloride Supplier Pakistan | 99.9% Pure Powder`
- `/blog/silver-chloride-uses-photography-lab-industry`: `AgCl Silver Chloride Supplier Pakistan | Uses, Price & COA`
- `/products/copper-sulphate`: `Copper Sulphate CuSO4 Supplier Pakistan | Blue Vitriol Price`
- `/products/copper-oxide`: `Copper Oxide CuO Supplier Pakistan | 99.9% Black Powder`
- `/products/copper-carbonate`: `Copper Carbonate Supplier Pakistan | Basic Copper Carbonate Powder`

After deployment, use Google Search Console Performance with the 28-day filter. Sort queries by impressions, then improve pages where position is under 15 and CTR is weak.

## Google Analytics diagnosis

The GA4 measurement ID is `G-5MBRGK5MJX`. Previously the site had two problems:

- The direct GA tag only loaded when `NEXT_PUBLIC_GA_MEASUREMENT_ID` existed, so production could show no data if the environment variable was missing.
- `G-5MBRGK5MJX` was also used as a Google Tag Manager container ID in `gtm.js?id=...`, but `G-...` is a GA4 measurement ID, not a `GTM-...` container ID.

The site now loads the correct GA4 script:

- `https://www.googletagmanager.com/gtag/js?id=G-5MBRGK5MJX`

It also uses consent mode defaults with analytics storage granted and ad storage/personalization denied.

The internal visitor intelligence endpoint can save to Google Sheets when `GOOGLE_SHEETS_WEBHOOK_URL` is configured. It does not collect passwords, hidden credentials, phone, email, or identity unless the visitor submits a form.
