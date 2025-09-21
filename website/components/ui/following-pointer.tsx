"use client"

import React, { useEffect, useState } from "react"
import { motion, AnimatePresence, useMotionValue, MotionValue } from "framer-motion"
import { cn } from "@/lib/utils"

export const FollowerPointerCard = ({
  children,
  className,
  title,
}: {
  children: React.ReactNode
  className?: string
  title?: string | React.ReactNode
}) => {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const ref = React.useRef<HTMLDivElement>(null)
  const [rect, setRect] = useState<DOMRect | null>(null)
  const [isInside, setIsInside] = useState<boolean>(false)

  useEffect(() => {
    console.log("[v0] FollowerPointerCard mounted")
    return () => {
      console.log("[v0] FollowerPointerCard unmounted")
    }
  }, [])

  useEffect(() => {
    console.log("[v0] isInside changed:", isInside)
  }, [isInside])

  useEffect(() => {
    const updateRect = () => {
      if (ref.current) {
        setRect(ref.current.getBoundingClientRect())
      }
    }

    updateRect()

    const handleResize = () => updateRect()
    const handleScroll = () => updateRect()

    window.addEventListener("resize", handleResize)
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (rect) {
      const relativeX = e.clientX - rect.left
      const relativeY = e.clientY - rect.top
      x.set(relativeX)
      y.set(relativeY)
    }
  }

  const handleMouseLeave = () => {
    setIsInside(false)
  }

  const handleMouseEnter = () => {
    setIsInside(true)
  }

  return (
    <div
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      style={{
        cursor: "none",
      }}
      ref={ref}
      className={cn("relative", className)}
    >
      <AnimatePresence>{isInside && <FollowPointer x={x} y={y} title={title} />}</AnimatePresence>
      {children}
    </div>
  )
}

export const FollowPointer = ({
  x,
  y,
  title,
}: {
  x: MotionValue<number>
  y: MotionValue<number>
  title?: string | React.ReactNode
}) => {
  return (
    <motion.div
      className="absolute z-[99999] pointer-events-none"
      style={{
        top: y,
        left: x,
        transform: "translate(-50%, -50%)",
        pointerEvents: "none",
      }}
      initial={{
        scale: 0,
        opacity: 0,
      }}
      animate={{
        scale: 1,
        opacity: 1,
      }}
      exit={{
        scale: 0,
        opacity: 0,
      }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 20,
        mass: 0.1,
      }}
    >
      <div className="flex items-center pointer-events-none">
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="1"
          viewBox="0 0 16 16"
          className="h-6 w-6 -rotate-[70deg] transform stroke-orange-400 text-orange-500 drop-shadow-lg pointer-events-none"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103z"></path>
        </svg>
        <motion.div
          style={{
            backgroundColor: "#e78a53", // Fixed orange color
          }}
          initial={{
            scale: 0.5,
            opacity: 0,
          }}
          animate={{
            scale: 1,
            opacity: 1,
          }}
          exit={{
            scale: 0.5,
            opacity: 0,
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 25,
            mass: 0.1,
          }}
          className="ml-2 min-w-max rounded-full px-3 py-1.5 text-xs whitespace-nowrap text-white shadow-lg border border-white/20 pointer-events-none font-medium"
        >
          {title || `Dynamic Layout`}
        </motion.div>
      </div>
    </motion.div>
  )
}
