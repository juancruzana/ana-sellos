import { useEffect } from 'react'
import Nav         from './components/Nav'
import Hero        from './components/Hero'
import Marquee     from './components/Marquee'
import About       from './components/About'
import Products    from './components/Products'
import Catalog     from './components/Catalog'
import Process     from './components/Process'
import Testimonial from './components/Testimonial'
import Info        from './components/Info'
import CtaBand     from './components/CtaBand'
import Footer      from './components/Footer'

export default function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 }
    )
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Products />
        <Catalog />
        <Process />
        <Testimonial />
        <Info />
        <CtaBand />
      </main>
      <Footer />
    </>
  )
}
