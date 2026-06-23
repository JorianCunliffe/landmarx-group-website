'use client'

import { useEffect, useRef, useState } from 'react'

export default function Counter({
  end,
  prefix = '',
  suffix = '',
  duration = 1800,
  decimals = 0,
  className = '',
}: {
  end: number
  prefix?: string
  suffix?: string
  duration?: number
  decimals?: number
  className?: string
}) {
  const ref = useRef<HTMLSpanElement>(null)
  const [value, setValue] = useState(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) {
      setValue(end)
      return
    }

    let raf = 0
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        io.disconnect()
        const start = performance.now()
        const tick = (now: number) => {
          const t = Math.min((now - start) / duration, 1)
          const eased = 1 - Math.pow(1 - t, 4)
          const raw = end * eased
          setValue(decimals > 0 ? parseFloat(raw.toFixed(decimals)) : Math.round(raw))
          if (t < 1) raf = requestAnimationFrame(tick)
        }
        raf = requestAnimationFrame(tick)
      },
      { threshold: 0.4 }
    )
    io.observe(el)
    return () => {
      io.disconnect()
      cancelAnimationFrame(raf)
    }
  }, [end, duration, decimals])

  return (
    <span ref={ref} className={className}>
      {prefix}
      {decimals > 0 ? value.toFixed(decimals) : value.toLocaleString()}
      {suffix}
    </span>
  )
}
