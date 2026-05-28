import { useEffect, useState } from 'react'
import logo from '../img/logo.png'

const links = [
  { label: 'Productos', href: '#productos' },
  { label: 'Catálogo',  href: '#catalogo'  },
  { label: 'Proceso',   href: '#proceso'   },
  { label: 'Contacto',  href: '#contacto'  },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`
        fixed top-0 left-0 right-0 z-50 flex items-center justify-between
        border-b border-gray-light/30
        transition-all duration-300
        backdrop-blur-md
        ${scrolled
          ? 'px-8 md:px-12 py-3.5 bg-cream/90'
          : 'px-8 md:px-12 py-5 bg-cream/88'}
      `}
    >
      {/* Logo */}
      <a href="#inicio" className="no-underline flex items-center">
        <img src={logo} alt="Sellos Ana" className="h-10 w-auto" />
      </a>

      {/* Links */}
      <ul className="hidden md:flex gap-9 list-none m-0 p-0">
        {links.map(({ label, href }) => (
          <li key={href}>
            <a href={href} className="nav-link">{label}</a>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <a
        href="https://www.instagram.com/sellos_ana/"
        target="_blank"
        rel="noopener noreferrer"
        className="
          bg-red hover:bg-red-light text-parchment
          text-[0.72rem] tracking-[0.16em] uppercase
          px-5 py-2.5 no-underline
          transition-all duration-300 hover:-translate-y-px
        "
      >
        Pedir ahora
      </a>
    </nav>
  )
}
