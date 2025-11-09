"use client"
import { motion } from "framer-motion"
import React from "react"

interface MorphingRectangleProps {
  children?: React.ReactNode;
}

export default function MorphingRectangle({ children }: MorphingRectangleProps) {
  return (
    <motion.div
      style={{
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        backdropFilter: "blur(10px)",
        border: "1px solid rgba(255, 255, 255, 0.2)",
        position: "absolute",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {children}
    </motion.div>
  )
}
