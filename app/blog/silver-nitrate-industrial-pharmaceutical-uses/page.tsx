import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Metadata } from 'next';
import Script from 'next/script';
import Link from 'next/link';
import { OptimizedImage } from '@/components/ui/optimized-image';

export const metadata: Metadata = {
  title: 'Silver Nitrate Uses: Pharmaceutical, Lab, Water Treatment & More | Sulman Traders',
  description:
    'Complete guide to silver nitrate (AgNO₃) applications — pharmaceutical manufacturing, laboratory reagent, water treatment, permanent ink, wound care medicines, and more. High-purity silver nitrate supplier in Pakistan.',
  keywords: [
    'silver nitrate uses',
    'silver nitrate pharmaceutical',
    'silver nitrate laboratory reagent',
    'silver nitrate water treatment',
    'silver nitrate permanent ink',
    'silver nitrate wound care',
    'silver nitrate Pakistan',
    'buy silver nitrate Pakistan',
    'AgNO3 applications',
    'silver nitrate medicine',
  ],
  alternates: {
    canonical: 'https://www.sulmantraders.com/blog/silver-nitrate-industrial-pharmaceutical-uses',
  },
};

export default function SilverNitrateUsesBlog() {
  return (
    <div className="flex flex-col min-h-screen">
      <Script id="blog-schema" type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          mainEntityOfPage: {
            '@type': 'WebPage',
            '@id':
              'https://www.sulmantraders.com/blog/silver-nitrate-industrial-pharmaceutical-uses',
          },
          headline:
            'Silver Nitrate: Pharmaceutical, Laboratory, Water Treatment & Industrial Uses',
          description:
            'A comprehensive guide to the many uses of silver nitrate (AgNO₃) across pharmaceuticals, laboratory science, water treatment, inks, and medicine.',
          image: 'https://www.sulmantraders.com/silver-nitrate-banner-2.png',
          author: { '@type': 'Person', name: 'Muhammad Salman' },
          publisher: {
            '@type': 'Organization',
            name: 'Sulman Traders',
            logo: {
              '@type': 'ImageObject',
              url: 'https://www.sulmantraders.com/logo.png',
            },
          },
          datePublished: '2025-05-23',
          dateModified: '2025-05-23',
        })}
      </Script>

      <Header />
      <main className="flex-1 bg-gray-50">

        {/* ── Hero ── */}
        <div className="relative h-96 overflow-hidden">
          <OptimizedImage
            src="/silver-nitrate-banner-2.png"
            alt="Silver nitrate crystals used in pharmaceutical and laboratory applications"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gray-900 opacity-55" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="container px-4 text-center">
              <span className="inline-block bg-blue-600 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
                Pharmaceutical &amp; Industrial
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                Silver Nitrate — The Versatile Chemical
                <br className="hidden md:block" /> Behind Medicines, Labs &amp; More
              </h1>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto">
                From hospital wards to research laboratories, water treatment plants to
                permanent inks — AgNO₃ is indispensable
              </p>
            </div>
          </div>
        </div>

        {/* ── Article ── */}
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-6 md:p-10">

              {/* Meta row */}
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-gray-500 mb-8">
                <span>By <strong className="text-gray-700">Muhammad Salman</strong></span>
                <span>•</span>
                <time dateTime="2025-05-23">May 23, 2025</time>
                <span>•</span>
                <span>10 min read</span>
                <span>•</span>
                <span className="bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full font-medium">
                  Pharmaceutical &amp; Industrial
                </span>
              </div>

              <div className="prose prose-lg max-w-none">

                {/* ── Intro ── */}
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  Introduction: Why Silver Nitrate Remains Essential
                </h2>
                <p>
                  Silver nitrate (AgNO₃) is one of chemistry's most versatile compounds — a
                  colourless crystalline salt that has been used in medicine, photography, and
                  industry for over 200 years. Despite the rise of synthetic alternatives, it
                  remains irreplaceable in a surprising number of critical applications,
                  from life-saving medicines to the permanent ink used to mark newborn babies
                  in hospitals.
                </p>
                <p className="mt-4">
                  Sulman Traders supplies pharmaceutical and laboratory-grade silver nitrate
                  in Pakistan, offering the high purity and consistent specification that these
                  demanding end-uses require. This guide walks through every major application
                  category so you can understand exactly why quality matters.
                </p>

                {/* Image */}
                <div className="my-8 rounded-xl overflow-hidden shadow-sm">
                  <div className="relative h-72 w-full">
                    <OptimizedImage
                      src="/silver-nitrate-image.avif"
                      alt="High-purity silver nitrate crystals in a laboratory setting"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="text-sm text-gray-500 italic text-center py-2 bg-gray-50">
                    Pharmaceutical-grade silver nitrate (AgNO₃) crystals — the starting
                    material for dozens of critical industrial and medical processes
                  </p>
                </div>

                {/* ── Pharmaceutical ── */}
                <h2 className="text-2xl font-bold text-gray-800 mt-10 mb-4">
                  1. Pharmaceutical Manufacturing
                </h2>
                <div className="flex flex-col md:flex-row gap-8 mb-6">
                  <div className="md:w-2/3">
                    <p>
                      Silver nitrate is a regulated pharmaceutical ingredient used in the
                      production of several important medicines and medical devices. Its
                      antibacterial and caustic properties are exploited in:
                    </p>
                    <ul className="list-disc pl-6 mt-3 space-y-1">
                      <li>
                        <strong>Silver nitrate sticks (lunar caustic)</strong> — used by
                        doctors to cauterise warts, granulomas, and minor bleeding wounds
                      </li>
                      <li>
                        <strong>Ophthalmic drops</strong> — historically used to prevent
                        neonatal conjunctivitis (Credé's prophylaxis); still used in some
                        developing-world settings
                      </li>
                      <li>
                        <strong>Wound care formulations</strong> — 0.5% silver nitrate
                        soaks and dressings are a proven treatment for extensive burns, preventing
                        life-threatening infections caused by Pseudomonas and Staphylococcus
                      </li>
                      <li>
                        <strong>Anti-infective creams</strong> — component in preparations
                        used for infected ulcers, diabetic foot wounds, and post-surgical sites
                      </li>
                    </ul>
                  </div>
                  <div className="md:w-1/3">
                    <div className="relative h-56 w-full rounded-lg overflow-hidden">
                      <OptimizedImage
                        src="/silver-nitrate-product-1.png"
                        alt="Silver nitrate pharmaceutical product"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <p className="text-sm text-gray-500 mt-2 italic text-center">
                      Pharmaceutical-grade AgNO₃ for medicine production
                    </p>
                  </div>
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-6 rounded-r-lg">
                  <p className="font-semibold text-blue-800">Purity Requirement</p>
                  <p className="text-blue-700 mt-1">
                    Pharmaceutical applications demand silver nitrate that meets or exceeds
                    BP/USP/EP monograph specifications — typically ≥ 99.8% assay with strict
                    limits on chloride, sulfate, heavy metals, and organic impurities. Always
                    request a Certificate of Analysis (CoA) and SDS from your supplier.
                  </p>
                </div>

                {/* ── Laboratory ── */}
                <h2 className="text-2xl font-bold text-gray-800 mt-10 mb-4">
                  2. Laboratory Reagent &amp; Analytical Chemistry
                </h2>
                <p>
                  Silver nitrate is one of the most widely used analytical reagents in
                  chemistry laboratories worldwide. Its role in laboratory science is broad:
                </p>
                <ul className="list-disc pl-6 mt-3 space-y-1">
                  <li>
                    <strong>Halide testing (Mohr method)</strong> — the classic argentometric
                    titration uses AgNO₃ to determine chloride, bromide, and iodide concentrations
                    in water, food, and pharmaceutical samples
                  </li>
                  <li>
                    <strong>Precipitation reactions</strong> — AgNO₃ is used to precipitate and
                    identify halide ions as coloured silver halide precipitates in qualitative
                    analysis
                  </li>
                  <li>
                    <strong>Protein staining (silver staining)</strong> — one of the most
                    sensitive methods for detecting proteins on polyacrylamide gels (PAGE) uses
                    silver nitrate; detection limits reach nanogram levels
                  </li>
                  <li>
                    <strong>DNA/RNA visualisation</strong> — silver staining of nucleic acids
                    in sequencing gels provides higher sensitivity than ethidium bromide
                  </li>
                  <li>
                    <strong>Organic synthesis</strong> — silver nitrate acts as a selective
                    oxidant and can activate alkyl halides via the Finkelstein-type reaction;
                    used to prepare a range of silver salts as synthesis intermediates
                  </li>
                  <li>
                    <strong>Standard solutions</strong> — 0.1 N AgNO₃ is a primary standard
                    for volumetric analysis and is kept as a reference solution in every
                    analytical lab
                  </li>
                </ul>

                {/* ── Water treatment ── */}
                <h2 className="text-2xl font-bold text-gray-800 mt-10 mb-4">
                  3. Water Treatment &amp; Disinfection
                </h2>
                <div className="flex flex-col md:flex-row gap-8 mb-6">
                  <div className="md:w-2/3">
                    <p>
                      Silver has been known as a natural antimicrobial agent since antiquity —
                      ancient civilisations stored water in silver vessels. Modern water treatment
                      exploits this property in several ways:
                    </p>
                    <ul className="list-disc pl-6 mt-3 space-y-1">
                      <li>
                        <strong>Point-of-use filters</strong> — silver nitrate is used to
                        impregnate activated carbon filter media, providing sustained antimicrobial
                        action in household and industrial water filters
                      </li>
                      <li>
                        <strong>Legionella control</strong> — silver-copper ionisation systems
                        using AgNO₃ and CuSO₄ are approved for controlling Legionella in hospital
                        hot water systems without the harmful by-products of chlorination
                      </li>
                      <li>
                        <strong>Swimming pool disinfection</strong> — silver nitrate-based
                        systems provide residual disinfection, reducing dependence on chlorine
                        and eliminating the characteristic pool smell
                      </li>
                      <li>
                        <strong>Chloride testing in treated water</strong> — analytical silver
                        nitrate solution is used in standard Mohr titration to verify chloride
                        levels in finished drinking water (a key regulatory parameter)
                      </li>
                    </ul>
                  </div>
                  <div className="md:w-1/3">
                    <div className="relative h-56 w-full rounded-lg overflow-hidden">
                      <OptimizedImage
                        src="/silver-nitrate-container.jpg"
                        alt="Silver nitrate container for water treatment use"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <p className="text-sm text-gray-500 mt-2 italic text-center">
                      AgNO₃ for water treatment — antimicrobial without harmful by-products
                    </p>
                  </div>
                </div>

                {/* ── Permanent ink ── */}
                <h2 className="text-2xl font-bold text-gray-800 mt-10 mb-4">
                  4. Permanent Ink &amp; Indelible Marking
                </h2>
                <p>
                  Silver nitrate's ability to stain skin and fabrics permanently (it reacts with
                  organic matter to form dark silver metal deposits) makes it the active
                  ingredient in some of the world's most important indelible inks:
                </p>
                <ul className="list-disc pl-6 mt-3 space-y-1">
                  <li>
                    <strong>Electoral indelible ink</strong> — used in democratic elections
                    worldwide, including Pakistan, to mark voters' fingers and prevent double
                    voting. The silver nitrate stain on skin takes 2–4 weeks to fade completely
                    as skin cells naturally replace themselves
                  </li>
                  <li>
                    <strong>Hospital patient marking</strong> — permanent skin markers
                    containing AgNO₃ are used to mark surgical sites, identify newborns, and
                    label patients with allergies
                  </li>
                  <li>
                    <strong>Document security inks</strong> — incorporated into tamper-evident
                    and anti-forgery inks for passports, banknotes, and legal documents
                  </li>
                  <li>
                    <strong>UV-active inks</strong> — silver compounds are used in speciality
                    inks that are invisible in normal light but fluoresce or react under UV,
                    used in anti-counterfeiting applications
                  </li>
                </ul>
                <div className="bg-green-50 border-l-4 border-green-500 p-4 my-6 rounded-r-lg">
                  <p className="font-semibold text-green-800">Did You Know?</p>
                  <p className="text-green-700 mt-1">
                    Pakistan's Election Commission of Pakistan (ECP) uses silver nitrate-based
                    indelible ink during every general election. The compound's permanence on
                    skin is not a side-effect — it is the entire point.
                  </p>
                </div>

                {/* ── Medicines ── */}
                <h2 className="text-2xl font-bold text-gray-800 mt-10 mb-4">
                  5. Medical Treatments &amp; Clinical Applications
                </h2>
                <p>
                  Beyond pharmaceutical manufacturing, silver nitrate plays a direct clinical
                  role in several established medical treatments:
                </p>

                <div className="grid md:grid-cols-2 gap-4 my-6">
                  {[
                    {
                      title: 'Burn Wound Management',
                      body:
                        'Silver nitrate 0.5% aqueous solution soaks reduce bacterial colonisation in major burns. This approach, established since the 1960s, remains a cost-effective first-line treatment in burn units where more expensive silver dressings are unavailable.',
                    },
                    {
                      title: 'Cauterisation of Granulation Tissue',
                      body:
                        'Silver nitrate sticks (lunar caustic) are used by nurses and physicians to chemically cauterise over-granulating wounds, umbilical granulomas in newborns, and proud flesh, stopping abnormal tissue growth without the need for surgical intervention.',
                    },
                    {
                      title: 'Nosebleed (Epistaxis) Treatment',
                      body:
                        'Applied carefully to the nasal mucosa by trained clinicians, silver nitrate cauterises the small blood vessels responsible for anterior nosebleeds — a quick, safe, and highly effective outpatient procedure.',
                    },
                    {
                      title: 'Wart & Verruca Treatment',
                      body:
                        'Silver nitrate paste and solution are used as a topical caustic to destroy wart tissue. It is especially useful in patients where salicylic acid or cryotherapy has failed, and is recommended in standard dermatology guidelines.',
                    },
                  ].map((card) => (
                    <div
                      key={card.title}
                      className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm"
                    >
                      <h4 className="font-bold text-gray-800 mb-2">{card.title}</h4>
                      <p className="text-gray-600 text-sm">{card.body}</p>
                    </div>
                  ))}
                </div>

                {/* ── Photography (historical) ── */}
                <h2 className="text-2xl font-bold text-gray-800 mt-10 mb-4">
                  6. Photography &amp; Imaging (Historical &amp; Specialty)
                </h2>
                <p>
                  Silver nitrate is the founding compound of modern photography. When applied to
                  paper or glass and exposed to light, it reduces to black metallic silver,
                  creating the photographic image. While digital photography has replaced
                  traditional film in mainstream use, silver nitrate remains important in:
                </p>
                <ul className="list-disc pl-6 mt-3 space-y-1">
                  <li>
                    Archival and fine-art photography using traditional silver gelatin processes
                  </li>
                  <li>
                    Radiographic (X-ray) film manufacturing, where silver halide emulsions are
                    still the gold standard for diagnostic quality
                  </li>
                  <li>
                    Production of mirrors via the Tollens' reagent silver-mirror reaction, where
                    silver is deposited on glass from an ammoniacal AgNO₃ solution
                  </li>
                  <li>
                    Specialty printed electronics where silver-based conductive inks derived
                    from AgNO₃ are used to print antenna tracks and circuit traces
                  </li>
                </ul>

                {/* ── Other industrial ── */}
                <h2 className="text-2xl font-bold text-gray-800 mt-10 mb-4">
                  7. Other Industrial &amp; Research Uses
                </h2>
                <div className="flex flex-col md:flex-row gap-8 mb-6">
                  <div className="md:w-2/3">
                    <ul className="list-disc pl-6 space-y-2">
                      <li>
                        <strong>Silver plating</strong> — AgNO₃ is dissolved in electrolyte
                        solutions to electroplate silver onto jewellery, cutlery, electrical
                        contacts, and solar cell busbars
                      </li>
                      <li>
                        <strong>Catalyst production</strong> — silver nitrate is the precursor
                        for supported silver catalysts used in the industrial production of
                        ethylene oxide (a major chemical intermediate)
                      </li>
                      <li>
                        <strong>Antimicrobial coatings</strong> — nanoparticle silver (synthesised
                        from AgNO₃) is applied to medical devices, textiles, and food packaging
                        surfaces
                      </li>
                      <li>
                        <strong>Veterinary medicine</strong> — silver nitrate preparations are
                        used to treat hoof infections in livestock and wound infections in
                        large animals
                      </li>
                      <li>
                        <strong>Hair dyeing</strong> — some silver nitrate-based hair dyes produce
                        gradual colour development and are used in grey hair restoration products
                      </li>
                    </ul>
                  </div>
                  <div className="md:w-1/3">
                    <div className="relative h-56 w-full rounded-lg overflow-hidden">
                      <OptimizedImage
                        src="/silver-nitrate-in-pan.jpg"
                        alt="Silver nitrate crystals used in industrial applications"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <p className="text-sm text-gray-500 mt-2 italic text-center">
                      Silver nitrate in various industrial forms
                    </p>
                  </div>
                </div>

                {/* ── Storage & safety ── */}
                <div className="mt-10 bg-yellow-50 border border-yellow-300 rounded-xl p-6">
                  <h2 className="text-xl font-bold text-yellow-900 mb-3">
                    ⚠️ Storage &amp; Safety Guidelines
                  </h2>
                  <ul className="list-disc pl-6 space-y-2 text-yellow-900">
                    <li>
                      <strong>Light-sensitive:</strong> Store in amber glass bottles or opaque
                      containers away from direct sunlight; exposure to UV/visible light reduces
                      AgNO₃ to black metallic silver
                    </li>
                    <li>
                      <strong>Hygroscopic:</strong> Keep containers sealed tightly; silver nitrate
                      absorbs moisture from the air and can cake or dissolve
                    </li>
                    <li>
                      <strong>Strong oxidiser:</strong> Keep away from organic materials,
                      flammable substances, and reducing agents — contact can cause fires
                    </li>
                    <li>
                      <strong>Skin staining:</strong> Wear nitrile gloves at all times; skin
                      contact results in permanent brown-black stains that take 2–4 weeks to
                      fade
                    </li>
                    <li>
                      <strong>Disposal:</strong> Do not pour silver nitrate solutions down the
                      drain — recover silver via precipitation with NaCl and treat as hazardous
                      waste or recycle through a silver recovery service
                    </li>
                  </ul>
                </div>

                {/* ── Conclusion ── */}
                <h2 className="text-2xl font-bold text-gray-800 mt-10 mb-4">Conclusion</h2>
                <p>
                  Silver nitrate's longevity as a commercially important chemical is a testament
                  to its extraordinary versatility. In a single day it may save a burn patient's
                  life, identify a voter in a democratic election, purify drinking water, stain a
                  protein band in a research gel, and plate a silver circuit onto a solar cell.
                  No single synthetic substitute has managed to match its combination of antimicrobial
                  potency, analytical precision, and photochemical reactivity.
                </p>
                <p className="mt-4">
                  Sulman Traders supplies pharmaceutical and analytical grade AgNO₃ in Pakistan
                  for buyers who need reliable purity and consistent supply. Whether you are a
                  hospital purchasing department, a research laboratory, a water treatment company,
                  or an ink manufacturer, we can meet your specifications.
                </p>
                <p className="mt-4">
                  Visit our{' '}
                  <Link href="/silver-nitrate" className="text-blue-700 underline hover:no-underline">
                    Silver Nitrate product page
                  </Link>{' '}
                  or{' '}
                  <Link href="/contact" className="text-blue-700 underline hover:no-underline">
                    contact us
                  </Link>{' '}
                  for pricing and specifications.
                </p>

                {/* ── FAQ ── */}
                <div className="mt-12 p-6 bg-gray-50 rounded-xl">
                  <h3 className="text-2xl font-bold mb-6">Frequently Asked Questions</h3>
                  <div itemScope itemType="https://schema.org/FAQPage">

                    <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-6">
                      <h4 itemProp="name" className="text-lg font-semibold">
                        What grade of silver nitrate is needed for pharmaceutical use?
                      </h4>
                      <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                        <div itemProp="text" className="mt-2 text-gray-700">
                          Pharmaceutical-grade silver nitrate must comply with a recognised pharmacopoeial
                          monograph such as BP (British Pharmacopoeia), USP (United States Pharmacopeia),
                          or EP (European Pharmacopoeia). These specify minimum assay of 99.8–100.5%
                          AgNO₃ with strict limits on chloride, sulfate, bismuth, copper, lead, and
                          other heavy metals. Always request a Certificate of Analysis with your order.
                        </div>
                      </div>
                    </div>

                    <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-6">
                      <h4 itemProp="name" className="text-lg font-semibold">
                        Why does silver nitrate stain skin black?
                      </h4>
                      <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                        <div itemProp="text" className="mt-2 text-gray-700">
                          When silver nitrate contacts organic matter in skin (proteins, amino acids),
                          it undergoes a photochemical reaction that reduces ionic silver (Ag⁺) to
                          elemental silver metal (Ag⁰). The black-brown discolouration is finely
                          divided metallic silver trapped in the skin's upper layers. The stain is
                          permanent in that tissue and fades only as the stained skin cells are
                          naturally shed, which takes 2–4 weeks.
                        </div>
                      </div>
                    </div>

                    <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-6">
                      <h4 itemProp="name" className="text-lg font-semibold">
                        How is silver nitrate used in water treatment?
                      </h4>
                      <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                        <div itemProp="text" className="mt-2 text-gray-700">
                          Silver nitrate serves two roles in water treatment: (1) as a disinfectant —
                          silver ions released from AgNO₃ kill bacteria, fungi, and some viruses even
                          at very low concentrations (ppb range), making it useful for impregnating
                          filter media or dosing in silver-copper ionisation systems; and (2) as an
                          analytical reagent — 0.1 N AgNO₃ solution is used in Mohr titration to
                          measure chloride concentration in drinking water, a standard regulatory test
                          in most countries.
                        </div>
                      </div>
                    </div>

                    <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-6">
                      <h4 itemProp="name" className="text-lg font-semibold">
                        How should silver nitrate be stored safely?
                      </h4>
                      <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                        <div itemProp="text" className="mt-2 text-gray-700">
                          Store silver nitrate in tightly sealed amber glass or HDPE containers,
                          away from direct light, heat sources, and organic/flammable materials.
                          Recommended storage temperature is 15–25 °C in a cool, dry location.
                          Silver nitrate is a strong oxidiser classified as UN 1493; it must not
                          be stored near combustible materials. Separate it from incompatibles such
                          as acetylene, ammonia, and ethyl alcohol.
                        </div>
                      </div>
                    </div>

                    <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                      <h4 itemProp="name" className="text-lg font-semibold">
                        Where can I buy silver nitrate in Pakistan?
                      </h4>
                      <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                        <div itemProp="text" className="mt-2 text-gray-700">
                          Sulman Traders supplies pharmaceutical, laboratory, and industrial-grade
                          silver nitrate in Pakistan. We offer packaging from small 500 g jars to
                          bulk quantities, with Certificate of Analysis available for every batch.
                          Contact us through our website for current pricing and delivery information.
                        </div>
                      </div>
                    </div>

                  </div>
                </div>

                {/* ── CTA ── */}
                <div className="bg-blue-50 border border-blue-200 p-6 rounded-xl mt-12">
                  <h3 className="text-xl font-bold text-blue-900">
                    Order Pharmaceutical &amp; Lab-Grade Silver Nitrate in Pakistan
                  </h3>
                  <p className="mt-2 text-gray-700">
                    Sulman Traders supplies high-purity AgNO₃ with full documentation — Certificate
                    of Analysis, Safety Data Sheet, and pharmacopoeial compliance on request.
                    Available in 500 g jars up to bulk quantities for pharmaceutical, laboratory,
                    water treatment, and industrial customers.
                  </p>
                  <Link href="/contact">
                    <button className="mt-4 px-6 py-3 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors font-semibold">
                      Request a Quote
                    </button>
                  </Link>
                </div>

              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
