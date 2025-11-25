"use client"

import { useEffect, useRef } from "react"

export function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d", { alpha: true })
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    let mouseX = 0
    let mouseY = 0
    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }
    window.addEventListener("mousemove", handleMouseMove)

    const particles: Array<{
      x: number
      y: number
      vx: number
      vy: number
      radius: number
      opacity: number
      baseX: number
      baseY: number
    }> = []

    for (let i = 0; i < 120; i++) {
      const x = Math.random() * canvas.width
      const y = Math.random() * canvas.height
      particles.push({
        x,
        y,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        radius: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.6 + 0.3,
        baseX: x,
        baseY: y,
      })
    }

    let animationId: number

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle, i) => {
        const dx = mouseX - particle.x
        const dy = mouseY - particle.y
        const distance = Math.sqrt(dx * dx + dy * dy)
        const maxDistance = 180

        if (distance < maxDistance) {
          const force = (1 - distance / maxDistance) * 0.8
          particle.x += dx * force * 0.03
          particle.y += dy * force * 0.03
        } else {
          particle.x += (particle.baseX - particle.x) * 0.02
          particle.y += (particle.baseY - particle.y) * 0.02
        }

        particle.x += particle.vx
        particle.y += particle.vy

        if (particle.x < 0 || particle.x > canvas.width) {
          particle.vx *= -1
          particle.baseX = particle.x
        }
        if (particle.y < 0 || particle.y > canvas.height) {
          particle.vy *= -1
          particle.baseY = particle.y
        }

        const gradient = ctx.createRadialGradient(
          particle.x,
          particle.y,
          0,
          particle.x,
          particle.y,
          particle.radius * 3,
        )
        gradient.addColorStop(0, `rgba(138, 120, 255, ${particle.opacity})`)
        gradient.addColorStop(0.5, `rgba(138, 120, 255, ${particle.opacity * 0.5})`)
        gradient.addColorStop(1, "rgba(138, 120, 255, 0)")

        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.radius * 3, 0, Math.PI * 2)
        ctx.fillStyle = gradient
        ctx.fill()

        particles.forEach((otherParticle, j) => {
          if (i >= j) return

          const pdx = particle.x - otherParticle.x
          const pdy = particle.y - otherParticle.y
          const pdistance = Math.sqrt(pdx * pdx + pdy * pdy)

          if (pdistance < 150) {
            const mouseDist = Math.sqrt(
              Math.pow((particle.x + otherParticle.x) / 2 - mouseX, 2) +
                Math.pow((particle.y + otherParticle.y) / 2 - mouseY, 2),
            )
            const mouseEffect = mouseDist < 200 ? (1 - mouseDist / 200) * 0.5 : 0

            ctx.beginPath()
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(otherParticle.x, otherParticle.y)

            const alpha = (1 - pdistance / 150) * 0.15 + mouseEffect
            ctx.strokeStyle = `rgba(138, 120, 255, ${alpha})`
            ctx.lineWidth = 1
            ctx.stroke()
          }
        })
      })

      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      window.removeEventListener("mousemove", handleMouseMove)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" style={{ opacity: 0.7 }} />
}
