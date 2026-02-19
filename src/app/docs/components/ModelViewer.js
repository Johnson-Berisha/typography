'use client'
import { Canvas } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'

function Model({ url, color }) {
    const { scene } = useGLTF(url)

    // Apply color to all meshes
    scene.traverse((child) => {
        if (child.isMesh) child.material.color.set(color)
    })

    return <primitive
        object={scene}
        rotation={[0, 50, 0]}
    />
}

export default function ModelViewer() {
    return (
        <Canvas camera={{ position: [0, 1, 3] }}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[5, 5, 5]} />
            <Model url="/f-letter/source/letterF.glb" color="orange" />
        </Canvas>
    )
}
