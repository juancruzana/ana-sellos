import InstagramIcon from './shared/InstagramIcon'
import logo from '../img/logo.png'

export default function Footer() {
  return (
    <footer className="bg-ink border-t border-gray-light/10 px-8 md:px-[72px] py-10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
      <img
        src={logo}
        alt="Sellos Ana"
        className="h-9 w-auto"
        style={{ filter: 'brightness(0) invert(1)' }}
      />

      <div className="text-[0.72rem] tracking-[0.1em] text-gray-mid">
        © {new Date().getFullYear()} Sellos Ana · Mendoza, Argentina · Sellos · Regalos · Tarjetas
      </div>

      <a
        href="https://www.instagram.com/sellos_ana/"
        target="_blank"
        rel="noopener noreferrer"
        className="
          w-9 h-9 border border-gray-light/20 flex items-center justify-center
          text-gray-mid hover:border-red hover:text-red
          transition-all duration-300 no-underline
        "
        aria-label="Instagram"
      >
        <InstagramIcon size={14} />
      </a>
    </footer>
  )
}
