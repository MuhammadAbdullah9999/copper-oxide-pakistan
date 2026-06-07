import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ChemicalBlogArticle from '@/components/sections/chemical-blog-article';
import { adsenseBlogArticles } from '@/lib/adsense-blog-articles';

type BlogArticlePageProps = {
  params: Promise<{ slug: string }>;
};

function getArticle(slug: string) {
  return adsenseBlogArticles.find((article) => article.slug === slug);
}

export function generateStaticParams() {
  return adsenseBlogArticles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: BlogArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);

  if (!article) {
    return {
      title: 'Article Not Found',
    };
  }

  return {
    title: article.title,
    description: article.description,
    keywords: article.keywords,
    alternates: {
      canonical: `https://www.sulmantraders.com/blog/${article.slug}`,
    },
    openGraph: {
      title: article.title,
      description: article.description,
      url: `https://www.sulmantraders.com/blog/${article.slug}`,
      images: [
        {
          url: `https://www.sulmantraders.com${article.heroImage}`,
          width: 1200,
          height: 630,
          alt: article.heroAlt,
        },
      ],
      type: 'article',
      publishedTime: article.datePublished,
      authors: [article.author],
      siteName: 'Sulman Traders',
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.description,
      images: [`https://www.sulmantraders.com${article.heroImage}`],
    },
  };
}

export default async function BlogArticlePage({ params }: BlogArticlePageProps) {
  const { slug } = await params;
  const article = getArticle(slug);

  if (!article) notFound();

  return (
    <ChemicalBlogArticle
      slug={article.slug}
      title={article.title}
      description={article.description}
      category={article.category}
      datePublished={article.datePublished}
      dateLabel={article.dateLabel}
      readTime={article.readTime}
      heroImage={article.heroImage}
      heroAlt={article.heroAlt}
      accent={article.accent}
      intro={article.intro}
      sections={article.sections}
      secondaryImages={article.secondaryImages}
      faq={article.faq}
      productLink={article.productLink}
      checklistTitle={article.checklistTitle}
      checklistItems={article.checklistItems}
      conclusion={article.conclusion}
    />
  );
}
