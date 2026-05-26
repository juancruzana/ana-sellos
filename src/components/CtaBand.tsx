export default function CtaBand() {
  return (
    <div className="bg-red px-8 md:px-[72px] py-20 flex flex-col md:flex-row items-center justify-between gap-10">
      <div className="reveal text-center md:text-left">
        <div className="text-[0.68rem] tracking-[0.28em] uppercase text-white/60 mb-3">
          ¿Lista para empezar?
        </div>
        <h2 className="font-serif text-[2.4rem] font-light text-parchment leading-[1.2]">
          Dale identidad<br />a tu marca hoy.
        </h2>
      </div>

      <a
        href="https://www.instagram.com/sellos_ana/"
        target="_blank"
        rel="noopener noreferrer"
        className="
          reveal flex-shrink-0 border border-white/60 hover:border-white
          text-parchment bg-transparent hover:bg-white/10
          px-10 py-4 text-[0.75rem] tracking-[0.18em] uppercase
          no-underline transition-all duration-300
        "
      >
        Ver Instagram ↗
      </a>
    </div>
  )
}
