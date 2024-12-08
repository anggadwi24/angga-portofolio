'use client'

import { useRef, useLayoutEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function ClientHorizontalScroll({ children }) {
  const sectionRef = useRef(null)
  const triggerRef = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const pin = gsap.fromTo(
        sectionRef.current,
        { translateX: 0 },
        {
          translateX: '-100vw',
          ease: 'none',
          duration: 1,
          scrollTrigger: {
            trigger: triggerRef.current,
            start: 'top top',
            end: '+=100%',
            scrub: 0.6,
            pin: true,
          },
        }
      )

      return () => pin.kill()
    })

    return () => ctx.revert()
  }, [])

  return (
    <section className="relative overflow-hidden" ref={triggerRef}>
      <div ref={sectionRef} className="flex">
        {children}
      </div>
    </section>
  )
}
