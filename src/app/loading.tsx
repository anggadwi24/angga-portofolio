// components/Loading.tsx
'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function Loading() {
    const loadingRef = useRef(null)
    const textRef = useRef(null)

    useEffect(() => {
        const loadingElement = loadingRef.current
        const textElement = textRef.current

        // Animation for the background
        gsap.to(loadingElement, {
            duration: 0.5,
            opacity: 1,
            ease: "power2.inOut"
        })

        // Animation for the text
        const tl = gsap.timeline({ repeat: -1 }) // -1 means infinite repeat

        tl.to(textElement, {
            duration: 0.5,
            opacity: 0,
            yoyo: true,
            repeat: 3,
            ease: "power2.inOut"
        })

        // Cleanup function
        return () => {
            tl.kill() // Stop the animation when component unmounts
        }
    }, [])

    return (
        <div 
            ref={loadingRef} 
            className="fixed inset-0 bg-white flex items-center justify-center opacity-0"
        >
            <div className="max-w-7xl">
                <div ref={textRef} className="text-2xl font-bold">
                    Loading...
                </div>
            </div>
        </div>
    )
}
