import React, {useState,useRef, useEffect} from 'react'
import {Canvas} from "@react-three/fiber"
import {Plane, useGLTF} from "@react-three/drei";
import { Laptop } from './components'
import {Loader} from ".."
import "./Hero.css"

const Hero = () => {
    const [mouseX,setMouseX] = useState(0);
    const [intensity,setIntensity] = useState(1);
    const [showCanvas,setShowCanvas] = useState(false)
    const img = useGLTF("laptop.glb");



    useEffect(()=>{

        let loaderTimer = setInterval(()=>setShowCanvas(true),1500)

        return ()=>clearTimeout(loaderTimer)
    })



    const handleMouseMove = (event) => {
        setMouseX(event.clientX - innerWidth / 2);
        setIntensity(2)
        // console.log('mouse moving!',mouseX)
    };

    const handleMouseOut=()=>{
        // setMouseX(innerWidth/2)
        setIntensity(1)
    }
  return (
    <header onMouseMove={handleMouseMove} onMouseOut={handleMouseOut} className="hero">
        {showCanvas ? 
        <Canvas style={{height:'70vh',margin:'0 auto',width:'100vw'}}>
            {/* <color attach="background" args={["red"]}/> */}
            <ambientLight intensity={.2}/>
            <spotLight position={[0,2,0]}/>
            <Plane args={[30,25]} position={[0,0,-6]}>
                <meshBasicMaterial color="white"/>
            </Plane>
    <Laptop img={img} mouseX={mouseX} intensity={intensity}/>
        </Canvas>
 
        : 
        <Loader/>
}
    </header>
  )
}

export default Hero