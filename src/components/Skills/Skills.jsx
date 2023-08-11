import React, {useEffect, useState , useRef} from 'react'
import "./Skills.css"
import { Canvas, useFrame , useThree } from '@react-three/fiber'
import {  useGLTF,Text } from '@react-three/drei'
import gsap from "gsap"



const Icon = ({ skill,mouseX, mouseY }) => {
  const img = useGLTF(skill.logo);
  const imgRef = useRef();
  const dirLight = useRef();
  const [posY,setPosY] = useState(2)


const shineLight = ()=>{
  console.log("shine light!")
  dirLight.current.position.y = 3;
  gsap.to(imgRef.current.position,{z:.5,duration:2})

}

const removeLight=()=>{
  console.log("remove light!")
  dirLight.current.position.y = -100;
  gsap.to(imgRef.current.position,{z:0,duration:2})


}




  return (
    <group>
      <directionalLight ref={dirLight} position={[2, -500, 2]} />
      <primitive
        onPointerEnter={shineLight}
        onPointerLeave={removeLight}
        ref={imgRef}
        scale={skill.scale}
        position={skill.position}
        rotation={skill.rotation}
        object={img.scene}
      ></primitive>
    </group>
  );
};



const SkillsHeader=()=>{
  const textRef = useRef();
  // let oscillationRange = 0.05;
  // let oscillationSpeed = 0.05;
  let deltaY = .002;
  const [textPos,setTextPos] = useState([0,2,0])

  useEffect(()=>{
    if(innerWidth < 650){
      setTextPos([0,6.35,-5])
    }
  },[])

  useFrame((state,delta)=>{
 

    // Calculate the oscillation angle based on time and speed
    //  oscillationAngle = currentTime;

    // Update the Y rotation of the text
    // textRef.current.rotation.y = -Math.PI * 0.05 + oscillationAngle;
    textRef.current.rotation.y += deltaY;
    if(Math.abs(textRef.current.rotation.y) > .21){
      deltaY *= -1
    }
    textRef.current.position.y += deltaY;
    // textRef.current.rotation.y = -Math.PI * 0.05 + oscillationAngle;
  })


  return(
    <Text ref={textRef} rotation={[0,-Math.PI * .05,0]} position={textPos}>
    Favorite Tools
   </Text>
  )
}



const Skills = () => {
  const [mouseX,setMouseX] = useState(0)
  const [mouseY,setMouseY] = useState(0)
  const [skills,setSkills] = useState([
    {id:1,name:"HTML5",years:"5",logo:"html.glb",scale:.5,position:[-4,-3,0],rotation:[0,0,0]},
    {id:2,name:"CSS3",years:"5",logo:"css.glb",scale:.5,position:[-.5,-3,0],rotation:[0,0,0]},
    {id:3,name:"React",years:"5",logo:"react_logo.glb",scale:.8, position:[3.5,-1.5,0],rotation:[0,0,0]},
  ])




  useEffect(()=>{
    if(innerWidth < 650){
setSkills(()=>[
  {id:1,name:"HTML5",years:"5",logo:"html.glb",scale:.2,position:[-1,1,0],rotation:[0,0,0]},
  {id:2,name:"CSS3",years:"5",logo:"css.glb",scale:.25,position:[-1.25,-.85,0],rotation:[0,0,0]},
  {id:3,name:"React",years:"5",logo:"react_logo.glb",scale:.35,position:[-1,-1.85,0],rotation:[0,0,0]},
])
    }
  },[])
  return (
    <div id="skills" className="page">
     
  
             <Canvas>
         <color attach="background" args={["black"]}/>
       <SkillsHeader/>
         <ambientLight/>
         {/* <OrbitControls enableZoom={false}/> */}
        {/* <SkillItem key={s.id} skill={s}/> */}
        {/* <ScrollControls pages={3}>
          <Scroll> */}
        <Icon mouseX={mouseX} mouseY={mouseY} skill={skills[0]} changeY={.005}/>
        <Icon mouseX={mouseX} mouseY={mouseY} skill={skills[1]} changeY={.008}/>
        <Icon mouseX={mouseX} mouseY={mouseY} skill={skills[2]} changeY={.011}/>
        {/* </Scroll>
        </ScrollControls> */}
        {/* <primitive  scale={skills[0].scale} position={skills[0].position} rotation={skills[0].rotation} object={htmlImg.scene}></primitive>
        <primitive  scale={skills[1].scale} position={skills[1].position} rotation={skills[1].rotation} object={cssImg.scene}></primitive>
        <primitive  scale={skills[2].scale} position={skills[2].position} rotation={skills[2].rotation} object={reactlImg.scene}></primitive> */}

        </Canvas>
  
    </div>
  )
}

export default Skills