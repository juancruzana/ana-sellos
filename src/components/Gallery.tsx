import { useRef, useEffect, useCallback } from 'react'
import SectionLabel from './SectionLabel'
import {
  GalleryStampFlorist,
  GalleryStampRosalia,
  GalleryStampDulce,
  GalleryStampBienvenida,
  GalleryStampOrganic,
} from './StampIllustrations'

type Tile =
  | { type: 'svg';   className: string; innerClass: string; stamp: React.ReactNode }
  | { type: 'photo'; className: string; src: string; alt: string }

const tiles: Tile[] = [
  {
    type: 'photo',
    className: 'flex-shrink-0 w-[240px] h-[280px]',
    src: 'https://images.unsplash.com/photo-1607344645866-009c320b63e0?auto=format&fit=crop&w=480&q=80',
    alt: 'Sellos y papelería artesanal',
  },
  {
    type: 'svg',
    className: 'flex-shrink-0 w-[200px] h-[260px]',
    innerClass: 'w-[85%] h-[85%]',
    stamp: <GalleryStampFlorist />,
  },
  {
    type: 'photo',
    className: 'flex-shrink-0 w-[220px] h-[180px] self-center',
    src: 'https://images.unsplash.com/photo-1456574808786-d2ba7a6aa654?auto=format&fit=crop&w=440&q=80',
    alt: 'Materiales de papelería artesanal',
  },
  {
    type: 'svg',
    className: 'flex-shrink-0 w-[280px] h-[180px] self-center',
    innerClass: 'w-[85%] h-[85%]',
    stamp: <GalleryStampRosalia />,
  },
  {
    type: 'photo',
    className: 'flex-shrink-0 w-[220px] h-[300px]',
    src: 'https://images.unsplash.com/photo-1583484963886-cfe2bff2945f?auto=format&fit=crop&w=440&q=80',
    alt: 'Packaging y branding artesanal',
  },
  {
    type: 'svg',
    className: 'flex-shrink-0 w-[200px] h-[260px]',
    innerClass: 'w-[85%] h-[85%]',
    stamp: <GalleryStampDulce />,
  },
  {
    type: 'photo',
    className: 'flex-shrink-0 w-[200px] h-[260px]',
    src: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=400&q=80',
    alt: 'Papelería y diseño editorial',
  },
  {
    type: 'svg',
    className: 'flex-shrink-0 w-[180px] h-[180px] self-center',
    innerClass: 'w-[85%] h-[85%]',
    stamp: <GalleryStampBienvenida />,
  },
  {
    type: 'photo',
    className: 'flex-shrink-0 w-[260px] h-[200px] self-center',
    src: 'https://images.unsplash.com/photo-1574634534894-89d7576c8259?auto=format&fit=crop&w=520&q=80',
    alt: 'Detalles de diseño en packaging',
  },
  {
    type: 'svg',
    className: 'flex-shrink-0 w-[200px] h-[260px]',
    innerClass: 'w-[85%] h-[85%]',
    stamp: <GalleryStampOrganic />,
  },
  {
    type: 'photo',
    className: 'flex-shrink-0 w-[240px] h-[280px]',
    src: 'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=480&q=80',
    alt: 'Craft y diseño artesanal',
  },
]

const EDGE_ZONE   = 0.30  // 30% de cada lado activa el scroll
const MAX_SPEED   = 5     // px por frame en el extremo
const LERP_SCROLL = 0.05  // suavizado al scrollear con mouse
const LERP_RETURN = 0.01 // suavizado al volver al centro (más delicado)

type Mode = 'idle' | 'scrolling' | 'returning'

export default function Gallery() {
  const scrollRef    = useRef<HTMLDivElement>(null)
  const rafRef       = useRef<number | null>(null)
  const mode         = useRef<Mode>('idle')
  const currentSpeed = useRef(0)
  const targetSpeed  = useRef(0)
  const centerPos    = useRef(0)

  const ensureRaf = useCallback((fn: FrameRequestCallback) => {
    if (rafRef.current === null) rafRef.current = requestAnimationFrame(fn)
  }, [])

  const tick = useCallback(() => {
    const el = scrollRef.current
    if (!el) { rafRef.current = null; return }

    if (mode.current === 'returning') {
      const delta = centerPos.current - el.scrollLeft
      if (Math.abs(delta) < 0.4) {
        el.scrollLeft = centerPos.current
        mode.current = 'idle'
        rafRef.current = null
        return
      }
      el.scrollLeft += delta * LERP_RETURN

    } else {
      // modo scrolling (o coast tras salir de zona)
      currentSpeed.current += (targetSpeed.current - currentSpeed.current) * LERP_SCROLL
      if (Math.abs(currentSpeed.current) < 0.05 && targetSpeed.current === 0) {
        currentSpeed.current = 0
        rafRef.current = null
        return
      }
      el.scrollLeft += currentSpeed.current
    }

    rafRef.current = requestAnimationFrame(tick)
  }, [])

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const el = scrollRef.current
    if (!el) return
    const { left, width } = el.getBoundingClientRect()
    const ratio = (e.clientX - left) / width

    // Si estaba volviendo al centro, interrumpir y scrollear
    mode.current = 'scrolling'

    if (ratio < EDGE_ZONE) {
      targetSpeed.current = -MAX_SPEED * (1 - ratio / EDGE_ZONE)
    } else if (ratio > 1 - EDGE_ZONE) {
      targetSpeed.current = MAX_SPEED * ((ratio - (1 - EDGE_ZONE)) / EDGE_ZONE)
    } else {
      targetSpeed.current = 0
    }

    ensureRaf(tick)
  }, [tick, ensureRaf])

  const handleMouseLeave = useCallback(() => {
    targetSpeed.current  = 0
    currentSpeed.current = 0
    mode.current = 'returning'
    ensureRaf(tick)
  }, [tick, ensureRaf])

  // Centrar al montar y guardar la posición
  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    requestAnimationFrame(() => {
      centerPos.current = (el.scrollWidth - el.clientWidth) / 2
      el.scrollLeft = centerPos.current
    })
  }, [])

  // Cleanup al desmontar
  useEffect(() => () => {
    if (rafRef.current !== null) cancelAnimationFrame(rafRef.current)
  }, [])

  return (
    <section id="galeria" className="bg-cream-dark py-20 overflow-hidden">
      <div className="reveal text-center mb-12 px-8 md:px-[72px]">
        <SectionLabel center>Galería</SectionLabel>
        <h2 className="font-serif text-[clamp(2rem,3.5vw,3rem)] font-light text-ink">
          Piezas que <em className="italic text-red">inspiran</em>
        </h2>
      </div>

      <div
        ref={scrollRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="flex gap-4 px-8 md:px-[72px] overflow-x-auto gallery-scroll"
      >
        {tiles.map((tile, i) =>
          tile.type === 'photo' ? (
            <div
              key={i}
              className={`
                ${tile.className}
                border border-gray-light/50 overflow-hidden
                transition-all duration-300 hover:-translate-y-1.5
                hover:shadow-[0_16px_40px_rgba(0,0,0,0.1)]
              `}
            >
              <img src={tile.src} alt={tile.alt} className="w-full h-full object-cover" />
            </div>
          ) : (
            <div
              key={i}
              className={`
                ${tile.className}
                bg-parchment border border-gray-light/50
                flex items-center justify-center
                transition-all duration-300 hover:-translate-y-1.5
                hover:shadow-[0_16px_40px_rgba(0,0,0,0.1)]
              `}
            >
              <div className={`${tile.innerClass} flex items-center justify-center border border-cream-dark`}>
                {tile.stamp}
              </div>
            </div>
          )
        )}
      </div>
    </section>
  )
}
