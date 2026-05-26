import { useState } from 'react'
import SectionLabel from './shared/SectionLabel'
import { products, categories } from '../data/catalog'

const WHATSAPP = 'https://api.whatsapp.com/send/?phone=2613062585&text=Hola!%20Vi%20el%20cat%C3%A1logo%20y%20quiero%20consultar%20sobre%20un%20producto.&type=phone_number'

const ALL = 'Todos'

export default function Catalog() {
  const [active, setActive]   = useState(ALL)
  const [lightbox, setLightbox] = useState<string | null>(null)

  const filtered = active === ALL ? products : products.filter(p => p.category === active)

  return (
    <section id="catalogo" className="bg-cream py-24">

      {/* Header */}
      <div className="reveal text-center mb-14 px-8 md:px-[72px]">
        <SectionLabel center>Catálogo completo</SectionLabel>
        <h2 className="font-serif text-[clamp(2rem,3.5vw,3rem)] font-light text-ink">
          Todos nuestros <em className="italic text-red">productos</em>
        </h2>
        <p className="mt-4 text-[0.88rem] font-light text-gray-mid max-w-[480px] mx-auto leading-[1.8]">
          Seleccioná una categoría para filtrar o consultanos por cualquier artículo.
        </p>
      </div>

      {/* Category filter pills */}
      <div className="reveal flex flex-wrap gap-2 justify-center mb-12 px-8 md:px-[72px]">
        {[ALL, ...categories].map(cat => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`
              text-[0.68rem] tracking-[0.18em] uppercase px-5 py-2
              border transition-all duration-200 cursor-pointer
              ${active === cat
                ? 'bg-red border-red text-parchment'
                : 'border-gray-light text-gray-dark hover:border-red hover:text-red bg-transparent'
              }
            `}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Count label */}
      <p className="text-center text-[0.72rem] tracking-[0.14em] uppercase text-gray-mid mb-8">
        {filtered.length} {filtered.length === 1 ? 'producto' : 'productos'}
        {active !== ALL && <span> · {active}</span>}
      </p>

      {/* Grid */}
      <div className="px-8 md:px-[72px] grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 max-w-[1400px] mx-auto">
        {filtered.map((product, i) => (
          <div
            key={`${product.name}-${i}`}
            className="reveal group bg-parchment border border-gray-light/60 overflow-hidden"
            style={{ transitionDelay: `${(i % 10) * 40}ms` }}
          >
            {/* Image */}
            <button
              onClick={() => setLightbox(product.url)}
              className="block w-full bg-cream-dark relative overflow-hidden"
              style={{ aspectRatio: '1 / 1' }}
              aria-label={`Ver ${product.name}`}
            >
              <img
                src={product.url}
                alt={product.name}
                loading="lazy"
                className="w-full h-full object-contain p-3 transition-transform duration-500 group-hover:scale-[1.06]"
                onError={e => {
                  (e.currentTarget as HTMLImageElement).style.display = 'none'
                }}
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/10 transition-colors duration-300 flex items-center justify-center">
                <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[0.65rem] tracking-[0.2em] uppercase text-parchment bg-ink/70 px-3 py-1.5">
                  Ver imagen
                </span>
              </div>
            </button>

            {/* Info */}
            <div className="px-3 py-3 border-t border-gray-light/40">
              <p className="text-[0.75rem] tracking-[0.04em] text-ink leading-snug mb-2 line-clamp-2">
                {product.name}
              </p>
              <span className="text-[0.6rem] tracking-[0.12em] uppercase text-gray-mid block mb-3">
                {product.category}
              </span>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-block text-[0.62rem] tracking-[0.16em] uppercase
                  text-red hover:text-red-light transition-colors duration-200
                  no-underline
                "
              >
                Consultar →
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Global CTA */}
      <div className="reveal text-center mt-16 px-8">
        <p className="text-[0.88rem] text-gray-mid mb-6 leading-[1.8]">
          ¿No encontrás lo que buscás? Tenemos más artículos disponibles.
        </p>
        <a
          href={WHATSAPP}
          target="_blank"
          rel="noopener noreferrer"
          className="
            inline-block bg-red hover:bg-red-light text-parchment
            text-[0.75rem] tracking-[0.18em] uppercase
            px-10 py-4 no-underline
            transition-all duration-300 hover:-translate-y-0.5
            hover:shadow-[0_8px_24px_rgba(184,34,42,0.22)]
          "
        >
          Consultar catálogo completo
        </a>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[100] bg-ink/80 flex items-center justify-center p-6 backdrop-blur-sm"
          onClick={() => setLightbox(null)}
        >
          <div
            className="relative max-w-2xl w-full bg-parchment border border-gray-light shadow-2xl"
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-3 right-4 text-gray-mid hover:text-red text-xl leading-none transition-colors duration-200"
              aria-label="Cerrar"
            >
              ✕
            </button>
            <img
              src={lightbox}
              alt="Vista del producto"
              className="w-full object-contain max-h-[75vh] p-6"
            />
          </div>
        </div>
      )}
    </section>
  )
}
