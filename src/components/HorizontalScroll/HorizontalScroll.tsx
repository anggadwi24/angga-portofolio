// src/components/HorizontalScroll/HorizontalScroll.tsx

import React from 'react'

interface HorizontalScrollProps {
  children: React.ReactNode
}

const HorizontalScroll: React.FC<HorizontalScrollProps> = ({ children }) => {
  return (
    <section className="relative overflow-hidden">
      <div className="flex">
        {children}
      </div>
    </section>
  )
}

export default HorizontalScroll
