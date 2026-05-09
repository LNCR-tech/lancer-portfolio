import React, { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { ShaderMaterial, Vector2 } from 'three'
import useReducedMotion from '../../hooks/useReducedMotion'
import useThreeTheme from '../../hooks/useThreeTheme'

const vertex = `
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`

const fragment = `
uniform float u_time;
uniform vec3 u_color;
varying vec2 vUv;

float grid(vec2 uv, float scale) {
  uv *= scale;
  vec2 gv = fract(uv) - 0.5;
  vec2 id = floor(uv);
  float line = step(0.48, abs(gv.x)) + step(0.48, abs(gv.y));
  return clamp(line, 0.0, 1.0);
}

void main(){
  vec2 uv = vUv;
  uv.y -= u_time * 0.05;
  float g = grid(uv - 0.5, 30.0);
  float dist = length(uv - 0.5);
  float fade = smoothstep(0.8, 0.3, dist);
  vec3 col = mix(vec3(0.0), u_color, g * fade);
  gl_FragColor = vec4(col, g * 0.8 * fade);
}
`

export default function CyberGrid() {
  const mesh = useRef()
  const mat = useRef()
  const reduced = useReducedMotion()
  const { accentColor } = useThreeTheme()

  const uniforms = useMemo(() => ({ u_time: { value: 0 }, u_color: { value: [0.0, 0.83, 1.0] } }), [])

  useFrame((state) => {
    if (mat.current) mat.current.uniforms.u_time.value = state.clock.elapsedTime
  })

  return (
    <mesh ref={mesh} rotation={[-Math.PI / 2, 0, 0]} position={[0, -2.5, 0]}>
      <planeGeometry args={[30, 30, 30, 30]} />
      <shaderMaterial ref={mat} uniforms={uniforms} vertexShader={vertex} fragmentShader={fragment} transparent depthWrite={false} />
    </mesh>
  )
}
