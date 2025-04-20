interface ProcessStepProps {
  number: number
  title: string
  description: string
}

export default function ProcessStep({ number, title, description }: ProcessStepProps) {
  return (
    <div className="relative">
      <div className="bg-amber-100 rounded-full h-16 w-16 flex items-center justify-center mb-4 mx-auto">
        <span className="text-2xl font-bold text-amber-700">{number}</span>
      </div>
      <h3 className="text-xl font-semibold mb-2 text-center">{title}</h3>
      <p className="text-gray-600 text-center">{description}</p>
    </div>
  )
}
