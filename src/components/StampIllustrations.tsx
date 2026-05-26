export function StampMain() {
  return (
    <svg viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg" width="180" height="180">
      <rect x="12" y="12" width="156" height="156" rx="3" stroke="#8A8480" strokeWidth="1" strokeDasharray="5 4" />
      <rect x="22" y="22" width="136" height="136" rx="2" stroke="#3A3633" strokeWidth="1" />
      <path d="M22 40 L22 22 L40 22" stroke="#B8222A" strokeWidth="1.5" fill="none" />
      <path d="M140 22 L158 22 L158 40" stroke="#B8222A" strokeWidth="1.5" fill="none" />
      <path d="M22 140 L22 158 L40 158" stroke="#B8222A" strokeWidth="1.5" fill="none" />
      <path d="M140 158 L158 158 L158 140" stroke="#B8222A" strokeWidth="1.5" fill="none" />
      <path d="M90 44 L90 66" stroke="#3A3633" strokeWidth="1" />
      <path d="M90 52 C84 46 78 48 76 52" stroke="#3A3633" strokeWidth="1" fill="none" />
      <path d="M90 58 C96 52 102 54 104 58" stroke="#3A3633" strokeWidth="1" fill="none" />
      <text x="90" y="98" fontFamily="Georgia, serif" fontSize="18" fill="#1E1B19" textAnchor="middle" fontStyle="italic" letterSpacing="1">Sellos</text>
      <text x="90" y="118" fontFamily="Georgia, serif" fontSize="22" fill="#B8222A" textAnchor="middle" letterSpacing="3">ANA</text>
      <line x1="60" y1="128" x2="120" y2="128" stroke="#8A8480" strokeWidth=".8" />
      <text x="90" y="143" fontFamily="Georgia, serif" fontSize="8" fill="#8A8480" textAnchor="middle" letterSpacing="2.5">MENDOZA · ARG</text>
    </svg>
  )
}

export function StampCircle() {
  return (
    <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" width="60" height="60">
      <circle cx="40" cy="40" r="28" stroke="#B8222A" strokeWidth="1.5" strokeDasharray="3 2" />
      <circle cx="40" cy="40" r="20" stroke="#3A3633" strokeWidth="1" />
      <text x="40" y="44" fontFamily="Georgia, serif" fontSize="9" fill="#1E1B19" textAnchor="middle" fontStyle="italic">artesanal</text>
    </svg>
  )
}

export function StampFlower() {
  return (
    <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" width="60" height="60">
      <rect x="8" y="8" width="64" height="64" rx="2" stroke="#B8222A" strokeWidth="1.5" strokeDasharray="4 3" />
      <path d="M40 24C40 24 28 32 28 42C28 48.6274 33.3726 54 40 54C46.6274 54 52 48.6274 52 42C52 32 40 24 40 24Z" stroke="#B8222A" strokeWidth="1.5" fill="none" />
      <line x1="40" y1="24" x2="40" y2="54" stroke="#B8222A" strokeWidth="1" opacity=".4" />
    </svg>
  )
}

export function StampBotanical() {
  return (
    <svg viewBox="0 0 180 240" fill="none" xmlns="http://www.w3.org/2000/svg" width="140" height="185">
      <rect x="10" y="10" width="160" height="220" stroke="#C8C2BC" strokeWidth="1" strokeDasharray="6 4" />
      <rect x="20" y="20" width="140" height="200" stroke="#8A8480" strokeWidth=".8" />
      <circle cx="90" cy="90" r="18" stroke="#B8222A" strokeWidth="1.2" fill="none" />
      <circle cx="90" cy="90" r="6" fill="#B8222A" fillOpacity=".15" stroke="#B8222A" strokeWidth="1" />
      <path d="M90 64 C88 72 82 76 90 84 C98 76 92 72 90 64Z" fill="#B8222A" fillOpacity=".2" />
      <path d="M90 116 C88 108 82 104 90 96 C98 104 92 108 90 116Z" fill="#B8222A" fillOpacity=".2" />
      <path d="M64 90 C72 88 76 82 84 90 C76 98 72 92 64 90Z" fill="#B8222A" fillOpacity=".2" />
      <path d="M116 90 C108 88 104 82 96 90 C104 98 108 92 116 90Z" fill="#B8222A" fillOpacity=".2" />
      <line x1="90" y1="108" x2="90" y2="170" stroke="#3A3633" strokeWidth="1" />
      <path d="M90 140 C80 130 68 132 66 140" stroke="#3A3633" strokeWidth="1" fill="none" />
      <path d="M90 155 C100 145 112 147 114 155" stroke="#3A3633" strokeWidth="1" fill="none" />
      <rect x="30" y="188" width="120" height="22" fill="none" stroke="#C8C2BC" strokeWidth=".8" />
      <text x="90" y="203" fontFamily="Georgia, serif" fontSize="9" fill="#8A8480" textAnchor="middle" letterSpacing="2">ARTESANAL</text>
    </svg>
  )
}

export function StampMonogram() {
  return (
    <svg viewBox="0 0 140 180" fill="none" xmlns="http://www.w3.org/2000/svg" width="110" height="140">
      <rect x="8" y="8" width="124" height="164" stroke="#C8C2BC" strokeWidth="1" />
      <circle cx="70" cy="80" r="38" stroke="#B8222A" strokeWidth="1.2" strokeDasharray="4 3" />
      <text x="70" y="72" fontFamily="Georgia, serif" fontSize="26" fill="#1E1B19" textAnchor="middle" fontStyle="italic">S</text>
      <text x="70" y="96" fontFamily="Georgia, serif" fontSize="12" fill="#8A8480" textAnchor="middle" letterSpacing="1.5">ANA</text>
      <line x1="24" y1="138" x2="116" y2="138" stroke="#C8C2BC" strokeWidth=".8" />
      <text x="70" y="154" fontFamily="Georgia, serif" fontSize="7.5" fill="#8A8480" textAnchor="middle" letterSpacing="2">ESTUDIO GRÁFICO</text>
    </svg>
  )
}

// Gallery tile stamps
export function GalleryStampFlorist() {
  return (
    <svg viewBox="0 0 120 160" fill="none" width="90" height="120" xmlns="http://www.w3.org/2000/svg">
      <rect x="4" y="4" width="112" height="152" stroke="#C8C2BC" strokeWidth="1" strokeDasharray="5 3" />
      <circle cx="60" cy="70" r="36" stroke="#B8222A" strokeWidth="1.2" strokeDasharray="3 2" />
      <text x="60" y="65" fontFamily="Georgia,serif" fontSize="14" fontStyle="italic" fill="#3A3633" textAnchor="middle">florist</text>
      <text x="60" y="82" fontFamily="Georgia,serif" fontSize="8" fill="#8A8480" textAnchor="middle" letterSpacing="2">BOUTIQUE</text>
      <line x1="28" y1="130" x2="92" y2="130" stroke="#C8C2BC" strokeWidth=".8" />
      <text x="60" y="145" fontFamily="Georgia,serif" fontSize="7" fill="#8A8480" textAnchor="middle" letterSpacing="1.5">HANDMADE</text>
    </svg>
  )
}

export function GalleryStampRosalia() {
  return (
    <svg viewBox="0 0 180 100" fill="none" width="150" height="83" xmlns="http://www.w3.org/2000/svg">
      <rect x="4" y="4" width="172" height="92" stroke="#C8C2BC" strokeWidth="1" />
      <rect x="14" y="14" width="152" height="72" stroke="#B8222A" strokeWidth=".8" strokeDasharray="3 2" />
      <text x="90" y="52" fontFamily="Georgia,serif" fontSize="22" fontStyle="italic" fill="#1E1B19" textAnchor="middle" letterSpacing="1">La Rosalía</text>
      <text x="90" y="68" fontFamily="Georgia,serif" fontSize="8" fill="#8A8480" textAnchor="middle" letterSpacing="3">TALLER DE COSTURA</text>
    </svg>
  )
}

export function GalleryStampDulce() {
  return (
    <svg viewBox="0 0 120 160" fill="none" width="90" height="120" xmlns="http://www.w3.org/2000/svg">
      <rect x="4" y="4" width="112" height="152" stroke="#C8C2BC" strokeWidth="1" strokeDasharray="5 3" />
      <path d="M60 28 L82 42 L82 72 L60 86 L38 72 L38 42 Z" stroke="#B8222A" strokeWidth="1.2" fill="none" />
      <text x="60" y="60" fontFamily="Georgia,serif" fontSize="11" fontStyle="italic" fill="#1E1B19" textAnchor="middle">dulce</text>
      <text x="60" y="74" fontFamily="Georgia,serif" fontSize="7" fill="#8A8480" textAnchor="middle" letterSpacing="1.5">PASTELERÍA</text>
      <path d="M44 110 C52 98 68 98 76 110" stroke="#3A3633" strokeWidth="1" fill="none" />
      <circle cx="60" cy="116" r="3" fill="#B8222A" fillOpacity=".4" />
      <line x1="20" y1="136" x2="100" y2="136" stroke="#C8C2BC" strokeWidth=".8" />
      <text x="60" y="150" fontFamily="Georgia,serif" fontSize="7" fill="#8A8480" textAnchor="middle" letterSpacing="1.5">ARTESANAL</text>
    </svg>
  )
}

export function GalleryStampBienvenida() {
  return (
    <svg viewBox="0 0 120 120" fill="none" width="90" height="90" xmlns="http://www.w3.org/2000/svg">
      <circle cx="60" cy="60" r="52" stroke="#C8C2BC" strokeWidth="1" strokeDasharray="4 3" />
      <circle cx="60" cy="60" r="40" stroke="#B8222A" strokeWidth="1.2" />
      <text x="60" y="56" fontFamily="Georgia,serif" fontSize="13" fontStyle="italic" fill="#1E1B19" textAnchor="middle">bienvenida</text>
      <text x="60" y="72" fontFamily="Georgia,serif" fontSize="8" fill="#8A8480" textAnchor="middle" letterSpacing="2">MENDOZA</text>
    </svg>
  )
}

export function GalleryStampOrganic() {
  return (
    <svg viewBox="0 0 120 160" fill="none" width="90" height="120" xmlns="http://www.w3.org/2000/svg">
      <rect x="4" y="4" width="112" height="152" stroke="#C8C2BC" strokeWidth="1" strokeDasharray="5 3" />
      <rect x="16" y="16" width="88" height="120" stroke="#3A3633" strokeWidth=".8" />
      <path d="M60 40 C50 50 44 64 50 76 C56 88 70 92 78 84 C86 76 84 60 76 50 C68 40 60 40 60 40Z" stroke="#B8222A" strokeWidth="1.2" fill="none" />
      <line x1="60" y1="40" x2="60" y2="110" stroke="#3A3633" strokeWidth="1" opacity=".4" />
      <text x="60" y="126" fontFamily="Georgia,serif" fontSize="10" fontStyle="italic" fill="#1E1B19" textAnchor="middle">orgánico</text>
    </svg>
  )
}
