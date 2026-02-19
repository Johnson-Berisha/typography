'use client'
import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { useRef, useEffect, useState } from 'react'

function Model({ url, color, scrollY }) {
    const ref = useRef()
    const { scene } = useGLTF(url)

    scene.traverse((child) => {
        if (child.isMesh) child.material.color.set(color)
    })

    useFrame(() => {
        if (ref.current) {
            ref.current.rotation.y = 50 - scrollY / 5000
            ref.current.position.y = Math.sin(scrollY / 500) * 0.5 //  up and down blyat
        }
    })

    return (
        <primitive
            ref={ref}
            object={scene}
            scale={3}
            rotation={[0, 50, 0]}
        />
    )
}

export default function ModelViewer() {
    const [scrollY, setScrollY] = useState(0)

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <Canvas camera={{ position: [0, 1, 3] }}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[5, 5, 5]} />
            <Model url="/f-letter/source/letterF.glb" color="#ed7e34" scrollY={scrollY} />
        </Canvas>
    )
}
