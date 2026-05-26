import SectionLabel from './SectionLabel'

const steps = [
  {
    num: '1',
    title: 'Consultá',
    desc: 'Escribinos por Instagram contándonos tu idea, qué necesitás y cómo imaginás tu pieza.',
  },
  {
    num: '2',
    title: 'Diseñamos',
    desc: 'Creamos una propuesta gráfica personalizada basada en tu identidad y preferencias.',
  },
  {
    num: '3',
    title: 'Aprobás',
    desc: 'Te mostramos la vista previa. Ajustamos hasta que sea exactamente lo que imaginabas.',
  },
  {
    num: '4',
    title: '¡Listo!',
    desc: 'Producimos tu pieza y la retirás en nuestro local o coordinamos el envío.',
  },
]

export default function Process() {
  return (
    <section id="proceso" className="max-w-[1200px] mx-auto px-8 md:px-[72px] py-24">
      <div className="reveal mb-16">
        <SectionLabel>Paso a paso</SectionLabel>
        <h2 className="font-serif text-[clamp(2rem,3.5vw,3rem)] font-light text-ink">
          Así <em className="italic text-red">trabajamos</em>
        </h2>
      </div>

      {/* Steps grid with connector line */}
      <div className="relative grid grid-cols-2 md:grid-cols-4 gap-10">
        {/* Connector — desktop only */}
        <div className="hidden md:block absolute top-7 left-7 right-7 h-px bg-gradient-to-r from-gray-light via-red to-gray-light pointer-events-none" />

        {steps.map((step, i) => (
          <div
            key={step.num}
            className="reveal group relative"
            style={{ transitionDelay: `${i * 120}ms` }}
          >
            <div
              className="
                w-14 h-14 rounded-full border border-gray-light bg-cream
                flex items-center justify-center mb-6 relative z-10
                font-serif text-xl font-normal text-gray-dark
                transition-all duration-300
                group-hover:bg-red group-hover:border-red group-hover:text-parchment
              "
            >
              {step.num}
            </div>
            <h4 className="font-serif text-xl font-normal text-ink mb-2.5">{step.title}</h4>
            <p className="text-[0.82rem] leading-[1.8] text-gray-mid">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
