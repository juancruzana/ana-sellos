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
