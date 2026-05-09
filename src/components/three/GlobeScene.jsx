import React, { Suspense, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Stars } from '@react-three/drei'
import { MeshStandardMaterial } from 'three'
import useThreeTheme from '../../hooks/useThreeTheme'
import useReducedMotion from '../../hooks/useReducedMotion'

function Globe({ size = 1 }) {
  const mesh = useRef()
  const marker = useRef()
  const ping = useRef()
  const { accentColor } = useThreeTheme()

  // Philippines coords: lat 8, lng 124 (convert to radians)
  const lat = 8 * (Math.PI / 180)
  const lng = 124 * (Math.PI / 180)
  const x = Math.cos(lat) * Math.sin(lng)
  const y = Math.sin(lat)
  const z = Math.cos(lat) * Math.cos(lng)

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    if (ping.current) {
      const s = 0.03 + Math.abs(Math.sin(t)) * 0.07
      ping.current.scale.set(s, s, s)
      ping.current.material.opacity = 0.6 * (1 - (s - 0.03) / 0.07)
    }
  })

  return (
    <group>
      <mesh ref={mesh}>
        <sphereGeometry args={[size, 64, 64]} />
        <meshStandardMaterial color={'#0a1628'} metalness={0.8} roughness={0.2} />
      </mesh>

      <mesh position={[x * size, y * size, z * size]} ref={marker}>
        <sphereGeometry args={[0.03, 16, 16]} />
        <meshStandardMaterial emissive={'#00ff9d'} color={'#00ff9d'} />
      </mesh>

      <mesh position={[x * size, y * size, z * size]} ref={ping}>
        <sphereGeometry args={[0.03, 16, 16]} />
        <meshStandardMaterial color={'#00ff9d'} transparent opacity={0.4} />
      </mesh>

      <mesh>
        <sphereGeometry args={[size + 0.01, 24, 24]} />
        <meshBasicMaterial color={'#00d4ff'} wireframe opacity={0.15} transparent />
      </mesh>

      <mesh rotation={[0, 0, 0]}>
        <torusGeometry args={[1.02, 0.003, 8, 100]} />
        <meshStandardMaterial emissive={'#00d4ff'} color={'#00d4ff'} emissiveIntensity={1} />
      </mesh>
    </group>
  )
}

export default function GlobeScene() {
  const reduced = useReducedMotion()

  return (
    <Suspense fallback={null}>
      <Canvas style={{ width: '100%', height: '100%' }} camera={{ position: [0, 0, 2.5], fov: 45 }} dpr={[1, 1.5]} frameloop={reduced ? 'demand' : 'demand'}>
        <ambientLight intensity={0.5} />
        <pointLight position={[3, 3, 3]} color="#00d4ff" intensity={2} />
        <pointLight position={[-2,2,-2]} color="#00d4ff" intensity={1.0} />
        <Globe />
        <Stars radius={10} depth={5} count={1000} factor={2} saturation={0} fade />
        <OrbitControls enableZoom={true} enablePan={false} autoRotate autoRotateSpeed={1.5} />
      </Canvas>
    </Suspense>
  )
}
