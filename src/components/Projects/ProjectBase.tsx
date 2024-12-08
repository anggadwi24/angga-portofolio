'use client'

import { useEffect, useRef } from 'react'
import ProjectClientSide from './ProjectClientSide'
import { gsap } from 'gsap'

export default function ProjectBase() {
  const titleRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    const initGSAP = async () => {
      const ScrollTrigger = (await import('gsap/ScrollTrigger')).ScrollTrigger
      gsap.registerPlugin(ScrollTrigger)

      if (titleRef.current) {
        gsap.fromTo(
          titleRef.current,
          { 
            opacity: 0, 
            y: -50 
          },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: titleRef.current,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse"
            }
          }
        )
      }
    }

    initGSAP()
  }, [])

  return (
    <section className="w-screen min-h-screen flex-shrink-0 bg-blue-100 flex justify-center p-4 lg:p-14">
      <div className="max-w-7xl w-full p-4">
        <h2 ref={titleRef} className="text-3xl font-bold mb-6 opacity-0">Projects</h2>
        <ProjectClientSide />
      </div>
    </section>
  )
}
