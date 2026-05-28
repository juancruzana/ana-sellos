import InstagramIcon from './shared/InstagramIcon'

export default function Info() {
  return (
    <div
      id="contacto"
      className="bg-ink px-8 md:px-[72px] py-20 grid grid-cols-1 md:grid-cols-[1fr_1px_1fr_1px_1fr] gap-10 md:gap-0"
    >
      {/* Horarios */}
      <div className="reveal">
        <div className="text-[0.65rem] tracking-[0.28em] uppercase text-red mb-5">Horarios</div>
        <h3 className="font-serif text-[1.4rem] font-light text-cream mb-4">Atención</h3>
        {[
          ['Lun — Vie', '9:00 a 18:00 hs'],
          ['Sábado',    '10:00 a 13:00 hs'],
          ['Domingo',   'Cerrado'],
        ].map(([day, hours]) => (
          <div key={day} className="flex gap-3 items-baseline text-[0.85rem] text-gray-mid leading-8">
            <strong className="text-cream-dark font-normal">{day}</strong>
            {hours}
          </div>
        ))}
      </div>

      {/* Divider */}
      <div className="hidden md:block bg-gray-light/10" />

      {/* Ubicación */}
      <div className="reveal md:px-16">
        <div className="text-[0.65rem] tracking-[0.28em] uppercase text-red mb-5">Ubicación</div>
        <h3 className="font-serif text-[1.4rem] font-light text-cream mb-4">Mendoza</h3>
        <div className="text-[0.85rem] text-gray-mid leading-7">
          9 de Julio 1157<br />
          Ciudad · Mendoza<br />
          Argentina
        </div>
        <a
          href="https://www.instagram.com/sellos_ana/"
          target="_blank"
          rel="noopener noreferrer"
          className="
            mt-4 flex items-center gap-2 text-gray-light text-[0.85rem]
            tracking-[0.1em] no-underline transition-colors duration-300 hover:text-red
          "
        >
          <InstagramIcon /> @sellos_ana
        </a>
      </div>

      {/* Divider */}
      <div className="hidden md:block bg-gray-light/10" />

      {/* Pedidos */}
      <div className="reveal md:px-16">
        <div className="text-[0.65rem] tracking-[0.28em] uppercase text-red mb-5">Pedidos</div>
        <h3 className="font-serif text-[1.4rem] font-light text-cream mb-4">Contacto</h3>
        <div className="text-[0.85rem] text-gray-mid leading-8 mb-5">
          <div>Tel: 0261 4203982 / 4203663</div>
          <a
            href="mailto:ana@anaregalos.com.ar"
            className="text-gray-mid hover:text-red transition-colors duration-300 no-underline"
          >
            ana@anaregalos.com.ar
          </a>
        </div>
        <a
          href="https://api.whatsapp.com/send/?phone=2613062585&text&type=phone_number&app_absent=0&utm_source=ig"
          target="_blank"
          rel="noopener noreferrer"
          className="
            inline-block bg-red hover:bg-red-light text-parchment
            text-[0.75rem] tracking-[0.18em] uppercase px-7 py-3.5
            no-underline transition-all duration-300 hover:-translate-y-px
          "
        >
          Escribir mensaje
        </a>
      </div>
    </div>
  )
}
