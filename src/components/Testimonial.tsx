import SectionLabel from './SectionLabel'

export default function Testimonial() {
  return (
    <section className="max-w-[1200px] mx-auto px-8 md:px-[72px] py-24 grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-10 md:gap-20 items-center">
      <div className="reveal">
        <SectionLabel>Clientes</SectionLabel>
        <h2 className="font-serif text-[clamp(2rem,3.5vw,3rem)] font-light text-ink leading-tight">
          Lo que<br />
          <em className="italic text-red">dicen</em>
        </h2>
      </div>

      <div className="reveal relative">
        {/* Big quote mark */}
        <span className="font-serif text-[8rem] leading-[0.7] text-red/[0.08] absolute top-0 -left-4 select-none pointer-events-none">
          "
        </span>

        <p className="font-serif text-[1.5rem] font-light italic leading-[1.6] text-gray-dark pl-10 mb-7">
          Mis sellos quedaron exactamente como los imaginé. El proceso fue rápido,
          atento y el resultado elevó por completo la presentación de mis pedidos.
          Mis clientes siempre me preguntan dónde los conseguí.
        </p>

        <div className="flex items-center gap-4 pl-10 text-[0.75rem] tracking-[0.18em] uppercase text-gray-mid">
          <img
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=80&q=80"
            alt="Valentina M."
            className="w-10 h-10 rounded-full object-cover flex-shrink-0 border border-gray-light"
          />
          <span className="block w-6 h-px bg-red" />
          Valentina M. — Emprendedora, Mendoza
        </div>
      </div>
    </section>
  )
}
