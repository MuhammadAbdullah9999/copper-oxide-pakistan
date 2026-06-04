import Link from 'next/link';
import Script from 'next/script';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { OptimizedImage } from '@/components/ui/optimized-image';

type ArticleSection = {
  heading: string;
  body: string[];
  bullets?: string[];
  note?: {
    title: string;
    body: string;
  };
};

type FAQ = {
  question: string;
  answer: string;
};

type ArticleImage = {
  src: string;
  alt: string;
  caption: string;
};

type ChemicalBlogArticleProps = {
  slug: string;
  title: string;
  description: string;
  category: string;
  datePublished: string;
  dateLabel: string;
  readTime: string;
  heroImage: string;
  heroAlt: string;
  accent: 'amber' | 'blue' | 'green' | 'slate';
  intro: string[];
  sections: ArticleSection[];
  secondaryImages?: ArticleImage[];
  faq: FAQ[];
  productLink?: {
    href: string;
    label: string;
  };
  checklistTitle?: string;
  checklistItems?: string[];
  conclusion?: string[];
};

const accentClasses = {
  amber: {
    badge: 'bg-amber-600',
    tag: 'bg-amber-100 text-amber-800',
    link: 'text-amber-700',
    note: 'bg-amber-50 border-amber-500 text-amber-900',
  },
  blue: {
    badge: 'bg-blue-600',
    tag: 'bg-blue-100 text-blue-800',
    link: 'text-blue-700',
    note: 'bg-blue-50 border-blue-500 text-blue-900',
  },
  green: {
    badge: 'bg-green-700',
    tag: 'bg-green-100 text-green-800',
    link: 'text-green-700',
    note: 'bg-green-50 border-green-500 text-green-900',
  },
  slate: {
    badge: 'bg-slate-700',
    tag: 'bg-slate-100 text-slate-800',
    link: 'text-slate-700',
    note: 'bg-slate-50 border-slate-500 text-slate-900',
  },
};

export default function ChemicalBlogArticle({
  slug,
  title,
  description,
  category,
  datePublished,
  dateLabel,
  readTime,
  heroImage,
  heroAlt,
  accent,
  intro,
  sections,
  secondaryImages = [],
  faq,
  productLink,
  checklistTitle = 'Buyer Checklist',
  checklistItems = [
    'Request a current Certificate of Analysis and Safety Data Sheet.',
    'Confirm assay, impurity limits, moisture level, particle size, and packaging size.',
    'Ask whether the grade matches your use: ceramic, lab, agriculture, electroplating, or general industrial.',
    'Run a small production trial before scaling to full batch use.',
  ],
  conclusion = [
    'The best chemical purchase is not only about price per kilogram. It is about purity, consistency, documentation, and choosing the grade that matches your process. Sulman Traders supplies industrial chemicals across Pakistan with practical support for manufacturers, traders, laboratories, and production teams.',
  ],
}: ChemicalBlogArticleProps) {
  const styles = accentClasses[accent];
  const canonical = `https://www.sulmantraders.com/blog/${slug}`;

  return (
    <div className="flex min-h-screen flex-col">
      <Script id={`${slug}-schema`} type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          mainEntityOfPage: { '@type': 'WebPage', '@id': canonical },
          headline: title,
          description,
          image: [
            `https://www.sulmantraders.com${heroImage}`,
            ...secondaryImages.map((image) => `https://www.sulmantraders.com${image.src}`),
          ],
          author: { '@type': 'Person', name: 'Muhammad Salman' },
          publisher: {
            '@type': 'Organization',
            name: 'Sulman Traders',
            logo: {
              '@type': 'ImageObject',
              url: 'https://www.sulmantraders.com/logo.png',
            },
          },
          datePublished,
          dateModified: datePublished,
          mainEntity: faq.map((item) => ({
            '@type': 'Question',
            name: item.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: item.answer,
            },
          })),
        })}
      </Script>

      <Header />
      <main className="flex-1 bg-gray-50">
        <div className="relative h-96 overflow-hidden">
          <OptimizedImage
            src={heroImage}
            alt={heroAlt}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gray-950 opacity-55" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="container px-4 text-center">
              <span className={`mb-4 inline-block rounded-full px-3 py-1 text-sm font-semibold text-white ${styles.badge}`}>
                {category}
              </span>
              <h1 className="mx-auto mb-4 max-w-4xl text-4xl font-bold leading-tight text-white md:text-5xl">
                {title}
              </h1>
              <p className="mx-auto max-w-3xl text-xl text-gray-200">{description}</p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <article className="mx-auto max-w-4xl overflow-hidden rounded-xl bg-white shadow-md">
            <div className="p-6 md:p-10">
              <div className="mb-8 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-gray-500">
                <span>
                  By <strong className="text-gray-700">Muhammad Salman</strong>
                </span>
                <span>|</span>
                <time dateTime={datePublished}>{dateLabel}</time>
                <span>|</span>
                <span>{readTime}</span>
                <span>|</span>
                <span className={`rounded-full px-2 py-0.5 font-medium ${styles.tag}`}>{category}</span>
              </div>

              <div className="prose prose-lg max-w-none">
                {intro.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}

                <div className="my-8 overflow-hidden rounded-xl shadow-sm">
                  <div className="relative h-72 w-full">
                    <OptimizedImage
                      src={heroImage}
                      alt={heroAlt}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="bg-gray-50 py-2 text-center text-sm italic text-gray-500">
                    {heroAlt}
                  </p>
                </div>

                {sections.map((section, index) => (
                  <section key={section.heading}>
                    <h2 className="mt-10 mb-4 text-2xl font-bold text-gray-800">
                      {index + 1}. {section.heading}
                    </h2>
                    {section.body.map((paragraph) => (
                      <p key={paragraph} className="mt-4">
                        {paragraph}
                      </p>
                    ))}
                    {section.bullets && (
                      <ul className="mt-3 list-disc space-y-1 pl-6">
                        {section.bullets.map((bullet) => (
                          <li key={bullet}>{bullet}</li>
                        ))}
                      </ul>
                    )}
                    {section.note && (
                      <div className={`my-6 rounded-r-lg border-l-4 p-4 ${styles.note}`}>
                        <p className="font-semibold">{section.note.title}</p>
                        <p className="mt-1">{section.note.body}</p>
                      </div>
                    )}
                    {index === 1 && secondaryImages.length > 0 && (
                      <div className="my-8 overflow-hidden rounded-xl shadow-sm">
                        <div className="relative h-72 w-full">
                          <OptimizedImage
                            src={secondaryImages[0].src}
                            alt={secondaryImages[0].alt}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <p className="bg-gray-50 py-2 text-center text-sm italic text-gray-500">
                          {secondaryImages[0].caption}
                        </p>
                      </div>
                    )}
                  </section>
                ))}

                <div className="mt-10 rounded-xl border border-gray-200 bg-gray-50 p-6">
                  <h2 className="mb-3 text-xl font-bold text-gray-900">{checklistTitle}</h2>
                  <ul className="list-disc space-y-2 pl-6 text-gray-700">
                    {checklistItems.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>

                <h2 className="mt-10 mb-4 text-2xl font-bold text-gray-800">Conclusion</h2>
                {conclusion.map((paragraph) => (
                  <p key={paragraph} className="mt-4">
                    {paragraph}
                  </p>
                ))}
                <p className="mt-4">
                  {productLink ? (
                    <>
                      Visit our{' '}
                      <Link href={productLink.href} className={`${styles.link} underline hover:no-underline`}>
                        {productLink.label}
                      </Link>{' '}
                      or{' '}
                    </>
                  ) : null}
                  <Link href="/contact" className={`${styles.link} underline hover:no-underline`}>
                    contact us
                  </Link>{' '}
                  for availability, pricing, packaging, and technical documents.
                </p>

                <div className="mt-12 rounded-xl bg-gray-50 p-6">
                  <h3 className="mb-6 text-2xl font-bold">Frequently Asked Questions</h3>
                  <div itemScope itemType="https://schema.org/FAQPage">
                    {faq.map((item) => (
                      <div
                        key={item.question}
                        itemScope
                        itemProp="mainEntity"
                        itemType="https://schema.org/Question"
                        className="mb-6 last:mb-0"
                      >
                        <h4 itemProp="name" className="text-lg font-semibold">
                          {item.question}
                        </h4>
                        <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                          <div itemProp="text" className="mt-2 text-gray-700">
                            {item.answer}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
}
