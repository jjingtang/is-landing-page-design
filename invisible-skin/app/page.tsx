'use client'

import { startTransition, useCallback, useEffect, useRef, useState } from 'react'
import BackgroundLayer from '@/components/BackgroundLayer'
import HeroLockup from '@/components/HeroLockup'
import LiquidGlassLayer from '@/components/LiquidGlassLayer'
import Navigation from '@/components/Navigation'

const MIST_CLOUDS = [
  { x: 0.16, y: 0.12, radius: 0.22, alpha: 0.34 },
  { x: 0.48, y: 0.1, radius: 0.18, alpha: 0.28 },
  { x: 0.76, y: 0.14, radius: 0.2, alpha: 0.24 },
  { x: 0.36, y: 0.28, radius: 0.24, alpha: 0.16 },
]

export default function Home() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [wipeProgress, setWipeProgress] = useState(0)
  const isPressingRef = useRef(false)

  const paintMist = useCallback(
    (ctx: CanvasRenderingContext2D, width: number, height: number) => {
      ctx.clearRect(0, 0, width, height)
      ctx.globalCompositeOperation = 'source-over'

      const baseMist = ctx.createLinearGradient(0, 0, 0, height)
      baseMist.addColorStop(0, 'rgba(245, 240, 232, 0.28)')
      baseMist.addColorStop(0.24, 'rgba(245, 240, 232, 0.22)')
      baseMist.addColorStop(0.56, 'rgba(237, 229, 213, 0.16)')
      baseMist.addColorStop(1, 'rgba(245, 240, 232, 0.12)')
      ctx.fillStyle = baseMist
      ctx.fillRect(0, 0, width, height)

      const topMist = ctx.createLinearGradient(0, 0, 0, height * 0.42)
      topMist.addColorStop(0, 'rgba(255, 255, 255, 0.44)')
      topMist.addColorStop(0.38, 'rgba(245, 240, 232, 0.24)')
      topMist.addColorStop(1, 'rgba(245, 240, 232, 0)')
      ctx.fillStyle = topMist
      ctx.fillRect(0, 0, width, height * 0.44)

      MIST_CLOUDS.forEach((cloud) => {
        const radius = width * cloud.radius
        const x = width * cloud.x
        const y = height * cloud.y
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius)
        gradient.addColorStop(0, `rgba(255, 255, 255, ${cloud.alpha})`)
        gradient.addColorStop(0.5, `rgba(245, 240, 232, ${cloud.alpha * 0.72})`)
        gradient.addColorStop(0.82, `rgba(237, 229, 213, ${cloud.alpha * 0.26})`)
        gradient.addColorStop(1, 'rgba(237, 229, 213, 0)')
        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.ellipse(x, y, radius, radius * 0.46, 0, 0, Math.PI * 2)
        ctx.fill()
      })
    },
    []
  )

  /* ── Size the wipe canvas ── */
  const initCanvas = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    const ctx = canvas.getContext('2d')!
    paintMist(ctx, canvas.width, canvas.height)
  }, [paintMist])

  useEffect(() => {
    initCanvas()
    window.addEventListener('resize', initCanvas)
    return () => window.removeEventListener('resize', initCanvas)
  }, [initCanvas])

  /* ── Erase fog with pointer ── */
  const erase = useCallback((clientX: number, clientY: number) => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')!
    const r = canvas.getBoundingClientRect()
    const x = clientX - r.left
    const y = clientY - r.top

    ctx.globalCompositeOperation = 'destination-out'
    const g = ctx.createRadialGradient(x, y, 0, x, y, 88)
    g.addColorStop(0, 'rgba(46, 42, 37, 1)')
    g.addColorStop(0.55, 'rgba(46, 42, 37, 0.7)')
    g.addColorStop(1, 'rgba(46, 42, 37, 0)')
    ctx.fillStyle = g
    ctx.beginPath()
    ctx.arc(x, y, 88, 0, Math.PI * 2)
    ctx.fill()

    /* measure progress */
    const d = ctx.getImageData(0, 0, canvas.width, canvas.height).data
    let cleared = 0
    for (let i = 3; i < d.length; i += 4) if (d[i] < 8) cleared++
    startTransition(() => {
      setWipeProgress(Math.min(1, cleared / (canvas.width * canvas.height)))
    })
  }, [])

  const onMouseMove = useCallback((e: React.MouseEvent) => {
    if (isPressingRef.current) erase(e.clientX, e.clientY)
  }, [erase])

  const onPointerDown = useCallback((e: React.PointerEvent) => {
    isPressingRef.current = true
    erase(e.clientX, e.clientY)
  }, [erase])

  const onPointerUp = useCallback(() => {
    isPressingRef.current = false
  }, [])

  const onTouchMove = useCallback((e: React.TouchEvent) => {
    e.preventDefault()
    Array.from(e.touches).forEach(t => erase(t.clientX, t.clientY))
  }, [erase])

  return (
    <div
      id="home"
      className="relative w-screen h-screen overflow-hidden wipe-zone"
      onMouseMove={onMouseMove}
      onPointerDown={onPointerDown}
      onPointerUp={onPointerUp}
      onPointerLeave={onPointerUp}
      onTouchMove={onTouchMove}
    >
      {/* Layer 1 — editorial field scene and copy */}
      <BackgroundLayer />

      {/* Layer 2 — hovering mist layer above the background */}
      <LiquidGlassLayer wipeProgress={wipeProgress} />

      {/* Brand lockup — hidden below the wipe surface, with a subtle edge hint above it */}
      <HeroLockup wipeProgress={wipeProgress} />

      {/* Canvas: translucent mist surface, wiped away where the user drags */}
      <canvas ref={canvasRef} />

      {/* Navigation — always visible */}
      <Navigation />
    </div>
  )
}
