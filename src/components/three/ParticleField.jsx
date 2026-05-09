import React, { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { BufferAttribute } from 'three'
import useThreeTheme from '../../hooks/useThreeTheme'
import useReducedMotion from '../../hooks/useReducedMotion'

export default function ParticleField() {
  const pointsRef = useRef()
  const reduced = useReducedMotion()
  const { particleColor } = useThreeTheme()

  const count = typeof window !== 'undefined' && window.innerWidth < 768 ? 500 : 2000

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      arr[i * 3 + 0] = (Math.random() - 0.5) * 16
      arr[i * 3 + 1] = (Math.random() - 0.5) * 16
      arr[i * 3 + 2] = (Math.random() - 0.5) * 16
    }
    return arr
  }, [count])

  useFrame((state) => {
    if (!pointsRef.current || reduced) return
    const t = state.clock.getElapsedTime()
    pointsRef.current.rotation.y += 0.001
    const pos = pointsRef.current.geometry.attributes.position.array
    for (let i = 0; i < pos.length / 3; i++) {
      pos[i * 3 + 0] += Math.sin(t + i) * 0.0001
      pos[i * 3 + 1] += Math.cos(t + i * 0.1) * 0.0001
    }
    pointsRef.current.geometry.attributes.position.needsUpdate = true
  })

  return (
    <points ref={pointsRef} position={[0,0,0]}>
      <bufferGeometry>
        <bufferAttribute attachObject={['attributes', 'position']} count={positions.length / 3} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.015} color={particleColor} transparent opacity={0.6} sizeAttenuation={true} />
    </points>
  )
}
