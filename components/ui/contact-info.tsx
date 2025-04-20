import type { ReactNode } from "react"

interface ContactInfoProps {
  icon: ReactNode
  title: string
  details: string[]
}

export default function ContactInfo({ icon, title, details }: ContactInfoProps) {
  return (
    <div className="flex items-start gap-4">
      <div className="bg-amber-100 p-3 rounded-full">{icon}</div>
      <div>
        <h3 className="font-semibold text-gray-900">{title}</h3>
        {details.map((detail, index) => (
          <p key={index} className="text-gray-600">
            {detail}
          </p>
        ))}
      </div>
    </div>
  )
}
