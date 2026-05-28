import { StampMain, StampFlower, StampCircle } from './shared/StampIllustrations'

export default function Hero() {
  return (
    <section
      id="inicio"
      className="min-h-screen grid grid-cols-1 md:grid-cols-2 pt-20 overflow-hidden"
    >
      {/* Left */}
      <div className="relative flex flex-col justify-center px-8 md:px-[72px] py-20">
        {/* Vertical accent line */}
        <div className="hidden md:block absolute top-[15%] left-10 w-px h-[60%] bg-gradient-to-b from-transparent via-gray-light to-transparent" />

        <div
          className="flex items-center gap-3 text-red text-[0.68rem] tracking-[0.28em] uppercase mb-6"
          style={{ animation: 'fadeUp 0.8s 0.2s both' }}
        >
          <span className="block w-7 h-px bg-red" />
          Estudio Gráfico · Mendoza, Argentina
        </div>

        <h1
          className="font-serif text-5xl md:text-[clamp(3.2rem,5.5vw,5.2rem)] font-light leading-[1.08] tracking-[-0.01em] text-ink mb-7"
          style={{ animation: 'fadeUp 0.8s 0.35s both' }}
        >
          Arte que deja<br />
          <em className="italic text-red">su marca.</em>
        </h1>

        <p
          className="text-[0.92rem] font-light leading-[1.8] text-gray-mid max-w-[380px] mb-12"
          style={{ animation: 'fadeUp 0.8s 0.5s both' }}
        >
          Sellos personalizados, tarjetas y regalos únicos para emprendedoras
          y marcas que cuidan cada detalle de su identidad.
        </p>

        <div
          className="flex items-center gap-7"
          style={{ animation: 'fadeUp 0.8s 0.65s both' }}
        >
          <a
            href="#catalogo"
            rel="noopener noreferrer"
            className="
              bg-red hover:bg-red-light text-parchment
              text-[0.75rem] tracking-[0.18em] uppercase
              px-8 py-3.5 no-underline
              transition-all duration-300 hover:-translate-y-0.5
              hover:shadow-[0_8px_24px_rgba(184,34,42,0.22)]
            "
          >
            Ver Catálogo
          </a>
          <a
            href="#proceso"
            className="
              group flex items-center gap-2 text-[0.75rem] tracking-[0.14em]
              uppercase text-gray-dark no-underline transition-colors duration-300
              hover:text-red
            "
          >
            Cómo funciona
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </a>
        </div>
      </div>

      {/* Right — stamp showcase */}
      <div className="relative hidden md:flex items-center justify-center bg-cream-dark overflow-hidden">
        {/* Ambient glows */}
        <div className="absolute -bottom-20 -right-20 w-72 h-72 rounded-full bg-[radial-gradient(circle,rgba(184,34,42,0.08)_0%,transparent_70%)]" />
        <div className="absolute -top-14 -left-14 w-48 h-48 rounded-full bg-[radial-gradient(circle,rgba(200,194,188,0.3)_0%,transparent_70%)]" />

        <div
          className="relative w-[340px] h-[340px]"
          style={{ animation: 'fadeIn 1.2s 0.4s both' }}
        >
          {/* Side card — top right */}
          <div
            className="absolute border border-gray-light bg-parchment p-7 flex items-center justify-center shadow-[0_8px_24px_rgba(0,0,0,0.06)]"
            style={{ width: 130, height: 130, top: 10, right: -20, transform: 'rotate(4deg)' }}
          >
            <StampFlower />
          </div>

          {/* Main card — center */}
          <div
            className="absolute border border-gray-light bg-parchment p-7 flex items-center justify-center shadow-[0_12px_40px_rgba(0,0,0,0.08)] transition-transform duration-500 hover:rotate-0 hover:scale-[1.02]"
            style={{
              width: 240, height: 240,
              top: '50%', left: '50%',
              transform: 'translate(-50%,-50%) rotate(-2deg)',
            }}
          >
            <StampMain />
          </div>

          {/* Side card — bottom left */}
          <div
            className="absolute border border-gray-light bg-parchment p-7 flex items-center justify-center shadow-[0_8px_24px_rgba(0,0,0,0.06)]"
            style={{ width: 130, height: 130, bottom: 10, left: -20, transform: 'rotate(-3deg)' }}
          >
            <StampCircle />
          </div>
        </div>
      </div>
    </section>
  )
}
