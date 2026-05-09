import React, { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Text } from '@react-three/drei'
import skillsData from '../../data/skills'
import useThreeTheme from '../../hooks/useThreeTheme'
import useReducedMotion from '../../hooks/useReducedMotion'

function FibonacciSphereText({ texts }) {
  const group = useRef()
  const { accentColor } = useThreeTheme()

  const positions = useMemo(() => {
    const N = texts.length
    const points = []
    const golden = Math.PI * (3 - Math.sqrt(5))
    for (let i = 0; i < N; i++) {
      const y = 1 - (i / (N - 1)) * 2
      const r = Math.sqrt(1 - y * y)
      const theta = golden * i
      const x = Math.cos(theta) * r
      const z = Math.sin(theta) * r
      points.push([x * 2.5, y * 2.5, z * 2.5])
    }
    return points
  }, [texts])

  useFrame((state) => {
    if (group.current) group.current.rotation.y += 0.002
  })

  return (
    <group ref={group}>
      {texts.map((t, i) => (
        <Text key={t} position={positions[i]} fontSize={0.14} color={accentColor} anchorX="center" anchorY="middle">
          {t}
        </Text>
      ))}
    </group>
  )
}

export default function SkillsOrb() {
  const all = skillsData.flatMap((c) => c.skills)
  const reduced = useReducedMotion()

  return (
    <div className="w-full" style={{ height: 500 }}>
      <Canvas camera={{ position: [0, 0, 6], fov: 50 }} dpr={[1, 1.5]} frameloop={reduced ? 'demand' : 'demand'}>
        <ambientLight intensity={0.8} />
        <pointLight position={[0, 5, 0]} color="#ffffff" intensity={0.5} />
        <FibonacciSphereText texts={all} />
      </Canvas>
    </div>
  )
}
