import React, { useRef, useEffect } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import useThreeTheme from '../../hooks/useThreeTheme'
import useMobile from '../../hooks/useMobile'

export default function FloatingGeometry() {
  const group = useRef()
  const ico = useRef()
  const ring1 = useRef()
  const ring2 = useRef()
  const ring3 = useRef()
  const { accentColor, emissiveColor } = useThreeTheme()
  const isMobile = useMobile()
  const { viewport, mouse } = useThree()

  useEffect(() => {
    // no-op: geometries created in JSX
  }, [])

  useFrame((state, dt) => {
    if (!group.current) return
    const t = state.clock.getElapsedTime()
    if (ico.current) {
      ico.current.rotation.y += 0.004
      ico.current.rotation.x += 0.002
    }
    const scale = Math.sin(t) * 0.05 + 1
    group.current.scale.setScalar(scale)

    // ring rotations
    if (ring1.current) ring1.current.rotation.z += 0.3 * dt
    if (ring2.current) ring2.current.rotation.x += 0.2 * dt
    if (ring3.current) ring3.current.rotation.y += -0.15 * dt

    // mouse tracking (lerp)
    const mx = (mouse.x * viewport.width) * 0.02
    const my = (mouse.y * viewport.height) * 0.02
    group.current.rotation.x += (my - group.current.rotation.x) * 0.05
    group.current.rotation.y += (mx - group.current.rotation.y) * 0.05
  })

  return (
    <group ref={group} position={isMobile ? [0, 0, 0] : [2.5, 0, 0]}>
      <mesh ref={ico}>
        <icosahedronGeometry args={[1.5, 1]} />
        <meshStandardMaterial color={accentColor} wireframe opacity={0.6} transparent emissive={emissiveColor} emissiveIntensity={0.6} />
      </mesh>

      <mesh position={[0, 0, 0]} ref={ring1}>
        <torusGeometry args={[2.2, 0.008, 16, 100]} />
        <meshStandardMaterial color={accentColor} emissive={emissiveColor} emissiveIntensity={2} />
      </mesh>

      <mesh position={[0, 0, 0]} rotation={[Math.PI / 4, 0, 0]} ref={ring2}>
        <torusGeometry args={[2.0, 0.008, 16, 100]} />
        <meshStandardMaterial color={accentColor} emissive={emissiveColor} emissiveIntensity={2} />
      </mesh>

      <mesh position={[0, 0, 0]} rotation={[0, Math.PI * 0.444, 0]} ref={ring3}>
        <torusGeometry args={[2.4, 0.008, 16, 100]} />
        <meshStandardMaterial color={accentColor} emissive={emissiveColor} emissiveIntensity={2} />
      </mesh>

      <mesh position={[0,0,0]}>
        <icosahedronGeometry args={[1.3,0]} />
        <meshPhongMaterial color={accentColor} opacity={0.05} transparent />
      </mesh>
    </group>
  )
}
