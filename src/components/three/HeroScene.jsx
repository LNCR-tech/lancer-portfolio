import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { EffectComposer, Bloom, ChromaticAberration } from '@react-three/postprocessing'
import { BlendFunction } from 'postprocessing'
import ParticleField from './ParticleField'
import FloatingGeometry from './FloatingGeometry'
import CyberGrid from './CyberGrid'
import useReducedMotion from '../../hooks/useReducedMotion'

export default function HeroScene() {
  const reduced = useReducedMotion()

  return (
    <div className="absolute inset-0 -z-10 pointer-events-none">
      <Suspense fallback={null}>
        <Canvas
          camera={{ position: [0, 0, 5], fov: 60 }}
          style={{ position: 'absolute', inset: 0 }}
          gl={{ alpha: true, antialias: true }}
          dpr={[1, 1.5]}
          frameloop={reduced ? 'demand' : 'demand'}
        >
          <ambientLight intensity={0.4} />
          <pointLight position={[5, 5, 5]} intensity={1} color="#00d4ff" />
          <pointLight position={[-5, -5, -5]} intensity={0.5} color="#1e90ff" />

          <ParticleField />
          <FloatingGeometry />
          <CyberGrid />

          {!reduced && (
            <EffectComposer>
              <Bloom luminanceThreshold={0.1} luminanceSmoothing={0.9} intensity={1.2} />
              <ChromaticAberration blendFunction={BlendFunction.NORMAL} offset={[0.0008, 0.0008]} />
            </EffectComposer>
          )}
        </Canvas>
      </Suspense>
    </div>
  )
}
