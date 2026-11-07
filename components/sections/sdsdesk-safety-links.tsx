import { FileText } from 'lucide-react'
import { SDSDESK_CHEMICAL_PAGES, SDSDESK_PRODUCT_GUIDES, sdsDeskLink } from '@/lib/sdsdesk'

type Props = {
  /** Product key, e.g. "copper-sulphate". */
  productId: string
  /** Display name without formula, e.g. "Copper Sulphate". */
  productName: string
}

// Transport facts already stated in our SDS articles; only listed where we are sure.
const TRANSPORT: Record<string, string> = {
  'copper-sulphate': 'It usually ships as UN3077, class 9, environmentally hazardous, and as a marine pollutant by sea.',
  'silver-nitrate': 'It ships as UN1493, class 5.1 oxidiser, packing group II, and as a marine pollutant by sea.',
  'copper-oxide': 'Where classified as environmentally hazardous, it ships as UN3077, class 9, packing group III.',
}

const linkCls = 'font-semibold text-amber-800 underline underline-offset-2 hover:text-amber-900'

/**
 * Plain, followed links from a product page to the matching SDS Desk pages.
 * Anchor text differs per product so the block does not repeat word for word across the site.
 */
export default function SdsDeskSafetyLinks({ productId, productName }: Props) {
  const chemicalPage = SDSDESK_CHEMICAL_PAGES[productId]
  const guide = SDSDESK_PRODUCT_GUIDES[productId]
  const transport = TRANSPORT[productId]
  const lower = productName.toLowerCase()

  return (
    <section className="container mx-auto px-4 pb-8" aria-labelledby={`sds-${productId}`}>
      <div className="rounded-xl border border-gray-200 bg-white p-6">
        <h2 id={`sds-${productId}`} className="flex items-center gap-2 text-xl font-bold text-gray-900">
          <FileText className="h-5 w-5 text-amber-700" aria-hidden="true" />
          {productName} SDS, GHS label and safety data
        </h2>
        <p className="mt-3 text-gray-700 leading-relaxed">
          Before you store, use or ship {lower}, check its hazard classification and handling rules.
          {transport ? ` ${transport}` : ''}
          {chemicalPage ? (
            <>
              {' '}The GHS classification, hazard statements and pictograms for {lower} are listed on the{' '}
              <a href={sdsDeskLink(chemicalPage)} className={linkCls}>{lower} safety data page</a> at SDS Desk.
            </>
          ) : null}
          {guide ? (
            <>
              {' '}For handling and storage details, read{' '}
              <a href={sdsDeskLink(guide.path)} className={linkCls}>{guide.label}</a>.
            </>
          ) : null}
        </p>
        <p className="mt-3 text-gray-700 leading-relaxed">
          Repacking or reselling {lower} under your own brand? You need your own SDS and label. Our team built{' '}
          <a href={sdsDeskLink('/sds-generator')} className={linkCls}>an SDS generator</a> for this, and you can
          start from the free <a href={sdsDeskLink('/sds-template')} className={linkCls}>16-section SDS template</a>.
          To check what a hazard code or symbol means, use the{' '}
          <a href={sdsDeskLink('/tools/h-statement-lookup')} className={linkCls}>H-statement lookup</a> or the{' '}
          <a href={sdsDeskLink('/tools/ghs-pictograms')} className={linkCls}>GHS pictogram guide</a>.
        </p>
      </div>
    </section>
  )
}
