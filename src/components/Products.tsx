import SectionLabel from './shared/SectionLabel'

interface Product {
  number: string
  name: string
  description: string
  icon: React.ReactNode
}

const products: Product[] = [
  {
    number: '01',
    name: 'Sellos',
    description:
      'Sellos personalizados con tu logo, firma o diseño. Perfectos para packaging, papelería y branding de tu emprendimiento.',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 text-red">
        <rect x="8" y="8" width="48" height="48" rx="2" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 3" />
        <rect x="16" y="16" width="32" height="32" rx="1" stroke="currentColor" strokeWidth="1.2" />
        <text x="32" y="36" fontFamily="Georgia,serif" fontSize="14" fill="currentColor" textAnchor="middle" fontStyle="italic">S</text>
      </svg>
    ),
  },
  {
    number: '02',
    name: 'Tarjetas',
    description:
      'Tarjetas de presentación, saludos y agradecimiento. Diseños delicados que reflejan la esencia de tu marca con cada entrega.',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 text-red">
        <rect x="6" y="14" width="52" height="36" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M6 20 L32 36 L58 20" stroke="currentColor" strokeWidth="1.2" />
        <path d="M6 44 L22 30" stroke="currentColor" strokeWidth="1" opacity=".5" />
        <path d="M58 44 L42 30" stroke="currentColor" strokeWidth="1" opacity=".5" />
      </svg>
    ),
  },
  {
    number: '03',
    name: 'Regalos',
    description:
      'Conjuntos de regalo únicos y personalizados. Ideales para clientes especiales, cumpleaños y fechas que merecen ser recordadas.',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 text-red">
        <path d="M32 10 L54 24 L54 48 L32 56 L10 48 L10 24 Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M32 10 L32 56" stroke="currentColor" strokeWidth="1" opacity=".4" />
        <path d="M10 24 L54 24" stroke="currentColor" strokeWidth="1" opacity=".4" />
        <circle cx="32" cy="34" r="6" stroke="currentColor" strokeWidth="1.2" />
      </svg>
    ),
  },
]

export default function Products() {
  return (
    <section id="productos" className="bg-parchment px-8 md:px-[72px] py-24">
      <div className="text-center mb-16 reveal">
        <SectionLabel center>Nuestros productos</SectionLabel>
        <h2 className="font-serif text-[clamp(2rem,3.5vw,3rem)] font-light text-ink">
          Lo que <em className="italic text-red">creamos</em> para vos
        </h2>
      </div>

      <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-0.5">
        {products.map((p, i) => (
          <div
            key={p.number}
            className="reveal group relative bg-cream overflow-hidden px-10 py-12 transition-colors duration-300 hover:bg-cream-dark cursor-default"
            style={{ transitionDelay: `${i * 150}ms` }}
          >
            {/* Top red line on hover */}
            <div className="absolute top-0 left-0 h-0.5 bg-red w-0 group-hover:w-full transition-all duration-500 ease-out" />

            {/* Background number */}
            <span className="absolute top-7 right-8 font-serif text-[3.5rem] font-light leading-none text-cream-dark group-hover:text-red/10 transition-colors duration-300 select-none">
              {p.number}
            </span>

            {/* Icon */}
            <div className="mb-7">{p.icon}</div>

            <h3 className="font-serif text-[1.7rem] font-normal text-ink mb-4">{p.name}</h3>
            <p className="text-[0.85rem] leading-[1.8] text-gray-mid">{p.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
