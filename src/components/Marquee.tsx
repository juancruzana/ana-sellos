const items = [
  'Sellos Personalizados',
  'Tarjetas Artesanales',
  'Regalos Únicos',
  'Diseño a Medida',
  'Identidad de Marca',
  'Mendoza, Argentina',
]

// Duplicate for infinite loop
const allItems = [...items, ...items]

export default function Marquee() {
  return (
    <div className="bg-red py-3.5 overflow-hidden">
      <div className="flex whitespace-nowrap animate-marquee">
        {allItems.map((item, i) => (
          <span
            key={i}
            className="font-serif text-base italic font-normal text-parchment/90 px-10 flex-shrink-0"
          >
            {item}
            <span className="text-parchment/40 not-italic ml-10">✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}
