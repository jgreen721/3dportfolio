import React , {useRef} from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF,OrbitControls } from '@react-three/drei'

const SkillItem = ({skill}) => {
    const img = useGLTF(skill.logo)
    const shapeRef = useRef();
    console.log(img)

    useFrame(()=>{
        // shapeRef.current.rotation.x += .01;
        // shapeRef.current.rotation.y += .003;
    })
  return (

          <primitive ref={shapeRef} scale={skill.scale} position={skill.position} rotation={skill.rotation} object={img.scene}></primitive>
  

  )
}

export default SkillItem