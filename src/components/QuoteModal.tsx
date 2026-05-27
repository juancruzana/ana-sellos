import { useState, useEffect, useRef } from 'react'

interface Props {
  productName: string
  onClose: () => void
}

type Status = 'idle' | 'sending' | 'success' | 'error'

const inputClass = `
  w-full bg-parchment border border-gray-light
  px-4 py-2.5 text-[0.85rem] text-ink
  placeholder:text-gray-mid/50
  focus:outline-none focus:border-red
  transition-colors duration-200
`

const labelClass = 'block text-[0.65rem] tracking-[0.15em] uppercase text-gray-mid mb-1.5'

export default function QuoteModal({ productName, onClose }: Props) {
  const [form, setForm] = useState({
    nombre:   '',
    contacto: '',
    producto: productName,
    cantidad: '',
  })
  const [status] = useState<Status>('idle')
  const overlayRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [onClose])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
  }

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[200] bg-ink/70 flex items-center justify-center p-6 backdrop-blur-sm"
      onClick={e => { if (e.target === overlayRef.current) onClose() }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="quote-title"
        className="relative w-full max-w-md bg-cream border border-gray-light shadow-2xl"
        onClick={e => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-mid hover:text-red transition-colors duration-200 leading-none cursor-pointer"
          aria-label="Cerrar"
        >
          ✕
        </button>

        <div className="p-8 pt-10">
          <p className="text-[0.65rem] tracking-[0.2em] uppercase text-red mb-1">Catálogo</p>
          <h2 id="quote-title" className="font-serif text-2xl font-light text-ink mb-7">
            Solicitar cotización
          </h2>

          {status === 'success' ? (
            <div className="text-center py-6">
              <p className="font-serif text-xl text-ink mb-3">¡Solicitud enviada!</p>
              <p className="text-[0.85rem] text-gray-mid leading-relaxed mb-7">
                Recibimos tu consulta y nos ponemos en contacto a la brevedad.
              </p>
              <button
                onClick={onClose}
                className="text-[0.72rem] tracking-[0.18em] uppercase text-red hover:text-red-light transition-colors cursor-pointer"
              >
                Cerrar
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className={labelClass}>Nombre completo *</label>
                <input
                  type="text"
                  name="nombre"
                  value={form.nombre}
                  onChange={handleChange}
                  required
                  placeholder="Tu nombre"
                  className={inputClass}
                />
              </div>

              <div>
                <label className={labelClass}>Teléfono o Email *</label>
                <input
                  type="text"
                  name="contacto"
                  value={form.contacto}
                  onChange={handleChange}
                  required
                  placeholder="Tu teléfono o email"
                  className={inputClass}
                />
              </div>

              <div>
                <label className={labelClass}>Producto de interés *</label>
                <input
                  type="text"
                  name="producto"
                  value={form.producto}
                  onChange={handleChange}
                  required
                  className={inputClass}
                />
              </div>

              <div>
                <label className={labelClass}>Cantidad estimada *</label>
                <input
                  type="number"
                  name="cantidad"
                  value={form.cantidad}
                  onChange={handleChange}
                  required
                  min="1"
                  placeholder="Ej: 50"
                  className={inputClass}
                />
              </div>

              {status === 'error' && (
                <p className="text-[0.75rem] text-red">
                  Hubo un error al enviar. Intentá de nuevo o escribinos por WhatsApp.
                </p>
              )}

              <button
                type="submit"
                disabled={status === 'sending'}
                className="
                  w-full bg-red hover:bg-red-light text-parchment
                  text-[0.72rem] tracking-[0.18em] uppercase
                  py-3.5 mt-2
                  transition-all duration-300
                  disabled:opacity-60 disabled:cursor-not-allowed
                  cursor-pointer
                "
              >
                {status === 'sending' ? 'Enviando...' : 'Enviar solicitud'}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
