import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Suspense } from 'react'
import useThreeTheme from '../../hooks/useThreeTheme'
import useReducedMotion from '../../hooks/useReducedMotion'

function DecorativeGeometry({ geometry = 'octahedron', size = 1 }) {
  const meshRef = useRef()
  const { accentColor } = useThreeTheme()
  const reduced = useReducedMotion()

  const getGeometry = () => {
    switch (geometry) {
      case 'octahedron':
        return <octahedronGeometry args={[size, 0]} />
      case 'torusknot':
        return <torusKnotGeometry args={[size * 0.5, size * 0.15, 100, 16]} />
      case 'dodecahedron':
        return <dodecahedronGeometry args={[size]} />
      default:
        return <octahedronGeometry args={[size, 0]} />
    }
  }

  useFrame(() => {
    if (!meshRef.current || reduced) return
    meshRef.current.rotation.x += 0.005
    meshRef.current.rotation.y += 0.008
    meshRef.current.rotation.z += 0.003
  })

  return (
    <mesh ref={meshRef}>
      {getGeometry()}
      <meshStandardMaterial
        wireframe
        color={accentColor}
        opacity={0.4}
        transparent
        emissive={accentColor}
        emissiveIntensity={0.5}
      />
    </mesh>
  )
}

export default function DecorativeShape({ geometry = 'octahedron', size = 1, position = [0, 0, 0], width = 200, height = 200 }) {
  const reduced = useReducedMotion()

  if (reduced) return null

  return (
    <div style={{ width, height, position: 'relative' }}>
      <Suspense fallback={null}>
        <Canvas camera={{ position: [0, 0, 3], fov: 50 }} dpr={[1, 1.5]} frameloop="demand">
          <ambientLight intensity={0.6} />
          <pointLight position={[1, 1, 1]} intensity={1} color="#00d4ff" />
          <DecorativeGeometry geometry={geometry} size={size} />
        </Canvas>
      </Suspense>
    </div>
  )
}
