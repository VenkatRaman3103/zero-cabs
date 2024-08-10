'use client'
import { useEffect, useRef, useState } from 'react'
import './index.scss'

export const FeatureSection = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const horizontalScrollRef = useRef<HTMLDivElement>(null)
  const [isScrollingHorizontally, setIsScrollingHorizontally] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current
      const horizontalScroll = horizontalScrollRef.current
      if (container && horizontalScroll) {
        const containerRect = container.getBoundingClientRect()
        const horizontalRect = horizontalScroll.getBoundingClientRect()
        const windowHeight = window.innerHeight

        if (horizontalRect.top <= 0 && horizontalRect.bottom >= 0) {
          setIsScrollingHorizontally(true)
          const scrollProgress = -horizontalRect.top / (horizontalRect.height - windowHeight)
          const maxHorizontalScroll = horizontalScroll.scrollWidth - horizontalScroll.clientWidth
          horizontalScroll.scrollLeft = scrollProgress * maxHorizontalScroll
        } else {
          setIsScrollingHorizontally(false)
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (isScrollingHorizontally) {
        e.preventDefault()
        const horizontalScroll = horizontalScrollRef.current
        if (horizontalScroll) {
          horizontalScroll.scrollLeft += e.deltaY

          // Check if we've reached the end of horizontal scrolling
          if (
            (e.deltaY > 0 &&
              horizontalScroll.scrollLeft + horizontalScroll.clientWidth >=
                horizontalScroll.scrollWidth) ||
            (e.deltaY < 0 && horizontalScroll.scrollLeft <= 0)
          ) {
            // Allow vertical scrolling to continue
            window.scrollBy(0, e.deltaY)
          }
        }
      }
    }

    window.addEventListener('wheel', handleWheel, { passive: false })
    return () => window.removeEventListener('wheel', handleWheel)
  }, [isScrollingHorizontally])

  return (
    <div className="container" ref={containerRef}>
      <div className="section vertical">Vertical Section 1</div>
      <div className="section horizontal" ref={horizontalScrollRef}>
        <div className="horizontal-content">
          <div>Horizontal Section 1</div>
          <div>Horizontal Section 2</div>
          <div>Horizontal Section 3</div>
        </div>
      </div>
      <div className="section vertical">Vertical Section 2</div>
    </div>
  )
}
