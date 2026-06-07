import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { productSalesInfo } from "@/lib/product-sales";
import Link from "next/link";

type ProductPriceGuideProps = {
  productId: keyof typeof productSalesInfo;
  title: string;
  subtitle: string;
  productName: string;
  productUrl: string;
  useCases: string[];
  buyerNotes: string[];
};

export default function ProductPriceGuide({
  productId,
  title,
  subtitle,
  productName,
  productUrl,
  useCases,
  buyerNotes,
}: ProductPriceGuideProps) {
  const salesInfo = productSalesInfo[productId];

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-amber-50 py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-amber-700">
                Pakistan price guide
              </p>
              <h1 className="mb-5 text-4xl font-bold text-gray-900 md:text-5xl">
                {title}
              </h1>
              <p className="text-lg leading-relaxed text-gray-700">{subtitle}</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href="/contact">
                  <Button className="bg-amber-700 hover:bg-amber-800">
                    Request Current Quote
                  </Button>
                </Link>
                <Link href={productUrl}>
                  <Button variant="outline" className="border-amber-700 text-amber-800 hover:bg-amber-100">
                    View Product Page
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-14">
          <div className="container mx-auto px-4">
            <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
              <div className="rounded-lg border border-gray-200 p-6">
                <h2 className="mb-2 text-sm font-semibold uppercase tracking-wide text-amber-700">
                  Current price
                </h2>
                <p className="text-2xl font-bold text-gray-900">{salesInfo.priceLabel}</p>
              </div>
              <div className="rounded-lg border border-gray-200 p-6">
                <h2 className="mb-2 text-sm font-semibold uppercase tracking-wide text-amber-700">
                  Packaging
                </h2>
                <p className="text-2xl font-bold text-gray-900">{salesInfo.packaging}</p>
              </div>
              <div className="rounded-lg border border-gray-200 p-6">
                <h2 className="mb-2 text-sm font-semibold uppercase tracking-wide text-amber-700">
                  MOQ
                </h2>
                <p className="text-2xl font-bold text-gray-900">{salesInfo.moq}</p>
              </div>
            </div>

            {salesInfo.grades && (
              <div className="mx-auto mt-10 max-w-5xl rounded-lg bg-gray-50 p-6">
                <h2 className="mb-4 text-2xl font-bold text-gray-900">
                  Available Grades
                </h2>
                <ul className="grid gap-3 md:grid-cols-3">
                  {salesInfo.grades.map((grade) => (
                    <li key={grade} className="rounded-md bg-white p-4 text-gray-700 shadow-sm">
                      {grade}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {salesInfo.note && (
              <p className="mx-auto mt-6 max-w-5xl text-gray-700">{salesInfo.note}</p>
            )}
          </div>
        </section>

        <section className="bg-gray-50 py-14">
          <div className="container mx-auto px-4">
            <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
              <div>
                <h2 className="mb-4 text-2xl font-bold text-gray-900">
                  Common Uses for {productName}
                </h2>
                <ul className="space-y-3 text-gray-700">
                  {useCases.map((useCase) => (
                    <li key={useCase} className="flex gap-2">
                      <span className="font-bold text-amber-700">-</span>
                      <span>{useCase}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="mb-4 text-2xl font-bold text-gray-900">
                  Buyer Checks Before Ordering
                </h2>
                <ul className="space-y-3 text-gray-700">
                  {buyerNotes.map((note) => (
                    <li key={note} className="flex gap-2">
                      <span className="font-bold text-amber-700">-</span>
                      <span>{note}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
