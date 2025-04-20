interface TestimonialCardProps {
  name: string
  role: string
  initial: string
  content: string
}

export default function TestimonialCard({ name, role, initial, content }: TestimonialCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <div className="flex items-center mb-4">
        <div className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center mr-4">
          <span className="text-xl font-bold text-gray-500">{initial}</span>
        </div>
        <div>
          <h4 className="font-semibold">{name}</h4>
          <p className="text-sm text-gray-500">{role}</p>
        </div>
      </div>
      <p className="text-gray-700">{content}</p>
    </div>
  )
}
