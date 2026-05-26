interface SectionLabelProps {
  children: React.ReactNode
  center?: boolean
}

export default function SectionLabel({ children, center = false }: SectionLabelProps) {
  return (
    <div
      className={`flex items-center gap-3 text-red text-[0.68rem] tracking-[0.28em] uppercase mb-5
        ${center ? 'justify-center' : ''}`}
    >
      <span className="block w-7 h-px bg-red flex-shrink-0" />
      {children}
    </div>
  )
}
