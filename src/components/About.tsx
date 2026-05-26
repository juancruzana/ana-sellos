import SectionLabel from './shared/SectionLabel'

export default function About() {
  return (
    <section id="nosotros" className="max-w-[1200px] mx-auto px-8 md:px-[72px] py-28 grid grid-cols-1 md:grid-cols-2 gap-0 items-center">
      {/* Text */}
      <div className="reveal md:pr-20">
        <SectionLabel>Nuestra historia</SectionLabel>

        <h2 className="font-serif text-[clamp(2rem,3.5vw,3rem)] font-light leading-[1.2] mb-6 text-ink">
          Cada detalle,<br />
          <em className="italic text-red">con intención.</em>
        </h2>

        <p className="text-[0.9rem] leading-[1.9] text-gray-mid mb-4">
          Somos un estudio gráfico en Mendoza dedicado a crear piezas artesanales
          que potencian la identidad de cada marca. Trabajamos con amor por el
          oficio y atención al más mínimo detalle.
        </p>
        <p className="text-[0.9rem] leading-[1.9] text-gray-mid mb-8">
          Nuestros sellos, tarjetas y regalos son herramientas creativas para
          emprendedoras y negocios que quieren diferenciarse con elegancia.
        </p>

        <span className="block w-14 h-0.5 bg-red my-8" />

        <p className="font-serif italic text-[1rem] text-gray-dark leading-relaxed">
          "El sello correcto transforma un packaging ordinario en una experiencia memorable."
        </p>
      </div>

      {/* Visual frames */}
      <div className="reveal relative h-[420px] mt-12 md:mt-0">
        {/* Tall frame — taller artisan photo */}
        <div
          className="absolute border border-gray-light overflow-hidden"
          style={{ width: 260, height: 320, top: 0, left: 40 }}
        >
          <img
            src="https://images.unsplash.com/photo-1452860606245-08befc0ff44b?auto=format&fit=crop&w=520&q=80"
            alt="Taller artesanal de sellos"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Small frame — product close-up */}
        <div
          className="absolute border border-gray-light overflow-hidden"
          style={{ width: 200, height: 240, bottom: 0, right: 0 }}
        >
          <img
            src="https://images.unsplash.com/photo-1611532736597-de2d4265fba3?auto=format&fit=crop&w=400&q=80"
            alt="Sellos y packaging artesanal"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}
